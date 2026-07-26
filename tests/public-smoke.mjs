import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const read = (path) => readFileSync(join(ROOT, path), "utf8");
const html = read("index.html");
const appSource = read("app.js");
const swSource = read("sw.js");
const readmeSource = read("README.md");
const showcaseScreenshot = "docs/screenshots/english-compass-v111-dashboard.png";

assert.ok(existsSync(join(ROOT, showcaseScreenshot)), "README showcase screenshot should exist");
assert.ok(statSync(join(ROOT, showcaseScreenshot)).size > 500_000, "showcase screenshot should contain the full desktop interface");
assert.match(readmeSource, /english-compass-v111-dashboard\.png/u, "README should display the showcase screenshot");
assert.match(readmeSource, /精美萌系二次元视觉/u, "README should foreground the anime visual direction");
assert.match(readmeSource, /六项能力学习闭环/u, "README should explain the connected six-skill workflow");
assert.match(readmeSource, /10 套/u, "README should highlight the short-paper assessment design");

const scriptNames = [...html.matchAll(/<script src="([^"]+)"><\/script>/gu)].map((match) => match[1]);
const contentIndex = scriptNames.indexOf("content.js");
assert.ok(contentIndex > 0, "index.html should load content.js after the versioned content packs");
assert.equal(scriptNames.at(-1), "app.js", "app.js should load last");

const context = { window: {} };
vm.createContext(context);
for (const scriptName of scriptNames.slice(0, contentIndex + 1)) {
  vm.runInContext(read(scriptName), context, { filename: scriptName });
}

const content = context.window.ENGLISH_COMPASS_CONTENT;
assert.ok(content, "content.js should expose ENGLISH_COMPASS_CONTENT");
assert.equal(content.version, "1.12.0");
assert.deepEqual(
  {
    vocabulary: content.vocabulary.length,
    grammar: content.grammar.length,
    translations: content.translations.length,
    listening: content.listening.length,
    speaking: content.speaking.length,
    reading: content.reading.length
  },
  { vocabulary: 4500, grammar: 340, translations: 640, listening: 640, speaking: 500, reading: 260 }
);

const unique = (values, label) => assert.equal(new Set(values).size, values.length, `${label} should be unique`);
unique(content.vocabulary.map((item) => item.id), "vocabulary ids");
unique(content.vocabulary.map((item) => item.word.trim().toLocaleLowerCase("en-US")), "vocabulary surfaces");
unique(content.grammar.map((item) => item.quiz.question.trim().toLocaleLowerCase("en-US")), "grammar questions");
unique(content.translations.map((item) => item.source.trim()), "translation prompts");
unique(content.listening.map((item) => item.text.trim().toLocaleLowerCase("en-US")), "listening passages");
unique(content.speaking.map((item) => item.prompt.trim().toLocaleLowerCase("en-US")), "speaking prompts");
unique(content.reading.map((item) => item.passage.trim().toLocaleLowerCase("en-US")), "reading passages");

assert.ok(content.grammar.every((item) => Number.isInteger(item.quiz.answer) && item.quiz.answer >= 0 && item.quiz.answer < item.quiz.options.length));
assert.ok(content.translations.every((item) => typeof item.answer === "string" && item.answer.trim() && Array.isArray(item.alternatives) && item.alternatives.length));
assert.ok(content.listening.every((item) => Number.isInteger(item.answer) && item.answer >= 0 && item.answer < item.options.length));
assert.ok(content.speaking.every((item) => Array.isArray(item.keywords) && item.keywords.length));
assert.ok(content.reading.every((item) => item.questions.length === 3));
assert.equal(content.reading.reduce((sum, item) => sum + item.questions.length, 0), 780);

assert.equal((html.match(/data-assessment-paper=/gu) || []).length, 10, "public UI should expose ten assessment papers");
assert.match(html, /10 套共 350 题/u);
assert.match(appSource, /const ASSESSMENT_PAPER_COUNT = 10;/u);
assert.match(appSource, /const ASSESSMENT_QUESTIONS_PER_PAPER = 35;/u);

const shellMatch = swSource.match(/const APP_SHELL = (\[[\s\S]*?\]);/u);
assert.ok(shellMatch, "service worker should expose a literal APP_SHELL array");
const appShell = JSON.parse(shellMatch[1]);
unique(appShell, "service-worker entries");
assert.match(swSource, /english-compass-public-v1\.12\.0/u);
for (const entry of appShell) {
  if (entry === "./") continue;
  assert.ok(existsSync(join(ROOT, entry.replace(/^\.\//u, ""))), `cached file should exist: ${entry}`);
}

const assetFiles = readdirSync(join(ROOT, "assets")).sort();
assert.ok(assetFiles.includes("README.md"), "public asset policy should be present");
assert.ok(assetFiles.includes("icon.svg"), "the existing project icon should be present");
assert.match(appSource, /assets\/key-primadoll-haizakura-portrait\.png/u, "source should retain the existing Key artwork path");
assert.match(appSource, /assets\/minchi-station-evening\.jpg/u, "source should retain the existing Minchi artwork path");
assert.doesNotMatch(appSource, /public-sakura/u, "public source should not replace the existing project art with a generated placeholder");
const ignoreSource = read(".gitignore");
assert.match(ignoreSource, /assets\/\*/u, "local raster art should be ignored by Git");
assert.match(ignoreSource, /!assets\/icon\.svg/u, "the project icon should remain publishable");
assert.match(ignoreSource, /!assets\/README\.md/u, "the local art instructions should remain publishable");

const walk = (directory) => readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
  if (entry.name === ".git") return [];
  const absolute = join(directory, entry.name);
  return entry.isDirectory() ? walk(absolute) : [absolute];
});
const publicFiles = walk(ROOT);

const sensitivePatterns = [
  /C:\\Users\\/iu,
  /AppData[\\/]Local[\\/]Temp/iu,
  /codex-clipboard/iu,
  /github_pat_[A-Za-z0-9_]{16,}/u,
  /ghp_[A-Za-z0-9]{20,}/u,
  /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/u,
  /D:\\EnglishCoach/iu
];
for (const file of publicFiles.filter((item) => /\.(?:html|css|js|mjs|md|json|webmanifest|ya?ml|gitignore)$/iu.test(item) && relative(ROOT, item) !== "tests\\public-smoke.mjs" && relative(ROOT, item) !== "tests/public-smoke.mjs")) {
  const source = readFileSync(file, "utf8");
  for (const pattern of sensitivePatterns) {
    assert.doesNotMatch(source, pattern, `sensitive local data found in ${relative(ROOT, file)}`);
  }
}

console.log(JSON.stringify({
  ok: true,
  contentVersion: content.version,
  counts: {
    vocabulary: content.vocabulary.length,
    grammar: content.grammar.length,
    translations: content.translations.length,
    listening: content.listening.length,
    speaking: content.speaking.length,
    reading: content.reading.length,
    readingQuestions: 780,
    assessmentPapers: 10,
    questionsPerAssessmentPaper: 35
  },
  localAssetFiles: assetFiles.length,
  showcaseScreenshot,
  cachedFiles: appShell.length
}, null, 2));

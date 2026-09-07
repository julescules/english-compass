// English Compass v1.13 self-authored C1 practice expansion: advanced academic and professional communication.
(function () {
  "use strict";

  const situations = [
    ["panel-debate-framing","C1","学术研讨发言","Rosa","an academic panel discussion","frame a disagreement as a testable question","我们的分歧其实可以检验：如果模型正确，去年的数据应当显示出季节性峰值，而事实并非如此。","Our disagreement is actually testable: if the model were correct, last year's data should show a seasonal peak, and in fact it does not.","我建议我们先就检验标准达成一致，再继续辩论结论。","I suggest we first agree on the test criteria before continuing to debate the conclusion.","testable:可检验的;seasonal peak:季节性峰值;criteria:标准"],
    ["grant-proposal-defence","C1","科研经费答辩","Emil","a funding committee hearing","defend a budget line with contingency logic","设备预算看似偏高，是因为其中包含一次校准服务和两年维护；如果削减这部分，后期故障将由更昂贵的临时合同来弥补。","The equipment budget appears high because it includes a calibration service and two years of maintenance; if this part is cut, later failures will be covered by far more expensive ad hoc contracts.","我们可以接受分期拨款，但请把校准列为不可削减项。","We can accept staged funding, but please treat the calibration as a non-negotiable item.","calibration:校准;ad hoc:临时的;staged funding:分期拨款"],
    ["merger-communication","C1","并购沟通","Sana","an all-hands merger briefing","address job-security questions without overpromising","我不会承诺没有任何岗位调整，因为那不诚实；我能承诺的是：任何调整都会提前六十天沟通，并附带内部转岗优先权。","I will not promise that no roles will change, because that would be dishonest; what I can promise is that any change will be communicated sixty days in advance and will come with priority access to internal transfers.","下周起，我们每周五发布一次整合进展与决策记录。","Starting next week, we will publish integration progress and decision records every Friday.","integration:整合;internal transfer:内部转岗;priority access:优先权"],
    ["policy-brief-summary","C1","政策简报","Viktor","a ministerial briefing room","compress a complex study into decision options","三个方案的证据强度并不相同：方案A有两项独立评估支持，方案B只有建模结果，方案C尚缺乏实证依据。","The three options are not supported by evidence of equal strength: option A rests on two independent evaluations, option B only on modelling results, and option C still lacks empirical support.","若时间允许，我建议为方案C先设立一个小规模试点。","If time permits, I recommend establishing a small-scale pilot for option C first.","independent evaluation:独立评估;empirical:实证的;pilot:试点"],
    ["contract-ambiguity","C1","合同歧义澄清","Anouk","a contract review call","resolve an ambiguous renewal clause before signing","第七条中的“自动续期”没有写明通知期限，按照对起草方不利的解释规则，这一模糊之处可能对贵方不利，因此建议双方现在就写明九十天。","The automatic renewal in clause seven specifies no notice period, and under the rule that ambiguity is construed against the drafter, this vagueness could work against your side, so I propose we both specify ninety days now.","请贵方法务确认修订文本后，我们再安排签署。","Once your legal team confirms the revised wording, we can schedule the signing.","renewal:续期;notice period:通知期限;drafter:起草方"],
    ["crisis-press-statement","C1","危机声明","Tariq","an emergency communications room","draft a first statement that admits uncertainty","首份声明必须只包含已核实的三件事：事件时间、受影响的服务范围、以及我们下一次通报的确切时间；原因分析在确认前一律不写。","The first statement must contain only three verified facts: when the incident began, which services are affected, and the exact time of our next update; any analysis of causes stays out until confirmed.","所有渠道的口径以这份声明为准，任何补充回答都需经我确认。","Every channel takes its wording from this statement, and any additional answers need my sign-off.","verified:已核实的;incident:事件;sign-off:批准"],
    ["algorithm-accountability","C1","算法问责","Freya","a product ethics review board","require explainability before deployment","在拒绝贷款这类高影响决定中，如果系统无法给出申请人能够理解并申诉的理由，那么无论准确率多高，都不应当上线。","For high-impact decisions such as declining a loan, if the system cannot give reasons an applicant can understand and appeal, it should not go live regardless of how accurate it is.","我们要求团队在下次评审前提交一份可解释性与申诉流程的联合方案。","We require the team to submit a joint plan for explainability and appeals before the next review.","high-impact:高影响的;appeal:申诉;explainability:可解释性"],
    ["salary-band-transparency","C1","薪酬透明提案","Dmitri","a compensation committee meeting","propose salary bands with transition safeguards","公布薪酬带宽会暴露历史上的不一致，因此方案必须同时包含：一次性的差距校正预算，以及为期一年的申诉窗口。","Publishing salary bands will expose historical inconsistencies, so the proposal must include both a one-off budget to correct gaps and a twelve-month window for appeals.","校正顺序按偏差幅度而非职级高低执行，并由外部顾问复核。","Corrections will be sequenced by the size of the gap rather than by seniority, and an external adviser will verify them.","salary band:薪酬带宽;inconsistencies:不一致;external adviser:外部顾问"],
    ["research-authorship","C1","论文署名协商","Ines","a research group meeting","allocate authorship by documented contribution","署名顺序应当依据贡献记录而不是资历：谁设计了实验、谁完成了分析、谁撰写了初稿，在项目日志里都有据可查。","Authorship order should follow the documented contributions rather than seniority: who designed the experiment, who performed the analysis, and who wrote the first draft are all traceable in the project log.","有异议的成员请在周五前把书面说明提交给通讯作者。","Anyone who disagrees should submit a written note to the corresponding author by Friday.","authorship:署名;traceable:可查证的;corresponding author:通讯作者"],
    ["supply-chain-ethics","C1","供应链伦理","Kofi","a supplier audit review","act on an adverse audit without abandoning workers","直接终止合作虽然最省事，却会让受影响的工人失去生计；更负责任的做法是限期整改、复查验证，并把改进义务写入续约条款。","Simply terminating the contract would be easiest, yet it would cost the affected workers their livelihoods; the more responsible course is a corrective deadline, a follow-up audit, and improvement obligations written into the renewal.","若复查仍不达标，我们将在九十天内有序退出并公开原因。","If the follow-up audit still fails, we will exit in an orderly way within ninety days and publish the reasons.","corrective:整改的;livelihood:生计;orderly:有序的"],
    ["keynote-qa-challenge","C1","主旨演讲问答","Maren","a conference question session","answer a hostile question with evidence","这个问题预设我们的数据只来自单一地区，但事实并非如此：样本覆盖四个国家，而且地区差异本身就是论文的第二个发现。","The question assumes our data come from a single region, which is not the case: the sample covers four countries, and the regional variation is itself the paper's second finding.","会后我很乐意分享分地区的完整结果，欢迎当面讨论。","After the session I would be glad to share the full regional breakdown and discuss it in person.","assume:预设;variation:差异;breakdown:细分结果"],
    ["restructuring-townhall","C1","重组说明会","Selim","a company town hall","explain a restructuring decision chain","这次重组不是为了削减成本，而是因为两个部门在同一市场上互相竞争；保留现状一年的代价，是我们已经流失了三个大客户。","This restructuring is not about cutting costs; it is because two divisions have been competing in the same market, and the price of keeping things unchanged for a year has been the loss of three major clients.","每位受影响的员工都会收到书面的岗位选项和时间表。","Every affected employee will receive their role options and timeline in writing.","restructuring:重组;division:部门;timeline:时间表"],
    ["regulatory-consultation","C1","监管意见回复","Greta","a regulatory consultation deadline","respond to a draft rule with implementation data","我们支持规则的目标，但按草案的六个月过渡期，行业内的中小企业无法完成系统改造；我们的实施数据表明十二个月才是现实的。","We support the rule's objective, but under the draft's six-month transition small firms in the sector cannot complete the system changes; our implementation data indicate that twelve months is realistic.","附件中包含三家不同规模企业的改造成本与时间明细。","The annex details the upgrade costs and timelines of three firms of different sizes.","transition:过渡期;implementation:实施;annex:附件"],
    ["data-retention-debate","C1","数据保留辩论","Bao","a data governance council","argue for minimal retention balanced against audit needs","无限期保留所有日志既增加泄露面又违反最小化原则；保留十八个月足以覆盖审计周期，其余数据应匿名化归档。","Retaining every log indefinitely both widens the breach surface and violates the minimisation principle; eighteen months covers the audit cycle, and older data should be anonymised for archiving.","法务、安全与审计三方会签后，新的保留表下月生效。","After legal, security, and audit jointly sign off, the new retention schedule takes effect next month.","retention:保留;breach surface:泄露面;anonymised:匿名化的"],
    ["mentorship-programme-pitch","C1","导师制提案","Leila","a leadership budget review","argue for mentorship with attrition economics","高潜员工离职的重置成本约为年薪的一点五倍，而导师制试点组的留任率高出十四个百分点，这笔投入在财务上是自洽的。","Replacing a high-potential employee costs roughly one and a half times their annual salary, while the mentoring pilot group retained staff at a rate fourteen points higher, so the investment is financially self-justifying.","我建议第二期扩大到两个部门，并预登记对照指标。","I propose extending the second phase to two departments and preregistering the comparison metrics.","high-potential:高潜的;retain:留任;metrics:指标"],
    ["academic-integrity-case","C1","学术诚信处理","Casper","an academic integrity panel","separate honest error from misconduct","判定的关键是区分诚实的错误与故意的不当行为：作者在被指出前已自行更正数据，并保留了完整的分析记录。","The key judgement is separating honest error from deliberate misconduct: the author corrected the data before being challenged and kept a complete record of the analysis.","我们建议以更正启事结案，同时要求实验室改进数据核对流程。","We recommend closing the case with a correction notice while requiring the laboratory to improve its data-checking procedure.","misconduct:不当行为;deliberate:故意的;correction notice:更正启事"],
    ["cross-border-tax-query","C1","跨境税务咨询","Yara","an international tax consultation","clarify residency-based obligations under a treaty","我过去一年在两个国家分别工作了四个月和五个月，请依据税收协定说明我的税务居民身份如何认定，以及双重征税如何抵免。","I worked four months in one country and five in another during the past year; please explain how my tax residency is determined under the treaty and how double taxation is credited.","如需申报两地收入，请列出各自的申报截止日与所需文件。","If I must file in both countries, please list each filing deadline and the documents required.","residency:居民身份;treaty:协定;double taxation:双重征税"],
    ["sustainability-reporting","C1","可持续报告","Anders","a reporting standards meeting","defend conservative emissions accounting","把外包运输排除在核算之外虽然让数字更好看，却会在审验时构成重大遗漏；我主张按运营控制口径完整披露，并注明数据质量分级。","Excluding outsourced transport makes the numbers look better but would count as a material omission at assurance; I argue for full disclosure under the operational control approach with data-quality tiers noted.","第三方审验机构的意见函将随报告一并发布。","The assurance provider's opinion letter will be published together with the report.","omission:遗漏;disclosure:披露;assurance:审验"],
    ["product-sunset-announcement","C1","产品停服公告","Zoya","a product deprecation announcement","retire a product without stranding users","停止维护不等于立刻关闭：我们承诺再提供十二个月的安全更新、一键导出工具，以及到两家替代产品的迁移指南。","Ending maintenance does not mean an immediate shutdown: we commit to twelve further months of security updates, a one-click export tool, and migration guides to two alternative products.","企业客户可申请延长支持，费用仅覆盖成本并写入合同。","Enterprise customers may request extended support, priced at cost and written into the contract.","deprecation:停止维护;migration:迁移;at cost:按成本"],
    ["bias-audit-findings","C1","偏见审计汇报","Ren","an internal audit presentation","report bias findings with corrective priorities","审计发现筛选环节对非母语申请者的通过率低了九个百分点，主要原因是简历解析器对非常规格式的惩罚，而不是评审者的主观判断。","The audit found the screening stage passed non-native applicants at a rate nine points lower, driven mainly by the résumé parser penalising unconventional formats rather than by reviewers' judgement.","我们将优先修复解析器，并在两个季度后复测同一指标。","We will fix the parser first and re-test the same metric after two quarters.","screening:筛选;parser:解析器;metric:指标"]
  ].map(([slug, level, topic, person, place, purpose, sourceZh, target, followZh, follow, terms]) => Object.freeze({
    slug, level, topic, person, place, purpose, sourceZh, target, followZh, follow,
    vocabulary: Object.freeze(terms.split(";").map((pair) => {
      const splitAt = pair.indexOf(":");
      return Object.freeze({ word: pair.slice(0, splitAt), meaning: pair.slice(splitAt + 1) });
    }))
  }));

  const alternativesBySlug = Object.freeze({
    "panel-debate-framing": Object.freeze([
      "Our dispute can in fact be tested: were the model right, last year's data would display a seasonal peak, and it does not.",
      "Let us settle the test criteria first and only then return to debating the conclusion."
    ]),
    "grant-proposal-defence": Object.freeze([
      "The equipment line looks inflated only because it bundles a calibration service with two years of maintenance; cutting it would shift failures onto far costlier ad hoc contracts.",
      "Staged funding is acceptable to us, provided the calibration remains a protected item."
    ]),
    "merger-communication": Object.freeze([
      "Promising that no roles will change would be dishonest, so instead I promise that every change comes with sixty days' notice and priority for internal transfers.",
      "From next week, integration progress and decision records will go out every Friday."
    ]),
    "policy-brief-summary": Object.freeze([
      "The evidence behind the three options differs in strength: two independent evaluations support option A, only modelling supports option B, and option C has no empirical backing yet.",
      "Time permitting, I would begin with a small-scale pilot of option C."
    ]),
    "contract-ambiguity": Object.freeze([
      "Clause seven's automatic renewal names no notice period, and since ambiguity is read against the drafter, that vagueness could hurt your side, so let us write in ninety days now.",
      "As soon as your legal team approves the revised text, we can set a signing date."
    ]),
    "crisis-press-statement": Object.freeze([
      "The opening statement carries only three verified facts — the start time, the affected services, and the exact time of the next update — with causal analysis held back until confirmed.",
      "This statement sets the wording for every channel, and further answers require my approval."
    ]),
    "algorithm-accountability": Object.freeze([
      "Where a decision is as consequential as refusing a loan, a system that cannot give reasons the applicant can grasp and appeal should stay offline, however accurate it is.",
      "Before the next review, the team must deliver a combined plan covering explainability and appeals."
    ]),
    "salary-band-transparency": Object.freeze([
      "Making the bands public will surface historical inconsistencies, so the plan needs both a one-off correction budget and a year-long appeal window.",
      "Gaps will be corrected in order of size rather than rank, with an external adviser verifying each step."
    ]),
    "research-authorship": Object.freeze([
      "The order of authors ought to track the documented record, not seniority: the project log shows who designed, who analysed, and who drafted.",
      "Members with objections should send a written note to the corresponding author before Friday."
    ]),
    "supply-chain-ethics": Object.freeze([
      "Walking away is the easy option, but it strips the workers of their livelihoods; the responsible path is a corrective deadline, a re-audit, and improvement duties written into the renewal.",
      "Should the re-audit fail, we will withdraw in an orderly fashion within ninety days and state our reasons publicly."
    ]),
    "keynote-qa-challenge": Object.freeze([
      "That question rests on the premise that our data are single-region, which they are not: four countries are covered, and the regional variation is the paper's second result.",
      "I would be happy to share the regional breakdown after the session and talk it through in person."
    ]),
    "restructuring-townhall": Object.freeze([
      "Cost-cutting is not the driver here; two divisions have been competing for the same market, and a year of inaction has already cost us three major clients.",
      "Each affected employee will get their options and the timeline in writing."
    ]),
    "regulatory-consultation": Object.freeze([
      "We back the rule's aim, yet the draft's six-month transition is beyond what small firms can deliver; our implementation data point to twelve months as realistic.",
      "Attached is an annex with upgrade costs and timelines from three firms of different sizes."
    ]),
    "data-retention-debate": Object.freeze([
      "Keeping every log forever enlarges the breach surface and breaches the minimisation principle; eighteen months spans the audit cycle, with older data anonymised into the archive.",
      "Once legal, security, and audit have all signed, the new retention schedule starts next month."
    ]),
    "mentorship-programme-pitch": Object.freeze([
      "Losing a high-potential employee costs about one and a half annual salaries, while the mentoring pilot lifted retention by fourteen points, so the spending justifies itself.",
      "For phase two, I suggest covering two departments and preregistering the comparison metrics."
    ]),
    "academic-integrity-case": Object.freeze([
      "Everything turns on distinguishing honest error from deliberate misconduct: the author fixed the data before any challenge and preserved the full analysis record.",
      "Our recommendation is a correction notice to close the case, plus an improved data-checking procedure in the laboratory."
    ]),
    "cross-border-tax-query": Object.freeze([
      "Having worked four months in one country and five in another over the past year, I need the treaty rules on how my tax residency is decided and how double taxation is credited.",
      "Should filings be needed in both countries, please set out each deadline and the required documents."
    ]),
    "sustainability-reporting": Object.freeze([
      "Leaving outsourced transport out of the accounts flatters the figures but becomes a material omission at assurance; I favour full disclosure under operational control with quality tiers marked.",
      "The opinion letter from the assurance provider will be released alongside the report."
    ]),
    "product-sunset-announcement": Object.freeze([
      "The end of maintenance is not an immediate shutdown: twelve more months of security updates, a one-click export tool, and migration guides to two alternatives are all committed.",
      "Enterprise customers can ask for extended support, charged at cost and recorded in the contract."
    ]),
    "bias-audit-findings": Object.freeze([
      "The screening stage passed non-native applicants nine points less often, and the audit traces this mainly to the résumé parser punishing unusual formats, not to reviewer judgement.",
      "The parser gets fixed first, and the same metric will be re-tested in two quarters."
    ])
  });

  const stopWords = new Set(["about", "after", "again", "before", "could", "every", "first", "from", "have", "should", "still", "their", "there", "these", "those", "through", "today", "which", "while", "would"]);
  const keywordList = (text) => Object.freeze(Array.from(new Set((text.toLowerCase().match(/[a-z]+(?:'[a-z]+)?/g) || [])
    .filter((word) => word.length >= 5 && !stopWords.has(word)))).slice(0, 4));
  const titleFromSlug = (slug) => slug.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  const rotateOptions = (items, answerIndex) => {
    const alternatives = items.slice(1);
    alternatives.splice(answerIndex, 0, items[0]);
    return alternatives;
  };
  const related = (index, key) => [situations[index], situations[(index + 5) % 20], situations[(index + 11) % 20], situations[(index + 16) % 20]].map((item) => item[key]);

  const translationRows = situations.flatMap((item, index) => [
    Object.freeze({
      id: `t680-${String(index * 2 + 1).padStart(3, "0")}`,
      context: item.topic,
      tone: "严谨、专业、可审计",
      source: item.sourceZh,
      answer: item.target,
      shortAnswer: item.target,
      alternatives: Object.freeze([alternativesBySlug[item.slug][0]]),
      chunks: Object.freeze([Object.freeze([item.sourceZh, item.target])]),
      hints: keywordList(item.target),
      level: item.level
    }),
    Object.freeze({
      id: `t680-${String(index * 2 + 2).padStart(3, "0")}`,
      context: `${item.topic} · 后续承诺`,
      tone: "明确、可执行",
      source: item.followZh,
      answer: item.follow,
      shortAnswer: item.follow,
      alternatives: Object.freeze([alternativesBySlug[item.slug][1]]),
      chunks: Object.freeze([Object.freeze([item.followZh, item.follow])]),
      hints: keywordList(item.follow),
      level: item.level
    })
  ]);

  const listeningRows = situations.flatMap((item, index) => [0, 1].map((variant) => {
    const answer = (index + variant * 2) % 4;
    const text = variant === 0 ? item.target : item.follow;
    const optionKey = variant === 0 ? "purpose" : "follow";
    return Object.freeze({
      id: `l680-${String(index * 2 + variant + 1).padStart(3, "0")}`,
      level: item.level,
      topic: item.topic,
      text,
      question: variant === 0
        ? `What is ${item.person} arguing for?`
        : `Which commitment does ${item.person} make?`,
      options: Object.freeze(rotateOptions(related(index, optionKey), answer)),
      answer,
      correctIndex: answer,
      keywords: keywordList(text)
    });
  }));

  const speakingRows = [
    ...situations.map((item, index) => Object.freeze({
      id: `s530-${String(index + 1).padStart(3, "0")}`,
      scenario: item.topic,
      title: item.topic,
      context: `在“${item.topic}”情境中完成一段 C1 级别的高阶英语表达。`,
      prompt: `Navigate this situation in English: ${item.purpose}. Setting: ${item.place}.`,
      target: item.target,
      sample: item.target,
      shortVersion: item.target,
      tip: "先界定可核实的事实与有争议的部分，再给出证据充分、边界清晰的立场。",
      keywords: keywordList(item.target),
      level: item.level
    })),
    ...situations.slice(0, 10).map((item, index) => Object.freeze({
      id: `s530-${String(index + 21).padStart(3, "0")}`,
      scenario: `${item.topic} · 承诺`,
      title: `${item.topic} · 承诺`,
      context: `延续“${item.topic}”的论证，给出可执行、可审计的后续承诺。`,
      prompt: `State the commitment that follows up your case. Setting: ${item.place}.`,
      target: item.follow,
      sample: item.follow,
      shortVersion: item.follow,
      tip: "用完整句给出时间、责任人或验证方式，让承诺可以被检验。",
      keywords: keywordList(item.follow),
      level: item.level
    }))
  ];

  const artSets = Object.freeze([
    Object.freeze({ passage: "assets/key-primadoll-otome-office.png", question: "assets/minchi-classroom-evening.jpg", translation: "assets/anime-v3-autumn-reader.jpg", scene: "assets/minchi-library-evening.jpg" }),
    Object.freeze({ passage: "assets/key-primadoll-gekka-kitchen.png", question: "assets/anime-v2-library-maid.jpg", translation: "assets/anime-v3-winter-student.jpg", scene: "assets/minchi-restaurant-evening.jpg" }),
    Object.freeze({ passage: "assets/key-primadoll-haizakura-portrait.png", question: "assets/anime-v2-classroom-guitar.jpg", translation: "assets/anime-v3-moon-pavilion.png", scene: "assets/minchi-station-evening.jpg" }),
    Object.freeze({ passage: "assets/key-primadoll-karasuba-cafe.png", question: "assets/anime-v2-autumn-garden.jpg", translation: "assets/anime-v3-sakura-lantern.jpg", scene: "assets/anime-v3-sakura-station.jpg" })
  ]);

  const readingCopy = (item) => ({
    passage: `${item.person} faced a situation at ${item.place} that demanded more than routine communication: the task was to ${item.purpose}, under conditions where evidence, obligations, and audiences pulled in different directions. Rather than opening with a position, ${item.person} mapped what was verifiable, what was contested, and what each party stood to lose. Only then did ${item.person} state the case: “${item.target}” The room tested the reasoning from several angles — precedent, cost, and the standard that similar cases would set. ${item.person} neither retreated into vagueness nor overstated the certainty of the analysis, adding instead a concrete commitment: “${item.follow}” By the close, the participants had converged not on unanimity but on a defensible course of action: one whose assumptions were explicit, whose evidence could be audited, and whose owner was named. The episode illustrates an advanced habit of professional discourse — treating disagreement as material to be structured rather than noise to be silenced.`,
    translationZh: `${item.person}在${item.place}面对的是一次超出常规沟通的任务：在证据、义务与不同受众相互牵扯的情况下完成“${item.topic}”。${item.person}没有一开始就亮明立场，而是先梳理哪些内容可以核实、哪些仍有争议、各方分别可能失去什么。此后${item.person}才陈述观点：“${item.sourceZh}”在场者从先例、成本以及类似情形将形成的标准等多个角度检验这一论证。${item.person}既没有退回到含糊其辞，也没有夸大分析的确定性，而是补充了一项具体承诺：“${item.followZh}”结束时，与会者达成的不是全体一致，而是一条可以辩护的行动路线：假设是明确的，证据是可审计的，负责人是指名的。这段经历体现了高阶职业沟通的习惯——把分歧当作需要被结构化的材料，而不是需要被压制的噪音。`
  });

  const readingRows = situations.map((item, index) => {
    const purposeAnswer = index % 4;
    const messageAnswer = (index + 1) % 4;
    const followAnswer = (index + 2) % 4;
    const purposeOptions = rotateOptions(related(index, "purpose"), purposeAnswer);
    const messageOptions = rotateOptions(related(index, "target"), messageAnswer);
    const followOptions = rotateOptions(related(index, "follow"), followAnswer);
    const copy = readingCopy(item);
    return Object.freeze({
      id: `reading-v280-${String(index + 1).padStart(3, "0")}`,
      title: `${item.person}'s ${titleFromSlug(item.slug)}`,
      titleZh: item.topic,
      topic: item.topic,
      level: item.level,
      passage: copy.passage,
      translationZh: copy.translationZh,
      vocabulary: item.vocabulary,
      art: artSets[index % 4],
      questions: Object.freeze([
        Object.freeze({
          question: `What was ${item.person} seeking to achieve?`,
          questionZh: `${item.person}想要达成什么目标？`,
          options: Object.freeze(purposeOptions),
          optionsZh: Object.freeze(purposeOptions.map((option) => situations.find((candidate) => candidate.purpose === option)?.sourceZh || option)),
          answer: purposeAnswer,
          explanation: `${item.person}'s aim was to ${item.purpose}.`,
          explanationZh: `${item.person}的目标与“${item.sourceZh}”直接对应。`
        }),
        Object.freeze({
          question: `Which statement did ${item.person} make to set out the case?`,
          questionZh: `${item.person}用哪句话陈述了核心论证？`,
          options: Object.freeze(messageOptions),
          optionsZh: Object.freeze(messageOptions.map((option) => situations.find((candidate) => candidate.target === option)?.sourceZh || option)),
          answer: messageAnswer,
          explanation: `The passage directly quotes: “${item.target}”`,
          explanationZh: `原文直接引用了：“${item.sourceZh}”`
        }),
        Object.freeze({
          question: `Which concrete commitment did ${item.person} add?`,
          questionZh: `${item.person}补充了哪项具体承诺？`,
          options: Object.freeze(followOptions),
          optionsZh: Object.freeze(followOptions.map((option) => situations.find((candidate) => candidate.follow === option)?.followZh || option)),
          answer: followAnswer,
          explanation: `${item.person} added: “${item.follow}”`,
          explanationZh: `${item.person}补充道：“${item.followZh}”`
        })
      ]),
      summary: `${item.person} structured verifiable facts, contested points, and an auditable commitment to ${item.purpose}.`,
      summaryZh: `${item.person}通过区分可核实事实与争议点，并给出可审计的承诺，完成了这次高阶沟通。`
    });
  });

  const grammarModels = [
    {
      category: "倒装条件句", title: "Had / Should 开头的省略 if", summary: "正式语体中可省略 if，用 Had/Were/Should 引导倒装条件句。", rule: "倒装后从句内不再使用 would 或多余助动词。", level: "C1",
      variants: [
        ["Had the data been complete, the model would have flagged the risk.", "Had the data would have been complete, the model would have flagged the risk.", "Had been the data complete, the model would have flagged the risk."],
        ["Should the audit fail, we will exit within ninety days.", "Should the audit fails, we will exit within ninety days.", "Should the audit would fail, we will exit within ninety days."]
      ],
      make: ([good, bad, third]) => ({ good, bad, question: "Choose the correctly inverted conditional.", options: [good, bad, third], explanation: "In formal inversion, Had/Should replaces if and is followed by the subject and a bare or participial verb form." })
    },
    {
      category: "强调句", title: "It-分裂句与 What-分裂句", summary: "It was … that / What … was 结构把信息焦点前置。", rule: "本题用 that 引导强调句剩余部分；强调人时也可用 who。What-从句作主语时不重复代词。", level: "C1",
      variants: [
        ["It was the parser, not the reviewers, that caused the gap.", "It was the parser, not the reviewers, caused the gap.", "It was the parser, not the reviewers, who caused the gap."],
        ["What the committee questioned was the strength of the evidence.", "What the committee questioned it was the strength of the evidence.", "That the committee questioned was the strength of the evidence."]
      ],
      make: ([good, bad, third]) => ({ good, bad, question: "Choose the correctly formed cleft sentence.", options: [good, bad, third], explanation: "A cleft sentence needs its full frame: It was X that…, or a What-clause subject followed directly by the verb." })
    },
    {
      category: "高级让步", title: "However + 形容词与 though 倒装", summary: "However accurate the system is… / Complex though the clause is… 表示强让步。", rule: "However 直接接形容词，主语和动词保持陈述语序；though 可后置于形容词。", level: "C1",
      variants: [
        ["However accurate the system is, it must remain explainable.", "However the system is accurate, it must remain explainable.", "However accurate is the system, it must remain explainable."],
        ["Complex though the clause is, its intent can be stated plainly.", "Though complex the clause is, its intent can be stated plainly.", "Complex although the clause is, its intent can be stated plainly."]
      ],
      make: ([good, bad, third]) => ({ good, bad, question: "Choose the correctly structured concessive sentence.", options: [good, bad, third], explanation: "However precedes the adjective directly, and in the fronted pattern the adjective comes before though." })
    },
    {
      category: "混合条件句", title: "过去条件与现在结果", summary: "if + 过去完成时搭配 would now + 动词原形，表达过去未发生之事的现在后果。", rule: "本课假设条件使用过去完成时或 were，结果使用 would + 原形或 would have + 过去分词。", level: "C1",
      variants: [
        ["If the pilot had been funded, we would now have regional data.", "If the pilot would have been funded, we would now have regional data.", "If the pilot had been funded, we will now have regional data."],
        ["If the clause were clearer, the dispute would not have arisen.", "If the clause would be clearer, the dispute would not have arisen.", "If the clause were clearer, the dispute had not arisen."]
      ],
      make: ([good, bad, third]) => ({ good, bad, question: "Choose the correct mixed conditional.", options: [good, bad, third], explanation: "Mixed conditionals pair a past-perfect or past-subjunctive condition with the appropriate would-clause; these hypothetical if-clauses do not use would." })
    },
    {
      category: "名词性从句", title: "What-从句作主语", summary: "本课 what 从句指单一事项，配合单数补语使用 is；复数补语有时可采用复数一致。", rule: "本题使用 What-从句 + is + 单数补语；从句内部保持陈述语序。", level: "C1",
      variants: [
        ["What matters at assurance is the completeness of the disclosure.", "What matters at assurance are the completeness of the disclosure.", "What is matter at assurance is the completeness of the disclosure."],
        ["What the workers need is an orderly transition.", "What the workers need are an orderly transition.", "What do the workers need is an orderly transition."]
      ],
      make: ([good, bad, third]) => ({ good, bad, question: "Choose the sentence whose what-clause subject agrees with its verb.", options: [good, bad, third], explanation: "These what-clauses refer to a single concern and take is with a singular complement; the clause itself keeps statement order." })
    },
    {
      category: "独立主格", title: "绝对结构交代背景", summary: "名词 + 分词/形容词的独立主格结构可紧凑地交代背景条件。", rule: "独立主格不与主句共享主语，也不能用逗号连接两个完整句子。", level: "C1",
      variants: [
        ["The cause still unconfirmed, the statement kept to verified facts.", "The cause was still unconfirmed, the statement kept to verified facts.", "The cause still unconfirming, the statement kept to verified facts."],
        ["The audit completed, the committee turned to remedies.", "The audit was completed, the committee turned to remedies.", "The audit completing, the committee turned to remedies."]
      ],
      make: ([good, bad, third]) => ({ good, bad, question: "Choose the sentence that uses an absolute construction correctly.", options: [good, bad, third], explanation: "An absolute construction pairs its own noun with a participle or adjective; two finite clauses joined by a comma form a splice." })
    },
    {
      category: "未来完成", title: "will have done 与完成进行", summary: "以未来某点为参照，用 will have + 过去分词或 will have been + -ing。", rule: "will have 后接过去分词；完成进行式为 will have been doing。", level: "C1",
      variants: [
        ["By the next review, the team will have submitted the joint plan.", "By the next review, the team will have submit the joint plan.", "By the next review, the team will has submitted the joint plan."],
        ["By year end, the lab will have been collecting data for a decade.", "By year end, the lab will have been collect data for a decade.", "By year end, the lab will been collecting data for a decade."]
      ],
      make: ([good, bad, third]) => ({ good, bad, question: "Choose the correct future perfect form.", options: [good, bad, third], explanation: "Future perfect uses will have plus a past participle, and its progressive form adds been with the -ing verb." })
    },
    {
      category: "正式衔接", title: "albeit 与 notwithstanding", summary: "albeit 接短语表示让步；notwithstanding 接名词短语。", rule: "本课练习 albeit with + 名词短语和 notwithstanding + 名词短语；notwithstanding that 也可引导从句。", level: "C1",
      variants: [
        ["The proposal was adopted, albeit with a longer transition.", "The proposal was adopted, albeit it had a longer transition.", "The proposal was adopted, despite of a longer transition."],
        ["Notwithstanding the cost, the calibration stays in the budget.", "Notwithstanding of the cost, the calibration stays in the budget.", "Despite of the high cost, the calibration stays in the budget."]
      ],
      make: ([good, bad, third]) => ({ good, bad, question: "Choose the sentence that uses the formal connector correctly.", options: [good, bad, third], explanation: "Use albeit with a prepositional phrase and notwithstanding directly before a noun phrase; notwithstanding of is incorrect. The separate construction notwithstanding that can introduce a clause." })
    },
    {
      category: "审慎表达", title: "would appear 与 arguably", summary: "证据允许多种解读时，用 would appear to、arguably 控制断言强度。", rule: "审慎语标示推断性质，避免把推断说成铁证。", level: "C1",
      variants: [
        ["The gap would appear to stem from the parser rather than the reviewers.", "The gap definitely stems from the parser, as anyone can see.", "The gap would appear stemming from the parser rather than the reviewers."],
        ["The findings are arguably strongest for the two largest markets.", "The findings are without any doubt strongest for the two largest markets, full stop.", "The findings are arguably strongest, which proves the model beyond question."]
      ],
      make: ([good, bad, third]) => ({ good, bad, question: "Choose the sentence whose claim strength matches inconclusive evidence.", options: [good, bad, third], explanation: "Hedging language keeps the stated certainty proportional to what the evidence actually supports." })
    },
    {
      category: "平行结构", title: "并列成分形式一致", summary: "并列的从句、动名词或名词短语必须保持相同的语法形式。", rule: "A, B, and C 三项的结构应当对称。", level: "C1",
      variants: [
        ["The plan covers who decides, who implements, and who verifies.", "The plan covers who decides, implementation, and who verifies.", "The plan covers who decides, who implements, and verifying."],
        ["The statement must be accurate, timely, and consistent.", "The statement must be accurate, timely, and it should also have consistency.", "The statement must be accurate, timely, and with consistency."]
      ],
      make: ([good, bad, third]) => ({ good, bad, question: "Choose the sentence with fully parallel coordination.", options: [good, bad, third], explanation: "Coordinated elements share one grammatical shape; mixing clauses with nouns or phrases breaks the parallel." })
    }
  ];

  const grammarQuestionContexts = Object.freeze([
    Object.freeze(["flagging a risk in a completed dataset", "planning an orderly supplier exit"]),
    Object.freeze(["identifying the cause of a screening gap", "questioning the strength of evidence"]),
    Object.freeze(["keeping an accurate system explainable", "restating a complex clause plainly"]),
    Object.freeze(["missing regional data from an unfunded pilot", "a dispute born of unclear drafting"]),
    Object.freeze(["what assurance reviewers examine", "what affected workers need"]),
    Object.freeze(["drafting a statement amid unconfirmed causes", "moving from audit findings to remedies"]),
    Object.freeze(["submitting a joint plan before review", "a decade-long data collection"]),
    Object.freeze(["adopting a proposal with a longer transition", "defending a calibration budget line"]),
    Object.freeze(["attributing a screening gap cautiously", "describing where findings are strongest"]),
    Object.freeze(["assigning decision implementation and verification", "setting standards for crisis statements"])
  ]);

  const grammarRows = grammarModels.flatMap((model, modelIndex) => model.variants.map((variant, variantIndex) => {
    const built = model.make(variant);
    const answer = (modelIndex * 2 + variantIndex) % 3;
    const options = built.options.slice(1);
    options.splice(answer, 0, built.options[0]);
    return Object.freeze({
      id: `g360-${String(modelIndex * 2 + variantIndex + 1).padStart(3, "0")}`,
      category: model.category,
      title: model.title,
      summary: model.summary,
      rule: model.rule,
      examples: Object.freeze([
        Object.freeze({ good: true, text: built.good, note: "正式语体中的自然表达" }),
        Object.freeze({ good: false, text: built.bad, note: "注意结构、语序或断言强度" })
      ]),
      quiz: Object.freeze({
        question: `${built.question} Professional context: ${grammarQuestionContexts[modelIndex][variantIndex]}.`,
        options: Object.freeze(options),
        answer,
        explanation: built.explanation
      }),
      level: model.level
    });
  }));

  const expected = { grammarRows: 20, translationRows: 40, listeningRows: 40, speakingRows: 30, readingRows: 20 };
  Object.entries(expected).forEach(([name, count]) => {
    const value = { grammarRows, translationRows, listeningRows, speakingRows, readingRows }[name];
    if (value.length !== count) throw new Error(`Expected ${count} ${name}, received ${value.length}.`);
  });

  window.ENGLISH_COMPASS_EXPANSION_GRAMMAR_V360 = Object.freeze(grammarRows);
  window.ENGLISH_COMPASS_EXPANSION_TRANSLATIONS_V680 = Object.freeze(translationRows);
  window.ENGLISH_COMPASS_EXPANSION_LISTENING_V680 = Object.freeze(listeningRows);
  window.ENGLISH_COMPASS_SPEAKING_V530 = Object.freeze(speakingRows);
  window.ENGLISH_COMPASS_READING_V280 = Object.freeze(readingRows);
})();

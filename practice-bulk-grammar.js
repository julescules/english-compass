(function () {
  "use strict";

  window.ENGLISH_COMPASS_BULK_GRAMMAR = Object.freeze([
    {
      id: "bulk-grammar-possessive-pronouns",
      category: "日常物品",
      title: "物主形容词与物主代词：分清 my 和 mine",
      summary: "my、your 等物主形容词必须修饰名词；mine、yours 等物主代词可以单独指代已经提到的物品。",
      rule: "名词前使用 my/your/his/her/our/their；不再重复名词时使用 mine/yours/his/hers/ours/theirs。",
      examples: [
        { good: true, text: "Your key is on the desk, but mine is in my bag.", note: "your 修饰 key，mine 单独代替 my key" },
        { good: false, text: "This seat is her, not my.", note: "单独使用时应说 hers 和 mine" }
      ],
      quiz: {
        question: "This umbrella is not ___; mine has a wooden handle.",
        options: ["my", "mine", "me"],
        answer: 1,
        explanation: "空格后没有名词，需要使用可以独立出现的物主代词 mine。"
      },
      level: "A2"
    },
    {
      id: "bulk-grammar-object-pronouns",
      category: "信息传递",
      title: "宾格代词：动词和介词后的正确形式",
      summary: "me、him、her、us 和 them 用作动词或介词的宾语，不能换成主格形式。",
      rule: "动作接受者位于动词后，或代词位于 to、for、with 等介词后时，使用宾格代词。",
      examples: [
        { good: true, text: "Could you send the details to her and me?", note: "her 和 me 都位于介词 to 后" },
        { good: false, text: "The manager spoke to Maya and I.", note: "介词 to 后应使用 me" }
      ],
      quiz: {
        question: "Could you send the updated address to Maya and ___?",
        options: ["I", "me", "my"],
        answer: 1,
        explanation: "代词位于介词 to 后，使用宾格 me。"
      },
      level: "A2"
    },
    {
      id: "bulk-grammar-some-any-no",
      category: "海外生活",
      title: "some、any 与 no：询问和说明是否有某物",
      summary: "some 常用于肯定句，any 常用于一般疑问句和否定句，no 直接放在名词前表示完全没有。",
      rule: "not any 与 no 意思相近，但不能同时使用；礼貌提供或请求时，即使是疑问句也常用 some。",
      examples: [
        { good: true, text: "There is no washing powder, but there is some soap.", note: "no 直接修饰名词，some 用在肯定句中" },
        { good: false, text: "We do not have no clean cups.", note: "不能同时使用 not 和 no，应说 do not have any" }
      ],
      quiz: {
        question: "There isn't ___ washing powder left, so we need to buy some.",
        options: ["some", "any", "no"],
        answer: 1,
        explanation: "否定句 isn't 后使用 any；no 会与 isn't 构成不自然的双重否定。"
      },
      level: "A2"
    },
    {
      id: "bulk-grammar-much-many-a-lot",
      category: "出行准备",
      title: "much、many 与 a lot of：搭配不同数量",
      summary: "many 修饰可数复数，much 修饰不可数名词；a lot of 在肯定句中可同时修饰两类名词。",
      rule: "疑问句和否定句中常用 how many/how much；注意 luggage、information 和 equipment 都是不可数名词。",
      examples: [
        { good: true, text: "How much luggage are you taking?", note: "luggage 是不可数名词，使用 much" },
        { good: false, text: "We do not have many information yet.", note: "information 不可数，应使用 much information" }
      ],
      quiz: {
        question: "How ___ luggage are you taking on the overseas trip?",
        options: ["many", "much", "a lot"],
        answer: 1,
        explanation: "luggage 是不可数名词，how 后使用 much。"
      },
      level: "A2"
    },
    {
      id: "bulk-grammar-superlatives",
      category: "比较路线",
      title: "最高级：从多个选择中找出最合适的一项",
      summary: "比较三个或更多对象时，使用 the + 形容词最高级，说明其中程度最高的一项。",
      rule: "短形容词通常加 -est，较长形容词使用 most；good、bad 的最高级分别是 best、worst。",
      examples: [
        { good: true, text: "This is the safest route after dark.", note: "在多条路线中说明安全程度最高，使用 the safest" },
        { good: false, text: "Monday is the most busy day.", note: "busy 的最高级是 busiest，应说 the busiest day" }
      ],
      quiz: {
        question: "This is ___ route to the airport during rush hour.",
        options: ["the quickest", "quicker", "the more quick"],
        answer: 0,
        explanation: "在多条路线中比较并指出最快的一条，使用 the quickest。"
      },
      level: "A2"
    },
    {
      id: "bulk-grammar-zero-conditional",
      category: "规则与事实",
      title: "零条件句：表达总是成立的规律",
      summary: "零条件句描述科学事实、操作规律或每次发生都会产生的结果。",
      rule: "If/when 从句和主句通常都用一般现在时：If + present simple, present simple。",
      examples: [
        { good: true, text: "If customers scan the code, the menu opens automatically.", note: "描述每次扫码都会出现的固定结果" },
        { good: false, text: "If you heat ice, it would melt.", note: "一般规律的结果不用 would，应说 it melts" }
      ],
      quiz: {
        question: "If you heat ice, it ___.",
        options: ["melts", "will melt", "would melt"],
        answer: 0,
        explanation: "这是自然规律，if 从句和主句都使用一般现在时。"
      },
      level: "A2"
    },
    {
      id: "bulk-grammar-sequencing-imperatives",
      category: "操作说明",
      title: "祈使句与顺序词：给出清晰步骤",
      summary: "操作说明常用动词原形开头的祈使句，并用 first、next、then、finally 标明顺序。",
      rule: "祈使句省略主语 you，直接用动词原形；否定指令使用 Don't + 动词原形。",
      examples: [
        { good: true, text: "First, switch off the machine. Then unplug it.", note: "顺序词配合两个动词原形，步骤清楚" },
        { good: false, text: "First, you switching off the machine.", note: "祈使句应直接使用 switch off" }
      ],
      quiz: {
        question: "___, switch off the machine and unplug it.",
        options: ["First", "Yesterday", "Already"],
        answer: 0,
        explanation: "First 用于引出操作流程的第一步。"
      },
      level: "A2"
    },
    {
      id: "bulk-grammar-present-perfect-continuous",
      category: "持续工作",
      title: "现在完成进行时：强调持续到现在的活动",
      summary: "have/has been + 动词 -ing 表示过去开始、持续到现在或刚刚停止且留下明显结果的活动。",
      rule: "常与 for、since、all morning 等时间表达连用；状态动词通常不使用进行形式。",
      examples: [
        { good: true, text: "I have been answering calls since eight o'clock.", note: "接电话从八点持续到现在" },
        { good: false, text: "I am answering calls since eight o'clock.", note: "since 引出的持续时间需要 have been answering" }
      ],
      quiz: {
        question: "I ___ customer calls all morning, so I need a short break.",
        options: ["have been answering", "am answering", "had answered"],
        answer: 0,
        explanation: "all morning 表明活动从过去持续到现在，使用现在完成进行时。"
      },
      level: "B1"
    },
    {
      id: "bulk-grammar-unless-condition",
      category: "服务条件",
      title: "unless：简洁表达“除非”条件",
      summary: "unless 相当于 if ... not，用于说明只有满足某个条件，结果才会改变。",
      rule: "unless 从句本身含有否定意义，通常不再加 not；真实未来条件中从句使用一般现在时。",
      examples: [
        { good: true, text: "We cannot activate the card unless you show valid ID.", note: "unless 等于 if you do not show valid ID" },
        { good: false, text: "Unless you do not confirm today, the booking will remain open.", note: "unless 后不应再加 not" }
      ],
      quiz: {
        question: "We cannot issue the visitor pass ___ you show a valid ID.",
        options: ["unless", "if", "because"],
        answer: 0,
        explanation: "句意是“除非出示有效证件，否则无法签发”，使用 unless。"
      },
      level: "B1"
    },
    {
      id: "bulk-grammar-make-let-allow",
      category: "职场安排",
      title: "make、let 与 allow：要求、允许和许可",
      summary: "make 和 let 后接宾语 + 动词原形；allow 后接宾语 + to + 动词原形。",
      rule: "make somebody do 表示迫使，let somebody do 表示准许，allow somebody to do 表示正式允许。",
      examples: [
        { good: true, text: "The supervisor allowed us to leave early.", note: "allow 后的宾语 us 再接 to leave" },
        { good: false, text: "The manager made me to repeat the task.", note: "make 后应接动词原形：made me repeat" }
      ],
      quiz: {
        question: "The supervisor allowed us ___ early after the storm warning.",
        options: ["leave", "to leave", "leaving"],
        answer: 1,
        explanation: "allow somebody 后接 to + 动词原形，因此使用 to leave。"
      },
      level: "B1"
    },
    {
      id: "bulk-grammar-separable-phrasal-verbs",
      category: "设备操作",
      title: "可分短语动词：代词必须放在中间",
      summary: "turn on、pick up、fill in 等可分短语动词接代词宾语时，代词必须位于动词和小品词之间。",
      rule: "名词宾语常可放中间或后面；it、them 等代词只能使用 turn it on、pick them up 的顺序。",
      examples: [
        { good: true, text: "The screen is dark. Please turn it on.", note: "代词 it 放在 turn 和 on 之间" },
        { good: false, text: "These forms are ready; please fill in them.", note: "代词宾语应放中间：fill them in" }
      ],
      quiz: {
        question: "The projector is off. Please turn ___ before the presentation begins.",
        options: ["on it", "it on", "it"],
        answer: 1,
        explanation: "turn on 是可分短语动词，代词 it 必须放在 turn 与 on 之间。"
      },
      level: "B1"
    },
    {
      id: "bulk-grammar-so-neither-agreement",
      category: "跨文化交流",
      title: "so 与 neither：自然附和相同经历",
      summary: "so + 助动词 + 主语附和肯定内容；neither/nor + 助动词 + 主语附和否定内容。",
      rule: "助动词要与前句的时态和结构一致：So do I、Neither have I、So can she。",
      examples: [
        { good: true, text: "I have not worked abroad before, and neither has Maya.", note: "否定的现在完成时使用 neither has" },
        { good: false, text: "I enjoy meeting new people, and neither do I.", note: "肯定内容应使用 so do I" }
      ],
      quiz: {
        question: "I haven't worked abroad before, and ___ my colleague.",
        options: ["neither has", "so has", "neither did"],
        answer: 0,
        explanation: "前句是否定的现在完成时，附和时使用 neither has。"
      },
      level: "B1"
    },
    {
      id: "bulk-grammar-future-continuous",
      category: "未来日程",
      title: "将来进行时：描述未来某时正在进行的活动",
      summary: "will be + 动词 -ing 表示在未来某个具体时刻正在发生的事情，也可礼貌询问他人的安排。",
      rule: "常与 this time tomorrow、at ten next Monday 等未来时间点连用。",
      examples: [
        { good: true, text: "This time tomorrow, we will be flying to Singapore.", note: "描述明天此时正在进行的飞行" },
        { good: false, text: "At ten tomorrow, I will meeting the client.", note: "结构必须是 will be meeting" }
      ],
      quiz: {
        question: "At this time tomorrow, we ___ the new staff around the office.",
        options: ["will be showing", "will show", "have shown"],
        answer: 0,
        explanation: "at this time tomorrow 强调未来该时刻正在进行的活动，使用 will be showing。"
      },
      level: "B1"
    },
    {
      id: "bulk-grammar-few-little-quantifiers",
      category: "时间与资源",
      title: "few、a few、little 与 a little：数量少但意义不同",
      summary: "a few/a little 表示虽少但仍有一些；few/little 强调少到几乎没有，语气更消极。",
      rule: "few 类修饰可数复数，little 类修饰不可数名词；有无冠词 a 会改变说话者的态度。",
      examples: [
        { good: true, text: "We have a little time, so we can get a coffee.", note: "仍有少量时间，足够做一件小事" },
        { good: false, text: "There are a little seats near the window.", note: "seats 可数，应使用 a few seats" }
      ],
      quiz: {
        question: "We have ___ time before boarding, so we can get a coffee.",
        options: ["a little", "little", "a few"],
        answer: 0,
        explanation: "time 不可数，且后半句表明仍有足够的一点时间，使用 a little。"
      },
      level: "B1"
    },
    {
      id: "bulk-grammar-emphatic-do",
      category: "澄清事实",
      title: "强调助动词 do：纠正误解或加强语气",
      summary: "在肯定句中使用 do/does/did + 动词原形，可以强调事实确实如此，常用于礼貌纠正误解。",
      rule: "时态由 do/does/did 表示，后面的实义动词必须恢复原形。",
      examples: [
        { good: true, text: "I did send the attachment, but the server rejected it.", note: "did send 强调发送动作确实发生过" },
        { good: false, text: "She does understands the policy.", note: "does 后必须使用动词原形 understand" }
      ],
      quiz: {
        question: "I ___ the attachment, but the server rejected the message.",
        options: ["did send", "did sent", "do sent"],
        answer: 0,
        explanation: "强调过去确实发送过，使用 did + 动词原形 send。"
      },
      level: "B1"
    },
    {
      id: "bulk-grammar-third-conditional",
      category: "复盘与反思",
      title: "第三条件句：讨论未发生的过去及其结果",
      summary: "第三条件句用于想象过去不同的条件，以及本来可能出现、但实际上没有出现的结果。",
      rule: "If + had + 过去分词，主句用 would/could/might have + 过去分词。",
      examples: [
        { good: true, text: "If we had checked the time difference, we would not have called at midnight.", note: "过去未检查，结果也已无法改变" },
        { good: false, text: "If we would have checked, we did not call so late.", note: "if 从句应使用 had checked，结果应使用 would not have called" }
      ],
      quiz: {
        question: "If we ___ the time difference, we would not have called the client at midnight.",
        options: ["had checked", "checked", "would check"],
        answer: 0,
        explanation: "这是与过去事实相反的假设，if 从句使用 had checked。"
      },
      level: "B2"
    },
    {
      id: "bulk-grammar-reporting-passive",
      category: "正式汇报",
      title: "报告式被动：客观转述普遍观点和预期",
      summary: "It is said that... 或主语 + is said/expected/believed + to... 可在正式表达中弱化消息来源。",
      rule: "报告动词使用被动形式；主语结构后接 to + 动词原形，若动作更早发生则用 to have + 过去分词。",
      examples: [
        { good: true, text: "The new system is expected to reduce waiting times.", note: "is expected to 客观转述对系统效果的预期" },
        { good: false, text: "The new system expects to reduce waiting times.", note: "系统本身不能产生“期待”，应使用被动 is expected" }
      ],
      quiz: {
        question: "The new system ___ to reduce waiting times by 20 percent.",
        options: ["is expected", "expects", "is expecting"],
        answer: 0,
        explanation: "表达外界对系统的预期，使用报告式被动 is expected to。"
      },
      level: "B2"
    },
    {
      id: "bulk-grammar-subjunctive-recommendations",
      category: "专业建议",
      title: "建议类虚拟语气：recommend that somebody do",
      summary: "在正式英语中，recommend、suggest、insist 等词后的 that 从句可使用动词原形，不随主语变化。",
      rule: "recommend that + 主语 + 动词原形；be 在所有人称后仍为 be。英式英语也常使用 should + 动词原形。",
      examples: [
        { good: true, text: "The consultant recommended that each branch conduct a review.", note: "each branch 后仍使用原形 conduct" },
        { good: false, text: "They suggested that the meeting is postponed.", note: "正式建议可说 that the meeting be postponed" }
      ],
      quiz: {
        question: "The consultant recommended that each branch ___ its own safety review.",
        options: ["conduct", "conducts", "conducted"],
        answer: 0,
        explanation: "recommend 后的正式 that 从句使用虚拟语气，动词保持原形 conduct。"
      },
      level: "B2"
    },
    {
      id: "bulk-grammar-whether-embedded-clause",
      category: "决策讨论",
      title: "whether 引导名词从句：正式表达待定选择",
      summary: "whether 可引导作为宾语、主语或介词宾语的从句，说明某件事是否成立或两个选项尚未决定。",
      rule: "whether 后使用陈述语序；whether or not 可明确表示两种可能。介词后和不定式前通常优先用 whether。",
      examples: [
        { good: true, text: "We need to decide whether the office can support the launch.", note: "whether 引导 decide 的宾语从句，并使用陈述语序" },
        { good: false, text: "We discussed about if should we delay the launch.", note: "应说 discussed whether we should delay，不能使用疑问语序" }
      ],
      quiz: {
        question: "We need to decide ___ the overseas office can support the launch.",
        options: ["whether", "what", "that if"],
        answer: 0,
        explanation: "句子讨论“是否能够支持”这一待定问题，使用 whether 引导宾语从句。"
      },
      level: "B2"
    },
    {
      id: "bulk-grammar-cleft-sentences",
      category: "演示强调",
      title: "It-cleft 强调句：突出关键信息",
      summary: "It is/was + 被强调部分 + that/who... 可以突出人物、时间、地点或原因，让演示重点更鲜明。",
      rule: "强调人物时可用 who 或 that，强调其他成分通常用 that；不要把普通 it 指代结构与强调句混淆。",
      examples: [
        { good: true, text: "It was the interpreter who prevented the misunderstanding.", note: "强调真正发挥关键作用的人是 interpreter" },
        { good: false, text: "It the interpreter was who prevented the problem.", note: "正确结构应为 It was + 强调部分 + who" }
      ],
      quiz: {
        question: "It was the interpreter ___ prevented the misunderstanding.",
        options: ["who", "which", "where"],
        answer: 0,
        explanation: "被强调部分是人物 the interpreter，使用 who 引出其余信息。"
      },
      level: "B2"
    }
  ]);
})();

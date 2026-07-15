(function () {
  "use strict";

  window.ENGLISH_COMPASS_MORE_GRAMMAR = Object.freeze([
    {
      id: "extra-grammar-work-present-simple-continuous",
      category: "工作日常",
      title: "一般现在时与现在进行时：区分常态和临时情况",
      summary: "一般现在时描述习惯或长期事实；现在进行时描述正在发生或暂时持续的情况。",
      rule: "频繁、通常发生的事情用动词原形或第三人称单数；当前或临时情况用 am/is/are + 动词 -ing。",
      examples: [
        {
          good: true,
          text: "I usually work at the front desk, but this week I am helping the sales team.",
          note: "work 表示日常职责，am helping 表示本周的临时安排"
        },
        {
          good: false,
          text: "I am usually taking the 8:00 train to work.",
          note: "日常习惯应说 I usually take the 8:00 train"
        }
      ],
      quiz: {
        question: "This month, Maya ___ from home while the office is being renovated.",
        options: ["works", "is working", "worked"],
        answer: 1,
        explanation: "This month 和装修期间说明这是临时情况，使用 is working。"
      },
      level: "A2"
    },
    {
      id: "extra-grammar-plans-going-to-will",
      category: "计划",
      title: "be going to 与 will：表达计划和临时决定",
      summary: "be going to 常表示事先计划；will 常用于说话时刚作出的决定、承诺或主动帮助。",
      rule: "已有安排或明显依据时用 be going to；在当下决定要做某事时常用 will + 动词原形。",
      examples: [
        {
          good: true,
          text: "We are going to launch the new service next month.",
          note: "发布服务是已经制定的计划"
        },
        {
          good: false,
          text: "The phone is ringing. I am going to answer it.",
          note: "这是当下作出的决定，更自然的说法是 I will answer it"
        }
      ],
      quiz: {
        question: "Oh, I forgot to attach the file. I ___ send another email now.",
        options: ["will", "am going", "was"],
        answer: 0,
        explanation: "说话者此刻才决定补发邮件，使用 will send。"
      },
      level: "A2"
    },
    {
      id: "extra-grammar-comparatives-work-options",
      category: "比较",
      title: "比较级：比较方案和工作条件",
      summary: "使用比较级加 than，对两个方案、地点或情况进行清楚比较。",
      rule: "短形容词通常加 -er；较长形容词用 more；不规则形式需要单独记忆，如 good 变为 better。",
      examples: [
        {
          good: true,
          text: "The morning train is less crowded than the evening one.",
          note: "less crowded than 自然地比较两个时段"
        },
        {
          good: false,
          text: "This option is more cheaper than the first one.",
          note: "cheaper 已是比较级，前面不能再加 more"
        }
      ],
      quiz: {
        question: "The revised form is ___ to complete than the old one.",
        options: ["easier", "more easy", "easiest"],
        answer: 0,
        explanation: "easy 的比较级是 easier，并与 than 搭配。"
      },
      level: "A2"
    },
    {
      id: "extra-grammar-frequency-adverb-position",
      category: "日常表达",
      title: "频率副词：放在句子中的正确位置",
      summary: "always、usually、often、sometimes、rarely 和 never 可以说明事情发生的频率。",
      rule: "频率副词通常放在实义动词前，但放在 be 动词后：I often call；I am often busy。",
      examples: [
        {
          good: true,
          text: "Our weekly meeting is usually short.",
          note: "usually 放在 be 动词 is 后"
        },
        {
          good: false,
          text: "She arrives always before nine.",
          note: "应说 She always arrives before nine"
        }
      ],
      quiz: {
        question: "Daniel ___ late for client meetings.",
        options: ["is rarely", "rarely is", "rare is"],
        answer: 0,
        explanation: "与 be 动词连用时，频率副词放在 be 后面：is rarely late。"
      },
      level: "A2"
    },
    {
      id: "extra-grammar-time-prepositions",
      category: "时间安排",
      title: "at、on 与 in：准确表达时间",
      summary: "at 用于具体时刻，on 用于日期或某一天，in 用于月份、年份和较长时段。",
      rule: "说钟点用 at；说星期或具体日期用 on；说月份、年份、季节及一天中的较长时段用 in。",
      examples: [
        {
          good: true,
          text: "The interview is at 10:30 on Monday morning in July.",
          note: "具体时刻、某一天和月份分别使用 at、on、in"
        },
        {
          good: false,
          text: "I will call you in Friday afternoon.",
          note: "具体星期应说 on Friday afternoon"
        }
      ],
      quiz: {
        question: "Please submit the form ___ noon ___ 18 June.",
        options: ["at / on", "in / at", "on / in"],
        answer: 0,
        explanation: "noon 是具体时刻，用 at；18 June 是具体日期，用 on。"
      },
      level: "A2"
    },
    {
      id: "extra-grammar-past-continuous-interruption",
      category: "经历描述",
      title: "过去进行时：描述被打断的动作",
      summary: "过去进行时说明过去某一时刻正在进行的背景动作，一般过去时说明随后发生的事件。",
      rule: "背景动作使用 was/were + 动词 -ing；打断它的较短动作通常使用一般过去时。",
      examples: [
        {
          good: true,
          text: "I was speaking to a customer when the connection dropped.",
          note: "was speaking 是背景动作，dropped 是打断它的事件"
        },
        {
          good: false,
          text: "I was prepare the slides when you called.",
          note: "was 后应接 preparing"
        }
      ],
      quiz: {
        question: "When the manager entered the room, we ___ the delivery issue.",
        options: ["were discussing", "discussed", "are discussing"],
        answer: 0,
        explanation: "经理进入时，讨论正在进行，因此使用 were discussing。"
      },
      level: "A2"
    },
    {
      id: "extra-grammar-past-perfect-sequence",
      category: "时间顺序",
      title: "过去完成时：说清过去事件的先后",
      summary: "过去完成时表示在另一个过去动作或时间点之前已经完成的事情。",
      rule: "较早发生的过去事件用 had + 过去分词；较晚发生的事件通常用一般过去时。",
      examples: [
        {
          good: true,
          text: "By the time the meeting began, I had already sent the agenda.",
          note: "发送议程发生在会议开始之前"
        },
        {
          good: false,
          text: "When I arrived, the presentation already started.",
          note: "要突出先后关系，应说 had already started"
        }
      ],
      quiz: {
        question: "The customer was upset because she ___ three times without receiving a reply.",
        options: ["had called", "has called", "calls"],
        answer: 0,
        explanation: "三次来电发生在过去的情绪状态之前，使用 had called。"
      },
      level: "B1"
    },
    {
      id: "extra-grammar-reported-speech",
      category: "信息转述",
      title: "间接引语：准确转述他人的话",
      summary: "转述过去说过的话时，人称、时间词和动词时态通常需要随语境调整。",
      rule: "过去时的 said/told 后，can 常变为 could，will 常变为 would，today 可按语境改为 that day。",
      examples: [
        {
          good: true,
          text: "Leo said that he would send the updated file that afternoon.",
          note: "will 和 this afternoon 随过去的转述语境作了调整"
        },
        {
          good: false,
          text: "Mina told that she was busy.",
          note: "tell 后需要宾语，应说 Mina told me，或改用 Mina said"
        }
      ],
      quiz: {
        question: "\"I can't attend today.\" Nora said that she ___ attend that day.",
        options: ["couldn't", "can't", "doesn't"],
        answer: 0,
        explanation: "过去转述 can’t 时通常后移为 couldn’t，today 相应变为 that day。"
      },
      level: "B1"
    },
    {
      id: "extra-grammar-relative-clauses",
      category: "句子连接",
      title: "关系从句：补充人物、事物和地点信息",
      summary: "who 指人，which 指事物，where 指地点，用它们可以把相关信息自然连成一句。",
      rule: "先行词是人时常用 who；事物用 which/that；表示事情发生的地点时可用 where。",
      examples: [
        {
          good: true,
          text: "The colleague who trained me now leads the support team.",
          note: "who 引出关于 colleague 的补充信息"
        },
        {
          good: false,
          text: "The software what we use is easy to learn.",
          note: "指事物的关系代词应使用 which 或 that"
        }
      ],
      quiz: {
        question: "The café ___ we met for the interview is near the station.",
        options: ["where", "who", "whose"],
        answer: 0,
        explanation: "先行词 café 是会面发生的地点，因此使用 where。"
      },
      level: "B1"
    },
    {
      id: "extra-grammar-used-to-be-used-to",
      category: "适应变化",
      title: "used to 与 be used to：过去习惯和现在适应",
      summary: "used to do 表示过去经常做但现在不同；be used to doing 表示已经习惯某事。",
      rule: "used to 后接动词原形；be used to 中的 to 是介词，后接名词或动词 -ing。",
      examples: [
        {
          good: true,
          text: "I used to feel nervous, but now I am used to speaking in public.",
          note: "前半句说过去状态，后半句说现在已经适应"
        },
        {
          good: false,
          text: "I am used to work under pressure.",
          note: "be used to 后应说 working"
        }
      ],
      quiz: {
        question: "After six months on the night shift, I ___ working late.",
        options: ["am used to", "used to", "use to"],
        answer: 0,
        explanation: "这里表示现在已经习惯，使用 am used to + working。"
      },
      level: "B1"
    },
    {
      id: "extra-grammar-modal-deduction",
      category: "推测",
      title: "must、might 与 can't：表达有根据的推测",
      summary: "must 表示强烈肯定推测，might/may 表示可能，can't 表示根据证据判断不可能。",
      rule: "这些情态动词后直接接动词原形：must be、might know、can't belong。",
      examples: [
        {
          good: true,
          text: "Her name is on the schedule, so she must be the new supervisor.",
          note: "已有较强证据，因此使用 must be"
        },
        {
          good: false,
          text: "She must to be in a meeting.",
          note: "must 后直接接 be，不能加 to"
        }
      ],
      quiz: {
        question: "The lights are off and the door is locked, so the office ___ be open.",
        options: ["can't", "must", "might"],
        answer: 0,
        explanation: "灯已关闭且门已锁，根据证据可判断办公室不可能仍在营业。"
      },
      level: "B1"
    },
    {
      id: "extra-grammar-although-despite",
      category: "逻辑连接",
      title: "although 与 despite：自然表达转折",
      summary: "although 后接完整从句；despite 后接名词、代词或动词 -ing。",
      rule: "使用 although + 主语 + 谓语；使用 despite + 名词/-ing。两者本身已表示转折，不再与 but 同用。",
      examples: [
        {
          good: true,
          text: "Despite the delay, we finished the project on time.",
          note: "despite 后接名词短语 the delay"
        },
        {
          good: false,
          text: "Despite the train was late, I arrived on time.",
          note: "完整从句前应使用 Although，或改为 Despite the late train"
        }
      ],
      quiz: {
        question: "___ having little experience, she gave a confident presentation.",
        options: ["Despite", "Although", "Because"],
        answer: 0,
        explanation: "having 是动名词形式，前面可以使用 Despite。"
      },
      level: "B1"
    },
    {
      id: "extra-grammar-modal-perfect",
      category: "复盘判断",
      title: "情态动词完成式：判断和反思过去",
      summary: "must have 表示对过去的强烈推断；might/could have 表示可能；should have 表示本应做到。",
      rule: "使用 modal + have + 过去分词，例如 must have forgotten、could have changed、should have checked。",
      examples: [
        {
          good: true,
          text: "They must have misunderstood the delivery instructions.",
          note: "根据现在的结果对过去原因作出强烈推断"
        },
        {
          good: false,
          text: "You should have tell me about the change.",
          note: "have 后需要过去分词 told"
        }
      ],
      quiz: {
        question: "The figures are incorrect; someone ___ the formula wrongly.",
        options: ["must have entered", "must entered", "has must enter"],
        answer: 0,
        explanation: "根据错误结果推断过去发生的操作，使用 must have entered。"
      },
      level: "B2"
    },
    {
      id: "extra-grammar-wish-past-regret",
      category: "愿望与遗憾",
      title: "wish：表达现在愿望和过去遗憾",
      summary: "wish + 一般过去时表达与现在不同的愿望；wish + 过去完成时表达对过去的遗憾。",
      rule: "现在不真实的愿望用 wish + 过去式；过去无法改变的事情用 wish + had + 过去分词。",
      examples: [
        {
          good: true,
          text: "I wish I had asked more questions during the interview.",
          note: "面试已经结束，使用过去完成时表达遗憾"
        },
        {
          good: false,
          text: "I wish I would know the answer.",
          note: "表示现在不知道时，应说 I wish I knew the answer"
        }
      ],
      quiz: {
        question: "I wish we ___ more time to test the update before yesterday's launch.",
        options: ["had had", "would have", "have had"],
        answer: 0,
        explanation: "测试机会属于已经结束的过去，wish 后使用过去完成时 had had。"
      },
      level: "B2"
    },
    {
      id: "extra-grammar-future-perfect-deadlines",
      category: "项目进度",
      title: "将来完成时：说明截止时间前的成果",
      summary: "将来完成时表示某个动作将在未来指定时间之前完成。",
      rule: "使用 will have + 过去分词，常与 by、by the time、before 等时间表达搭配。",
      examples: [
        {
          good: true,
          text: "By Friday, we will have completed the first round of testing.",
          note: "测试将在周五这个未来节点前完成"
        },
        {
          good: false,
          text: "By next month, I will completed the training.",
          note: "应使用 will have completed"
        }
      ],
      quiz: {
        question: "By the time the client arrives, we ___ the final prototype.",
        options: ["will have prepared", "will prepare", "have preparing"],
        answer: 0,
        explanation: "原型将在客户到达这一未来节点之前准备完成，使用将来完成时。"
      },
      level: "B2"
    },
    {
      id: "extra-grammar-participle-clauses",
      category: "书面表达",
      title: "分词从句：简洁连接相关动作",
      summary: "当两个动作的执行者相同时，可以用现在分词或完成分词让句子更简洁。",
      rule: "同时或伴随发生常用 doing；先完成的动作可用 having + 过去分词。分词短语的逻辑主语必须与主句主语一致。",
      examples: [
        {
          good: true,
          text: "Having reviewed the data, the analyst prepared a short summary.",
          note: "review 和 prepare 的执行者都是 the analyst"
        },
        {
          good: false,
          text: "Reviewing the data, several errors were found.",
          note: "主句主语 errors 不能执行 review，形成了悬垂分词"
        }
      ],
      quiz: {
        question: "___ all the documents, Priya submitted the application.",
        options: ["Having checked", "Checked", "Have checking"],
        answer: 0,
        explanation: "检查先于提交发生，且两者主语都是 Priya，使用 Having checked。"
      },
      level: "B2"
    }
  ]);
})();

(function () {
  "use strict";

  window.ENGLISH_COMPASS_EXTRA_PRACTICE = Object.freeze({
    grammar: [
      {
        id: "extra-grammar-accommodation-there-be",
        category: "住宿",
        title: "There is / There are：描述房间设施",
        summary: "用 there is 或 there are 说明某处有什么，并让单复数与后面的名词保持一致。",
        rule: "单数或不可数名词前用 there is；复数名词前用 there are。疑问句把 is 或 are 提到 there 前面。",
        examples: [
          { good: true, text: "There is a shared kitchen on the ground floor.", note: "a shared kitchen 是单数，用 there is" },
          { good: false, text: "There are a laundry room downstairs.", note: "a laundry room 是单数，应说 There is" }
        ],
        quiz: {
          question: "___ any clean towels in the bathroom?",
          options: ["Is there", "Are there", "There is"],
          answer: 1,
          explanation: "towels 是复数，疑问句使用 Are there。"
        },
        level: "A1"
      },
      {
        id: "extra-grammar-transport-prepositions",
        category: "交通",
        title: "by、on 与 in：说清出行方式",
        summary: "不同交通表达需要不同介词：by train、on the bus、in a taxi。",
        rule: "泛指出行方式用 by + 交通工具；人在公共交通工具上常用 on；在小型封闭车辆里常用 in。",
        examples: [
          { good: true, text: "I usually travel to work by train.", note: "泛指出行方式，用 by train" },
          { good: false, text: "She came here by the taxi.", note: "泛指方式应说 by taxi，或具体乘坐时说 in a taxi" }
        ],
        quiz: {
          question: "I left my umbrella ___ the bus.",
          options: ["by", "on", "in"],
          answer: 1,
          explanation: "表示物品落在公共交通工具上，使用 on the bus。"
        },
        level: "A2"
      },
      {
        id: "extra-grammar-dining-countable-nouns",
        category: "餐饮",
        title: "可数与不可数名词：自然地点餐",
        summary: "food、rice、water 等通常不可数；sandwich、bottle、menu 等可以计数。",
        rule: "不可数名词用 some、a little 或量词短语；可数复数可用 some、a few 或具体数字。",
        examples: [
          { good: true, text: "Could we have some water and two glasses, please?", note: "water 不可数，glasses 可数" },
          { good: false, text: "I would like two breads.", note: "bread 通常不可数，可说 two slices of bread" }
        ],
        quiz: {
          question: "Which order is grammatically correct?",
          options: ["I'd like a rice.", "I'd like some rice.", "I'd like two rice."],
          answer: 1,
          explanation: "rice 是不可数名词，some rice 是自然表达。"
        },
        level: "A2"
      },
      {
        id: "extra-grammar-medical-should-have",
        category: "看病",
        title: "should 与 have to：建议和必要措施",
        summary: "should 表示建议；have to 表示因规则或情况而必须做某事。",
        rule: "should 后接动词原形，语气是建议；have to 后也接动词原形，但必要性更强。",
        examples: [
          { good: true, text: "You should rest, but you have to take this medicine with food.", note: "休息是建议，按要求服药是必要措施" },
          { good: false, text: "You should to drink more water.", note: "should 后直接接动词原形 drink" }
        ],
        quiz: {
          question: "The label says you ___ keep this medicine in the fridge.",
          options: ["have to", "should to", "having to"],
          answer: 0,
          explanation: "标签明确要求冷藏，使用 have to + 动词原形。"
        },
        level: "A2"
      },
      {
        id: "extra-grammar-phone-indirect-questions",
        category: "电话",
        title: "间接疑问句：电话中礼貌确认",
        summary: "在 Could you tell me… 等礼貌开头后，疑问部分使用陈述句语序。",
        rule: "间接疑问句不再倒装：Could you tell me when the office closes? 不说 when does the office close。",
        examples: [
          { good: true, text: "Could you tell me when the manager will be available?", note: "间接疑问部分使用 the manager will be 的陈述语序" },
          { good: false, text: "Could you tell me where is the meeting room?", note: "应说 where the meeting room is" }
        ],
        quiz: {
          question: "Choose the correct telephone question.",
          options: [
            "Do you know when does the shop open?",
            "Do you know when the shop opens?",
            "Do you know when opens the shop?"
          ],
          answer: 1,
          explanation: "Do you know 后面的间接疑问句使用 the shop opens 的陈述语序。"
        },
        level: "B1"
      },
      {
        id: "extra-grammar-email-present-perfect",
        category: "邮件",
        title: "现在完成时：汇报已完成事项",
        summary: "邮件中常用 have/has + 过去分词说明刚完成且与当前工作有关的事项。",
        rule: "与 already、just、yet 连用时常用现在完成时；yet 通常放在否定句或疑问句末尾。",
        examples: [
          { good: true, text: "I have attached the revised schedule to this email.", note: "附件已准备好，收件人现在可以查看" },
          { good: false, text: "I have sent the file yesterday.", note: "yesterday 是明确过去时间，应说 I sent" }
        ],
        quiz: {
          question: "Which sentence is the most natural progress update?",
          options: [
            "I just finish the report.",
            "I have just finished the report.",
            "I have finish the report just."
          ],
          answer: 1,
          explanation: "have just finished 是正确的现在完成时结构，just 放在助动词后。"
        },
        level: "B1"
      },
      {
        id: "extra-grammar-office-passive-voice",
        category: "办公室协作",
        title: "被动语态：突出任务而非执行者",
        summary: "当任务或结果比执行者更重要时，用 be + 过去分词组织职场信息。",
        rule: "被动语态的时态体现在 be 上；一般现在时用 am/is/are + 过去分词，一般过去时用 was/were + 过去分词。",
        examples: [
          { good: true, text: "The final draft will be reviewed by the design team tomorrow.", note: "重点是 final draft 的审阅安排" },
          { good: false, text: "The minutes were send this morning.", note: "过去分词应为 sent" }
        ],
        quiz: {
          question: "The meeting notes ___ to everyone after the call.",
          options: ["sent", "were sent", "were send"],
          answer: 1,
          explanation: "notes 是动作承受者，过去发生，使用 were sent。"
        },
        level: "B1"
      },
      {
        id: "extra-grammar-complaint-conditionals",
        category: "投诉",
        title: "条件句：提出清晰的解决方案",
        summary: "处理投诉时，用 if 从句说明条件，用主句说明可采取的补救措施。",
        rule: "真实可行的未来方案用 If + 一般现在时，主句用 will/can + 动词原形。",
        examples: [
          { good: true, text: "If you return the damaged item, we can arrange a replacement.", note: "条件与解决办法都清楚具体" },
          { good: false, text: "If you will send the receipt, we can help.", note: "真实条件句的 if 从句通常不用 will" }
        ],
        quiz: {
          question: "If the replacement is unavailable, we ___ a full refund.",
          options: ["offered", "can offer", "can offered"],
          answer: 1,
          explanation: "真实条件句的主句可用 can offer，情态动词后接动词原形。"
        },
        level: "B1"
      }
    ],

    translations: [
      {
        id: "extra-translation-accommodation-checkin",
        context: "住宿",
        tone: "礼貌",
        source: "您好，我预订了一间双人房，可以提前办理入住吗？",
        answer: "Hello, I have booked a double room. Would it be possible to check in early?",
        shortAnswer: "I booked a double room. Could I check in early?",
        alternatives: ["Hello, I have a reservation for a double room. May I check in early?"],
        chunks: [
          ["我预订了一间双人房", "I have booked a double room"],
          ["可以吗", "Would it be possible"],
          ["提前办理入住", "to check in early"]
        ],
        hints: ["booked", "double room", "check in early"],
        level: "A2"
      },
      {
        id: "extra-translation-transport-delay",
        context: "交通",
        tone: "自然",
        source: "如果下一班火车晚点，我会改乘机场大巴。",
        answer: "If the next train is delayed, I will take the airport bus instead.",
        shortAnswer: "If the train is late, I'll take the airport bus.",
        alternatives: ["I will take the airport bus instead if the next train is delayed."],
        chunks: [
          ["如果下一班火车晚点", "If the next train is delayed"],
          ["我会改乘机场大巴", "I will take the airport bus instead"]
        ],
        hints: ["next train", "delayed", "instead"],
        level: "A2"
      },
      {
        id: "extra-translation-dining-allergy",
        context: "餐饮",
        tone: "礼貌",
        source: "我对花生过敏，请问这道菜里含有花生吗？",
        answer: "I am allergic to peanuts. Could you tell me whether this dish contains any peanuts?",
        shortAnswer: "I'm allergic to peanuts. Does this dish contain any?",
        alternatives: ["I have a peanut allergy. May I ask if there are any peanuts in this dish?"],
        chunks: [
          ["我对花生过敏", "I am allergic to peanuts"],
          ["请问", "Could you tell me"],
          ["这道菜里含有花生吗", "whether this dish contains any peanuts"]
        ],
        hints: ["allergic to", "dish", "contains"],
        level: "A2"
      },
      {
        id: "extra-translation-medical-symptoms",
        context: "看病",
        tone: "清楚",
        source: "我从昨晚开始发烧，而且深呼吸时胸口会痛。",
        answer: "I have had a fever since last night, and my chest hurts when I take a deep breath.",
        shortAnswer: "I've had a fever since last night, and it hurts to breathe deeply.",
        alternatives: ["I have been running a fever since last night, and I feel chest pain when I breathe deeply."],
        chunks: [
          ["我从昨晚开始发烧", "I have had a fever since last night"],
          ["而且胸口会痛", "and my chest hurts"],
          ["深呼吸时", "when I take a deep breath"]
        ],
        hints: ["have had a fever", "since last night", "deep breath"],
        level: "B1"
      },
      {
        id: "extra-translation-phone-message",
        context: "电话",
        tone: "专业",
        source: "经理现在正在开会，我可以替您留言吗？",
        answer: "The manager is in a meeting at the moment. May I take a message for you?",
        shortAnswer: "The manager is in a meeting. Can I take a message?",
        alternatives: ["The manager is currently in a meeting. Would you like to leave a message?"],
        chunks: [
          ["经理现在正在开会", "The manager is in a meeting at the moment"],
          ["我可以吗", "May I"],
          ["替您留言", "take a message for you"]
        ],
        hints: ["in a meeting", "at the moment", "take a message"],
        level: "A2"
      },
      {
        id: "extra-translation-email-attachment",
        context: "邮件",
        tone: "专业",
        source: "附件是修改后的方案，如有任何问题，请在周四前告诉我。",
        answer: "Please find the revised proposal attached. If you have any questions, please let me know by Thursday.",
        shortAnswer: "I've attached the revised proposal. Please send me any questions by Thursday.",
        alternatives: ["The revised proposal is attached. Please let me know by Thursday if you have any questions."],
        chunks: [
          ["附件是修改后的方案", "Please find the revised proposal attached"],
          ["如有任何问题", "If you have any questions"],
          ["请在周四前告诉我", "please let me know by Thursday"]
        ],
        hints: ["revised proposal", "attached", "by Thursday"],
        level: "B1"
      },
      {
        id: "extra-translation-office-handoff",
        context: "办公室协作",
        tone: "合作",
        source: "我已经完成数据整理，你能在下午三点前检查图表吗？",
        answer: "I have finished organizing the data. Could you check the charts by three this afternoon?",
        shortAnswer: "The data is ready. Could you check the charts by three?",
        alternatives: ["I have organized the data. Would you be able to review the charts by 3 p.m.?"],
        chunks: [
          ["我已经完成数据整理", "I have finished organizing the data"],
          ["你能检查图表吗", "Could you check the charts"],
          ["在下午三点前", "by three this afternoon"]
        ],
        hints: ["organizing the data", "check the charts", "by three"],
        level: "B1"
      },
      {
        id: "extra-translation-retail-exchange",
        context: "零售",
        tone: "礼貌",
        source: "这件衬衫有点小，我可以换成大一码的吗？",
        answer: "This shirt is a little too small. Could I exchange it for a larger size?",
        shortAnswer: "Could I exchange this for a larger size?",
        alternatives: ["This shirt is slightly too small. May I exchange it for the next size up?"],
        chunks: [
          ["这件衬衫有点小", "This shirt is a little too small"],
          ["我可以换吗", "Could I exchange it"],
          ["换成大一码的", "for a larger size"]
        ],
        hints: ["too small", "exchange", "larger size"],
        level: "A2"
      },
      {
        id: "extra-translation-complaint-refund",
        context: "投诉",
        tone: "坚定而礼貌",
        source: "这个设备到货时已经损坏，我希望更换新品或获得全额退款。",
        answer: "The device was already damaged when it arrived. I would like a replacement or a full refund.",
        shortAnswer: "It arrived damaged, so I would like a replacement or a full refund.",
        alternatives: ["The device arrived damaged. Could you arrange a replacement or issue a full refund?"],
        chunks: [
          ["这个设备到货时已经损坏", "The device was already damaged when it arrived"],
          ["我希望更换新品", "I would like a replacement"],
          ["或获得全额退款", "or a full refund"]
        ],
        hints: ["arrived damaged", "replacement", "full refund"],
        level: "B1"
      },
      {
        id: "extra-translation-interview-achievement",
        context: "面试",
        tone: "专业",
        source: "在上一个项目中，我重新安排了工作流程，使团队提前两天完成任务。",
        answer: "In my last project, I reorganized the workflow, which helped the team finish two days ahead of schedule.",
        shortAnswer: "I improved the workflow, and we finished two days early.",
        alternatives: ["During my previous project, I reorganized the workflow and enabled the team to finish two days early."],
        chunks: [
          ["在上一个项目中", "In my last project"],
          ["我重新安排了工作流程", "I reorganized the workflow"],
          ["使团队提前两天完成任务", "which helped the team finish two days ahead of schedule"]
        ],
        hints: ["reorganized", "workflow", "ahead of schedule"],
        level: "B2"
      }
    ],

    listening: [
      {
        id: "extra-listening-accommodation-key",
        level: "A1",
        topic: "住宿",
        text: "Your room is on the second floor. Here is your key, and breakfast starts at seven.",
        question: "What time does breakfast start?",
        options: ["At six", "At seven", "At eight"],
        answer: 1,
        keywords: ["room", "key", "breakfast", "seven"]
      },
      {
        id: "extra-listening-transport-platform",
        level: "A1",
        topic: "交通",
        text: "The bus to the airport leaves from platform four at nine fifteen.",
        question: "Where does the airport bus leave from?",
        options: ["Platform four", "Platform nine", "Gate fifteen"],
        answer: 0,
        keywords: ["airport", "leaves", "platform four", "nine fifteen"]
      },
      {
        id: "extra-listening-dining-order",
        level: "A1",
        topic: "餐饮",
        text: "I would like the chicken sandwich and a glass of orange juice, please.",
        question: "What drink does the customer order?",
        options: ["Water", "Coffee", "Orange juice"],
        answer: 2,
        keywords: ["chicken sandwich", "glass", "orange juice"]
      },
      {
        id: "extra-listening-medical-appointment",
        level: "A2",
        topic: "看病",
        text: "The doctor can see you at half past three. Please arrive ten minutes early and bring your health card.",
        question: "What should the patient bring?",
        options: ["A passport", "A health card", "A bottle of water"],
        answer: 1,
        keywords: ["doctor", "half past three", "ten minutes early", "health card"]
      },
      {
        id: "extra-listening-phone-callback",
        level: "A2",
        topic: "电话",
        text: "Ms. Patel is away from her desk right now. She will call you back after lunch at about one thirty.",
        question: "When will Ms. Patel call back?",
        options: ["Before lunch", "At about one thirty", "At the end of the week"],
        answer: 1,
        keywords: ["away from her desk", "call back", "after lunch", "one thirty"]
      },
      {
        id: "extra-listening-email-deadline",
        level: "B1",
        topic: "邮件",
        text: "I have emailed the updated budget to everyone. Please add your comments by Wednesday so I can send the final version on Thursday morning.",
        question: "When are comments due?",
        options: ["Wednesday", "Thursday morning", "Friday"],
        answer: 0,
        keywords: ["updated budget", "comments", "by Wednesday", "final version"]
      },
      {
        id: "extra-listening-office-priorities",
        level: "B1",
        topic: "办公室协作",
        text: "Daniel will prepare the slides while Mei checks the sales figures. I will combine their work and rehearse the presentation with both of them tomorrow.",
        question: "What will Mei do?",
        options: ["Prepare the slides", "Check the sales figures", "Lead today's rehearsal"],
        answer: 1,
        keywords: ["prepare the slides", "checks", "sales figures", "combine"]
      },
      {
        id: "extra-listening-retail-promotion",
        level: "A2",
        topic: "零售",
        text: "These shoes are twenty percent off today, but the discount only applies to the black and brown pairs.",
        question: "Which shoes are discounted?",
        options: ["Only the white pairs", "The black and brown pairs", "Every color"],
        answer: 1,
        keywords: ["twenty percent off", "discount", "black", "brown"]
      },
      {
        id: "extra-listening-complaint-delivery",
        level: "B2",
        topic: "投诉",
        text: "Although I paid for next-day delivery, the package arrived four days later and one of the items was missing. I would prefer a refund for the delivery charge rather than a discount on my next order.",
        question: "What solution does the customer prefer?",
        options: ["A replacement package", "A future discount", "A refund of the delivery charge"],
        answer: 2,
        keywords: ["next-day delivery", "four days later", "missing", "refund"]
      },
      {
        id: "extra-listening-interview-example",
        level: "B1",
        topic: "面试",
        text: "Please describe a time when you had to learn a new skill quickly. Explain the situation, what you did, and the result.",
        question: "What should the candidate include in the answer?",
        options: ["Only the name of the skill", "The situation, action, and result", "A list of personal hobbies"],
        answer: 1,
        keywords: ["describe a time", "new skill", "situation", "result"]
      }
    ],

    speaking: [
      {
        id: "extra-speaking-accommodation-noise",
        scenario: "住宿",
        prompt: "Tell the front desk that your room is noisy and ask for a solution.",
        target: "Excuse me, my room is very noisy because it faces the main road. Would it be possible to move to a quieter room?",
        shortVersion: "My room is very noisy. Could I move to a quieter room?",
        tip: "先客观说明问题和原因，再用 Would it be possible… 提出请求。",
        keywords: ["noisy", "faces the main road", "move", "quieter room"],
        level: "A2"
      },
      {
        id: "extra-speaking-transport-connection",
        scenario: "交通",
        prompt: "Ask a station employee how to reach the airport before 8 a.m.",
        target: "Could you tell me the best way to get to the airport before eight tomorrow morning? Do I need to change trains?",
        shortVersion: "How can I get to the airport before eight? Do I need to change trains?",
        tip: "把目的地、到达时间和是否换乘三个关键信息说完整。",
        keywords: ["best way", "airport", "before eight", "change trains"],
        level: "A2"
      },
      {
        id: "extra-speaking-dining-allergy",
        scenario: "餐饮",
        prompt: "Tell a server about a food allergy and check whether a dish is safe.",
        target: "I am allergic to peanuts. Could you please check whether this dish contains peanuts or was prepared with peanut oil?",
        shortVersion: "I'm allergic to peanuts. Is this dish safe for me?",
        tip: "明确说 allergic to，并同时确认食材和烹饪用油。",
        keywords: ["allergic to", "contains", "prepared with", "peanut oil"],
        level: "A2"
      },
      {
        id: "extra-speaking-medical-symptoms",
        scenario: "看病",
        prompt: "Describe your symptoms and how long you have had them.",
        target: "I have had a fever and a sore throat for two days. The fever gets worse at night, and I also feel very tired.",
        shortVersion: "I've had a fever and a sore throat for two days, and I feel very tired.",
        tip: "按症状、持续时间、变化规律的顺序描述，医生更容易判断。",
        keywords: ["have had", "fever", "sore throat", "for two days"],
        level: "A2"
      },
      {
        id: "extra-speaking-phone-message",
        scenario: "电话",
        prompt: "Leave a clear message when the person you need is unavailable.",
        target: "Hello, this is Li Wei from Northstar Retail. I am calling about tomorrow's delivery. Could Ms. Green call me back before four this afternoon?",
        shortVersion: "This is Li Wei calling about tomorrow's delivery. Please call me back before four.",
        tip: "留言包含姓名、单位、来电原因、回电截止时间四项信息。",
        keywords: ["this is", "calling about", "call me back", "before four"],
        level: "B1"
      },
      {
        id: "extra-speaking-email-followup",
        scenario: "邮件",
        prompt: "Read aloud a polite follow-up about a document you need tomorrow.",
        target: "I am writing to follow up on the signed agreement. Could you send it by noon tomorrow so that we can keep the project on schedule?",
        shortVersion: "Could you send the signed agreement by noon tomorrow?",
        tip: "说明在跟进什么、具体截止时间和原因，语气礼貌但清楚。",
        keywords: ["follow up on", "signed agreement", "by noon", "on schedule"],
        level: "B1"
      },
      {
        id: "extra-speaking-office-update",
        scenario: "办公室协作",
        prompt: "Give your team a short progress update and ask for one piece of help.",
        target: "I have completed the research and drafted the first two sections. I still need the latest sales figures, so could someone send them to me by three?",
        shortVersion: "The research is complete. Could someone send me the latest sales figures by three?",
        tip: "先说已完成内容，再说缺少什么，最后给出明确时间。",
        keywords: ["completed", "drafted", "sales figures", "by three"],
        level: "B1"
      },
      {
        id: "extra-speaking-retail-recommendation",
        scenario: "零售",
        prompt: "Recommend a product after asking what the customer needs.",
        target: "What will you mainly use the laptop for? If you need it for travel and office work, this model is light, has a long battery life, and includes a two-year warranty.",
        shortVersion: "What will you use it for? This model is light and has a long battery life.",
        tip: "先问用途，再用两到三个与需求相关的特点推荐，不要只报参数。",
        keywords: ["use the laptop for", "travel", "battery life", "warranty"],
        level: "B1"
      },
      {
        id: "extra-speaking-complaint-resolution",
        scenario: "投诉",
        prompt: "Respond to a customer whose order arrived late and incomplete.",
        target: "I understand why you are frustrated, and I apologize for the delay and the missing item. I can send the item today and refund the delivery charge.",
        shortVersion: "I apologize. We can send the missing item today and refund the delivery charge.",
        tip: "按理解情绪、明确道歉、给出两项具体补救的顺序回应。",
        keywords: ["understand", "apologize", "missing item", "refund"],
        level: "B1"
      },
      {
        id: "extra-speaking-interview-achievement",
        scenario: "面试",
        prompt: "Describe an achievement using the situation, action, and result structure.",
        target: "During a university project, our team was falling behind schedule. I reorganized the task list and set up short daily check-ins, so we finished two days early and received excellent feedback.",
        shortVersion: "I reorganized a delayed project, and our team finished two days early.",
        tip: "用一到两句交代困难，重点讲你的行动，并用可衡量结果收尾。",
        keywords: ["behind schedule", "reorganized", "daily check-ins", "finished two days early"],
        level: "B2"
      }
    ]
  });
})();

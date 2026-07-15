(function () {
  "use strict";

  window.ENGLISH_COMPASS_MORE_SPEAKING = Object.freeze([
    {
      id: "extra-speaking-shopping-return",
      scenario: "退换商品",
      prompt: "Return a faulty product and ask about your options.",
      target: "I bought these headphones yesterday, but the left side does not work. I have the receipt. Could I exchange them for a new pair or get a refund?",
      shortVersion: "These headphones do not work. Could I exchange them or get a refund?",
      tip: "按购买时间、具体故障、购买凭证、希望的处理方式依次说明。",
      keywords: ["does not work", "receipt", "exchange", "refund"],
      level: "A2"
    },
    {
      id: "extra-speaking-appointment-reschedule",
      scenario: "改约时间",
      prompt: "Call to reschedule an appointment that conflicts with work.",
      target: "I have an appointment at two on Tuesday, but I have to work then. Could I move it to Wednesday morning instead?",
      shortVersion: "I cannot come on Tuesday. Could I move the appointment to Wednesday morning?",
      tip: "先说明原时间和冲突原因，再提出一个明确的新时间。",
      keywords: ["appointment", "have to work", "move it", "Wednesday morning"],
      level: "A2"
    },
    {
      id: "extra-speaking-bank-lost-card",
      scenario: "银行卡挂失",
      prompt: "Report a lost bank card and ask for a replacement.",
      target: "I think I lost my bank card this morning. Please block it immediately and tell me how to request a replacement card.",
      shortVersion: "I lost my bank card. Please block it and help me request a replacement.",
      tip: "清楚说明遗失时间、立即停用的请求，以及是否需要补办。",
      keywords: ["lost", "bank card", "block it", "replacement"],
      level: "A2"
    },
    {
      id: "extra-speaking-parcel-collection",
      scenario: "领取包裹",
      prompt: "Collect a package and provide the information needed at the counter.",
      target: "Hello, I am here to collect a package for Lin Yue. Here is my identification and the collection code. Could you check whether it is ready?",
      shortVersion: "I am here to collect a package. Here are my ID and collection code.",
      tip: "包含收件人姓名、领取目的、身份证明和取件码。",
      keywords: ["collect a package", "identification", "collection code", "ready"],
      level: "A2"
    },
    {
      id: "extra-speaking-networking-introduction",
      scenario: "职业交流",
      prompt: "Introduce yourself to someone at a career event.",
      target: "Hello, I recently graduated in communication and I am interested in customer service roles. I would love to learn more about your company and the skills you value.",
      shortVersion: "I am a communication graduate interested in customer service. I would like to learn about your company.",
      tip: "用专业背景、目标岗位和一个开放问题组成简短自我介绍。",
      keywords: ["graduated", "interested in", "customer service", "learn more"],
      level: "B1"
    },
    {
      id: "extra-speaking-meeting-disagreement",
      scenario: "会议分歧",
      prompt: "Disagree politely with a proposed launch date.",
      target: "I understand the advantage of launching on Friday, but I am concerned that we will not have enough time to test the final version. Could we consider launching on Monday instead?",
      shortVersion: "I understand your point, but we need more testing time. Could we launch on Monday?",
      tip: "先认可对方的考虑，再说明具体风险，最后提出替代方案。",
      keywords: ["understand", "concerned", "test", "consider"],
      level: "B1"
    },
    {
      id: "extra-speaking-deadline-negotiation",
      scenario: "协商期限",
      prompt: "Ask for a realistic deadline after an unexpected data problem.",
      target: "The report is due on Friday, but the new data contains several errors that need to be checked. Could I submit the final report on Monday morning and send you a draft on Friday?",
      shortVersion: "The data needs more checking. Could I send a draft on Friday and the final report on Monday?",
      tip: "说明延期原因，同时给出阶段成果和新的明确期限。",
      keywords: ["due on Friday", "errors", "draft", "Monday morning"],
      level: "B1"
    },
    {
      id: "extra-speaking-presentation-opening",
      scenario: "汇报开场",
      prompt: "Open a short presentation and preview its structure.",
      target: "Good morning. Today I will give a brief update on customer feedback, explain the two main issues, and recommend our next steps. I will leave time for questions at the end.",
      shortVersion: "Today I will summarize customer feedback, explain the main issues, and suggest next steps.",
      tip: "开场包含主题、内容顺序和提问安排，听众会更容易跟上。",
      keywords: ["brief update", "main issues", "next steps", "questions"],
      level: "B1"
    },
    {
      id: "extra-speaking-remote-clarification",
      scenario: "线上会议确认",
      prompt: "Ask the speaker to repeat a decision after the audio cuts out.",
      target: "Sorry, the audio cut out just as you explained the decision. Could you repeat what we agreed to do, who is responsible, and when it is due?",
      shortVersion: "The audio cut out. Could you repeat the decision, the owner, and the deadline?",
      tip: "不仅请对方重复，还要确认行动、负责人和截止时间。",
      keywords: ["audio cut out", "repeat", "responsible", "due"],
      level: "B1"
    },
    {
      id: "extra-speaking-project-risk",
      scenario: "项目风险",
      prompt: "Explain a supply delay, its impact, and your proposed response.",
      target: "Our supplier has warned us that the components may arrive one week late. This could delay testing, so I recommend contacting a backup supplier today and revising the project schedule.",
      shortVersion: "The components may be one week late. We should contact a backup supplier and revise the schedule.",
      tip: "完整风险汇报包含事实、可能影响和可立即执行的应对方案。",
      keywords: ["supplier", "one week late", "delay testing", "backup supplier"],
      level: "B2"
    },
    {
      id: "extra-speaking-interview-mistake",
      scenario: "面试复盘",
      prompt: "Describe a mistake, how you corrected it, and what you learned.",
      target: "During my internship, I once sent an early draft to a client by mistake. I informed my supervisor immediately, apologized to the client, and sent the correct file. Since then, I have used a checklist before sending documents.",
      shortVersion: "I sent the wrong draft, corrected it immediately, and now use a checklist before sending files.",
      tip: "承担责任但不要停留在错误上，重点说明补救行动和长期改进。",
      keywords: ["by mistake", "informed", "correct file", "checklist"],
      level: "B2"
    },
    {
      id: "extra-speaking-interview-role-priorities",
      scenario: "面试反问",
      prompt: "Ask thoughtful questions about priorities and success in the role.",
      target: "Could you tell me the main priorities for the first three months and how success in this role is measured? I would also like to know how the team normally shares feedback.",
      shortVersion: "What are the first three-month priorities, and how is success measured?",
      tip: "围绕入职目标、评价方式和团队反馈提问，比只问福利更专业。",
      keywords: ["priorities", "first three months", "success", "feedback"],
      level: "B2"
    }
  ]);
})();

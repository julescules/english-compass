(function () {
  "use strict";

  const rows = [
    [
      "v140-speaking-pharmacy-dosage",
      "生活·药店用药",
      "Ask a pharmacist how and when to take a new medicine.",
      "Could you tell me how often I should take this medicine and whether I should take it with food? I would also like to know if it may make me sleepy.",
      "How often should I take this medicine, and should I take it with food?",
      "依次确认频率、是否随餐服用和常见副作用，问题会更完整。",
      ["how often", "take this medicine", "with food", "make me sleepy"],
      "A2"
    ],
    [
      "v140-speaking-landlord-heating",
      "生活·住房报修",
      "Report a heating problem to your landlord and request a prompt repair.",
      "Hello, the heating has not worked since last night, and the apartment is getting very cold. Could you arrange a repair as soon as possible and tell me when someone can come?",
      "The heating has not worked since last night. Could you arrange a repair soon?",
      "说明故障、持续时间、影响和希望的处理时间。",
      ["heating", "since last night", "arrange a repair", "when someone can come"],
      "A2"
    ],
    [
      "v140-speaking-bank-address-update",
      "生活·银行业务",
      "Ask a bank employee to update your address and confirm the required evidence.",
      "I have recently moved and need to update my address on the account. I have a rental agreement and a utility bill. Could you confirm which proof of address you accept?",
      "I need to update my address. Which proof of address do you accept?",
      "先说明变更事项，再列出已有材料并确认银行接受哪一种。",
      ["recently moved", "update my address", "rental agreement", "proof of address"],
      "B1"
    ],
    [
      "v140-speaking-doctor-symptom-timeline",
      "生活·就医描述",
      "Describe changing symptoms clearly during a medical appointment.",
      "I developed a sore throat three days ago, and the fever started yesterday evening. The fever improves after medicine, but the cough has become worse at night.",
      "My sore throat started three days ago, and I have had a fever since yesterday. The cough is worse at night.",
      "按时间顺序描述症状开始时间、变化和药物效果。",
      ["sore throat", "three days ago", "fever started", "worse at night"],
      "B1"
    ],
    [
      "v140-speaking-neighbour-parcel-favour",
      "生活·邻里互助",
      "Ask a neighbour to receive a parcel and explain the collection plan.",
      "Would you mind receiving a parcel for me tomorrow afternoon? I will be at work until six, but I can collect it from you in the evening. Please do not worry if you are unavailable.",
      "Could you receive a parcel for me tomorrow? I can collect it in the evening.",
      "礼貌提出请求，说明原因和取件时间，并给对方拒绝空间。",
      ["receiving a parcel", "at work until six", "collect it", "if you are unavailable"],
      "B1"
    ],
    [
      "v140-speaking-rent-renewal-negotiation",
      "生活·租约协商",
      "Negotiate a proposed rent increase when renewing an apartment lease.",
      "I would like to renew the lease, but the proposed rent increase is difficult for my budget. I have always paid on time and maintained the apartment well. Would you consider a smaller increase if I sign for another year?",
      "I would like to renew, but the increase is difficult. Would you consider a smaller increase for a one-year lease?",
      "表达续租意愿，用可靠租客记录作为依据，再提出有交换条件的方案。",
      ["renew the lease", "rent increase", "paid on time", "smaller increase"],
      "B2"
    ],
    [
      "v140-speaking-insurance-claim-evidence",
      "生活·保险理赔",
      "Explain a damaged-luggage claim and ask what evidence is still required.",
      "My suitcase was damaged during the flight, and the airline recorded the damage at the airport. I have the baggage report, photographs, and purchase receipt. Could you clarify whether any further evidence is required for the claim?",
      "My suitcase was damaged during the flight. What further evidence do you need for the claim?",
      "交代事件、已有证明和明确问题，避免只说行李坏了。",
      ["damaged during the flight", "baggage report", "purchase receipt", "further evidence"],
      "B2"
    ],
    [
      "v140-speaking-municipal-registration",
      "生活·行政登记",
      "Clarify how to complete a local registration when one document is delayed.",
      "I need to complete my local registration this week, but my original employment letter has not arrived. I have a signed digital copy. Could you confirm whether that is acceptable temporarily and when I must provide the original?",
      "My original employment letter is delayed. Can I register with a signed digital copy temporarily?",
      "说明期限和缺失文件，提出临时替代材料，并确认补交时间。",
      ["local registration", "employment letter", "signed digital copy", "provide the original"],
      "B2"
    ],

    [
      "v140-speaking-vacancy-enquiry",
      "海外求职·职位咨询",
      "Call an overseas employer to ask whether a vacancy is still available.",
      "Hello, I am calling about the retail assistant vacancy on your website. Is the position still available, and could you tell me where to send my application?",
      "I am calling about the retail assistant vacancy. Is it still available?",
      "电话开头说明岗位来源，再问招聘状态和申请渠道。",
      ["calling about", "retail assistant vacancy", "still available", "send my application"],
      "A2"
    ],
    [
      "v140-speaking-start-date",
      "海外求职·到岗时间",
      "Tell a recruiter when you can start and mention your notice period.",
      "I can start in three weeks because I need to complete my notice period. If the team needs help earlier, I may be available for online training in the evenings.",
      "I can start in three weeks after my notice period.",
      "给出明确时间、原因，以及有限但真实的灵活安排。",
      ["start in three weeks", "notice period", "help earlier", "online training"],
      "A2"
    ],
    [
      "v140-speaking-career-event-introduction",
      "海外求职·职业社交",
      "Introduce yourself to a recruiter at an international career event.",
      "Hello, I have three years of supermarket experience and currently supervise a team of eight. I am exploring customer service roles overseas and would like to learn what skills your company values most.",
      "I supervise a supermarket team and am exploring customer service roles overseas.",
      "用当前经验、目标方向和一个开放问题构成职业介绍。",
      ["supermarket experience", "supervise a team", "customer service roles", "skills your company values"],
      "B1"
    ],
    [
      "v140-speaking-transferable-retail-skills",
      "海外求职·迁移能力",
      "Explain how retail management experience transfers to an office support role.",
      "Retail management taught me to organize schedules, handle confidential staff information, and solve urgent problems calmly. These transferable skills would help me coordinate tasks effectively in an office support role.",
      "My retail management experience gave me transferable organization and problem-solving skills.",
      "点出具体行为能力，并直接说明它们如何服务目标岗位。",
      ["Retail management", "organize schedules", "confidential staff information", "transferable skills"],
      "B1"
    ],
    [
      "v140-speaking-relocation-readiness",
      "海外求职·搬迁计划",
      "Explain your realistic relocation plan to an overseas recruiter.",
      "I am prepared to relocate if I receive an offer. I would need about six weeks to arrange my visa and housing, and I have already researched the cost of living and transport near the office.",
      "I am prepared to relocate and would need about six weeks for my visa and housing.",
      "表达意愿的同时给出准备周期和已完成的实际调研。",
      ["prepared to relocate", "six weeks", "visa and housing", "cost of living"],
      "B1"
    ],
    [
      "v140-speaking-salary-expectation-range",
      "海外求职·薪酬期望",
      "State a salary expectation while keeping room for a total-package discussion.",
      "Based on the responsibilities and local market rates, I am looking for a salary in the advertised range, ideally near the middle. However, I am open to discussing the total package, including training and relocation support.",
      "I am looking for a salary near the middle of the advertised range, but I am open to the total package.",
      "用职责和市场作依据，给出范围位置，并把福利纳入协商。",
      ["local market rates", "advertised range", "open to discussing", "relocation support"],
      "B2"
    ],
    [
      "v140-speaking-visa-sponsorship-inquiry",
      "海外求职·签证支持",
      "Ask tactfully about visa sponsorship and the employer's process.",
      "I am very interested in the role and believe my experience matches the requirements. As I would need a work visa, could you explain whether sponsorship is available and at what stage eligibility is assessed?",
      "I would need a work visa. Could you explain whether sponsorship is available?",
      "先强调岗位匹配，再透明说明签证需求并询问流程。",
      ["interested in the role", "matches the requirements", "work visa", "sponsorship is available"],
      "B2"
    ],
    [
      "v140-speaking-offer-decision-extension",
      "海外求职·录用决定",
      "Request a short extension to consider an overseas job offer.",
      "Thank you for the offer; I am genuinely excited about the position. Before deciding, I need to review the relocation costs and speak with my family. Would it be possible to extend the response deadline until next Tuesday?",
      "Thank you for the offer. Could you extend the response deadline until next Tuesday?",
      "先表达积极态度，简要说明需要时间的真实原因，再提出具体日期。",
      ["excited about the position", "relocation costs", "extend the response deadline", "next Tuesday"],
      "B2"
    ],

    [
      "v140-speaking-interview-introduction",
      "面试·自我介绍",
      "Give a concise introduction at the start of an interview.",
      "I am a customer service supervisor with three years of retail experience. I enjoy solving practical problems, supporting my team, and helping customers feel understood. I am now ready for an international role.",
      "I am a customer service supervisor with three years of retail experience and am ready for an international role.",
      "按当前身份、经验、优势和求职方向组织四句以内的回答。",
      ["customer service supervisor", "retail experience", "supporting my team", "international role"],
      "A2"
    ],
    [
      "v140-speaking-interview-strength-example",
      "面试·个人优势",
      "Describe one strength and support it with a simple example.",
      "One of my strengths is staying calm under pressure. Last month, two employees were absent, so I reorganized the shift and kept the service desk running smoothly.",
      "My strength is staying calm under pressure, and I used it to reorganize a difficult shift.",
      "优势后立刻补一个有行动和结果的小例子。",
      ["strengths", "staying calm under pressure", "reorganized the shift", "running smoothly"],
      "A2"
    ],
    [
      "v140-speaking-interview-weakness-plan",
      "面试·改进弱点",
      "Explain a genuine weakness and the steps you are taking to improve it.",
      "I used to hesitate before speaking in large meetings because I wanted every detail to be perfect. I am improving by preparing two key points in advance and contributing early in the discussion.",
      "I sometimes hesitate in large meetings, so I prepare key points and contribute early.",
      "选择可改善的弱点，说明过去表现和正在执行的方法。",
      ["hesitate", "large meetings", "preparing two key points", "contributing early"],
      "B1"
    ],
    [
      "v140-speaking-interview-difficult-customer",
      "面试·行为事例",
      "Answer a behavioural question about handling a difficult customer.",
      "A customer was upset because an advertised item was unavailable. I listened without interrupting, checked stock at another branch, and arranged free delivery. The customer thanked us and kept the order.",
      "I listened to the customer, found stock at another branch, and arranged free delivery.",
      "用情境、行动、结果展开，重点放在自己的具体行动。",
      ["customer was upset", "listened without interrupting", "another branch", "kept the order"],
      "B1"
    ],
    [
      "v140-speaking-interview-career-gap",
      "面试·职业空档",
      "Explain a career gap positively and honestly.",
      "I took an eight-month career break to care for a family member. During that period, I completed an online business English course and volunteered at a community shop. I am now fully available to return to work.",
      "I took a career break for family care, studied business English, and am now ready to return to work.",
      "简洁说明原因，把重点转到期间的成长和当前可工作状态。",
      ["career break", "care for a family member", "business English course", "fully available"],
      "B1"
    ],
    [
      "v140-speaking-interview-team-conflict",
      "面试·冲突处理",
      "Describe how you resolved a disagreement between team members.",
      "Two colleagues disagreed about weekend duties, and the discussion was becoming personal. I met them separately, clarified the staffing needs, and then helped them create a fair rotation. Both accepted the schedule, and the team completed the month without further conflict.",
      "I clarified the staffing needs and helped both colleagues agree on a fair rotation.",
      "体现降温、了解双方、回到共同事实和形成可执行方案。",
      ["becoming personal", "staffing needs", "fair rotation", "without further conflict"],
      "B2"
    ],
    [
      "v140-speaking-interview-case-assumption",
      "面试·案例分析",
      "State a reasonable assumption before answering an ambiguous case question.",
      "Before I recommend an option, I would like to clarify one assumption. I am assuming the budget is fixed and customer retention is the main objective. If either point is different, I would adjust my recommendation.",
      "I am assuming the budget is fixed and customer retention is the main objective.",
      "案例信息不足时先公开关键假设，并说明条件变化会调整结论。",
      ["clarify one assumption", "budget is fixed", "customer retention", "adjust my recommendation"],
      "B2"
    ],
    [
      "v140-speaking-interview-role-questions",
      "面试·反向提问",
      "Ask thoughtful questions at the end of an interview.",
      "Could you describe the main priorities for the first three months and how success is measured? I would also like to know how this role works with the wider team and what training is available.",
      "What are the first three months' priorities, and how is success measured?",
      "围绕近期目标、评价方式、协作关系和培训提出岗位型问题。",
      ["main priorities", "first three months", "success is measured", "training is available"],
      "B2"
    ],

    [
      "v140-speaking-team-ask-for-help",
      "团队协作·请求支援",
      "Ask a teammate for help with an urgent task.",
      "Could you help me check these customer records before lunch? I have finished the first half, but I may miss the deadline without some support.",
      "Could you help me check these customer records before lunch?",
      "说明具体任务、已完成进度和明确期限，让对方容易判断。",
      ["help me", "customer records", "before lunch", "miss the deadline"],
      "A2"
    ],
    [
      "v140-speaking-team-shift-handover",
      "团队协作·班次交接",
      "Give a clear handover to the next shift.",
      "The delivery arrived, but three boxes are still unchecked. A customer will collect order forty-six at five, and the card machine needs more paper. I have written the details in the handover book.",
      "Three boxes need checking, order forty-six will be collected at five, and the card machine needs paper.",
      "按未完成任务、定时事项、设备问题和记录位置交接。",
      ["three boxes", "order forty-six", "card machine", "handover book"],
      "A2"
    ],
    [
      "v140-speaking-team-clarify-owner",
      "团队协作·明确责任",
      "Clarify who owns each action before a meeting ends.",
      "Before we finish, could we confirm the action owners? I will update the schedule, Maya will contact the supplier, and Chen will review the figures by Thursday.",
      "Could we confirm the action owners and deadlines before we finish?",
      "用姓名、动作和期限形成可追踪的会议结论。",
      ["confirm the action owners", "update the schedule", "contact the supplier", "by Thursday"],
      "B1"
    ],
    [
      "v140-speaking-team-polite-disagreement",
      "团队协作·礼貌分歧",
      "Disagree with a colleague's plan and offer an alternative.",
      "I understand why you want to launch on Friday, but I am concerned that we have not completed the payment tests. Could we finish testing on Friday and launch on Monday instead?",
      "I understand your plan, but we need to complete the payment tests. Could we launch on Monday?",
      "先认可对方理由，再说具体风险和可执行替代方案。",
      ["launch on Friday", "I am concerned", "payment tests", "launch on Monday"],
      "B1"
    ],
    [
      "v140-speaking-team-unblock-colleague",
      "团队协作·解除阻塞",
      "Offer practical support when a teammate is blocked.",
      "It sounds like the missing price list is blocking your report. I can contact Finance now and ask for the latest version. Meanwhile, could you complete the sections that do not depend on those figures?",
      "I can request the latest price list while you complete the independent sections.",
      "确认阻塞点，主动承担一个动作，并指出可并行推进的部分。",
      ["price list", "blocking your report", "contact Finance", "do not depend"],
      "B1"
    ],
    [
      "v140-speaking-team-workload-rebalance",
      "团队协作·工作量调整",
      "Propose a fair workload adjustment when one teammate is overloaded.",
      "Rosa is handling the audit as well as two urgent client requests, so the current allocation is not sustainable. I suggest moving the routine weekly report to me until the audit closes, then reviewing the workload again.",
      "Rosa is overloaded, so I suggest taking the weekly report until the audit closes.",
      "用客观任务量说明问题，提出临时调整和复盘节点。",
      ["two urgent client requests", "not sustainable", "weekly report", "reviewing the workload"],
      "B2"
    ],
    [
      "v140-speaking-team-consensus-check",
      "团队协作·确认共识",
      "Summarize a decision and check that the team agrees.",
      "Let me check that we have the same understanding. We will keep the original scope, move the launch to the eighteenth, and review progress next Wednesday. Does anyone see the decision differently?",
      "We will keep the scope, launch on the eighteenth, and review progress next Wednesday. Does everyone agree?",
      "复述范围、日期和复盘安排，再主动邀请纠正。",
      ["same understanding", "original scope", "launch to the eighteenth", "decision differently"],
      "B2"
    ],
    [
      "v140-speaking-team-retrospective-accountability",
      "团队协作·复盘改进",
      "Acknowledge your part in a project delay and propose a prevention step.",
      "I should have raised the data quality issue earlier, and that delay reduced the team's testing time. Next time, I will flag uncertain data during the first review and assign an owner before we proceed.",
      "I raised the data issue too late. Next time, I will flag it during the first review and assign an owner.",
      "承担自己的可控部分，说明影响，并给出具体预防机制。",
      ["should have raised", "data quality issue", "testing time", "assign an owner"],
      "B2"
    ],

    [
      "v140-speaking-customer-wrong-order",
      "客户服务·订单错误",
      "Respond when a customer says they received the wrong item.",
      "I am sorry that you received the wrong item. Let me check the order number and arrange the correct product. Would you prefer home delivery or collection from the store?",
      "I am sorry you received the wrong item. Let me arrange the correct product.",
      "先道歉并核对，再给出明确解决方案和选择。",
      ["wrong item", "order number", "correct product", "home delivery"],
      "A2"
    ],
    [
      "v140-speaking-customer-late-delivery",
      "客户服务·配送延误",
      "Explain a delivery delay and give the customer a new time.",
      "I am sorry, but your delivery has been delayed because the driver had a vehicle problem. It is now expected between four and five, and we will send you a message before arrival.",
      "Your delivery is delayed and should arrive between four and five.",
      "说明原因、新时间和下一次通知，避免只重复“延误”。",
      ["delivery has been delayed", "vehicle problem", "between four and five", "before arrival"],
      "A2"
    ],
    [
      "v140-speaking-customer-angry-calming",
      "客户服务·安抚情绪",
      "Calm an angry customer before investigating the problem.",
      "I can hear how frustrating this has been, and I want to help resolve it. Let me confirm what happened, then I will check the account and explain the available options.",
      "I understand this is frustrating. Let me confirm what happened and check the options.",
      "先承认感受但不急于判责，再确认事实和说明下一步。",
      ["how frustrating", "help resolve it", "confirm what happened", "available options"],
      "B1"
    ],
    [
      "v140-speaking-customer-refund-policy",
      "客户服务·解释政策",
      "Explain why an immediate cash refund is not possible and offer the valid process.",
      "Because the purchase was made by card, the refund must return to the same card rather than be paid in cash. I can process it now, and it should appear within five business days.",
      "The refund must return to the same card and should appear within five business days.",
      "用原因、规则、当前可做动作和到账时间完整解释。",
      ["made by card", "same card", "paid in cash", "five business days"],
      "B1"
    ],
    [
      "v140-speaking-customer-accessibility-request",
      "客户服务·无障碍支持",
      "Respond to a customer who requests an accessible appointment.",
      "Thank you for telling me what you need. I can book a ground-floor room with step-free access and allow extra appointment time. Would a morning appointment on Thursday work for you?",
      "I can book a ground-floor room with step-free access. Would Thursday morning work?",
      "先确认需求，再说明具体无障碍安排并与顾客确认时间。",
      ["what you need", "ground-floor room", "step-free access", "Thursday"],
      "B1"
    ],
    [
      "v140-speaking-customer-service-recovery",
      "客户服务·服务补救",
      "Offer a proportionate remedy after repeated service failures.",
      "You have experienced three outages this month, and the previous repair did not solve the problem. I will arrange a senior technician for tomorrow and apply a one-week service credit to your account.",
      "I will arrange a senior technician tomorrow and add a one-week service credit.",
      "先概括重复故障，再给技术解决和经济补偿两类措施。",
      ["three outages", "previous repair", "senior technician", "service credit"],
      "B2"
    ],
    [
      "v140-speaking-customer-unclear-responsibility",
      "客户服务·责任未明",
      "Respond when a customer wants compensation before responsibility is confirmed.",
      "I understand why you are requesting compensation. We are still reviewing whether the damage occurred during packing or delivery, so I cannot confirm responsibility yet. I will update you by four today and explain the next step.",
      "We are still reviewing where the damage occurred. I will update you by four today.",
      "表达理解，不提前承诺责任，同时给出调查范围和明确更新时间。",
      ["requesting compensation", "still reviewing", "confirm responsibility", "by four today"],
      "B2"
    ],

    [
      "v140-speaking-presentation-opening",
      "演示汇报·开场",
      "Open a short presentation and preview the main sections.",
      "Good morning. Today I will summarize our customer survey, explain the two main findings, and suggest three next steps. I will take questions at the end.",
      "Today I will summarize the survey, explain the findings, and suggest next steps.",
      "开场给出主题、内容顺序和提问安排。",
      ["customer survey", "main findings", "three next steps", "questions at the end"],
      "A2"
    ],
    [
      "v140-speaking-presentation-chart-change",
      "演示汇报·图表描述",
      "Describe the main change shown in a sales chart.",
      "This chart shows monthly sales from January to June. Sales rose steadily until April, fell slightly in May, and reached the highest point in June.",
      "Sales rose until April, fell slightly in May, and peaked in June.",
      "先说明图表范围，再按时间顺序描述趋势和最高点。",
      ["monthly sales", "rose steadily", "fell slightly", "highest point"],
      "A2"
    ],
    [
      "v140-speaking-presentation-transition",
      "演示汇报·内容过渡",
      "Move smoothly from a problem to the proposed solution.",
      "We have seen why response times increased. I would now like to turn to the proposed solution, starting with the staffing change and then the new scheduling process.",
      "Now that we understand the problem, let us turn to the proposed solution.",
      "回顾上一部分，再预告下一部分及其内部顺序。",
      ["response times increased", "turn to", "proposed solution", "scheduling process"],
      "B1"
    ],
    [
      "v140-speaking-presentation-clarify-question",
      "演示汇报·澄清提问",
      "Clarify an audience question before answering it.",
      "If I understand correctly, you are asking whether the cost estimate includes staff training, rather than whether the training has been scheduled. Is that right?",
      "Are you asking whether the cost estimate includes staff training?",
      "用重述和对比确认对方真正的问题，再开始回答。",
      ["understand correctly", "cost estimate", "staff training", "Is that right"],
      "B1"
    ],
    [
      "v140-speaking-presentation-time-cut",
      "演示汇报·时间调整",
      "Adapt when the chair shortens your presentation time.",
      "Thank you for letting me know. I will focus on the key finding and recommendation, skip the detailed method, and leave the full analysis in the handout.",
      "I will focus on the key finding and recommendation and leave the details in the handout.",
      "明确保留什么、删减什么，以及详细信息在哪里。",
      ["key finding", "recommendation", "detailed method", "full analysis"],
      "B1"
    ],
    [
      "v140-speaking-presentation-tradeoff",
      "演示汇报·方案权衡",
      "Recommend one option while acknowledging its main tradeoff.",
      "I recommend the phased launch because it reduces operational risk and gives us time to learn from early users. It will take two weeks longer, but the extra time is justified by the lower disruption.",
      "I recommend the phased launch because it lowers risk, although it takes two weeks longer.",
      "给出选择、两项理由、主要代价和为什么仍值得。",
      ["phased launch", "operational risk", "two weeks longer", "lower disruption"],
      "B2"
    ],
    [
      "v140-speaking-presentation-challenge",
      "演示汇报·应对质疑",
      "Respond calmly when an audience member strongly challenges your conclusion.",
      "That is a fair challenge. Our conclusion is based on the six-month pilot, so it may not predict long-term behaviour. I would keep the recommendation, but add a review point after the first quarter.",
      "The pilot is limited to six months, so I would add a review after the first quarter.",
      "认可合理质疑，说明证据边界，再调整方案而非防御。",
      ["fair challenge", "six-month pilot", "long-term behaviour", "review point"],
      "B2"
    ],

    [
      "v140-speaking-remote-audio-cutout",
      "远程工作·音频故障",
      "Tell a colleague that their audio is breaking up and suggest reconnecting.",
      "Your audio keeps cutting out, so I missed the last part. Could you reconnect and repeat the deadline, please?",
      "Your audio keeps cutting out. Could you reconnect and repeat the deadline?",
      "说明具体故障、漏听内容和希望对方采取的动作。",
      ["audio keeps cutting out", "missed the last part", "reconnect", "repeat the deadline"],
      "A2"
    ],
    [
      "v140-speaking-remote-screen-share",
      "远程工作·共享屏幕",
      "Ask a teammate to share the correct window during a call.",
      "I can see your desktop, but not the report. Could you share the report window and make the text a little larger?",
      "Could you share the report window and make the text larger?",
      "先说明当前看到什么，再提出准确的共享和显示请求。",
      ["see your desktop", "not the report", "share the report window", "text a little larger"],
      "A2"
    ],
    [
      "v140-speaking-remote-async-update",
      "远程工作·异步更新",
      "Give a concise asynchronous project update.",
      "Yesterday I completed the customer interviews. Today I am summarizing the findings, but I am waiting for Finance to confirm two cost figures. If they arrive by noon, the draft will be ready today.",
      "The interviews are complete. I am summarizing findings and waiting for two figures from Finance.",
      "异步更新包含已完成、正在做、阻塞项和预计结果。",
      ["completed the customer interviews", "summarizing the findings", "waiting for Finance", "draft will be ready"],
      "B1"
    ],
    [
      "v140-speaking-remote-time-zone",
      "远程工作·跨时区排会",
      "Suggest a fair meeting time for colleagues in different time zones.",
      "Three p.m. in London is very early for Vancouver. Could we meet at five p.m. London time instead? That is nine a.m. in Vancouver and keeps the meeting within working hours for both teams.",
      "Could we meet at five p.m. London time so both teams are within working hours?",
      "指出原时间影响，给出双时区的新时间并说明公平性。",
      ["very early for Vancouver", "five p.m. London time", "nine a.m. in Vancouver", "both teams"],
      "B1"
    ],
    [
      "v140-speaking-remote-file-permission",
      "远程工作·文件权限",
      "Explain an access problem and request the minimum permission needed.",
      "I can view the project folder, but I cannot edit the schedule. Could you give me editor access to that file only? I do not need permission for the confidential finance folder.",
      "Could you give me editor access to the schedule only?",
      "说明当前权限和受限动作，并遵循最小权限原则提出请求。",
      ["view the project folder", "edit the schedule", "editor access", "confidential finance folder"],
      "B1"
    ],
    [
      "v140-speaking-remote-performance-concern",
      "远程工作·绩效沟通",
      "Raise a remote-work performance concern using observable evidence.",
      "I would like to discuss a pattern rather than a single incident. Three client messages went unanswered for more than a day last week, and two handovers lacked key details. Can we identify what is causing the delay and agree on a response standard?",
      "Several client messages and handovers were delayed. Can we identify the cause and agree on a standard?",
      "用可观察事实描述模式，避免揣测动机，再共同制定标准。",
      ["a pattern", "Three client messages", "two handovers", "response standard"],
      "B2"
    ],
    [
      "v140-speaking-remote-incident-coordination",
      "远程工作·线上事故",
      "Coordinate a distributed team during a service incident.",
      "The payment service is unavailable, so I will open an incident channel and post updates every thirty minutes. Priya will contact the provider, Mateo will assess customer impact, and all external messages must be approved by Communications.",
      "I will open an incident channel, assign owners, and post updates every thirty minutes.",
      "快速说明影响、沟通频道、更新节奏、责任人与对外信息规则。",
      ["payment service is unavailable", "incident channel", "every thirty minutes", "approved by Communications"],
      "B2"
    ],

    [
      "v140-speaking-culture-name-pronunciation",
      "跨文化·姓名发音",
      "Politely ask a new colleague how to pronounce their name.",
      "It is nice to meet you. Could you please say your name again so I can learn the correct pronunciation?",
      "Could you say your name again so I can learn the correct pronunciation?",
      "直接表达尊重和学习意图，不自行猜测发音。",
      ["nice to meet you", "say your name again", "learn", "correct pronunciation"],
      "A2"
    ],
    [
      "v140-speaking-culture-dietary-need",
      "跨文化·饮食需求",
      "Tell a host about a dietary restriction without rejecting the invitation.",
      "Thank you for inviting me. I would be happy to join the dinner, but I cannot eat peanuts because of an allergy. Please let me know if I should bring a separate dish.",
      "I would be happy to join, but I cannot eat peanuts because of an allergy.",
      "先接受邀请，再清楚说明限制并主动询问可行安排。",
      ["happy to join", "cannot eat peanuts", "because of an allergy", "separate dish"],
      "A2"
    ],
    [
      "v140-speaking-culture-soften-feedback",
      "跨文化·反馈表达",
      "Rephrase direct criticism as constructive feedback.",
      "The report covers the main facts clearly. To make the recommendation more persuasive, I suggest adding customer evidence and explaining the cost assumptions. Could we review those sections together?",
      "The facts are clear. I suggest adding customer evidence and explaining the cost assumptions.",
      "先肯定有效部分，再把批评转换成具体改进建议和协作邀请。",
      ["main facts clearly", "more persuasive", "customer evidence", "review those sections together"],
      "B1"
    ],
    [
      "v140-speaking-culture-check-silence",
      "跨文化·确认沉默",
      "Check for concerns when silence may not mean agreement.",
      "I do not want to assume that silence means agreement. Would anyone like more time to consider the proposal, or would it be easier to send comments after the meeting?",
      "Would anyone like more time or prefer to send comments after the meeting?",
      "不替他人解释沉默，提供口头和会后书面两种回应渠道。",
      ["silence means agreement", "more time", "consider the proposal", "comments after the meeting"],
      "B1"
    ],
    [
      "v140-speaking-culture-holiday-awareness",
      "跨文化·节假日协作",
      "Adjust a deadline that conflicts with a colleague's public holiday.",
      "I have just realized that Monday is a public holiday for the Mumbai team. Let us move their review deadline to Tuesday and ask the London team to cover urgent questions on Monday.",
      "Monday is a public holiday for Mumbai, so let us move the review to Tuesday.",
      "承认遗漏，调整期限，并为假期当天安排明确覆盖。",
      ["public holiday", "Mumbai team", "review deadline", "cover urgent questions"],
      "B1"
    ],
    [
      "v140-speaking-culture-face-saving-disagreement",
      "跨文化·维护关系",
      "Disagree with a senior colleague without causing unnecessary loss of face.",
      "I see the benefit of using one global script, especially for consistency. My concern is that some examples may not fit local customers. Could we keep the shared structure while allowing each region to adapt the examples?",
      "Could we keep the global structure but allow regions to adapt the examples?",
      "先认可方案价值，把分歧表述为具体顾虑，再保留共同框架。",
      ["benefit", "global script", "local customers", "adapt the examples"],
      "B2"
    ],
    [
      "v140-speaking-culture-global-working-norms",
      "跨文化·团队规范",
      "Help a global team agree on communication norms across different styles.",
      "Some team members prefer immediate discussion, while others want time to reflect in writing. I suggest that we discuss urgent issues live, circulate major proposals in advance, and allow twenty-four hours for written feedback before final decisions.",
      "Let us discuss urgent issues live and allow written feedback before final decisions.",
      "把不同偏好转化为分场景规则，并设置书面反馈窗口。",
      ["immediate discussion", "reflect in writing", "major proposals", "twenty-four hours"],
      "B2"
    ]
  ];

  window.ENGLISH_COMPASS_SPEAKING_V140 = Object.freeze(rows.map(([
    id,
    context,
    prompt,
    target,
    shortVersion,
    tip,
    keywords,
    level
  ]) => Object.freeze({
    id,
    scenario: context,
    title: context,
    context,
    prompt,
    target,
    sample: target,
    shortVersion,
    tip,
    keywords: Object.freeze([...keywords]),
    level
  })));
})();

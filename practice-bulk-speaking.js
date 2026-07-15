(function () {
  "use strict";

  const rows = [
    [
      "bulk-speaking-roommate-volume",
      "请求室友调低音量",
      "Ask your roommate to lower the music because you have an early shift.",
      "Could you turn the music down a little? I have an early shift tomorrow and need to sleep. You can turn it up again after I leave in the morning.",
      "Could you turn the music down? I have an early shift and need to sleep.",
      "先礼貌提出请求，再说明实际原因，并给出不影响对方的时间方案。",
      ["turn the music down", "early shift", "need to sleep", "in the morning"],
      "A2"
    ],
    [
      "bulk-speaking-airport-missing-suitcase",
      "机场行李未到",
      "Report a missing suitcase at the airport baggage desk.",
      "My suitcase did not arrive on the baggage belt. It is a medium black case with a red strap. Here is my baggage tag. Could you help me report it?",
      "My black suitcase did not arrive. Here is my baggage tag. Could you help me report it?",
      "说明行李未到、外观特征和行李牌，并明确请求登记遗失。",
      ["did not arrive", "black case", "red strap", "baggage tag"],
      "A2"
    ],
    [
      "bulk-speaking-bank-new-account",
      "开立银行账户",
      "Ask a bank employee what you need to open an account.",
      "I would like to open a bank account. I have my passport, but do I also need proof of address? Should I make an appointment before I return?",
      "I would like to open a bank account. What documents do I need?",
      "先说办理事项，再逐项确认身份证明、住址证明和是否预约。",
      ["open a bank account", "passport", "proof of address", "appointment"],
      "A2"
    ],
    [
      "bulk-speaking-prepaid-phone-plan",
      "办理短期手机套餐",
      "Ask for a phone plan suitable for a three-month stay overseas.",
      "I need a prepaid plan for three months. I use a lot of mobile data and sometimes make international calls. Which plan would you recommend?",
      "I need a three-month prepaid plan with mobile data. What do you recommend?",
      "说明停留时长、流量习惯和国际通话需求，让店员能够准确推荐。",
      ["prepaid plan", "three months", "mobile data", "international calls"],
      "A2"
    ],
    [
      "bulk-speaking-subway-closure-route",
      "地铁停运改道",
      "Ask station staff for another route when a subway line is closed.",
      "I see that the Green Line is closed. What is the best way to get to Central Station now? Do I need to change buses, and how long will the journey take?",
      "The Green Line is closed. How can I get to Central Station now?",
      "确认目的地、是否换乘和预计时间，比只问 Which way 更实用。",
      ["Green Line", "closed", "Central Station", "change buses"],
      "A2"
    ],
    [
      "bulk-speaking-hotel-late-checkout",
      "申请延迟退房",
      "Ask a hotel receptionist for a late checkout and check the fee.",
      "My flight leaves in the evening. Would it be possible to have a late checkout at two o'clock, and is there an extra fee?",
      "Could I check out at two o'clock? Is there an extra fee?",
      "先解释原因，再提出具体退房时间并确认费用。",
      ["flight leaves", "late checkout", "two o'clock", "extra fee"],
      "A2"
    ],
    [
      "bulk-speaking-language-exchange",
      "参加语言交换",
      "Introduce yourself at a language exchange and suggest how to practise together.",
      "Hi, I am new to the city and I would like to practise English. I speak Mandarin, so perhaps we can take turns speaking each language for fifteen minutes.",
      "I would like to practise English, and I can help with Mandarin. Shall we take turns?",
      "包含自己的学习目标、能提供的帮助和一个简单的练习安排。",
      ["new to the city", "practise English", "speak Mandarin", "take turns"],
      "A2"
    ],
    [
      "bulk-speaking-vegetarian-meal",
      "确认素食餐点",
      "Ask a server for a vegetarian dish that does not contain meat stock.",
      "I am vegetarian, so I do not eat meat or fish. Does this soup contain meat stock, and could you recommend a suitable main dish?",
      "I am vegetarian. Does this soup contain meat stock?",
      "清楚说明饮食方式，并特别确认容易被忽略的高汤成分。",
      ["vegetarian", "meat or fish", "meat stock", "recommend"],
      "A2"
    ],
    [
      "bulk-speaking-medical-certificate",
      "申请病假证明",
      "Ask a doctor for a medical certificate after discussing your illness.",
      "I have had a fever since Monday and my employer needs a medical certificate. Could you provide a sick note covering me through Friday?",
      "My employer needs a medical certificate. Could I have a sick note through Friday?",
      "说明症状持续时间、单位要求和证明需要覆盖的日期。",
      ["fever since Monday", "employer", "medical certificate", "through Friday"],
      "A2"
    ],
    [
      "bulk-speaking-electricity-bill",
      "核对异常电费",
      "Ask your landlord to explain an unusually high electricity bill.",
      "This month's electricity bill is much higher than usual, although my usage has not changed. Could we check the meter reading together?",
      "The electricity bill is much higher than usual. Could we check the meter reading?",
      "客观比较本月与平时金额，说明用量未变，再提出共同核对。",
      ["electricity bill", "much higher", "usage", "meter reading"],
      "A2"
    ],

    [
      "bulk-speaking-interview-company-fit",
      "说明选择公司原因",
      "Explain why you are interested in this particular employer.",
      "I am interested in your company because of its practical training programme and its focus on sustainable retail. The role would let me use my customer service experience while learning more about international operations.",
      "Your training and sustainable retail work match my experience and learning goals.",
      "把公司特点、个人经验和成长目标连接起来，避免只说公司很有名。",
      ["practical training", "sustainable retail", "customer service experience", "international operations"],
      "B1"
    ],
    [
      "bulk-speaking-learning-new-system",
      "快速学习新系统",
      "Describe how you learned unfamiliar software for a previous role.",
      "When my team introduced a new booking system, I watched the training videos, practised with sample orders, and wrote a short guide for common tasks. I was using it independently within three days.",
      "I used training videos, sample orders, and my own guide to learn the system in three days.",
      "用具体学习方法和可量化结果证明学习能力。",
      ["booking system", "training videos", "sample orders", "within three days"],
      "B1"
    ],
    [
      "bulk-speaking-weekend-availability",
      "说明周末排班范围",
      "Explain your weekend availability while setting a clear limit.",
      "I am available for alternate Saturdays and every Sunday morning. I attend a course on Sunday evenings, so I would need those shifts to finish by four.",
      "I can work alternate Saturdays and Sunday mornings, but I need to finish by four on Sundays.",
      "先说能工作的时间，再清楚说明固定限制和具体结束时间。",
      ["alternate Saturdays", "Sunday morning", "attend a course", "finish by four"],
      "B1"
    ],
    [
      "bulk-speaking-hybrid-work-policy",
      "询问混合办公安排",
      "Ask an interviewer about hybrid work after the initial training period.",
      "Could you explain the hybrid work policy after the initial training period? I would also like to know how often the team normally meets in person.",
      "After training, what is the hybrid work policy and how often does the team meet in person?",
      "先表明询问的是培训结束后的安排，再确认团队线下协作频率。",
      ["hybrid work policy", "initial training period", "how often", "meets in person"],
      "B1"
    ],
    [
      "bulk-speaking-standup-blocker",
      "晨会汇报阻碍",
      "Give a stand-up update that identifies a blocker and the help you need.",
      "I completed the data cleaning yesterday, but the final chart is blocked because two sales figures are missing. I need the sales team to confirm them by noon so I can finish today.",
      "The data is clean, but two sales figures are missing. I need confirmation by noon.",
      "晨会汇报按已完成、当前阻碍、所需帮助和期限排列。",
      ["data cleaning", "chart is blocked", "sales figures", "by noon"],
      "B1"
    ],
    [
      "bulk-speaking-delegating-analysis",
      "清楚委派分析任务",
      "Delegate a customer survey analysis and arrange a check-in.",
      "Could you analyse the customer survey responses and group the comments into three main themes? Please use last quarter's format, and let us check the first draft together on Thursday morning.",
      "Please group the survey comments into three themes and use last quarter's format.",
      "委派时说明产出、方法参考和检查节点，而不只是说“帮我做一下”。",
      ["survey responses", "three main themes", "last quarter's format", "Thursday morning"],
      "B1"
    ],
    [
      "bulk-speaking-recovery-plan",
      "未完成任务补救",
      "Tell your manager that a task is incomplete and present a recovery plan.",
      "I have not finished the supplier comparison because two quotations arrived late. I have completed the cost section, and I can send the full comparison by eleven tomorrow after checking the quality details.",
      "Two quotations arrived late. The cost section is ready, and I can send the full comparison tomorrow morning.",
      "主动承认未完成，说明客观原因、当前进度和新的可执行交付时间。",
      ["not finished", "quotations arrived late", "cost section", "by eleven tomorrow"],
      "B1"
    ],
    [
      "bulk-speaking-compare-service-plans",
      "比较服务套餐",
      "Compare two service plans after identifying a customer's priorities.",
      "Because you travel often and need weekend support, the Plus plan may suit you better. It costs more, but it includes international coverage and a twenty-four-hour helpline.",
      "The Plus plan costs more, but it includes international coverage and weekend support.",
      "先复述客户需求，再解释推荐方案的成本与对应价值。",
      ["travel often", "weekend support", "Plus plan", "international coverage"],
      "B1"
    ],
    [
      "bulk-speaking-customer-privacy",
      "回应隐私疑问",
      "Reassure a customer who asks how their personal information will be used.",
      "We use your contact details only to process this order and send delivery updates. We do not share them with advertisers, and you can request deletion after the order is complete.",
      "We use your details for the order and delivery only, and you can request deletion later.",
      "说明收集目的、不会进行的用途以及客户可采取的控制措施。",
      ["contact details", "process this order", "do not share", "request deletion"],
      "B1"
    ],
    [
      "bulk-speaking-presentation-closing",
      "演示收尾与提问",
      "Close a presentation by summarizing recommendations and inviting questions.",
      "To conclude, I recommend simplifying the form, adding clearer instructions, and testing the changes with ten users. Thank you for listening, and I am happy to take questions.",
      "I recommend a simpler form, clearer instructions, and user testing. I am happy to take questions.",
      "收尾重申三项核心建议，随后自然转入提问环节。",
      ["to conclude", "simplifying the form", "testing the changes", "take questions"],
      "B1"
    ],

    [
      "bulk-speaking-presentation-unknown-answer",
      "回应未知数据问题",
      "Answer a difficult presentation question when you do not yet have the data.",
      "That is an important question. I do not have the regional breakdown with me, so I do not want to guess. I will verify the figures and send a written answer by tomorrow afternoon.",
      "I do not have that breakdown, so I will verify it and reply tomorrow afternoon.",
      "承认信息缺口、避免猜测，并给出明确的核实方式和回复期限。",
      ["important question", "do not want to guess", "verify the figures", "tomorrow afternoon"],
      "B2"
    ],
    [
      "bulk-speaking-cross-cultural-directness",
      "澄清沟通风格差异",
      "Discuss a teammate's direct communication style without making cultural assumptions.",
      "I sometimes read the short messages as urgent or critical, although that may not be the intention. Could we clarify which channel to use for urgent requests and how much context we both prefer?",
      "Short messages can feel urgent to me. Could we agree on a channel and context for urgent requests?",
      "使用个人感受而非文化标签，并协商可观察、可执行的沟通规则。",
      ["short messages", "may not be the intention", "urgent requests", "how much context"],
      "B2"
    ],
    [
      "bulk-speaking-public-holiday-apology",
      "修复节假日误会",
      "Apologize after scheduling work on a colleague's important public holiday.",
      "I am sorry that I scheduled the workshop on an important public holiday without checking the local calendar. I have moved it to Tuesday and will add regional holidays to our planning checklist.",
      "I am sorry I missed the public holiday. I moved the workshop and updated our checklist.",
      "道歉时承认具体疏忽，立即修正安排，并说明防止再次发生的措施。",
      ["public holiday", "local calendar", "moved it to Tuesday", "planning checklist"],
      "B2"
    ],
    [
      "bulk-speaking-department-priority-conflict",
      "协调部门优先级冲突",
      "Help sales and operations agree on priorities when capacity is limited.",
      "Sales needs the custom order this week, while operations has limited capacity and a safety inspection. I suggest we complete the inspection first, reserve one production slot for the order, and review the remaining work tomorrow.",
      "Let us complete the inspection, reserve one slot for the urgent order, and review the rest tomorrow.",
      "分别陈述双方约束，提出兼顾安全、客户和产能的排序方案。",
      ["custom order", "limited capacity", "safety inspection", "one production slot"],
      "B2"
    ],
    [
      "bulk-speaking-promotion-review",
      "绩效面谈争取晋升",
      "Ask to discuss promotion using evidence from your recent performance.",
      "Over the past year, I have trained four new colleagues, reduced response times, and taken responsibility for the weekend rota. I would like to discuss whether I am ready for a senior role and what further evidence you would need.",
      "I have expanded my responsibilities and would like to discuss readiness for a senior role.",
      "用具体成果和新增职责支撑请求，同时询问尚需达到的标准。",
      ["trained four", "reduced response times", "weekend rota", "senior role"],
      "B2"
    ],
    [
      "bulk-speaking-low-risk-pilot",
      "说服主管开展试点",
      "Persuade your manager to test a new process through a low-risk pilot.",
      "Rather than changing the whole process immediately, I propose a two-week pilot with one team. We can measure handling time and error rates, then decide whether the benefits justify a wider rollout.",
      "I propose a two-week pilot so we can measure results before a wider rollout.",
      "降低决策风险：限定范围和时间、定义指标，并保留后续决定点。",
      ["two-week pilot", "one team", "error rates", "wider rollout"],
      "B2"
    ],
    [
      "bulk-speaking-service-outage-update",
      "发布服务中断更新",
      "Give customers a transparent update during a service outage without making an unsupported promise.",
      "We are experiencing a service outage affecting online payments. The technical team has identified the cause and is testing a fix. We will provide another update at three o'clock, even if the service is not yet restored.",
      "Online payments are unavailable. A fix is being tested, and the next update is at three.",
      "说明影响、当前处理状态和下一次更新时间，不承诺无法确认的恢复时刻。",
      ["service outage", "online payments", "testing a fix", "three o'clock"],
      "B2"
    ],
    [
      "bulk-speaking-coaching-invoice-errors",
      "辅导重复出错的同事",
      "Coach a colleague who has made the same invoice error several times.",
      "I noticed that the tax code was missing from three recent invoices. Let us review one example together, identify where the process becomes unclear, and create a short check before the next batch.",
      "Let us review the repeated tax-code error and create a check for the next batch.",
      "聚焦可观察的错误和流程，不给人贴标签；共同找原因并建立检查点。",
      ["tax code", "three recent invoices", "review one example", "next batch"],
      "B2"
    ],
    [
      "bulk-speaking-vendor-quality-negotiation",
      "协商供应商质量问题",
      "Negotiate a remedy after a supplier delivers materials below the agreed standard.",
      "The latest batch does not meet the agreed quality standard, and twelve units cannot be used. We need replacements by Friday at no extra cost, plus a written explanation of how the next batch will be checked.",
      "Twelve units fail the agreed standard. We need free replacements by Friday and a prevention plan.",
      "用合同标准和数量描述问题，再明确补救期限、费用和预防措施。",
      ["quality standard", "twelve units", "by Friday", "written explanation"],
      "B2"
    ],
    [
      "bulk-speaking-chairing-interrupted-meeting",
      "主持跑题会议",
      "Bring an interrupted meeting back to the agenda while preserving a useful new issue.",
      "That staffing issue is important, but it is outside today's decision. I will add it to the parking list and arrange a separate discussion. For now, could we return to the budget options on the agenda?",
      "I will park the staffing issue for a separate discussion. Let us return to the budget options.",
      "认可新议题、记录后续处理方式，再明确把讨论带回当前决策。",
      ["staffing issue", "today's decision", "parking list", "return to the budget"],
      "B2"
    ]
  ];

  window.ENGLISH_COMPASS_BULK_SPEAKING = Object.freeze(rows.map(([
    id,
    scenario,
    prompt,
    target,
    shortVersion,
    tip,
    keywords,
    level
  ]) => Object.freeze({
    id,
    scenario,
    prompt,
    target,
    shortVersion,
    tip,
    keywords: Object.freeze([...keywords]),
    level
  })));
})();

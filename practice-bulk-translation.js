(function () {
  "use strict";

  window.ENGLISH_COMPASS_BULK_TRANSLATIONS = Object.freeze([
    {
      id: "bulk-translation-laundry-card",
      context: "海外生活",
      tone: "自然",
      source: "洗衣房在地下室，使用洗衣机前需要先购买洗衣卡。",
      answer: "The laundry room is in the basement, and you need to buy a laundry card before using the washing machine.",
      shortAnswer: "The laundry room is downstairs. Buy a laundry card before using the machine.",
      alternatives: ["The laundry facilities are in the basement, and a laundry card is required to use the machines."],
      chunks: [
        ["洗衣房在地下室", "The laundry room is in the basement"],
        ["使用洗衣机前", "before using the washing machine"],
        ["需要先购买洗衣卡", "you need to buy a laundry card"]
      ],
      hints: ["laundry room", "in the basement", "before using"],
      level: "A2"
    },
    {
      id: "bulk-translation-apartment-inspection",
      context: "海外生活",
      tone: "通知",
      source: "房东星期四会来检查公寓，请确保下午两点以后有人在家。",
      answer: "The landlord will inspect the apartment on Thursday, so please make sure someone is home after two.",
      shortAnswer: "The landlord is coming on Thursday. Please be home after two.",
      alternatives: ["The landlord is inspecting the apartment on Thursday, so someone needs to be home after 2 p.m."],
      chunks: [
        ["房东会来检查公寓", "The landlord will inspect the apartment"],
        ["星期四", "on Thursday"],
        ["请确保下午两点以后有人在家", "please make sure someone is home after two"]
      ],
      hints: ["landlord", "inspect the apartment", "home after two"],
      level: "A2"
    },
    {
      id: "bulk-translation-internet-fee",
      context: "海外生活",
      tone: "清楚",
      source: "网络费用不包含在房租里，我需要自己联系供应商开通服务。",
      answer: "Internet service is not included in the rent, so I need to contact a provider and arrange it myself.",
      shortAnswer: "Internet is not included, so I need to arrange it myself.",
      alternatives: ["The rent does not include internet, and I have to contact a provider to set up the service."],
      chunks: [
        ["网络费用不包含在房租里", "Internet service is not included in the rent"],
        ["我需要自己联系供应商", "I need to contact a provider myself"],
        ["开通服务", "to arrange the service"]
      ],
      hints: ["not included in the rent", "contact a provider", "arrange it myself"],
      level: "B1"
    },
    {
      id: "bulk-translation-moving-notice",
      context: "海外生活",
      tone: "正式",
      source: "如果您计划搬出，必须至少提前三十天通知物业经理。",
      answer: "If you plan to move out, you must give the property manager at least thirty days' notice.",
      shortAnswer: "Give the property manager at least thirty days' notice before moving out.",
      alternatives: ["If you intend to move out, you must notify the property manager at least thirty days in advance."],
      chunks: [
        ["如果您计划搬出", "If you plan to move out"],
        ["通知物业经理", "give the property manager notice"],
        ["至少提前三十天", "at least thirty days in advance"]
      ],
      hints: ["move out", "property manager", "thirty days' notice"],
      level: "B1"
    },
    {
      id: "bulk-translation-construction-rent",
      context: "海外生活",
      tone: "礼貌而坚定",
      source: "由于附近的施工每天清晨就开始，我想和房东商量在工程期间适当减免房租。",
      answer: "Since the nearby construction begins early every morning, I would like to discuss a reasonable rent reduction with the landlord while the work continues.",
      shortAnswer: "The construction starts early, so I would like to discuss a temporary rent reduction.",
      alternatives: ["Because the nearby building work starts early each day, I would like to ask the landlord about reducing the rent during the construction period."],
      chunks: [
        ["由于附近的施工每天清晨就开始", "Since the nearby construction begins early every morning"],
        ["我想和房东商量", "I would like to discuss with the landlord"],
        ["在工程期间适当减免房租", "a reasonable rent reduction while the work continues"]
      ],
      hints: ["nearby construction", "rent reduction", "while the work continues"],
      level: "B2"
    },
    {
      id: "bulk-translation-interview-start-shifts",
      context: "面试",
      tone: "积极",
      source: "我可以从下个月一号开始工作，也愿意接受轮班安排。",
      answer: "I can start work on the first of next month, and I am also willing to work shifts.",
      shortAnswer: "I can start next month and I am available for shift work.",
      alternatives: ["I am able to begin on the first of next month and am open to working different shifts."],
      chunks: [
        ["我可以开始工作", "I can start work"],
        ["从下个月一号", "on the first of next month"],
        ["也愿意接受轮班安排", "and I am willing to work shifts"]
      ],
      hints: ["start work", "the first of next month", "work shifts"],
      level: "A2"
    },
    {
      id: "bulk-translation-resume-copies",
      context: "面试",
      tone: "提醒",
      source: "请携带两份简历，并在面试开始前十分钟到达。",
      answer: "Please bring two copies of your resume and arrive ten minutes before the interview.",
      shortAnswer: "Bring two copies of your resume and arrive ten minutes early.",
      alternatives: ["Please prepare two copies of your resume and get there ten minutes before the interview starts."],
      chunks: [
        ["请携带两份简历", "Please bring two copies of your resume"],
        ["并到达", "and arrive"],
        ["在面试开始前十分钟", "ten minutes before the interview"]
      ],
      hints: ["two copies", "resume", "ten minutes before"],
      level: "A2"
    },
    {
      id: "bulk-translation-role-attraction",
      context: "面试",
      tone: "真诚而专业",
      source: "这个岗位最吸引我的地方，是它既需要解决实际问题，也需要与不同部门合作。",
      answer: "What attracts me most to this role is that it involves both solving practical problems and collaborating with different departments.",
      shortAnswer: "I like that this role combines problem-solving with cross-department collaboration.",
      alternatives: ["The role appeals to me because it requires practical problem-solving as well as cooperation across departments."],
      chunks: [
        ["这个岗位最吸引我的地方", "What attracts me most to this role"],
        ["是它既需要解决实际问题", "is that it involves solving practical problems"],
        ["也需要与不同部门合作", "and collaborating with different departments"]
      ],
      hints: ["what attracts me most", "practical problems", "different departments"],
      level: "B1"
    },
    {
      id: "bulk-translation-changing-priorities",
      context: "面试",
      tone: "招聘说明",
      source: "我们希望应聘者能够应对不断变化的优先事项，并在必要时独立工作。",
      answer: "We are looking for someone who can manage changing priorities and work independently when necessary.",
      shortAnswer: "We need someone who can adapt to changing priorities and work independently.",
      alternatives: ["We are seeking a candidate who can handle shifting priorities and complete tasks independently when required."],
      chunks: [
        ["我们希望应聘者", "We are looking for someone"],
        ["能够应对不断变化的优先事项", "who can manage changing priorities"],
        ["在必要时独立工作", "and work independently when necessary"]
      ],
      hints: ["looking for someone", "changing priorities", "work independently"],
      level: "B1"
    },
    {
      id: "bulk-translation-compensation-context",
      context: "面试",
      tone: "成熟而礼貌",
      source: "在讨论薪资范围之前，我想进一步了解职位的绩效目标和整体福利。",
      answer: "Before discussing the salary range, I would like to understand more about the role's performance objectives and overall benefits package.",
      shortAnswer: "Before discussing salary, I would like to understand the goals and benefits for this role.",
      alternatives: ["I would appreciate more information about the position's targets and total benefits before we discuss compensation."],
      chunks: [
        ["在讨论薪资范围之前", "Before discussing the salary range"],
        ["我想进一步了解", "I would like to understand more about"],
        ["职位的绩效目标和整体福利", "the role's performance objectives and overall benefits package"]
      ],
      hints: ["before discussing", "performance objectives", "benefits package"],
      level: "B2"
    },
    {
      id: "bulk-translation-remote-calendar",
      context: "职场",
      tone: "自然",
      source: "我明天上午在家办公，但会一直查看邮件和团队日历。",
      answer: "I will be working from home tomorrow morning, but I will keep checking my email and the team calendar.",
      shortAnswer: "I am working from home tomorrow morning, but I will stay online.",
      alternatives: ["I will work remotely tomorrow morning and continue to monitor email and the shared calendar."],
      chunks: [
        ["我明天上午在家办公", "I will be working from home tomorrow morning"],
        ["但会一直查看邮件", "but I will keep checking my email"],
        ["和团队日历", "and the team calendar"]
      ],
      hints: ["work from home", "tomorrow morning", "keep checking"],
      level: "A2"
    },
    {
      id: "bulk-translation-printer-service",
      context: "职场",
      tone: "通知",
      source: "二楼的打印机正在维修，请使用接待处旁边的那一台。",
      answer: "The printer on the second floor is being serviced, so please use the one beside reception.",
      shortAnswer: "The second-floor printer is being serviced. Please use the one by reception.",
      alternatives: ["Since the printer upstairs is under maintenance, please use the printer next to the reception desk."],
      chunks: [
        ["二楼的打印机", "The printer on the second floor"],
        ["正在维修", "is being serviced"],
        ["请使用接待处旁边的那一台", "please use the one beside reception"]
      ],
      hints: ["second floor", "being serviced", "beside reception"],
      level: "A2"
    },
    {
      id: "bulk-translation-shared-template",
      context: "职场",
      tone: "协作",
      source: "为了避免重复劳动，请把最终版本保存在共享文件夹，并使用统一的文件名格式。",
      answer: "To avoid duplicated work, please save the final version in the shared folder and use the standard file-naming format.",
      shortAnswer: "Save the final version in the shared folder using the standard file name.",
      alternatives: ["Please store the final version in the shared folder with the agreed naming format so that we do not duplicate work."],
      chunks: [
        ["为了避免重复劳动", "To avoid duplicated work"],
        ["请把最终版本保存在共享文件夹", "please save the final version in the shared folder"],
        ["使用统一的文件名格式", "use the standard file-naming format"]
      ],
      hints: ["avoid duplicated work", "shared folder", "file-naming format"],
      level: "B1"
    },
    {
      id: "bulk-translation-meeting-decisions",
      context: "职场",
      tone: "专业提醒",
      source: "请在会议记录中写明每项决定，并为每个后续行动指定负责人。",
      answer: "Please record every decision in the meeting notes and assign an owner to each follow-up action.",
      shortAnswer: "Record each decision and assign someone to every follow-up action.",
      alternatives: ["Please document all decisions in the meeting minutes and name a person responsible for each follow-up task."],
      chunks: [
        ["在会议记录中", "in the meeting notes"],
        ["写明每项决定", "record every decision"],
        ["为每个后续行动指定负责人", "assign an owner to each follow-up action"]
      ],
      hints: ["meeting notes", "record every decision", "assign an owner"],
      level: "B1"
    },
    {
      id: "bulk-translation-limited-resources",
      context: "职场",
      tone: "战略性",
      source: "在资源有限的情况下，我们应根据业务影响重新分配人员，而不是平均削减每个团队的预算。",
      answer: "With limited resources, we should reallocate staff according to business impact rather than reduce every team's budget equally.",
      shortAnswer: "We should move staff based on business impact instead of cutting every budget equally.",
      alternatives: ["Given the resource constraints, staffing should be redistributed by business impact rather than applying equal budget cuts to all teams."],
      chunks: [
        ["在资源有限的情况下", "With limited resources"],
        ["我们应根据业务影响重新分配人员", "we should reallocate staff according to business impact"],
        ["而不是平均削减每个团队的预算", "rather than reduce every team's budget equally"]
      ],
      hints: ["limited resources", "reallocate staff", "rather than"],
      level: "B2"
    },
    {
      id: "bulk-translation-wrong-color",
      context: "客户服务",
      tone: "礼貌",
      source: "我订的是黑色，但收到的是蓝色，可以帮我换货吗？",
      answer: "I ordered the black one, but I received the blue one. Could you help me exchange it?",
      shortAnswer: "I received the wrong color. Could I exchange it?",
      alternatives: ["I ordered this item in black but received it in blue. Could you arrange an exchange?"],
      chunks: [
        ["我订的是黑色", "I ordered the black one"],
        ["但收到的是蓝色", "but I received the blue one"],
        ["可以帮我换货吗", "Could you help me exchange it"]
      ],
      hints: ["ordered", "received", "exchange it"],
      level: "A2"
    },
    {
      id: "bulk-translation-service-desk-closing",
      context: "客户服务",
      tone: "说明",
      source: "服务台晚上八点关闭，但您可以随时在线提交退货申请。",
      answer: "The service desk closes at eight, but you can submit the return request online at any time.",
      shortAnswer: "The desk closes at eight, but online return requests are available at any time.",
      alternatives: ["Although the customer service desk closes at eight, you can file a return request online whenever you like."],
      chunks: [
        ["服务台晚上八点关闭", "The service desk closes at eight"],
        ["但您可以", "but you can"],
        ["随时在线提交退货申请", "submit the return request online at any time"]
      ],
      hints: ["service desk", "closes at eight", "return request online"],
      level: "A2"
    },
    {
      id: "bulk-translation-warranty-repair-time",
      context: "客户服务",
      tone: "清楚而礼貌",
      source: "这台设备仍在保修期内，请告诉我维修大约需要多久。",
      answer: "This device is still under warranty. Could you tell me approximately how long the repair will take?",
      shortAnswer: "It is still under warranty. How long will the repair take?",
      alternatives: ["The device is covered by the warranty, so could you let me know the estimated repair time?"],
      chunks: [
        ["这台设备仍在保修期内", "This device is still under warranty"],
        ["请告诉我", "Could you tell me"],
        ["维修大约需要多久", "approximately how long the repair will take"]
      ],
      hints: ["under warranty", "approximately", "repair will take"],
      level: "B1"
    },
    {
      id: "bulk-translation-parcel-located",
      context: "客户服务",
      tone: "积极更新",
      source: "我们已在区域中心找到您的包裹，预计明天中午前送达。",
      answer: "We have located your parcel at the regional center and expect to deliver it by noon tomorrow.",
      shortAnswer: "We found your parcel and expect to deliver it by noon tomorrow.",
      alternatives: ["Your parcel has been found at the regional distribution center and should arrive before midday tomorrow."],
      chunks: [
        ["我们已找到您的包裹", "We have located your parcel"],
        ["在区域中心", "at the regional center"],
        ["预计明天中午前送达", "expect to deliver it by noon tomorrow"]
      ],
      hints: ["located your parcel", "regional center", "by noon tomorrow"],
      level: "B1"
    },
    {
      id: "bulk-translation-service-recovery",
      context: "客户服务",
      tone: "审慎而专业",
      source: "在核实责任之前，请先向客户说明我们正在调查，并承诺在今天结束前提供明确更新。",
      answer: "Before confirming responsibility, explain to the customer that we are investigating and commit to providing a clear update by the end of today.",
      shortAnswer: "Tell the customer we are investigating and promise a clear update today.",
      alternatives: ["Before assigning responsibility, let the customer know that the issue is under investigation and that we will provide a definite update before the day ends."],
      chunks: [
        ["在核实责任之前", "Before confirming responsibility"],
        ["向客户说明我们正在调查", "explain to the customer that we are investigating"],
        ["承诺在今天结束前提供明确更新", "commit to providing a clear update by the end of today"]
      ],
      hints: ["before confirming responsibility", "investigating", "by the end of today"],
      level: "B2"
    },
    {
      id: "bulk-translation-formal-quotation",
      context: "商务",
      tone: "礼貌",
      source: "请把包含税费和交货日期的正式报价发到我的邮箱。",
      answer: "Please send the formal quotation, including tax and the delivery date, to my email address.",
      shortAnswer: "Please email me the formal quotation with tax and delivery details.",
      alternatives: ["Could you email me an official quotation that includes the tax and expected delivery date?"],
      chunks: [
        ["请把正式报价发到我的邮箱", "Please send the formal quotation to my email address"],
        ["包含税费", "including tax"],
        ["和交货日期", "and the delivery date"]
      ],
      hints: ["formal quotation", "including tax", "delivery date"],
      level: "A2"
    },
    {
      id: "bulk-translation-delivery-included",
      context: "商务",
      tone: "报价说明",
      source: "该价格包含送货到办公室的费用，但安装费需要另行收取。",
      answer: "The price includes delivery to your office, but installation will be charged separately.",
      shortAnswer: "The price includes office delivery, but installation costs extra.",
      alternatives: ["Delivery to your office is included in the price, while installation is billed separately."],
      chunks: [
        ["该价格包含送货费用", "The price includes delivery"],
        ["到您的办公室", "to your office"],
        ["安装费需要另行收取", "installation will be charged separately"]
      ],
      hints: ["price includes delivery", "to your office", "charged separately"],
      level: "A2"
    },
    {
      id: "bulk-translation-deposit-discount",
      context: "商务",
      tone: "谈判",
      source: "如果我们本周支付百分之五十的定金，你们能否把总价降低百分之三？",
      answer: "If we pay a fifty percent deposit this week, could you reduce the total price by three percent?",
      shortAnswer: "Could you offer a three percent discount if we pay half this week?",
      alternatives: ["Would you lower the overall price by three percent if we paid a fifty percent deposit this week?"],
      chunks: [
        ["如果我们本周支付百分之五十的定金", "If we pay a fifty percent deposit this week"],
        ["你们能否", "could you"],
        ["把总价降低百分之三", "reduce the total price by three percent"]
      ],
      hints: ["fifty percent deposit", "reduce the total price", "by three percent"],
      level: "B1"
    },
    {
      id: "bulk-translation-revised-contract-support",
      context: "商务",
      tone: "正式",
      source: "修订后的合同把技术支持延长至十二个月，年度费用保持不变。",
      answer: "The revised contract extends technical support to twelve months without changing the annual fee.",
      shortAnswer: "The revised contract provides twelve months of support at the same annual fee.",
      alternatives: ["Under the amended contract, technical support lasts twelve months and the yearly fee remains unchanged."],
      chunks: [
        ["修订后的合同", "The revised contract"],
        ["把技术支持延长至十二个月", "extends technical support to twelve months"],
        ["年度费用保持不变", "without changing the annual fee"]
      ],
      hints: ["revised contract", "technical support", "annual fee remains unchanged"],
      level: "B1"
    },
    {
      id: "bulk-translation-exclusivity-evidence",
      context: "商务",
      tone: "审慎",
      source: "在授予独家经营权之前，我们需要证据证明该分销商能够完成区域销售目标。",
      answer: "Before granting exclusivity, we need evidence that the distributor can meet the regional sales targets.",
      shortAnswer: "We need proof that the distributor can meet its targets before granting exclusivity.",
      alternatives: ["We must see evidence that the distributor can achieve the regional sales targets before offering exclusive rights."],
      chunks: [
        ["在授予独家经营权之前", "Before granting exclusivity"],
        ["我们需要证据", "we need evidence"],
        ["该分销商能够完成区域销售目标", "the distributor can meet the regional sales targets"]
      ],
      hints: ["granting exclusivity", "need evidence", "meet the sales targets"],
      level: "B2"
    },
    {
      id: "bulk-translation-first-phase-testing",
      context: "项目",
      tone: "进度说明",
      source: "我们计划在星期五前完成第一阶段，并于下周一开始测试。",
      answer: "We plan to complete the first phase by Friday and begin testing next Monday.",
      shortAnswer: "We will finish phase one by Friday and start testing on Monday.",
      alternatives: ["Our plan is to finish the first stage before Friday and start testing next Monday."],
      chunks: [
        ["我们计划", "We plan to"],
        ["在星期五前完成第一阶段", "complete the first phase by Friday"],
        ["于下周一开始测试", "begin testing next Monday"]
      ],
      hints: ["complete the first phase", "by Friday", "begin testing"],
      level: "A2"
    },
    {
      id: "bulk-translation-testing-meeting-moved",
      context: "项目",
      tone: "通知",
      source: "测试会议已从星期二上午改到星期三下午。",
      answer: "The testing meeting has moved from Tuesday morning to Wednesday afternoon.",
      shortAnswer: "The testing meeting is now on Wednesday afternoon.",
      alternatives: ["The testing session originally scheduled for Tuesday morning has been moved to Wednesday afternoon."],
      chunks: [
        ["测试会议", "The testing meeting"],
        ["已从星期二上午改期", "has moved from Tuesday morning"],
        ["到星期三下午", "to Wednesday afternoon"]
      ],
      hints: ["testing meeting", "moved from", "Wednesday afternoon"],
      level: "A2"
    },
    {
      id: "bulk-translation-dependency-delay",
      context: "项目",
      tone: "专业",
      source: "由于一项关键任务延迟，后续开发工作最早要到星期四才能开始。",
      answer: "Because a critical task has been delayed, the next stage of development cannot begin until Thursday at the earliest.",
      shortAnswer: "A critical delay means development cannot start before Thursday.",
      alternatives: ["The delay to a key task means that further development will not be able to start until Thursday at the earliest."],
      chunks: [
        ["由于一项关键任务延迟", "Because a critical task has been delayed"],
        ["后续开发工作", "the next stage of development"],
        ["最早要到星期四才能开始", "cannot begin until Thursday at the earliest"]
      ],
      hints: ["critical task", "has been delayed", "at the earliest"],
      level: "B1"
    },
    {
      id: "bulk-translation-prototype-approved",
      context: "项目",
      tone: "积极更新",
      source: "客户批准了原型，但要求最终版本采用更简洁的导航菜单。",
      answer: "The client approved the prototype but requested a simpler navigation menu for the final version.",
      shortAnswer: "The client approved the prototype and asked for simpler navigation in the final version.",
      alternatives: ["Although the client accepted the prototype, they want the final version to have a more straightforward navigation menu."],
      chunks: [
        ["客户批准了原型", "The client approved the prototype"],
        ["但要求", "but requested"],
        ["最终版本采用更简洁的导航菜单", "a simpler navigation menu for the final version"]
      ],
      hints: ["approved the prototype", "final version", "simpler navigation menu"],
      level: "B1"
    },
    {
      id: "bulk-translation-scope-freeze",
      context: "项目",
      tone: "风险提示",
      source: "除非在本周结束前确定并冻结项目范围，否则团队无法给出可靠的上线时间估算。",
      answer: "Unless the scope is frozen by the end of this week, the team cannot provide a reliable launch estimate.",
      shortAnswer: "The team cannot estimate the launch reliably unless the scope is frozen this week.",
      alternatives: ["If the project scope is not finalized by the end of the week, the team will be unable to give an accurate launch estimate."],
      chunks: [
        ["除非确定并冻结项目范围", "Unless the scope is frozen"],
        ["在本周结束前", "by the end of this week"],
        ["无法给出可靠的上线时间估算", "cannot provide a reliable launch estimate"]
      ],
      hints: ["scope is frozen", "by the end of this week", "launch estimate"],
      level: "B2"
    },
    {
      id: "bulk-translation-confirm-name",
      context: "跨文化",
      tone: "礼貌",
      source: "刚才我没有听清您的名字，可以请您再说一遍吗？",
      answer: "I did not catch your name just now. Could you say it again, please?",
      shortAnswer: "Sorry, I did not catch your name. Could you repeat it?",
      alternatives: ["I am sorry, I missed your name. Would you mind repeating it?"],
      chunks: [
        ["刚才我没有听清您的名字", "I did not catch your name just now"],
        ["可以请您", "Could you"],
        ["再说一遍吗", "say it again"]
      ],
      hints: ["did not catch", "your name", "say it again"],
      level: "A2"
    },
    {
      id: "bulk-translation-first-name-culture",
      context: "跨文化",
      tone: "文化说明",
      source: "在这间办公室里，同事通常互相称呼名字，高级经理也不例外。",
      answer: "In this office, colleagues usually call one another by their first names, including senior managers.",
      shortAnswer: "People here usually use first names, even with senior managers.",
      alternatives: ["Colleagues in this office normally address each other by their first names, including members of senior management."],
      chunks: [
        ["在这间办公室里", "In this office"],
        ["同事通常互相称呼名字", "colleagues usually call one another by their first names"],
        ["高级经理也不例外", "including senior managers"]
      ],
      hints: ["in this office", "first names", "including senior managers"],
      level: "A2"
    },
    {
      id: "bulk-translation-soften-email",
      context: "跨文化",
      tone: "合作建议",
      source: "为了避免邮件语气显得太直接，可以先说明背景，再礼貌地提出请求。",
      answer: "To avoid sounding too direct in an email, you can explain the context first and then make the request politely.",
      shortAnswer: "Give some context before making a polite request in the email.",
      alternatives: ["You can soften the email by providing context before you state your request politely."],
      chunks: [
        ["为了避免邮件语气显得太直接", "To avoid sounding too direct in an email"],
        ["可以先说明背景", "you can explain the context first"],
        ["再礼貌地提出请求", "then make the request politely"]
      ],
      hints: ["avoid sounding too direct", "explain the context", "make the request politely"],
      level: "B1"
    },
    {
      id: "bulk-translation-silence-assumption",
      context: "跨文化",
      tone: "提醒",
      source: "不要以为沉默就代表同意；有些参与者可能需要更多时间才会表达不同观点。",
      answer: "Do not assume that silence means agreement; some participants may need more time before expressing a different view.",
      shortAnswer: "Silence does not always mean agreement; some people need time to express another view.",
      alternatives: ["Do not interpret silence as approval, because some participants may take longer to voice a different opinion."],
      chunks: [
        ["不要以为沉默就代表同意", "Do not assume that silence means agreement"],
        ["有些参与者可能需要更多时间", "some participants may need more time"],
        ["才会表达不同观点", "before expressing a different view"]
      ],
      hints: ["silence means agreement", "need more time", "express a different view"],
      level: "B1"
    },
    {
      id: "bulk-translation-facilitator-rephrased",
      context: "跨文化",
      tone: "专业分析",
      source: "协调人把批评重新表述为双方共同的关切，使两个团队能够在不失面子的情况下进行讨论。",
      answer: "The facilitator rephrased the criticism as a shared concern, which allowed both teams to discuss it without losing face.",
      shortAnswer: "The facilitator turned the criticism into a shared concern so both teams could discuss it constructively.",
      alternatives: ["By reframing the criticism as a common concern, the facilitator enabled both teams to address it without embarrassment."],
      chunks: [
        ["协调人把批评重新表述", "The facilitator rephrased the criticism"],
        ["为双方共同的关切", "as a shared concern"],
        ["在不失面子的情况下", "without losing face"]
      ],
      hints: ["rephrased the criticism", "shared concern", "without losing face"],
      level: "B2"
    },
    {
      id: "bulk-translation-smell-smoke",
      context: "应急沟通",
      tone: "紧急而清楚",
      source: "如果闻到烟味，请立即离开房间，并在安全地点拨打紧急电话。",
      answer: "If you smell smoke, leave the room immediately and call the emergency number from a safe place.",
      shortAnswer: "If you smell smoke, leave now and call for help from a safe place.",
      alternatives: ["Leave the room at once if you smell smoke, then contact emergency services when you are somewhere safe."],
      chunks: [
        ["如果闻到烟味", "If you smell smoke"],
        ["请立即离开房间", "leave the room immediately"],
        ["在安全地点拨打紧急电话", "call the emergency number from a safe place"]
      ],
      hints: ["smell smoke", "leave immediately", "from a safe place"],
      level: "A2"
    },
    {
      id: "bulk-translation-train-stopped",
      context: "应急沟通",
      tone: "广播通知",
      source: "列车因信号故障已经停下，请留在车内并等待进一步指示。",
      answer: "The train has stopped because of a signal problem. Please remain on board and wait for further instructions.",
      shortAnswer: "The train has stopped due to a signal problem. Please stay on board.",
      alternatives: ["The train is temporarily stopped because of a signaling fault; please remain on board until you receive further instructions."],
      chunks: [
        ["列车已经停下", "The train has stopped"],
        ["因为信号故障", "because of a signal problem"],
        ["请留在车内并等待进一步指示", "Please remain on board and wait for further instructions"]
      ],
      hints: ["train has stopped", "signal problem", "remain on board"],
      level: "A2"
    },
    {
      id: "bulk-translation-unauthorized-access",
      context: "应急沟通",
      tone: "安全警报",
      source: "系统检测到一次未经授权的登录，我们已暂时锁定账户并通知安全团队。",
      answer: "The system detected an unauthorized login, so we have temporarily locked the account and notified the security team.",
      shortAnswer: "We detected an unauthorized login and locked the account temporarily.",
      alternatives: ["An unauthorized sign-in was detected, and the account has been temporarily locked while the security team investigates."],
      chunks: [
        ["系统检测到一次未经授权的登录", "The system detected an unauthorized login"],
        ["我们已暂时锁定账户", "we have temporarily locked the account"],
        ["并通知安全团队", "and notified the security team"]
      ],
      hints: ["unauthorized login", "temporarily locked", "security team"],
      level: "B1"
    },
    {
      id: "bulk-translation-blocked-entrance",
      context: "应急沟通",
      tone: "现场指引",
      source: "由于正门被堵住，所有人必须从东侧楼梯间撤离，并在停车区旁集合。",
      answer: "Because the main entrance is blocked, everyone must leave through the east stairwell and gather beside the parking area.",
      shortAnswer: "The main entrance is blocked. Use the east stairwell and gather by the parking area.",
      alternatives: ["Since the main entrance cannot be used, everyone should evacuate via the eastern stairwell and meet next to the car park."],
      chunks: [
        ["由于正门被堵住", "Because the main entrance is blocked"],
        ["从东侧楼梯间撤离", "leave through the east stairwell"],
        ["在停车区旁集合", "gather beside the parking area"]
      ],
      hints: ["main entrance is blocked", "east stairwell", "gather beside"],
      level: "B1"
    },
    {
      id: "bulk-translation-contamination-source",
      context: "应急沟通",
      tone: "正式警告",
      source: "在污染源查明之前，员工不得使用厨房供水，也不得供应已经制作好的食物。",
      answer: "Until the source of the contamination is identified, staff must not use the kitchen water supply or serve prepared food.",
      shortAnswer: "Do not use the kitchen water or serve prepared food until the contamination source is found.",
      alternatives: ["Staff are prohibited from using the kitchen water supply or serving prepared food until the source of contamination has been confirmed."],
      chunks: [
        ["在污染源查明之前", "Until the source of the contamination is identified"],
        ["不得使用厨房供水", "must not use the kitchen water supply"],
        ["也不得供应已经制作好的食物", "or serve prepared food"]
      ],
      hints: ["source of the contamination", "must not use", "serve prepared food"],
      level: "B2"
    }
  ]);
})();

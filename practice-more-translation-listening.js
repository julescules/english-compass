(() => {
  "use strict";

  window.ENGLISH_COMPASS_MORE_TRANSLATIONS = Object.freeze([
    {
      id: "extra-translation-airport-baggage",
      context: "机场",
      tone: "礼貌",
      source: "我的行李没有出现在传送带上，请问我应该去哪里申报遗失？",
      answer: "My luggage did not appear on the carousel. Could you tell me where I should report it as missing?",
      shortAnswer: "My bag is missing. Where can I report it?",
      alternatives: ["My suitcase has not arrived on the baggage carousel. Where should I file a missing baggage report?"],
      chunks: [
        ["我的行李没有出现在传送带上", "My luggage did not appear on the carousel"],
        ["请问我应该去哪里", "Could you tell me where I should"],
        ["申报遗失", "report it as missing"]
      ],
      hints: ["luggage", "carousel", "report it as missing"],
      level: "A2"
    },
    {
      id: "extra-translation-apartment-repair",
      context: "居住",
      tone: "礼貌",
      source: "厨房水槽从昨天起一直漏水，能请维修人员今天来看看吗？",
      answer: "The kitchen sink has been leaking since yesterday. Could you send someone to look at it today?",
      shortAnswer: "The sink is leaking. Could someone repair it today?",
      alternatives: ["The kitchen sink has been leaking since yesterday. Would it be possible for a maintenance worker to check it today?"],
      chunks: [
        ["厨房水槽一直漏水", "The kitchen sink has been leaking"],
        ["从昨天起", "since yesterday"],
        ["能请维修人员今天来看看吗", "Could you send someone to look at it today"]
      ],
      hints: ["sink", "has been leaking", "maintenance"],
      level: "A2"
    },
    {
      id: "extra-translation-bank-lost-card",
      context: "银行",
      tone: "紧急而清楚",
      source: "我可能把银行卡落在自动取款机里了，请立即帮我冻结这张卡。",
      answer: "I may have left my bank card in the ATM. Please help me freeze it immediately.",
      shortAnswer: "I may have lost my card. Please freeze it now.",
      alternatives: ["I think I left my bank card in the ATM. Could you block the card immediately?"],
      chunks: [
        ["我可能把银行卡落在自动取款机里了", "I may have left my bank card in the ATM"],
        ["请立即", "Please immediately"],
        ["帮我冻结这张卡", "help me freeze the card"]
      ],
      hints: ["bank card", "ATM", "freeze"],
      level: "A2"
    },
    {
      id: "extra-translation-pharmacy-dosage",
      context: "药店",
      tone: "清楚",
      source: "这种药应该饭前还是饭后服用？一天需要吃几次？",
      answer: "Should I take this medicine before or after meals, and how many times a day should I take it?",
      shortAnswer: "Should I take this before or after meals, and how often?",
      alternatives: ["Do I take this medicine before or after eating, and how many doses should I take each day?"],
      chunks: [
        ["这种药应该饭前还是饭后服用", "Should I take this medicine before or after meals"],
        ["一天", "a day"],
        ["需要吃几次", "how many times should I take it"]
      ],
      hints: ["take this medicine", "before or after meals", "how many times"],
      level: "A2"
    },
    {
      id: "extra-translation-video-audio-problem",
      context: "线上会议",
      tone: "自然",
      source: "你的视频画面很清楚，但声音断断续续，我们可以重新连接吗？",
      answer: "Your video is clear, but your audio keeps cutting out. Could we reconnect?",
      shortAnswer: "Your audio keeps cutting out. Can we reconnect?",
      alternatives: ["I can see you clearly, but the sound keeps breaking up. Could we reconnect to the call?"],
      chunks: [
        ["你的视频画面很清楚", "Your video is clear"],
        ["但声音断断续续", "but your audio keeps cutting out"],
        ["我们可以重新连接吗", "Could we reconnect"]
      ],
      hints: ["video is clear", "audio keeps cutting out", "reconnect"],
      level: "A2"
    },
    {
      id: "extra-translation-project-backup-plan",
      context: "项目管理",
      tone: "专业",
      source: "如果供应商周五之前不能确认交货日期，我们需要准备备用方案。",
      answer: "If the supplier cannot confirm the delivery date by Friday, we will need to prepare a backup plan.",
      shortAnswer: "If delivery is not confirmed by Friday, we need a backup plan.",
      alternatives: ["We will need a contingency plan if the supplier cannot confirm the delivery date by Friday."],
      chunks: [
        ["如果供应商不能确认交货日期", "If the supplier cannot confirm the delivery date"],
        ["周五之前", "by Friday"],
        ["我们需要准备备用方案", "we will need to prepare a backup plan"]
      ],
      hints: ["supplier", "delivery date", "backup plan"],
      level: "B1"
    },
    {
      id: "extra-translation-negotiation-unit-price",
      context: "商务谈判",
      tone: "专业",
      source: "如果把订单数量增加到五百件，你们能否提供更优惠的单价？",
      answer: "If we increase the order to five hundred units, could you offer us a better unit price?",
      shortAnswer: "Could you offer a better price for an order of five hundred units?",
      alternatives: ["Would you be able to reduce the unit price if we increased our order to five hundred units?"],
      chunks: [
        ["如果把订单数量增加到五百件", "If we increase the order to five hundred units"],
        ["你们能否提供", "could you offer us"],
        ["更优惠的单价", "a better unit price"]
      ],
      hints: ["increase the order", "five hundred units", "unit price"],
      level: "B1"
    },
    {
      id: "extra-translation-performance-feedback",
      context: "绩效沟通",
      tone: "积极",
      source: "我想知道自己在哪些方面做得不错，以及下个季度最应该改进什么。",
      answer: "I would like to know what I am doing well and what I should focus on improving next quarter.",
      shortAnswer: "What am I doing well, and what should I improve next quarter?",
      alternatives: ["I would appreciate feedback on my strengths and the main area I should improve next quarter."],
      chunks: [
        ["我想知道自己在哪些方面做得不错", "I would like to know what I am doing well"],
        ["以及", "and"],
        ["下个季度最应该改进什么", "what I should focus on improving next quarter"]
      ],
      hints: ["doing well", "focus on improving", "next quarter"],
      level: "B1"
    },
    {
      id: "extra-translation-remote-time-zones",
      context: "远程协作",
      tone: "合作",
      source: "由于我们处在不同的时区，我建议把每周会议安排在双方都方便的时间。",
      answer: "Since we are in different time zones, I suggest scheduling the weekly meeting at a time that works for both teams.",
      shortAnswer: "Let's schedule the weekly meeting at a time that works for both teams.",
      alternatives: ["Because we work in different time zones, I suggest finding a weekly meeting time that is convenient for both sides."],
      chunks: [
        ["由于我们处在不同的时区", "Since we are in different time zones"],
        ["我建议安排每周会议", "I suggest scheduling the weekly meeting"],
        ["在双方都方便的时间", "at a time that works for both teams"]
      ],
      hints: ["time zones", "schedule", "works for both teams"],
      level: "B1"
    },
    {
      id: "extra-translation-offer-start-date",
      context: "工作邀请",
      tone: "正式而礼貌",
      source: "非常感谢这份工作邀请。我需要在接受之前确认入职日期是否可以推迟一周。",
      answer: "Thank you very much for the job offer. Before accepting, I need to confirm whether the start date can be postponed by one week.",
      shortAnswer: "Thank you for the offer. Could the start date be postponed by one week?",
      alternatives: ["I greatly appreciate the offer. Before I accept it, may I confirm whether I can start one week later?"],
      chunks: [
        ["非常感谢这份工作邀请", "Thank you very much for the job offer"],
        ["我需要在接受之前确认", "Before accepting, I need to confirm"],
        ["入职日期是否可以推迟一周", "whether the start date can be postponed by one week"]
      ],
      hints: ["job offer", "before accepting", "postponed"],
      level: "B1"
    },
    {
      id: "extra-translation-networking-followup",
      context: "职业社交",
      tone: "专业",
      source: "很高兴昨天在行业活动上认识您，我想继续了解贵公司的培训项目。",
      answer: "It was a pleasure meeting you at the industry event yesterday. I would like to learn more about your company's training program.",
      shortAnswer: "It was great meeting you. I would like to learn more about your training program.",
      alternatives: ["I enjoyed meeting you at yesterday's industry event and would be interested in hearing more about your company's training program."],
      chunks: [
        ["很高兴昨天认识您", "It was a pleasure meeting you yesterday"],
        ["在行业活动上", "at the industry event"],
        ["我想继续了解贵公司的培训项目", "I would like to learn more about your company's training program"]
      ],
      hints: ["a pleasure meeting you", "industry event", "learn more about"],
      level: "B1"
    },
    {
      id: "extra-translation-presentation-clarification",
      context: "演示汇报",
      tone: "确认",
      source: "如果我理解正确，这张图表显示的是过去六个月的平均增长率，对吗？",
      answer: "If I understand correctly, this chart shows the average growth rate over the past six months, is that right?",
      shortAnswer: "Does this chart show the average growth rate for the past six months?",
      alternatives: ["Am I correct in understanding that this chart represents the average growth rate over the last six months?"],
      chunks: [
        ["如果我理解正确", "If I understand correctly"],
        ["这张图表显示的是平均增长率", "this chart shows the average growth rate"],
        ["过去六个月的", "over the past six months"]
      ],
      hints: ["understand correctly", "average growth rate", "past six months"],
      level: "B1"
    },
    {
      id: "extra-translation-cybersecurity-email",
      context: "信息安全",
      tone: "谨慎",
      source: "这封邮件要求我点击链接并重新输入密码，看起来有些可疑。",
      answer: "This email asks me to click a link and re-enter my password, which looks suspicious.",
      shortAnswer: "This email asks for my password, so it looks suspicious.",
      alternatives: ["The email tells me to follow a link and enter my password again, which seems suspicious."],
      chunks: [
        ["这封邮件要求我点击链接", "This email asks me to click a link"],
        ["并重新输入密码", "and re-enter my password"],
        ["看起来有些可疑", "which looks suspicious"]
      ],
      hints: ["click a link", "re-enter", "suspicious"],
      level: "B1"
    },
    {
      id: "extra-translation-subscription-cancel",
      context: "在线服务",
      tone: "明确而礼貌",
      source: "我想在下一个计费周期开始前取消订阅，并确认不会再产生费用。",
      answer: "I would like to cancel my subscription before the next billing cycle begins and confirm that I will not be charged again.",
      shortAnswer: "Please cancel my subscription before the next billing cycle.",
      alternatives: ["I want to end my subscription before the next billing period and make sure there are no further charges."],
      chunks: [
        ["我想取消订阅", "I would like to cancel my subscription"],
        ["在下一个计费周期开始前", "before the next billing cycle begins"],
        ["并确认不会再产生费用", "and confirm that I will not be charged again"]
      ],
      hints: ["cancel my subscription", "billing cycle", "charged again"],
      level: "B1"
    },
    {
      id: "extra-translation-library-renewal",
      context: "图书馆",
      tone: "自然",
      source: "这本书已经到期了，但我还需要三天才能读完，可以在线续借吗？",
      answer: "This book is already due, but I need three more days to finish it. Can I renew it online?",
      shortAnswer: "Can I renew this book online for three more days?",
      alternatives: ["The book is due, but I need another three days to finish it. Is online renewal available?"],
      chunks: [
        ["这本书已经到期了", "This book is already due"],
        ["但我还需要三天才能读完", "but I need three more days to finish it"],
        ["可以在线续借吗", "Can I renew it online"]
      ],
      hints: ["is due", "three more days", "renew online"],
      level: "A2"
    },
    {
      id: "extra-translation-reduce-plastic",
      context: "环保",
      tone: "倡议",
      source: "为了减少一次性塑料，我们鼓励员工自带水杯和餐具。",
      answer: "To reduce single-use plastic, we encourage employees to bring their own cups and utensils.",
      shortAnswer: "We encourage staff to bring reusable cups and utensils.",
      alternatives: ["Employees are encouraged to bring their own cups and cutlery in order to reduce single-use plastic."],
      chunks: [
        ["为了减少一次性塑料", "To reduce single-use plastic"],
        ["我们鼓励员工", "we encourage employees"],
        ["自带水杯和餐具", "to bring their own cups and utensils"]
      ],
      hints: ["reduce", "single-use plastic", "bring their own"],
      level: "B1"
    },
    {
      id: "extra-translation-fire-alarm",
      context: "安全指引",
      tone: "清楚",
      source: "听到火警后，请不要使用电梯，沿着最近的安全出口离开大楼。",
      answer: "When you hear the fire alarm, do not use the elevator. Leave the building through the nearest emergency exit.",
      shortAnswer: "Do not use the elevator. Take the nearest emergency exit.",
      alternatives: ["If the fire alarm sounds, avoid the elevator and leave through the closest emergency exit."],
      chunks: [
        ["听到火警后", "When you hear the fire alarm"],
        ["请不要使用电梯", "do not use the elevator"],
        ["沿着最近的安全出口离开大楼", "leave the building through the nearest emergency exit"]
      ],
      hints: ["fire alarm", "elevator", "emergency exit"],
      level: "A2"
    },
    {
      id: "extra-translation-customs-declaration",
      context: "海关",
      tone: "正式",
      source: "我只携带个人用品和一些送给朋友的礼物，没有需要申报的商业物品。",
      answer: "I am only carrying personal belongings and a few gifts for friends. I do not have any commercial goods to declare.",
      shortAnswer: "I only have personal items and gifts. I have no commercial goods to declare.",
      alternatives: ["I am carrying only personal belongings and some gifts for friends, with no commercial items to declare."],
      chunks: [
        ["我只携带个人用品", "I am only carrying personal belongings"],
        ["和一些送给朋友的礼物", "and a few gifts for friends"],
        ["没有需要申报的商业物品", "I do not have any commercial goods to declare"]
      ],
      hints: ["personal belongings", "gifts", "declare"],
      level: "B1"
    },
    {
      id: "extra-translation-delivery-address",
      context: "快递",
      tone: "清楚",
      source: "包裹还没有寄出，请把收货地址中的门牌号从十八号改成八十号。",
      answer: "The package has not been shipped yet. Please change the house number in the delivery address from eighteen to eighty.",
      shortAnswer: "Please change the delivery address from number eighteen to number eighty.",
      alternatives: ["Since the parcel has not been sent yet, please correct the house number in the delivery address from eighteen to eighty."],
      chunks: [
        ["包裹还没有寄出", "The package has not been shipped yet"],
        ["请修改收货地址中的门牌号", "Please change the house number in the delivery address"],
        ["从十八号改成八十号", "from eighteen to eighty"]
      ],
      hints: ["has not been shipped", "delivery address", "house number"],
      level: "A2"
    },
    {
      id: "extra-translation-study-review",
      context: "学习方法",
      tone: "自然",
      source: "与其在考试前一次背很多内容，我更愿意每天复习并定期自测。",
      answer: "Rather than memorizing a large amount right before the exam, I prefer to review every day and test myself regularly.",
      shortAnswer: "I prefer daily review and regular self-testing.",
      alternatives: ["Instead of cramming before the exam, I would rather review daily and test myself at regular intervals."],
      chunks: [
        ["与其在考试前一次背很多内容", "Rather than memorizing a large amount right before the exam"],
        ["我更愿意每天复习", "I prefer to review every day"],
        ["并定期自测", "and test myself regularly"]
      ],
      hints: ["rather than", "review every day", "test myself"],
      level: "B2"
    }
  ]);

  window.ENGLISH_COMPASS_MORE_LISTENING = Object.freeze([
    {
      id: "extra-listening-airport-gate-change",
      level: "A2",
      topic: "机场",
      text: "Attention passengers on flight two eighty-six to Osaka. Your departure gate has changed from B twelve to C seven. Boarding will begin at six forty.",
      question: "What is the new departure gate?",
      options: ["Gate B12", "Gate C7", "Gate C12"],
      answer: 1,
      keywords: ["flight two eighty-six", "changed", "C seven", "boarding"]
    },
    {
      id: "extra-listening-apartment-maintenance",
      level: "A2",
      topic: "居住",
      text: "The maintenance worker will visit between ten and noon tomorrow. Please make sure someone is home to let her in.",
      question: "What should the resident do?",
      options: ["Leave the key outside", "Call before ten", "Make sure someone is home"],
      answer: 2,
      keywords: ["maintenance worker", "between ten and noon", "someone is home", "let her in"]
    },
    {
      id: "extra-listening-bank-fraud-alert",
      level: "B1",
      topic: "银行",
      text: "We noticed a purchase of three hundred and eighty dollars on your card in another city. Press one if you made this purchase, or stay on the line to speak to our fraud team.",
      question: "Why is the bank contacting the customer?",
      options: ["A payment may be unusual", "A new card is ready", "The account has earned interest"],
      answer: 0,
      keywords: ["purchase", "another city", "press one", "fraud team"]
    },
    {
      id: "extra-listening-pharmacy-instructions",
      level: "A2",
      topic: "药店",
      text: "Take one tablet with food every eight hours. Do not drive if the medicine makes you feel sleepy.",
      question: "How often should the medicine be taken?",
      options: ["Once each morning", "Every eight hours", "Only before sleeping"],
      answer: 1,
      keywords: ["one tablet", "with food", "every eight hours", "sleepy"]
    },
    {
      id: "extra-listening-online-meeting-muted",
      level: "A2",
      topic: "线上会议",
      text: "Rina, we can see your screen, but your microphone is muted. Click the audio icon and then continue with the sales update.",
      question: "What problem does Rina need to fix?",
      options: ["Her screen is not shared", "Her camera is too dark", "Her microphone is muted"],
      answer: 2,
      keywords: ["see your screen", "microphone", "muted", "audio icon"]
    },
    {
      id: "extra-listening-project-approval-delay",
      level: "B2",
      topic: "项目管理",
      text: "The design team can finish the mock-ups on Tuesday, but development cannot begin until the client approves them. If approval comes on Friday, the launch will move back by at least three days.",
      question: "What would cause the launch to be delayed?",
      options: ["The client approving the mock-ups on Friday", "The design team finishing on Tuesday", "Development beginning immediately"],
      answer: 0,
      keywords: ["mock-ups", "client approves", "on Friday", "move back"]
    },
    {
      id: "extra-listening-warehouse-safety",
      level: "A2",
      topic: "工作安全",
      text: "Before entering the storage area, put on a safety vest and closed-toe shoes. Visitors must stay with a supervisor at all times.",
      question: "What must visitors do in the storage area?",
      options: ["Stay with a supervisor", "Carry all the boxes", "Wear open shoes"],
      answer: 0,
      keywords: ["storage area", "safety vest", "closed-toe shoes", "supervisor"]
    },
    {
      id: "extra-listening-restaurant-reservation",
      level: "A2",
      topic: "餐厅预订",
      text: "Your table was booked for four people at seven, but we can change it to six people at seven thirty. Would that work for your group?",
      question: "What is the revised reservation?",
      options: ["Four people at seven thirty", "Six people at seven", "Six people at seven thirty"],
      answer: 2,
      keywords: ["booked for four", "change it", "six people", "seven thirty"]
    },
    {
      id: "extra-listening-ferry-cancellation",
      level: "B1",
      topic: "出行通知",
      text: "Due to strong winds, all afternoon ferry services are canceled. Passengers may use their tickets tomorrow or request a refund at the ticket office.",
      question: "What can affected passengers do?",
      options: ["Use the ticket tomorrow or request a refund", "Take an afternoon ferry from another gate", "Exchange the ticket only next week"],
      answer: 0,
      keywords: ["strong winds", "canceled", "tickets tomorrow", "refund"]
    },
    {
      id: "extra-listening-course-prerequisite",
      level: "B1",
      topic: "课程注册",
      text: "You may enroll in Advanced Writing after completing Academic Writing One. If you have not completed it, please choose the intermediate class this term.",
      question: "What is required before taking Advanced Writing?",
      options: ["Passing a speaking interview", "Completing Academic Writing One", "Taking the intermediate class twice"],
      answer: 1,
      keywords: ["enroll", "Advanced Writing", "after completing", "Academic Writing One"]
    },
    {
      id: "extra-listening-job-offer-deadline",
      level: "B1",
      topic: "工作邀请",
      text: "We are delighted to offer you the position. Please review the contract and respond by five p.m. next Monday. The proposed start date is August twelfth.",
      question: "When must the candidate respond?",
      options: ["By August twelfth", "By Friday morning", "By five p.m. next Monday"],
      answer: 2,
      keywords: ["offer", "review the contract", "respond by", "next Monday"]
    },
    {
      id: "extra-listening-password-reset",
      level: "A2",
      topic: "技术支持",
      text: "To reset your password, enter your employee ID on the support page. A six-digit code will be sent to your phone, and the code will expire after ten minutes.",
      question: "Where will the verification code be sent?",
      options: ["To the employee's phone", "To the employee's manager", "To the office printer"],
      answer: 0,
      keywords: ["reset your password", "employee ID", "six-digit code", "phone"]
    },
    {
      id: "extra-listening-museum-last-entry",
      level: "A2",
      topic: "参观",
      text: "The museum closes at six, but the last admission is at five fifteen. The gift shop will remain open until six thirty.",
      question: "What is the latest time a visitor can enter the museum?",
      options: ["Five fifteen", "Six o'clock", "Six thirty"],
      answer: 0,
      keywords: ["museum closes", "last admission", "five fifteen", "gift shop"]
    },
    {
      id: "extra-listening-energy-bill",
      level: "B1",
      topic: "生活账单",
      text: "Your January electricity bill was higher because the electric heater ran continuously during the cold week. The usage graph shows no unusual increase from your other appliances.",
      question: "What mainly caused the higher bill?",
      options: ["A billing mistake", "The electric heater", "Several new appliances"],
      answer: 1,
      keywords: ["January bill", "higher", "electric heater", "continuously"]
    },
    {
      id: "extra-listening-community-cleanup",
      level: "A2",
      topic: "志愿活动",
      text: "Saturday's river cleanup will meet outside the east entrance at eight thirty. Gloves and rubbish bags are provided, but please bring a refillable water bottle.",
      question: "What should volunteers bring?",
      options: ["Work gloves", "Rubbish bags", "A refillable water bottle"],
      answer: 2,
      keywords: ["river cleanup", "east entrance", "provided", "refillable water bottle"]
    },
    {
      id: "extra-listening-revised-quotation",
      level: "B2",
      topic: "商务报价",
      text: "The revised quotation covers forty desks and delivery to the third floor. Assembly is not included, although we can add it for a fixed fee.",
      question: "What is not included in the quotation?",
      options: ["The forty desks", "Assembly", "Delivery to the third floor"],
      answer: 1,
      keywords: ["revised quotation", "forty desks", "delivery", "assembly is not included"]
    },
    {
      id: "extra-listening-time-zone-presentation",
      level: "B1",
      topic: "远程协作",
      text: "The London team will present at nine in the morning their time, which is five in the afternoon in Singapore. A recording will be available later for anyone who cannot attend.",
      question: "What time is the presentation in Singapore?",
      options: ["Nine in the morning", "Five in the afternoon", "Five in the morning"],
      answer: 1,
      keywords: ["London team", "nine in the morning", "five in the afternoon", "Singapore"]
    },
    {
      id: "extra-listening-review-goals",
      level: "B2",
      topic: "绩效沟通",
      text: "For your next review, choose one technical skill and one communication skill. Define a measurable goal for each one, and check your progress every month.",
      question: "What should the employee prepare?",
      options: ["A list of completed daily tasks", "Two measurable development goals", "One general goal without a deadline"],
      answer: 1,
      keywords: ["technical skill", "communication skill", "measurable goal", "every month"]
    }
  ]);
})();

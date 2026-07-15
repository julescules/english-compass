(function () {
  "use strict";

  window.ENGLISH_COMPASS_MORE_TRANSLATIONS_2 = Object.freeze([
    {
      id: "extra2-translation-apartment-deposit",
      context: "海外居住",
      tone: "礼貌",
      source: "我刚搬进公寓，请问押金需要在什么时候支付？",
      answer: "I have just moved into the apartment. Could you tell me when the deposit needs to be paid?",
      shortAnswer: "I have just moved in. When should I pay the deposit?",
      alternatives: ["I have just moved into the apartment. When do I need to pay the deposit?"],
      chunks: [
        ["我刚搬进公寓", "I have just moved into the apartment"],
        ["请问", "Could you tell me"],
        ["押金需要在什么时候支付", "when the deposit needs to be paid"]
      ],
      hints: ["have just moved in", "deposit", "needs to be paid"],
      level: "A2"
    },
    {
      id: "extra2-translation-interview-availability",
      context: "求职面试",
      tone: "清楚而礼貌",
      source: "下周二下午我有空参加面试，请告诉我具体时间。",
      answer: "I am available for an interview next Tuesday afternoon. Please let me know the exact time.",
      shortAnswer: "I am available next Tuesday afternoon. What time is the interview?",
      alternatives: ["I can attend an interview next Tuesday afternoon. Could you confirm the exact time?"],
      chunks: [
        ["下周二下午", "next Tuesday afternoon"],
        ["我有空参加面试", "I am available for an interview"],
        ["请告诉我具体时间", "Please let me know the exact time"]
      ],
      hints: ["available for an interview", "next Tuesday afternoon", "exact time"],
      level: "A2"
    },
    {
      id: "extra2-translation-delayed-online-order",
      context: "客户服务",
      tone: "自然",
      source: "我的订单比预计晚了三天，能帮我查一下现在在哪里吗？",
      answer: "My order is three days late. Could you help me check where it is now?",
      shortAnswer: "My order is delayed by three days. Could you track it for me?",
      alternatives: ["My order is three days overdue. Could you please check its current location?"],
      chunks: [
        ["我的订单", "My order"],
        ["比预计晚了三天", "is three days late"],
        ["能帮我查一下现在在哪里吗", "Could you help me check where it is now"]
      ],
      hints: ["order", "three days late", "check where it is"],
      level: "A2"
    },
    {
      id: "extra2-translation-sick-leave",
      context: "海外工作",
      tone: "直接而礼貌",
      source: "我今天发烧，无法到办公室上班，想请一天病假。",
      answer: "I have a fever and cannot come to the office today. I would like to take a day of sick leave.",
      shortAnswer: "I have a fever, so I need to take sick leave today.",
      alternatives: ["I am running a fever and cannot work at the office today. I would like to request one day of sick leave."],
      chunks: [
        ["我今天发烧", "I have a fever today"],
        ["无法到办公室上班", "cannot come to the office"],
        ["想请一天病假", "would like to take a day of sick leave"]
      ],
      hints: ["have a fever", "come to the office", "sick leave"],
      level: "A2"
    },
    {
      id: "extra2-translation-refund-method",
      context: "客户服务",
      tone: "专业",
      source: "退款大概需要五个工作日，并会退回原付款方式。",
      answer: "The refund will take about five business days and will be returned to the original payment method.",
      shortAnswer: "The refund takes about five business days and goes back to the original payment method.",
      alternatives: ["Please allow around five business days for the refund to reach your original method of payment."],
      chunks: [
        ["退款大概需要五个工作日", "The refund will take about five business days"],
        ["并会退回", "and will be returned"],
        ["原付款方式", "to the original payment method"]
      ],
      hints: ["refund", "business days", "original payment method"],
      level: "B1"
    },
    {
      id: "extra2-translation-project-data-dependency",
      context: "项目协作",
      tone: "专业",
      source: "我们必须先收到客户的数据，设计团队才能完成报告。",
      answer: "We must receive the client's data before the design team can complete the report.",
      shortAnswer: "We need the client's data before the design team can finish the report.",
      alternatives: ["The design team will only be able to finish the report after we receive the data from the client."],
      chunks: [
        ["我们必须先收到客户的数据", "We must receive the client's data"],
        ["设计团队才能", "before the design team can"],
        ["完成报告", "complete the report"]
      ],
      hints: ["client's data", "before", "complete the report"],
      level: "B1"
    },
    {
      id: "extra2-translation-team-common-goal",
      context: "团队合作",
      tone: "成熟",
      source: "当团队成员意见不同时，我会先找出大家共同的目标。",
      answer: "When team members disagree, I first try to identify the goal that everyone shares.",
      shortAnswer: "When the team disagrees, I focus on our shared goal first.",
      alternatives: ["If team members have different opinions, I begin by finding a common goal."],
      chunks: [
        ["当团队成员意见不同时", "When team members disagree"],
        ["我会先找出", "I first try to identify"],
        ["大家共同的目标", "the goal that everyone shares"]
      ],
      hints: ["team members disagree", "identify", "shared goal"],
      level: "B1"
    },
    {
      id: "extra2-translation-tax-form-guidance",
      context: "海外生活",
      tone: "正式而礼貌",
      source: "我不确定这份税务表格该填哪一栏，能否请您指导一下？",
      answer: "I am not sure which section of this tax form I should complete. Could you please guide me?",
      shortAnswer: "I am unsure which section to complete. Could you help me?",
      alternatives: ["I am not certain where to enter this information on the tax form. Could you advise me?"],
      chunks: [
        ["我不确定", "I am not sure"],
        ["这份税务表格该填哪一栏", "which section of this tax form I should complete"],
        ["能否请您指导一下", "Could you please guide me"]
      ],
      hints: ["tax form", "which section", "guide me"],
      level: "B1"
    },
    {
      id: "extra2-translation-scope-deadline-quality",
      context: "项目管理",
      tone: "专业而谨慎",
      source: "如果继续增加需求却不调整截止日期，项目质量可能会受到影响。",
      answer: "If we continue adding requirements without adjusting the deadline, the quality of the project may be affected.",
      shortAnswer: "Adding more requirements without moving the deadline may affect quality.",
      alternatives: ["Project quality could suffer if the scope keeps expanding while the deadline remains unchanged."],
      chunks: [
        ["如果继续增加需求", "If we continue adding requirements"],
        ["却不调整截止日期", "without adjusting the deadline"],
        ["项目质量可能会受到影响", "the quality of the project may be affected"]
      ],
      hints: ["adding requirements", "adjusting the deadline", "may be affected"],
      level: "B2"
    },
    {
      id: "extra2-translation-promotion-discussion",
      context: "职业发展",
      tone: "自信而专业",
      source: "在过去一年里，我主动改进了流程，因此希望讨论晋升机会。",
      answer: "Over the past year, I have taken the initiative to improve our processes, so I would like to discuss the possibility of a promotion.",
      shortAnswer: "I improved our processes this year and would like to discuss promotion opportunities.",
      alternatives: ["Having proactively improved our processes over the past year, I would welcome a conversation about career advancement."],
      chunks: [
        ["在过去一年里", "Over the past year"],
        ["我主动改进了流程", "I have taken the initiative to improve our processes"],
        ["希望讨论晋升机会", "would like to discuss the possibility of a promotion"]
      ],
      hints: ["over the past year", "take the initiative", "possibility of a promotion"],
      level: "B2"
    },
    {
      id: "extra2-translation-clinic-arrival",
      context: "海外就医",
      tone: "通知",
      source: "诊所可以在十点半接诊您，但请提前十五分钟到达。",
      answer: "The clinic can see you at ten thirty, but please arrive fifteen minutes early.",
      shortAnswer: "The appointment is at ten thirty. Please arrive fifteen minutes early.",
      alternatives: ["The clinic can fit you in at ten thirty, but please come fifteen minutes early."],
      chunks: [
        ["诊所可以在十点半接诊您", "The clinic can see you at ten thirty"],
        ["但", "but"],
        ["请提前十五分钟到达", "please arrive fifteen minutes early"]
      ],
      hints: ["clinic can see you", "ten thirty", "arrive fifteen minutes early"],
      level: "A2"
    },
    {
      id: "extra2-translation-rent-utilities",
      context: "海外租房",
      tone: "说明",
      source: "水费和暖气费包含在房租里，但电费需要单独结算。",
      answer: "Water and heating are included in the rent, but electricity is billed separately.",
      shortAnswer: "Water and heating are included, but electricity is extra.",
      alternatives: ["The rent covers water and heating, while electricity is charged separately."],
      chunks: [
        ["水费和暖气费", "Water and heating"],
        ["包含在房租里", "are included in the rent"],
        ["电费需要单独结算", "electricity is billed separately"]
      ],
      hints: ["included in the rent", "electricity", "billed separately"],
      level: "A2"
    },
    {
      id: "extra2-translation-bus-transfer",
      context: "海外出行",
      tone: "清楚",
      source: "这辆公交车不到市中心，您需要在下一站换乘。",
      answer: "This bus does not go to the city center. You need to change at the next stop.",
      shortAnswer: "This bus does not go downtown. Change at the next stop.",
      alternatives: ["This bus does not serve the city centre, so you will need to transfer at the next stop."],
      chunks: [
        ["这辆公交车不到市中心", "This bus does not go to the city center"],
        ["您需要", "You need to"],
        ["在下一站换乘", "change at the next stop"]
      ],
      hints: ["does not go to", "change", "at the next stop"],
      level: "A2"
    },
    {
      id: "extra2-translation-parcel-collection",
      context: "快递服务",
      tone: "通知",
      source: "您的包裹已经可以领取，请携带带照片的身份证件前往服务台。",
      answer: "Your parcel is ready for collection. Please bring a photo ID to the service desk.",
      shortAnswer: "Your parcel is ready. Bring a photo ID to the service desk.",
      alternatives: ["Your parcel is ready to collect; please take a valid photo ID to the service counter."],
      chunks: [
        ["您的包裹已经可以领取", "Your parcel is ready for collection"],
        ["请携带带照片的身份证件", "Please bring a photo ID"],
        ["前往服务台", "to the service desk"]
      ],
      hints: ["parcel", "ready for collection", "photo ID"],
      level: "A2"
    },
    {
      id: "extra2-translation-probation-review",
      context: "海外工作",
      tone: "正式",
      source: "前三个月是试用期，在此期间公司会评估您的工作表现。",
      answer: "The first three months are a probation period, during which your performance will be reviewed.",
      shortAnswer: "Your first three months are probation, and your performance will be reviewed.",
      alternatives: ["You will be on probation for the first three months, with your performance assessed during that period."],
      chunks: [
        ["前三个月", "The first three months"],
        ["是试用期", "are a probation period"],
        ["公司会评估您的工作表现", "your performance will be reviewed"]
      ],
      hints: ["first three months", "probation period", "performance will be reviewed"],
      level: "B1"
    },
    {
      id: "extra2-translation-annual-leave-request",
      context: "职场制度",
      tone: "正式",
      source: "员工应至少提前两周提交年假申请。",
      answer: "Employees should submit annual leave requests at least two weeks in advance.",
      shortAnswer: "Please request annual leave at least two weeks ahead.",
      alternatives: ["Annual leave requests should be submitted no less than two weeks in advance."],
      chunks: [
        ["员工应", "Employees should"],
        ["提交年假申请", "submit annual leave requests"],
        ["至少提前两周", "at least two weeks in advance"]
      ],
      hints: ["annual leave requests", "at least", "two weeks in advance"],
      level: "B1"
    },
    {
      id: "extra2-translation-invoice-double-charge",
      context: "客户服务",
      tone: "核对",
      source: "发票上的数量是正确的，但配送费被重复收取了两次。",
      answer: "The invoice lists the correct quantity, but the delivery fee has been charged twice.",
      shortAnswer: "The quantity is correct, but the delivery fee appears twice.",
      alternatives: ["The item quantity on the invoice is right, but I have been charged the delivery fee twice."],
      chunks: [
        ["发票上的数量是正确的", "The invoice lists the correct quantity"],
        ["但", "but"],
        ["配送费被重复收取了两次", "the delivery fee has been charged twice"]
      ],
      hints: ["invoice", "correct quantity", "delivery fee has been charged twice"],
      level: "B1"
    },
    {
      id: "extra2-translation-cross-cultural-feedback",
      context: "跨文化协作",
      tone: "专业建议",
      source: "在跨文化反馈中，应避免主观臆断，并使用具体事例。",
      answer: "When giving feedback across cultures, avoid assumptions and use specific examples.",
      shortAnswer: "Avoid assumptions and give specific examples when sharing feedback across cultures.",
      alternatives: ["When giving feedback to people from different cultural backgrounds, do not make assumptions; use clear examples instead."],
      chunks: [
        ["在跨文化反馈中", "When giving feedback across cultures"],
        ["应避免主观臆断", "avoid assumptions"],
        ["使用具体事例", "use specific examples"]
      ],
      hints: ["feedback across cultures", "avoid assumptions", "specific examples"],
      level: "B1"
    },
    {
      id: "extra2-translation-security-escalation",
      context: "项目风险",
      tone: "严谨",
      source: "如果安全问题今天仍未解决，我们必须将其上报给项目总监。",
      answer: "If the security issue is not resolved today, we must escalate it to the project director.",
      shortAnswer: "If the issue remains unresolved today, we must escalate it to the project director.",
      alternatives: ["We will need to raise the security issue with the project director if it cannot be resolved today."],
      chunks: [
        ["如果安全问题今天仍未解决", "If the security issue is not resolved today"],
        ["我们必须将其上报", "we must escalate it"],
        ["给项目总监", "to the project director"]
      ],
      hints: ["security issue", "not resolved today", "escalate it to the project director"],
      level: "B2"
    },
    {
      id: "extra2-translation-career-break",
      context: "求职面试",
      tone: "坦诚而积极",
      source: "职业空档期间，我照顾了一位家人，并完成了一项在线证书课程。",
      answer: "I used my career break to care for a family member and complete an online certificate.",
      shortAnswer: "During my career break, I cared for a relative and earned an online certificate.",
      alternatives: ["I spent my career break caring for a family member while completing an online certification course."],
      chunks: [
        ["职业空档期间", "I used my career break"],
        ["我照顾了一位家人", "to care for a family member"],
        ["并完成了一项在线证书课程", "and complete an online certificate"]
      ],
      hints: ["career break", "care for a family member", "complete an online certificate"],
      level: "B2"
    }
  ]);
})();

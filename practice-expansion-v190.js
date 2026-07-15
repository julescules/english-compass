// English Compass v1.9 self-authored practice expansion.
(function () {
  "use strict";

  const situations = [
    ["video-viewing","A2","租房沟通","Mina","a rental office","ask for a video viewing of an apartment","我目前不在本地，可以安排一次公寓视频看房吗？","I am not in the area right now. Could we arrange a video viewing of the apartment?","请同时告诉我网络和暖气是否包含在租金里。","Please also tell me whether internet and heating are included in the rent."],
    ["overtime-rate","B1","职场薪酬","Leo","a staff office","clarify the overtime rate for a weekend shift","我想确认一下周末班的加班费如何计算。","I would like to confirm how overtime pay is calculated for the weekend shift.","如果可以，请把费率写在邮件里。","If possible, please include the rate in an email."],
    ["clinic-interpreter","A2","医疗服务","Aya","a community clinic","request an interpreter for a medical visit","我需要为周四的就诊申请一名口译员。","I need to request an interpreter for my appointment on Thursday.","口译员最好能说中文。","It would be helpful if the interpreter could speak Chinese."],
    ["allergen-label","B1","食品安全","Noah","a bakery","report an unclear allergen label","这个标签没有说明产品是否含有坚果，请帮我核实。","The label does not say whether the product contains nuts. Could you check it for me?","确认之前请先不要出售这一批产品。","Please do not sell this batch until the information is confirmed."],
    ["shipment-delay","B1","物流沟通","Iris","a warehouse","explain why a shipment is delayed","由于道路封闭，这批货物会晚一天到达。","The shipment will arrive one day late because the road is closed.","我会在新的送达时间确认后立即通知你。","I will update you as soon as the new delivery time is confirmed."],
    ["accessible-interview","B1","求职面试","Owen","a recruitment office","request an accessible interview room","我使用轮椅，请问面试可以安排在无障碍会议室吗？","I use a wheelchair. Could the interview take place in an accessible meeting room?","如果入口不同，也请把路线发给我。","Please send me the route as well if the entrance is different."],
    ["remote-onboarding","B1","远程工作","Sara","an online team meeting","confirm a remote onboarding schedule","我想确认远程入职培训是否从周一上午九点开始。","I would like to confirm whether remote onboarding starts at nine on Monday morning.","请把第一周需要安装的软件清单发给我。","Please send me the list of software I need for the first week."],
    ["duplicate-charge","B1","支付处理","Ethan","a bank counter","dispute a duplicate card charge","我的银行卡被同一笔订单扣款了两次。","My card was charged twice for the same order.","请调查第二笔扣款并告诉我退款时间。","Please investigate the second charge and tell me when it will be refunded."],
    ["faulty-kettle","A2","商品退换","Yuna","a homeware shop","return a faulty electric kettle","这个水壶使用几分钟后会自动断电，我想退货。","This kettle switches off after a few minutes, and I would like to return it.","这是收据和产品序列号。","Here are the receipt and the product serial number."],
    ["bike-repair","A2","生活服务","Kai","a bicycle shop","schedule a bicycle brake repair","我的自行车后刹车不太灵，可以安排明天下午维修吗？","The rear brake on my bicycle is not working well. Could you repair it tomorrow afternoon?","如果需要更换零件，请先告诉我价格。","Please tell me the price first if any parts need to be replaced."],
    ["research-help","B1","学习支持","Emma","a public library","ask for help finding reliable research sources","我在研究远程工作，能帮我找一些可靠的资料吗？","I am researching remote work. Could you help me find some reliable sources?","我尤其需要最近三年发表的报告。","I especially need reports published within the last three years."],
    ["side-effect","B1","健康沟通","Riku","a pharmacy","describe a possible medication side effect","服药后我一直感到头晕，这可能是副作用吗？","I have felt dizzy since taking the medicine. Could this be a side effect?","在咨询医生前，我是否应该停止服用？","Should I stop taking it until I can speak with a doctor?"],
    ["community-room","A2","社区活动","Hana","a community centre","reserve a room for a language exchange","我想预订周六下午的活动室举办语言交换。","I would like to reserve the activity room for a language exchange on Saturday afternoon.","预计会有十二个人参加。","We expect about twelve people to attend."],
    ["phishing-email","B1","网络安全","Victor","an IT help desk","report a suspicious password-reset email","我收到一封要求立即重置密码的可疑邮件。","I received a suspicious email asking me to reset my password immediately.","我没有点击链接，并把邮件转发给了安全团队。","I did not click the link, and I forwarded the message to the security team."],
    ["project-scope","B2","项目协商","Mei","a project meeting","negotiate a smaller first-release scope","为了按时上线，我建议先缩小第一版的功能范围。","To launch on time, I suggest reducing the scope of the first release.","我们可以把报告功能放到第二阶段。","We can move the reporting feature to the second phase."],
    ["user-feedback","B2","产品研究","Daniel","a product review","summarize recurring user feedback","多数用户喜欢搜索功能，但认为筛选条件不够清楚。","Most users like the search feature, but they find the filters unclear.","我建议先改写标签，再进行一次可用性测试。","I recommend rewriting the labels before running another usability test."],
    ["time-zones","B1","跨时区协作","Lina","a remote team chat","propose a fair meeting time across time zones","我们能否轮换会议时间，让不同地区的人不用总是很晚参加？","Could we rotate the meeting time so that the same region is not always joining late?","我已经列出了三个可行的时间段。","I have listed three possible time slots."],
    ["backup-plan","B2","数据管理","Ken","a systems review","explain a reliable data backup plan","关键文件每天备份，并每月测试一次恢复流程。","Critical files are backed up every day, and the restore process is tested once a month.","离线副本会保存在另一个地点。","An offline copy is stored in a different location."],
    ["energy-option","B2","节能决策","Sofia","a facilities meeting","recommend an energy-saving equipment option","高效型号价格更高，但长期用电和维护成本更低。","The efficient model costs more, but its long-term energy and maintenance costs are lower.","我建议比较五年的总成本。","I recommend comparing the total cost over five years."],
    ["noise-complaint","B1","邻里沟通","Tom","an apartment building","respond constructively to a noise complaint","谢谢你告诉我昨晚的噪音问题，我会把音量调低。","Thank you for telling me about the noise last night. I will keep the volume down.","如果再次受到影响，请直接联系我。","Please contact me directly if it happens again."],
    ["reference-letter","B1","职业发展","Nora","a manager's office","request a professional reference letter","你能为我的海外工作申请写一封推荐信吗？","Could you write a reference letter for my overseas job application?","截止日期是下周五，我可以先发职位说明。","The deadline is next Friday, and I can send the job description first."],
    ["childcare-subsidy","B1","公共服务","Hiro","a council office","ask about eligibility for a childcare subsidy","我想了解兼职员工是否可以申请托儿补助。","I would like to know whether part-time employees can apply for the childcare subsidy.","请告诉我需要哪些收入证明。","Please tell me which income documents are required."],
    ["volunteer-shift","A2","志愿活动","Maya","a charity office","confirm a weekend volunteer shift","我想确认周日的志愿者班次是上午十点开始。","I would like to confirm that the volunteer shift starts at ten on Sunday.","我需要提前十五分钟到达吗？","Do I need to arrive fifteen minutes early?"],
    ["missing-luggage","A2","机场服务","Alex","an airport service desk","report a missing suitcase","我的行李没有出现在传送带上，我需要报失。","My suitcase did not arrive on the carousel, and I need to report it missing.","这是行李牌号码和酒店地址。","Here are the baggage tag number and my hotel address."],
    ["change-ticket","A2","铁路出行","Rina","a railway counter","change a train ticket to a later service","我错过了这班火车，可以把车票改到下一班吗？","I missed this train. Could I change my ticket to the next service?","如果需要补差价，请告诉我金额。","Please tell me the fare difference if I need to pay more."],
    ["recipe-substitution","B1","餐饮沟通","Ben","a cooking class","explain a safe ingredient substitution","如果没有牛奶，可以使用燕麦奶，但需要减少一点糖。","If milk is unavailable, you can use oat milk, but you should reduce the sugar slightly.","这种替换不会改变烘烤时间。","This substitution will not change the baking time."],
    ["work-accommodation","B2","职场支持","Grace","a human resources meeting","request a temporary workplace accommodation","手腕受伤恢复期间，我需要暂时使用语音输入软件。","While my wrist injury heals, I need temporary access to voice-input software.","医生建议我在四周内减少打字。","My doctor has advised me to reduce typing for four weeks."],
    ["insurance-excess","B1","保险咨询","Sam","an insurance office","clarify the excess on an insurance claim","我想确认这次维修需要我承担多少免赔额。","I would like to confirm how much excess I need to pay for this repair.","这笔费用是在维修前还是维修后支付？","Is the amount paid before or after the repair?"],
    ["streetlight","A2","市政服务","Zoe","a council website","report a broken streetlight","车站旁边的路灯已经坏了三个晚上。","The streetlight next to the station has been broken for three nights.","灯柱编号是 A17，附近晚上很暗。","The pole number is A17, and the area is very dark at night."],
    ["pet-vaccination","A2","宠物照护","Jun","a veterinary clinic","arrange a vaccination appointment for a pet","我想为我的猫预约年度疫苗接种。","I would like to book an annual vaccination appointment for my cat.","周三下午四点以后都可以。","Any time after four on Wednesday would work."],
    ["course-prerequisite","B1","课程咨询","Elena","a college office","ask about a course prerequisite","我想选商务写作课，但不确定是否必须先完成中级英语。","I want to take Business Writing, but I am not sure whether Intermediate English is required first.","我去年通过了同等级的线上课程。","I passed an online course at the same level last year."],
    ["password-reset","A2","技术支持","Milo","an online help desk","explain the steps for resetting a password","先打开登录页面，然后选择“忘记密码”。","Open the sign-in page first, and then choose the password-reset option.","验证码会发送到你登记的邮箱。","A verification code will be sent to your registered email address."],
    ["museum-directions","A2","城市出行","Aiko","a visitor centre","give clear directions to a museum","沿这条街直走，在第二个红绿灯左转。","Go straight along this street and turn left at the second set of traffic lights.","博物馆就在公园入口对面。","The museum is directly opposite the park entrance."],
    ["salary-expectation","B2","求职面试","Theo","a job interview","discuss a salary expectation professionally","根据岗位职责和市场水平，我期望的年薪范围是四万到四万五千。","Based on the responsibilities and market rate, I am looking for a salary between forty and forty-five thousand.","不过我也愿意讨论完整的福利方案。","However, I am open to discussing the full benefits package."],
    ["invoice-correction","B1","财务沟通","Keiko","an accounts office","request a correction to an invoice","发票上的公司名称和采购订单不一致。","The company name on the invoice does not match the purchase order.","请更正后重新发送 PDF 版本。","Please correct it and send the PDF version again."],
    ["pilot-program","B2","变更管理","Amir","a leadership meeting","propose a small pilot before a full rollout","我建议先让一个团队试用新流程四周。","I suggest letting one team test the new process for four weeks first.","试点结束后，我们再根据错误和反馈决定是否推广。","After the pilot, we can decide whether to expand it based on errors and feedback."],
    ["recycling-rules","B1","社区生活","Chloe","an apartment lobby","explain local recycling rules","纸张和塑料需要分开，玻璃瓶要放进院子里的绿色箱子。","Paper and plastic must be separated, and glass bottles go in the green bin in the courtyard.","食物残渣不能放进回收袋。","Food waste must not be put in the recycling bag."],
    ["drill-role","B1","安全培训","Dylan","a workplace briefing","confirm a role in an emergency drill","我想确认演练时我负责带访客到集合点。","I would like to confirm that I am responsible for guiding visitors to the assembly point during the drill.","我也会带上访客登记表。","I will also bring the visitor register with me."],
    ["product-demo","B1","商务沟通","Freya","a supplier meeting","ask for a live product demonstration","在决定采购前，我们可以看一次完整的现场演示吗？","Could we see a complete live demonstration before making a purchase decision?","我们尤其想测试离线模式和数据导出。","We especially want to test the offline mode and data export."],
    ["contract-risk","B2","合同审阅","Yuki","a contract review","summarize a contract risk clearly","合同没有说明供应商必须在多长时间内修复严重故障。","The contract does not state how quickly the supplier must fix a critical failure.","我建议在签署前加入明确的响应期限。","I recommend adding a clear response deadline before signing." ]
  ].map(([slug, level, topic, person, place, goal, sourceZh, target, followZh, follow]) => Object.freeze({ slug, level, topic, person, place, goal, sourceZh, target, followZh, follow }));

  const keywordList = (text) => text.toLowerCase().replace(/[^a-z\s'-]/g, " ").split(/\s+/).filter((word) => word.length >= 4 && !["would","could","please","that","this","with","from","when","whether","before","after","about","have","been"].includes(word)).slice(0, 4);
  const rotateOptions = (items, answerIndex) => {
    const correct = items[0];
    const distractors = items.slice(1);
    const options = [...distractors];
    options.splice(answerIndex, 0, correct);
    return options;
  };
  const related = (index, key) => [situations[index], situations[(index + 7) % situations.length], situations[(index + 17) % situations.length], situations[(index + 29) % situations.length]].map((item) => item[key]);

  const translationRows = situations.flatMap((item, index) => [
    Object.freeze({
      id: `t480-${String(index * 2 + 1).padStart(3, "0")}`, context: item.topic, tone: item.level === "B2" ? "专业、清晰" : "礼貌、自然",
      source: item.sourceZh, answer: item.target, shortAnswer: item.target, alternatives: Object.freeze([item.target]),
      chunks: Object.freeze([[item.sourceZh, item.target]]), hints: Object.freeze(keywordList(item.target)), level: item.level
    }),
    Object.freeze({
      id: `t480-${String(index * 2 + 2).padStart(3, "0")}`, context: `${item.topic} · 后续说明`, tone: "补充细节",
      source: item.followZh, answer: item.follow, shortAnswer: item.follow, alternatives: Object.freeze([item.follow]),
      chunks: Object.freeze([[item.followZh, item.follow]]), hints: Object.freeze(keywordList(item.follow)), level: item.level
    })
  ]);

  const listeningRows = situations.flatMap((item, index) => [0, 1].map((variant) => {
    const answer = (index + variant) % 4;
    const text = variant === 0 ? item.target : item.follow;
    const sourceOptions = related(index, variant === 0 ? "goal" : "follow");
    return Object.freeze({
      id: `l480-${String(index * 2 + variant + 1).padStart(3, "0")}`,
      level: item.level, topic: item.topic, text,
      question: variant === 0 ? `What is ${item.person} trying to do at ${item.place}?` : `Which follow-up detail does ${item.person} add in this ${item.topic} conversation?`,
      options: Object.freeze(rotateOptions(sourceOptions, answer)), answer, correctIndex: answer,
      keywords: Object.freeze(keywordList(text))
    });
  }));

  const speakingRows = [
    ...situations.map((item, index) => Object.freeze({
      id: `s380-${String(index + 1).padStart(3, "0")}`, scenario: item.topic, title: item.topic, context: `在 ${item.place} 完成一项${item.topic}任务。`,
      prompt: `At ${item.place}, handle this situation in English: ${item.goal}.`, target: item.target, sample: item.target,
      shortVersion: item.target, tip: `先说明关键背景，再完成任务：${item.goal}。`, keywords: Object.freeze(keywordList(item.target)), level: item.level
    })),
    ...situations.slice(0, 20).map((item, index) => Object.freeze({
      id: `s380-${String(index + 41).padStart(3, "0")}`, scenario: `${item.topic} · 追问`, title: `${item.topic} · 追问`, context: `继续 ${item.place} 中的对话并补充关键信息。`,
      prompt: `Continue the conversation with this detail: ${item.followZh}`, target: item.follow, sample: item.follow,
      shortVersion: item.follow, tip: "把补充条件说完整，并保持语气自然。", keywords: Object.freeze(keywordList(item.follow)), level: item.level
    }))
  ];

  const readingRows = situations.map((item, index) => {
    const answer = index % 4;
    const goalOptions = rotateOptions(related(index, "goal"), answer);
    const messageOptions = rotateOptions(related(index, "target"), (answer + 1) % 4);
    const followOptions = rotateOptions(related(index, "follow"), (answer + 2) % 4);
    const passage = `During a busy day at ${item.place}, ${item.person} needed to ${item.goal}. The request involved a practical detail that could affect the final result. Before sending a message, ${item.person} checked the relevant information and decided to make one clear request. ${item.person} said, "${item.target}" The other person listened carefully and asked for one more detail. ${item.person} then added, "${item.follow}" The request was confirmed in writing, so both sides knew the next step. Before leaving, ${item.person} reviewed the message once more and saved the result. The exchange showed that useful English combines context, a concrete request, and a confirmed action.`;
    const translationZh = `忙碌的一天里，${item.person}在${item.place}需要${item.sourceZh.replace(/[。？]/g, "")}。这项请求包含一个会影响最终结果的实际细节。发送消息前，${item.person}核对了相关信息，并决定提出一个明确请求。${item.person}说：“${item.sourceZh}”对方认真听取后询问了一个补充细节。${item.person}随后补充：“${item.followZh}”请求以书面形式得到确认，因此双方都清楚下一步。离开前，${item.person}再次检查消息并保存结果。这次交流说明，实用英语要结合背景、具体请求和确认后的行动。`;
    return Object.freeze({
      id: `reading-v180-${String(index + 1).padStart(3, "0")}`,
      title: `${item.person}'s ${item.topic} Conversation`, titleZh: `${item.topic}：${item.sourceZh.replace(/[。？]/g, "")}`,
      topic: item.topic, level: item.level, passage, translationZh,
      vocabulary: Object.freeze([["message","消息"],["detail","细节"],["request","请求"],["confirm","确认"],["result","结果"]].map(([word, meaning]) => Object.freeze({ word, meaning }))),
      questions: Object.freeze([
        Object.freeze({
          question: `What was ${item.person} mainly trying to do?`, questionZh: `${item.person}主要想完成什么？`,
          options: Object.freeze(goalOptions), optionsZh: Object.freeze(goalOptions.map((option) => situations.find((candidate) => candidate.goal === option)?.sourceZh || option)), answer,
          explanation: `${item.person} needed to ${item.goal}.`, explanationZh: `${item.person}的主要任务是：${item.sourceZh}`
        }),
        Object.freeze({
          question: `Which first message did ${item.person} use?`, questionZh: `${item.person}首先使用了哪条消息？`,
          options: Object.freeze(messageOptions), optionsZh: Object.freeze(messageOptions.map((option) => situations.find((candidate) => candidate.target === option)?.sourceZh || option)), answer: (answer + 1) % 4,
          explanation: `The passage directly quotes: "${item.target}"`, explanationZh: `原文直接引用了：“${item.sourceZh}”`
        }),
        Object.freeze({
          question: `What follow-up detail did ${item.person} add?`, questionZh: `${item.person}补充了哪项细节？`,
          options: Object.freeze(followOptions), optionsZh: Object.freeze(followOptions.map((option) => situations.find((candidate) => candidate.follow === option)?.followZh || option)), answer: (answer + 2) % 4,
          explanation: `${item.person} added: "${item.follow}"`, explanationZh: `${item.person}补充道：“${item.followZh}”`
        })
      ]),
      summary: `${item.person} used context, a clear request, and confirmation to ${item.goal}.`,
      summaryZh: `${item.person}通过背景、明确请求和确认完成了${item.topic}任务。`
    });
  });

  const grammarModels = [
    {
      category: "现在完成时", title: "现在完成时强调当前结果", summary: "用 have/has + 过去分词连接过去动作与现在结果。", rule: "没有明确过去时间，并强调当前结果时使用现在完成时。",
      variants: [["send","sent","the corrected invoice"],["finish","finished","the safety checklist"],["confirm","confirmed","the interview time"],["back up","backed up","the project folder"]],
      make: ([base, past, object]) => ({ good: `I have ${past} ${object}.`, bad: `I have ${base} ${object}.`, question: `The task is complete now. I ___ ${object}.`, options: [`have ${past}`, `${past} yesterday`, `have ${base}`], answer: 0, explanation: "The current result is important, so use have + past participle." })
    },
    {
      category: "一般过去时", title: "明确过去时间使用过去时", summary: "yesterday、last week 等明确时间通常搭配一般过去时。", rule: "动作在明确的过去时间完成时使用过去式。",
      variants: [["sent","the application","yesterday"],["called","the clinic","this morning"],["checked","the label","last night"],["met","the supplier","on Monday"]],
      make: ([past, object, time]) => ({ good: `I ${past} ${object} ${time}.`, bad: `I have ${past} ${object} ${time}.`, question: `I ___ ${object} ${time}.`, options: [past, `have ${past}`, `am ${past}`], answer: 0, explanation: `${time} is a finished past time, so use the simple past.` })
    },
    {
      category: "将来安排", title: "现在进行时表示已安排的未来", summary: "已确定时间的个人安排可用 be + -ing。", rule: "有明确安排和时间时，现在进行时可表达未来。",
      variants: [["meeting","the landlord","tomorrow morning"],["joining","the briefing","at nine"],["visiting","the clinic","on Thursday"],["taking","the later train","this evening"]],
      make: ([ing, object, time]) => ({ good: `I am ${ing} ${object} ${time}.`, bad: `I ${ing} ${object} ${time}.`, question: `The arrangement is confirmed. I ___ ${object} ${time}.`, options: [`am ${ing}`, ing, `have ${ing}`], answer: 0, explanation: "Use am/is/are + -ing for a confirmed future arrangement." })
    },
    {
      category: "礼貌请求", title: "Could you 表达礼貌请求", summary: "Could you + 动词原形适合服务和职场沟通。", rule: "Could you 后接动词原形，不加 to 或 -ing。",
      variants: [["check the allergen label"],["send the updated schedule"],["explain the service fee"],["reserve the activity room"]],
      make: ([action]) => ({ good: `Could you ${action}, please?`, bad: `Could you to ${action}, please?`, question: `Which request is natural for this action: "${action}"?`, options: [`Could you ${action}, please?`, `Could you to ${action}, please?`, `Could you ${action.replace(/^\w+/, (word) => `${word}ing`)}, please?`], answer: 0, explanation: "Could you is followed by the base form of the verb." })
    },
    {
      category: "第一条件句", title: "第一条件句表达真实可能", summary: "If + 一般现在时，主句用 will/can + 动词原形。", rule: "条件从句不用 will，结果从句表达可能结果。",
      variants: [["the road remains closed","the shipment will arrive tomorrow"],["the part needs replacing","I will confirm the price first"],["the email is suspicious","we will report it to security"],["the pilot works well","we can expand the process"]],
      make: ([condition, result]) => ({ good: `If ${condition}, ${result}.`, bad: `If ${condition.replace(/\b(is|remains|needs|works)\b/, "will $1")}, ${result}.`, question: `Choose the correct conditional sentence about "${condition}".`, options: [`If ${condition}, ${result}.`, `If will ${condition}, ${result}.`, `If ${condition}, ${result.replace(/\b(will|can)\b/, "would")}.`], answer: 0, explanation: "A real future condition uses present tense after if and will/can in the result." })
    },
    {
      category: "第二条件句", title: "第二条件句讨论假设", summary: "If + 过去式，主句用 would + 动词原形。", rule: "第二条件句用于不真实或较不可能的现在/未来情况。",
      variants: [["I lived closer","I would attend every workshop"],["we had more time","we would test another option"],["the room were larger","we would invite more people"],["I knew the answer","I would explain it now"]],
      make: ([condition, result]) => ({ good: `If ${condition}, ${result}.`, bad: `If ${condition}, ${result.replace("would", "will")}.`, question: `Choose the hypothetical sentence about "${condition}".`, options: [`If ${condition}, ${result}.`, `If ${condition}, ${result.replace("would", "will")}.`, `If ${condition.replace(/\b(lived|had|were|knew)\b/, "will have")}, ${result}.`], answer: 0, explanation: "Use past form after if and would in the result for a hypothesis." })
    },
    {
      category: "被动语态", title: "被动语态突出流程结果", summary: "be + 过去分词可突出对象或流程。", rule: "当执行者不重要或未知时使用被动语态。",
      variants: [["The verification code","sent","by email"],["Critical files","backed up","every day"],["The invoice","checked","before payment"],["Glass bottles","placed","in the green bin"]],
      make: ([subject, past, tail]) => ({ good: `${subject} is ${past} ${tail}.`, bad: `${subject} ${past} ${tail}.`, question: `Complete the process description: ${subject} ___ ${tail}.`, options: [`is ${past}`, past, `is ${past.replace(/ed$/, "ing")}`], answer: 0, explanation: "The subject receives the action, so use be + past participle." })
    },
    {
      category: "关系从句", title: "关系从句补充人物信息", summary: "who 指人，which 指物，where 指地点。", rule: "用正确的关系词连接名词和补充说明。",
      variants: [["The colleague","helped me","who"],["The software","stores the backup","which"],["The room","we hold the briefing","where"],["The interpreter","speaks Chinese","who"]],
      make: ([subject, detail, relative]) => ({ good: `${subject} ${relative} ${detail} is available.`, bad: `${subject} which ${detail} is available.`, question: `Choose the correct relative word: ${subject} ___ ${detail} is available.`, options: [relative, relative === "where" ? "who" : "which", "what"], answer: 0, explanation: `${relative} is the correct relative word for this noun.` })
    },
    {
      category: "情态推测", title: "must/might/can't 表达推测程度", summary: "must 表示很有把握，might 表示可能，can't 表示几乎不可能。", rule: "根据证据强弱选择不同情态动词。",
      variants: [["The lights are on and the door is open","someone","must"],["The road may reopen later","the delivery","might"],["The receipt shows only one payment","the second charge","can't"],["Her calendar is marked busy","she","might"]],
      make: ([evidence, subject, modal]) => ({ good: `${evidence}, so ${subject} ${modal} be affected.`, bad: `${evidence}, so ${subject} ${modal} to be affected.`, question: `${evidence}. Which modal best fits?`, options: [modal, modal === "must" ? "can't" : "must", "should to"], answer: 0, explanation: `The evidence supports ${modal} as the appropriate degree of certainty.` })
    },
    {
      category: "动名词", title: "特定动词后使用 -ing", summary: "avoid、consider、suggest 后通常接动名词。", rule: "这些动词后接 -ing 形式，不接 to + 动词。",
      variants: [["avoid","clicking the suspicious link"],["consider","rotating the meeting time"],["suggest","testing the process first"],["recommend","comparing the total cost"]],
      make: ([verb, gerund]) => ({ good: `We ${verb} ${gerund}.`, bad: `We ${verb} to ${gerund.replace(/ing\b/, "")}.`, question: `Choose the natural form after "${verb}":`, options: [gerund, `to ${gerund.replace(/ing\b/, "")}`, gerund.replace(/ing\b/, "s")], answer: 0, explanation: `${verb} is followed by a gerund in this pattern.` })
    }
  ];

  const grammarRows = grammarModels.flatMap((model, modelIndex) => model.variants.map((variant, variantIndex) => {
    const built = model.make(variant);
    return Object.freeze({
      id: `g260-${String(modelIndex * 4 + variantIndex + 1).padStart(3, "0")}`,
      category: model.category, title: model.title, summary: model.summary, rule: model.rule,
      examples: Object.freeze([{ good: true, text: built.good, note: "自然表达" }, { good: false, text: built.bad, note: "注意结构" }].map(Object.freeze)),
      quiz: Object.freeze({ question: built.question, options: Object.freeze(built.options), answer: built.answer, explanation: built.explanation }),
      level: modelIndex < 5 ? "B1" : "B2"
    });
  }));

  window.ENGLISH_COMPASS_EXPANSION_GRAMMAR_V260 = Object.freeze(grammarRows);
  window.ENGLISH_COMPASS_EXPANSION_TRANSLATIONS_V480 = Object.freeze(translationRows);
  window.ENGLISH_COMPASS_EXPANSION_LISTENING_V480 = Object.freeze(listeningRows);
  window.ENGLISH_COMPASS_SPEAKING_V380 = Object.freeze(speakingRows);
  window.ENGLISH_COMPASS_READING_V180 = Object.freeze(readingRows);
})();

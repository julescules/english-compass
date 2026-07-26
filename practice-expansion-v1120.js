// English Compass v1.12 self-authored practice expansion: everyday services and advanced communication.
(function () {
  "use strict";

  const situations = [
    ["bank-account-opening","A2","银行开户","Mia","a high-street bank branch","open a basic bank account as a newcomer","我刚搬到这里，想开一个基础账户。请问需要护照和地址证明吗？","I have just moved here and would like to open a basic account. Do I need my passport and a proof of address?","如果今天可以办理，我想同时开通网上银行。","If it can be done today, I would also like to set up online banking.","basic account:基础账户;proof of address:地址证明;set up:开通"],
    ["gp-registration","A2","就医挂号","Tom","a local health centre","register with a family doctor","我想在这家诊所注册家庭医生。第一次就诊前需要填写病史表吗？","I would like to register with a family doctor at this clinic. Do I need to complete a medical history form before my first visit?","我对青霉素过敏，会把这一点写进表格里。","I am allergic to penicillin, and I will note that on the form.","register:注册;medical history form:病史表;allergic:过敏的"],
    ["train-delay-refund","A2","出行退款","Lena","a railway ticket office","ask for a refund after a long delay","我的火车晚点了一个多小时。请问我可以用这张票申请退款吗？","My train was delayed for more than an hour. Could I apply for a refund with this ticket?","如果需要在线申请，请告诉我网址和截止日期。","If I need to apply online, please tell me the website and the deadline.","delayed:晚点的;refund:退款;deadline:截止日期"],
    ["restaurant-allergy","A2","外出就餐","Yuki","a neighbourhood restaurant","order safely with a nut allergy","我对坚果过敏。请问这道菜里有坚果或花生油吗？","I am allergic to nuts. Does this dish contain nuts or peanut oil?","如果有，请推荐一道不含坚果的类似菜品。","If it does, could you recommend a similar dish without nuts?","contain:含有;peanut oil:花生油;recommend:推荐"],
    ["parcel-redelivery","A2","快递投递","Omar","a courier service hotline","arrange redelivery of a missed parcel","我错过了今天的包裹投递。可以安排周六上午重新投递吗？","I missed today's parcel delivery. Could you arrange a redelivery on Saturday morning?","如果周六不行，我可以到最近的取件点自取。","If Saturday is not possible, I can collect it from the nearest pickup point.","redelivery:重新投递;arrange:安排;pickup point:取件点"],
    ["library-card","A2","社区服务","Ana","a public library front desk","apply for a library card and learn the borrowing rules","我想办一张借书证。请问一次最多能借几本书，可以借多久？","I would like to apply for a library card. How many books can I borrow at once, and for how long?","我还想知道逾期归还是否需要付费。","I would also like to know whether there is a charge for returning books late.","apply for:申请;borrow:借阅;charge:费用"],
    ["evening-class","A2","继续教育","Ken","a community college reception","enrol in an evening English class","我想报名周三的晚间英语课程。请问开课前需要参加分级测试吗？","I would like to enrol in the Wednesday evening English class. Do I need to take a placement test before the course starts?","如果名额已满，请把我加入候补名单。","If the class is full, please add me to the waiting list.","enrol:报名;placement test:分级测试;waiting list:候补名单"],
    ["suspicious-charge","B1","银行安全","Nora","a bank fraud helpline","report an unrecognised card charge","我的账单上有一笔我不认识的扣费，发生在昨天晚上。请冻结这张卡并调查这笔交易。","There is a charge on my statement that I do not recognise, and it happened yesterday evening. Please freeze the card and investigate the transaction.","调查期间，请确认我不需要先支付这笔有争议的金额。","While the investigation continues, please confirm that I do not have to pay the disputed amount first.","statement:账单;freeze:冻结;disputed:有争议的"],
    ["pharmacy-dosage","B1","用药咨询","Ravi","a pharmacy counter","confirm conflicting dosage instructions","说明书写着一天两次，但医生说的是一天一次。请问我应该按哪一个执行？","The label says twice a day, but the doctor told me once a day. Which instruction should I follow?","另外，请告诉我这种药需要随餐服用还是空腹服用。","Could you also tell me whether this medicine should be taken with food or on an empty stomach?","label:标签;instruction:用法说明;empty stomach:空腹"],
    ["insurance-claim","B1","保险理赔","Elsa","an insurer's claims line","report water damage and start a claim","洗衣机漏水损坏了厨房地板。我已经拍了照片，请告诉我如何提交理赔。","A leaking washing machine has damaged the kitchen floor. I have taken photographs, so please tell me how to submit a claim.","请同时确认免赔额是多少，以及理赔大约需要多长时间。","Please also confirm the excess amount and roughly how long the claim will take.","submit a claim:提交理赔;excess:免赔额;damaged:损坏的"],
    ["phone-contract","B1","数字服务","Igor","a mobile provider webchat","question an unexpected price increase","我的月费从十二镑涨到了十八镑，但合同里没有提到年中调价。请解释这次涨价的依据。","My monthly fee has risen from twelve to eighteen pounds, but the contract does not mention a mid-year increase. Please explain the basis for this change.","如果无法给出合同依据，我希望按原价格继续，或者免费解约。","If there is no contractual basis, I would like to keep the original price or cancel without a fee.","contract:合同;increase:涨价;cancel:解约"],
    ["volunteer-induction","B1","志愿服务","Sofia","a food bank coordinator meeting","agree a volunteering schedule and its requirements","我每周二晚上有空，可以负责整理捐赠食品。请问上岗前需要参加培训吗？","I am free on Tuesday evenings and can help sort the donated food. Do I need any training before I start?","如果需要背景审查，我可以这周提交相关材料。","If a background check is required, I can submit the documents this week.","sort:分拣;donated:捐赠的;background check:背景审查"],
    ["mock-exam-review","B1","考试准备","Hiro","a language school feedback session","turn mock exam results into a study plan","模拟考试显示我的听力比阅读弱。接下来一个月，我想把每天的练习重点放在听力上。","The mock exam shows that my listening is weaker than my reading. For the next month, I want to focus my daily practice on listening.","请帮我每两周安排一次进度检查，看看方法是否有效。","Could you arrange a progress check every two weeks to see whether the method is working?","mock exam:模拟考试;focus:集中;progress check:进度检查"],
    ["hotel-overbooking","B1","旅行应对","Marta","a hotel front desk at night","resolve an overbooked room calmly","我有已付款的预订确认，但前台说今晚没有房间了。请提供同等标准的替代方案。","I have a paid booking confirmation, but the desk says there are no rooms left tonight. Please offer an alternative of the same standard.","如果替代酒店更远，我希望酒店承担出租车费用。","If the alternative hotel is further away, I expect the hotel to cover the taxi fare.","booking confirmation:预订确认;alternative:替代方案;cover:承担"],
    ["presentation-objection","B2","商务演示","Elif","a client proposal meeting","answer a budget objection with evidence","您担心方案超出预算是合理的，因此我想先说明成本结构，再展示两个可以缩减的模块。","Your concern about the budget is reasonable, so let me first explain the cost structure and then show two modules that can be reduced.","如果我们分两期实施，第一期就能在现有预算内完成核心目标。","If we deliver the project in two phases, the first phase can achieve the core goals within the current budget.","cost structure:成本结构;module:模块;phase:阶段"],
    ["data-access-request","B2","数据隐私","Wei","a customer data team","handle a subject access request correctly","客户要求查看我们保存的关于他的全部个人数据。我们必须在三十天内答复，并且不能泄露其他人的信息。","A customer has asked to see all the personal data we hold about him. We must respond within thirty days without revealing information about anyone else.","我会先核实请求人的身份，再从各系统导出相关记录。","I will verify the requester's identity first and then export the relevant records from each system.","personal data:个人数据;respond:答复;verify:核实"],
    ["renewal-negotiation","B2","续保协商","Clara","an insurance renewal call","negotiate a fairer renewal premium","续保报价比去年高出百分之四十，但我从未理赔，市场上同类保单也便宜得多。请重新报价。","The renewal quote is forty percent higher than last year, although I have never claimed and similar policies cost much less on the market. Please provide a revised quote.","如果价格无法调整，请在犹豫期结束前确认取消不会产生费用。","If the price cannot change, please confirm before the cooling-off period ends that cancellation will carry no fee.","renewal quote:续保报价;revised:修改后的;cooling-off period:犹豫期"],
    ["community-consultation","B2","社区共建","Aiden","a council planning consultation","argue for an accessible park entrance with evidence","规划案取消了公园唯一的无障碍入口。我们收集了两百份居民问卷，多数受访者每周都会使用这个入口。","The plan removes the only accessible entrance to the park. We collected two hundred resident surveys, and most respondents use this entrance every week.","我们建议保留该入口，并把改造预算用于增加坡道和座椅。","We propose keeping the entrance and spending the improvement budget on additional ramps and seating.","accessible:无障碍的;respondent:受访者;ramp:坡道"],
    ["scholarship-interview","B2","奖学金面试","Lin","a scholarship panel interview","justify a study plan with measurable outcomes","这笔奖学金将支持我完成数据分析课程。毕业后，我计划把所学用于社区医疗项目的排班优化。","This scholarship would support me through the data analysis course. After graduating, I plan to apply the skills to improving shift planning in community health projects.","我会每学期提交成绩单和项目进展报告，证明资金得到了有效使用。","Each term I will submit my transcript and a project progress report to show that the funding is used effectively.","scholarship:奖学金;transcript:成绩单;progress report:进展报告"],
    ["outage-communication","B2","服务中断沟通","Noor","a service incident bridge","communicate an outage honestly without overpromising","支付功能已中断四十分钟，原因仍在排查。我们应该先公布已确认的影响范围，并承诺三十分钟后更新，而不是给出没有把握的恢复时间。","Payments have been down for forty minutes and the cause is still under investigation. We should publish the confirmed impact first and promise an update in thirty minutes, rather than give a recovery time we cannot support.","恢复后，我们会发布事故报告，说明原因、影响和防止再次发生的措施。","After recovery, we will publish an incident report covering the cause, the impact, and the measures that prevent a repeat.","under investigation:排查中;impact:影响范围;incident report:事故报告"]
  ].map(([slug, level, topic, person, place, purpose, sourceZh, target, followZh, follow, terms]) => Object.freeze({
    slug, level, topic, person, place, purpose, sourceZh, target, followZh, follow,
    vocabulary: Object.freeze(terms.split(";").map((pair) => {
      const splitAt = pair.indexOf(":");
      return Object.freeze({ word: pair.slice(0, splitAt), meaning: pair.slice(splitAt + 1) });
    }))
  }));

  const alternativesBySlug = Object.freeze({
    "bank-account-opening": Object.freeze([
      "I've just moved to the area and want to open a basic account. Will you need my passport and a proof of address?",
      "If everything can be completed today, I'd also like to activate online banking."
    ]),
    "gp-registration": Object.freeze([
      "I'd like to register as a patient with a family doctor here. Should I fill in a medical history form before the first appointment?",
      "I'm allergic to penicillin, so I'll record that on the form."
    ]),
    "train-delay-refund": Object.freeze([
      "My train arrived over an hour late. Can I use this ticket to claim a refund?",
      "If the claim has to be made online, could you give me the website and the closing date?"
    ]),
    "restaurant-allergy": Object.freeze([
      "I have a nut allergy. Could you tell me whether this dish contains nuts or peanut oil?",
      "If it does, would you suggest a similar dish that is nut-free?"
    ]),
    "parcel-redelivery": Object.freeze([
      "I wasn't at home for today's parcel delivery. Would it be possible to redeliver on Saturday morning?",
      "If Saturday doesn't work, I'm happy to pick it up from the closest collection point."
    ]),
    "library-card": Object.freeze([
      "I'd like to get a library card. What is the borrowing limit, and how long can I keep the books?",
      "Could you also tell me whether late returns cost anything?"
    ]),
    "evening-class": Object.freeze([
      "I'd like to sign up for the Wednesday evening English course. Is a placement test required before it begins?",
      "If there are no places left, please put me on the waiting list."
    ]),
    "suspicious-charge": Object.freeze([
      "My statement shows a payment from yesterday evening that I don't recognise. Please block the card and look into the transaction.",
      "Please also confirm that the disputed amount doesn't have to be paid while the investigation is ongoing."
    ]),
    "pharmacy-dosage": Object.freeze([
      "The packaging says twice daily, but my doctor said once daily. Which of the two should I follow?",
      "Could you also confirm whether I should take this medicine with meals or on an empty stomach?"
    ]),
    "insurance-claim": Object.freeze([
      "A leak from the washing machine has damaged our kitchen floor. I've photographed everything, so how do I start a claim?",
      "Could you also tell me the excess and roughly how long the claim process takes?"
    ]),
    "phone-contract": Object.freeze([
      "My monthly charge jumped from twelve to eighteen pounds, yet the contract says nothing about a mid-year rise. What is the basis for this?",
      "Without a contractual basis, I'd expect to stay on the original price or leave without a cancellation fee."
    ]),
    "volunteer-induction": Object.freeze([
      "Tuesday evenings suit me, and I could sort the donated food. Is there any training I need to complete first?",
      "If you need a background check, I can hand in the paperwork this week."
    ]),
    "mock-exam-review": Object.freeze([
      "According to the mock exam, listening is my weakest skill compared with reading. I'd like to concentrate my daily practice on listening for a month.",
      "Would you set up a progress check every two weeks so we can see if the approach works?"
    ]),
    "hotel-overbooking": Object.freeze([
      "Here is my paid booking confirmation, yet I'm told no rooms remain tonight. Please arrange an alternative of equal standard.",
      "If the replacement hotel is further out, I'd expect the taxi fare to be covered."
    ]),
    "presentation-objection": Object.freeze([
      "It's reasonable to worry about the budget, so I'll start with the cost structure and then present two modules we could scale down.",
      "By splitting delivery into two phases, the first phase can meet the core goals inside the existing budget."
    ]),
    "data-access-request": Object.freeze([
      "A customer wants to see every piece of personal data we hold about him. The response is due within thirty days and must not expose anyone else's information.",
      "First I'll confirm the requester's identity, then pull the relevant records out of each system."
    ]),
    "renewal-negotiation": Object.freeze([
      "This renewal quote is forty percent above last year's price, despite my claim-free record and much cheaper comparable policies. Could you re-quote?",
      "If the price is fixed, please confirm within the cooling-off period that cancelling costs nothing."
    ]),
    "community-consultation": Object.freeze([
      "The proposal takes away the park's only accessible entrance. Two hundred resident surveys show most respondents rely on it weekly.",
      "Our suggestion is to keep the entrance and put the improvement budget into extra ramps and seating."
    ]),
    "scholarship-interview": Object.freeze([
      "With this scholarship I could complete the data analysis course, and afterwards I intend to apply the skills to shift planning in community health projects.",
      "Every term I'll provide my transcript and a progress report on the project to demonstrate effective use of the funding."
    ]),
    "outage-communication": Object.freeze([
      "Payments have been unavailable for forty minutes while the cause is investigated. Let's publish the confirmed impact and commit to an update in thirty minutes instead of an unsupported recovery time.",
      "Once service is restored, we'll issue an incident report explaining the cause, the impact, and the safeguards against a repeat."
    ])
  });

  const stopWords = new Set(["about", "after", "again", "before", "could", "every", "first", "from", "have", "should", "still", "their", "there", "these", "those", "through", "today", "which", "while", "would"]);
  const keywordList = (text) => Object.freeze(Array.from(new Set((text.toLowerCase().match(/[a-z]+(?:'[a-z]+)?/g) || [])
    .filter((word) => word.length >= 5 && !stopWords.has(word)))).slice(0, 4));
  const titleFromSlug = (slug) => slug.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  const rotateOptions = (items, answerIndex) => {
    const alternatives = items.slice(1);
    alternatives.splice(answerIndex, 0, items[0]);
    return alternatives;
  };
  const related = (index, key) => [situations[index], situations[(index + 5) % 20], situations[(index + 11) % 20], situations[(index + 16) % 20]].map((item) => item[key]);

  const translationRows = situations.flatMap((item, index) => [
    Object.freeze({
      id: `t640-${String(index * 2 + 1).padStart(3, "0")}`,
      context: item.topic,
      tone: item.level === "B2" ? "专业、准确、有依据" : "礼貌、自然",
      source: item.sourceZh,
      answer: item.target,
      shortAnswer: item.target,
      alternatives: Object.freeze([alternativesBySlug[item.slug][0]]),
      chunks: Object.freeze([Object.freeze([item.sourceZh, item.target])]),
      hints: keywordList(item.target),
      level: item.level
    }),
    Object.freeze({
      id: `t640-${String(index * 2 + 2).padStart(3, "0")}`,
      context: `${item.topic} · 后续行动`,
      tone: item.level === "B2" ? "明确、可执行" : "礼貌补充",
      source: item.followZh,
      answer: item.follow,
      shortAnswer: item.follow,
      alternatives: Object.freeze([alternativesBySlug[item.slug][1]]),
      chunks: Object.freeze([Object.freeze([item.followZh, item.follow])]),
      hints: keywordList(item.follow),
      level: item.level
    })
  ]);

  const listeningRows = situations.flatMap((item, index) => [0, 1].map((variant) => {
    const answer = (index + variant * 2) % 4;
    const text = variant === 0 ? item.target : item.follow;
    const optionKey = variant === 0 ? "purpose" : "follow";
    return Object.freeze({
      id: `l640-${String(index * 2 + variant + 1).padStart(3, "0")}`,
      level: item.level,
      topic: item.topic,
      text,
      question: variant === 0
        ? `What does ${item.person} want to achieve?`
        : `What further step does ${item.person} mention?`,
      options: Object.freeze(rotateOptions(related(index, optionKey), answer)),
      answer,
      correctIndex: answer,
      keywords: keywordList(text)
    });
  }));

  const speakingRows = [
    ...situations.map((item, index) => Object.freeze({
      id: `s500-${String(index + 1).padStart(3, "0")}`,
      scenario: item.topic,
      title: item.topic,
      context: `在“${item.topic}”情境中完成一项真实的英语沟通任务。`,
      prompt: `Deal with this situation in English: ${item.purpose}. Setting: ${item.place}.`,
      target: item.target,
      sample: item.target,
      shortVersion: item.target,
      tip: item.level === "B2" ? "先给出可核实的事实与限制条件，再提出可执行的请求或方案。" : "先交代关键信息，再礼貌而明确地提出请求。",
      keywords: keywordList(item.target),
      level: item.level
    })),
    ...situations.slice(0, 10).map((item, index) => Object.freeze({
      id: `s500-${String(index + 21).padStart(3, "0")}`,
      scenario: `${item.topic} · 跟进`,
      title: `${item.topic} · 跟进`,
      context: `延续“${item.topic}”对话，把补充条件或下一步说清楚。`,
      prompt: `Add the follow-up point that completes the request. Setting: ${item.place}.`,
      target: item.follow,
      sample: item.follow,
      shortVersion: item.follow,
      tip: "用完整句补充条件、时间或备选方案。",
      keywords: keywordList(item.follow),
      level: item.level
    }))
  ];

  const readingCopy = (item) => {
    if (item.level === "A2") {
      return {
        passage: `At ${item.place}, ${item.person} wanted to ${item.purpose}. First, ${item.person} prepared the important details and thought about the right words. Then ${item.person} said politely, “${item.target}” The staff member understood the request and gave a helpful answer. Before leaving, ${item.person} added, “${item.follow}” Because the question was short and clear, the conversation stayed friendly, and ${item.person} left knowing exactly what would happen next.`,
        translationZh: `在${item.place}，${item.person}想完成“${item.topic}”这件事。${item.person}先准备好关键信息，想好合适的表达，然后礼貌地说：“${item.sourceZh}”工作人员理解了请求并给出了有用的回答。离开前，${item.person}又补充道：“${item.followZh}”因为问题简短清晰，对话保持了友好气氛，${item.person}也清楚地知道接下来会发生什么。`
      };
    }
    if (item.level === "B1") {
      return {
        passage: `${item.person} came to ${item.place} in order to ${item.purpose}. The matter was not completely simple, so ${item.person} organised the facts first: what had already happened, what evidence existed, and what outcome would be reasonable. When the conversation began, ${item.person} explained, “${item.target}” Instead of guessing, the listener responded to the exact point that had been raised. ${item.person} then confirmed the next step: “${item.follow}” Both sides now shared the same understanding, and the agreed action was noted down. A short message sent afterwards made sure that nothing from the conversation would be forgotten or disputed later.`,
        translationZh: `${item.person}来到${item.place}，准备完成“${item.topic}”任务。事情并不完全简单，因此${item.person}先整理事实：已经发生了什么、有哪些凭证、什么样的结果才合理。对话开始后，${item.person}解释道：“${item.sourceZh}”对方不必猜测，而是针对提出的要点作出回应。随后${item.person}确认下一步：“${item.followZh}”双方达成了一致理解，商定的行动也被记录下来。事后发出的简短说明确保对话内容不会被遗忘，也不会引起争议。`
      };
    }
    return {
      passage: `The situation at ${item.place} required ${item.person} to ${item.purpose}, and the outcome would affect more people than those present in the room. ${item.person} therefore treated the conversation as a decision process rather than a complaint: the verifiable facts came first, then the constraints, and only then the request. ${item.person} stated, “${item.target}” The listeners examined the claim against the available records and asked what standard should apply in similar cases. ${item.person} continued, “${item.follow}” The group agreed on the action, the owner, and the evidence that would show whether it had worked. What made the exchange effective was not persuasion alone, but a transparent chain from evidence to proposal that others could inspect and challenge.`,
      translationZh: `${item.place}的情况要求${item.person}完成“${item.topic}”任务，而结果影响的不只是在场的人。因此${item.person}把对话当作决策过程而非抱怨：先给出可核实的事实，再说明限制条件，最后才提出请求。${item.person}说道：“${item.sourceZh}”听者对照现有记录检验这一说法，并讨论类似情况应适用什么标准。${item.person}接着说：“${item.followZh}”大家就行动、负责人以及验证成效的证据达成一致。这次沟通之所以有效，靠的不只是说服力，而是一条他人可以检查和质疑的、从证据到提案的透明链条。`
    };
  };

  const readingRows = situations.map((item, index) => {
    const purposeAnswer = index % 4;
    const messageAnswer = (index + 1) % 4;
    const followAnswer = (index + 2) % 4;
    const purposeOptions = rotateOptions(related(index, "purpose"), purposeAnswer);
    const messageOptions = rotateOptions(related(index, "target"), messageAnswer);
    const followOptions = rotateOptions(related(index, "follow"), followAnswer);
    const copy = readingCopy(item);
    return Object.freeze({
      id: `reading-v260-${String(index + 1).padStart(3, "0")}`,
      title: `${item.person}'s ${titleFromSlug(item.slug)}`,
      titleZh: item.topic,
      topic: item.topic,
      level: item.level,
      passage: copy.passage,
      translationZh: copy.translationZh,
      vocabulary: item.vocabulary,
      questions: Object.freeze([
        Object.freeze({
          question: `What was ${item.person} trying to accomplish?`,
          questionZh: `${item.person}想要达成什么目标？`,
          options: Object.freeze(purposeOptions),
          optionsZh: Object.freeze(purposeOptions.map((option) => situations.find((candidate) => candidate.purpose === option)?.sourceZh || option)),
          answer: purposeAnswer,
          explanation: `${item.person}'s goal was to ${item.purpose}.`,
          explanationZh: `${item.person}的目标与“${item.sourceZh}”直接对应。`
        }),
        Object.freeze({
          question: `Which sentence did ${item.person} say to present the situation?`,
          questionZh: `${item.person}用哪句话说明了情况？`,
          options: Object.freeze(messageOptions),
          optionsZh: Object.freeze(messageOptions.map((option) => situations.find((candidate) => candidate.target === option)?.sourceZh || option)),
          answer: messageAnswer,
          explanation: `The passage directly quotes: “${item.target}”`,
          explanationZh: `原文直接引用了：“${item.sourceZh}”`
        }),
        Object.freeze({
          question: `What additional step did ${item.person} mention?`,
          questionZh: `${item.person}补充提到了哪个后续步骤？`,
          options: Object.freeze(followOptions),
          optionsZh: Object.freeze(followOptions.map((option) => situations.find((candidate) => candidate.follow === option)?.followZh || option)),
          answer: followAnswer,
          explanation: `${item.person} added: “${item.follow}”`,
          explanationZh: `${item.person}补充道：“${item.followZh}”`
        })
      ]),
      summary: `${item.person} used verified facts, a clear request, and a confirmed follow-up to ${item.purpose}.`,
      summaryZh: `${item.person}依靠已核实的事实、清晰的请求和确认过的后续行动完成了这次沟通。`
    });
  });

  const grammarModels = [
    {
      category: "动词搭配", title: "enjoy doing 与 decide to do", summary: "enjoy、finish 等接动名词；decide、plan 等接不定式。", rule: "动词后接动名词还是不定式由动词本身决定，不能混用。", level: "A2",
      variants: [
        ["enjoy", "I enjoy practising English before work.", "I enjoy to practise English before work.", "I enjoy practise English before work."],
        ["decide", "We decided to open a basic account.", "We decided opening a basic account.", "We decided open a basic account."]
      ],
      make: ([verb, good, bad, third]) => ({ good, bad, question: `Choose the sentence that uses “${verb}” with the correct verb pattern.`, options: [good, bad, third], explanation: "Each verb selects either the gerund or the infinitive; the pattern is fixed by the verb." })
    },
    {
      category: "可数与不可数", title: "much/many 与 advice、luggage", summary: "不可数名词用 much 和单数动词，没有复数形式。", rule: "luggage、advice、information 等不可数名词不加 -s，也不与 many 连用。", level: "A2",
      variants: [
        ["How much luggage can I store here?", "How many luggage can I store here?", "How much luggages can I store here?"],
        ["There is some useful advice in the leaflet.", "There are some useful advices in the leaflet.", "There is a useful advice in the leaflet."]
      ],
      make: ([good, bad, third]) => ({ good, bad, question: "Choose the sentence that treats the uncountable noun correctly.", options: [good, bad, third], explanation: "Uncountable nouns take much, a singular verb, and no plural ending or indefinite article." })
    },
    {
      category: "频率副词位置", title: "usually 与 always 的位置", summary: "频率副词位于实义动词前、be 动词后。", rule: "一般情况下频率副词放在主要动词之前，但在 be 动词之后。", level: "A2",
      variants: [
        ["I usually check the timetable before I leave.", "I check usually the timetable before I leave.", "I am usually check the timetable before I leave."],
        ["She is always on time for her shift.", "She always is on time for her shift.", "She is on always time for her shift."]
      ],
      make: ([good, bad, third]) => ({ good, bad, question: "Choose the sentence with the adverb of frequency in the correct position.", options: [good, bad, third], explanation: "Frequency adverbs go before a main verb but after the verb be." })
    },
    {
      category: "used to 与 be used to", title: "过去习惯与已经习惯", summary: "used to + 动词原形表示过去习惯；be used to + 动名词表示已经习惯。", rule: "两个结构含义不同，后接的动词形式也不同。", level: "B1",
      variants: [
        ["I used to pay in cash, but now I use my phone.", "I use to pay in cash, but now I use my phone.", "I am used to pay in cash, but now I use my phone."],
        ["I am used to working with two screens.", "I am used to work with two screens.", "I used to working with two screens."]
      ],
      make: ([good, bad, third]) => ({ good, bad, question: "Choose the sentence that uses the used-to structure correctly.", options: [good, bad, third], explanation: "Used to takes the base verb for past habits, while be used to takes the -ing form for familiarity." })
    },
    {
      category: "间接引语", title: "say 与 tell 的转述", summary: "say 不接人称宾语，tell 必须接；从句保持陈述语序。", rule: "said that…、told me that… 是标准搭配，不用 said me 或 told to me。", level: "B1",
      variants: [
        ["The nurse said that the results were ready.", "The nurse said me that the results were ready.", "The nurse said that were the results ready."],
        ["He told me that the train had already left.", "He told to me that the train had already left.", "He told that the train had already left."]
      ],
      make: ([good, bad, third]) => ({ good, bad, question: "Choose the correctly reported statement.", options: [good, bad, third], explanation: "Say takes no personal object, tell requires one, and the reported clause keeps statement order." })
    },
    {
      category: "目的表达", title: "so that 与不定式表目的", summary: "so that 接完整从句；单独目的可用不定式 to do。", rule: "不要用 for + 动词原形来表示目的。", level: "B1",
      variants: [
        ["I kept the receipt so that I could request a refund.", "I kept the receipt so that to request a refund.", "I kept the receipt for request a refund."],
        ["We arrived early to find good seats.", "We arrived early for find good seats.", "We arrived early for to find good seats."]
      ],
      make: ([good, bad, third]) => ({ good, bad, question: "Choose the sentence that expresses purpose correctly.", options: [good, bad, third], explanation: "Purpose is expressed with so that plus a full clause or with a to-infinitive, never with for plus a bare verb." })
    },
    {
      category: "第二条件句", title: "与现在事实相反的假设", summary: "if + 过去式搭配 would + 动词原形谈论不真实的现在。", rule: "if 从句用过去式（be 常用 were），主句用 would，从句不用 would。", level: "B1",
      variants: [
        ["If the quote were fairer, I would renew the policy today.", "If the quote would be fairer, I would renew the policy today.", "If the quote were fairer, I will renew the policy today."],
        ["If I had more free time, I would volunteer every week.", "If I would have more free time, I would volunteer every week.", "If I have more free time, I would volunteer every week."]
      ],
      make: ([good, bad, third]) => ({ good, bad, question: "Choose the correct second conditional sentence.", options: [good, bad, third], explanation: "The unreal present uses a past-tense if-clause and would in the main clause." })
    },
    {
      category: "分词短语", title: "分词的逻辑主语", summary: "分词短语的逻辑主语必须与主句主语一致。", rule: "Having done 表示先完成的动作；过去分词表被动，现在分词表主动。", level: "B2",
      variants: [
        ["Having checked the evidence, the panel revised its decision.", "Having checked the evidence, the decision was revised.", "Checked the evidence, the panel revised its decision."],
        ["Written in plain language, the notice is easy to follow.", "Writing in plain language, the notice is easy to follow.", "To written in plain language, the notice is easy to follow."]
      ],
      make: ([good, bad, third]) => ({ good, bad, question: "Choose the sentence whose participle clause matches its subject.", options: [good, bad, third], explanation: "A participle clause must share its logical subject with the main clause and use the correct active or passive form." })
    },
    {
      category: "wish 与 if only", title: "对现状和过去的遗憾", summary: "wish + 过去式指现在的遗憾；wish/if only + 过去完成时指过去的遗憾。", rule: "wish 后不用一般现在时或 will 表达遗憾。", level: "B2",
      variants: [
        ["I wish the deadline were a week later.", "I wish the deadline is a week later.", "I wish the deadline will be a week later."],
        ["If only we had backed up the files earlier.", "If only we have backed up the files earlier.", "If only we would backed up the files earlier."]
      ],
      make: ([good, bad, third]) => ({ good, bad, question: "Choose the sentence that expresses the regret correctly.", options: [good, bad, third], explanation: "Wish and if only take a past form for present regrets and the past perfect for past regrets." })
    },
    {
      category: "衔接副词", title: "however 与 therefore 的标点", summary: "连接两个独立分句时，however/therefore 前用分号、后用逗号。", rule: "连接副词不能像连词那样只用逗号连接两个句子。", level: "B2",
      variants: [
        ["The cause is unknown; therefore, we will not promise a recovery time.", "The cause is unknown, therefore we will not promise a recovery time.", "The cause is unknown therefore; we will not promise a recovery time."],
        ["The quote is higher; however, I have never made a claim.", "The quote is higher, however I have never made a claim.", "The quote is higher however; I have never made a claim."]
      ],
      make: ([good, bad, third]) => ({ good, bad, question: "Choose the sentence that punctuates the linking adverb correctly.", options: [good, bad, third], explanation: "A conjunctive adverb joining two clauses needs a semicolon before it and a comma after it." })
    }
  ];

  const grammarQuestionContexts = Object.freeze([
    Object.freeze(["practising English before a shift", "opening a basic bank account"]),
    Object.freeze(["storing luggage at the station", "reading a clinic leaflet"]),
    Object.freeze(["checking a bus timetable", "arriving for a scheduled shift"]),
    Object.freeze(["switching from cash to mobile payment", "working with new office equipment"]),
    Object.freeze(["hearing test results at a clinic", "learning that a train had left"]),
    Object.freeze(["keeping a receipt for a refund", "finding seats at an event"]),
    Object.freeze(["reviewing an insurance renewal quote", "planning weekly volunteering"]),
    Object.freeze(["revising a panel decision", "publishing a plain-language notice"]),
    Object.freeze(["hoping to move a deadline", "regretting a missed backup"]),
    Object.freeze(["announcing a service outage", "challenging a renewal price"])
  ]);

  const grammarRows = grammarModels.flatMap((model, modelIndex) => model.variants.map((variant, variantIndex) => {
    const built = model.make(variant);
    const answer = (modelIndex * 2 + variantIndex) % 3;
    const options = built.options.slice(1);
    options.splice(answer, 0, built.options[0]);
    return Object.freeze({
      id: `g340-${String(modelIndex * 2 + variantIndex + 1).padStart(3, "0")}`,
      category: model.category,
      title: model.title,
      summary: model.summary,
      rule: model.rule,
      examples: Object.freeze([
        Object.freeze({ good: true, text: built.good, note: "自然且符合规则" }),
        Object.freeze({ good: false, text: built.bad, note: "注意结构或搭配是否正确" })
      ]),
      quiz: Object.freeze({
        question: `${built.question} Everyday context: ${grammarQuestionContexts[modelIndex][variantIndex]}.`,
        options: Object.freeze(options),
        answer,
        explanation: built.explanation
      }),
      level: model.level
    });
  }));

  const expected = { grammarRows: 20, translationRows: 40, listeningRows: 40, speakingRows: 30, readingRows: 20 };
  Object.entries(expected).forEach(([name, count]) => {
    const value = { grammarRows, translationRows, listeningRows, speakingRows, readingRows }[name];
    if (value.length !== count) throw new Error(`Expected ${count} ${name}, received ${value.length}.`);
  });

  window.ENGLISH_COMPASS_EXPANSION_GRAMMAR_V340 = Object.freeze(grammarRows);
  window.ENGLISH_COMPASS_EXPANSION_TRANSLATIONS_V640 = Object.freeze(translationRows);
  window.ENGLISH_COMPASS_EXPANSION_LISTENING_V640 = Object.freeze(listeningRows);
  window.ENGLISH_COMPASS_SPEAKING_V500 = Object.freeze(speakingRows);
  window.ENGLISH_COMPASS_READING_V260 = Object.freeze(readingRows);
})();

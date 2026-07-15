// English Compass v1.11 self-authored practice expansion: overseas work and communication.
(function () {
  "use strict";

  const situations = [
    ["interview-arrival","A2","求职面试","Mina","a company reception desk","confirm where to wait before an interview","招聘人员让我提前十分钟到。我应该在前台等，还是直接去面试室？","The recruiter asked me to arrive ten minutes early. Should I wait at reception or go directly to the interview room?","我会带一份打印的简历和身份证件。","I will bring a printed copy of my résumé and my identification.","reception:前台;recruiter:招聘人员;identification:身份证明"],
    ["weekend-rota","A2","海外工作","Leo","a supermarket staff room","clarify a changed weekend shift","新版排班表显示我周日上班，但主管昨天说是周六。请问哪一天是正确的？","The new rota shows that I work on Sunday, but my supervisor said Saturday yesterday. Which day is correct?","确认后我会立即更新自己的日历。","I will update my calendar as soon as the shift is confirmed.","rota:排班表;supervisor:主管;confirmed:已确认的"],
    ["heating-viewing","A2","租房入住","Aya","a rental flat viewing","ask how the heating works before renting","看房时暖气是关着的。可以告诉我如何控制暖气以及费用是否包含在房租里吗？","The heating was off during the viewing. Could you show me how to control it and tell me whether the cost is included in the rent?","如果费用另算，我想看看去年的平均账单。","If heating is charged separately, I would like to see last year's average bill.","heating:暖气;included:包含的;charged separately:单独收费"],
    ["resident-registration","A2","公共服务","Noah","a municipal service centre","confirm documents for local registration","我刚搬到这个城市，想办理居民登记。我需要带护照和租房合同吗？","I have just moved to the city and would like to register as a resident. Do I need to bring my passport and tenancy agreement?","如果必须预约，请给我最早的可用时段。","If an appointment is required, please give me the earliest available slot.","register:登记;tenancy agreement:租房合同;available slot:可用时段"],
    ["remote-daily-update","A2","远程协作","Sora","a team chat channel","post a concise asynchronous progress update","我已经完成客户名单，还在等待财务部门确认价格。","I have finished the customer list, and I am still waiting for Finance to confirm the prices.","如果中午前收到价格，我今天就能完成报告。","If I receive the prices before noon, I can finish the report today.","customer list:客户名单;confirm:确认;before noon:中午前"],
    ["name-pronunciation","A2","跨文化沟通","Ben","an international team meeting","ask how to pronounce a colleague's name respectfully","我想确保把你的名字读对。可以请你慢一点再说一遍吗？","I want to make sure I pronounce your name correctly. Could you say it again a little more slowly?","我会把正确读音记在自己的会议笔记里。","I will add the correct pronunciation to my private meeting notes.","pronounce:发音;correctly:正确地;meeting notes:会议笔记"],
    ["customer-recovery-example","B1","面试能力展示","Priya","a customer-service interview","give an evidence-based example of recovering a customer relationship","一位顾客收到错误商品后非常生气。我先道歉，当天安排补发，并在两天后确认问题已经解决。","A customer was upset after receiving the wrong item. I apologised, arranged a replacement that day, and checked two days later that the issue was resolved.","这次处理后，顾客仍然选择续订了服务。","After that response, the customer chose to renew the service.","replacement:补发商品;resolved:已解决的;renew:续订"],
    ["work-permit-checklist","B1","海外求职","Daniel","an employer's mobility team","request a complete work-permit document checklist","为了避免延误签证申请，请确认我和公司分别需要提交哪些材料。","To avoid delaying the visa application, could you confirm which documents I must submit and which documents the company will provide?","我也想知道是否需要认证翻译件。","I would also like to know whether certified translations are required.","visa application:签证申请;submit:提交;certified translation:认证翻译件"],
    ["unresolved-leak","B1","租房维修","Hana","a property management office","escalate an unresolved leak with dated evidence","我一周前报告了厨房漏水，问题仍未解决，橱柜已经开始受潮。","I reported the kitchen leak a week ago, but it has not been repaired and the cabinet is now becoming damp.","我附上了带日期的照片，请在今天确认维修时间。","I have attached dated photographs. Please confirm the repair appointment today.","leak:漏水;damp:受潮的;dated photograph:带日期的照片"],
    ["childcare-evidence","B1","公共服务申请","Mateo","a family support office","correct missing evidence in a childcare-support application","系统显示我没有提交收入证明，但文件已经包含在最初的申请中。","The system says that my proof of income is missing, although it was included with my original application.","我可以重新上传文件，但请先确认这样不会重置申请日期。","I can upload the document again, but please confirm that doing so will not reset the application date.","proof of income:收入证明;original application:最初申请;reset:重置"],
    ["timezone-handoff","B1","远程项目交接","Keiko","a distributed product team","create a reliable handoff across time zones","欧洲团队下班后，亚洲团队需要继续测试，因此每次交接都必须写清版本、已知问题和下一步。","When the European team finishes work, the Asian team needs to continue testing, so every handoff must state the version, known issues, and next action.","我们会使用同一份交接模板，并指定一名负责人回答问题。","We will use one handoff template and name an owner who can answer questions.","handoff:交接;known issue:已知问题;owner:负责人"],
    ["feedback-preference","B1","跨文化反馈","Amir","a one-to-one meeting","adapt feedback to a colleague's communication preference","我希望反馈既清楚又让你容易接受。你更喜欢直接讨论，还是先收到书面要点？","I want the feedback to be clear and useful for you. Would you prefer to discuss it directly or receive the main points in writing first?","无论哪种方式，我们都可以留时间让你提问。","Whichever approach you prefer, we can leave time for your questions.","feedback:反馈;main points:要点;approach:方式"],
    ["accessible-remote-meeting","B1","远程会议","Iris","an online project workshop","arrange accessible participation before a remote workshop","一位参会者需要实时字幕，另一位需要提前阅读材料。我们应该在发邀请时确认这些安排。","One participant needs live captions, and another needs the materials in advance. We should confirm both arrangements when we send the invitation.","主持人还会在开始时说明如何用聊天框发言。","The facilitator will also explain at the start how to contribute through the chat.","live captions:实时字幕;in advance:提前;facilitator:主持人"],
    ["review-action-plan","B1","职业发展","Evan","a performance review","turn broad feedback into a measurable development plan","我的反馈是要提高项目沟通能力，但我想把它转化成具体目标。","My feedback is to improve project communication, but I would like to turn that into a specific goal.","接下来三个月，我会每周写一次进展摘要，并请经理每月评估一次。","For the next three months, I will write a weekly progress summary and ask my manager to review it once a month.","specific goal:具体目标;progress summary:进展摘要;review:评估"],
    ["offer-relocation","B2","待遇协商","Lucia","a final offer call","negotiate relocation support and a realistic start date","我很愿意接受这个职位，但跨国搬迁需要六周，而录用信上的入职日期是四周后。","I am keen to accept the role, but the international move will take six weeks, while the offer sets a start date four weeks from now.","如果公司能承担临时住宿，我可以提前远程入职两周，然后到办公室工作。","If the company can cover temporary accommodation, I can start remotely for two weeks and then join the office.","relocation:搬迁;temporary accommodation:临时住宿;start remotely:远程入职"],
    ["regional-incident","B2","分布式事件响应","Owen","a global service team","coordinate an incident response across regions","这次故障横跨三个时区，当前最重要的是统一事实来源并明确各区域的责任边界。","The incident spans three time zones. Our immediate priority is to establish one source of truth and define the ownership boundary for each region.","下一次交接前，每个负责人都要记录已经采取的措施和仍待验证的假设。","Before the next handoff, each owner must record the actions taken and the assumptions that still need verification.","source of truth:权威信息源;ownership boundary:责任边界;verification:验证"],
    ["structured-interview-panel","B2","公平招聘","Mei","a hiring calibration meeting","make interview scoring consistent and bias-aware","如果面试官根据直觉而不是证据评分，相似背景的候选人可能会被不公平地偏爱。","If interviewers score candidates by intuition rather than evidence, applicants with familiar backgrounds may receive an unfair advantage.","我们将使用相同问题和行为评分标准，并在讨论前独立打分。","We will use the same questions and behavioural criteria, and score independently before the panel discussion.","intuition:直觉;behavioural criteria:行为标准;independently:独立地"],
    ["service-decision-appeal","B2","公共服务申诉","Jonas","an administrative review office","challenge an incorrect service decision with traceable evidence","拒绝信称我错过了截止日期，但在线回执显示材料在截止日前两天已经提交。","The refusal letter says I missed the deadline, but the online receipt shows that my evidence was submitted two days before it.","我请求复审决定，并请经办人员把回执编号加入案件记录。","I am requesting a review of the decision and asking the caseworker to add the receipt number to the case record.","refusal letter:拒绝信;receipt:回执;case record:案件记录"],
    ["communication-conflict","B2","跨文化冲突调解","Fatima","a regional leadership meeting","mediate disagreement about direct and indirect communication","一组同事认为消息太含糊，另一组则认为同一条消息过于强硬；问题是沟通习惯不同，而不是谁不专业。","One group found the message too vague, while another found the same message too forceful. The issue is a difference in communication norms, not a lack of professionalism.","我们会分别说明事实、请求和截止日期，同时允许各地区调整礼貌程度。","We will separate the facts, request, and deadline, while allowing each region to adapt the level of directness.","communication norm:沟通惯例;professionalism:专业性;directness:直接程度"],
    ["reversible-remote-decision","B2","远程决策治理","Riku","a distributed strategy team","document an asynchronous decision with a reversal threshold","我们无法找到所有人都能参加的会议时间，因此决定将通过书面提案异步完成。","We cannot find a meeting time that includes everyone, so the decision will be made asynchronously through a written proposal.","提案必须列出证据、反对意见和撤回决定的触发条件。","The proposal must record the evidence, objections, and the conditions that would trigger a reversal.","asynchronously:异步地;objection:反对意见;reversal:撤回决定"]
  ].map(([slug, level, topic, person, place, purpose, sourceZh, target, followZh, follow, terms]) => Object.freeze({
    slug, level, topic, person, place, purpose, sourceZh, target, followZh, follow,
    vocabulary: Object.freeze(terms.split(";").map((pair) => {
      const splitAt = pair.indexOf(":");
      return Object.freeze({ word: pair.slice(0, splitAt), meaning: pair.slice(splitAt + 1) });
    }))
  }));

  const alternativesBySlug = Object.freeze({
    "interview-arrival": Object.freeze([
      "The recruiter asked me to come ten minutes early. Should I wait at reception or head straight to the interview room?",
      "I'll bring a printed résumé and identification."
    ]),
    "weekend-rota": Object.freeze([
      "The updated rota puts me on Sunday, although my supervisor told me Saturday yesterday. Could you confirm the correct day?",
      "Once the shift is confirmed, I'll update my calendar immediately."
    ]),
    "heating-viewing": Object.freeze([
      "The heating was not on during the viewing. Could you show me the controls and confirm whether heating is covered by the rent?",
      "If heating costs extra, I'd like to see the average bill for last year."
    ]),
    "resident-registration": Object.freeze([
      "I've just moved to the city and want to complete resident registration. Should I bring my passport and tenancy agreement?",
      "If I need an appointment, please offer me the earliest available time."
    ]),
    "remote-daily-update": Object.freeze([
      "The customer list is complete, but I'm still waiting for Finance to confirm the prices.",
      "If the prices arrive before noon, I can complete the report today."
    ]),
    "name-pronunciation": Object.freeze([
      "I'd like to pronounce your name correctly. Could you repeat it a little more slowly?",
      "I'll note the correct pronunciation in my private meeting notes."
    ]),
    "customer-recovery-example": Object.freeze([
      "When a customer received the wrong item and became upset, I apologised, organised a replacement that day, and followed up two days later to confirm the issue was resolved.",
      "Because of that response, the customer decided to renew the service."
    ]),
    "work-permit-checklist": Object.freeze([
      "To prevent delays to the visa application, could you confirm the documents I need to submit and those the company will supply?",
      "Could you also confirm whether certified translations are necessary?"
    ]),
    "unresolved-leak": Object.freeze([
      "I reported the leak in the kitchen a week ago, but it is still unrepaired and the cabinet has started to become damp.",
      "I've attached photographs with dates; please confirm a repair time today."
    ]),
    "childcare-evidence": Object.freeze([
      "The system lists my proof of income as missing, even though I included it in the original application.",
      "I can upload the document again, provided this will not reset the application date."
    ]),
    "timezone-handoff": Object.freeze([
      "Because the Asian team continues testing after the European team signs off, each handoff must include the version, known issues, and next action.",
      "We'll use a single handoff template and identify an owner for questions."
    ]),
    "feedback-preference": Object.freeze([
      "I want my feedback to be both clear and useful. Would you rather discuss it directly or receive the key points in writing beforehand?",
      "Whatever method you choose, we'll make time for your questions."
    ]),
    "accessible-remote-meeting": Object.freeze([
      "One attendee needs live captions and another needs advance access to the materials, so both arrangements should be confirmed in the invitation.",
      "At the beginning, the facilitator will also explain how participants can use the chat."
    ]),
    "review-action-plan": Object.freeze([
      "I was advised to improve my project communication, and I want to turn that broad feedback into a measurable goal.",
      "Over the next three months, I'll produce a weekly progress summary and ask my manager for a monthly review."
    ]),
    "offer-relocation": Object.freeze([
      "I'm eager to accept the role, but relocating internationally will take six weeks, whereas the proposed start date is four weeks away.",
      "If temporary accommodation is covered, I can work remotely for the first two weeks before joining the office."
    ]),
    "regional-incident": Object.freeze([
      "This incident affects three time zones, so we must first establish a single source of truth and clarify ownership in each region.",
      "Each owner must document completed actions and unverified assumptions before the next handoff."
    ]),
    "structured-interview-panel": Object.freeze([
      "Scoring by intuition rather than evidence can unfairly favour candidates whose backgrounds feel familiar to the interviewers.",
      "The panel will ask consistent questions, apply behavioural criteria, and score candidates independently before discussing them."
    ]),
    "service-decision-appeal": Object.freeze([
      "The refusal letter claims that I missed the deadline, yet the online receipt confirms my evidence was submitted two days earlier.",
      "I request a review and ask that the caseworker add the receipt number to the case file."
    ]),
    "communication-conflict": Object.freeze([
      "One group considered the message vague, while another saw it as overly forceful; this reflects different communication norms rather than unprofessional conduct.",
      "We'll state the facts, request, and deadline separately, while letting each region adjust the degree of directness."
    ]),
    "reversible-remote-decision": Object.freeze([
      "Since no meeting time includes everyone, we'll reach the decision asynchronously using a written proposal.",
      "The written proposal must include the evidence, objections, and criteria for reversing the decision."
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
      id: `t600-${String(index * 2 + 1).padStart(3, "0")}`,
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
      id: `t600-${String(index * 2 + 2).padStart(3, "0")}`,
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
      id: `l600-${String(index * 2 + variant + 1).padStart(3, "0")}`,
      level: item.level,
      topic: item.topic,
      text,
      question: variant === 0
        ? `What is ${item.person}'s main purpose?`
        : `Which follow-up action does ${item.person} add?`,
      options: Object.freeze(rotateOptions(related(index, optionKey), answer)),
      answer,
      correctIndex: answer,
      keywords: keywordList(text)
    });
  }));

  const speakingRows = [
    ...situations.map((item, index) => Object.freeze({
      id: `s470-${String(index + 1).padStart(3, "0")}`,
      scenario: item.topic,
      title: item.topic,
      context: `在“${item.topic}”情境中完成一项实际英语沟通任务。`,
      prompt: `Handle this situation in English: ${item.purpose}. Setting: ${item.place}.`,
      target: item.target,
      sample: item.target,
      shortVersion: item.target,
      tip: item.level === "B2" ? "先界定事实与限制，再提出有依据且可执行的方案。" : "先说明关键背景，再清楚提出请求。",
      keywords: keywordList(item.target),
      level: item.level
    })),
    ...situations.slice(0, 10).map((item, index) => Object.freeze({
      id: `s470-${String(index + 21).padStart(3, "0")}`,
      scenario: `${item.topic} · 跟进`,
      title: `${item.topic} · 跟进`,
      context: `继续“${item.topic}”对话，并把下一步说清楚。`,
      prompt: `Continue the conversation and state the required follow-up action. Setting: ${item.place}.`,
      target: item.follow,
      sample: item.follow,
      shortVersion: item.follow,
      tip: "用完整句说明下一步、条件或所需文件。",
      keywords: keywordList(item.follow),
      level: item.level
    }))
  ];

  const readingCopy = (item) => {
    if (item.level === "A2") {
      return {
        passage: `${item.person} needed to ${item.purpose} at ${item.place}. Before speaking, ${item.person} checked the relevant message and wrote down the key detail. ${item.person} said, “${item.target}” The other person listened and answered the practical question. ${item.person} then added, “${item.follow}” By asking one clear question and confirming the next step, ${item.person} avoided confusion and knew what to do after the conversation.`,
        translationZh: `${item.person}需要在${item.place}完成“${item.topic}”任务。沟通前，${item.person}核对了相关信息并记下关键细节。${item.person}说道：“${item.sourceZh}”对方听取情况并回答了实际问题。随后${item.person}补充：“${item.followZh}”通过提出一个清晰问题并确认下一步，${item.person}避免了误解，也知道对话后该做什么。`
      };
    }
    if (item.level === "B1") {
      return {
        passage: `${item.person} was preparing to ${item.purpose} at ${item.place}. The situation involved more than a simple request, so ${item.person} separated the confirmed facts from the desired outcome. In the conversation, ${item.person} explained, “${item.target}” This gave the other person enough context to respond without guessing. ${item.person} then made the next action explicit: “${item.follow}” The participants confirmed who would act and what information would be checked. The written follow-up created a useful record and reduced the chance that the same issue would need to be explained again.`,
        translationZh: `${item.person}正在准备于${item.place}完成“${item.topic}”任务。情况不仅是简单请求，因此${item.person}把已经确认的事实和希望实现的结果分开说明。对话中，${item.person}解释道：“${item.sourceZh}”这为对方提供了足够语境，无需猜测。随后${item.person}明确下一项行动：“${item.followZh}”参与者确认了负责人和需要核对的信息。书面跟进留下了有效记录，也降低了重复解释同一问题的可能。`
      };
    }
    return {
      passage: `${item.person} needed to ${item.purpose} at ${item.place}, where the decision could affect people working across different systems or regions. Rather than treating the issue as a matter of personal preference, ${item.person} identified the evidence, constraints, and parties responsible for the next step. ${item.person} stated, “${item.target}” The group tested the proposal against the available facts and considered whether the process would remain fair and traceable. ${item.person} continued, “${item.follow}” They recorded both the chosen action and the condition that would require further review. The result was not merely agreement: it was a transparent decision with accountable ownership and enough context for colleagues who were not present.`,
      translationZh: `${item.person}需要在${item.place}完成“${item.topic}”任务，而该决定可能影响处于不同系统或地区的人。${item.person}没有把问题当作个人偏好，而是明确证据、限制和下一步负责人。${item.person}说道：“${item.sourceZh}”团队依据现有事实检验方案，并考虑流程是否保持公平且可追踪。${item.person}接着说：“${item.followZh}”大家记录了选定行动和需要再次审查的条件。最终结果不只是达成一致，而是形成了透明、责任明确且能让未参会同事理解的决定。`
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
      id: `reading-v240-${String(index + 1).padStart(3, "0")}`,
      title: `${item.person}'s ${titleFromSlug(item.slug)}`,
      titleZh: item.topic,
      topic: item.topic,
      level: item.level,
      passage: copy.passage,
      translationZh: copy.translationZh,
      vocabulary: item.vocabulary,
      questions: Object.freeze([
        Object.freeze({
          question: `What practical outcome was ${item.person} seeking?`,
          questionZh: `${item.person}希望实现什么实际结果？`,
          options: Object.freeze(purposeOptions),
          optionsZh: Object.freeze(purposeOptions.map((option) => situations.find((candidate) => candidate.purpose === option)?.sourceZh || option)),
          answer: purposeAnswer,
          explanation: `${item.person}'s purpose was to ${item.purpose}.`,
          explanationZh: `${item.person}的目的与“${item.sourceZh}”直接对应。`
        }),
        Object.freeze({
          question: `Which statement did ${item.person} use to explain the situation?`,
          questionZh: `${item.person}用哪句话说明了情况？`,
          options: Object.freeze(messageOptions),
          optionsZh: Object.freeze(messageOptions.map((option) => situations.find((candidate) => candidate.target === option)?.sourceZh || option)),
          answer: messageAnswer,
          explanation: `The passage directly quotes: “${item.target}”`,
          explanationZh: `原文直接引用了：“${item.sourceZh}”`
        }),
        Object.freeze({
          question: `What follow-up action did ${item.person} add?`,
          questionZh: `${item.person}补充了哪项后续行动？`,
          options: Object.freeze(followOptions),
          optionsZh: Object.freeze(followOptions.map((option) => situations.find((candidate) => candidate.follow === option)?.followZh || option)),
          answer: followAnswer,
          explanation: `${item.person} added: “${item.follow}”`,
          explanationZh: `${item.person}补充道：“${item.followZh}”`
        })
      ]),
      summary: `${item.person} combined verified context, a clear request, and a specific next step to ${item.purpose}.`,
      summaryZh: `${item.person}结合已核实的语境、清晰请求和具体下一步完成了沟通任务。`
    });
  });

  const grammarModels = [
    {
      category: "礼貌请求", title: "Could you 与 Would you", summary: "用 could 或 would 提出礼貌而清楚的请求。", rule: "情态动词后接动词原形，不使用 to 或第三人称变化。", level: "A2",
      variants: [["show", "Could you show me where to wait?", "Could you to show me where to wait?"], ["confirm", "Would you confirm the shift by email?", "Would you confirms the shift by email?"]],
      make: ([verb, good, bad]) => ({ good, bad, question: `Choose the polite request that correctly uses “${verb}”.`, options: [good, bad, good.replace(/Could|Would/, "Do")], explanation: "A polite modal is followed by the base form of the verb." })
    },
    {
      category: "现在完成时", title: "过去发生且与现在相关", summary: "have/has + 过去分词说明过去动作带来的当前结果。", rule: "明确的过去时间通常用一般过去时；未结束的时间或当前结果可用现在完成时。", level: "A2",
      variants: [["I have attached the receipt.", "I have attach the receipt."], ["She has updated the rota.", "She has update the rota."]],
      make: ([good, bad]) => ({ good, bad, question: "Which sentence correctly describes a completed action with a present result?", options: [good, bad, good.replace(/has|have/, "is")], explanation: "Use have or has followed by the past participle." })
    },
    {
      category: "条件句", title: "真实可行的第一条件句", summary: "if + 一般现在时搭配 will/can + 动词原形表达可能结果。", rule: "if 从句通常不用 will 来表示条件。", level: "A2",
      variants: [["If the price arrives before noon, I can finish today.", "If the price will arrive before noon, I can finish today."], ["If an appointment is required, I will book one.", "If an appointment will be required, I will book one."]],
      make: ([good, bad]) => ({ good, bad, question: "Choose the natural first conditional sentence.", options: [good, bad, bad.replace("will", "would")], explanation: "Use the present simple in the if-clause for a real future possibility." })
    },
    {
      category: "间接问句", title: "正式场合中的陈述语序", summary: "间接问句在疑问词后使用陈述语序。", rule: "Could you confirm 后不再使用助动词倒装。", level: "B1",
      variants: [["Could you confirm which documents I must submit?", "Could you confirm which documents must I submit?"], ["Do you know when the review will begin?", "Do you know when will the review begin?"]],
      make: ([good, bad]) => ({ good, bad, question: "Choose the correctly ordered indirect question.", options: [good, bad, bad.replace("?", ".")], explanation: "An embedded question uses subject-before-verb statement order." })
    },
    {
      category: "让步关系", title: "although 与 despite", summary: "although 接从句，despite 接名词或 -ing 结构。", rule: "不要在 although 后重复使用 but。", level: "B1",
      variants: [["Although the file was attached, the system marked it as missing.", "Although the file was attached, but the system marked it as missing."], ["Despite the delay, the team completed the handoff.", "Despite the team was delayed, the team completed the handoff."]],
      make: ([good, bad]) => ({ good, bad, question: "Choose the grammatically complete concessive sentence.", options: [good, bad, good.replace(/Although|Despite/, "Because")], explanation: "The concessive linker is followed by the correct structure without a repeated connector." })
    },
    {
      category: "被动语态", title: "突出流程而非执行者", summary: "be + 过去分词可突出文件、流程或结果。", rule: "根据时间选择 be 的形式，再接过去分词。", level: "B1",
      variants: [["The documents will be checked tomorrow.", "The documents will checked tomorrow."], ["The meeting was recorded for absent colleagues.", "The meeting was record for absent colleagues."]],
      make: ([good, bad]) => ({
        good,
        bad,
        question: "Which sentence uses the passive voice correctly?",
        options: [good, bad, good.startsWith("The documents") ? "The documents will be checking tomorrow." : "The meeting has recording for absent colleagues."],
        explanation: "A passive form requires an appropriate form of be plus a past participle."
      })
    },
    {
      category: "关系从句", title: "用关系从句补充必要信息", summary: "who 指人，which/that 指事物。", rule: "选择与先行词匹配的关系代词，并保持从句完整。", level: "B1",
      variants: [["We named an owner who can answer questions.", "We named an owner which can answer questions."], ["This is the receipt that proves the submission date.", "This is the receipt who proves the submission date."]],
      make: ([good, bad]) => ({ good, bad, question: "Choose the sentence with the correct relative pronoun.", options: [good, bad, good.replace(/who|that/, "where")], explanation: "The relative pronoun matches whether the antecedent is a person or thing." })
    },
    {
      category: "过去情态推测", title: "must/might/can't have", summary: "情态动词 + have + 过去分词用于推测过去。", rule: "must have 表示高度确信，might have 表示可能，can't have 表示不可能。", level: "B2",
      variants: [["The panel might have relied on an untested assumption.", "The panel might has relied on an untested assumption."], ["The caseworker can't have seen the receipt yet.", "The caseworker can't has seen the receipt yet."]],
      make: ([good, bad]) => ({ good, bad, question: "Choose the correct modal-perfect deduction.", options: [good, bad, good.replace(" have ", " to have ")], explanation: "Use modal + have + past participle for a deduction about the past." })
    },
    {
      category: "强调倒装", title: "Only after 与 Not until", summary: "否定或限制性短语置于句首时，主句使用助动词倒装。", rule: "前置 only after/not until 后，主句采用助动词 + 主语 + 动词。", level: "B2",
      variants: [["Only after the review did we reverse the decision.", "Only after the review we reversed the decision."], ["Not until the handoff ended did the team discover the gap.", "Not until the handoff ended the team discovered the gap."]],
      make: ([good, bad]) => ({ good, bad, question: "Choose the sentence with correct inversion after a limiting expression.", options: [good, bad, good.replace(/did (we|the team) ([a-z]+)/, "$1 did $2")], explanation: "A fronted limiting expression triggers auxiliary-subject inversion in the main clause." })
    },
    {
      category: "审慎表达", title: "用 appears 与 may 避免过度断言", summary: "证据尚不完整时，使用审慎语言区分事实与推断。", rule: "appears to、may 和 suggests that 可降低不确定结论的绝对程度。", level: "B2",
      variants: [["The evidence suggests that the deadline was met.", "The evidence proves without doubt that the deadline was met."], ["The difference may reflect communication norms.", "The difference definitely reflects poor professionalism."]],
      make: ([good, bad]) => ({ good, bad, question: "Which sentence makes a proportionate claim from incomplete evidence?", options: [good, bad, good.replace(/suggests that|may/, "cannot")], explanation: "The hedged form reports a reasonable inference without claiming more certainty than the evidence supports." })
    }
  ];

  const grammarQuestionContexts = Object.freeze([
    Object.freeze(["waiting at reception", "confirming a shift by email"]),
    Object.freeze(["attaching a receipt", "updating a staff rota"]),
    Object.freeze(["receiving prices before noon", "booking a required appointment"]),
    Object.freeze(["checking a permit document list", "asking when a review begins"]),
    Object.freeze(["a file marked as missing", "a delayed team handoff"]),
    Object.freeze(["a future document check", "meeting access for absent colleagues"]),
    Object.freeze(["a task owner who answers questions", "a receipt used as evidence"]),
    Object.freeze(["an untested interview assumption", "a submission receipt not yet seen"]),
    Object.freeze(["reversing a decision after review", "discovering a gap after handoff"]),
    Object.freeze(["evidence about a deadline", "an inference about communication norms"])
  ]);

  const grammarRows = grammarModels.flatMap((model, modelIndex) => model.variants.map((variant, variantIndex) => {
    const built = model.make(variant);
    const answer = (modelIndex * 2 + variantIndex) % 3;
    const options = built.options.slice(1);
    options.splice(answer, 0, built.options[0]);
    return Object.freeze({
      id: `g320-${String(modelIndex * 2 + variantIndex + 1).padStart(3, "0")}`,
      category: model.category,
      title: model.title,
      summary: model.summary,
      rule: model.rule,
      examples: Object.freeze([
        Object.freeze({ good: true, text: built.good, note: "自然且符合规则" }),
        Object.freeze({ good: false, text: built.bad, note: "注意结构或表达准确度" })
      ]),
      quiz: Object.freeze({
        question: `${built.question} Workplace context: ${grammarQuestionContexts[modelIndex][variantIndex]}.`,
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

  window.ENGLISH_COMPASS_EXPANSION_GRAMMAR_V320 = Object.freeze(grammarRows);
  window.ENGLISH_COMPASS_EXPANSION_TRANSLATIONS_V600 = Object.freeze(translationRows);
  window.ENGLISH_COMPASS_EXPANSION_LISTENING_V600 = Object.freeze(listeningRows);
  window.ENGLISH_COMPASS_SPEAKING_V470 = Object.freeze(speakingRows);
  window.ENGLISH_COMPASS_READING_V240 = Object.freeze(readingRows);
})();

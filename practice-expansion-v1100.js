// English Compass v1.10 self-authored practice expansion.
(function () {
  "use strict";

  const situations = [
    ["library-renewal","A2","公共图书馆","Lily","a public library","renew an expired library card","我的借书证上周到期了，我想今天续办。","My library card expired last week, and I would like to renew it today.","我带了身份证和新的地址证明。","I brought my identification and a recent proof of address.","renew:续办;expired:已到期的;proof of address:地址证明"],
    ["quiet-hotel-room","A2","酒店住宿","Sam","a hotel reception desk","request a quieter hotel room","我的房间正对着电梯，晚上很吵，可以换一间安静些的吗？","My room is opposite the lift, and it is very noisy at night. Could I move to a quieter room?","如果今晚没有房间，我明早也可以换。","If no room is available tonight, I can move tomorrow morning.","opposite:在对面;noisy:吵闹的;available:可用的"],
    ["mobile-data-plan","A2","通信服务","Nina","a mobile phone shop","choose a mobile plan with enough data","我主要用手机看地图和视频，每月二十GB流量够吗？","I mainly use my phone for maps and videos. Would twenty gigabytes of data be enough each month?","请也说明超出流量后如何收费。","Please also explain how I would be charged if I used more data.","mobile plan:手机套餐;gigabyte:吉字节;charged:收费的"],
    ["grocery-substitution","A2","生活购物","Oscar","an online grocery chat","set a preference for grocery substitutions","如果全麦面包缺货，请换成其他全麦面包，不要换成白面包。","If the wholemeal bread is out of stock, please replace it with another wholemeal loaf, not white bread.","如果没有合适替代品，就把这一项退款。","If there is no suitable substitute, please refund that item.","out of stock:缺货;substitute:替代品;refund:退款"],
    ["dentist-reschedule","A2","牙科预约","Mika","a dental clinic","reschedule a dental appointment","我周二下午临时要上班，可以把牙科预约改到周四吗？","I have to work unexpectedly on Tuesday afternoon. Could I move my dental appointment to Thursday?","上午十点以后我都方便。","Any time after ten in the morning would be convenient for me.","reschedule:重新安排;unexpectedly:临时地;convenient:方便的"],
    ["parent-meeting","A2","学校沟通","David","a primary school office","confirm a parent-teacher meeting","我想确认家长会是周三下午四点在二号教室举行。","I would like to confirm that the parent-teacher meeting is at four on Wednesday in classroom two.","我需要带孩子最近的作业吗？","Do I need to bring my child's recent schoolwork?","parent-teacher meeting:家长会;classroom:教室;schoolwork:学校作业"],
    ["pool-membership","A2","运动健身","Emi","a leisure centre","ask about a swimming membership","我每周游泳两次，哪种会员方案最合适？","I swim twice a week. Which membership option would be the most suitable?","会员费包含周末的初级课程吗？","Does the membership fee include the beginner class at weekends?","membership:会员资格;suitable:合适的;beginner class:初级课程"],
    ["pet-boarding","A2","宠物服务","Ryan","a pet boarding centre","book safe care for a cat","我出差三天，想为我的猫预订寄养服务。","I will be away for work for three days, and I would like to book boarding for my cat.","它每天早晚需要各吃一次药。","She needs to take her medicine once in the morning and once in the evening.","boarding:寄养;medicine:药物;once:一次"],
    ["bus-refund","A2","公共交通","Yui","a bus company office","request a refund for a cancelled bus","昨晚的末班公交被取消了，我不得不打车回家。","The last bus was cancelled last night, so I had to take a taxi home.","我想申请车票退款，这是电子票。","I would like to request a ticket refund. Here is my electronic ticket.","cancelled:被取消的;ticket refund:车票退款;electronic ticket:电子票"],
    ["class-waitlist","A2","社区课程","Adam","a community centre","join a waiting list for a full class","周六的摄影课已经满了，可以把我加入候补名单吗？","The Saturday photography class is full. Could you add me to the waiting list?","如果有人取消，请用短信联系我。","Please contact me by text message if someone cancels.","photography class:摄影课;waiting list:候补名单;cancel:取消"],
    ["tax-record-correction","B1","税务事务","Priya","a tax service office","correct an inaccurate employment record","我的税务记录显示我有两份工作，但我三月已经离开了其中一份。","My tax record shows two jobs, but I left one of them in March.","请告诉我需要提交哪份离职证明。","Please tell me which document I should submit as proof that the employment ended.","tax record:税务记录;employment:雇佣关系;submit:提交"],
    ["energy-certificate","B1","租房核验","Jon","a property agency","request an energy performance certificate","签租约前，我想查看这套公寓的能源性能证书。","Before signing the lease, I would like to see the energy performance certificate for the apartment.","我也想知道去年的平均取暖费用。","I would also like to know the average heating cost for last year.","lease:租约;energy performance:能源性能;heating cost:取暖费用"],
    ["internship-portfolio","B1","求职准备","Akari","a career advice session","ask which portfolio samples suit an internship","我正在申请设计实习，作品集中应该放哪三类项目？","I am applying for a design internship. Which three types of project should I include in my portfolio?","我希望每个案例都能说明我的具体贡献。","I want each case study to explain my specific contribution.","internship:实习;portfolio:作品集;contribution:贡献"],
    ["conference-access","B1","会议服务","Martin","a conference help desk","arrange accessibility support at a conference","我听力受损，可以为周五的讲座安排实时字幕吗？","I have a hearing impairment. Could live captions be arranged for Friday's talks?","请告诉我哪些会议室安装了听力环路。","Please tell me which rooms have a hearing loop installed.","hearing impairment:听力受损;live captions:实时字幕;hearing loop:助听环路"],
    ["coworking-invoice","B1","共享办公","Saki","a coworking reception desk","separate business charges on a coworking invoice","这张发票把会议室和私人咖啡费用列在了一起。","This invoice combines the meeting-room charge with my personal café purchases.","可以把工作费用单独开一张发票吗？","Could you issue a separate invoice for the business expenses?","combine:合并;business expense:工作费用;issue a separate invoice:单独开具发票"],
    ["customs-documents","B1","国际物流","Marco","an international shipping office","provide missing customs information","包裹在海关等待补充商品价值和原产地信息。","The parcel is being held at customs because the value and country of origin are missing.","我今天会发送商业发票和完整的商品说明。","I will send the commercial invoice and a full description of the goods today.","customs:海关;country of origin:原产地;commercial invoice:商业发票"],
    ["lab-results","B1","医疗沟通","Clara","a health centre","ask how to receive laboratory results","我上周做了血液检查，想知道结果会通过什么方式通知。","I had a blood test last week, and I would like to know how I will receive the results.","如果需要复诊，请先用短信通知我。","If I need a follow-up appointment, please contact me by text first.","laboratory result:化验结果;blood test:血液检查;follow-up:复诊"],
    ["credit-transfer","B1","大学事务","Taro","a university admissions office","check whether previous study credits can transfer","我在另一所大学修过统计学，这些学分可以转入新课程吗？","I completed a statistics module at another university. Can those credits be transferred to the new programme?","我可以提供课程大纲和正式成绩单。","I can provide the module outline and an official transcript.","credits:学分;module outline:课程大纲;transcript:成绩单"],
    ["volunteer-screening","B1","志愿者管理","Ivy","a youth charity","complete safeguarding checks before volunteering","我下个月开始辅导青少年，需要先完成哪些背景审查？","I will start mentoring young people next month. Which safeguarding checks must I complete first?","培训和身份核验可以在同一天完成吗？","Can the training and identity check be completed on the same day?","mentoring:辅导;safeguarding:安全保护;identity check:身份核验"],
    ["group-booking","B1","餐厅预订","Felix","a restaurant","arrange a group meal with dietary needs","我想为十四个人预订晚餐，其中两位不吃麸质，一位对坚果过敏。","I would like to book dinner for fourteen people. Two guests need gluten-free meals, and one has a nut allergy.","请提前发一份标注过敏原的菜单。","Please send us a menu with the allergens clearly marked in advance.","gluten-free:无麸质的;nut allergy:坚果过敏;allergen:过敏原"],
    ["security-training","B1","网络安全","Zoe","an internal training meeting","explain why security training needs a practical exercise","员工能识别可疑邮件，但很多人仍会重复使用密码。","Staff can recognise suspicious emails, but many people still reuse passwords.","我建议在下次培训中加入密码管理器的实际练习。","I recommend adding a hands-on password-manager exercise to the next training session.","suspicious:可疑的;reuse:重复使用;hands-on:动手实践的"],
    ["hybrid-inclusion","B1","混合会议","Kenta","a project meeting","make a hybrid meeting fair for remote participants","远程参会者很难看清白板，也经常被打断。","Remote participants cannot see the whiteboard clearly and are often interrupted.","我们应该共享数字白板，并指定一人关注线上发言。","We should share a digital whiteboard and assign one person to monitor online contributions.","remote participant:远程参会者;interrupt:打断;contribution:发言"],
    ["ethical-sourcing","B2","供应链审查","Amelia","a supplier review","verify ethical sourcing claims with evidence","供应商说原材料来自负责任渠道，但没有提供独立审计。","The supplier says its materials are responsibly sourced, but it has not provided an independent audit.","在续约前，我们需要查看可追溯记录和整改计划。","Before renewing the contract, we need traceability records and a corrective-action plan.","responsibly sourced:负责任采购的;traceability:可追溯性;corrective-action plan:整改计划"],
    ["coaching-plan","B1","绩效辅导","Ben","a one-to-one meeting","turn vague performance feedback into a coaching plan","只说“沟通需要改善”太笼统，我们需要一个可衡量的目标。","Saying that communication needs improvement is too vague. We need a measurable goal.","接下来四周，我们会每周复盘一次客户邮件。","For the next four weeks, we will review one customer email together each week.","vague:笼统的;measurable:可衡量的;review:复盘"],
    ["accessibility-audit","B2","无障碍审查","Rosa","a product review","prioritise findings from an accessibility audit","审查发现键盘导航、颜色对比和表单标签都有问题。","The audit found problems with keyboard navigation, colour contrast, and form labels.","我们应该先修复会阻止用户完成付款的问题。","We should first fix the issues that prevent users from completing payment.","audit:无障碍审查;colour contrast:颜色对比;prevent:阻止"],
    ["research-consent","B2","研究伦理","Hassan","a university research meeting","rewrite a consent form in plain language","参与者同意书使用了太多技术术语，可能让人误解风险。","The participant consent form uses too much technical language and may obscure the risks.","我们要用通俗语言重写，并明确退出不会受到惩罚。","We need to rewrite it in plain language and make clear that withdrawal carries no penalty.","consent form:同意书;obscure:使难以理解;withdrawal:退出"],
    ["public-consultation","B2","公众咨询","Mina","a council workshop","include underrepresented residents in a consultation","线上调查没有收集到老年居民和非英语母语者的足够意见。","The online survey did not gather enough feedback from older residents or people who speak English as an additional language.","我们可以安排电话访谈，并在社区中心提供翻译支持。","We could arrange telephone interviews and provide interpreting support at community centres.","older residents:老年居民;resident:居民;interpreting support:口译支持"],
    ["continuity-drill","B2","应急演练","Leon","an operations review","improve a business-continuity drill after a failed test","演练中，备用联系电话已经过期，恢复团队也无法访问最新流程。","During the drill, the backup contact list was out of date, and the recovery team could not access the latest procedure.","我们需要离线副本，并每季度验证一次联系人。","We need an offline copy and a quarterly check of every contact.","continuity drill:业务连续性演练;out of date:过期的;quarterly:每季度的"],
    ["insurance-evidence","B1","保险理赔","Naomi","an insurance call","submit evidence for a damaged-luggage claim","航空公司已经确认行李在运输途中受损。","The airline has confirmed that my luggage was damaged in transit.","我会上传照片、维修估价和原始购买凭证。","I will upload photographs, a repair estimate, and the original proof of purchase.","in transit:在运输途中;repair estimate:维修估价;proof of purchase:购买凭证"],
    ["emissions-target","B2","可持续运营","George","a facilities meeting","replace a vague emissions promise with a measurable target","“尽快减少排放”无法衡量，也没有明确负责人。","The promise to reduce emissions as soon as possible cannot be measured and has no clear owner.","我们应该设定年度基准、截止日期和季度报告。","We should set an annual baseline, a deadline, and quarterly reporting.","emissions:排放;baseline:基准;quarterly reporting:季度报告"],
    ["retention-clause","B2","合同与数据","Aya","a contract negotiation","clarify a supplier's data-retention clause","合同没有说明服务结束后客户数据会保留多久。","The contract does not say how long customer data will be retained after the service ends.","我们要求在三十天内删除数据并提供书面证明。","We require the data to be deleted within thirty days and written confirmation to be provided.","customer data:客户数据;retain:保留;written confirmation:书面确认"],
    ["model-transparency","B2","人工智能治理","Isaac","a product governance review","explain an automated recommendation to affected users","系统会推荐求职培训课程，但用户看不到影响推荐的因素。","The system recommends job-training courses, but users cannot see which factors influence the recommendation.","我们需要提供简明解释，并允许用户更正不准确的数据。","We need to provide a plain-language explanation and allow users to correct inaccurate data.","recommendation:自动推荐;influence:影响;inaccurate:不准确的"],
    ["privacy-notification","B2","隐私事件","Sora","an incident response call","prepare a clear notification after a privacy incident","一份包含客户邮箱的文件被错误发送给了外部收件人。","A file containing customer email addresses was mistakenly sent to an external recipient.","通知必须说明发生了什么、我们采取了什么措施以及用户该做什么。","The notice must explain what happened, what action we took, and what users should do next.","customer email addresses:客户邮箱;recipient:收件人;notice:通知"],
    ["cross-cultural-feedback","B2","跨文化协作","Elena","an international team meeting","make direct feedback clear without sounding personal","有些同事认为反馈太委婉，另一些同事觉得公开批评令人难堪。","Some colleagues find the feedback too indirect, while others find public criticism embarrassing.","我们可以私下讨论具体行为，并共同商定下一步。","We can discuss specific behaviour privately and agree on the next step together.","indirect:委婉的;criticism:批评;privately:私下地"],
    ["budget-reforecast","B2","预算管理","Omar","a finance review","reforecast a project budget after a price increase","关键材料涨价百分之十八，原预算已经无法覆盖交付。","The price of a key material has risen by eighteen percent, so the original budget no longer covers delivery.","我们要比较缩小范围、分期采购和增加预算三种方案。","We need to compare reducing the scope, purchasing in phases, and increasing the budget.","original budget:原预算;in phases:分阶段;scope:范围"],
    ["service-capacity","B2","服务运营","Maya","a service planning session","prepare for a predictable seasonal demand peak","去年申请量在九月翻了一倍，平均等待时间增加到十二天。","Applications doubled in September last year, and the average waiting time rose to twelve days.","我们应该提前培训临时人员，并设置每日容量看板。","We should train temporary staff in advance and create a daily capacity dashboard.","seasonal demand increase:季节性需求增长;capacity:处理能力;dashboard:看板"],
    ["accessible-checkout","B2","产品设计","Theo","a design critique","redesign a checkout flow for keyboard users","结账页面会把键盘焦点困在优惠券弹窗里。","The checkout page traps keyboard focus inside the discount-code dialog.","我们必须修复焦点顺序，并让错误提示可被屏幕阅读器读出。","We must fix the focus order and make error messages available to screen readers.","keyboard focus:键盘焦点;dialog:对话框;screen reader:屏幕阅读器"],
    ["remote-burnout","B2","团队健康","Hana","a team health review","respond to signs of burnout in a remote team","团队加班增加，但完成速度下降，很多人也不再在会议上发言。","The team is working more overtime, but delivery is slowing and many people have stopped speaking in meetings.","我们需要重新排序工作、限制晚间消息，并提供一对一支持。","We need to reprioritise the work, limit evening messages, and offer one-to-one support.","burnout:职业倦怠;overtime:加班;reprioritise:重新排序"],
    ["grant-evidence","B2","项目申请","Julian","a grant review","strengthen a grant proposal with outcome evidence","申请书描述了很多活动，却没有说明这些活动会带来什么可衡量的结果。","The application describes many activities but does not explain which measurable outcomes they will produce.","我们会加入基线数据、目标指标和独立评估计划。","We will add baseline data, target measures, and a plan for independent evaluation.","application:资助申请;outcome:结果;independent evaluation:独立评估"],
    ["vendor-exit","B2","供应商管理","Keira","a procurement meeting","create an exit plan before changing a critical vendor","我们依赖当前供应商保存关键记录，但合同没有完整的数据导出条款。","We depend on the current vendor to store critical records, but the contract lacks a complete data-export clause.","切换前，我们要测试导出、确认文件格式并安排回退窗口。","Before switching, we need to test the export, confirm the file formats, and schedule a rollback window.","current vendor:当前供应商;data-export clause:数据导出条款;rollback window:回退窗口"]
  ].map(([slug, level, topic, person, place, goal, sourceZh, target, followZh, follow, terms]) => Object.freeze({
    slug, level, topic, person, place, goal, sourceZh, target, followZh, follow,
    vocabulary: Object.freeze(terms.split(";").map((pair) => {
      const splitAt = pair.indexOf(":");
      return Object.freeze({ word: pair.slice(0, splitAt), meaning: pair.slice(splitAt + 1) });
    }))
  }));

  const primaryPurposeBySlug = Object.freeze({
    "bus-refund": "report that the last bus was cancelled and a taxi was needed",
    "tax-record-correction": "report an inaccurate employment record",
    "coworking-invoice": "explain that business and personal charges were combined",
    "customs-documents": "report which customs details are missing",
    "security-training": "describe a password-reuse risk",
    "hybrid-inclusion": "explain the barriers faced by remote participants",
    "ethical-sourcing": "report that the sourcing claim lacks independent evidence",
    "coaching-plan": "explain why the performance feedback is too vague",
    "accessibility-audit": "summarise the main accessibility problems",
    "research-consent": "explain why the consent form may hide important risks",
    "public-consultation": "report gaps in the consultation responses",
    "continuity-drill": "describe what failed during the continuity drill",
    "insurance-evidence": "report confirmed damage to luggage",
    "emissions-target": "explain why the current emissions promise cannot be measured",
    "retention-clause": "identify a missing data-retention period",
    "model-transparency": "explain that users cannot see what affects the recommendation",
    "privacy-notification": "report that customer email addresses were sent externally by mistake",
    "cross-cultural-feedback": "describe two different reactions to feedback",
    "budget-reforecast": "explain why the original budget no longer covers delivery",
    "service-capacity": "report last year's seasonal demand increase",
    "accessible-checkout": "describe a keyboard-focus problem in the checkout flow",
    "remote-burnout": "describe warning signs of burnout in the remote team",
    "grant-evidence": "explain that the proposal lacks measurable outcomes",
    "vendor-exit": "identify the missing data-export clause before a vendor change"
  });
  const primaryPurpose = (item) => primaryPurposeBySlug[item.slug] || item.goal;

  const stopWords = new Set(["would","could","please","that","this","with","from","when","whether","before","after","about","have","been","into","your","their","they","what","which","there","more","need","should","will"]);
  const keywordList = (text) => text.toLowerCase().replace(/[^a-z\s'-]/g, " ").split(/\s+/).filter((word) => word.length >= 4 && !stopWords.has(word)).slice(0, 5);
  const sentenceParts = (text, language) => {
    const pattern = language === "zh" ? /[^。！？]+[。！？]?/g : /[^.!?]+[.!?]?/g;
    return (text.match(pattern) || [text]).map((part) => part.trim()).filter(Boolean);
  };
  const bilingualChunks = (source, answer) => {
    const sourceParts = sentenceParts(source, "zh");
    const answerParts = sentenceParts(answer, "en");
    if (sourceParts.length === answerParts.length && sourceParts.length > 1) {
      return sourceParts.map((part, index) => Object.freeze([part, answerParts[index]]));
    }
    const sourcePhrases = source.split(/[，。！？]+/).map((part) => part.trim()).filter(Boolean);
    const answerPhrases = answer.split(/,\s+|[.!?]+/).map((part) => part.trim()).filter(Boolean);
    if (sourcePhrases.length === answerPhrases.length && sourcePhrases.length > 1 && sourcePhrases.length <= 4) {
      return sourcePhrases.map((part, index) => Object.freeze([part, answerPhrases[index]]));
    }
    return [Object.freeze([source, answer])];
  };
  const faithfulAlternative = (text) => text
    .replace(/^I would like to\b/, "I'd like to")
    .replace(/^I will\b/, "I'll")
    .replace(/^We will\b/, "We'll")
    .replace(/^We need to\b/, "We have to")
    .replace(/^Could you\b/, "Would you")
    .replace(/\bcannot\b/g, "can't")
    .replace(/\bdo not\b/g, "don't")
    .replace(/\bdoes not\b/g, "doesn't")
    .replace(/\bis not\b/g, "isn't")
    .replace(/\bare not\b/g, "aren't");
  const shortTranslation = (text) => faithfulAlternative(text);
  const translationAlternatives = (text) => {
    const alternative = faithfulAlternative(text);
    const punctuationFree = alternative.replace(/[.!?]+$/, "");
    return [punctuationFree || alternative || text];
  };
  const titleFromSlug = (slug) => slug.split("-").map((part) => `${part.charAt(0).toUpperCase()}${part.slice(1)}`).join(" ");
  const readingCopy = (item) => {
    if (item.level === "A2") {
      return {
        passage: `${item.person} needed to solve a practical problem. The setting was ${item.place}. ${item.person} wanted to ${primaryPurpose(item)}. Before speaking, ${item.person} checked the time, documents, or other useful details. Then ${item.person} said, “${item.target}” The other person listened and confirmed the request. To make the next step clear, ${item.person} added, “${item.follow}” They agreed on what would happen next. ${item.person} saved the important information before leaving. The exchange was short, polite, and easy to follow.`,
        translationZh: `${item.person}在“${item.topic}”场景中遇到一个实际问题。${item.person}先核对时间、文件或其他重要细节，然后说：“${item.sourceZh}”对方听取后确认了请求。为了说明下一步，${item.person}又补充：“${item.followZh}”双方确认了接下来的安排。离开前，${item.person}保存了重要信息。整个交流简短、礼貌而且容易理解。`
      };
    }
    if (item.level === "B1") {
      return {
        passage: `${item.person} was handling a practical communication task. The setting was ${item.place}, where an unclear message could cause delay or extra work. ${item.person} reviewed the available information and identified the main purpose: to ${primaryPurpose(item)}. Rather than giving a vague explanation, ${item.person} said, “${item.target}” The other person checked the details and confirmed that the message was understood. ${item.person} then added, “${item.follow}” They recorded the next action and agreed on how the result would be confirmed. The exchange showed that a clear reason, a specific message, and a practical follow-up make workplace and service English more effective.`,
        translationZh: `${item.person}在“${item.topic}”场景中处理一项实际沟通任务。含糊的请求可能造成延误或额外工作，因此${item.person}先核对现有信息，再明确主要目标。${item.person}没有笼统说明，而是说：“${item.sourceZh}”对方检查细节并确认已经理解请求。随后${item.person}补充：“${item.followZh}”双方记录下一项行动，并约定如何确认结果。这次交流说明，清楚的理由、具体的请求和实际的跟进能让职场与服务英语更有效。`
      };
    }
    return {
      passage: `${item.person} needed to manage a complex communication task with a clear and defensible outcome. The setting was ${item.place}. Before proposing any action, ${item.person} reviewed the available evidence, considered who might be affected, and defined the central purpose: to ${primaryPurpose(item)}. ${item.person} then stated the issue precisely: “${item.target}” The other participants tested the evidence against the relevant constraints and asked how responsibility would be assigned. ${item.person} responded, “${item.follow}” The group documented the decision, the owner of the next action, and the point at which progress would be reviewed. This approach turned a broad concern into a transparent, measurable, and accountable plan.`,
      translationZh: `${item.person}需要在“${item.topic}”场景中完成一项复杂沟通任务，并形成清晰且有依据的结果。提出行动前，${item.person}先审查现有证据、考虑可能受影响的人，并明确核心目标。随后${item.person}准确说明：“${item.sourceZh}”其他参与者结合相关限制检验方案，并询问如何分配责任。${item.person}回应：“${item.followZh}”团队记录了决定、下一项行动的负责人以及复核进展的时间点。这样的做法把宽泛问题转化为透明、可衡量且责任明确的计划。`
    };
  };
  const rotateOptions = (items, answerIndex) => {
    const options = items.slice(1);
    options.splice(answerIndex, 0, items[0]);
    return options;
  };
  const related = (index, key) => [situations[index], situations[(index + 9) % situations.length], situations[(index + 21) % situations.length], situations[(index + 33) % situations.length]].map((item) => key === "purpose" ? primaryPurpose(item) : item[key]);

  const translationRows = situations.flatMap((item, index) => [
    Object.freeze({
      id: `t560-${String(index * 2 + 1).padStart(3, "0")}`,
      context: item.topic,
      tone: item.level === "B2" ? "专业、清晰、有依据" : "礼貌、自然",
      source: item.sourceZh,
      answer: item.target,
      shortAnswer: shortTranslation(item.target),
      alternatives: Object.freeze(translationAlternatives(item.target)),
      chunks: Object.freeze(bilingualChunks(item.sourceZh, item.target)),
      hints: Object.freeze(keywordList(item.target)),
      level: item.level
    }),
    Object.freeze({
      id: `t560-${String(index * 2 + 2).padStart(3, "0")}`,
      context: `${item.topic} · 后续行动`,
      tone: item.level === "B2" ? "明确下一步" : "补充细节",
      source: item.followZh,
      answer: item.follow,
      shortAnswer: shortTranslation(item.follow),
      alternatives: Object.freeze(translationAlternatives(item.follow)),
      chunks: Object.freeze(bilingualChunks(item.followZh, item.follow)),
      hints: Object.freeze(keywordList(item.follow)),
      level: item.level
    })
  ]);

  const listeningRows = situations.flatMap((item, index) => [0, 1].map((variant) => {
    const answer = (index + variant * 2) % 4;
    const text = variant === 0 ? item.target : item.follow;
    const optionKey = variant === 0 ? "purpose" : "follow";
    return Object.freeze({
      id: `l560-${String(index * 2 + variant + 1).padStart(3, "0")}`,
      level: item.level,
      topic: item.topic,
      text,
      question: variant === 0
        ? `What is ${item.person}'s main purpose in this message?`
        : `Which next step does ${item.person} add after the first request?`,
      options: Object.freeze(rotateOptions(related(index, optionKey), answer)),
      answer,
      correctIndex: answer,
      keywords: Object.freeze(keywordList(text))
    });
  }));

  const speakingRows = [
    ...situations.map((item, index) => Object.freeze({
      id: `s440-${String(index + 1).padStart(3, "0")}`,
      scenario: item.topic,
      title: item.topic,
      context: `在“${item.topic}”场景中完成一项实际沟通任务。`,
      prompt: `Handle this situation in English: ${primaryPurpose(item)}. Setting: ${item.place}.`,
      target: item.target,
      sample: item.target,
      shortVersion: item.target,
      tip: "先说明关键背景，再明确提出主要请求。",
      keywords: Object.freeze(keywordList(item.target)),
      level: item.level
    })),
    ...situations.slice(0, 20).map((item, index) => Object.freeze({
      id: `s440-${String(index + 41).padStart(3, "0")}`,
      scenario: `${item.topic} · 跟进`,
      title: `${item.topic} · 跟进`,
      context: `继续“${item.topic}”场景对话，并提出下一项具体要求。`,
      prompt: `Continue the conversation naturally and add the required next step. Setting: ${item.place}.`,
      target: item.follow,
      sample: item.follow,
      shortVersion: item.follow,
      tip: "说清下一步、时间或条件，保持语气自然。",
      keywords: Object.freeze(keywordList(item.follow)),
      level: item.level
    }))
  ];

  const readingRows = situations.map((item, index) => {
    const goalAnswer = index % 4;
    const messageAnswer = (index + 1) % 4;
    const followAnswer = (index + 2) % 4;
    const goalOptions = rotateOptions(related(index, "purpose"), goalAnswer);
    const messageOptions = rotateOptions(related(index, "target"), messageAnswer);
    const followOptions = rotateOptions(related(index, "follow"), followAnswer);
    const copy = readingCopy(item);
    const passage = copy.passage;
    const translationZh = copy.translationZh;
    return Object.freeze({
      id: `reading-v220-${String(index + 1).padStart(3, "0")}`,
      title: `${item.person}'s ${titleFromSlug(item.slug)}`,
      titleZh: `${item.topic}：${item.sourceZh.replace(/[。？]/g, "")}`,
      topic: item.topic,
      level: item.level,
      passage,
      translationZh,
      vocabulary: item.vocabulary,
      art: Object.freeze({
        passage: "assets/key-primadoll-otome-office.png",
        question: "assets/key-primadoll-gekka-kitchen.png",
        translation: "assets/key-primadoll-otome-office.png",
        scene: index % 2 === 0 ? "assets/minchi-restaurant-evening.jpg" : "assets/minchi-classroom-evening.jpg"
      }),
      questions: Object.freeze([
        Object.freeze({
          question: `What was ${item.person}'s main goal?`,
          questionZh: `${item.person}的主要目标是什么？`,
          options: Object.freeze(goalOptions),
          optionsZh: Object.freeze(goalOptions.map((option) => situations.find((candidate) => primaryPurpose(candidate) === option)?.sourceZh || option)),
          answer: goalAnswer,
          explanation: `${item.person}'s practical goal was to ${primaryPurpose(item)}.`,
          explanationZh: `${item.person}的实际目标是：${item.sourceZh}`
        }),
        Object.freeze({
          question: `Which message did ${item.person} use to explain the situation?`,
          questionZh: `${item.person}用哪条消息说明情况？`,
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
      summary: `${item.person} used evidence, a precise message, and a confirmed next step to ${primaryPurpose(item)}.`,
      summaryZh: `${item.person}通过依据、准确请求和确认后的下一步完成了${item.topic}任务。`
    });
  });

  const grammarModels = [
    {
      category: "some 与 any", title: "肯定句和一般疑问句中的 some/any", summary: "some 常用于肯定句，any 常用于否定句和一般疑问句。", rule: "根据句型选择 some 或 any；主动提供或请求时也可用 some。", level: "A2",
      variants: [["information","any","Do you have any information about the course?"],["available rooms","any","There aren't any available rooms tonight."],["fresh bread","some","We bought some fresh bread this morning."],["questions","any","Please ask if you have any questions."]],
      make: ([noun, answer, good]) => {
        const wrongAnswer = answer === "some" ? "any" : noun === "information" ? "an" : "much";
        return { good, bad: good.replace(new RegExp(`\\b${answer}\\b`), wrongAnswer), question: `${answer === "any" ? "Use the standard neutral question or negative form." : "The sentence is affirmative."} Choose the determiner for “${noun}”: ${good.replace(new RegExp(`\\b${answer}\\b`), "___")}`, options: [answer, answer === "some" ? "any" : "some", "a"], answer: 0, explanation: `“${answer}” fits the stated sentence type and meaning.` };
      }
    },
    {
      category: "可数与不可数", title: "many/much/a few/a little", summary: "many 和 a few 修饰可数名词，much 和 a little 修饰不可数名词。", rule: "先判断名词能否直接计数，再选择数量词。", level: "A2",
      variants: [["appointments","a few","I have a few appointments this week."],["time","a little","We still have a little time."],["documents","many","How many documents are required?"],["information","much","We don't have much information yet."]],
      make: ([noun, quantifier, good]) => ({ good, bad: good.replace(quantifier, quantifier.includes("few") || quantifier === "many" ? "much" : "many"), question: `Which phrase correctly describes the amount of “${noun}”?`, options: [quantifier, quantifier.includes("few") || quantifier === "many" ? "much" : "many", "an"], answer: 0, explanation: `${noun} requires “${quantifier}” in this context.` })
    },
    {
      category: "比较级", title: "用比较级比较两个选项", summary: "短形容词通常加 -er，较长形容词通常用 more。", rule: "比较两者时使用比较级并常接 than。", level: "A2",
      variants: [["quiet","quieter","This room is quieter than the first one."],["cheap","cheaper","The monthly pass is cheaper than single tickets."],["reliable","more reliable","The wired connection is more reliable than Wi-Fi."],["convenient","more convenient","Thursday is more convenient than Tuesday."]],
      make: ([base, comparative, good]) => ({ good, bad: good.replace(comparative, `more ${comparative}`), question: `Choose the correct comparative form of “${base}”.`, options: [comparative, `more ${comparative}`, `${base}er more`], answer: 0, explanation: `The correct comparative form is “${comparative}”.` })
    },
    {
      category: "目的不定式", title: "用 to + 动词说明目的", summary: "to + 动词原形可以说明做某事的目的。", rule: "目的不定式不使用 for + 动词原形。", level: "A2",
      variants: [["I called the clinic","confirm my appointment"],["She opened the map","check the walking route"],["We saved the receipt","request a refund"],["He joined the class","practise his pronunciation"]],
      make: ([lead, purpose]) => ({ good: `${lead} to ${purpose}.`, bad: `${lead} for ${purpose}.`, question: `${lead} ___ ${purpose}.`, options: ["to", "for", "at"], answer: 0, explanation: "Use to + base verb to express purpose." })
    },
    {
      category: "现在完成进行时", title: "强调持续到现在的活动", summary: "have/has been + -ing 强调从过去开始并持续到现在的活动。", rule: "常与 for 或 since 搭配，关注过程或持续时间。", level: "B1",
      variants: [["I","wait","for thirty minutes","waiting"],["The team","test","since Monday","testing"],["She","study","for two years","studying"],["We","review","all morning","reviewing"]],
      make: ([subject, base, time, ing]) => {
        const auxiliary = ["I", "We", "You", "They"].includes(subject) ? "have" : "has";
        return { good: `${subject} ${auxiliary} been ${ing} ${time}.`, bad: `${subject} ${auxiliary} ${base} ${time}.`, question: `The activity is still continuing: ${subject} ___ ${time}.`, options: [`${auxiliary} been ${ing}`, `${auxiliary} ${base}`, `is ${base}`], answer: 0, explanation: "Use have/has been + -ing for an activity continuing until now." };
      }
    },
    {
      category: "间接问句", title: "间接问句使用陈述语序", summary: "Could you tell me 后面的问句使用主语在前的陈述语序。", rule: "间接问句中不再进行助动词倒装。", level: "B1",
      variants: [["where the meeting room is","where is the meeting room"],["when the course starts","when does the course start"],["how much the repair costs","how much does the repair cost"],["whether the fee includes tax","does the fee include tax"]],
      make: ([natural, directOrder]) => ({ good: `Could you tell me ${natural}?`, bad: `Could you tell me ${directOrder}?`, question: `Choose the natural indirect question about “${natural}”.`, options: [`Could you tell me ${natural}?`, `Could you tell me ${directOrder}?`, `Could you tell me that ${directOrder}?`], answer: 0, explanation: "An indirect question uses statement word order after the question phrase." })
    },
    {
      category: "转述语言", title: "转述过去的话语", summary: "转述过去的话时，时态和指示词通常后移。", rule: "根据转述时间调整动词、代词和时间表达。", level: "B1",
      variants: [["I am busy today","She said that she was busy that day"],["We will send it tomorrow","They said that they would send it the next day"],["I have finished the report","He said that he had finished the report"],["I can join the call","Mia said that she could join the call"]],
      make: ([direct, reported]) => ({ good: `${reported}.`, bad: `${reported.replace(/\b(was|were|would|had|could)\b/, "is")}.`, question: `Report this earlier statement: “${direct}.”`, options: [reported, reported.replace(/\b(was|were|would|had|could)\b/, "is"), `They say ${direct}`], answer: 0, explanation: "The reported version correctly shifts the tense and reference words." })
    },
    {
      category: "过去情态推测", title: "must/might/can't have + 过去分词", summary: "用情态动词完成式推测过去发生的事情。", rule: "must have 表示把握较高，might have 表示可能，can't have 表示不可能。", level: "B2",
      variants: [["must have missed","The parcel is still here, so the courier must have missed the collection."],["might have misunderstood","Her reply addresses a different issue, so she might have misunderstood the request."],["can't have approved","The signature is missing, so the manager can't have approved the form."],["must have changed","Every saved date is different, so the schedule must have changed."]],
      make: ([phrase, good]) => ({ good, bad: good.replace(phrase, phrase.replace(" have ", " to have ")), question: `Which modal-perfect phrase completes this evidence-based deduction? ${good.replace(phrase, "___")}`, options: [phrase, phrase.replace(" have ", " to have "), phrase.replace(" have ", " has ")], answer: 0, explanation: "Use modal + have + past participle to make a deduction about the past." })
    },
    {
      category: "让步从句", title: "although/even though/despite", summary: "although 和 even though 接完整从句，despite 接名词或 -ing。", rule: "不要在 although 后再加 but，也不要在 despite 后直接接完整谓语。", level: "B2",
      variants: [["Although the budget is limited, we can run a smaller pilot.","Although the budget is limited, but we can run a smaller pilot."],["Even though the test passed, we will monitor the service.","Even though the test passed, but we will monitor the service."],["Despite the delay, the team completed the safety checks.","Despite the project was delayed, the team completed the safety checks."],["Despite working remotely, she stayed closely involved.","Despite she worked remotely, she stayed closely involved."]],
      make: ([good, bad]) => ({ good, bad, question: `Choose the grammatically complete concessive sentence for this context: “${good.split(",")[0]} …”`, options: [good, bad, bad.replace(/Although|Despite|Even though/, "Because of that")], answer: 0, explanation: "The chosen linker is followed by the correct grammatical structure." })
    },
    {
      category: "分词从句", title: "用分词从句压缩背景信息", summary: "主句与分词从句主语相同时，可用 -ing 或过去分词压缩表达。", rule: "确保分词短语的逻辑主语与主句主语一致。", level: "B2",
      variants: [["After reviewing the evidence","we revised the estimate"],["Having completed the audit","the team published its findings"],["Concerned about the delay","the client requested weekly updates"],["Designed for keyboard users","the form works without a mouse"]],
      make: ([lead, result]) => ({ good: `${lead}, ${result}.`, bad: `${lead}, the weather changed.`, question: `Choose the sentence in which “${lead}” clearly describes the main-clause subject.`, options: [`${lead}, ${result}.`, `${lead}, the weather changed.`, `${lead}, there was a report.`], answer: 0, explanation: "The subject of the main clause is also the logical subject of the participle phrase." })
    }
  ];

  const grammarRows = grammarModels.flatMap((model, modelIndex) => model.variants.map((variant, variantIndex) => {
    const built = model.make(variant);
    const answer = (modelIndex * 4 + variantIndex) % 3;
    const options = built.options.slice(1);
    options.splice(answer, 0, built.options[0]);
    return Object.freeze({
      id: `g300-${String(modelIndex * 4 + variantIndex + 1).padStart(3, "0")}`,
      category: model.category,
      title: model.title,
      summary: model.summary,
      rule: model.rule,
      examples: Object.freeze([
        Object.freeze({ good: true, text: built.good, note: "自然表达" }),
        Object.freeze({ good: false, text: built.bad, note: "注意结构" })
      ]),
      quiz: Object.freeze({ question: built.question, options: Object.freeze(options), answer, explanation: built.explanation }),
      level: model.level
    });
  }));

  const expected = { grammarRows: 40, translationRows: 80, listeningRows: 80, speakingRows: 60, readingRows: 40 };
  Object.entries(expected).forEach(([name, count]) => {
    const value = { grammarRows, translationRows, listeningRows, speakingRows, readingRows }[name];
    if (value.length !== count) throw new Error(`Expected ${count} ${name}, received ${value.length}.`);
  });

  window.ENGLISH_COMPASS_EXPANSION_GRAMMAR_V300 = Object.freeze(grammarRows);
  window.ENGLISH_COMPASS_EXPANSION_TRANSLATIONS_V560 = Object.freeze(translationRows);
  window.ENGLISH_COMPASS_EXPANSION_LISTENING_V560 = Object.freeze(listeningRows);
  window.ENGLISH_COMPASS_SPEAKING_V440 = Object.freeze(speakingRows);
  window.ENGLISH_COMPASS_READING_V220 = Object.freeze(readingRows);
})();

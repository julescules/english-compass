(function () {
  "use strict";

  const translationItem = (
    id,
    context,
    tone,
    source,
    answer,
    shortAnswer,
    alternatives,
    chunks,
    hints,
    level
  ) => ({
    id,
    context,
    tone,
    source,
    answer,
    shortAnswer,
    alternatives,
    chunks,
    hints,
    level
  });

  window.ENGLISH_COMPASS_EXPANSION_TRANSLATIONS_V180 = Object.freeze([
    translationItem(
      "exp180-translation-loyalty-card",
      "海外购物",
      "自然",
      "我还没有会员卡，可以在结账时免费申请一张吗？",
      "I do not have a loyalty card yet. Can I sign up for one for free at the checkout?",
      "Can I get a free loyalty card at the checkout?",
      ["I have not joined the loyalty programme yet. Could I register for free when I pay?"],
      [
        ["我还没有会员卡", "I do not have a loyalty card yet"],
        ["可以免费申请一张吗", "Can I sign up for one for free"],
        ["在结账时", "at the checkout"]
      ],
      ["loyalty card", "sign up for one", "at the checkout"],
      "A2"
    ),
    translationItem(
      "exp180-translation-restaurant-gluten",
      "海外用餐",
      "清楚而礼貌",
      "我不能吃麸质，请问这个酱汁是用面粉勾芡的吗？",
      "I cannot eat gluten. Is this sauce thickened with flour?",
      "I cannot have gluten. Does this sauce contain flour?",
      ["I need to avoid gluten. Could you tell me whether flour is used to thicken this sauce?"],
      [
        ["我不能吃麸质", "I cannot eat gluten"],
        ["请问这个酱汁", "Is this sauce"],
        ["是用面粉勾芡的吗", "thickened with flour"]
      ],
      ["cannot eat gluten", "sauce", "thickened with flour"],
      "A2"
    ),
    translationItem(
      "exp180-translation-hotel-late-checkin",
      "海外住宿",
      "礼貌",
      "我的航班晚上十一点才到，请帮我保留房间并安排延迟入住。",
      "My flight does not arrive until 11 p.m. Please hold my room and arrange a late check-in.",
      "I will arrive after 11 p.m. Please keep my room for a late check-in.",
      ["My flight lands at 11 p.m. Could you please keep the reservation and note that I will check in late?"],
      [
        ["我的航班晚上十一点才到", "My flight does not arrive until 11 p.m."],
        ["请帮我保留房间", "Please hold my room"],
        ["并安排延迟入住", "and arrange a late check-in"]
      ],
      ["does not arrive until", "hold my room", "late check-in"],
      "A2"
    ),
    translationItem(
      "exp180-translation-airport-seat-change",
      "机场出行",
      "礼貌",
      "如果还有空位，我可以换到靠过道的座位吗？",
      "If there are any seats available, could I move to an aisle seat?",
      "Could I change to an aisle seat if one is available?",
      ["Would it be possible to move me to an aisle seat if there is one free?"],
      [
        ["如果还有空位", "If there are any seats available"],
        ["我可以换到吗", "could I move to"],
        ["靠过道的座位", "an aisle seat"]
      ],
      ["seats available", "move to", "aisle seat"],
      "A2"
    ),
    translationItem(
      "exp180-translation-monthly-pass",
      "公共交通",
      "自然",
      "我每天乘地铁上班，月票会比单独买票便宜吗？",
      "I take the subway to work every day. Would a monthly pass be cheaper than buying individual tickets?",
      "Is a monthly pass cheaper if I travel every day?",
      ["I commute by subway every day. Would it cost less to buy a monthly pass?"],
      [
        ["我每天乘地铁上班", "I take the subway to work every day"],
        ["月票会更便宜吗", "Would a monthly pass be cheaper"],
        ["比单独买票", "than buying individual tickets"]
      ],
      ["take the subway to work", "monthly pass", "individual tickets"],
      "A2"
    ),
    translationItem(
      "exp180-translation-cash-withdrawal-fee",
      "海外银行",
      "礼貌",
      "请问用这台自动取款机取现金会收手续费吗？",
      "Will I be charged a fee for withdrawing cash from this ATM?",
      "Is there a fee for using this ATM?",
      ["Could you tell me whether this ATM charges a cash withdrawal fee?"],
      [
        ["请问会收手续费吗", "Will I be charged a fee"],
        ["取现金", "for withdrawing cash"],
        ["用这台自动取款机", "from this ATM"]
      ],
      ["be charged a fee", "withdrawing cash", "ATM"],
      "A2"
    ),
    translationItem(
      "exp180-translation-doctor-symptoms",
      "海外就医",
      "清楚",
      "我咳嗽了四天，昨晚开始喉咙也很痛。",
      "I have had a cough for four days, and my throat started hurting last night.",
      "I have been coughing for four days, and I got a sore throat last night.",
      ["I have had a cough for four days, and I developed a sore throat last night."],
      [
        ["我咳嗽了四天", "I have had a cough for four days"],
        ["喉咙也开始很痛", "my throat also started hurting"],
        ["昨晚", "last night"]
      ],
      ["have had a cough", "for four days", "my throat started hurting"],
      "A2"
    ),
    translationItem(
      "exp180-translation-prescription-refill",
      "海外药房",
      "礼貌",
      "我的药快吃完了，这张处方还能再配一次药吗？",
      "I am almost out of my medicine. Can I get one more refill with this prescription?",
      "Can this prescription be refilled one more time?",
      ["I am running low on this medication. Is there one refill left on the prescription?"],
      [
        ["我的药快吃完了", "I am almost out of my medicine"],
        ["还能再配一次药吗", "Can I get one more refill"],
        ["用这张处方", "with this prescription"]
      ],
      ["almost out of", "one more refill", "prescription"],
      "A2"
    ),
    translationItem(
      "exp180-translation-neighbor-parcel",
      "邻里沟通",
      "友好",
      "快递员把我的包裹放在您家了，我下班后过来取方便吗？",
      "The courier left my parcel with you. Would it be convenient if I picked it up after work?",
      "Could I collect my parcel from you after work?",
      ["My parcel was delivered to your address. Would it be all right for me to pick it up after work?"],
      [
        ["快递员把我的包裹放在您家了", "The courier left my parcel with you"],
        ["方便吗", "Would it be convenient"],
        ["我下班后过来取", "if I picked it up after work"]
      ],
      ["left my parcel with you", "pick it up", "after work"],
      "A2"
    ),
    translationItem(
      "exp180-translation-meter-reading",
      "海外居住",
      "礼貌",
      "我在哪里可以找到电表？物业要求我今天提交读数。",
      "Where can I find the electricity meter? The property manager asked me to submit the reading today.",
      "Where is the electricity meter? I need to send today's reading.",
      ["Could you show me where the electricity meter is? I need to report the reading today."],
      [
        ["我在哪里可以找到电表", "Where can I find the electricity meter"],
        ["物业要求我", "The property manager asked me"],
        ["今天提交读数", "to submit the reading today"]
      ],
      ["electricity meter", "property manager", "submit the reading"],
      "A2"
    ),
    translationItem(
      "exp180-translation-recycling-day",
      "社区生活",
      "自然",
      "这个街区星期几收可回收垃圾？纸箱需要先压平吗？",
      "What day is recycling collected in this neighbourhood? Do cardboard boxes need to be flattened first?",
      "When is recycling day, and should I flatten the boxes?",
      ["Which day do they collect recycling here, and do I need to flatten cardboard boxes?"],
      [
        ["这个街区星期几收可回收垃圾", "What day is recycling collected in this neighbourhood"],
        ["纸箱需要吗", "Do cardboard boxes need"],
        ["先压平", "to be flattened first"]
      ],
      ["recycling is collected", "cardboard boxes", "be flattened"],
      "A2"
    ),
    translationItem(
      "exp180-translation-sim-activation",
      "通信服务",
      "礼貌",
      "我昨天买了这张电话卡，但手机仍然显示没有网络。",
      "I bought this SIM card yesterday, but my phone still shows that there is no network connection.",
      "I bought this SIM yesterday, but it still has no service.",
      ["I purchased this SIM card yesterday, but my phone is still showing no service."],
      [
        ["我昨天买了这张电话卡", "I bought this SIM card yesterday"],
        ["但手机仍然显示", "but my phone still shows"],
        ["没有网络", "that there is no network connection"]
      ],
      ["SIM card", "still shows", "no network connection"],
      "A2"
    ),
    translationItem(
      "exp180-translation-gym-freeze",
      "日常服务",
      "礼貌",
      "我要出差六周，可以暂时冻结健身房会员资格吗？",
      "I will be away on a business trip for six weeks. Can I freeze my gym membership temporarily?",
      "Can I pause my gym membership for six weeks?",
      ["I am travelling for work for six weeks. Would it be possible to put my gym membership on hold?"],
      [
        ["我要出差六周", "I will be away on a business trip for six weeks"],
        ["可以冻结吗", "Can I freeze"],
        ["暂时冻结健身房会员资格", "my gym membership temporarily"]
      ],
      ["business trip", "freeze my membership", "temporarily"],
      "A2"
    ),
    translationItem(
      "exp180-translation-library-computer",
      "公共服务",
      "礼貌",
      "我需要用电脑打印文件，请问可以预约半小时吗？",
      "I need to use a computer to print a document. Can I book one for half an hour?",
      "Can I reserve a computer for thirty minutes?",
      ["Could I book a library computer for thirty minutes so that I can print a document?"],
      [
        ["我需要用电脑", "I need to use a computer"],
        ["打印文件", "to print a document"],
        ["可以预约半小时吗", "Can I book one for half an hour"]
      ],
      ["use a computer", "print a document", "book one"],
      "A2"
    ),
    translationItem(
      "exp180-translation-lost-keys",
      "失物招领",
      "清楚",
      "我可能把一串钥匙落在更衣室了，上面有一个红色钥匙扣。",
      "I may have left a set of keys in the changing room. They have a red key ring on them.",
      "I lost some keys in the changing room with a red key ring.",
      ["I think I left my keys in the changing room. You can identify them by the red key ring."],
      [
        ["我可能落下了", "I may have left"],
        ["一串钥匙在更衣室", "a set of keys in the changing room"],
        ["上面有一个红色钥匙扣", "They have a red key ring on them"]
      ],
      ["may have left", "a set of keys", "red key ring"],
      "A2"
    ),
    translationItem(
      "exp180-translation-language-class",
      "海外学习",
      "礼貌",
      "我想报名晚间英语课，请问还需要参加分级测试吗？",
      "I would like to enrol in the evening English class. Do I still need to take a placement test?",
      "I want to join the evening class. Do I need a placement test?",
      ["I would like to register for an evening English course. Is a placement test required?"],
      [
        ["我想报名", "I would like to enrol in"],
        ["晚间英语课", "the evening English class"],
        ["还需要参加分级测试吗", "Do I still need to take a placement test"]
      ],
      ["enrol in", "evening English class", "placement test"],
      "A2"
    ),
    translationItem(
      "exp180-translation-weather-commute",
      "通勤沟通",
      "自然",
      "今天路面结冰，我可能会比平时晚到十分钟。",
      "The roads are icy today, so I may arrive ten minutes later than usual.",
      "The roads are icy, so I might be ten minutes late.",
      ["Because of the icy roads, I may get to work about ten minutes later than usual."],
      [
        ["今天路面结冰", "The roads are icy today"],
        ["我可能会晚到十分钟", "I may arrive ten minutes later"],
        ["比平时", "than usual"]
      ],
      ["roads are icy", "may arrive", "later than usual"],
      "A2"
    ),
    translationItem(
      "exp180-translation-heating-repair",
      "海外租房",
      "礼貌而明确",
      "卧室的暖气打不开，今晚能安排人来检查吗？",
      "The heating in the bedroom will not turn on. Could someone come and check it tonight?",
      "The bedroom heating is not working. Can someone check it tonight?",
      ["I cannot get the bedroom heater to turn on. Would it be possible to send someone this evening?"],
      [
        ["卧室的暖气", "The heating in the bedroom"],
        ["打不开", "will not turn on"],
        ["今晚能安排人来检查吗", "Could someone come and check it tonight"]
      ],
      ["heating", "will not turn on", "come and check it"],
      "A2"
    ),
    translationItem(
      "exp180-translation-mail-forwarding",
      "邮政服务",
      "礼貌",
      "我下个月搬家，想把邮件转寄到新地址三个月。",
      "I am moving next month and would like my mail forwarded to my new address for three months.",
      "I need mail forwarding to my new address for three months.",
      ["I will move next month. Could you forward my mail to the new address for three months?"],
      [
        ["我下个月搬家", "I am moving next month"],
        ["想把邮件转寄到新地址", "and would like my mail forwarded to my new address"],
        ["三个月", "for three months"]
      ],
      ["am moving", "mail forwarded", "new address"],
      "A2"
    ),
    translationItem(
      "exp180-translation-grocery-receipt",
      "海外购物",
      "礼貌",
      "这张小票上多算了一瓶牛奶，可以帮我更正吗？",
      "I was charged for an extra bottle of milk on this receipt. Could you correct it for me?",
      "This receipt includes an extra bottle of milk. Could you fix it?",
      ["There is an extra bottle of milk on my receipt. Could you please remove the charge?"],
      [
        ["多算了一瓶牛奶", "I was charged for an extra bottle of milk"],
        ["这张小票上", "on this receipt"],
        ["可以帮我更正吗", "Could you correct it for me"]
      ],
      ["was charged for", "on this receipt", "correct it"],
      "A2"
    ),
    translationItem(
      "exp180-translation-interview-dress-code",
      "求职面试",
      "礼貌",
      "请问面试需要穿正式西装，还是商务休闲装就可以？",
      "Should I wear a formal suit to the interview, or is business casual acceptable?",
      "Is the interview dress code formal or business casual?",
      ["Could you let me know whether I need to wear a suit or whether business casual is fine?"],
      [
        ["请问面试需要穿正式西装吗", "Should I wear a formal suit to the interview"],
        ["还是", "or"],
        ["商务休闲装就可以", "is business casual acceptable"]
      ],
      ["formal suit", "to the interview", "business casual"],
      "A2"
    ),
    translationItem(
      "exp180-translation-bring-portfolio",
      "求职面试",
      "礼貌",
      "我需要带作品集原件，还是发送电子版就可以？",
      "Do I need to bring a physical copy of my portfolio, or is a digital version enough?",
      "Should I bring my portfolio or send it digitally?",
      ["Would you prefer me to bring a printed portfolio, or may I send an electronic copy?"],
      [
        ["我需要带吗", "Do I need to bring"],
        ["作品集原件", "a physical copy of my portfolio"],
        ["还是发送电子版就可以", "or is a digital version enough"]
      ],
      ["physical copy", "portfolio", "digital version"],
      "A2"
    ),
    translationItem(
      "exp180-translation-reschedule-interview",
      "求职面试",
      "诚恳而礼貌",
      "很抱歉，我那天有一个无法更改的医疗预约，可以把面试改到周四吗？",
      "I am sorry, but I have a medical appointment that I cannot change that day. Could we move the interview to Thursday?",
      "I have an important appointment. Could we reschedule the interview for Thursday?",
      ["Unfortunately, I have an unavoidable medical appointment. Would Thursday be possible for the interview instead?"],
      [
        ["很抱歉", "I am sorry"],
        ["我那天有一个无法更改的医疗预约", "I have a medical appointment that I cannot change that day"],
        ["可以把面试改到周四吗", "Could we move the interview to Thursday"]
      ],
      ["medical appointment", "cannot change", "move the interview"],
      "A2"
    ),
    translationItem(
      "exp180-translation-reference-permission",
      "求职申请",
      "礼貌",
      "我正在申请新工作，可以把您列为我的推荐人吗？",
      "I am applying for a new job. May I list you as one of my references?",
      "May I use you as a reference for a job application?",
      ["I am currently applying for a position. Would you be comfortable acting as a reference for me?"],
      [
        ["我正在申请新工作", "I am applying for a new job"],
        ["可以把您列为吗", "May I list you as"],
        ["我的推荐人", "one of my references"]
      ],
      ["applying for", "list you as", "one of my references"],
      "A2"
    ),
    translationItem(
      "exp180-translation-first-day-reception",
      "入职沟通",
      "清楚",
      "我星期一九点到公司后，应该先去前台找谁？",
      "When I arrive at the office at nine on Monday, who should I ask for at reception?",
      "Who should I meet at reception on Monday morning?",
      ["Could you tell me who I should ask for at reception when I arrive on Monday at nine?"],
      [
        ["我星期一九点到公司后", "When I arrive at the office at nine on Monday"],
        ["应该先找谁", "who should I ask for"],
        ["在前台", "at reception"]
      ],
      ["arrive at the office", "ask for", "at reception"],
      "A2"
    ),
    translationItem(
      "exp180-translation-shift-swap",
      "排班沟通",
      "友好而礼貌",
      "你能和我换星期六的班吗？我可以替你上星期一的班。",
      "Could you swap Saturday's shift with me? I can cover your Monday shift in return.",
      "Can we swap shifts? I can work Monday for you.",
      ["Would you be able to take my Saturday shift if I cover yours on Monday?"],
      [
        ["你能和我换星期六的班吗", "Could you swap Saturday's shift with me"],
        ["我可以替你上", "I can cover"],
        ["星期一的班", "your Monday shift in return"]
      ],
      ["swap shifts", "cover your shift", "in return"],
      "A2"
    ),
    translationItem(
      "exp180-translation-clarify-task",
      "职场沟通",
      "礼貌",
      "为了确保我理解正确，您是希望我先更新表格，再联系客户吗？",
      "Just to make sure I understand correctly, would you like me to update the spreadsheet before contacting the client?",
      "Should I update the spreadsheet first and then contact the client?",
      ["To confirm the order, do you want me to update the spreadsheet first and contact the client afterwards?"],
      [
        ["为了确保我理解正确", "Just to make sure I understand correctly"],
        ["您是希望我先更新表格吗", "would you like me to update the spreadsheet"],
        ["再联系客户", "before contacting the client"]
      ],
      ["make sure I understand", "update the spreadsheet", "contacting the client"],
      "A2"
    ),
    translationItem(
      "exp180-translation-team-lunch-diet",
      "团队活动",
      "自然",
      "我不吃肉，但鱼和奶制品都可以，请帮我订合适的午餐。",
      "I do not eat meat, but fish and dairy products are fine. Please order a suitable lunch for me.",
      "I eat fish but not meat. Please choose a suitable lunch.",
      ["I do not eat meat, although I do eat fish and dairy. Could you include an appropriate lunch option for me?"],
      [
        ["我不吃肉", "I do not eat meat"],
        ["但鱼和奶制品都可以", "but fish and dairy products are fine"],
        ["请帮我订合适的午餐", "Please order a suitable lunch for me"]
      ],
      ["do not eat meat", "dairy products", "suitable lunch"],
      "A2"
    ),
    translationItem(
      "exp180-translation-clockin-error",
      "考勤沟通",
      "直接而礼貌",
      "我今天早上八点到岗，但系统没有记录我的打卡。",
      "I started work at eight this morning, but the system did not record my clock-in.",
      "I arrived at eight, but my clock-in is missing from the system.",
      ["I clocked in at eight this morning, but the attendance system has not recorded it."],
      [
        ["我今天早上八点到岗", "I started work at eight this morning"],
        ["但系统没有记录", "but the system did not record"],
        ["我的打卡", "my clock-in"]
      ],
      ["started work", "did not record", "clock-in"],
      "A2"
    ),
    translationItem(
      "exp180-translation-customer-wait",
      "客户服务",
      "礼貌",
      "很抱歉让您久等了，我现在就请同事来帮助您。",
      "I am sorry to have kept you waiting. I will ask a colleague to help you right away.",
      "Sorry for the wait. A colleague will help you now.",
      ["I apologise for the delay. I will get a colleague to assist you immediately."],
      [
        ["很抱歉让您久等了", "I am sorry to have kept you waiting"],
        ["我现在就请同事", "I will ask a colleague right away"],
        ["来帮助您", "to help you"]
      ],
      ["kept you waiting", "ask a colleague", "right away"],
      "A2"
    ),
    translationItem(
      "exp180-translation-measurable-achievement",
      "求职面试",
      "专业",
      "我重新安排了库存检查流程，使每周盘点时间缩短了大约百分之二十。",
      "I reorganised the inventory-checking process, which reduced the weekly stocktake time by about 20 percent.",
      "I improved the inventory process and cut stocktake time by about 20 percent.",
      ["By reorganising the inventory checks, I reduced the time spent on weekly stocktakes by roughly 20 percent."],
      [
        ["我重新安排了库存检查流程", "I reorganised the inventory-checking process"],
        ["使每周盘点时间缩短了", "which reduced the weekly stocktake time"],
        ["大约百分之二十", "by about 20 percent"]
      ],
      ["reorganised the process", "reduced", "by about 20 percent"],
      "B1"
    ),
    translationItem(
      "exp180-translation-transferable-skills",
      "求职面试",
      "自信而真实",
      "虽然我没有酒店行业经验，但零售工作培养了我的客户服务和排班能力。",
      "Although I do not have experience in the hotel industry, my retail work developed my customer service and scheduling skills.",
      "My retail experience gave me customer service and scheduling skills that transfer to hospitality.",
      ["While I am new to hospitality, I gained strong customer service and rota-planning skills in retail."],
      [
        ["虽然我没有酒店行业经验", "Although I do not have experience in the hotel industry"],
        ["但零售工作培养了", "my retail work developed"],
        ["我的客户服务和排班能力", "my customer service and scheduling skills"]
      ],
      ["experience in", "retail work", "scheduling skills"],
      "B1"
    ),
    translationItem(
      "exp180-translation-leaving-role",
      "求职面试",
      "积极而专业",
      "我感谢目前岗位给我的经验，但现在希望承担更复杂的职责。",
      "I am grateful for the experience my current role has given me, but I am now looking for more complex responsibilities.",
      "I value my current experience and am ready for greater responsibility.",
      ["My current position has taught me a great deal, and I am now seeking a role with broader responsibilities."],
      [
        ["我感谢目前岗位给我的经验", "I am grateful for the experience my current role has given me"],
        ["但现在希望", "but I am now looking for"],
        ["承担更复杂的职责", "more complex responsibilities"]
      ],
      ["grateful for the experience", "current role", "complex responsibilities"],
      "B1"
    ),
    translationItem(
      "exp180-translation-weakness-improvement",
      "求职面试",
      "坦诚而积极",
      "我以前不太敢在大型会议上发言，所以主动参加了演讲课程并定期练习。",
      "I used to lack confidence speaking in large meetings, so I took a presentation course and began practising regularly.",
      "Public speaking was a weakness, so I trained and now practise often.",
      ["I was previously nervous about speaking in large meetings, but I addressed it by taking a presentation course and practising consistently."],
      [
        ["我以前不太敢在大型会议上发言", "I used to lack confidence speaking in large meetings"],
        ["所以主动参加了演讲课程", "so I took a presentation course"],
        ["并定期练习", "and began practising regularly"]
      ],
      ["lack confidence", "presentation course", "practising regularly"],
      "B1"
    ),
    translationItem(
      "exp180-translation-conflict-example",
      "求职面试",
      "成熟",
      "两位同事对任务顺序有分歧时，我让他们先说明各自最担心的风险。",
      "When two colleagues disagreed about the order of the tasks, I asked each of them to explain the risk they were most concerned about.",
      "When colleagues disagreed, I asked them to explain their main concerns first.",
      ["When two team members had different views on task order, I invited both to describe their biggest concern."],
      [
        ["两位同事对任务顺序有分歧时", "When two colleagues disagreed about the order of the tasks"],
        ["我让他们先说明", "I asked each of them to explain"],
        ["各自最担心的风险", "the risk they were most concerned about"]
      ],
      ["disagreed about", "asked each of them", "concerned about"],
      "B1"
    ),
    translationItem(
      "exp180-translation-interview-next-steps",
      "求职面试",
      "礼貌而专业",
      "感谢您今天的时间，请问接下来的招聘流程和预计时间是什么？",
      "Thank you for your time today. Could you tell me about the next steps in the hiring process and the expected timeline?",
      "Thank you. What are the next steps and expected timeline?",
      ["Thank you for meeting with me. May I ask what the next stage of the recruitment process will be and when I might hear back?"],
      [
        ["感谢您今天的时间", "Thank you for your time today"],
        ["请问接下来的招聘流程", "Could you tell me about the next steps in the hiring process"],
        ["和预计时间", "and the expected timeline"]
      ],
      ["thank you for your time", "next steps", "expected timeline"],
      "B1"
    ),
    translationItem(
      "exp180-translation-salary-flexible",
      "求职面试",
      "专业而灵活",
      "根据岗位职责和市场水平，我期望的年薪在这个区间，但也愿意讨论整体待遇。",
      "Based on the responsibilities and the market rate, my expected salary is within this range, although I am open to discussing the overall package.",
      "This range matches the role and market, but I am open to discussing the full package.",
      ["My expectation falls within this range given the scope of the role and current market rates, but I am flexible when considering the total compensation package."],
      [
        ["根据岗位职责和市场水平", "Based on the responsibilities and the market rate"],
        ["我期望的年薪在这个区间", "my expected salary is within this range"],
        ["但也愿意讨论整体待遇", "although I am open to discussing the overall package"]
      ],
      ["market rate", "expected salary", "overall package"],
      "B1"
    ),
    translationItem(
      "exp180-translation-work-authorisation",
      "求职面试",
      "清楚而正式",
      "我目前有权在这个国家全职工作，工作许可到明年九月有效。",
      "I am currently authorised to work full-time in this country, and my work permit is valid until next September.",
      "I can work full-time here, and my permit is valid until next September.",
      ["I currently have full-time work authorisation, with a permit that remains valid until September next year."],
      [
        ["我目前有权", "I am currently authorised"],
        ["在这个国家全职工作", "to work full-time in this country"],
        ["工作许可到明年九月有效", "and my work permit is valid until next September"]
      ],
      ["authorised to work", "full-time", "work permit is valid"],
      "B1"
    ),
    translationItem(
      "exp180-translation-hybrid-schedule",
      "工作安排",
      "礼貌",
      "这个岗位每周需要到办公室几天，团队通常选择哪些天？",
      "How many days a week does this role require employees to be in the office, and which days does the team usually choose?",
      "How often is the team in the office, and on which days?",
      ["Could you clarify the hybrid schedule, including the number of office days and the days the team normally attends?"],
      [
        ["这个岗位每周需要到办公室几天", "How many days a week does this role require employees to be in the office"],
        ["以及", "and"],
        ["团队通常选择哪些天", "which days does the team usually choose"]
      ],
      ["days a week", "require employees", "in the office"],
      "B1"
    ),
    translationItem(
      "exp180-translation-onboarding-access",
      "入职沟通",
      "专业",
      "我已经完成入职培训，但还没有访问排班系统的权限。",
      "I have completed the onboarding training, but I still do not have access to the scheduling system.",
      "I finished onboarding, but I cannot access the scheduling system yet.",
      ["I have completed my induction, although access to the rota system has not been enabled for me yet."],
      [
        ["我已经完成入职培训", "I have completed the onboarding training"],
        ["但还没有权限", "but I still do not have access"],
        ["访问排班系统", "to the scheduling system"]
      ],
      ["completed onboarding", "do not have access", "scheduling system"],
      "B1"
    ),
    translationItem(
      "exp180-translation-missed-deadline",
      "项目沟通",
      "负责而直接",
      "数据清理比预计耗时更长，所以我无法在今天完成报告；我会在明天中午前交付。",
      "The data cleanup is taking longer than expected, so I will not be able to finish the report today. I will deliver it by noon tomorrow.",
      "The report is delayed by the data cleanup, but I will deliver it by noon tomorrow.",
      ["Because cleaning the data has taken longer than planned, I need until noon tomorrow to complete and deliver the report."],
      [
        ["数据清理比预计耗时更长", "The data cleanup is taking longer than expected"],
        ["所以我无法在今天完成报告", "so I will not be able to finish the report today"],
        ["我会在明天中午前交付", "I will deliver it by noon tomorrow"]
      ],
      ["taking longer than expected", "will not be able to", "by noon tomorrow"],
      "B1"
    ),
    translationItem(
      "exp180-translation-urgent-priority",
      "任务协调",
      "合作",
      "我可以先处理这个紧急请求，但需要把月度报告推迟到明天。",
      "I can prioritise this urgent request, but I will need to postpone the monthly report until tomorrow.",
      "I can handle this first if the monthly report can wait until tomorrow.",
      ["I can make this urgent request my top priority, provided that the monthly report moves to tomorrow."],
      [
        ["我可以先处理这个紧急请求", "I can prioritise this urgent request"],
        ["但需要把月度报告", "but I will need to postpone the monthly report"],
        ["推迟到明天", "until tomorrow"]
      ],
      ["prioritise", "urgent request", "postpone until tomorrow"],
      "B1"
    ),
    translationItem(
      "exp180-translation-minutes-correction",
      "会议跟进",
      "礼貌而准确",
      "我在会议记录中可能写错了交付日期，请确认应该是十四号还是四十号。",
      "I may have recorded the delivery date incorrectly in the meeting minutes. Could you confirm whether it should be the fourteenth or the fortieth?",
      "Could you confirm the delivery date? My meeting notes may be wrong.",
      ["I may have made an error in the minutes. Please confirm whether the agreed delivery date was the fourteenth or the fortieth."],
      [
        ["我可能写错了交付日期", "I may have recorded the delivery date incorrectly"],
        ["在会议记录中", "in the meeting minutes"],
        ["请确认应该是十四号还是四十号", "Could you confirm whether it should be the fourteenth or the fortieth"]
      ],
      ["meeting minutes", "recorded incorrectly", "confirm whether"],
      "B1"
    ),
    translationItem(
      "exp180-translation-polite-disagreement",
      "团队沟通",
      "尊重而坚定",
      "我理解你的考虑，不过根据上个月的数据，我认为先测试小范围方案更稳妥。",
      "I understand your concern, but based on last month's data, I think it would be safer to test the approach on a small scale first.",
      "I see your point, but the data suggests a small test would be safer.",
      ["I appreciate your reasoning; however, last month's data leads me to recommend a limited trial first."],
      [
        ["我理解你的考虑", "I understand your concern"],
        ["不过根据上个月的数据", "but based on last month's data"],
        ["我认为先测试小范围方案更稳妥", "I think it would be safer to test the approach on a small scale first"]
      ],
      ["understand your concern", "based on the data", "on a small scale"],
      "B1"
    ),
    translationItem(
      "exp180-translation-presentation-feedback",
      "职场成长",
      "开放",
      "如果您有时间，我想听听这次汇报中哪一部分最清楚，哪一部分还需要改进。",
      "If you have time, I would like to know which part of the presentation was clearest and which part still needs improvement.",
      "Could you tell me what worked well and what I should improve in the presentation?",
      ["When you have a moment, I would appreciate feedback on the clearest section of my presentation and the area that needs the most work."],
      [
        ["如果您有时间", "If you have time"],
        ["我想听听哪一部分最清楚", "I would like to know which part was clearest"],
        ["哪一部分还需要改进", "and which part still needs improvement"]
      ],
      ["if you have time", "which part was clearest", "needs improvement"],
      "B1"
    ),
    translationItem(
      "exp180-translation-plain-technical-explanation",
      "跨部门沟通",
      "清楚",
      "简单来说，系统没有丢失数据，只是暂时无法把新记录显示出来。",
      "Put simply, the system has not lost any data; it is just temporarily unable to display the new records.",
      "The data is safe, but new records are not showing yet.",
      ["In simple terms, no data has been lost, but the system cannot currently show the latest records."],
      [
        ["简单来说", "Put simply"],
        ["系统没有丢失数据", "the system has not lost any data"],
        ["只是暂时无法把新记录显示出来", "it is just temporarily unable to display the new records"]
      ],
      ["put simply", "has not lost any data", "temporarily unable to display"],
      "B1"
    ),
    translationItem(
      "exp180-translation-blocker-escalation",
      "项目风险",
      "专业且有方案",
      "供应商还没有提供测试账号；如果今天下午仍未收到，我建议先用模拟数据继续。",
      "The supplier has not provided the test account yet. If we still do not receive it this afternoon, I suggest continuing with simulated data.",
      "We are waiting for the test account; otherwise, we can use simulated data for now.",
      ["The missing supplier test account is blocking us. Unless it arrives this afternoon, I recommend that we proceed with mock data."],
      [
        ["供应商还没有提供测试账号", "The supplier has not provided the test account yet"],
        ["如果今天下午仍未收到", "If we still do not receive it this afternoon"],
        ["我建议先用模拟数据继续", "I suggest continuing with simulated data"]
      ],
      ["has not provided", "test account", "simulated data"],
      "B1"
    ),
    translationItem(
      "exp180-translation-leave-handover",
      "工作交接",
      "专业",
      "休假前我会更新任务清单，并把尚未解决的问题和联系人写清楚。",
      "Before I go on leave, I will update the task list and clearly document the unresolved issues and relevant contacts.",
      "I will update the task list and document open issues before my leave.",
      ["I will prepare a handover before my leave, including an updated task list, outstanding issues, and the right contacts."],
      [
        ["休假前", "Before I go on leave"],
        ["我会更新任务清单", "I will update the task list"],
        ["把尚未解决的问题和联系人写清楚", "and clearly document the unresolved issues and relevant contacts"]
      ],
      ["go on leave", "update the task list", "unresolved issues"],
      "B1"
    ),
    translationItem(
      "exp180-translation-workload-capacity",
      "工作量沟通",
      "坦诚而合作",
      "我这周可以接新任务，但目前的三项优先工作中需要调整一项截止日期。",
      "I can take on the new task this week, but one of my three current priorities will need a revised deadline.",
      "I can do it if we move one of my current deadlines.",
      ["I have capacity for the new assignment, provided that we adjust the due date of one existing priority."],
      [
        ["我这周可以接新任务", "I can take on the new task this week"],
        ["但目前的三项优先工作中", "but one of my three current priorities"],
        ["需要调整一项截止日期", "will need a revised deadline"]
      ],
      ["take on", "current priorities", "revised deadline"],
      "B1"
    ),
    translationItem(
      "exp180-translation-agenda-addition",
      "会议沟通",
      "礼貌",
      "如果议程允许，我想增加五分钟讨论下周的人手安排。",
      "If the agenda allows, I would like to add five minutes to discuss next week's staffing arrangements.",
      "Could we add five minutes to discuss next week's staffing?",
      ["If there is room on the agenda, may we set aside five minutes for next week's staffing plan?"],
      [
        ["如果议程允许", "If the agenda allows"],
        ["我想增加五分钟", "I would like to add five minutes"],
        ["讨论下周的人手安排", "to discuss next week's staffing arrangements"]
      ],
      ["if the agenda allows", "add five minutes", "staffing arrangements"],
      "B1"
    ),
    translationItem(
      "exp180-translation-corrected-attachment",
      "邮件沟通",
      "负责而简洁",
      "上一封邮件附错了文件，请忽略它，并使用这封邮件里的修正版。",
      "I attached the wrong file to my previous email. Please disregard it and use the revised version attached here.",
      "Please ignore the last attachment and use this corrected version.",
      ["The attachment in my previous message was incorrect. Please use the updated file attached to this email instead."],
      [
        ["上一封邮件附错了文件", "I attached the wrong file to my previous email"],
        ["请忽略它", "Please disregard it"],
        ["并使用这封邮件里的修正版", "and use the revised version attached here"]
      ],
      ["attached the wrong file", "disregard it", "revised version"],
      "B1"
    ),
    translationItem(
      "exp180-translation-complaint-acknowledgement",
      "客户服务",
      "诚恳而专业",
      "我理解反复联系仍未解决问题很令人失望，我会亲自跟进这个工单。",
      "I understand how frustrating it is to contact us repeatedly without getting the issue resolved. I will follow up on this case personally.",
      "I understand your frustration, and I will personally follow up on the case.",
      ["I appreciate that having to contact us several times without a solution is frustrating, so I will take personal ownership of this case."],
      [
        ["我理解很令人失望", "I understand how frustrating it is"],
        ["反复联系仍未解决问题", "to contact us repeatedly without getting the issue resolved"],
        ["我会亲自跟进这个工单", "I will follow up on this case personally"]
      ],
      ["understand how frustrating", "issue resolved", "follow up personally"],
      "B1"
    ),
    translationItem(
      "exp180-translation-service-outage-eta",
      "客户通知",
      "清楚而专业",
      "技术团队正在处理故障，预计服务将在下午三点前恢复。",
      "The technical team is working on the outage, and the service is expected to be restored by 3 p.m.",
      "We are fixing the outage and expect service back by 3 p.m.",
      ["Our technical team is addressing the disruption, with service currently expected to resume by 3 p.m."],
      [
        ["技术团队正在处理故障", "The technical team is working on the outage"],
        ["预计服务", "and the service is expected"],
        ["将在下午三点前恢复", "to be restored by 3 p.m."]
      ],
      ["working on the outage", "is expected", "be restored"],
      "B1"
    ),
    translationItem(
      "exp180-translation-partial-delivery",
      "供应商沟通",
      "专业",
      "我们只收到了四十箱中的三十二箱，请确认剩余八箱何时发出。",
      "We received only 32 of the 40 boxes. Please confirm when the remaining eight will be shipped.",
      "Eight boxes are missing. When will the rest be shipped?",
      ["Only 32 out of 40 boxes arrived. Could you confirm the dispatch date for the remaining eight?"],
      [
        ["我们只收到了四十箱中的三十二箱", "We received only 32 of the 40 boxes"],
        ["请确认", "Please confirm"],
        ["剩余八箱何时发出", "when the remaining eight will be shipped"]
      ],
      ["32 of the 40", "remaining eight", "will be shipped"],
      "B1"
    ),
    translationItem(
      "exp180-translation-invoice-po-mismatch",
      "财务沟通",
      "准确而专业",
      "发票上的采购订单号与我们的记录不符，请在付款到期前重新开具。",
      "The purchase order number on the invoice does not match our records. Please reissue it before the payment is due.",
      "The PO number is incorrect. Please send a revised invoice before the due date.",
      ["The invoice refers to a purchase order number that does not match our system; please issue a corrected version before payment falls due."],
      [
        ["发票上的采购订单号", "The purchase order number on the invoice"],
        ["与我们的记录不符", "does not match our records"],
        ["请在付款到期前重新开具", "Please reissue it before the payment is due"]
      ],
      ["purchase order number", "does not match", "reissue"],
      "B1"
    ),
    translationItem(
      "exp180-translation-conference-followup",
      "职业社交",
      "友好而专业",
      "很高兴在研讨会上听到您的分享，我尤其想进一步了解您提到的培训模式。",
      "It was a pleasure hearing your talk at the seminar. I would be especially interested in learning more about the training model you mentioned.",
      "I enjoyed your seminar talk and would like to learn more about the training model.",
      ["I appreciated your presentation at the seminar, particularly the section on your training model, which I would like to explore further."],
      [
        ["很高兴在研讨会上听到您的分享", "It was a pleasure hearing your talk at the seminar"],
        ["我尤其想进一步了解", "I would be especially interested in learning more about"],
        ["您提到的培训模式", "the training model you mentioned"]
      ],
      ["a pleasure hearing", "interested in learning more", "training model"],
      "B1"
    ),
    translationItem(
      "exp180-translation-name-pronunciation",
      "跨文化沟通",
      "尊重而自然",
      "我想正确读出您的名字，您可以慢一点再示范一次吗？",
      "I would like to pronounce your name correctly. Could you say it once more a little more slowly?",
      "Could you repeat your name slowly so I can pronounce it correctly?",
      ["I want to make sure I say your name correctly. Would you mind pronouncing it again slowly?"],
      [
        ["我想正确读出您的名字", "I would like to pronounce your name correctly"],
        ["您可以吗", "Could you"],
        ["慢一点再示范一次", "say it once more a little more slowly"]
      ],
      ["pronounce your name", "once more", "more slowly"],
      "B1"
    ),
    translationItem(
      "exp180-translation-lease-renewal",
      "海外租房",
      "礼貌而协商",
      "如果我续租十二个月，房租能否维持现有价格？",
      "If I renew the lease for twelve months, would it be possible to keep the rent at its current rate?",
      "Can the rent stay the same if I renew for a year?",
      ["Would you consider maintaining the current rent if I sign a twelve-month renewal?"],
      [
        ["如果我续租十二个月", "If I renew the lease for twelve months"],
        ["房租能否", "would it be possible for the rent"],
        ["维持现有价格", "to stay at its current rate"]
      ],
      ["renew the lease", "twelve months", "current rate"],
      "B1"
    ),
    translationItem(
      "exp180-translation-insurance-claim",
      "海外就医",
      "正式而清楚",
      "我已经支付了诊疗费，请问申请保险报销需要提交哪些收据？",
      "I have already paid the medical bill. Which receipts do I need to submit for an insurance claim?",
      "What receipts are required to claim back the medical cost?",
      ["I paid the treatment costs myself. Could you tell me which documents and receipts are needed for reimbursement?"],
      [
        ["我已经支付了诊疗费", "I have already paid the medical bill"],
        ["需要提交哪些收据", "Which receipts do I need to submit"],
        ["申请保险报销", "for an insurance claim"]
      ],
      ["medical bill", "submit receipts", "insurance claim"],
      "B1"
    ),
    translationItem(
      "exp180-translation-cancelled-connection",
      "海外出行",
      "礼貌而明确",
      "第一段航班被取消后，我赶不上转机了，请帮我改签到最早的可用航班。",
      "Since the first leg of my journey was cancelled, I will miss my connection. Please rebook me on the earliest available flight.",
      "My first flight was cancelled. Please put me on the earliest flight available.",
      ["The cancellation means I cannot make my connecting flight. Could you rebook me on the next available service?"],
      [
        ["第一段航班被取消后", "Since the first leg of my journey was cancelled"],
        ["我赶不上转机了", "I will miss my connection"],
        ["请帮我改签到最早的可用航班", "Please rebook me on the earliest available flight"]
      ],
      ["first leg", "miss my connection", "rebook me"],
      "B1"
    ),
    translationItem(
      "exp180-translation-leadership-ambiguity",
      "行为面试",
      "成熟而具体",
      "项目目标不够明确时，我先确认不可变的截止日期，再把未知问题列出来逐一找负责人。",
      "When a project's goals are unclear, I first confirm the fixed deadline and then list the unknowns so that each one can be assigned an owner.",
      "When goals are unclear, I confirm the deadline and assign owners to the open questions.",
      ["In an ambiguous project, I establish the non-negotiable deadline first, identify the unanswered questions, and assign clear ownership for resolving them."],
      [
        ["项目目标不够明确时", "When a project's goals are unclear"],
        ["我先确认不可变的截止日期", "I first confirm the fixed deadline"],
        ["把未知问题列出来逐一找负责人", "and then list the unknowns so that each one can be assigned an owner"]
      ],
      ["goals are unclear", "fixed deadline", "assigned an owner"],
      "B2"
    ),
    translationItem(
      "exp180-translation-owning-failure",
      "行为面试",
      "坦诚且负责",
      "有一次我低估了审批所需时间；我及时说明了错误，重新制定计划，并把检查点加入后续流程。",
      "On one occasion, I underestimated the time required for approval. I acknowledged the mistake promptly, revised the plan, and added checkpoints to the process for future projects.",
      "I once underestimated approval time, owned the mistake, replanned, and added checkpoints.",
      ["I once misjudged the approval timeline; I took responsibility, reset the plan, and introduced checkpoints to prevent the same issue recurring."],
      [
        ["有一次我低估了审批所需时间", "On one occasion, I underestimated the time required for approval"],
        ["我及时说明了错误并重新制定计划", "I acknowledged the mistake promptly and revised the plan"],
        ["把检查点加入后续流程", "and added checkpoints to the process for future projects"]
      ],
      ["underestimated", "acknowledged the mistake", "added checkpoints"],
      "B2"
    ),
    translationItem(
      "exp180-translation-stakeholder-alignment",
      "行为面试",
      "战略而合作",
      "面对相互冲突的需求，我会把各方关注点转化为共同的评估标准，再比较不同方案。",
      "When faced with conflicting requirements, I translate each stakeholder's concerns into shared evaluation criteria and then compare the available options.",
      "I turn competing needs into shared criteria and compare options against them.",
      ["To align stakeholders with competing priorities, I establish common decision criteria before assessing the alternatives."],
      [
        ["面对相互冲突的需求", "When faced with conflicting requirements"],
        ["我会把各方关注点转化为共同的评估标准", "I translate each stakeholder's concerns into shared evaluation criteria"],
        ["再比较不同方案", "and then compare the available options"]
      ],
      ["conflicting requirements", "shared evaluation criteria", "compare the options"],
      "B2"
    ),
    translationItem(
      "exp180-translation-learn-system-fast",
      "求职面试",
      "自信而具体",
      "必须在短时间掌握新系统时，我先学习高频任务，再用测试环境练习不熟悉的操作。",
      "When I need to learn a new system quickly, I focus first on high-frequency tasks and then practise unfamiliar procedures in a test environment.",
      "I learn common tasks first and practise the rest safely in a test environment.",
      ["Under a tight learning deadline, I prioritise the most frequently used workflows and use a sandbox to build confidence with less familiar functions."],
      [
        ["必须在短时间掌握新系统时", "When I need to learn a new system quickly"],
        ["我先学习高频任务", "I focus first on high-frequency tasks"],
        ["再用测试环境练习不熟悉的操作", "and then practise unfamiliar procedures in a test environment"]
      ],
      ["learn a new system quickly", "high-frequency tasks", "test environment"],
      "B2"
    ),
    translationItem(
      "exp180-translation-career-transition",
      "求职面试",
      "积极而连贯",
      "我转向这个行业不是从零开始，而是把运营经验应用到更重视数据的岗位。",
      "My move into this industry is not a complete restart; it is an opportunity to apply my operations experience in a more data-focused role.",
      "I am bringing my operations experience into a more data-driven field.",
      ["Rather than starting over, I am transferring my operational expertise to a sector where decisions rely more heavily on data."],
      [
        ["我转向这个行业不是从零开始", "My move into this industry is not a complete restart"],
        ["而是把运营经验应用到", "it is an opportunity to apply my operations experience"],
        ["更重视数据的岗位", "in a more data-focused role"]
      ],
      ["move into this industry", "operations experience", "data-focused role"],
      "B2"
    ),
    translationItem(
      "exp180-translation-offer-flexibility",
      "工作邀请",
      "感谢而协商",
      "我很期待加入团队；在签署之前，能否讨论试用期后每周远程工作一天的可能性？",
      "I am very excited about joining the team. Before I sign, could we discuss the possibility of working remotely one day a week after my probation period?",
      "I am excited to join. Could we discuss one remote day a week after probation?",
      ["I am enthusiastic about the offer and would like to explore whether one weekly remote-working day could be agreed following probation."],
      [
        ["我很期待加入团队", "I am very excited about joining the team"],
        ["在签署之前能否讨论", "Before I sign, could we discuss"],
        ["试用期后每周远程工作一天的可能性", "the possibility of working remotely one day a week after my probation period"]
      ],
      ["excited about joining", "before I sign", "after my probation period"],
      "B2"
    ),
    translationItem(
      "exp180-translation-decline-offer",
      "工作邀请",
      "感谢而得体",
      "经过慎重考虑，我决定接受另一个更符合长期方向的岗位，但非常感谢您的信任。",
      "After careful consideration, I have decided to accept another position that is more closely aligned with my long-term direction, but I am very grateful for your confidence in me.",
      "Thank you for the offer, but I have chosen a role that better fits my long-term goals.",
      ["Having considered both opportunities carefully, I will pursue another role that better supports my long-term objectives; nevertheless, I sincerely appreciate your offer and trust."],
      [
        ["经过慎重考虑", "After careful consideration"],
        ["我决定接受另一个更符合长期方向的岗位", "I have decided to accept another position that is more closely aligned with my long-term direction"],
        ["但非常感谢您的信任", "but I am very grateful for your confidence in me"]
      ],
      ["after careful consideration", "aligned with", "grateful for your confidence"],
      "B2"
    ),
    translationItem(
      "exp180-translation-sponsorship-policy",
      "求职面试",
      "正式而礼貌",
      "为了规划长期安排，我想了解公司是否会为表现达标的员工提供签证支持。",
      "To plan for the long term, I would like to understand whether the company offers visa sponsorship to employees who meet its performance expectations.",
      "Does the company offer visa sponsorship to eligible employees?",
      ["For long-term planning purposes, could you clarify whether visa sponsorship is available to employees who perform successfully in the role?"],
      [
        ["为了规划长期安排", "To plan for the long term"],
        ["我想了解公司是否会提供签证支持", "I would like to understand whether the company offers visa sponsorship"],
        ["为表现达标的员工", "to employees who meet its performance expectations"]
      ],
      ["plan for the long term", "visa sponsorship", "performance expectations"],
      "B2"
    ),
    translationItem(
      "exp180-translation-review-evidence",
      "绩效沟通",
      "客观而自信",
      "除完成既定目标外，我还记录了客户等待时间的变化，以说明流程改进带来的影响。",
      "In addition to meeting my stated objectives, I tracked changes in customer waiting times to demonstrate the impact of the process improvement.",
      "I met my goals and used waiting-time data to show the improvement's impact.",
      ["Beyond delivering my agreed targets, I measured customer wait times so that the effect of the process change could be demonstrated objectively."],
      [
        ["除完成既定目标外", "In addition to meeting my stated objectives"],
        ["我还记录了客户等待时间的变化", "I tracked changes in customer waiting times"],
        ["以说明流程改进带来的影响", "to demonstrate the impact of the process improvement"]
      ],
      ["meeting my objectives", "tracked changes", "demonstrate the impact"],
      "B2"
    ),
    translationItem(
      "exp180-translation-manager-feedback",
      "管理沟通",
      "开放而尊重",
      "我希望大家能更早提出不同意见；即使方案还不成熟，也不会因此受到负面评价。",
      "I would like everyone to raise different views earlier. Even if an idea is not fully developed, no one will be judged negatively for sharing it.",
      "Please share concerns early; unfinished ideas are welcome and will not be judged.",
      ["I want the team to challenge proposals sooner, with the assurance that tentative ideas can be voiced without negative consequences."],
      [
        ["我希望大家能更早提出不同意见", "I would like everyone to raise different views earlier"],
        ["即使方案还不成熟", "Even if an idea is not fully developed"],
        ["也不会因此受到负面评价", "no one will be judged negatively for sharing it"]
      ],
      ["raise different views", "not fully developed", "judged negatively"],
      "B2"
    ),
    translationItem(
      "exp180-translation-deadline-tradeoff",
      "项目沟通",
      "坚定而建设性",
      "如果发布日期不能调整，我们需要缩小首个版本的范围，否则测试时间会不足。",
      "If the release date cannot be changed, we need to reduce the scope of the first version; otherwise, there will not be enough time for testing.",
      "To keep the date, we must reduce the first release's scope or lose testing time.",
      ["Maintaining the current launch date requires a narrower initial scope; without that trade-off, the testing window will be inadequate."],
      [
        ["如果发布日期不能调整", "If the release date cannot be changed"],
        ["我们需要缩小首个版本的范围", "we need to reduce the scope of the first version"],
        ["否则测试时间会不足", "otherwise, there will not be enough time for testing"]
      ],
      ["release date", "reduce the scope", "enough time for testing"],
      "B2"
    ),
    translationItem(
      "exp180-translation-scope-impact",
      "变更管理",
      "分析性",
      "在批准新增功能前，我们应评估它对预算、测试范围和上线日期的连锁影响。",
      "Before approving the additional feature, we should assess its knock-on effects on the budget, testing scope, and launch date.",
      "We should assess the new feature's impact on cost, testing, and timing before approval.",
      ["The feature should not be approved until we have evaluated the resulting implications for budget, test coverage, and delivery schedule."],
      [
        ["在批准新增功能前", "Before approving the additional feature"],
        ["我们应评估它的连锁影响", "we should assess its knock-on effects"],
        ["对预算、测试范围和上线日期", "on the budget, testing scope, and launch date"]
      ],
      ["before approving", "knock-on effects", "testing scope"],
      "B2"
    ),
    translationItem(
      "exp180-translation-risk-contingency",
      "项目风险",
      "专业且审慎",
      "最可能的风险是关键人员临时缺席，因此我们会交叉培训两名同事并准备书面操作说明。",
      "The most likely risk is the unexpected absence of a key team member, so we will cross-train two colleagues and prepare written operating instructions.",
      "We will reduce the absence risk through cross-training and written instructions.",
      ["Because unplanned absence among key staff is our most probable risk, our mitigation is to cross-train two people and document the operating procedure."],
      [
        ["最可能的风险是关键人员临时缺席", "The most likely risk is the unexpected absence of a key team member"],
        ["因此我们会交叉培训两名同事", "so we will cross-train two colleagues"],
        ["并准备书面操作说明", "and prepare written operating instructions"]
      ],
      ["most likely risk", "cross-train", "operating instructions"],
      "B2"
    ),
    translationItem(
      "exp180-translation-decision-rationale",
      "跨团队协作",
      "透明而专业",
      "我们选择第二个方案并不是因为它成本最低，而是因为它能在现有系统上更快实施。",
      "We chose the second option not because it was the least expensive, but because it could be implemented more quickly within the existing system.",
      "We chose option two for faster implementation, not the lowest cost.",
      ["The deciding factor in selecting the second option was its faster implementation on our current system rather than its price."],
      [
        ["我们选择第二个方案", "We chose the second option"],
        ["并不是因为它成本最低", "not because it was the least expensive"],
        ["而是因为它能在现有系统上更快实施", "but because it could be implemented more quickly within the existing system"]
      ],
      ["not because", "least expensive", "implemented more quickly"],
      "B2"
    ),
    translationItem(
      "exp180-translation-summarise-disagreement",
      "会议主持",
      "中立而清楚",
      "目前的分歧似乎不在目标，而在我们愿意为速度承担多大风险。",
      "The current disagreement does not appear to be about the objective, but about how much risk we are willing to accept in exchange for speed.",
      "We agree on the goal but differ on how much risk to accept for speed.",
      ["It seems that the goal itself is shared; the unresolved issue is the level of risk we are prepared to trade for faster delivery."],
      [
        ["目前的分歧似乎不在目标", "The current disagreement does not appear to be about the objective"],
        ["而在我们愿意承担多大风险", "but about how much risk we are willing to accept"],
        ["为速度", "in exchange for speed"]
      ],
      ["does not appear to be", "willing to accept", "in exchange for"],
      "B2"
    ),
    translationItem(
      "exp180-translation-client-boundary",
      "客户沟通",
      "坚定而礼貌",
      "我们可以在现有预算内调整两轮设计，但第三轮修改需要另行估价。",
      "We can accommodate two rounds of design revisions within the current budget, but a third round would need to be quoted separately.",
      "The budget covers two revision rounds; a third would cost extra.",
      ["The agreed budget includes up to two design revisions, while any further round would require a separate quotation."],
      [
        ["我们可以调整两轮设计", "We can accommodate two rounds of design revisions"],
        ["在现有预算内", "within the current budget"],
        ["但第三轮修改需要另行估价", "but a third round would need to be quoted separately"]
      ],
      ["accommodate", "rounds of revisions", "quoted separately"],
      "B2"
    ),
    translationItem(
      "exp180-translation-goodwill-credit",
      "客户服务",
      "审慎而友好",
      "在调查尚未完成的情况下，我们可以先提供账户抵用额作为善意安排，但这不代表责任认定。",
      "While the investigation is still in progress, we can offer an account credit as a goodwill gesture, but this does not constitute an admission of liability.",
      "We can offer a goodwill credit while we investigate, without admitting liability.",
      ["Pending the outcome of the investigation, we can apply a goodwill credit to the account without this being treated as acceptance of responsibility."],
      [
        ["在调查尚未完成的情况下", "While the investigation is still in progress"],
        ["我们可以先提供账户抵用额作为善意安排", "we can offer an account credit as a goodwill gesture"],
        ["但这不代表责任认定", "but this does not constitute an admission of liability"]
      ],
      ["investigation in progress", "goodwill gesture", "admission of liability"],
      "B2"
    ),
    translationItem(
      "exp180-translation-privacy-notification",
      "信息安全",
      "正式且准确",
      "我们发现一份包含客户联系方式的文件被误发给了错误的收件人，目前正在确认对方是否已删除。",
      "We discovered that a file containing customer contact details was sent to the wrong recipient, and we are currently confirming whether it has been deleted.",
      "A customer contact file went to the wrong person, and we are confirming its deletion.",
      ["A document containing customer contact information was inadvertently shared with an unintended recipient; we are verifying that the recipient has deleted it."],
      [
        ["我们发现一份包含客户联系方式的文件", "We discovered that a file containing customer contact details"],
        ["被误发给了错误的收件人", "was sent to the wrong recipient"],
        ["目前正在确认对方是否已删除", "and we are currently confirming whether it has been deleted"]
      ],
      ["customer contact details", "wrong recipient", "confirming whether"],
      "B2"
    ),
    translationItem(
      "exp180-translation-inclusive-meeting",
      "跨文化协作",
      "包容而专业",
      "为方便非英语母语的同事参与，请提前发送材料，并在讨论关键决定时减少使用缩写。",
      "To make it easier for colleagues who are not native English speakers to participate, please send the materials in advance and limit the use of abbreviations when discussing key decisions.",
      "Please share materials early and avoid abbreviations so everyone can participate.",
      ["To support colleagues working in a second language, circulate the documents beforehand and use abbreviations sparingly during important decision-making discussions."],
      [
        ["为方便非英语母语的同事参与", "To make it easier for colleagues who are not native English speakers to participate"],
        ["请提前发送材料", "please send the materials in advance"],
        ["讨论关键决定时减少使用缩写", "and limit the use of abbreviations when discussing key decisions"]
      ],
      ["native English speakers", "in advance", "limit the use of abbreviations"],
      "B2"
    ),
    translationItem(
      "exp180-translation-pilot-rollout",
      "战略建议",
      "审慎而有说服力",
      "与其立即在所有门店上线，我建议先选三家门店试行四周，再根据结果调整培训。",
      "Rather than launching in every store immediately, I recommend running a four-week pilot in three locations and then adjusting the training based on the results.",
      "I recommend a four-week pilot in three stores before the full rollout.",
      ["Instead of proceeding directly to a company-wide rollout, we should pilot the change at three sites for four weeks and refine the training in light of the findings."],
      [
        ["与其立即在所有门店上线", "Rather than launching in every store immediately"],
        ["我建议先选三家门店试行四周", "I recommend running a four-week pilot in three locations"],
        ["再根据结果调整培训", "and then adjusting the training based on the results"]
      ],
      ["rather than launching", "four-week pilot", "based on the results"],
      "B2"
    )
  ]);
})();

// English Compass v1.12 self-authored everyday-services and advanced communication vocabulary.
(function () {
  "use strict";

  const group = (topic, level, raw) => Object.freeze({
    topic,
    level,
    entries: Object.freeze(raw.trim().split("\n").map((line) => Object.freeze(line.split("|"))))
  });

  const groups = [
    group("银行与个人理财", "A2", `
bank account opening|银行开户|the process of starting a new account at a bank
debit card activation|借记卡激活|the step that makes a new bank card ready to use
online banking login|网上银行登录|the details used to enter a bank's website or app
monthly account statement|月度账户明细|a monthly record of money entering and leaving an account
account balance check|账户余额查询|the act of finding out how much money an account holds
contactless payment limit|非接触支付限额|the maximum amount allowed for a tap-to-pay purchase
overseas remittance charge|海外汇款费用|the cost of sending money abroad through a bank
exchange rate comparison|汇率比较|checking different rates before changing money
standing order setup|定期自动转账设置|an instruction for the bank to pay a fixed amount regularly
direct debit authorisation|自动扣款授权|permission for a company to collect payments from an account
overdraft warning message|透支提醒信息|a notice that an account may go below zero
savings goal tracker|储蓄目标追踪|a tool that shows progress toward a saving target
monthly budget plan|月度预算计划|a plan for how income will be spent each month
utility payment record|公用事业缴费记录|a record of payments for water electricity or gas
mobile payment app|移动支付应用|a phone application used to pay for goods and services
card loss report|银行卡挂失|the act of telling a bank that a card is missing
suspicious charge alert|可疑扣费提醒|a warning about a payment that may not be genuine
receipt filing habit|票据整理习惯|the routine of keeping and organising payment receipts
emergency fund target|应急储备金目标|the amount of money set aside for unexpected events
salary arrival date|工资到账日期|the day wages appear in a bank account
bank branch appointment|银行网点预约|an arranged visit to speak with bank staff
currency exchange counter|货币兑换柜台|a service desk where money is changed into another currency
proof-of-address letter|地址证明信件|an official letter that confirms where someone lives
low-balance notification|低余额通知|an alert sent when an account drops below a set amount
shared expense split|共同开销分摊|dividing a cost fairly among several people`),

    group("就医与健康服务", "A2", `
clinic registration desk|诊所挂号台|the counter where patients sign in for medical care
family doctor appointment|家庭医生预约|an arranged visit to a general practitioner
symptom description note|症状描述记录|a short written summary of how a patient feels
new patient questionnaire|新患者问卷|a set of questions answered before first treatment
allergy information card|过敏信息卡|a card listing substances that cause a bad reaction
prescription collection point|处方药领取处|the place where prescribed medicine is picked up
pharmacy opening hours|药房营业时间|the times when a pharmacy is open
dosage instruction label|用药剂量标签|the label explaining how much medicine to take and when
follow-up visit date|复诊日期|the scheduled day for returning to see a doctor
walk-in clinic option|免预约门诊选择|a clinic that treats patients without an appointment
emergency department entrance|急诊科入口|the way into the hospital area for urgent cases
medical insurance certificate|医疗保险凭证|the document that proves a patient has medical cover
vaccination record book|疫苗接种记录本|a document listing the vaccines a person has received
dental check-up reminder|牙科检查提醒|a message about a routine visit to the dentist
eye test appointment|视力检查预约|an arranged visit to have eyesight examined
laboratory report copy|化验报告副本|a copy of the findings from a medical laboratory
waiting room number|候诊号码|the number that shows a patient's place in the queue
interpreter request form|翻译服务申请表|a form used to ask for language help at a clinic
sick note request|病假条申请|asking a doctor for written proof of illness for work
over-the-counter medicine|非处方药|medicine that can be bought without a prescription
side-effect warning|副作用警示|information about unwanted effects a medicine may cause
home care advice|居家护理建议|guidance about looking after a patient at home
appointment cancellation line|预约取消电话|the phone number used to cancel a medical visit
patient consent form|患者知情同意书|a form confirming a patient agrees to a treatment
health check-up package|体检套餐|a set of routine tests offered together`),

    group("出行与旅行安排", "A2", `
train ticket machine|火车票自助机|a machine that sells rail tickets
platform change announcement|站台变更广播|a message saying a train will leave from a different platform
off-peak travel discount|非高峰出行优惠|a cheaper fare for travelling outside busy hours
seat reservation number|座位预订编号|the code that identifies a reserved seat
luggage storage locker|行李寄存柜|a locker where bags can be left safely
airport check-in counter|机场值机柜台|the desk where passengers register for a flight
boarding gate change|登机口变更|a switch to a different departure gate
flight delay notice|航班延误通知|a message saying a flight will leave later than planned
missed connection help|转乘失误协助|assistance after failing to catch a connecting service
travel card top-up|交通卡充值|adding money to a public transport card
bus route map|公交线路图|a map showing where buses travel
last departure time|末班车时间|the time of the final service of the day
taxi fare estimate|出租车费用预估|a prediction of how much a taxi journey will cost
ride booking confirmation|网约车预订确认|a message confirming a booked car journey
hotel early check-in|酒店提前入住|arriving and registering at a hotel before the usual time
room change request|换房请求|asking a hotel to provide a different room
tourist information centre|游客信息中心|an office that helps visitors with maps and advice
walking route suggestion|步行路线建议|a recommended path for going somewhere on foot
travel insurance certificate|旅行保险凭证|a document proving that a trip is insured
passport validity check|护照有效期检查|confirming a passport has not expired
visa-free stay limit|免签停留期限|the number of days allowed without a visa
lost property office|失物招领处|the office where found items are kept
platform assistance service|站台协助服务|help offered to passengers who need support boarding
journey planner app|行程规划应用|an application that finds routes and times
refund request window|退票申请窗口|the counter or period for asking for money back`),

    group("餐饮与社交活动", "A2", `
table reservation time|餐位预订时间|the agreed time for a booked restaurant table
vegetarian option enquiry|素食选择询问|a question about dishes without meat or fish
set menu option|套餐选择|a fixed combination of dishes at one price
daily special board|今日特色菜牌|a display of dishes offered only that day
allergen information sheet|过敏原信息表|a list of ingredients that may cause reactions
tap water request|免费饮用水请求|asking for ordinary water instead of bottled water
split bill request|分开结账请求|asking to divide a restaurant bill among guests
service charge notice|服务费说明|information about an added charge for service
takeaway packaging option|打包选择|a container for food taken home
tipping custom|小费习惯|the usual practice of giving extra money for service
potluck dinner invitation|自带菜聚餐邀请|an invitation asking each guest to bring a dish
housewarming party gift|乔迁聚会礼物|a present taken to celebrate someone's new home
small talk topic|寒暄话题|a light subject used to start friendly conversation
board game evening|桌游之夜|a social gathering built around table games
neighbourhood coffee morning|社区咖啡早茶会|an informal morning event where neighbours meet
weekend market visit|周末集市游览|a trip to a market held on Saturday or Sunday
birthday card message|生日贺卡留言|the short text written inside a birthday card
polite decline message|礼貌婉拒信息|a kind message saying you cannot attend
arrival time confirmation|到达时间确认|a message confirming when a guest will arrive
dress code question|着装要求询问|a question about what to wear to an event
food waste reduction|减少食物浪费|actions that avoid throwing edible food away
shared dish etiquette|合餐礼仪|polite behaviour when dishes are shared at the table
karaoke song choice|卡拉OK选曲|the song a person picks to sing with friends
picnic spot booking|野餐场地预订|reserving an outdoor place for a picnic
thank-you message timing|致谢信息时机|the appropriate moment to send a message of thanks`),

    group("保险与突发应对", "B1", `
insurance policy summary|保险合同摘要|a short document describing what a policy covers
coverage exclusion clause|承保除外条款|a contract term listing situations that are not covered
claim reference number|理赔编号|the code that identifies an insurance claim
incident report deadline|事故报告期限|the latest time for telling an insurer about an event
excess payment amount|免赔额金额|the part of a claim the policyholder must pay
no-claims discount|无理赔优惠|a lower price earned by not making claims
policy renewal quote|保单续保报价|the price offered for continuing an insurance policy
damage evidence photo|损失证据照片|a photograph that records damage for a claim
repair cost estimate|维修费用估算|a professional prediction of what a repair will cost
temporary accommodation cover|临时住宿保障|insurance that pays for somewhere to stay after damage
emergency contact list|紧急联系人清单|the people to call when something serious happens
power outage plan|停电应对计划|the steps a household follows during an electricity cut
burst pipe response|水管爆裂处置|the immediate actions taken when a pipe breaks
smoke alarm test|烟雾报警器测试|a regular check that a smoke detector works
evacuation meeting point|疏散集合点|the agreed place to gather after leaving a building
severe weather warning|恶劣天气预警|an official alert about dangerous weather
document backup copy|重要文件备份|a spare copy of important papers kept safely
replacement value proof|重置价值证明|evidence of what it costs to replace an insured item
liability cover limit|责任险赔付上限|the maximum an insurer pays for harm to others
claim decision appeal|理赔决定申诉|a formal request to reconsider a rejected claim
fraud prevention check|欺诈防范核查|a control that confirms a claim is genuine
policy cooling-off period|保单犹豫期|the days during which a new policy can be cancelled freely
premium payment schedule|保费缴纳计划|the timetable of payments for insurance cover
loss adjuster visit|理赔核损员上门|an inspection by the insurer's damage assessor
incident timeline record|事件时间线记录|a dated list of what happened and when`),

    group("数字账户与在线服务", "B1", `
two-step verification setup|两步验证设置|adding a second check to protect an online account
password manager vault|密码管理器保险库|the encrypted store where a password tool keeps logins
account recovery option|账户找回选项|a method for regaining access to a locked account
subscription renewal date|订阅续费日期|the day a paid service charges again
free trial expiry|免费试用到期|the moment a no-cost period ends
data download request|数据下载请求|asking a service for a copy of your stored information
privacy setting review|隐私设置检查|examining what personal information a service shares
cookie preference choice|Cookie偏好选择|the decision about which tracking files a site may use
phishing email sign|钓鱼邮件特征|a clue that a message is trying to steal information
software update prompt|软件更新提示|a notice asking the user to install a newer version
cloud storage quota|云存储配额|the amount of online space an account may use
file sharing permission|文件共享权限|the level of access granted to a shared document
video call background|视频通话背景|the visible area behind a person on a call
message read receipt|消息已读回执|the indicator showing a message has been seen
account deletion process|账户注销流程|the steps for permanently closing an online account
service status page|服务状态页面|a page showing whether an online service is working
help centre article|帮助中心文章|a written guide answering a common service question
live chat support queue|在线客服排队|the waiting line for real-time help messages
refund eligibility rule|退款资格规则|the conditions deciding whether money can be returned
device login history|设备登录历史|a record of which devices accessed an account
app permission audit|应用权限审查|checking which phone functions an app may use
spam filter setting|垃圾邮件过滤设置|the control deciding which messages are blocked
digital receipt archive|电子票据存档|an organised store of electronic proof of purchase
screen time report|屏幕使用时间报告|a summary of how long devices were used
offline backup routine|离线备份习惯|a regular practice of copying data to local storage`),

    group("社区参与与志愿服务", "B1", `
community notice board|社区公告栏|a public board sharing local news and events
residents association meeting|业主委员会会议|a gathering of people who live in the same area
volunteer sign-up sheet|志愿者报名表|a form for offering unpaid help
neighbourhood watch scheme|邻里守望计划|a local group that helps keep an area safe
glass recycling point|玻璃回收点|a public container where glass is left for recycling
bulky waste booking|大件垃圾清运预约|arranging removal of large unwanted items
community garden plot|社区花园地块|a small piece of shared land for growing plants
local library card|本地图书馆借书证|the card that allows borrowing from a nearby library
free language exchange|免费语言交换|an event where people practise each other's languages
charity shop donation|慈善商店捐赠|giving unwanted goods to a shop that funds good causes
food bank contribution|食物银行捐助|food or money given to help people in need
street clean-up event|街道清洁活动|an organised effort to tidy a public area
noise complaint procedure|噪音投诉流程|the official way to report disturbing noise
local council consultation|地方议会意见征询|a process inviting residents to comment on plans
petition signature drive|联署签名活动|an organised effort to collect names supporting a cause
community centre timetable|社区中心时间表|the schedule of activities at a local shared venue
first aid training session|急救培训课程|a class teaching basic emergency care
lost pet notice|寻宠启事|a public message about a missing animal
car sharing scheme|拼车计划|an arrangement for neighbours to share journeys
tool lending library|工具借用站|a service that lends equipment instead of selling it
elderly neighbour check|独居老人探访|a regular visit to make sure an older resident is well
festival stall booking|节日摊位预订|reserving a table at a community celebration
youth mentoring programme|青少年导师计划|a scheme pairing young people with supportive adults
donation receipt record|捐赠收据记录|written proof of a charitable gift
accessibility improvement request|无障碍改善请求|asking for changes that help people with disabilities`),

    group("继续教育与考试准备", "B1", `
evening course enrolment|夜校课程报名|registering for classes held after work
course fee instalment|课程费用分期|paying for a course in several parts
placement test result|分级测试结果|the score that decides a learner's starting level
study group schedule|学习小组时间表|the agreed meeting times of people studying together
past paper practice|真题练习|working through questions from earlier exams
mock exam feedback|模拟考试反馈|comments on performance in a practice test
exam registration deadline|考试报名截止日|the last day to sign up for an examination
identification requirement list|考试证件要求清单|the documents needed to enter an exam room
listening section strategy|听力部分策略|a planned approach to the listening part of a test
speaking partner practice|口语搭档练习|rehearsing spoken answers with another learner
writing task checklist|写作任务检查单|the points to confirm before submitting written work
time management drill|时间管理训练|an exercise in finishing tasks within limits
score report explanation|成绩报告解读|help understanding what an exam result means
certificate collection notice|证书领取通知|a message saying a qualification is ready
resit application window|补考申请时段|the period for booking another attempt at an exam
scholarship application essay|奖学金申请文书|the written statement supporting a funding request
reference letter request|推荐信请求|asking someone to write in support of an application
personal statement draft|个人陈述草稿|an early version of an application essay
credit transfer enquiry|学分转换咨询|a question about counting previous study toward a course
distance learning platform|远程学习平台|the online system used for studying from home
tutorial attendance record|辅导课出勤记录|a log of presence at small-group teaching sessions
assignment extension request|作业延期申请|asking for more time to submit work
plagiarism policy briefing|学术抄袭政策说明|an explanation of rules about copying work
graduation requirement audit|毕业要求核查|a check of what remains before finishing a course
lifelong learning plan|终身学习计划|a long-term personal plan for continuing education`),

    group("商务演示与说服表达", "B2", `
executive summary slide|管理层摘要页|a single slide stating the key message for leaders
audience analysis note|听众分析笔记|preparation notes about who will hear a presentation
opening hook statement|开场吸引句|a first sentence designed to win attention
data visualisation choice|数据可视化选择|the decision about how to display figures clearly
key takeaway message|核心要点信息|the single idea listeners should remember
supporting evidence source|支撑证据来源|the origin of facts used in an argument
counterargument acknowledgement|对立观点回应|recognising and answering an opposing view
persuasive call to action|有说服力的行动号召|a clear request for the audience to act
question-handling technique|问答应对技巧|a method for responding well to audience questions
presentation dry run|演示彩排|a full practice delivery before the real event
slide design consistency|幻灯片设计一致性|uniform fonts colours and layout across slides
speaking pace control|语速控制|managing how quickly words are delivered
audience engagement signal|听众参与信号|a sign showing listeners are following and interested
objection response framework|异议应对框架|a structured way to answer doubts
stakeholder priority map|利益相关方优先级图|a chart of who matters most to a proposal
benefit-oriented phrasing|利益导向表达|wording that stresses what listeners gain
credibility building reference|可信度建立引用|a citation that strengthens the speaker's authority
concise answer discipline|简洁回答自律|the habit of keeping replies short and focused
follow-up commitment summary|后续承诺总结|a closing list of promised next steps
virtual presentation etiquette|线上演示礼仪|polite professional behaviour when presenting remotely
technical failure backup|技术故障备份方案|a prepared alternative if equipment stops working
storytelling structure arc|叙事结构弧线|the beginning middle and end shape of a business story
comparison table clarity|对比表清晰度|how easily a comparison chart can be understood
negotiation anchor point|谈判锚点|the first figure that shapes later bargaining
decision deadline framing|决策期限表述|presenting a time limit in a fair persuasive way`),

    group("数据隐私与合规沟通", "B2", `
personal data inventory|个人数据清单|a record of what personal information an organisation holds
lawful basis explanation|合法处理依据说明|the stated legal reason for using personal data
consent withdrawal route|同意撤回途径|the way a person can stop agreed data use
data minimisation principle|数据最小化原则|collecting only the information genuinely needed
retention period policy|数据保留期限政策|rules about how long information is kept
breach notification duty|数据泄露通报义务|the obligation to report a security incident
subject access request|个人数据查询请求|a formal request to see the data held about oneself
anonymised data set|匿名化数据集|information processed so individuals cannot be identified
third-party processor list|第三方处理者清单|the outside companies that handle data for an organisation
cross-border transfer safeguard|跨境传输保障措施|protection applied when data leaves a country
privacy impact assessment|隐私影响评估|a structured review of risks before a new data use
role-based access control|基于角色的访问控制|limiting information access according to job need
audit trail completeness|审计记录完整性|whether records fully show who did what and when
encryption key management|加密密钥管理|the secure handling of the keys that protect data
incident escalation matrix|事件升级矩阵|the chart showing who must be told as severity grows
regulator enquiry response|监管问询回复|a formal answer to questions from an authority
compliance training completion|合规培训完成率|the share of staff who finished required training
vendor due diligence|供应商尽职调查|checking a supplier's reliability before signing
whistleblowing channel|内部举报渠道|a safe route for reporting wrongdoing
conflict of interest declaration|利益冲突申报|a statement of personal interests that may affect duties
record-keeping obligation|记录保存义务|the duty to keep accurate documentation
plain-language privacy notice|通俗易懂的隐私声明|a data-use explanation written for ordinary readers
policy exception approval|政策例外审批|formal permission to depart from a standard rule
periodic access review|定期权限复核|a scheduled check that access rights are still appropriate
ethics committee referral|伦理委员会提交|sending a difficult question to an ethics review group`)
  ];

  const usageProfiles = Object.freeze({
    "银行与个人理财": Object.freeze({ collocation: (word) => `ask the bank about the ${word}`, example: (word) => `The bank adviser explained why the ${word} mattered for new customers.`, exampleZh: (definition) => `银行顾问解释了为什么${definition}对新客户很重要。` }),
    "就医与健康服务": Object.freeze({ collocation: (word) => `ask the nurse about the ${word}`, example: (word) => `The nurse explained the ${word} before my appointment.`, exampleZh: (definition) => `就诊前，护士向我说明了${definition}。` }),
    "出行与旅行安排": Object.freeze({ collocation: (word) => `look up the ${word}`, example: (word) => `The travel guide mentioned the ${word} in its planning section.`, exampleZh: (definition) => `旅行指南在行程规划部分提到了${definition}。` }),
    "餐饮与社交活动": Object.freeze({ collocation: (word) => `talk about the ${word}`, example: (word) => `We talked about the ${word} before the gathering.`, exampleZh: (definition) => `聚会前，我们谈到了${definition}。` }),
    "保险与突发应对": Object.freeze({ collocation: (word) => `go through the ${word}`, example: (word) => `The insurance adviser walked me through the ${word} step by step.`, exampleZh: (definition) => `保险顾问逐步向我讲解了${definition}。` }),
    "数字账户与在线服务": Object.freeze({ collocation: (word) => `read about the ${word}`, example: (word) => `The support article described the ${word} clearly.`, exampleZh: (definition) => `帮助文章清楚地描述了${definition}。` }),
    "社区参与与志愿服务": Object.freeze({ collocation: (word) => `hear about the ${word}`, example: (word) => `Our neighbour introduced the ${word} at the community meeting.`, exampleZh: (definition) => `邻居在社区会议上介绍了${definition}。` }),
    "继续教育与考试准备": Object.freeze({ collocation: (word) => `plan around the ${word}`, example: (word) => `My tutor reminded me about the ${word} last week.`, exampleZh: (definition) => `上周，辅导老师提醒我注意${definition}。` }),
    "商务演示与说服表达": Object.freeze({ collocation: (word) => `work on the ${word}`, example: (word) => `The coach analysed the ${word} after my rehearsal.`, exampleZh: (definition) => `彩排结束后，教练分析了${definition}。` }),
    "数据隐私与合规沟通": Object.freeze({ collocation: (word) => `document the ${word}`, example: (word) => `The compliance officer documented the ${word} for the annual review.`, exampleZh: (definition) => `合规专员为年度审查记录了${definition}。` })
  });

  const rows = [];
  groups.forEach((entryGroup) => {
    const usage = usageProfiles[entryGroup.topic];
    if (!usage) throw new Error(`Missing usage profile for ${entryGroup.topic}.`);
    entryGroup.entries.forEach(([word, definition, definitionEn]) => {
      rows.push(Object.freeze({
        id: `vx4500-${String(rows.length + 1).padStart(4, "0")}`,
        word,
        phonetic: "audio available",
        partOfSpeech: "noun phrase",
        definition,
        definitionEn,
        collocation: usage.collocation(word),
        example: usage.example(word),
        exampleZh: usage.exampleZh(definition),
        topic: entryGroup.topic,
        level: entryGroup.level
      }));
    });
  });

  if (rows.length !== 250) {
    throw new Error(`Expected 250 v4500 vocabulary rows, received ${rows.length}.`);
  }

  window.ENGLISH_COMPASS_VOCABULARY_EXPANSION_V4500 = Object.freeze(rows);
})();

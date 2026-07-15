// English Compass v1.11 self-authored overseas work and communication vocabulary.
(function () {
  "use strict";

  const group = (topic, level, raw) => Object.freeze({
    topic,
    level,
    entries: Object.freeze(raw.trim().split("\n").map((line) => Object.freeze(line.split("|"))))
  });

  const groups = [
    group("求职与面试基础", "A2", `
job vacancy notice|职位空缺通知|a public message that describes an available job
application closing date|申请截止日期|the final day on which an employer accepts applications
basic role requirements|基本岗位要求|the main skills or conditions needed for a job
short personal introduction|简短自我介绍|a brief explanation of who you are and what you do
recent work example|近期工作实例|a true example from work that happened not long ago
customer service experience|客户服务经验|experience gained from helping or supporting customers
interview time confirmation|面试时间确认|a message that verifies when an interview will take place
video interview link|视频面试链接|the web address used to join an online interview
suitable interview outfit|合适的面试着装|clothing that is appropriate for a job interview
printed résumé copy|打印的简历副本|a paper version of a job applicant's résumé
contact details section|联系方式部分|the part of a form that lists ways to contact someone
available start date|可入职日期|the earliest date on which a candidate can begin work
expected weekly hours|预计每周工时|the number of hours a person is expected to work each week
preferred work location|首选工作地点|the place where a person would most like to work
right-to-work document|工作权利证明文件|an official document showing permission to work in a country
reference contact name|推荐人姓名|the name of a person an employer may contact for a reference
simple interview answer|简洁的面试回答|a clear and uncomplicated response to an interview question
follow-up thank-you email|面试后致谢邮件|a polite email sent after an interview to express thanks
entry-level position|入门级职位|a job intended for someone with limited professional experience
part-time work schedule|兼职工作安排|a timetable for a job with fewer than full-time hours
full-time contract|全职合同|an employment agreement for full-time work
training opportunity|培训机会|a chance to learn skills needed for work
trial shift details|试岗班次详情|information about a short period of work used to assess suitability
workplace tour|工作场所参观|a guided visit around the place where a job is done
recruitment contact|招聘联系人|the person who answers questions about a hiring process`),

    group("海外工作日常", "A2", `
staff entrance pass|员工入口通行证|a pass that allows an employee to use the staff entrance
employee locker number|员工储物柜编号|the identifying number of a locker assigned to a worker
shift handover note|交接班记录|a short written update for the worker taking over a shift
daily task list|每日任务清单|a list of work that should be completed during the day
team noticeboard|团队公告栏|a board where workplace updates are displayed
break-room rules|休息室规则|guidelines for using a shared staff rest area
lunch break time|午休时间|the scheduled period when an employee stops work for lunch
uniform size form|制服尺码表|a form used to request work clothing in the correct size
safety induction session|安全入职培训|an introductory meeting about workplace safety
payroll account details|工资账户信息|bank information used by an employer to pay wages
weekly rota update|每周排班更新|a change or new version of the weekly work schedule
overtime request form|加班申请表|a form used to ask for or record extra working hours
sick-day phone number|病假联系电话|the number an employee calls when unable to work because of illness
workplace emergency exit|工作场所紧急出口|a marked way out of a building during an emergency
supervisor contact number|主管联系电话|the telephone number used to reach a direct manager
colleague name badge|同事姓名牌|a badge that shows a coworker's name
shared kitchen shelf|共用厨房置物架|a shelf used by several employees in a workplace kitchen
staff discount card|员工折扣卡|a card that gives employees a reduced price
commuter benefit|通勤福利|support from an employer for the cost of travelling to work
public holiday schedule|公共假日安排|a timetable showing workplace opening and shifts on public holidays
probation review date|试用期评估日期|the planned day for reviewing a new employee's progress
clock-in procedure|打卡流程|the steps used to record the beginning of a work shift
basic equipment checklist|基础设备检查表|a list used to confirm that necessary work tools are ready
end-of-shift report|下班前工作报告|a summary of events and unfinished tasks at the end of a shift
workplace language class|职场语言课程|a course that helps employees communicate in the local workplace language`),

    group("租房与入住", "A2", `
rental viewing appointment|租房看房预约|an arranged time to inspect a home that is available to rent
furnished studio flat|带家具的单间公寓|a small one-room home supplied with furniture
monthly rent amount|每月租金金额|the sum of money paid for housing each month
refundable holding deposit|可退还的留房订金|money paid to reserve a rental home that can be returned under agreed conditions
landlord contact details|房东联系方式|information used to contact the owner of a rented home
tenant reference check|租客背景推荐核验|a check of information provided about a prospective tenant
shared utility bill|合摊的水电账单|a household service bill divided among several residents
council tax estimate|地方税估算|an expected amount of local housing tax
internet installation date|网络安装日期|the day on which home internet service will be installed
inventory condition report|房屋物品状况报告|a record of the condition of items in a rental property
existing wall damage|原有墙面损坏|damage to a wall that was present before a tenant moved in
key collection time|领取钥匙时间|the agreed time when a tenant receives the keys
building access fob|楼宇门禁扣|a small electronic device used to enter a building
quiet-hours policy|安静时段规定|rules that limit noise during particular hours
guest stay rule|访客留宿规定|a condition that controls how long guests may stay
bicycle storage area|自行车存放区|a designated place for residents to keep bicycles
nearest grocery shop|最近的杂货店|the food shop located closest to a home
late rent fee|逾期租金费用|an extra charge for paying rent after the due date
rent payment reference|租金付款备注码|identifying text added to a rent payment
landlord repair hotline|房东维修热线|a telephone service for reporting problems in a rental home
heating control panel|暖气控制面板|a device used to set or schedule home heating
window safety lock|窗户安全锁|a lock that prevents a window from opening unsafely
communal cleaning schedule|公共区域清洁安排|a timetable for cleaning areas shared by residents
end-of-tenancy inspection|退租检查|a check of a rental property when a tenancy ends
forwarding address form|转寄地址表|a form that gives the address to use after someone moves out`),

    group("公共服务办理", "B1", `
residency appointment slot|居留事务预约时段|an available time for an official residency appointment
local registration form|当地登记表|an official form used to register with a local authority
certified document copy|经认证的文件副本|a copy formally confirmed as matching the original document
application tracking number|申请追踪编号|a unique number used to check the progress of an application
proof of identity check|身份证明核验|a process that confirms a person's identity
interpreter booking request|口译员预约申请|a request to arrange language support for an appointment
accessible service counter|无障碍服务柜台|a public service desk designed for people with access needs
queue ticket number|排队号码|a number showing a person's place in a service queue
eligibility assessment|资格评估|a review that decides whether someone meets the conditions for a service
processing-time estimate|办理时间预估|an approximate period needed to complete an official request
missing-document notice|缺失文件通知|a message explaining that an application lacks required evidence
fee waiver request|费用减免申请|a formal request not to pay a charge because of eligible circumstances
official decision letter|正式决定函|a written notice stating the outcome of an official process
appeal submission deadline|申诉提交截止日期|the final date for challenging an official decision
caseworker contact details|经办人员联系方式|information used to reach the official handling a case
online identity account|在线身份账户|a secure digital account used to access public services
address change notification|地址变更通知|an official message reporting a new home address
replacement permit request|补发许可证申请|an application for a new copy of a lost or damaged permit
benefit payment date|福利金发放日期|the day on which a public benefit is paid
municipal service portal|市政服务平台|a website that provides services from a local authority
public records request|公共记录查询申请|a formal request to access information held by a public body
voter registration guidance|选民登记指南|official instructions for joining the electoral register
library residency proof|图书馆居住证明|evidence of a local address required for some library services
childcare support application|育儿补助申请|a request for public help with childcare costs or services
local emergency alert|当地紧急警报|an official warning about an immediate risk in the local area`),

    group("远程协作", "B1", `
asynchronous status update|异步状态更新|a progress report that teammates can read at different times
shared working-hour window|共同工作时段|a period when team members in different locations are all working
recorded meeting summary|录制会议摘要|a concise account of a meeting saved for later viewing
decision log entry|决策日志条目|a written record of a decision and the reason behind it
task dependency map|任务依赖关系图|a visual record showing which tasks rely on other tasks
project handoff checklist|项目交接清单|a list used to transfer work and context to another person
response-time expectation|回复时效预期|an agreed period within which a message should receive a response
focus-time calendar block|专注时间日历区块|reserved calendar time for uninterrupted work
remote onboarding plan|远程入职计划|a structured programme for welcoming a new remote employee
virtual office hour|线上答疑时段|a regular online period when a colleague is available for questions
team availability status|团队成员在线状态|an indicator showing when a teammate can be contacted
screen-sharing permission|屏幕共享权限|approval that allows a participant to display their screen
collaborative whiteboard session|协作白板会议|an online meeting in which participants develop ideas visually
document comment thread|文档评论串|a connected discussion attached to part of a shared document
time-zone overlap|时区重叠时段|hours when people in different time zones are simultaneously available
meeting-free afternoon|无会议下午|an afternoon protected from scheduled meetings
reliable backup connection|可靠的备用网络连接|a second internet connection available if the main one fails
access request ticket|访问权限工单|a formal request for permission to use a digital system
remote security briefing|远程安全说明会|training about protecting information while working away from an office
camera-optional policy|摄像头自愿开启政策|a rule that lets meeting participants choose whether to use video
online workshop agenda|在线研讨会议程|a plan of topics and activities for a virtual workshop
action-owner label|行动负责人标签|a marker identifying who is responsible for a task
weekly progress digest|每周进展摘要|a short weekly summary of important project updates
distributed review cycle|分布式评审周期|a review process completed by colleagues in different locations
virtual team celebration|线上团队庆祝活动|an online event recognising a team achievement`),

    group("跨文化沟通", "B1", `
local communication style|当地沟通方式|the common way people exchange information in a particular place
preferred name pronunciation|姓名首选读音|the way a person would like others to pronounce their name
respectful form of address|尊重的称呼方式|a polite title or name used when speaking to someone
indirect disagreement signal|委婉异议信号|a subtle expression showing that someone does not agree
direct feedback preference|直接反馈偏好|a person's preference for clear and explicit comments
turn-taking convention|轮流发言惯例|an understood rule about when each person speaks
cultural holiday calendar|文化节日日历|a calendar that records important holidays across cultures
language-support buddy|语言互助伙伴|a colleague who helps someone communicate in a less familiar language
plain-English summary|简明英语摘要|a summary written in clear language without unnecessary complexity
inclusive meeting opening|包容性的会议开场|a beginning that helps every participant feel welcome and able to join
nonverbal communication cue|非语言沟通信号|meaning conveyed through gesture expression or body language
relationship-building time|建立关系的时间|time deliberately used to develop trust between people
local business etiquette|当地商务礼仪|accepted professional behaviour in a particular culture
translation context note|翻译语境说明|extra information that helps a translator convey the intended meaning
culturally appropriate example|文化上恰当的例子|an example suited to the values and experience of its audience
pronunciation clarification|发音澄清|a polite explanation or question about how a word or name is said
shared terminology list|共享术语表|an agreed list of terms used consistently by a team
communication assumption check|沟通假设核对|a deliberate check that people interpret a message in the same way
respectful follow-up question|尊重的追问|a polite question used to gain more context or understanding
regional date format|地区日期格式|the order in which day month and year are written in a region
name order convention|姓名顺序惯例|the customary order of family and given names
humour across cultures|跨文化幽默|humour considered in relation to different cultural expectations
inclusive social event|包容性的社交活动|an event planned so that people with different needs can participate
dietary requirement note|饮食需求说明|a record of food restrictions or preferences that should be respected
intercultural learning goal|跨文化学习目标|a specific ability someone aims to develop when working across cultures`),

    group("职业发展与反馈", "B1", `
quarterly growth goal|季度成长目标|a professional development target for a three-month period
transferable skill example|可迁移技能实例|an example showing a skill that is useful in different roles
measurable performance evidence|可衡量的绩效证据|facts or results that demonstrate work performance objectively
mentoring session agenda|导师辅导议程|a plan for the topics discussed in a mentoring meeting
stretch assignment request|挑战性任务申请|a request for work that develops abilities beyond current duties
training budget allowance|培训预算额度|money made available for an employee's learning
course completion certificate|课程结业证书|a document confirming that someone finished a course
internal mobility option|内部流动机会|a possibility of moving to another role within the same organisation
promotion readiness criteria|晋升准备度标准|conditions used to judge whether someone is prepared for promotion
constructive feedback note|建设性反馈记录|written feedback that identifies strengths and useful improvements
peer recognition message|同事认可信息|a message that acknowledges a colleague's contribution
development action plan|发展行动计划|a set of practical steps for building professional skills
competency gap review|能力差距评估|an assessment of the difference between current and required skills
career conversation record|职业发展谈话记录|a written summary of a discussion about career direction
leadership shadowing opportunity|领导岗位跟岗机会|a chance to observe a leader's work directly
portfolio evidence folder|作品集证据文件夹|an organised collection of work that demonstrates ability
professional certification path|职业认证路径|a planned sequence for gaining a recognised qualification
networking introduction|人脉引荐|an introduction that connects professionals who may help each other
learning progress checkpoint|学习进度检查点|a scheduled moment for reviewing development progress
role expansion proposal|职责扩展提案|a suggestion to add meaningful responsibilities to a role
feedback follow-up date|反馈跟进日期|an agreed time to review action taken after feedback
skills matrix update|技能矩阵更新|a revision of a table showing abilities across a team
achievement summary|工作成就摘要|a concise record of important results someone has delivered
workload balance discussion|工作量平衡讨论|a conversation about distributing work sustainably
long-term career direction|长期职业方向|the broad professional path someone intends to pursue`),

    group("面试策略与待遇协商", "B2", `
total compensation package|整体薪酬方案|the combined value of salary benefits bonuses and other rewards
salary range midpoint|薪资范围中位值|the figure halfway between the minimum and maximum salary offered
relocation support allowance|搬迁补助|money provided to help an employee move for a job
flexible working arrangement|灵活工作安排|an agreement that varies where or when an employee works
annual leave entitlement|年假权益|the amount of paid holiday an employee has a right to take
notice-period flexibility|离职通知期灵活性|willingness to adjust the required time before employment ends
probation length proposal|试用期时长提议|a suggested duration for the initial assessment period of employment
performance bonus criteria|绩效奖金标准|the conditions that determine whether a bonus is earned
remote-work equipment budget|远程办公设备预算|money provided for tools needed to work remotely
visa sponsorship condition|签证担保条件|a requirement connected with an employer supporting a work visa
professional development allowance|职业发展津贴|funding provided for courses qualifications or conferences
review-after-six-months clause|六个月后复审条款|a contract term requiring a formal review after six months
written offer clarification|书面录用条件澄清|a precise explanation requested about terms in a job offer
competing deadline disclosure|其他录用期限说明|a transparent statement that another offer has a response deadline
evidence-based salary request|有依据的薪资请求|a salary proposal supported by relevant results and market information
fallback negotiation position|协商退让底线|an acceptable alternative if a preferred negotiation outcome is unavailable
non-salary benefit priority|非薪资福利优先项|a benefit other than salary that matters most to a candidate
start-date trade-off|入职日期权衡|a compromise involving the date on which employment begins
responsibility-to-title alignment|职责与职称匹配|consistency between actual duties and the title of a role
market salary benchmark|市场薪资基准|reliable pay data used to compare a proposed salary
cost-of-living adjustment|生活成本调整|a pay change intended to reflect differences in living expenses
contract amendment request|合同修订请求|a formal request to change a term in an agreement
confidentiality clause review|保密条款审阅|a careful examination of a contract term about private information
offer acceptance deadline|录用接受截止时间|the final time by which a candidate must accept a job offer
respectful counteroffer|尊重且专业的还价|a professional proposal that asks an employer to improve an offer`),

    group("分布式团队治理", "B2", `
follow-the-sun workflow|跨时区接力工作流|a process in which work moves between regions as each workday begins
cross-region escalation path|跨区域升级路径|an agreed route for raising urgent issues across locations
asynchronous approval rule|异步审批规则|a rule allowing decisions without everyone meeting at the same time
source-of-truth repository|权威信息库|the agreed location containing the most reliable current information
documented decision rationale|有记录的决策依据|a written explanation of why a decision was made
meeting necessity test|会议必要性判断|a check of whether a live meeting is genuinely required
handoff quality standard|交接质量标准|the level of context and accuracy required when transferring work
remote access control|远程访问控制|rules and systems governing access from outside an office
regional coverage plan|区域覆盖计划|an arrangement ensuring service across several locations or time zones
distributed incident response|分布式事件响应|coordinated handling of a problem by teams in different places
time-zone-fair rotation|时区公平轮值|a schedule that shares inconvenient meeting times across regions
operational ownership boundary|运营责任边界|a clear limit defining which team owns a process or decision
cross-team dependency register|跨团队依赖登记表|a maintained record of work that relies on another team
service-level commitment|服务水平承诺|an agreed standard for response quality or timing
delayed-response protocol|延迟回复处理规程|an agreed process used when a responsible person cannot reply promptly
change-approval threshold|变更审批门槛|the level of impact at which a change needs formal approval
virtual facilitation role|线上会议主持角色|responsibility for keeping a remote discussion balanced and productive
remote audit trail|远程审计记录链|a traceable record of actions and decisions made through digital systems
collaboration-tool retention rule|协作工具留存规则|a policy defining how long messages and files are kept
access revocation workflow|权限撤销流程|the steps for removing system access when it is no longer needed
distributed risk review|分布式风险评审|a risk assessment involving relevant people across locations
communication channel hierarchy|沟通渠道层级|an agreed order for choosing among messaging email calls and alerts
decision-reversal process|决策撤回流程|a transparent method for reconsidering and changing an earlier decision
knowledge-transfer cadence|知识传递节奏|the regular frequency at which important knowledge is shared
remote continuity exercise|远程连续性演练|a test of whether distributed work can continue during disruption`),

    group("跨文化领导与包容", "B2", `
psychological safety signal|心理安全信号|behaviour showing that questions concerns and mistakes may be discussed openly
inclusive decision process|包容性决策流程|a method that gives affected groups a meaningful voice in decisions
cultural intelligence practice|文化智力实践|a deliberate habit that improves effective work across cultures
bias-aware interview panel|具备偏见意识的面试小组|interviewers trained to notice and reduce unfair assumptions
equitable speaking time|公平发言时间|a balanced opportunity for participants to contribute to discussion
multilingual participation option|多语言参与选项|a way for people to contribute using more than one language
local-context consultation|当地语境咨询|advice from people who understand the setting affected by a decision
respectful challenge culture|尊重质疑的文化|an environment where people may question ideas without attacking others
identity-safe feedback|身份友好的反馈|feedback delivered without stereotyping or threatening someone's identity
belonging pulse survey|归属感脉冲调查|a short regular survey measuring whether people feel included
accessibility-by-default rule|默认无障碍规则|a requirement to make ordinary processes accessible from the start
culturally responsive leadership|文化响应型领导|leadership that adapts appropriately to different cultural contexts
inclusive conflict mediation|包容性冲突调解|a fair process for resolving disagreement across different perspectives
power-distance awareness|权力距离意识|understanding of how attitudes to hierarchy vary between cultures
underrepresented voice check|弱代表群体意见核对|a check that perspectives often missing from decisions have been heard
regional stakeholder mapping|区域利益相关方图谱|an analysis of people and groups affected in different locations
inclusive succession plan|包容性继任计划|a leadership pipeline designed to provide fair opportunities
cross-cultural sponsorship|跨文化职业举荐|active career advocacy for someone across cultural or regional boundaries
fair opportunity allocation|公平机会分配|a transparent distribution of valuable projects and development chances
religious accommodation process|宗教需求调整流程|a method for responding reasonably to religion-related workplace needs
caregiver-friendly scheduling|照护者友好的排班|work scheduling that considers employees with caring responsibilities
culturally neutral evaluation|文化中性的评价|assessment designed to avoid rewarding one cultural style unfairly
translation quality governance|翻译质量治理|standards and accountability for accurate inclusive multilingual content
community impact review|社区影响审查|an assessment of how a decision may affect local communities
global-local balance|全球与本地平衡|an approach that combines consistent global standards with local needs`)
  ];

  const usageProfiles = Object.freeze({
    "求职与面试基础": Object.freeze({ collocation: (word) => `discuss the ${word}`, example: (word) => `The career adviser explained why the ${word} mattered during the application process.`, exampleZh: (definition) => `职业顾问解释了为什么${definition}在申请过程中很重要。` }),
    "海外工作日常": Object.freeze({ collocation: (word) => `check the ${word}`, example: (word) => `I checked the ${word} during my first week at work.`, exampleZh: (definition) => `入职第一周，我查看了${definition}。` }),
    "租房与入住": Object.freeze({ collocation: (word) => `ask about the ${word}`, example: (word) => `I asked the agent about the ${word} before I signed the lease.`, exampleZh: (definition) => `签租约前，我向中介询问了${definition}。` }),
    "公共服务办理": Object.freeze({ collocation: (word) => `ask about the ${word}`, example: (word) => `I asked the adviser about the ${word} before submitting my request.`, exampleZh: (definition) => `提交申请前，我向顾问询问了${definition}。` }),
    "远程协作": Object.freeze({ collocation: (word) => `agree on the ${word}`, example: (word) => `The remote team agreed on the ${word} before the project started.`, exampleZh: (definition) => `项目开始前，远程团队就${definition}达成了共识。` }),
    "跨文化沟通": Object.freeze({ collocation: (word) => `discuss the ${word}`, example: (word) => `The workshop discussed the ${word} through a workplace example.`, exampleZh: (definition) => `研讨会通过职场实例讨论了${definition}。` }),
    "职业发展与反馈": Object.freeze({ collocation: (word) => `review the ${word}`, example: (word) => `My manager reviewed the ${word} during our development meeting.`, exampleZh: (definition) => `经理在发展会议中审视了${definition}。` }),
    "面试策略与待遇协商": Object.freeze({ collocation: (word) => `consider the ${word}`, example: (word) => `We considered the ${word} before responding to the offer.`, exampleZh: (definition) => `回复录用条件前，我们考虑了${definition}。` }),
    "分布式团队治理": Object.freeze({ collocation: (word) => `document the ${word}`, example: (word) => `The project lead documented the ${word} for every region.`, exampleZh: (definition) => `项目负责人为各区域记录了${definition}。` }),
    "跨文化领导与包容": Object.freeze({ collocation: (word) => `review the ${word}`, example: (word) => `The leadership group reviewed the ${word} before making a decision.`, exampleZh: (definition) => `作出决定前，领导团队审视了${definition}。` })
  });

  const rows = [];
  groups.forEach((entryGroup) => {
    const usage = usageProfiles[entryGroup.topic];
    if (!usage) throw new Error(`Missing usage profile for ${entryGroup.topic}.`);
    entryGroup.entries.forEach(([word, definition, definitionEn]) => {
      rows.push(Object.freeze({
        id: `vx4250-${String(rows.length + 1).padStart(4, "0")}`,
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
    throw new Error(`Expected 250 v4250 vocabulary rows, received ${rows.length}.`);
  }

  window.ENGLISH_COMPASS_VOCABULARY_EXPANSION_V4250 = Object.freeze(rows);
})();

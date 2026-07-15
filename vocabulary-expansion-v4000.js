// English Compass v1.10 self-authored practical vocabulary expansion.
(function () {
  "use strict";

  const group = (topic, level, partOfSpeech, mode, raw) => Object.freeze({
    topic,
    level,
    partOfSpeech,
    mode,
    entries: Object.freeze(raw.trim().split("\n").map((line) => Object.freeze(line.split("|"))))
  });

  const groups = [
    group("旅行与交通", "A2", "noun phrase", "noun", `
departure board|出发信息屏|a screen that lists when and where services leave
platform change|站台变更|a move from the planned platform to another one
connecting service|接驳班次|a second bus or train used to continue a journey
return fare|往返票价|the price of travelling to a place and back
advance seat reservation|提前座位预订|an arrangement that keeps a particular seat for a passenger before travel
carry-on allowance|随身行李限额|the amount of cabin luggage a traveller may take
baggage claim area|行李提取区|the place where passengers collect checked luggage
boarding deadline|登机截止时间|the latest time a passenger may enter a flight
traveller customs declaration|旅客海关申报|a form listing goods brought into a country by a traveller
universal travel adapter|通用旅行转换插头|a device that lets a plug fit several kinds of foreign socket
local time zone|当地时区|the standard time used in a particular region
one-way street|单行道|a street on which traffic moves in only one direction
pedestrian crossing|人行横道|a marked place where people can cross a road
cycle lane|自行车道|a part of the road reserved for bicycles
traffic diversion|交通改道|a temporary route around a closed road
roadside assistance|道路救援|help for a vehicle that has broken down
fuel station|加油站|a place where drivers buy fuel
parking meter|停车计时器|a machine used to pay for roadside parking
car rental desk|租车柜台|a service counter where travellers collect a hired car
airport shuttle|机场接驳车|a vehicle that regularly travels to and from an airport
tourist information desk|游客咨询台|a counter that gives visitors local advice
city travel pass|城市交通通票|a ticket that covers several journeys in a city
walking route|步行路线|a planned path to follow on foot
scenic viewpoint|观景点|a place chosen for a good view of the landscape
emergency exit row|紧急出口排座位|a row of aircraft seats next to an emergency exit`),

    group("住房与生活服务", "A2", "noun phrase", "noun", `
security deposit receipt|押金收据|a written record showing that a rental deposit was paid
utility account|水电账户|an account used to pay for household services
monthly meter reading|每月仪表读数|the number recorded from a gas water or electricity meter each month
urgent maintenance request|紧急维修申请|a message asking a landlord to repair an urgent problem
tenancy agreement|租赁协议|a contract between a tenant and a landlord
confirmed move-in date|已确认入住日期|the agreed day on which a tenant may enter a new home
minimum notice period|最短通知期限|the shortest required time between giving notice and leaving
shared entrance|共用入口|a doorway used by more than one household
storage cupboard|储物柜|a small enclosed space for keeping household items
smoke alarm battery|烟雾报警器电池|the battery that powers a smoke detector
water pressure|水压|the force with which water comes through a pipe
power outage notice|停电通知|information about an interruption to electricity service
recycling collection day|回收物收集日|the day on which recyclable waste is collected
bulky waste pickup|大件垃圾回收|a service that removes large unwanted household items
laundry cycle|洗衣程序|a programmed sequence used by a washing machine
drying rack|晾衣架|a frame used to dry clothes indoors
spare house key|备用房门钥匙|an extra key kept in case the main one is lost
door entry code|门禁密码|a number used to unlock a shared entrance
neighbourhood noticeboard|社区公告栏|a board displaying information for local residents
secure parcel locker|安全快递柜|a locked box where delivered parcels can be collected
home delivery slot|送货上门时段|a reserved period for a delivery to arrive
service appointment|上门服务预约|a planned time for a technician to visit
repair estimate|维修估价|an expected price for fixing something
extended warranty period|延长保修期|an additional time during which a seller promises to repair a product
replacement part|替换零件|a component used instead of a damaged one`),

    group("健康与就医", "A2", "noun phrase", "noun", `
appointment reminder|就诊提醒|a message sent before a planned medical visit
symptom diary|症状日记|a daily record of how symptoms change
medical history form|病史表|a form describing previous illnesses and treatment
routine prescription refill|常规处方续配|a regular new supply of medicine already prescribed
dosage instructions|剂量说明|directions explaining how much medicine to take
possible side effect|可能的副作用|an unwanted effect that a medicine may cause
allergy information|过敏信息|details about substances that cause a reaction
blood test result|验血结果|information produced by examining a blood sample
follow-up appointment|复诊预约|a later visit arranged to review progress
clinic waiting room|诊所候诊室|a place where patients sit before being seen at a clinic
local walk-in clinic|当地免预约诊所|a nearby clinic that accepts patients without appointments
valid health insurance card|有效医疗保险卡|a current card showing that a person has health cover
designated emergency contact|指定紧急联系人|the person chosen to call when urgent help is needed
short-term pain relief|短期止痛措施|medicine or treatment that reduces pain for a limited period
temperature check|体温检查|a measurement used to see whether someone has a fever
well-balanced meal|营养搭配良好的一餐|a meal containing a healthy mix of nutrients
regular bedtime routine|规律的睡前作息|a consistent pattern of preparing for sleep and going to bed
gentle exercise|温和运动|physical activity that does not place heavy strain on the body
recovery period|恢复期|the time needed to become well again
mobility aid|助行器具|equipment that helps a person move safely
hearing test|听力检查|an examination of how well someone can hear
eye examination|视力检查|a test of vision and eye health
dental check-up|牙科检查|a routine visit to examine teeth and gums
mental health support|心理健康支持|help for emotional or psychological difficulties
pharmacy counter|药房柜台|the service point where medicines are supplied`),

    group("学习与课堂", "A2", "noun phrase", "noun", `
course timetable|课程时间表|a schedule showing when lessons take place
assignment deadline|作业截止日期|the latest time at which work may be submitted
class discussion|课堂讨论|a conversation among students about a lesson topic
study partner|学习伙伴|someone who regularly studies with another person
revision plan|复习计划|an organised schedule for reviewing material
practice worksheet|练习题单|a sheet of exercises used to build a skill
annotated model answer|带批注的参考答案|an example with notes showing how a strong answer can be written
teacher feedback|教师反馈|comments from a teacher about a learner's work
learning objective|学习目标|a skill or piece of knowledge that a lesson aims to develop
reading strategy|阅读策略|a method used to understand a text more effectively
note-taking method|记笔记方法|a system for recording important information
learner pronunciation guide|学习者发音指南|information designed to show learners how words should be spoken
vocabulary notebook|单词本|a personal book used to record new words
online classroom|在线课堂|a digital space where teachers and students meet
group presentation|小组展示|a talk delivered by several students together
library catalogue|图书馆目录|a searchable list of materials held by a library
reference section|参考资料区|the part of a library containing materials for consultation
research question|研究问题|the main question that an investigation tries to answer
source evaluation|资料来源评估|the process of judging whether information is reliable
plagiarism policy|抄袭规定|rules explaining how sources must be acknowledged
office hours|答疑时间|a period when a teacher is available to help students
language exchange|语言交换|an activity where people practise each other's languages
mock exam|模拟考试|a practice test in the same style as a real examination
five-minute study break|五分钟学习休息|a five-minute rest taken during a study session
progress check|进度检查|a review of how much a learner has improved`),

    group("职场基础", "B1", "noun phrase", "noun", `
role description|岗位说明|a document explaining the duties of a job
end-of-probation review|试用期结束评估|a meeting that evaluates performance at the end of probation
structured shift handover|结构化交接班|an organised transfer of information between outgoing and incoming staff
staff briefing|员工简报会|a short meeting that gives workers essential updates
time-boxed meeting agenda|限时会议议程|a list that assigns a fixed discussion time to each meeting topic
assigned action item|已分配待办事项|a specific meeting task with a named owner
weekly project update|每周项目进展通报|a weekly report describing recent progress and next steps
workload balance|工作量平衡|a fair distribution of tasks among team members
annual leave request|年假申请|a formal request to take paid holiday
sick leave certificate|病假证明|a medical document supporting an absence from work
agreed flexible schedule|商定的弹性工作安排|working hours that can vary within agreed limits
secure remote access|安全远程访问|a protected way to use a workplace system from elsewhere
training session|培训课程|a planned period for learning job-related skills
performance goal|绩效目标|a measurable result an employee is expected to achieve
career pathway|职业发展路径|a sequence of roles through which a person can progress
salary band|薪资范围|a range of pay attached to a job level
benefits package|福利方案|the non-salary rewards offered with a job
workplace policy|工作场所政策|an official rule governing behaviour at work
safety procedure|安全流程|a series of actions designed to prevent harm
incident report|事故报告|a written record of an unusual or harmful event
equipment checklist|设备检查表|a list used to confirm that equipment is ready
visitor register|访客登记表|a record of people entering a workplace
staff directory|员工通讯录|a list of employees and their contact details
shared calendar|共享日历|a schedule that several team members can view
approved meeting minutes|已批准会议纪要|the reviewed official written record of a meeting`),

    group("客户与服务", "B1", "noun phrase", "noun", `
service enquiry|服务咨询|a request for information about a service
customer account|客户账户|a record containing a customer's details and activity
order confirmation|订单确认|a message showing that an order has been accepted
two-hour delivery window|两小时配送时段|a two-hour period in which a delivery is expected
parcel tracking number|包裹物流单号|a code used to follow a parcel's journey
prepaid return label|预付费退货标签|a label that lets a customer return an item without paying postage
documented refund request|有记录的退款申请|a recorded request to receive money back after a purchase
replacement order|补发订单|a new order sent instead of a faulty or missing one
complaint reference|投诉编号|a code that identifies a customer complaint
resolution time|解决时长|the amount of time needed to close a service case
service interruption|服务中断|a period when a service is unavailable
priority support|优先支持|faster help offered to particular customers
live chat agent|在线客服人员|a person who helps customers through a message service
callback request|回电请求|a request for a service team to telephone later
identity check|身份核验|a process used to confirm who a customer is
account security question|账户安全验证问题|a personal question used to protect an account
assisted account recovery|人工协助账户恢复|the process of regaining account access with support help
subscription renewal|订阅续费|the continuation of a paid service for another period
cancellation fee|取消费用|money charged for ending a booking or service
price adjustment|价格调整|a change made to the amount a customer must pay
product recall|产品召回|the return of goods because of a safety or quality problem
satisfaction survey|满意度调查|questions used to measure a customer's experience
service guarantee|服务保证|a formal promise about the standard of service
accessibility request|无障碍服务申请|a request for support that removes a barrier
case escalation|工单升级|the transfer of a difficult issue to a higher support level`),

    group("数字生活", "B1", "noun phrase", "noun", `
profile privacy setting|个人资料隐私设置|an option controlling who can see profile information
app-based two-factor authentication|基于应用的双重身份验证|a login method using an authenticator application as additional proof
single-use recovery code|一次性恢复代码|a backup code that can be used only once
encrypted password manager|加密密码管理器|software that stores account passwords in encrypted form
scheduled software update|计划内软件更新|a newer program version installed at an agreed time
critical security patch|关键安全补丁|an urgent update that corrects a serious security weakness
encrypted cloud backup|加密云端备份|a protected copy of data stored on a remote service
storage limit|存储上限|the maximum amount of data an account can hold
read-only file permission|只读文件权限|a rule that allows a file to be opened but not changed
shared link|共享链接|a web address that gives others access to content
protected download folder|受保护下载文件夹|a secured location where downloaded files are saved
accessibility browser extension|无障碍浏览器扩展|a small program that adds an accessibility feature to a browser
per-app notification setting|分应用通知设置|an option controlling alerts for one application
built-in screen reader|内置屏幕阅读器|software included with a device that reads on-screen content aloud
keyboard shortcut|键盘快捷键|a key combination that performs an action quickly
video call link|视频通话链接|a web address used to join an online meeting
microphone permission|麦克风权限|approval for an application to use audio input
connection speed|连接速度|the rate at which data moves through a network
offline mode|离线模式|a setting that works without an internet connection
sync conflict|同步冲突|a disagreement between different saved versions of a file
data export|数据导出|a copy of information produced in a portable format
advanced search filter|高级搜索筛选条件|an option used to narrow results by several criteria
verified user profile|已验证用户资料|personal account information whose identity has been checked
device compatibility|设备兼容性|the ability of software to work on a particular device
digital receipt|电子收据|an electronic record proving that a payment was made`),

    group("个人财务", "B1", "noun phrase", "noun", `
monthly budget|月度预算|a plan for income and spending during one month
household expense|家庭开支|money spent on ordinary home needs
monthly bank statement|月度银行对账单|a monthly record of transactions in a bank account
payment deadline|付款截止日期|the latest date by which money must be paid
variable direct debit|可变金额自动扣款|an arrangement allowing a company to take changing regular payments
fixed standing order|固定定期转账指令|an instruction for a bank to send the same regular payment
cash withdrawal limit|现金提取限额|the maximum cash that may be taken from an account
card transaction|银行卡交易|a payment or refund made using a bank card
live exchange rate|实时汇率|the current value of one currency compared with another
international transfer fee|国际转账手续费|a charge for sending money to an account in another country
variable interest rate|浮动利率|a percentage that can change over time
short-term savings goal|短期储蓄目标|a target amount that a person plans to save soon
three-month emergency fund|三个月应急储备金|money equal to three months of costs kept for emergencies
insurance premium|保险费|the regular amount paid for insurance cover
policy excess|保险免赔额|the part of a claim that the customer must pay
tax allowance|免税额度|income or spending that may be excluded from tax
payslip deduction|工资单扣款|money removed from earnings before payment
invoice total|发票总额|the complete amount shown on an invoice
purchase order|采购订单|a formal document authorising a business purchase
supplier quote|供应商报价|a proposed price from a seller
expense claim|费用报销申请|a request to repay money spent for work
original proof of purchase|原始购买凭证|the first receipt or record showing that an item was bought
late payment charge|逾期付款费|an extra amount added when payment arrives late
fraud alert|欺诈警报|a warning about possibly dishonest account activity
credit balance|账户贷方余额|money available or owed to a customer on an account`),

    group("项目与运营", "B2", "noun phrase", "noun", `
project scope|项目范围|the work and outcomes included in a project
delivery milestone|交付里程碑|an important point that marks project progress
resource allocation|资源分配|the assignment of people money or equipment to tasks
task dependency|任务依赖关系|a link in which one task relies on another
critical path|关键路径|the sequence of tasks that determines project duration
live risk register|动态风险登记表|a project risk document that is kept continuously up to date
mitigation measure|缓解措施|an action designed to reduce the impact of a risk
contingency plan|应急方案|a prepared response for an unexpected event
formal change request|正式变更申请|an officially recorded proposal to alter agreed work
approval workflow|审批流程|the sequence through which a decision is authorised
quality threshold|质量门槛|the minimum acceptable level of performance
acceptance criterion|验收标准|a condition that must be met before work is approved
capacity forecast|产能预测|an estimate of how much work a team can handle
operational constraint|运营限制条件|a factor that limits how work can be performed
process bottleneck|流程瓶颈|a stage that slows the rest of a process
confirmed root cause|已确认根本原因|the verified underlying reason why a problem occurred
tracked corrective action|受跟踪的纠正措施|an action whose progress is recorded while removing a problem's cause
lessons learned review|经验复盘|a discussion of what a project can teach a team
stakeholder expectation|利益相关方期望|a result that an interested person or group anticipates
status dashboard|状态看板|a visual display of current project information
handover package|交付交接包|the documents and materials transferred at completion
service level target|服务水平目标|a measurable standard for service performance
business continuity plan|业务连续性计划|a plan for keeping essential work running during disruption
vendor dependency|供应商依赖|reliance on an outside provider for a key result
implementation timeline|实施时间表|a schedule for putting a plan into operation`),

    group("环境与社区", "B2", "noun phrase", "noun", `
energy audit|能源审计|a detailed review of how energy is used
household carbon footprint|家庭碳足迹|the total greenhouse gases caused by a household's activities
renewable source|可再生能源来源|a supply of energy that naturally replaces itself
household water conservation|家庭节约用水|the careful use and protection of water at home
waste separation|垃圾分类|the sorting of rubbish into different material types
reusable packaging|可重复使用包装|packaging designed to be used more than once
food waste collection|厨余垃圾收集|a service that separately gathers unwanted food
repair scheme|维修计划|a programme that helps people fix items instead of discarding them
neighbourhood community garden|街区社区花园|a shared neighbourhood space where residents grow plants
public green space|公共绿地|an outdoor natural area open to everyone
air quality index|空气质量指数|a number showing the level of air pollution
noise level reading|噪声水平读数|a measurement of how loud an environment is
flood warning|洪水预警|an official notice about possible flooding
heatwave plan|高温应对计划|a plan for protecting people during extreme heat
emergency shelter|应急避难所|a safe place for people affected by a crisis
local volunteer group|本地志愿者团体|residents organised to help their community
neighbourhood survey|社区调查|a set of questions about local needs and opinions
public consultation|公众咨询|a process that asks people for views on a proposal
accessibility improvement|无障碍改进|a change that makes a place easier for everyone to use
cycle-sharing scheme|共享单车计划|a service that lets the public borrow bicycles
pedestrian safety measure|行人安全措施|an action taken to protect people walking near traffic
local heritage site|当地文化遗产地|a place valued for its historical or cultural importance
community notice|社区通知|an announcement intended for local residents
donation drive|捐赠活动|an organised effort to collect money or useful goods
social support network|社会支持网络|people and services that provide practical or emotional help`),

    group("日常沟通动作", "A2", "verb phrase", "verb", `
ask for clarification|请求澄清|request a clearer explanation
repeat the key point|重复要点|say the most important information again
spell out a name|拼出姓名|say each letter of a person's name
confirm the address|确认地址|check that an address is correct
leave a message|留言|give information for someone who is unavailable
take a note|记下信息|write a short record of something important
give an example|举例|provide a case that makes an idea clearer
show the receipt|出示收据|present proof of a purchase
explain the problem|说明问题|describe what is wrong in a clear way
suggest another time|建议另一个时间|offer a different time for an arrangement
accept an invitation|接受邀请|say yes to a request to attend an event
decline politely|礼貌拒绝|say no in a respectful way
apologise for the delay|为延误道歉|express regret about something being late
thank someone for their help|感谢他人的帮助|show appreciation for assistance
introduce a colleague|介绍同事|tell people who a coworker is
describe the location|描述位置|explain where a place can be found
compare two options|比较两个选项|look at the differences between two choices
choose a suitable time|选择合适时间|select a time that works for the people involved
request formal written confirmation|要求正式书面确认|ask for an official decision or detail to be recorded in writing
share contact details|分享联系方式|give someone information needed to make contact
check the opening hours|查询营业时间|find out when a place is open
book an appointment|预约|arrange a time to receive a service
cancel in advance|提前取消|end an arrangement before it is due to begin
report a lost item|报告物品遗失|tell a service that something is missing
ask about the next step|询问下一步|request information about what should happen next`),

    group("问题解决动作", "B1", "verb phrase", "verb", `
identify the main issue|识别主要问题|determine which problem matters most
gather the relevant facts|收集相关事实|collect information directly connected to a problem
check the original record|核对原始记录|compare a claim with the first saved evidence
reproduce the error|复现错误|make a fault happen again under controlled conditions
isolate the cause|隔离原因|separate the factor responsible for a problem
rule out a possibility|排除一种可能|show that one explanation cannot be correct
test a temporary fix|测试临时修复|try a short-term solution before making it permanent
restore the previous version|恢复先前版本|return software or a file to an earlier state
replace the faulty part|更换故障零件|remove a broken component and fit a working one
restart the service|重启服务|stop and start a service to restore operation
document the evidence|记录证据|make a clear record of facts that support a conclusion
record the exact time|记录准确时间|write down precisely when an event occurred
compare the expected result|比较预期结果|check an outcome against what should have happened
contact technical support|联系技术支持|ask a specialist team for assistance
escalate the unresolved case|升级未解决工单|send an open problem to a higher support level
agree on a workaround|商定变通方案|choose a temporary way to continue despite a problem
monitor the situation|监测情况|observe a condition for further changes
verify the final result|核验最终结果|confirm that the outcome is correct
close the support ticket|关闭支持工单|mark a reported problem as completed
prevent the same failure|防止同类故障|take action so that a problem does not happen again
update the troubleshooting guide|更新故障排查指南|add new findings to the instructions for solving faults
back up the current settings|备份当前设置|save a copy of configuration before changing it
check for side effects|检查连带影响|look for unintended results of a change
inform the affected users|通知受影响用户|tell people who may experience the problem
schedule a permanent repair|安排永久修复|plan a lasting solution for a later time`),

    group("协作与推进动作", "B1", "verb phrase", "verb", `
set a shared goal|设定共同目标|agree on an outcome that everyone will work toward
assign clear responsibilities|明确分配职责|decide who owns each part of the work
agree on priorities|商定优先级|choose which tasks should be handled first
break the task into stages|将任务分成阶段|divide work into manageable steps
estimate the effort|估算工作量|judge how much time or work a task will require
reserve enough time|预留足够时间|protect a suitable period for an activity
coordinate the schedule|协调时间安排|organise timing across several people or tasks
share an early draft|分享初稿|send a preliminary version for review
invite practical feedback|征求实用反馈|ask for comments that can improve the work
respond to each comment|逐条回应意见|address every piece of review feedback
resolve a disagreement|解决分歧|find a way forward when opinions differ
record the decision|记录决定|write down what a group has agreed
track the open actions|跟踪未完成事项|follow tasks that still need to be completed
flag a possible delay|提示可能延误|warn others that timing may slip
adjust the workload|调整工作量|change how tasks are distributed
support a new team member|帮助新团队成员|help a person become effective in a new role
hand over the remaining work|交接剩余工作|transfer unfinished tasks and their context
recognise a contribution|肯定贡献|show appreciation for someone's useful work
summarise the discussion|总结讨论|state the main points from a conversation
confirm the agreed deadline|确认商定截止日期|check the final date accepted by everyone
prepare the next meeting|准备下次会议|organise material needed for a later discussion
keep everyone informed|让所有人知情|regularly share information with the whole group
ask for additional support|请求额外支持|request more people time or expertise
review the team process|复盘团队流程|examine how the group works together
celebrate a completed milestone|庆祝里程碑完成|mark an important achievement in a positive way`),

    group("研究与分析动作", "B2", "verb phrase", "verb", `
define the research scope|界定研究范围|state what an investigation will and will not cover
formulate a testable question|提出可检验的问题|write a question that evidence can answer
select a representative sample|选择有代表性的样本|choose participants or data that reflect a wider group
collect comparable data|收集可比数据|gather information measured in a consistent way
evaluate source credibility|评估资料可信度|judge whether information comes from a reliable source
distinguish fact from opinion|区分事实与观点|separate evidence from personal judgement
identify a hidden assumption|识别隐含假设|notice an unstated idea on which an argument depends
detect a recurring pattern|发现重复模式|recognise a result that appears repeatedly
measure the change over time|衡量随时间的变化|compare results recorded at different points
account for missing data|处理缺失数据|consider how absent information affects a conclusion
compare alternative explanations|比较不同解释|judge several possible reasons for the same result
interpret the findings cautiously|谨慎解读研究结果|explain evidence without making claims that are too strong
quantify the uncertainty|量化不确定性|express how much doubt surrounds an estimate
check for selection bias|检查选择偏差|look for distortion caused by how a sample was chosen
replicate the analysis|复现分析|repeat a method to see whether it gives the same result
cite the original source|引用原始来源|identify where information first appeared
summarise the supporting evidence|概述支持性证据|give a concise account of facts behind a claim
challenge a weak conclusion|质疑薄弱结论|question a claim that is not well supported
revise the initial hypothesis|修正初始假设|change an early explanation in response to evidence
draw a limited conclusion|得出有限结论|state only what the available evidence supports
acknowledge a limitation|承认局限|openly state a weakness in a study or method
recommend further investigation|建议进一步研究|propose additional work to answer remaining questions
present the results visually|以图表展示结果|use a chart or diagram to communicate findings
explain the practical implication|解释实际意义|show how a result may affect real decisions
archive the research materials|归档研究资料|store data and documents for future checking`),

    group("协商与决策动作", "B2", "verb phrase", "verb", `
clarify the shared interest|澄清共同利益|identify the outcome that both sides value
state a firm requirement|说明硬性要求|express a condition that cannot be removed
separate needs from preferences|区分需求与偏好|distinguish essentials from desirable extras
propose a workable compromise|提出可行折中方案|offer an arrangement both sides can realistically accept
justify the additional cost|说明额外成本的理由|explain why spending more is necessary
compare the long-term value|比较长期价值|judge options by benefits over an extended period
request a revised quotation|要求修订报价|ask a seller to provide an updated price proposal
negotiate a phased delivery|协商分阶段交付|agree that work will arrive in several stages
set a response deadline|设定回复期限|choose the latest acceptable time for an answer
define the acceptance terms|界定验收条款|state the conditions under which work will be approved
seek independent advice|寻求独立建议|ask an uninvolved expert for guidance
consult the affected group|征询受影响群体|ask people touched by a decision for their views
weigh the available evidence|权衡现有证据|consider the strength of information before deciding
assess the likely impact|评估可能影响|judge the probable effect of an action
prioritise the urgent cases|优先处理紧急事项|handle the most time-sensitive matters first
defer a low-risk decision|推迟低风险决定|delay a choice that can safely wait
approve the final proposal|批准最终提案|formally accept the completed plan
reject an unsuitable option|否决不合适选项|decide not to accept a choice that fails key needs
document the rationale|记录决策理由|write down why a decision was made
communicate the outcome clearly|清楚传达结果|explain a decision so others understand it
review the decision later|稍后复核决定|reconsider a choice after more information is available
prepare an alternative route|准备替代路径|develop another way to reach the same goal
protect the minimum standard|守住最低标准|ensure that a basic requirement is not weakened
build room for flexibility|预留灵活空间|design an agreement that can adapt to change
secure written approval|取得书面批准|obtain formal acceptance in a recorded form`),

    group("基础状态描述", "A2", "adjective", "adjective", `
available now|现在可用的|ready to be used or obtained immediately
easy to reach|容易到达的|located where people can get there without difficulty
open to the public|向公众开放的|available for anyone to enter or use
free of charge|免费的|provided without requiring payment
ready on time|按时准备好的|completed by the agreed time
safe to use|可安全使用的|unlikely to cause harm when used properly
clear enough|足够清楚的|easy to understand to the required degree
quiet at night|夜间安静的|not noisy during sleeping hours
close to the station|靠近车站的|located a short distance from a station
suitable for beginners|适合初学者的|appropriate for people with little experience
full at the moment|目前已满的|having no space or appointments available now
different from expected|与预期不同的|not matching what someone thought would happen
similar in size|大小相近的|having nearly the same dimensions
correct in every detail|每个细节都正确的|containing no known factual mistakes
simple to follow|容易照着做的|organised in a way that is easy to carry out
comfortable to wear|穿着舒适的|pleasant on the body for an extended time
large enough for twelve|足够容纳十二人的|having adequate space for a group of twelve
busy during lunch|午餐时段繁忙的|receiving many customers around midday
closed for repairs|因维修关闭的|temporarily unavailable while work is carried out
valid for one month|一个月内有效的|accepted during a period of one month
included in the price|包含在价格内的|provided without an additional charge
required by Friday|周五前必需的|needing to be provided no later than Friday
useful in daily life|日常生活中实用的|helpful for ordinary everyday tasks
friendly to new users|对新用户友好的|designed so that inexperienced users feel comfortable
possible without a car|不开车也可行的|achievable by walking cycling or public transport`),

    group("职场状态描述", "B1", "adjective", "adjective", `
clearly documented|有清晰记录的|written down with enough detail to be checked
properly authorised|经过适当授权的|formally approved by someone with the right authority
fairly distributed|公平分配的|shared in a balanced and reasonable way
fully accessible|完全无障碍的|usable by people with a wide range of needs
professionally presented|专业呈现的|shown in a polished and work-appropriate manner
accurate and complete|准确完整的|correct and containing all necessary information
consistent across teams|各团队一致的|applied in the same way by different groups
realistic within the schedule|在排期内现实可行的|achievable in the available time
relevant to the role|与岗位相关的|directly connected to the duties of a job
confidential by default|默认保密的|kept private unless permission is given
available for review|可供审阅的|ready for someone to examine and comment on
open to revision|可以修改的|able to be changed in response to feedback
aligned with the policy|符合政策的|matching the organisation's official rules
backed by evidence|有证据支持的|supported by reliable facts or records
easy to hand over|便于交接的|organised so another person can continue the work
ready for approval|可提交审批的|complete enough for a formal decision
unlikely to cause delay|不太可能造成延误的|not expected to affect the agreed timing
dependent on external input|依赖外部输入的|unable to progress until information arrives from elsewhere
subject to final checks|有待最终检查的|not complete until the last verification is finished
appropriate for the audience|适合目标受众的|matched to the knowledge and needs of its readers
measurable over time|可随时间衡量的|able to be tracked using repeated data
flexible when priorities change|可随优先级调整的|able to adapt when more important work appears
supported by the whole team|得到全队支持的|accepted and actively helped by all team members
limited to essential access|仅限必要访问的|restricted to people who genuinely need permission
scheduled outside peak hours|安排在非高峰时段的|planned for a time when demand is lower`),

    group("分析性描述", "B2", "adjective", "adjective", `
statistically significant|具有统计显著性的|unlikely to have appeared through random variation alone
methodologically sound|研究方法可靠的|based on a well-designed and appropriate method
internally consistent|内部一致的|not containing parts that contradict one another
externally verifiable|可由外部核验的|able to be checked using independent evidence
representative of the sample|能代表样本的|accurately reflecting the group that was studied
sensitive to small changes|对微小变化敏感的|responding noticeably when an input changes slightly
robust under pressure|在压力下仍稳健的|continuing to work despite difficult conditions
vulnerable to bias|容易受偏差影响的|likely to be distorted by unfair influences
limited in scope|范围有限的|covering only a defined part of a wider issue
relevant in practice|在实践中相关的|useful for real decisions rather than theory alone
consistent with the evidence|与证据一致的|matching what the available facts indicate
contrary to the initial assumption|与初始假设相反的|showing that an early belief was probably wrong
open to alternative interpretation|可作其他解释的|capable of supporting more than one reasonable meaning
dependent on context|取决于语境的|changing according to the surrounding conditions
comparable across periods|可跨时期比较的|measured consistently enough to compare different times
proportional to the risk|与风险相称的|no stronger or weaker than the level of danger requires
traceable to the source|可追溯到来源的|linked through records to where it originated
transparent about uncertainty|对不确定性透明的|clearly stating what is not known
conservative in its estimate|估算较为保守的|deliberately avoiding an overly optimistic figure
plausible but unconfirmed|看似合理但未证实的|believable although not yet supported by enough evidence
incomplete without context|缺少语境便不完整的|unable to be properly understood on its own
supported by multiple sources|由多方来源支持的|confirmed by more than one independent source
unlikely to generalise|不太能普遍适用的|not expected to apply to a wider population
useful for comparison|便于比较的|helping people judge differences between options
worthy of further study|值得进一步研究的|important enough to justify more investigation`),

    group("人际与服务描述", "B1", "adjective", "adjective", `
patient with questions|耐心回答问题的|willing to explain without showing annoyance
attentive to detail|注重细节的|careful to notice small but important information
respectful of boundaries|尊重界限的|careful not to cross another person's limits
honest about mistakes|坦诚面对错误的|willing to admit when something went wrong
calm under pressure|压力下冷静的|able to remain composed in a difficult situation
helpful without being intrusive|热心但不过度干预的|supportive while still respecting independence
confident but polite|自信且礼貌的|assured without sounding rude or aggressive
clear about expectations|明确说明期望的|explaining required outcomes in an understandable way
responsive to feedback|积极回应反馈的|willing to adjust after receiving comments
considerate of different needs|照顾不同需求的|thinking carefully about how people may be affected
reliable in an emergency|紧急情况下可靠的|able to be trusted when urgent help is needed
discreet with personal information|谨慎处理个人信息的|careful to keep private details confidential
fair in a disagreement|在分歧中公正的|judging both sides without unfair preference
constructive in criticism|批评具有建设性的|pointing out problems while helping to improve them
welcoming to newcomers|欢迎新成员的|making inexperienced or new people feel included
aware of cultural differences|意识到文化差异的|sensitive to different customs and expectations
willing to ask for help|愿意求助的|comfortable requesting support when needed
ready to take responsibility|愿意承担责任的|prepared to own an action and its results
generous with practical advice|乐于分享实用建议的|willing to offer useful guidance
careful with promises|谨慎作出承诺的|avoiding commitments that may not be kept
open about limitations|坦诚说明局限的|clearly stating what cannot be done
focused on a solution|以解决方案为导向的|directing attention toward a workable answer
supportive during change|在变动中给予支持的|helping others adapt to a new situation
consistent in follow-up|持续跟进的|reliably checking what happened after an action
grateful for other viewpoints|感谢不同观点的|showing appreciation for perspectives from others`),

    group("流程与系统描述", "B2", "adjective", "adjective", `
scalable to larger teams|可扩展至更大团队的|able to work as the number of users increases
compatible with older devices|兼容旧设备的|able to function on equipment from earlier generations
resilient to temporary failure|能承受临时故障的|able to recover when a short disruption occurs
secure by design|设计上即安全的|built with protection included from the beginning
easy to audit|便于审计的|organised so actions and records can be checked
simple to reverse|易于回退的|able to be undone without major difficulty
stable during peak demand|高峰需求下稳定的|continuing to perform when usage is highest
efficient in routine use|日常使用高效的|requiring little time or effort for common tasks
adaptable to local needs|可适应本地需求的|easy to adjust for a particular place or group
independent of one supplier|不依赖单一供应商的|able to operate without relying on one provider
protected against data loss|有数据丢失保护的|designed to prevent information from disappearing
monitored in real time|实时监控的|observed continuously as events happen
tested before deployment|部署前经过测试的|checked before being placed into active use
documented at every stage|每个阶段都有记录的|recorded throughout the complete process
restricted to authorised users|仅限授权用户的|available only to people with formal permission
recoverable from backup|可从备份恢复的|able to be returned using a saved copy
maintainable by the local team|本地团队可维护的|able to be supported without outside specialists
visible to key stakeholders|对关键相关方可见的|shown to the people who need oversight
automated where appropriate|在适当环节自动化的|using machines only where automation is useful
manual when judgement matters|需要判断时保留人工的|kept under human control for decisions requiring thought
separated from production data|与生产数据隔离的|kept apart from real operational information
validated against clear criteria|按明确标准验证的|checked using specific acceptance rules
prioritised by business impact|按业务影响排优先级的|ordered according to effect on the organisation
reviewed after each incident|每次事件后都会复盘的|examined whenever a problem has occurred
retained for the required period|按要求期限保留的|kept for exactly as long as policy requires`)
  ];

  const usageProfiles = {
    "旅行与交通": {
      example: (word) => `The travel adviser explained the ${word} before we booked.`,
      exampleZh: (definition) => `出行顾问在预订前说明了${definition}。`,
      collocation: (word) => `check the ${word}`
    },
    "住房与生活服务": {
      example: (word) => `The tenant asked the landlord about the ${word}.`,
      exampleZh: (definition) => `租户向房东询问了${definition}。`,
      collocation: (word) => `confirm the ${word}`
    },
    "健康与就医": {
      example: (word) => `The health guide gives clear advice about the ${word}.`,
      exampleZh: (definition) => `健康指南清楚说明了${definition}。`,
      collocation: (word) => `ask about the ${word}`
    },
    "学习与课堂": {
      example: (word) => `The class discussed how the ${word} supports learning.`,
      exampleZh: (definition) => `课堂讨论了${definition}如何帮助学习。`,
      collocation: (word) => `review the ${word}`
    },
    "职场基础": {
      example: (word) => `The manager reviewed the ${word} with the team.`,
      exampleZh: (definition) => `经理与团队一起复核了${definition}。`,
      collocation: (word) => `review the ${word}`
    },
    "客户与服务": {
      example: (word) => `The support agent checked the ${word} before replying.`,
      exampleZh: (definition) => `客服回复前核对了${definition}。`,
      collocation: (word) => `check the ${word}`
    },
    "数字生活": {
      example: (word) => `The setup guide explains how to use the ${word}.`,
      exampleZh: (definition) => `设置指南说明了如何使用${definition}。`,
      collocation: (word) => `review the ${word}`
    },
    "个人财务": {
      example: (word) => `The adviser reviewed the ${word} with the customer.`,
      exampleZh: (definition) => `顾问与客户一起查看了${definition}。`,
      collocation: (word) => `review the ${word}`
    },
    "项目与运营": {
      example: (word) => `The project team reviewed the ${word} before the meeting.`,
      exampleZh: (definition) => `项目团队在会议前复核了${definition}。`,
      collocation: (word) => `track the ${word}`
    },
    "环境与社区": {
      example: (word) => `The meeting included a discussion of the ${word}.`,
      exampleZh: (definition) => `会议讨论了${definition}。`,
      collocation: (word) => `discuss the ${word}`
    },
    "日常沟通动作": {
      example: (word) => `During the conversation, I decided to ${word}.`,
      exampleZh: (definition) => `沟通时，我决定${definition}。`,
      collocation: (word) => `${word} during a conversation`
    },
    "问题解决动作": {
      example: (word) => `The support team will ${word} before closing the case.`,
      exampleZh: (definition) => `支持团队会在结案前${definition}。`,
      collocation: (word) => `${word} before closing the case`
    },
    "协作与推进动作": {
      example: (word) => `During the meeting, we agreed to ${word}.`,
      exampleZh: (definition) => `会议中，我们同意${definition}。`,
      collocation: (word) => `${word} as a team`
    },
    "研究与分析动作": {
      example: (word) => `Before publishing, the researchers will ${word}.`,
      exampleZh: (definition) => `发布前，研究人员会${definition}。`,
      collocation: (word) => `${word} before publication`
    },
    "协商与决策动作": {
      example: (word) => `Before signing, both sides agreed to ${word}.`,
      exampleZh: (definition) => `签署前，双方同意${definition}。`,
      collocation: (word) => `${word} before signing`
    },
    "基础状态描述": {
      example: (word) => `The service is ${word}.`,
      exampleZh: (definition) => `这项服务是${definition}。`,
      collocation: (word) => `be ${word}`
    },
    "职场状态描述": {
      example: (word) => `The work process is ${word}.`,
      exampleZh: (definition) => `这项工作流程是${definition}。`,
      collocation: (word) => `be ${word}`
    },
    "分析性描述": {
      example: (word) => `The evidence is ${word}.`,
      exampleZh: (definition) => `这项分析是${definition}。`,
      collocation: (word) => `be ${word}`
    },
    "人际与服务描述": {
      example: (word) => `The adviser was ${word} throughout the conversation.`,
      exampleZh: (definition) => `这位顾问在交流中始终是${definition}。`,
      collocation: (word) => `be ${word}`
    },
    "流程与系统描述": {
      example: (word) => `The system is ${word}.`,
      exampleZh: (definition) => `这个系统是${definition}。`,
      collocation: (word) => `be ${word}`
    }
  };

  const exampleOverrides = Object.freeze({
    "comfortable to wear": Object.freeze({ example: "The safety vest is comfortable to wear.", exampleZh: "这件安全背心穿着舒适。" }),
    "large enough for twelve": Object.freeze({ example: "The meeting room is large enough for twelve.", exampleZh: "这间会议室足够容纳十二人。" }),
    "consistent with the evidence": Object.freeze({ example: "The conclusion is consistent with the evidence.", exampleZh: "这个结论与证据一致。" }),
    "connection speed": Object.freeze({ example: "The setup guide shows how to check the connection speed.", exampleZh: "设置指南说明了如何检查连接速度。" }),
    "sync conflict": Object.freeze({ example: "The support page explains how to resolve the sync conflict.", exampleZh: "支持页面说明了如何解决同步冲突。" }),
    "device compatibility": Object.freeze({ example: "The setup guide explains how to check device compatibility.", exampleZh: "设置指南说明了如何检查设备兼容性。" })
  });

  const rows = [];
  groups.forEach((entryGroup) => {
    entryGroup.entries.forEach(([word, definition, definitionEn]) => {
      const usage = usageProfiles[entryGroup.topic];
      if (!usage) throw new Error(`Missing usage profile for ${entryGroup.topic}.`);
      rows.push(Object.freeze({
        id: `vx4000-${String(rows.length + 1).padStart(4, "0")}`,
        word,
        phonetic: "audio available",
        partOfSpeech: entryGroup.partOfSpeech,
        definition,
        definitionEn,
        collocation: usage.collocation(word),
        example: exampleOverrides[word]?.example || usage.example(word),
        exampleZh: exampleOverrides[word]?.exampleZh || usage.exampleZh(definition),
        topic: entryGroup.topic,
        level: entryGroup.level
      }));
    });
  });

  if (rows.length !== 500) {
    throw new Error(`Expected 500 v4000 vocabulary rows, received ${rows.length}.`);
  }

  window.ENGLISH_COMPASS_VOCABULARY_EXPANSION_V4000 = Object.freeze(rows);
})();

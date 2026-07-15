(function () {
  "use strict";

  const topicGroups = [
    {
      topic: "海外求职",
      topicEn: "overseas job hunting",
      levels: [5, 25, 15],
      practiceVerb: "discuss",
      items: `
apprenticeship|学徒培训
traineeship|实习培训岗位
headhunter|猎头
probationary period|试用期
withholding|代扣税款
severance|离职补偿
relocation package|搬迁补助方案
work permit|工作许可
credential|资历证明
accreditation|资质认证
transferable skill|可迁移技能
subcontractor|分包商
consultancy|咨询服务
headcount|员工人数
timesheet|工时表
flextime|弹性工时
entitlement|应享权益
grievance|正式申诉
disciplinary action|纪律处分
labor union|工会
pension scheme|养老金计划
commission-based|以提成为主的
appraisal cycle|绩效评估周期
demotion|降职
resignation letter|辞职信
successor|继任者
predecessor|前任
absenteeism|缺勤现象
staff morale|员工士气
employee retention|员工留任
staff turnover|员工流动率
workforce planning|人力规划
job shadowing|岗位跟岗学习
induction day|入职引导日
shift swap|换班
annual leave|年假
compassionate leave|关怀假
maternity leave|产假
paternity leave|陪产假
background check|背景调查
salary negotiation|薪资谈判
pay rise|加薪
career ladder|职业晋升阶梯
internal transfer|内部调岗
exit interview|离职面谈`
    },
    {
      topic: "面试沟通",
      topicEn: "interview communication",
      levels: [5, 17, 13],
      practiceVerb: "show",
      items: `
anecdote|简短轶事
meticulous|一丝不苟的
diplomatic|圆融得体的
resourceful|善于随机应变的
observant|善于观察的
composed|镇定的
candid|坦率的
credible|可信的
authentic|真实自然的
versatile|多才多能的
tactful|说话得体的
autonomous|能够独立工作的
humble|谦逊的
reassure|使安心
icebreaker|破冰话题
suitability|适合程度
self-awareness|自我认知
growth mindset|成长型思维
problem-solving|解决问题能力
decision-making|决策能力
critical thinking|批判性思维
mock interview|模拟面试
interview panel|面试小组
hiring manager|招聘经理
elevator introduction|电梯式自我介绍
opening statement|开场陈述
closing statement|结束陈述
evidence-based|以证据为基础的
achievement-oriented|注重成就的
results-driven|以结果为导向的
detail-oriented|注重细节的
people-focused|以人为本的
time-conscious|重视时间的
well-prepared|准备充分的
underqualified|资历不足的`
    },
    {
      topic: "客户服务",
      topicEn: "customer service",
      levels: [15, 20, 10],
      practiceVerb: "handle",
      items: `
clientele|客户群
goodwill|商誉与善意
fulfillment|订单履约
consignment|寄售货物
shipment tracking|物流跟踪
surcharge|附加费
troubleshooting|故障排查
de-escalate|缓和冲突
irate|非常愤怒的
queueing|排队等候
service recovery|服务补救
response time|响应时间
first contact resolution|首次联系解决率
help desk|服务台
ticket number|工单编号
case owner|案件负责人
service level|服务等级
callback|回电
call transfer|电话转接
hold time|等待接听时间
chat support|在线聊天支持
live agent|人工客服
self-service|自助服务
loyalty point|会员积分
reward card|积分卡
gift receipt|礼品小票
damaged goods|受损商品
missing item|缺失商品
wrong item|错发商品
delayed order|延迟订单
delivery estimate|预计送达时间
restocking fee|重新上架费
partial refund|部分退款
full refund|全额退款
courtesy call|礼貌回访电话
customer journey|客户旅程
pain point|客户痛点
touchpoint|客户接触点
customer insight|客户洞察
user complaint|用户投诉
refund request|退款申请
front desk|前台
queue number|排队号码
waiting time|等待时间
repeat customer|回头客`
    },
    {
      topic: "日常生活",
      topicEn: "daily life",
      levels: [30, 15, 5],
      practiceVerb: "use",
      items: `
housework|家务
declutter|清理杂物
storage box|收纳箱
spare key|备用钥匙
locksmith|锁匠
plumber|水管工
electrician|电工
handyman|维修杂工
houseplant|室内植物
watering can|浇水壶
vacuum cleaner|吸尘器
dustpan|簸箕
broomstick|扫帚柄
mop bucket|拖把桶
recycling bin|回收桶
rubbish bag|垃圾袋
light bulb|灯泡
extension cord|延长线
power strip|插线板
battery charger|电池充电器
alarm clock|闹钟
bedside table|床头柜
coat hanger|衣架
laundry basket|洗衣篮
clothesline|晾衣绳
sewing kit|针线包
first-aid kit|急救包
emergency kit|应急包
shopping list|购物清单
meal plan|饮食计划
grocery budget|食品杂货预算
packed lunch|自带午餐
water bottle|水瓶
travel mug|旅行杯
reusable bag|环保购物袋
food container|食物保鲜盒
ice pack|冰袋
door chain|防盗门链
window lock|窗锁
smoke alarm|烟雾报警器
carbon monoxide alarm|一氧化碳报警器
fire blanket|灭火毯
fuse box|保险丝盒
circuit breaker|断路器
water leak|漏水
power cut|停电
parcel locker|快递柜
pickup point|取件点
neighborhood event|社区活动
community center|社区中心`
    },
    {
      topic: "旅行出行",
      topicEn: "travel",
      levels: [20, 12, 3],
      practiceVerb: "check",
      items: `
arrival hall|到达大厅
baggage carousel|行李转盘
luggage tag|行李牌
middle seat|中间座位
seat belt sign|安全带指示灯
customs officer|海关工作人员
immigration desk|入境检查台
flight delay|航班延误
flight cancellation|航班取消
exchange counter|货币兑换柜台
oversized baggage|超大行李
lost luggage|遗失行李
travel insurance claim|旅行保险理赔
hotel reception|酒店前台
room keycard|房卡
wake-up call|叫醒服务
early check-in|提前入住
twin room|双床房
double room|大床房
single room|单人房
hostel dormitory|青年旅舍多人间
guesthouse|家庭旅馆
sightseeing pass|观光通票
guided tour|导游带领的游览
audio guide|语音导览
tourist office|游客服务中心
city map|城市地图
bus timetable|公交时刻表
train platform|火车站台
fare zone|票价区域
reserved seat|预订座位
quiet carriage|安静车厢
rental car|租用汽车
fuel policy|燃油政策
toll road|收费公路`
    },
    {
      topic: "健康医疗",
      topicEn: "health care",
      levels: [20, 18, 7],
      practiceVerb: "ask about",
      items: `
symptom checker|症状自查工具
appointment slot|预约时间段
family history|家族病史
blood pressure|血压
heart rate|心率
body temperature|体温
pulse oximeter|脉搏血氧仪
prescription refill|续开处方
dosage instruction|剂量说明
food allergy|食物过敏
seasonal allergy|季节性过敏
hay fever|花粉症
sore throat|喉咙痛
runny nose|流鼻涕
blocked nose|鼻塞
chest pain|胸痛
stomachache|胃痛
backache|背痛
sprained ankle|脚踝扭伤
minor burn|轻微烧伤
insect bite|昆虫叮咬
skin rash|皮疹
pain relief|止痛
cough syrup|止咳糖浆
throat lozenge|润喉糖
eye drops|滴眼液
ear drops|滴耳液
nasal spray|鼻喷剂
bandage roll|绷带卷
adhesive plaster|创可贴
antiseptic cream|消毒药膏
thermometer|体温计
ice compress|冰敷
heat pack|热敷包
recovery time|恢复时间
follow-up visit|复诊
test result|检查结果
blood test|血液检查
urine test|尿液检查
health screening|健康筛查
vaccination record|疫苗接种记录
health insurance card|医保卡
mental wellbeing|心理健康
sleep routine|睡眠规律
balanced diet|均衡饮食`
    },
    {
      topic: "远程工作",
      topicEn: "remote work",
      levels: [10, 22, 13],
      practiceVerb: "manage",
      items: `
async communication|异步沟通
virtual meeting|线上会议
video call|视频通话
conference link|会议链接
waiting room|线上等候室
breakout room|分组讨论室
meeting host|会议主持人
meeting agenda|会议议程
meeting minutes|会议纪要
calendar invite|日历邀请
time block|时间区块
focus time|专注时间
deep work|深度工作
quiet mode|免打扰模式
work-from-home setup|居家办公配置
home office|家庭办公室
ergonomic chair|人体工学椅
laptop stand|笔记本电脑支架
external monitor|外接显示器
wireless keyboard|无线键盘
noise-canceling headphones|降噪耳机
internet outage|网络中断
backup connection|备用网络连接
cloud storage|云存储
shared drive|共享网盘
file permission|文件权限
edit access|编辑权限
view access|查看权限
version history|版本历史
comment thread|评论串
task board|任务看板
project board|项目看板
weekly review|每周回顾
check-in call|进度沟通电话
one-on-one meeting|一对一会议
time zone difference|时区差异
core hours|核心工作时段
flexible schedule|弹性安排
remote onboarding|远程入职
virtual coffee|线上咖啡交流
team channel|团队频道
direct message|私信
notification setting|通知设置
online status|在线状态
availability window|可联系时间段`
    },
    {
      topic: "跨文化交流",
      topicEn: "cross-cultural communication",
      levels: [5, 15, 10],
      practiceVerb: "respect",
      items: `
worldview|世界观
equality|平等
equity|公平
discrimination|歧视
respectfulness|尊重他人的态度
formality|正式程度
informality|非正式程度
seniority|资历等级
disagreement|意见分歧
directness|直接表达
indirectness|间接表达
eye contact norm|眼神交流规范
punctuality norm|守时规范
gift-giving|赠礼习惯
table manners|餐桌礼仪
dress code|着装规范
religious holiday|宗教节日
public holiday|公共假日
local tradition|当地传统
host family|寄宿家庭
cultural exchange|文化交流
language barrier|语言障碍
slang|俚语
clarification|澄清说明
cultural awareness|文化意识
cultural sensitivity|文化敏感度
open-mindedness|开放心态
adaptability|适应能力
curiosity|好奇心
shared value|共同价值观`
    },
    {
      topic: "科技应用",
      topicEn: "digital technology",
      levels: [12, 22, 11],
      practiceVerb: "configure",
      items: `
authorization|授权
passcode|数字密码
backup code|备用验证码
fingerprint scanner|指纹扫描器
antivirus software|杀毒软件
software update|软件更新
operating system|操作系统
web browser|网页浏览器
browser tab|浏览器标签页
bookmark folder|书签文件夹
download folder|下载文件夹
upload speed|上传速度
download speed|下载速度
bandwidth limit|带宽限制
data usage|数据用量
mobile hotspot|移动热点
QR code|二维码
cloud backup|云端备份
data sync|数据同步
file format|文件格式
file extension|文件扩展名
compressed file|压缩文件
archive file|归档文件
zip folder|压缩文件夹
worksheet|工作表
formula bar|公式栏
database record|数据库记录
search filter|搜索筛选器
sort order|排序顺序
user profile|用户资料
account setting|账户设置
privacy setting|隐私设置
cookie consent|Cookie 同意设置
browsing history|浏览历史
incognito mode|无痕模式
cache file|缓存文件
app permission|应用权限
location service|定位服务
push notification|推送通知
dark mode|深色模式
accessibility setting|无障碍设置
screen reader|屏幕阅读器
voice input|语音输入
text-to-speech|文本转语音
speech-to-text|语音转文本`
    },
    {
      topic: "环保生活",
      topicEn: "environmental living",
      levels: [15, 25, 10],
      practiceVerb: "support",
      items: `
carbon footprint|碳足迹
greenhouse gas|温室气体
renewable energy|可再生能源
solar panel|太阳能板
wind turbine|风力涡轮机
hydroelectric power|水力发电
fossil fuel|化石燃料
energy efficiency|能源效率
home insulation|住宅保温
double glazing|双层玻璃
LED bulb|LED 灯泡
smart meter|智能电表
standby power|待机耗电
water conservation|节约用水
rainwater tank|雨水收集箱
low-flow shower|节水淋浴
reusable bottle|可重复使用水瓶
refill station|补充装站点
single-use plastic|一次性塑料
plastic packaging|塑料包装
paper bag|纸袋
cloth bag|布袋
compost bin|堆肥桶
food scraps|食物残渣
garden waste|园林垃圾
electronic waste|电子垃圾
battery recycling|电池回收
recycling point|回收点
landfill site|垃圾填埋场
waste collection|垃圾收集
collection day|垃圾收运日
litter picking|捡拾垃圾
community garden|社区花园
tree planting|植树
wildlife habitat|野生动物栖息地
biodiversity|生物多样性
endangered species|濒危物种
native plant|本地植物
invasive species|入侵物种
air pollution|空气污染
water pollution|水污染
noise pollution|噪声污染
clean air zone|清洁空气区
emission standard|排放标准
car sharing|汽车共享
bike sharing|共享单车
electric vehicle|电动汽车
charging point|充电点
sustainable travel|可持续出行
local produce|本地农产品`
    },
    {
      topic: "阅读理解",
      topicEn: "reading comprehension",
      levels: [15, 10, 5],
      practiceVerb: "identify",
      items: `
headline|标题
subheading|小标题
byline|作者署名行
caption|图片说明
topic sentence|主题句
concluding sentence|总结句
overview|概述
claim|主张
quotation|引文
reference list|参考文献表
footnote|脚注
glossary|术语表
index page|索引页
table of contents|目录
chapter heading|章节标题
section break|分节符
text box|文本框
diagram|示意图
comparison|比较
contrast|对比
cause|原因
effect|结果
sequence|顺序
prediction|预测
mood|情绪氛围
purpose|写作目的
definition clue|定义线索
example clue|例证线索
scan|扫读查找
skim|略读`
    },
    {
      topic: "阅读学习",
      topicEn: "reading study",
      levels: [20, 18, 7],
      practiceVerb: "review",
      items: `
reading journal|阅读日志
book review|书评
plot|情节
setting|故事背景
character|人物
narrator|叙述者
dialogue|对话
description|描写
theme|主题
genre|体裁
fiction|小说类作品
nonfiction|非虚构作品
biography|传记
autobiography|自传
memoir|回忆录
article|文章
manual|使用手册
leaflet|传单
notice|通知
newsletter|简讯
blog post|博客文章
forum post|论坛帖子
comment section|评论区
online article|网络文章
printed edition|纸质版
digital edition|数字版
paperback|平装书
hardcover|精装书
audiobook|有声书
e-book|电子书
library card|借书证
renewal date|续借日期
overdue fine|逾期罚款
reservation list|预约名单
reading level|阅读难度
reading speed|阅读速度
comprehension question|理解题
vocabulary note|词汇笔记
margin note|页边笔记
study note|学习笔记
flashcard set|闪卡组
practice quiz|练习测验
answer key|答案表
explanation note|解析笔记
study goal|学习目标`
    }
  ];

  const phonetics = ["/əˈprɛntəsˌʃɪp/","/traineeship/","/ˈhɛˌdhəntər/","/proʊˈbeɪʃəˌnɛˌri ˈpɪriəd/","/wɪθˈhoʊldɪŋ/","/ˈsɛˌvərəns/","/ˌriˈloʊˈkeɪʃən ˈpækɪʤ/","/wərk ˈpərˌmɪt/","/krɪˈdɛnʃəl/","/əˌkrɛdəˈteɪʃən/","/trænsˈfərəbəl skɪl/","/səbˈkɑnˌtræktər/","/kənˈsəltənsi/","/ˈhɛdˌkaʊnt/","/timesheet/","/ˈflɛkˌstaɪm/","/ɛnˈtaɪtəlmənt/","/ˈgrivəns/","/ˈdɪsəpləˌnɛri ˈækʃən/","/ˈleɪbər ˈjunjən/","/ˈpɛnʃən skim/","/kəˈmɪʃən beɪst/","/əˈpreɪzəl ˈsaɪkəl/","/dɪˈmoʊʃən/","/ˌrɛzɪgˈneɪʃən ˈlɛtər/","/səkˈsɛsər/","/ˈprɛdəˌsɛsər/","/ˌæbsənˈtiɪzəm/","/stæf məræl/","/ɪmˈplɔɪi riˈtɛnʃən/","/stæf ˈtərˌnoʊvər/","/ˈwərkˌfɔrs ˈplænɪŋ/","/ʤɑb ˈʃædoʊɪŋ/","/ˌɪnˈdəkʃən deɪ/","/ʃɪft swɑp/","/ˈænjuəl liv/","/kəmˈpæʃənət liv/","/məˈtərnɪti liv/","/pəˈtərnɪti liv/","/ˈbækˌgraʊnd ʧɛk/","/ˈsæləri nɪˌgoʊʃiˈeɪʃən/","/peɪ raɪz/","/kərɪr ˈlædər/","/ˌɪnˈtərnəl ˈtrænsfər/","/ˈɛksət ˈɪntərvˌju/","/ˈænɪkˌdoʊt/","/məˈtɪkjələs/","/ˌdɪpləˈmætɪk/","/riˈsɔrsfəl/","/əbˈzərvənt/","/kəmˈpoʊzd/","/ˈkændɪd/","/ˈkrɛdəbəl/","/əˈθɛnɪk/","/ˈvərsətəl/","/ˈtæktfəl/","/ɔˈtɑnəməs/","/ˈhəmbəl/","/ˌriəˈʃʊr/","/ˈaɪsˌbreɪkər/","/ˌsutəˈbɪlɪti/","/sɛlf əˈwɛrnəs/","/groʊθ ˈmaɪndˌsɛt/","/ˈprɑbləm ˈsɑlvɪŋ/","/dɪˈsɪʒən ˈmeɪkɪŋ/","/ˈkrɪtɪkəl ˈθɪŋkɪŋ/","/mɑk ˈɪntərvˌju/","/ˈɪntərvˌju ˈpænəl/","/ˈhaɪrɪŋ ˈmænɪʤər/","/ˈɛləˌveɪtər ˌɪntrəˈdəkʃən/","/ˈoʊpənɪŋ ˈsteɪtmənt/","/ˈkloʊzɪŋ ˈsteɪtmənt/","/ˈɛvədəns beɪst/","/əˈʧivmənt ˈɔriˌɛntɪd/","/rɪˈzəlts ˈdrɪvən/","/ˈditeɪl ˈɔriˌɛntɪd/","/ˈpipəl ˈfoʊkɪst/","/taɪm ˈkɑnʃəs/","/wɛl priˈpɛrd/","/underqualified/","/ˌklaɪənˈtɛl/","/ˈgʊdˈwɪl/","/fʊlˈfɪlmənt/","/kənˈsaɪnmənt/","/ˈʃɪpmənt ˈtrækɪŋ/","/ˈsərˌʧɑrʤ/","/troubleshooting/","/də ˈɛskəˌleɪt/","/aɪˈreɪt/","/queueing/","/ˈsərvɪs rɪˈkəvəri/","/rɪˈspɑns taɪm/","/fərst ˈkɑnˌtækt ˌrɛzəˈluʃən/","/hɛlp dɛsk/","/ˈtɪkɪt ˈnəmbər/","/keɪs ˈoʊnər/","/ˈsərvɪs ˈlɛvəl/","/callback/","/kɔl ˈtrænsfər/","/hoʊld taɪm/","/ʧæt səˈpɔrt/","/lɪv ˈeɪʤənt/","/sɛlf ˈsərvɪs/","/ˈlɔɪəlti pɔɪnt/","/rɪˈwɔrd kɑrd/","/gɪft rɪˈsit/","/ˈdæmɪʤd gʊdz/","/ˈmɪsɪŋ ˈaɪtəm/","/rɔŋ ˈaɪtəm/","/dɪˈleɪd ˈɔrdər/","/dɪˈlɪvəri ˈɛstəˌmeɪt/","/riˈstɑkɪŋ fi/","/ˈpɑrʃəl ˈriˌfənd/","/fʊl ˈriˌfənd/","/ˈkərtəsi kɔl/","/ˈkəstəmər ˈʤərni/","/peɪn pɔɪnt/","/touchpoint/","/ˈkəstəmər ˈɪnˌsaɪt/","/ˈjuzər kəmˈpleɪnt/","/ˈriˌfənd rɪkˈwɛst/","/frənt dɛsk/","/kju ˈnəmbər/","/ˈweɪtɪŋ taɪm/","/rɪˈpit ˈkəstəmər/","/ˈhaʊsˌwərk/","/declutter/","/ˈstɔrɪʤ bɑks/","/spɛr ki/","/ˈlɑksˌmɪθ/","/ˈpləmər/","/ɪlɛkˈtrɪʃən/","/ˈhændiˌmæn/","/houseplant/","/ˈwɔtərɪŋ kən/","/ˈvækjum ˈklinər/","/dustpan/","/ˈbrumˌstɪk/","/mɑp ˈbəkɪt/","/riˈsaɪkəlɪŋ bɪn/","/ˈrəbɪʃ bæg/","/laɪt bəlb/","/ɪkˈstɛnʃən kɔrd/","/paʊər strɪp/","/ˈbætəri ˈʧɑrʤər/","/əˈlɑrm klɑk/","/ˈbɛdˌsaɪd ˈteɪbəl/","/koʊt ˈhæŋər/","/ˈlɔndri ˈbæskət/","/clothesline/","/soʊɪŋ kɪt/","/fərst eɪd kɪt/","/ˈimərʤənsi kɪt/","/ˈʃɑpɪŋ lɪst/","/mil plæn/","/ˈgroʊsəri ˈbəʤɪt/","/pækt lənʧ/","/ˈwɔtər ˈbɑtəl/","/ˈtrævəl məg/","/riˈuzəbəl bæg/","/fud kənˈteɪnər/","/aɪs pæk/","/dɔr ʧeɪn/","/ˈwɪndoʊ lɑk/","/smoʊk əˈlɑrm/","/ˈkɑrbən məˈnɑksaɪd əˈlɑrm/","/faɪər ˈblæŋkɪt/","/fjuz bɑks/","/ˈsərkət ˈbreɪkər/","/ˈwɔtər lik/","/paʊər kət/","/ˈpɑrsəl ˈlɑkər/","/ˈpɪˌkəp pɔɪnt/","/ˈneɪbərˌhʊd ɪˈvɛnt/","/kəmˈjunɪti ˈsɛnər/","/ərˈaɪvəl hɔl/","/ˈbægɪʤ ˈkɛrəˌsɛl/","/ˈləgɪʤ tæg/","/ˈmɪdəl sit/","/sit bɛlt saɪn/","/ˈkəstəmz ˈɔfɪsər/","/ˌɪməˈgreɪʃən dɛsk/","/flaɪt dɪˈleɪ/","/flaɪt ˌkænsəˈleɪʃən/","/ɪksˈʧeɪnʤ ˈkaʊntər/","/ˈoʊvərˌsaɪzd ˈbægɪʤ/","/lɔst ˈləgɪʤ/","/ˈtrævəl ˌɪnˈʃʊrəns kleɪm/","/hoʊˈtɛl rɪˈsɛpʃən/","/rum keycard/","/weɪk əp kɔl/","/ˈərli ʧɛk ɪn/","/twɪn rum/","/ˈdəbəl rum/","/ˈsɪŋgəl rum/","/ˈhɑstəl ˈdɔrməˌtɔri/","/ˈgɛˌsthaʊs/","/ˈsaɪtˈsiɪŋ pæs/","/ˈgaɪdɪd tʊr/","/ˈɑdiˌoʊ gaɪd/","/ˈtʊrɪst ˈɔfəs/","/ˈsɪti mæp/","/bəs ˈtaɪmˌteɪbəl/","/treɪn ˈplætˌfɔrm/","/fɛr zoʊn/","/rɪˈzərvd sit/","/kwaɪət ˈkɛrəʤ/","/ˈrɛntəl kɑr/","/fjuəl ˈpɑləsi/","/toʊl roʊd/","/ˈsɪmptəm ˈʧɛkər/","/əˈpɔɪntmənt slɑt/","/ˈfæməli ˈhɪstəri/","/bləd ˈprɛʃər/","/hɑrt reɪt/","/ˈbɑdi ˈtɛmpərəʧər/","/pəls oximeter/","/prəˈskrɪpʃən ˈrifɪl/","/ˈdoʊsɪʤ ˌɪnˈstrəkʃən/…1436 tokens truncated…dɪˈskrɪpʃən/","/θim/","/ˈʒɑnrə/","/ˈfɪkʃən/","/nɑnˈfɪkʃən/","/baɪˈɑgrəfi/","/ˌɔtəbaɪˈɑgrəfi/","/ˈmɛmˌwɑr/","/ˈɑrtɪkəl/","/ˈmænjuəl/","/ˈliflət/","/ˈnoʊtɪs/","/ˈnuzˌlɛtər/","/blɔg poʊst/","/ˈfɔrəm poʊst/","/ˈkɑmɛnt ˈsɛkʃən/","/ˈɔnˌlaɪn ˈɑrtɪkəl/","/ˈprɪnɪd ɪˈdɪʃən/","/ˈdɪʤɪtəl ɪˈdɪʃən/","/ˈpeɪpərˌbæk/","/ˈhɑrdˌkəvər/","/audiobook/","/i bʊk/","/ˈlaɪbrɛˌri kɑrd/","/rɪˈnuəl deɪt/","/ˈoʊvərˈdu faɪn/","/ˌrɛzərˈveɪʃən lɪst/","/ˈrɛdɪŋ ˈlɛvəl/","/ˈrɛdɪŋ spid/","/ˌkɑmpriˈhɛnʃən kˈwɛʃən/","/voʊˈkæbjəˌlɛri noʊt/","/ˈmɑrʤən noʊt/","/ˈstədi noʊt/","/ˈflæʃˌkɑrd sɛt/","/ˈpræktɪs kwɪz/","/ˈænsər ki/","/ˌɛkspləˈneɪʃən noʊt/","/ˈstədi goʊl/"];
  const dictionaryDefinitions = ["the position of apprentice","financial aid that enables you to get trained for a specified job","a recruiter of personnel (especially for corporations)","","the act of deducting from an employee's salary","a personal or social separation (as between opposing factions)","","a legal document giving information required for employment of certain people in certain countries","a document attesting to the truth of certain stated facts","the act of granting credit or recognition (especially with respect to educational institution that maintains suitable standards)","","someone who enters into a subcontract with the primary contractor","the practice of giving expert advice within a particular field","number of people in a particular group","","","right granted by law or contract (especially a right to benefits)","a resentment strong enough to justify retaliation","","an organization of employees formed to bargain with the employer","","","","act of lowering in rank or position","","a person who follows next in order","one who precedes you in time (as in holding a position or office)","habitual absence from work","","","","","","","","","(military) leave granted in an emergency such as family sickness or death","","","","","","","","","short account of an incident (especially a biographical one)","marked by precise accordance with details","relating to or characteristic of diplomacy","having inner resources; adroit or imaginative","paying close attention especially to details","form the substance of","characterized by directness in manner or speech; without subtlety or evasion","capable of being believed","conforming to fact and therefore worthy of belief","having great diversity or variety","having or showing a sense of what is fitting and considerate in dealing with others","(of political bodies) not controlled by outside forces","cause to be unpretentious","cause to feel sure; give reassurance to","a ship with a reinforced bow to break up ice and keep channels open for navigation","the quality of having the properties that are right for a specific purpose","","","the area of cognitive psychology that studies the processes involved in solving problems","the cognitive process of reaching a decision","","","","","","","","","","","","","","","","customers collectively","(accounting) an intangible asset valued according to the advantage or reputation a business has acquired (over and above its tangible assets)","a feeling of satisfaction at having achieved your desires","goods carried by a large vehicle","","an additional charge (as for items previously omitted or as a penalty for failure to exercise common caution or common skill)","solve problems","","feeling or showing extreme anger","form a queue, form a line, stand in line","","the time that elapses between a stimulus and the response to it","","a service that provides information and assistance to the users of a computer network","","","","a request by the manufacturer of a defective product to return the product (as for replacement or repair)","","","","","","","","","","","","","","","","","","","","","","","","","","","","the work of cleaning and running a house","","","","someone who makes or repairs locks","a craftsman who installs and repairs pipes and fixtures and appliances","a person who installs or repairs electrical or telephone lines","a man skilled in various odd jobs and other small tasks","any of a variety of plants grown indoors for decorative purposes","a container with a handle and a spout with a perforated nozzle; used to sprinkle water over plants","an electrical home appliance that cleans by suction","the quantity that a dustpan will hold","the handle of a broom","","a bin for depositing things to be recycled","","electric lamp consisting of a transparent or translucent glass housing containing a wire filament (usually tungsten) that emits light when heated by electricity","an electric cord used to extend the length of a power cord","","a device for charging or recharging batteries","a clock that wakes a sleeper at some preset time","","a hanger that is shaped like a person's shoulders and used to hang garments on","a hamper that holds dirty clothes to be washed or wet clothes to be dried","a cord on which clothes are hung to dry","a kit of articles used in sewing","","","a list of items to be purchased","a plan and a room rate for providing a room and meals to guests at a hotel","","","a bottle for holding water","","","","a waterproof bag filled with ice: applied to the body (especially the head) to cool or reduce swelling","","a lock attached to the sashes of a double hung window that can fix both in the shut position","an alarm that is tripped off by fire or smoke","","","","a device that trips like a switch and opens the circuit when overloaded","","","","","","a center where the members of a community can gather for social or cultural activities","","","","","","","","","","","","","","","","","","","","","","a house separate from the main house; for housing guests","","","","","","","","","","","","","an expressway on which tolls are collected","","","part of a patient's medical history in which questions are asked in an attempt to find out whether the patient has hereditary tendencies toward particular diseases","the pressure of the circulating blood against the walls of the blood vessels; results from the systole of the left ventricle of the heart; sometimes measured for a quick evaluation of a person's health","the rate at which the heart beats; usually measured to obtain a quick evaluation of a person's health","temperature of the body; normally 98.6 F or 37 C in humans; usually measured to obtain a quick evaluation of a person's health","","","","allergic reaction to a substance ingested in food","","a seasonal rhinitis resulting from an allergic reaction to pollen","inflammation of the fauces and pharynx","","","pain in the chest","an ache localized in the stomach or abdominal region","an ache localized in the back","","","a painful wound caused by the thrust of an insect's stinger into skin","any red eruption of the skin","","","","","","","","adhesive tape used in dressing wounds","","measuring instrument for measuring temperature","","","","","","a serologic analysis of a sample of blood","","","","","","","a diet that contains adequate amounts of all the necessary nutrients required for healthy growth and activity","","","","","a room (as in a hotel or airport) with seating where people can wait","","","","","","","","","","","the government department in charge of domestic affairs","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","the quality of being the same in quantity or measure or value or status","the difference between the market value of a property and the claims held against it","unfair treatment of a person or group on the basis of prejudice","courteous regard for people's feelings","a requirement of etiquette or custom","a manner that does not take forms and ceremonies seriously","higher rank than that of others especially by reason of longer service","a conflict of people's opinions or actions or characters","trueness of course toward a goal","having the characteristic of lacking a true course toward a goal","","","","","a set of rules specifying the correct manner of dress while on the premises of the institution (or specifying what manner of dress is prohibited)","a day specified for religious observance","authorized by law and limiting work or official business","","","","barrier to communication resulting from speaking different languages","informal language consisting of words and expressions that are not considered appropriate for formal occasions; often vituperative or vulgar","an interpretation that removes obstacles to understanding","","","","the ability to change (or be changed) to fit changed circumstances","a state in which you want to learn more about something","","a document giving an official instruction or command","","","","","","(computer science) software that controls the execution of computer programs and may provide various services","a program used to view HTML documents","","","","","","","","","","","","","","","","","a sheet of paper with multiple columns; used by an accountant to assemble figures for financial statements","","","","","","","","","","","","","","","","","","","","","","a gas that contributes to the greenhouse effect by absorbing infrared radiation","","electrical device consisting of a large array of connected solar cells","a turbine that is driven by the wind","","fuel consisting of the remains of organisms preserved in rocks in the earth's crust with high carbon and hydrogen content","","","a window with two panes of glass and a space between them; reduces heat and noise transmission through the window","","","","the conservation of water resources","","","","","","","a bag made of paper or plastic for holding customer's purchases","","","","","","","","","","","","","","","the diversity of plant and animal life in a particular habitat (or in the world as a whole)","a species whose numbers are so small that the species is at risk of extinction","","","pollution of the atmosphere","pollution of the water in rivers and lakes","annoying and potentially harmful environmental noise","","","","","","","","","the heading or caption of a newspaper article","a heading of a subdivision of a text","","taking exception; especially a quibble based on a captious argument","a sentence that states the topic of its paragraph","","a general summary of a subject","an assertion of a right (as to money or property)","a short note recognizing a source of information or of a quoted passage","","a printed note placed below the text on a printed page","an alphabetical list of technical terms in some specialized field of knowledge; usually published as an appendix to a text on that field","","a list of divisions (chapters or articles) and the pages on which they start","","","","a drawing intended to explain how something works; a drawing showing the relation between the parts","the act of examining resemblances","the opposition or dissimilarity of things that are compared; ,","events that provide the generative force that is the origin of something","a phenomenon that follows and is caused by some previous phenomenon","serial arrangement in which things follow in logical order or a recurrent pattern","the act of predicting (as by reasoning about the future)","a characteristic (habitual or relatively temporary) state of feeling","an anticipated outcome that is intended or that guides your planned actions","","","the act of scanning; systematic examination of a prescribed region","a thin layer covering the surface of a liquid","","a critical review of a book (usually a recently published book)","a secret scheme to do something (especially something underhand or illegal)","the context and environment in which something is set","an imaginary person represented in a work of fiction (play or film or story)","someone who tells a story","a conversation between two persons","a statement that represents something in words","the subject matter of a conversation or discussion","a kind of literary or artistic work","a literary work based on the imagination and not necessarily on fact","prose writing that is not fictional","an account of the series of events making up a person's life","a biography of yourself","an account of the author's personal experiences","nonfictional prose forming an independent part of a publication","a small handbook","a thin triangular flap of a heart valve","an announcement containing information about an event; ; ; \"a notice of sale","report or open letter giving informal or confidential news of interest to a special group","","","","","","","a book with paper covers","a book with cardboard or cloth or leather covers","","","a card certifying the bearer's right to use the library","","","","","","","","","","","","","",""];
  const adjectiveWords = new Set([
    "commission-based", "meticulous", "diplomatic", "resourceful", "observant",
    "composed", "candid", "credible", "authentic", "versatile", "tactful",
    "autonomous", "humble", "evidence-based", "achievement-oriented",
    "results-driven", "detail-oriented", "people-focused", "time-conscious",
    "well-prepared", "underqualified", "irate"
  ]);
  const verbWords = new Set(["declutter", "de-escalate", "reassure", "scan", "skim"]);
  const definitionOverrides = Object.freeze({
    "traineeship": "a temporary position that combines practical work with structured training",
    "probationary period": "an initial period when an employer checks whether a new employee suits the role",
    "withholding": "money, especially tax, taken from pay before an employee receives it",
    "severance": "pay or benefits given to an employee when employment ends",
    "relocation package": "money and practical support provided when an employee moves for work",
    "transferable skill": "an ability that is useful in many different jobs and industries",
    "commission-based": "paid partly or mainly according to the amount sold or achieved",
    "appraisal cycle": "the regular schedule used for reviewing an employee's performance",
    "absenteeism": "the repeated or habitual absence of employees from work",
    "staff morale": "the confidence, satisfaction, and enthusiasm felt by a group of employees",
    "employee retention": "an organization's ability to keep its employees",
    "staff turnover": "the rate at which employees leave and are replaced",
    "job shadowing": "learning about a job by observing an experienced worker",
    "growth mindset": "the belief that abilities can improve through effort and learning",
    "problem-solving": "the process of finding effective answers to difficult situations",
    "decision-making": "the process of choosing between possible actions",
    "critical thinking": "careful analysis of information before reaching a judgment",
    "elevator introduction": "a short and persuasive professional introduction",
    "first contact resolution": "solving a customer's issue during the first interaction",
    "service recovery": "action taken to correct a service failure and rebuild trust",
    "customer journey": "the complete sequence of interactions a customer has with a business",
    "pain point": "a specific problem or frustration experienced by a customer",
    "touchpoint": "any moment when a customer interacts with a business or brand",
    "carbon footprint": "the total greenhouse gas emissions caused by a person, activity, or product",
    "renewable energy": "energy from sources that naturally replace themselves, such as sunlight or wind",
    "hydroelectric power": "electricity generated by moving water",
    "energy efficiency": "using less energy to provide the same result",
    "home insulation": "material that reduces heat transfer into or out of a home",
    "standby power": "electricity used by a device while it is waiting rather than fully operating",
    "single-use plastic": "plastic designed to be used once before being discarded",
    "electronic waste": "discarded electrical or electronic devices and components",
    "landfill site": "a place where waste is buried in the ground",
    "litter picking": "the activity of collecting rubbish from public places",
    "wildlife habitat": "a natural environment where wild plants and animals live",
    "clean air zone": "an area where higher-polluting vehicles may be restricted or charged",
    "sustainable travel": "travel planned to reduce environmental and social harm",
    "authorization": "official permission to access, use, or perform something",
    "cookie consent": "a user's permission for a website to store or read browser cookies",
    "incognito mode": "a browser mode that avoids saving local browsing history after the session",
    "caption": "a short description printed beside a picture, diagram, or photograph",
    "byline": "a line that names the author of an article",
    "plot": "the connected sequence of events in a story",
    "leaflet": "a small printed sheet or booklet that provides information",
    "notice": "a short written announcement that gives important information",
    "scan": "to read quickly in order to find a particular piece of information",
    "skim": "to read quickly in order to understand the main idea",
    "character": "a person represented in a story, play, film, or other narrative",
    "setting": "the time, place, and social environment in which a story happens"
  });

  function parseItems(group) {
    return group.items.trim().split("\n").map((line) => {
      const separator = line.indexOf("|");
      return [line.slice(0, separator).trim(), line.slice(separator + 1).trim()];
    });
  }

  function levelFor(group, itemIndex) {
    const [a2Count, b1Count] = group.levels;
    if (itemIndex < a2Count) return "A2";
    if (itemIndex < a2Count + b1Count) return "B1";
    return "B2";
  }

  function partOfSpeechFor(word) {
    if (adjectiveWords.has(word)) return "adjective";
    if (verbWords.has(word)) return "verb";
    return word.includes(" ") || word.includes("-") ? "noun phrase" : "noun";
  }

  function fallbackDefinition(word, partOfSpeech, topicEn) {
    if (partOfSpeech === "adjective") {
      return `describing a person, result, or approach as ${word.replaceAll("-", " ")}`;
    }
    if (partOfSpeech === "verb") {
      return `to carry out the action expressed by “${word}” in a practical ${topicEn} situation`;
    }
    const parts = word.replaceAll("-", " ").split(/\s+/);
    if (parts.length > 1) {
      const head = parts.at(-1);
      const modifier = parts.slice(0, -1).join(" ");
      return `a ${head} connected with ${modifier} in practical ${topicEn}`;
    }
    return `a practical ${topicEn} term for the idea or item called “${word}”`;
  }

  const flattened = [];
  topicGroups.forEach((group) => {
    parseItems(group).forEach(([word, definition], itemIndex) => {
      flattened.push({ group, word, definition, itemIndex });
    });
  });

  window.ENGLISH_COMPASS_VOCABULARY_EXPANSION_V2500 = Object.freeze(
    flattened.map(({ group, word, definition, itemIndex }, index) => {
      const partOfSpeech = partOfSpeechFor(word);
      const collocation = "use “" + word + "” in context";
      return Object.freeze({
        id: `vx2500-${String(index + 1).padStart(4, "0")}`,
        word,
        phonetic: phonetics[index] || `/${word.replaceAll("-", " ")}/`,
        partOfSpeech,
        definition,
        definitionEn: definitionOverrides[word] || dictionaryDefinitions[index] || fallbackDefinition(word, partOfSpeech, group.topicEn),
        collocation,
        example: "Our coach used “" + word + "” in a realistic " + group.topicEn + " sentence.",
        exampleZh: `在今天的${group.topic}练习中，我们学习了“${definition}”的实际用法。`,
        topic: group.topic,
        level: levelFor(group, itemIndex)
      });
    })
  );
})();

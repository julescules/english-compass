(function () {
  "use strict";

  const topicVocabulary = {
    "海外工作": [
      ["contract", "合同", "a written legal agreement"],
      ["payslip", "工资单", "a document showing pay and deductions"],
      ["permit", "许可证", "official permission to do something"],
      ["colleague", "同事", "a person you work with"],
      ["settle in", "适应新环境", "to become comfortable in a new place"]
    ],
    "求职面试": [
      ["candidate", "应聘者", "a person applying for a position"],
      ["strength", "优势", "a quality or skill you do well"],
      ["evidence", "证明；事例", "facts that support an answer"],
      ["rehearse", "排练", "to practise before a performance"],
      ["follow-up", "后续联系", "an action taken after an event"]
    ],
    "顾客服务": [
      ["complaint", "投诉", "a statement that something is wrong"],
      ["refund", "退款", "money returned after a purchase"],
      ["resolve", "解决", "to find an effective solution"],
      ["patient", "有耐心的", "able to stay calm while waiting"],
      ["alternative", "替代方案", "another possible choice"]
    ],
    "租房生活": [
      ["tenant", "租客", "a person who rents a home"],
      ["deposit", "押金", "money held as security for a rental"],
      ["inspection", "检查", "a careful official examination"],
      ["maintenance", "维修保养", "work that keeps something usable"],
      ["notice", "提前通知", "information given before a change"]
    ],
    "医疗健康": [
      ["symptom", "症状", "a sign that may show an illness"],
      ["appointment", "预约", "an arranged time to meet a professional"],
      ["dosage", "剂量", "the amount of medicine to take"],
      ["recover", "康复", "to become healthy again"],
      ["urgent", "紧急的", "needing quick attention"]
    ],
    "旅行出行": [
      ["platform", "站台", "the place where passengers board a train"],
      ["itinerary", "行程单", "a plan of places and travel times"],
      ["connection", "转乘衔接", "a second journey taken after the first"],
      ["local", "当地的", "belonging to the nearby area"],
      ["delay", "延误", "a period of unexpected waiting"]
    ],
    "学习方法": [
      ["review", "复习", "to study something again"],
      ["context", "语境", "the situation surrounding a word or idea"],
      ["feedback", "反馈", "comments that help someone improve"],
      ["strategy", "策略", "a planned way to reach a goal"],
      ["progress", "进步", "movement toward a better result"]
    ],
    "科技生活": [
      ["privacy", "隐私", "control over personal information"],
      ["update", "更新", "a newer version of software or information"],
      ["notification", "通知提醒", "a message sent by a device or service"],
      ["accessible", "无障碍的；易使用的", "designed so more people can use it"],
      ["backup", "备份", "an extra copy kept for safety"]
    ],
    "环保行动": [
      ["reusable", "可重复使用的", "able to be used many times"],
      ["waste", "浪费；废弃物", "material or resources used without need"],
      ["repair", "修理", "to make a damaged thing work again"],
      ["measure", "测量", "to find the amount or size of something"],
      ["impact", "影响", "a strong effect on a situation"]
    ],
    "文化交流": [
      ["custom", "习俗", "a traditional way of behaving"],
      ["gesture", "手势；表示", "a movement or action that communicates"],
      ["respectful", "尊重他人的", "showing care for other people or traditions"],
      ["interpret", "理解；诠释", "to explain the meaning of something"],
      ["tradition", "传统", "a belief or practice passed through generations"]
    ],
    "职场沟通": [
      ["priority", "优先事项", "the task that should be handled first"],
      ["handover", "工作交接", "the transfer of duties or information"],
      ["specific", "具体的", "clear and exact rather than general"],
      ["flexible", "灵活的", "able to change when needed"],
      ["clarify", "澄清", "to make an idea easier to understand"]
    ],
    "日常生活": [
      ["routine", "日常安排", "a regular way of doing things"],
      ["budget", "预算", "a plan for spending money"],
      ["neighbourhood", "社区；街区", "the area around where someone lives"],
      ["organise", "整理；安排", "to arrange things in a useful order"],
      ["balance", "平衡", "a healthy proportion between different needs"]
    ]
  };

  const raw = [
    {
      title: "First Week at the Bakery", titleZh: "面包店的第一周", topic: "海外工作",
      passage: `Mina started work at a small bakery in Dublin on a rainy Monday. She understood the recipes, but customers spoke faster than people in her language class. Instead of pretending, she learned three useful sentences for asking customers to repeat or point. Her colleague Sean also wrote common bread names on cards with simple pronunciation notes. By Friday, Mina could take most breakfast orders alone. She still made one mistake with change, so she counted coins slowly and asked Sean to check. The manager praised her careful attitude, not perfect English. Mina realised that asking clear questions helped her learn faster and made customers feel respected. She planned to add five new bakery words to her notebook every evening.`,
      translationZh: `米娜在一个下雨的星期一开始在都柏林一家小面包店工作。她看得懂配方，但顾客说话比语言课上的人快。她没有假装听懂，而是学了三句实用表达，请顾客重复或用手指示。她的同事肖恩还把常见面包名称写在卡片上，并标注简单发音。到了周五，米娜已经能独自处理大多数早餐订单。她找零时仍出过一次错，于是慢慢数硬币并请肖恩复核。经理表扬的是她认真的态度，而不是完美的英语。米娜意识到，清楚提问既能让她学得更快，也能让顾客感到被尊重。她打算每天晚上在笔记本里增加五个面包店单词。`,
      summary: "Asking for clarification and building a small daily vocabulary helped Mina become confident at a new bakery job.", summaryZh: "通过主动确认和每天积累少量词汇，米娜逐渐适应了面包店的新工作。",
      fact: "Sean made pronunciation cards for common bread names.", factZh: "肖恩为常见面包名称制作了发音卡。",
      inference: "Careful communication can matter more than perfect language when someone is new.", inferenceZh: "对新人来说，认真沟通可能比语言完全无误更重要。"
    },
    {
      title: "Reading a New Contract", titleZh: "读懂新合同", topic: "海外工作",
      passage: `Before signing his first contract in Canada, Jun read every page twice. The salary looked correct, but the section about overtime used words he did not know. A friend suggested signing quickly because the company was busy. Jun chose a safer approach and emailed human resources with two specific questions. The officer explained that evening overtime was paid, while weekend work could be exchanged for time off. She also pointed out a three-month probation period and a rule about giving two weeks of notice. Jun saved the explanation with the contract and signed the next day. His careful reading did not annoy the company. In fact, the officer said clear questions prevented later misunderstandings and showed professional responsibility.`,
      translationZh: `在签署自己在加拿大的第一份合同前，俊把每一页都读了两遍。工资数额看起来没问题，但加班部分用了他不认识的词。一位朋友建议他趁公司正忙赶快签字。俊选择了更稳妥的做法，给人力资源部门发邮件，提出两个具体问题。工作人员解释说，晚间加班会支付工资，而周末工作可以换成调休。她还指出合同有三个月试用期，以及离职需提前两周通知的规定。俊把解释和合同一起保存，第二天才签字。他的仔细阅读没有惹恼公司。相反，工作人员说，明确提问能够避免日后的误会，也体现了职业责任感。`,
      summary: "Jun protected himself and built trust by asking precise questions before signing an unfamiliar employment contract.", summaryZh: "俊在签署陌生劳动合同前提出精确问题，既保护了自己，也建立了信任。",
      fact: "Weekend work could be exchanged for time off.", factZh: "周末工作可以换成调休。",
      inference: "A responsible employer should be willing to explain unclear contract terms.", inferenceZh: "负责任的雇主应该愿意解释不清楚的合同条款。"
    },
    {
      title: "Asking About a Payslip", titleZh: "询问工资单", topic: "海外工作",
      passage: `Lina's first payslip from a hotel contained several unfamiliar deductions. The final amount was lower than she expected, and she worried that the hotel had made a mistake. At lunch, another worker advised her to complain immediately. Lina first compared the hours on the payslip with her own shift calendar. The hours were correct, so she circled the tax and pension lines and booked a short meeting with payroll. The payroll assistant explained each deduction and found that Lina had not submitted a form for her temporary tax status. After she completed it, part of the extra tax would be returned the following month. Lina left with a written explanation and decided to check every future payslip against her schedule.`,
      translationZh: `莉娜收到酒店发来的第一张工资单，上面有几项陌生的扣款。到手金额比她预期少，她担心酒店算错了。午餐时，另一位员工建议她立刻投诉。莉娜先把工资单上的工时与自己的排班日历逐项核对。工时没有问题，于是她圈出税款和养老金两栏，并预约与薪资部门进行一次简短会谈。薪资助理解释了每项扣款，还发现莉娜没有提交临时税务身份表。她补交后，多扣的一部分税会在下个月退回。莉娜带着书面说明离开，并决定以后每张工资单都要和排班表核对。`,
      summary: "Checking records first helped Lina ask payroll a focused question and discover a missing tax form.", summaryZh: "莉娜先核对记录，再向薪资部门精准提问，从而发现遗漏的税务表格。",
      fact: "Lina compared the payslip hours with her shift calendar before meeting payroll.", factZh: "莉娜在见薪资人员前先把工资单工时与排班日历进行了核对。",
      inference: "Keeping personal work records makes pay questions easier to investigate.", inferenceZh: "保留个人工作记录会让工资问题更容易查清。"
    },
    {
      title: "Joining the Morning Briefing", titleZh: "参加晨间简报", topic: "海外工作",
      passage: `At a warehouse in New Zealand, Paulo found the daily briefing difficult. The supervisor spoke for ten minutes about deliveries, safety, and staff changes, while everyone stood near noisy machines. Paulo remembered only half of the instructions. He began arriving five minutes early and chose a place close to the supervisor. During the briefing, he wrote only times, names, and action words instead of complete sentences. Afterward, he compared notes with a colleague and repeated his main task aloud: label the northern shipment before eleven. Within two weeks, Paulo missed fewer details and needed less help. The supervisor noticed the improvement and started posting a short written summary on the noticeboard, which also helped several local workers.`,
      translationZh: `保罗在新西兰一家仓库工作时，觉得每天的晨间简报很难跟上。主管用十分钟讲送货、安全和人员变动，而大家站在嘈杂机器旁。保罗只能记住一半指令。他开始提前五分钟到场，站在离主管较近的位置。简报期间，他只记录时间、人名和动作词，不再写完整句子。结束后，他与同事核对笔记，并大声复述主要任务：十一点前给北区货物贴标签。两周内，保罗漏掉的细节变少，也不再频繁求助。主管注意到这一进步，开始在公告板贴出简短书面摘要，这也帮助了几位本地员工。`,
      summary: "Paulo improved his understanding of noisy briefings by changing where, when, and how he took notes.", summaryZh: "保罗通过调整到场时间、站位和记笔记方式，提高了在嘈杂环境中听懂简报的能力。",
      fact: "Paulo wrote times, names, and action words rather than full sentences.", factZh: "保罗只记录时间、人名和动作词，而不是完整句子。",
      inference: "A communication adjustment designed for one learner can help an entire team.", inferenceZh: "为一个学习者做出的沟通调整也可能帮助整个团队。"
    },
    {
      title: "A Safer Night Shift", titleZh: "更安全的夜班", topic: "海外工作",
      passage: `Nora worked her first night shift at a care home and received a long list of tasks. Near midnight, a resident asked for help while Nora was preparing medicine records. She wanted to respond quickly, but she was unsure whether she could leave the records open. Nora called the senior worker and explained both priorities. The senior worker secured the documents, then accompanied Nora to the resident's room. Later, they reviewed the emergency procedure together. Nora learned which situations required an immediate response, which could wait, and who must be contacted. She copied the key phone numbers onto the approved staff card rather than her personal phone. The shift stayed calm, and Nora understood that asking for support was part of safe work, not a sign of weakness.`,
      translationZh: `诺拉在护理院上第一次夜班，收到了一长串任务。接近午夜时，一位住户请求帮助，而诺拉正在整理用药记录。她想立刻过去，却不确定是否可以把记录敞开放着。诺拉打电话给资深员工，同时说明两项任务的优先级。资深员工先妥善收好文件，再陪诺拉去住户房间。之后，两人一起复习了紧急处理流程。诺拉弄清了哪些情况必须立即响应、哪些可以等待，以及应该联系谁。她把关键电话号码抄在获准使用的员工卡上，而不是私人手机里。整个夜班保持平稳，诺拉也明白了：求助是安全工作的一部分，并不代表软弱。`,
      summary: "Nora handled competing night-shift duties safely by consulting a senior worker and learning the emergency procedure.", summaryZh: "诺拉通过请教资深员工并学习紧急流程，安全处理了夜班中相互冲突的任务。",
      fact: "The senior worker secured the medicine records before helping the resident.", factZh: "资深员工在帮助住户前先妥善收好了用药记录。",
      inference: "Good safety decisions sometimes require pausing briefly to confirm the correct procedure.", inferenceZh: "良好的安全决策有时需要先短暂停下，确认正确流程。"
    },
    {
      title: "Learning Local Work Customs", titleZh: "学习当地职场习惯", topic: "海外工作",
      passage: `When Yuki joined an engineering office in Sweden, she noticed that colleagues stopped for coffee together every afternoon. She thought the break was optional and stayed at her desk to appear hardworking. After several days, she felt excluded from useful conversations about projects. Her team leader explained that the coffee break was informal, but it was also a normal time for colleagues to share updates and build trust. Yuki began joining twice a week. She listened first, then asked simple questions about local expressions and current tasks. Nobody expected her to attend every day or discuss private matters. Over time, the short breaks made it easier for Yuki to ask for help during formal work. She learned to observe a custom, ask about its purpose, and choose a comfortable level of participation.`,
      translationZh: `由纪加入瑞典一家工程公司后，注意到同事们每天下午都会一起喝咖啡。她以为休息可有可无，于是一直坐在工位上，想显得很勤奋。几天后，她发现自己错过了不少与项目有关的有用交流。组长解释说，咖啡休息虽然非正式，却也是同事分享进展、建立信任的常见时间。由纪开始每周参加两次。她先听大家聊天，再询问简单的当地表达和当前任务。没有人要求她每天都参加，也不要求谈私人话题。渐渐地，这些短暂休息让由纪在正式工作中更容易开口求助。她学会了先观察习惯、询问其目的，再选择自己舒适的参与程度。`,
      summary: "Yuki used an informal coffee custom to understand her team while keeping comfortable personal boundaries.", summaryZh: "由纪利用非正式咖啡时间了解团队，同时保留让自己舒适的个人界限。",
      fact: "Yuki began attending the coffee break twice a week.", factZh: "由纪开始每周参加两次咖啡休息。",
      inference: "Informal workplace moments can support formal cooperation without forcing personal disclosure.", inferenceZh: "非正式职场交流可以促进正式合作，并不意味着必须透露私人信息。"
    },
    {
      title: "Solving a Permit Delay", titleZh: "解决工作许可延误", topic: "海外工作",
      passage: `Ahmed was due to start a restaurant job, but his renewed work permit had not arrived. He feared losing the position and considered working before the document was ready. Instead, he told the manager immediately and contacted the immigration office through its official website. An officer confirmed that Ahmed could not begin paid work yet, but provided a reference number showing that his renewal was being processed. The manager moved Ahmed's start date by one week and invited him to attend an unpaid public orientation that did not involve work duties. Ahmed kept copies of every email and checked the rules again before attending. The permit arrived three days later. By being honest and using official information, he protected both himself and the restaurant from a legal problem.`,
      translationZh: `艾哈迈德本应开始一份餐厅工作，但续签的工作许可尚未寄到。他担心失去职位，甚至考虑在证件到达前先工作。最终，他立即告知经理，并通过移民部门官方网站联系工作人员。对方确认艾哈迈德暂时不能开始有偿工作，但提供了一个编号，证明续签正在处理中。经理把入职日期推迟一周，并邀请他参加一个不涉及工作职责的公开免费说明会。艾哈迈德保存了所有邮件副本，参加前再次核对规定。三天后，许可证到了。通过诚实沟通并使用官方信息，他避免让自己和餐厅陷入法律问题。`,
      summary: "Ahmed managed a delayed permit legally by informing his employer and checking official guidance.", summaryZh: "艾哈迈德通过通知雇主并核对官方指引，依法处理了工作许可延误。",
      fact: "The manager postponed Ahmed's start date by one week.", factZh: "经理把艾哈迈德的入职日期推迟了一周。",
      inference: "Transparent communication can preserve a job opportunity during an administrative delay.", inferenceZh: "在行政手续延误时，坦诚沟通能够帮助保留工作机会。"
    },
    {
      title: "Making Friends at Lunch", titleZh: "在午餐时结交朋友", topic: "海外工作",
      passage: `Sofia worked remotely for an international design company, but once a month the team met in a shared office. At her first meeting, everyone already seemed to know one another. During lunch, Sofia nearly sat alone because she was tired of speaking English. Then she asked a colleague whether the seat beside him was free. The conversation began with food, moved to design tools, and ended with a useful tip about a client. Sofia did not understand one joke, so she smiled and asked what the expression meant. Her colleagues explained it without making her uncomfortable. At the next monthly meeting, two people invited her to lunch first. Sofia discovered that one small question could open a professional and social connection without requiring a long or perfect conversation.`,
      translationZh: `索菲娅在一家国际设计公司远程工作，但团队每月会在共享办公室见一次面。第一次参加时，她觉得大家似乎早已彼此熟悉。午餐时，她因为说英语很累，差点独自坐下。后来她问一位同事旁边的座位是否空着。聊天从食物开始，转到设计工具，最后还得到一个与客户有关的实用提示。索菲娅没听懂一个笑话，就微笑着询问那句表达是什么意思。同事们自然地解释，没有让她尴尬。下次月度会议时，两个人主动邀请她一起吃午饭。索菲娅发现，一个小问题就能打开职业和社交联系，并不需要冗长或完美的对话。`,
      summary: "A simple lunch question helped Sofia form workplace connections and gain useful project knowledge.", summaryZh: "一个简单的午餐提问帮助索菲娅建立职场联系，也获得了有用的项目信息。",
      fact: "The lunch conversation eventually included a useful tip about a client.", factZh: "午餐谈话后来包含了一条关于客户的实用提示。",
      inference: "Brief social conversations can have practical value at work.", inferenceZh: "简短的社交对话也能在工作中产生实际价值。"
    },
    {
      title: "Planning a Career Abroad", titleZh: "规划海外职业", topic: "海外工作",
      passage: `After six months in a temporary office role in Australia, Mei had to decide what to do next. She enjoyed helping customers but wanted more responsibility. Rather than applying randomly, she listed the tasks that gave her energy and the skills employers often requested. She found that many permanent coordinator roles required stronger spreadsheet skills and clear telephone communication. Mei asked her supervisor for a monthly development meeting and enrolled in a low-cost evening course. She also volunteered to prepare one weekly report and answer the team phone during quiet periods. Three months later, she had evidence of new skills for her resume. Her plan did not guarantee immediate promotion, but it changed a vague ambition into small actions she could measure and discuss with future employers.`,
      translationZh: `在澳大利亚做了六个月临时办公室工作后，梅需要决定下一步。她喜欢帮助顾客，却希望承担更多责任。她没有随意投递，而是列出让自己有动力的任务，以及雇主经常要求的技能。她发现，许多正式协调员岗位需要更强的电子表格能力和清晰的电话沟通。梅请主管每月和她进行一次发展会谈，并报名参加价格不高的夜校课程。她还主动每周制作一份报告，并在清闲时接听团队电话。三个月后，她已有新技能的实际证据可以写进简历。这个计划不能保证立刻晋升，但它把模糊的愿望变成了可以衡量、也能与未来雇主讨论的小行动。`,
      summary: "Mei turned a broad career goal into measurable skill-building tasks supported by her supervisor and a course.", summaryZh: "梅把宽泛的职业目标转化成可衡量的技能提升任务，并借助主管和课程推进。",
      fact: "Mei volunteered to prepare one weekly report.", factZh: "梅主动提出每周制作一份报告。",
      inference: "Career planning becomes more convincing when goals produce visible evidence.", inferenceZh: "当职业目标能够形成可见证据时，职业规划会更有说服力。"
    },

    {
      title: "The Quiet Practice Room", titleZh: "安静的练习室", topic: "求职面试",
      passage: `Three days before an interview, Ravi booked a quiet room at the community library. At home, he always stopped practising when an answer sounded imperfect. In the library, he recorded one complete mock interview without restarting. When he listened back, he noticed that his answers were clear but too long. He marked three places where an example could replace a general statement. The next day, a friend asked the same questions in a different order, so Ravi learned to respond to meaning rather than memorised sequence. On interview morning, he reviewed only his key examples and breathed slowly for two minutes. Ravi still felt nervous, yet he could begin each answer calmly. Practice had not removed every mistake; it had made recovery easier.`,
      translationZh: `面试前三天，拉维在社区图书馆预约了一间安静的房间。在家练习时，只要答案不够完美，他就会停下来重来。在图书馆里，他录制了一次完整的模拟面试，中途没有重启。回听后，他发现答案很清楚，但太长。他标出三个可以用具体事例替代笼统陈述的地方。第二天，一位朋友打乱问题顺序提问，让拉维学会根据含义作答，而不是背诵固定顺序。面试当天早上，他只复习关键事例，并慢慢呼吸两分钟。拉维仍然紧张，但每个回答都能平稳开始。练习没有消除所有错误，却让他更容易从错误中恢复。`,
      summary: "Ravi used uninterrupted recording, reordered questions, and focused review to make interview recovery easier.", summaryZh: "拉维通过连续录音、打乱问题顺序和重点复习，提高了面试中的恢复能力。",
      fact: "Ravi recorded one full mock interview without restarting.", factZh: "拉维录制了一次完整模拟面试，中途没有重启。",
      inference: "Effective practice trains flexibility and recovery rather than perfect memorisation.", inferenceZh: "有效练习训练的是灵活性和恢复能力，而不是完美背诵。"
    },
    {
      title: "A Useful STAR Story", titleZh: "一个好用的STAR事例", topic: "求职面试",
      passage: `Elena knew employers wanted examples, but her interview answers often became confusing. She chose one story about fixing a delivery problem and organised it into four notes: situation, task, action, and result. The notes were only keywords, not a script. During practice, Elena explained that a supplier was late, her task was to protect a customer deadline, and she arranged a partial delivery with another driver. The order arrived on time, and the customer renewed the contract. Her coach asked what Elena herself had done, because the first version used "we" too often. Elena changed several sentences to show her decisions while still crediting the team. The final story lasted ninety seconds and gave the interviewer clear evidence of planning, communication, and responsibility.`,
      translationZh: `埃琳娜知道雇主想听具体事例，但她的面试回答常常变得混乱。她选择了一个解决送货问题的经历，并按情境、任务、行动和结果写成四组笔记。笔记只有关键词，不是完整稿子。练习时，埃琳娜说明供应商延迟，她的任务是保住顾客的截止日期，于是安排另一名司机先送部分货物。订单按时到达，顾客后来续签了合同。教练追问埃琳娜本人做了什么，因为初稿里“我们”太多。她修改几句话，在肯定团队的同时突出自己的决定。最终故事持续九十秒，为面试官清楚展示了计划、沟通和责任感。`,
      summary: "Elena shaped a confusing experience into a concise STAR story that showed both individual action and teamwork.", summaryZh: "埃琳娜把混乱的经历整理成简洁的STAR事例，同时展示个人行动和团队合作。",
      fact: "Elena's final STAR story lasted ninety seconds.", factZh: "埃琳娜最后的STAR事例持续了九十秒。",
      inference: "Structured examples make a candidate's contribution easier for an interviewer to evaluate.", inferenceZh: "结构化事例能让面试官更容易评估应聘者的贡献。"
    },
    {
      title: "Questions for the Employer", titleZh: "问雇主的问题", topic: "求职面试",
      passage: `At the end of a retail interview, Malik was invited to ask questions. In an earlier interview, he had said he had none and later regretted it. This time, he prepared four questions but chose two after listening to the conversation. First, he asked how new staff learned the store's customer service standards. The manager described shadowing and weekly coaching. Malik then asked what success in the first three months would look like. The answer included accurate stock work, friendly service, and reliable attendance. He did not ask about information already shown on the company website. The questions helped Malik decide that the training was suitable, and they showed the manager that he was thinking seriously about doing the job well rather than simply obtaining any position.`,
      translationZh: `零售岗位面试结束时，马利克被邀请提问。之前一次面试中，他说自己没有问题，后来很后悔。这次他准备了四个问题，但听完谈话后只选了两个。首先，他询问新员工如何学习门店的顾客服务标准。经理介绍了跟岗学习和每周辅导。接着，马利克问入职前三个月怎样才算成功。答案包括库存准确、服务友好和出勤可靠。他没有询问公司网站上已经写明的信息。这些问题帮助马利克判断培训是否适合自己，也让经理看到，他认真考虑的是如何做好工作，而不是随便获得一个职位。`,
      summary: "Malik used thoughtful, non-repetitive questions to assess the role and demonstrate genuine professional interest.", summaryZh: "马利克用经过思考且不重复公开信息的问题评估岗位，并展示真实的职业兴趣。",
      fact: "The manager said new staff received shadowing and weekly coaching.", factZh: "经理说新员工会接受跟岗学习和每周辅导。",
      inference: "Candidate questions can help both sides judge whether a position is a good match.", inferenceZh: "应聘者提问能帮助双方判断岗位是否合适。"
    },
    {
      title: "Recovering from a Hard Question", titleZh: "从难题中恢复", topic: "求职面试",
      passage: `During an interview for a hotel role, Camila was asked about a time she had failed. Her mind went blank, and the silence felt much longer than it really was. Instead of speaking immediately, she said, "May I take a moment to choose a useful example?" The interviewer agreed. Camila breathed, selected a scheduling mistake from a previous job, and explained how she had informed her supervisor, corrected the rota, and created a checking system. She finished by describing what she now did differently. The interviewer then asked a normal question about teamwork, and Camila answered smoothly. Afterward, she wrote down the difficult question for future practice. She learned that a short, confident pause was better than filling the space with an unclear or dishonest answer.`,
      translationZh: `在一家酒店岗位的面试中，卡米拉被问到一次失败经历。她的大脑一片空白，那段沉默感觉比实际长得多。她没有马上乱说，而是问：“我可以花一点时间选择一个合适的例子吗？”面试官同意了。卡米拉深呼吸，选了之前工作中的一次排班错误，说明自己如何通知主管、修正值班表并建立检查制度。最后，她讲了现在会怎样避免重犯。随后面试官问了一个普通的团队合作问题，卡米拉回答得很顺畅。结束后，她记下这道难题准备以后练习。她明白，短暂而自信的停顿，比用含糊或不诚实的话填满空白更好。`,
      summary: "Camila recovered from a difficult interview question by requesting a brief pause and giving an honest learning example.", summaryZh: "卡米拉请求短暂停顿，并给出诚实的学习事例，从一道困难面试题中恢复过来。",
      fact: "Camila described a past scheduling mistake and a new checking system.", factZh: "卡米拉讲述了一次排班错误和后来建立的检查制度。",
      inference: "Composure after uncertainty may reveal more professionalism than an instant answer.", inferenceZh: "面对不确定时保持镇定，可能比立即作答更能体现职业素养。"
    },
    {
      title: "The Online Interview Test", titleZh: "线上面试测试", topic: "求职面试",
      passage: `Tomas had an online interview at nine on Tuesday. On Monday evening, he tested the meeting link, camera, microphone, and headphones using the same laptop and room. The video looked dark, so he moved a lamp behind the screen instead of placing it behind himself. He closed a noisy window, charged the laptop, and put the recruiter's phone number beside him. Ten minutes before the interview, the meeting link stopped loading. Because Tomas had tested everything earlier, he knew the problem was new rather than a forgotten setting. He restarted the browser, then called the recruiter at the agreed number. She sent a fresh link, and the interview began only three minutes late. Preparation did not prevent the technical problem, but it made the solution calm and quick.`,
      translationZh: `托马斯周二九点有一场线上面试。周一晚上，他用同一台笔记本和同一个房间测试了会议链接、摄像头、麦克风和耳机。画面太暗，于是他把台灯移到屏幕后方，而不是放在自己背后。他关上嘈杂的窗户，给电脑充满电，并把招聘人员的电话号码放在手边。面试前十分钟，会议链接突然无法加载。因为托马斯此前已测试过所有设备，他知道这是新问题，而不是忘记设置。他重启浏览器，然后拨打约定号码联系招聘人员。对方发来新链接，面试只晚了三分钟。准备没有阻止技术故障，却让解决过程冷静而迅速。`,
      summary: "A complete technical rehearsal and backup contact helped Tomas solve an unexpected online interview problem quickly.", summaryZh: "完整的设备预演和备用联系方式帮助托马斯迅速解决了突发的线上面试故障。",
      fact: "Tomas placed the recruiter's phone number beside him before the interview.", factZh: "托马斯在面试前把招聘人员的电话号码放在身边。",
      inference: "Backup plans reduce the effect of technical failures even when they cannot prevent them.", inferenceZh: "备用方案即使无法阻止技术故障，也能降低其影响。"
    },
    {
      title: "Explaining an Employment Gap", titleZh: "解释工作空档期", topic: "求职面试",
      passage: `Priya had not worked for eight months while caring for her father. She worried that interviewers would see the gap as a weakness, so her first practice answer included too many personal details. A career adviser helped her make the answer shorter and more relevant. Priya said she had taken planned family leave, kept her office skills current through an online course, and was now ready for regular work. She then moved naturally to evidence from her previous role. During the real interview, the manager accepted the explanation and asked about the course. Priya described a spreadsheet project she had completed. She did not apologise for caring for her family or invent freelance work. A clear, honest bridge allowed the conversation to return to her present skills and availability.`,
      translationZh: `普里娅为了照顾父亲，有八个月没有工作。她担心面试官把这段空档视为弱点，因此第一次练习回答时讲了太多私人细节。职业顾问帮助她把答案变得更短、更相关。普里娅说明自己有计划地休了家庭照护假，通过在线课程保持办公技能，如今已准备好恢复规律工作。接着，她自然转到上一份工作的证据。正式面试时，经理接受了解释，并询问课程内容。普里娅介绍了自己完成的电子表格项目。她没有为照顾家人道歉，也没有虚构自由职业经历。清楚而诚实的过渡，让谈话回到她现在的技能和到岗条件上。`,
      summary: "Priya explained her employment gap honestly and briefly, then redirected attention to current skills and readiness.", summaryZh: "普里娅诚实简洁地解释工作空档期，再把注意力转回当前技能和工作准备。",
      fact: "Priya completed an online course and a spreadsheet project during her leave.", factZh: "普里娅在休假期间完成了在线课程和一个电子表格项目。",
      inference: "A career gap can be discussed without giving unnecessary private information.", inferenceZh: "谈论职业空档期时不必透露不必要的私人信息。"
    },
    {
      title: "A Group Interview Lesson", titleZh: "小组面试的一课", topic: "求职面试",
      passage: `In a group interview for a museum, six candidates had to plan a family event in twenty minutes. Leo wanted to show leadership, so he began offering many ideas. He soon noticed that two quieter candidates had not spoken. Leo paused, summarised the strongest suggestions, and invited each person to add one concern. One candidate identified an accessibility problem, while another suggested a cheaper room layout. Leo wrote both ideas on the shared plan and checked the remaining time. The group presented a practical event within the budget. Leo was not the loudest person during the final ten minutes, yet the assessors praised his listening and coordination. He learned that leadership in a group task means helping useful contributions appear, not controlling every part of the conversation.`,
      translationZh: `在一家博物馆的小组面试中，六名应聘者要在二十分钟内规划一场家庭活动。利奥想展示领导力，于是一开始提出很多点子。很快，他注意到两位较安静的应聘者还没说话。利奥暂停下来，总结最有力的建议，并邀请每个人提出一个顾虑。一人发现了无障碍问题，另一人建议采用更便宜的场地布局。利奥把两条意见都写进共同方案，并确认剩余时间。小组最终在预算内提出一项可行活动。最后十分钟利奥并不是声音最大的人，但评估者表扬了他的倾听和协调。他明白，小组任务中的领导力是让有价值的贡献出现，而不是控制所有谈话。`,
      summary: "Leo demonstrated group leadership by making space for quieter candidates and coordinating their useful ideas.", summaryZh: "利奥通过给安静成员发言空间并协调有用建议，展示了小组领导力。",
      fact: "A quieter candidate identified an accessibility problem.", factZh: "一位较安静的应聘者发现了无障碍问题。",
      inference: "Interview assessors may value inclusive coordination more than speaking the most.", inferenceZh: "面试评估者可能更看重包容性的协调，而不是说得最多。"
    },
    {
      title: "Salary Conversation", titleZh: "薪资对话", topic: "求职面试",
      passage: `After receiving a job offer, Grace was pleased but unsure about the salary. She researched the typical range for similar roles in the same city and considered her five years of relevant experience. During a scheduled call, she thanked the manager for the offer and asked whether there was flexibility in the base salary. She named a reasonable figure and supported it with two skills that would reduce training time. The manager could not approve that amount immediately, so Grace asked when a decision might be available. The next day, the company offered a smaller salary increase plus funding for a professional course. Grace compared the whole package, requested the details in writing, and accepted. The respectful conversation improved the offer without turning the discussion into a personal demand.`,
      translationZh: `收到工作邀请后，格蕾丝很高兴，但对薪资不太确定。她调查了同一城市相似岗位的常见范围，并考虑自己五年的相关经验。在约好的电话中，她先感谢经理提供机会，再询问基本工资是否有调整空间。她提出一个合理数字，并用两项能缩短培训时间的技能作支持。经理无法立即批准该数额，于是格蕾丝询问何时能得到决定。第二天，公司给出较小幅度的加薪，并提供职业课程经费。格蕾丝比较整个待遇方案，要求以书面形式确认细节，然后接受。尊重的沟通改善了条件，也没有把讨论变成个人要求。`,
      summary: "Grace negotiated a job offer with market research, evidence, flexibility, and attention to the complete package.", summaryZh: "格蕾丝依据市场信息和个人证据灵活协商，并综合评估了完整待遇。",
      fact: "The final offer included a smaller raise and funding for a professional course.", factZh: "最终方案包括较小幅度的加薪和职业课程经费。",
      inference: "Salary negotiation can include benefits beyond the base amount of money.", inferenceZh: "薪资协商可以包含基本工资之外的福利。"
    },
    {
      title: "The Follow-Up Email", titleZh: "面试后的邮件", topic: "求职面试",
      passage: `After interviewing for a laboratory assistant role, Ben wanted to send a follow-up message. His first draft repeated his entire resume and asked when he would be hired. He replaced it with three short paragraphs. The first thanked the panel for its time. The second mentioned their discussion about accurate sample labels and added one relevant achievement from his current job. The last confirmed his interest and invited further questions. Ben checked every name against the interview invitation before sending the email that afternoon. Four days later, the recruiter replied that the decision would take another week. Ben waited until that date before asking for an update. His messages were brief, connected to the interview, and respectful of the timetable the employer had provided.`,
      translationZh: `参加实验室助理岗位面试后，本想发一封后续邮件。他的初稿重复了整份简历，还直接问什么时候能被录用。后来他改成三个短段落：第一段感谢面试小组抽时间交流；第二段提到双方关于样本标签准确性的讨论，并补充自己现岗位的一项相关成绩；最后确认对职位仍感兴趣，并欢迎对方继续提问。本在当天下午发送前，按面试邀请逐一核对了姓名。四天后，招聘人员回复说决定还需一周。本等到那个日期后才询问进展。他的邮件简短、紧扣面试内容，也尊重雇主给出的时间表。`,
      summary: "Ben wrote a concise, personalised follow-up email and respected the employer's stated decision schedule.", summaryZh: "本写了一封简洁且有针对性的后续邮件，并尊重雇主给出的决定时间表。",
      fact: "Ben checked every recipient's name against the interview invitation.", factZh: "本按照面试邀请核对了每位收件人的姓名。",
      inference: "A good follow-up adds relevance without pressuring the employer for an immediate answer.", inferenceZh: "好的后续联系会补充相关信息，而不会逼迫雇主立即答复。"
    },

    {
      title: "The Missing Birthday Cake", titleZh: "丢失的生日蛋糕", topic: "顾客服务",
      passage: `A customer arrived at a bakery to collect a birthday cake, but the order was not on the collection shelf. The customer was upset because the party began in one hour. Hana, the assistant, first checked the receipt and repeated the cake size, message, and collection time. She then searched the cold room and called the decorating station. The cake had been placed under the customer's company name rather than her family name. Hana brought it out, checked the spelling on top, and offered candles while the customer waited. She did not blame the customer or another worker. After collection, Hana added both names to the order record and suggested a new search field for future bookings. The party stayed on schedule, and the bakery improved its process.`,
      translationZh: `一位顾客到面包店领取生日蛋糕，但取货架上没有她的订单。顾客很着急，因为派对一小时后就开始。店员哈娜先查看收据，复述蛋糕尺寸、祝福文字和取货时间。随后她检查冷藏室，并致电装饰台。原来蛋糕被登记在顾客的公司名称下，而不是姓氏下。哈娜把蛋糕取出，核对顶部拼写，并在顾客等待时赠送蜡烛。她没有责怪顾客或其他员工。取货后，哈娜把两个名称都补进订单记录，并建议为今后的预订增加新的搜索字段。派对按时进行，面包店流程也得到改进。`,
      summary: "Hana solved a missing-order problem calmly and turned its cause into a useful process improvement.", summaryZh: "哈娜冷静解决订单找不到的问题，并把原因转化为流程改进。",
      fact: "The cake was filed under the customer's company name.", factZh: "蛋糕被登记在顾客的公司名称下。",
      inference: "Recording alternate customer details can prevent avoidable collection delays.", inferenceZh: "记录顾客的备用信息能够避免不必要的取货延误。"
    },
    {
      title: "A Refund Without Conflict", titleZh: "不争吵的退款", topic: "顾客服务",
      passage: `Marcus returned a pair of headphones that stopped working after ten days. He had the digital receipt but not the original box. The new cashier believed no refund was possible and began quoting a rule from memory. Her supervisor, Inez, asked Marcus what outcome he wanted, then checked the current policy on the store system. The policy allowed a refund for a faulty product with proof of purchase, even without packaging. Inez tested the headphones, recorded the fault, and processed the refund to the original card. She also showed the cashier where to find the policy and explained the difference between an unwanted item and a faulty one. Marcus left satisfied, while the cashier gained information that could prevent a future argument.`,
      translationZh: `马库斯退回一副使用十天后停止工作的耳机。他有电子收据，但没有原包装。新收银员凭记忆认为不能退款，并开始背诵规定。主管伊内兹先问马库斯希望怎样解决，然后在门店系统中查看最新政策。政策允许有购买证明的故障商品退款，即使没有包装。伊内兹测试耳机、记录故障，并把款项退回原银行卡。她还向收银员展示在哪里查询政策，并解释“不想要的商品”和“故障商品”之间的区别。马库斯满意离开，收银员也获得了能避免未来争执的信息。`,
      summary: "Inez resolved a refund request by listening, checking the live policy, and teaching the cashier the correct distinction.", summaryZh: "伊内兹通过倾听、查询现行政策并指导收银员，妥善处理了退款请求。",
      fact: "The current policy allowed faulty goods to be refunded without the original packaging.", factZh: "现行政策允许故障商品在没有原包装时退款。",
      inference: "Checking an authoritative policy is safer than relying on memory during a dispute.", inferenceZh: "发生争议时，查询权威政策比依赖记忆更稳妥。"
    },
    {
      title: "Helping a Confused Tourist", titleZh: "帮助迷路的游客", topic: "顾客服务",
      passage: `At a city information desk, an elderly tourist asked Maya how to reach a famous garden. He spoke limited English and looked confused by the bus map. Maya avoided giving six instructions at once. She circled the correct bus stop on a small paper map, wrote the route number clearly, and pointed to a photograph of the garden entrance. Then she asked the tourist to show where he would change buses. His answer revealed that he had misunderstood the direction of travel. Maya corrected the arrow and wrote the name of the final stop for him to show the driver. She also marked the information office's phone number. The tourist repeated the plan successfully and left with one simple route he could follow with confidence.`,
      translationZh: `在城市信息台，一位年长游客询问玛雅怎样前往著名花园。他英语有限，看着公交地图很困惑。玛雅没有一次给出六条指令。她在小纸图上圈出正确车站，清楚写下线路号，并指向花园入口的照片。接着，她请游客指出自己会在哪里换车。这个回答暴露出他误解了行驶方向。玛雅纠正箭头，并写下终点站名称，方便他给司机看。她还标出信息台电话号码。游客成功复述路线，带着一条简单、可以放心执行的行程离开。`,
      summary: "Maya made complex travel directions usable through visual cues, a teach-back check, and one clear route.", summaryZh: "玛雅通过视觉提示、复述确认和一条清晰路线，让复杂指引变得可执行。",
      fact: "Maya asked the tourist to show where he would change buses.", factZh: "玛雅请游客指出他准备在哪里换车。",
      inference: "Asking someone to repeat a plan can uncover misunderstandings before they cause trouble.", inferenceZh: "让对方复述计划，可以在误解造成麻烦前发现问题。"
    },
    {
      title: "A Busy Café Queue", titleZh: "咖啡店的长队", topic: "顾客服务",
      passage: `At eight thirty, a café queue reached the door because one coffee machine had failed. Customers could see staff moving quickly but did not know why service was slow. Sam placed a small sign near the entrance explaining the problem and the expected ten-minute wait. He then offered three drinks that could be prepared on the working machine and asked people with train departures to tell him. One customer chose a faster drink; another decided to return later. Sam thanked everyone instead of making promises he could not keep. When the machine was repaired, he removed the sign and told the remaining customers immediately. The queue became shorter, and fewer people complained because they could make informed choices about their time.`,
      translationZh: `早上八点半，一台咖啡机故障，咖啡店的队伍一直排到门口。顾客看见员工忙碌，却不知道服务为什么变慢。萨姆在入口放了小牌子，说明问题和预计十分钟的等待时间。他列出三种可用另一台机器制作的饮品，并请赶火车的人主动说明。一位顾客改点更快的饮品，另一位决定稍后再来。萨姆感谢大家，没有作出无法保证的承诺。机器修好后，他立即撤下告示并通知仍在等候的顾客。队伍变短，投诉也减少，因为顾客能够根据真实信息安排自己的时间。`,
      summary: "Transparent wait information and practical choices helped Sam manage a café delay fairly.", summaryZh: "透明的等待信息和实用选择帮助萨姆公平地处理咖啡店延误。",
      fact: "The sign stated an expected wait of ten minutes.", factZh: "告示写明预计等待十分钟。",
      inference: "Customers often accept delays better when they receive honest information and options.", inferenceZh: "当顾客得到诚实信息和选择时，通常更能接受延误。"
    },
    {
      title: "The Wrong Online Order", titleZh: "寄错的网购订单", topic: "顾客服务",
      passage: `Nadia ordered a blue jacket online but received green trousers. In the support chat, she uploaded a photograph of the parcel label and the item. The agent, Joel, apologised and checked whether the jacket was still in stock before suggesting a solution. It was available, so he arranged an immediate replacement and sent a prepaid return label for the trousers. Nadia needed the jacket for a trip in four days. Joel therefore upgraded delivery at no cost and gave her a tracking link. He did not ask her to place and pay for a second order. The next morning, Joel checked the tracking status and sent one short update. The correct jacket arrived before the trip, and the company could investigate the warehouse label using Nadia's photograph.`,
      translationZh: `娜迪娅网购了一件蓝色夹克，却收到一条绿色裤子。在客服聊天中，她上传了包裹标签和商品照片。客服乔尔先道歉，并在提出方案前确认夹克是否还有库存。库存充足，于是他立即安排换货，并发送裤子的预付费退货标签。娜迪娅四天后旅行，需要这件夹克。乔尔因此免费升级配送，并提供追踪链接。他没有让她重新下单、再次付款。第二天早上，乔尔查看物流状态并发来一条简短更新。正确夹克在出发前到达，公司也能利用娜迪娅的照片调查仓库标签问题。`,
      summary: "Joel corrected a shipping error with evidence, a no-cost replacement, faster delivery, and proactive tracking.", summaryZh: "乔尔通过核对证据、免费换货、加快配送和主动跟踪纠正了发货错误。",
      fact: "Joel upgraded the replacement delivery without charging Nadia.", factZh: "乔尔免费升级了换货配送。",
      inference: "A complete service recovery addresses both the original error and the customer's deadline.", inferenceZh: "完整的服务补救既要处理原始错误，也要顾及顾客的时间限制。"
    },
    {
      title: "Listening Before Offering", titleZh: "先听再给方案", topic: "顾客服务",
      passage: `A gym member approached the desk and said she wanted to cancel because the changing room was always crowded. The assistant immediately offered a cheaper membership, but the customer shook her head. A senior colleague asked two open questions and learned that the member liked the gym; her real problem was getting ready for work after the morning class. The colleague showed her that the same class ran thirty minutes earlier on two days and that private shower rooms were quieter upstairs. The member tried the alternative schedule for a week before making a decision. She eventually kept her membership. The cheaper price had not solved the problem because cost was not the cause. Careful listening revealed a practical option that matched the customer's actual routine.`,
      translationZh: `一位健身房会员来到前台，说因为更衣室总是拥挤，想取消会员。店员立即提出更便宜的套餐，但顾客摇头。资深同事问了两个开放式问题，了解到她其实喜欢健身房，真正的问题是早课后要赶去上班。资深同事告诉她，同一课程每周有两天会提前三十分钟开课，而且楼上的独立淋浴间更安静。会员先试了一周替代时间表，再作决定，最后保留了会员。降价没有解决问题，因为费用并不是原因。认真倾听找到了符合顾客真实日程的实用方案。`,
      summary: "Open questions revealed that schedule and space, not price, were the real reasons behind a cancellation request.", summaryZh: "开放式提问发现，取消会员的真正原因是时间和空间，而不是价格。",
      fact: "The customer tried an earlier class schedule for one week.", factZh: "顾客试用了一周更早的课程时间。",
      inference: "Offering a solution too early can miss the need behind a customer's words.", inferenceZh: "过早提出方案可能会忽略顾客话语背后的真实需求。"
    },
    {
      title: "A Customer with Hearing Loss", titleZh: "接待听力受损的顾客", topic: "顾客服务",
      passage: `At a pharmacy counter, a customer told Amir that she had difficulty hearing. The store was busy, and a glass screen made speech less clear. Amir faced the customer, spoke at a normal pace, and moved to a quieter consultation point with her agreement. He did not shout or continue speaking while looking at the computer. For medicine instructions, he used the printed label and wrote one additional time beside the morning dose. Then he asked the customer how she preferred to confirm the information. She chose to read the notes back. Amir corrected one misunderstanding about taking the tablets with food. The interaction took two extra minutes, but it protected privacy and reduced the chance of a medication error.`,
      translationZh: `在药房柜台，一位顾客告诉阿米尔自己听力有困难。门店很忙，玻璃隔板让声音更不清楚。阿米尔面向顾客，以正常速度说话，并在征得同意后带她到较安静的咨询区。他没有大喊，也没有一边盯着电脑一边讲话。说明用药时，他使用打印标签，并在早晨剂量旁补写了一个时间。随后他询问顾客希望如何确认信息。顾客选择把笔记读回来。阿米尔纠正了一个关于随餐服药的误解。整个交流只多花两分钟，却保护了隐私，也降低了用药错误的风险。`,
      summary: "Amir adapted the environment and confirmation method to communicate medicine instructions accessibly and privately.", summaryZh: "阿米尔调整环境和确认方式，以无障碍且保护隐私的方式说明用药信息。",
      fact: "The customer confirmed the instructions by reading the notes back.", factZh: "顾客通过把笔记读回来确认了说明。",
      inference: "Accessible service often depends on asking the customer which communication method works best.", inferenceZh: "无障碍服务往往需要询问顾客哪种沟通方式最有效。"
    },
    {
      title: "Turning Feedback into Change", titleZh: "把反馈变成改变", topic: "顾客服务",
      passage: `A small cinema collected comment cards for months, but staff rarely saw the results. When Rina became shift leader, she grouped the latest comments into sound, seating, cleanliness, and booking issues. Most comments were positive, yet seven people mentioned that film subtitles were difficult to read from the side rows. Rina checked the screen from different seats and photographed the problem for the manager. The cinema could not replace the screen immediately, so it reserved clearer central seats for customers who requested subtitle access and added guidance to online booking. A technician adjusted the projector the following month. Rina then displayed a short "You said, we did" note in the lobby. Customers could see that specific feedback had produced both a temporary response and a longer-term fix.`,
      translationZh: `一家小电影院几个月来一直收集意见卡，但员工很少看到结果。莉娜成为值班主管后，把最新评论按声音、座位、清洁和订票问题分类。大多数反馈是正面的，但有七个人提到从侧边座位很难看清电影字幕。莉娜从不同座位检查屏幕，并拍照向经理说明问题。电影院无法立即更换屏幕，于是为需要字幕无障碍的顾客保留视野更清楚的中央座位，并在网上订票中增加说明。次月，技术人员调整了投影仪。莉娜随后在大厅展示“您反馈，我们行动”的简短告示。顾客能看到，具体反馈带来了临时应对和长期修复。`,
      summary: "Rina organised repeated customer feedback, verified the problem, and connected a temporary response with a lasting fix.", summaryZh: "莉娜整理重复反馈、验证问题，并把临时应对与长期修复结合起来。",
      fact: "Seven customers reported difficulty reading subtitles from side seats.", factZh: "七位顾客反映从侧边座位难以看清字幕。",
      inference: "Customers are more likely to value feedback systems when visible actions follow their comments.", inferenceZh: "当反馈之后有可见行动时，顾客更容易认可反馈机制。"
    },
    {
      title: "The Last Train Complaint", titleZh: "末班车投诉", topic: "顾客服务",
      passage: `A delayed theatre performance ended after the last train had left. Several visitors came to the service desk angry because the website had listed an earlier finishing time. Owen first confirmed the actual end time and checked the saved event page. The page was wrong by twenty minutes. He apologised clearly, contacted a local taxi company for a group rate, and gave visitors the option to wait indoors. The theatre paid the difference between the train fare and shared taxis for people who kept receipts. Owen collected email addresses only from visitors who wanted an update. The next morning, the theatre corrected every event time and added a final check before publishing schedules. A written apology explained the error and the reimbursement process without blaming the performers.`,
      translationZh: `一场戏剧演出延迟结束，观众出来时末班车已经开走。几位访客愤怒地来到服务台，因为网站标注的结束时间更早。欧文先确认实际结束时间，并查看保存的活动页面。页面确实差了二十分钟。他明确道歉，联系当地出租车公司争取拼车价格，并让访客可以留在室内等待。保留收据的人由剧院补贴火车票与拼车费之间的差额。欧文只向希望收到更新的访客收集邮箱。第二天早上，剧院修正了所有活动时间，并在发布日程前增加最终检查。书面道歉说明错误和报销流程，没有把责任推给演员。`,
      summary: "Owen verified a scheduling error, arranged safe transport, and helped the theatre prevent the same complaint.", summaryZh: "欧文核实时间错误、安排安全交通，并帮助剧院防止同类投诉再次发生。",
      fact: "The published finishing time was wrong by twenty minutes.", factZh: "公布的结束时间有二十分钟误差。",
      inference: "A useful apology combines responsibility with a concrete remedy and prevention step.", inferenceZh: "有效的道歉会把承担责任、具体补救和预防措施结合起来。"
    },

    {
      title: "Viewing a Small Flat", titleZh: "看一套小公寓", topic: "租房生活",
      passage: `Chen viewed a studio flat near his new workplace. The photographs online made it look bright, but the visit took place on a cloudy afternoon. Chen opened the curtains, checked the window locks, and listened for traffic with the windows both open and closed. He measured the space beside the bed because his desk needed to fit there. The agent said heating was included, so Chen asked for that promise in the written lease. He also photographed the electricity meter with permission and asked which repairs were planned before move-in. The flat was small, but the commute was easy and the building felt secure. Chen did not decide during the visit. He reviewed his notes and total monthly costs that evening before applying.`,
      translationZh: `陈去看了一套靠近新工作地点的单间公寓。网上照片显得很明亮，但实地看房是在阴天的下午。陈拉开窗帘，检查窗锁，并分别在开窗和关窗时听交通噪声。他测量床边空间，因为需要放下一张书桌。中介说暖气费包含在租金内，陈要求把这项承诺写进租约。他还在征得同意后拍下电表，并询问入住前计划完成哪些维修。公寓虽小，但通勤方便，建筑也让人觉得安全。陈没有当场决定，而是在晚上回顾笔记和每月总费用后才申请。`,
      summary: "Chen evaluated a small flat with practical checks, written confirmation, measurements, and time to compare costs.", summaryZh: "陈通过实际检查、书面确认、尺寸测量和冷静比较费用来评估小公寓。",
      fact: "Chen asked for included heating to be confirmed in the lease.", factZh: "陈要求在租约中确认暖气费包含在内。",
      inference: "An attractive listing should not replace careful inspection and cost review.", inferenceZh: "看起来吸引人的房源信息不能代替仔细检查和费用核算。"
    },
    {
      title: "Photographing the Move-In", titleZh: "入住时拍照", topic: "租房生活",
      passage: `On move-in day, Aisha received a condition report for her rented room. The report described the walls as clean, but she noticed a small water mark behind the door and a chip in the desk. Before unpacking, she took clear photographs with the date visible and added written notes to the report. She emailed the updated document to the agent that afternoon and asked for confirmation. The mark was dry, so no emergency repair was needed, but the agent arranged an inspection for the following week. Aisha stored the signed report and email in a rental folder. Six months later, during another inspection, the photographs showed that the desk damage had existed before she moved in. Her careful record protected both her deposit and the landlord's understanding of the property.`,
      translationZh: `入住当天，艾莎收到了一份租住房间状况报告。报告称墙面干净，但她在门后发现一小块水渍，书桌也有缺口。拆行李前，她拍下带有日期的清晰照片，并在报告中补充书面说明。当天下午，她把更新后的文件发给中介并要求确认。水渍已经干燥，不需要紧急维修，但中介安排下周检查。艾莎把签字报告和邮件保存在租房文件夹中。六个月后再次检查时，照片证明书桌损伤在她入住前就已存在。认真记录既保护了她的押金，也帮助房东准确了解房屋状况。`,
      summary: "Dated photographs and an acknowledged condition report gave Aisha reliable evidence about pre-existing damage.", summaryZh: "带日期的照片和得到确认的房屋状况报告，为艾莎提供了原有损伤的可靠证据。",
      fact: "Aisha emailed the amended condition report to the agent on move-in day.", factZh: "艾莎在入住当天把修改后的状况报告发给中介。",
      inference: "Rental evidence is strongest when it is created early and shared with the other party.", inferenceZh: "租房证据在尽早制作并与对方共享时最有力。"
    },
    {
      title: "Sharing Kitchen Rules", titleZh: "合租厨房规则", topic: "租房生活",
      passage: `Four people shared a flat, and the kitchen became a source of tension. Food disappeared, dishes remained overnight, and nobody knew when the bins should go outside. At a short house meeting, each tenant named one problem without blaming a person. They agreed to label only special food, wash pans on the same day, and rotate the bin duty weekly. A paper calendar showed whose turn it was, while a group message reminded everyone the evening before collection. They also left one shelf for shared basics such as salt and cooking oil. After two weeks, the rules were not perfect, so they changed the bin reminder time and added a fifteen-minute Sunday clean. Clear responsibilities made the kitchen calmer without creating a long list of strict restrictions.`,
      translationZh: `四个人合租一套公寓，厨房逐渐成为矛盾来源。食物会不见，碗盘隔夜不洗，也没人知道什么时候把垃圾桶推出去。在一次简短的室友会议上，每位租客只说一个问题，不指责具体的人。大家同意只给特殊食物贴标签、锅具当天清洗，并每周轮换垃圾任务。纸质日历标明轮到谁，群消息则在收运前一晚提醒。他们还留出一层架子放盐和食用油等共用品。两周后规则仍不完美，于是大家调整垃圾提醒时间，并增加周日十五分钟清洁。明确责任让厨房更平静，又没有制定一大堆严格限制。`,
      summary: "Housemates reduced kitchen conflict through neutral discussion, visible responsibilities, shared basics, and later adjustment.", summaryZh: "室友们通过中立讨论、明确责任、设置共用品并后续调整，减少了厨房矛盾。",
      fact: "The housemates rotated responsibility for putting out the bins each week.", factZh: "室友们每周轮换把垃圾桶推出去的责任。",
      inference: "Shared rules work better when residents can review and adjust them after trying them.", inferenceZh: "共同规则在试行后可以复盘调整时会更有效。"
    },
    {
      title: "A Heating Repair Request", titleZh: "暖气维修申请", topic: "租房生活",
      passage: `During a cold weekend, Diego's bedroom radiator stopped heating. He checked that the other radiators worked and that the wall control was on. Rather than sending only "The heating is broken," he emailed the landlord with the room, the time the problem began, the checks he had completed, and two photographs of the display. He also explained that the room temperature had fallen to fifteen degrees. The landlord replied with an emergency maintenance number and permission to use a safe portable heater already stored in the flat. A technician arrived the next morning and replaced a valve. Diego recorded the visit and confirmed by email that the radiator worked again. His detailed report helped the landlord send the right person and reduced repeated questions.`,
      translationZh: `一个寒冷的周末，迭戈卧室的暖气片停止加热。他确认其他暖气片正常，墙上控制器也已打开。他没有只发一句“暖气坏了”，而是在邮件中写明房间、问题开始的时间、已完成的检查，并附上两张显示屏照片。他还说明室温已经降到十五度。房东回复了紧急维修电话，并允许使用公寓里已有的安全便携式取暖器。第二天早上，技术人员到场更换阀门。迭戈记录维修过程，并通过邮件确认暖气恢复正常。他的详细报告帮助房东派出合适人员，也减少了反复追问。`,
      summary: "Diego's precise heating report supported a safe temporary measure and a quick, appropriate repair.", summaryZh: "迭戈准确报告暖气问题，促成安全的临时措施和快速适当的维修。",
      fact: "The room temperature had fallen to fifteen degrees.", factZh: "房间温度已经降到十五度。",
      inference: "Useful maintenance requests describe evidence and prior checks, not only the final problem.", inferenceZh: "有效的维修申请不只说结果，还会描述证据和已做的检查。"
    },
    {
      title: "Understanding the Deposit", titleZh: "理解租房押金", topic: "租房生活",
      passage: `Before renting a room, Olivia was asked to transfer a large deposit directly to a personal bank account. The advertisement looked attractive, but she had not seen the property or met the owner. Olivia paused and checked the official tenant guidance for her city. It said deposits should be protected through an approved scheme and that tenants should receive written details. She asked the owner for a viewing, proof of identity, a draft lease, and the name of the protection scheme. The person refused a viewing and demanded payment that evening. Olivia did not transfer the money and reported the advertisement to the platform. A week later, it was removed. She found another room through an agent who provided receipts and deposit-protection information before asking for payment.`,
      translationZh: `租房前，奥利维娅被要求把一大笔押金直接转入个人银行账户。广告很吸引人，但她还没看过房，也没见过房东。奥利维娅停下来查看所在城市的官方租客指引。指引说押金应通过认可计划保护，租客应收到书面详情。她要求看房、核实身份、查看租约草案，并询问押金保护计划名称。对方拒绝看房，还要求当晚付款。奥利维娅没有转账，而是向平台举报广告。一周后广告被删除。她随后通过中介找到另一间房，对方在要求付款前提供了收据和押金保护信息。`,
      summary: "Official guidance and verification helped Olivia avoid a risky deposit demand and find a documented rental.", summaryZh: "官方指引和信息核实帮助奥利维娅避开高风险押金要求，找到手续完整的房源。",
      fact: "The advertiser refused to arrange a property viewing.", factZh: "发布广告的人拒绝安排看房。",
      inference: "Pressure to pay before basic rental checks is a reason to stop and verify.", inferenceZh: "在基本租房核查前催促付款，是应当暂停并核实的信号。"
    },
    {
      title: "Meeting the New Neighbours", titleZh: "认识新邻居", topic: "租房生活",
      passage: `After moving into an apartment building, Ken heard music through the wall on his second evening. It ended at ten, but he worried that every night would be noisy. The next day, he introduced himself to the neighbour rather than leaving an angry note. He learned that the music had been part of a one-time graduation dinner. Ken mentioned that he worked early shifts and asked whether they could exchange phone numbers for future problems. The neighbour agreed and told Ken that his washing machine also vibrated against the shared wall. Ken moved it slightly and added rubber pads. A week later, when the neighbour planned another gathering, she warned Ken in advance and lowered the music at nine thirty. A calm introduction helped both homes notice and solve noise issues.`,
      translationZh: `搬进公寓楼后的第二个晚上，肯听见隔墙传来音乐。音乐十点结束，但他担心以后每晚都会吵。第二天，他没有留下愤怒纸条，而是主动向邻居自我介绍。他得知那只是一次毕业聚餐。肯说明自己上早班，并询问是否可以交换电话号码，以便今后出现问题时联系。邻居同意了，也告诉肯，他的洗衣机靠着共用墙振动。肯稍微移动机器并加了橡胶垫。一周后，邻居计划再次聚会时提前通知肯，并在九点半调低音乐。一次平静的介绍帮助两个家庭发现并解决了噪声问题。`,
      summary: "A respectful introduction turned possible neighbour conflict into two-way communication and practical noise fixes.", summaryZh: "一次尊重的自我介绍把潜在邻里冲突变成双向沟通和实际降噪措施。",
      fact: "Ken added rubber pads under his washing machine.", factZh: "肯在洗衣机下加了橡胶垫。",
      inference: "Neighbour complaints can reveal that both sides have changes worth making.", inferenceZh: "邻里投诉可能让双方都发现值得改进的地方。"
    },
    {
      title: "Comparing Two Commutes", titleZh: "比较两条通勤路线", topic: "租房生活",
      passage: `Sara considered two rooms with the same rent. One was close to a train station but required a crowded transfer. The other looked farther away on the map, yet a direct bus stopped outside. Sara tested both journeys during her actual morning work time. The train route took forty minutes when everything ran well, but the transfer added stress and a second fare. The bus took fifty minutes, offered a seat after the third stop, and passed a supermarket. Sara also checked the last evening service for late shifts. She chose the bus route because it was more predictable and reduced weekly travel costs. The shortest distance was not the best daily option. Testing the whole routine gave her information that a rental advertisement could not show.`,
      translationZh: `萨拉在两间租金相同的房间之间选择。一间靠近火车站，但必须在拥挤处换乘；另一间地图上看起来更远，却有直达公交停在门口。萨拉在自己真实的早班时间分别测试两条路线。火车顺利时需要四十分钟，但换乘增加压力，还要付第二段票价。公交需要五十分钟，第三站后通常有座位，途中还经过超市。萨拉也查询了晚班后的末班服务。她选择公交路线，因为更可预测，也能降低每周交通费。距离最短不一定是最佳日常方案。完整测试生活流程，得到的是租房广告无法提供的信息。`,
      summary: "Sara chose housing by testing realistic travel time, reliability, cost, and daily convenience rather than map distance.", summaryZh: "萨拉通过实测通勤时间、可靠性、费用和生活便利性选房，而不是只看地图距离。",
      fact: "The direct bus passed a supermarket on its route.", factZh: "直达公交途中经过一家超市。",
      inference: "A slightly longer commute may be better when it is cheaper and more predictable.", inferenceZh: "稍长的通勤如果更便宜、更稳定，可能反而更好。"
    },
    {
      title: "Renewing the Lease", titleZh: "续签租约", topic: "租房生活",
      passage: `Two months before her lease ended, Fatima received a renewal offer with a rent increase. She wanted to stay because the flat was well maintained, but the new price stretched her budget. Fatima reviewed similar local listings and wrote to the landlord before the reply deadline. She thanked him for reliable repairs, explained that she had always paid on time, and asked whether a smaller increase was possible for a twelve-month renewal. She attached three comparable listings rather than making a vague complaint. The landlord proposed a middle figure and agreed to replace an old refrigerator. Fatima checked the new rent, dates, and repair promise in the written lease before signing. Starting early gave both sides time to discuss evidence without the pressure of an immediate move.`,
      translationZh: `租约结束前两个月，法蒂玛收到一份涨租的续约提议。她想留下，因为公寓维护得很好，但新价格让预算吃紧。法蒂玛查看附近相似房源，并在回复截止日前写信给房东。她先感谢房东维修及时，说明自己一直按时交租，再询问签十二个月时能否减少涨幅。她附上三个可比房源，而不是笼统抱怨。房东提出一个折中价格，并同意更换旧冰箱。法蒂玛在签字前确认新租金、日期和维修承诺都写进新租约。提早开始让双方有时间依据证据协商，不必在立即搬家的压力下决定。`,
      summary: "Fatima negotiated a lease renewal early with payment history, comparable listings, and written confirmation.", summaryZh: "法蒂玛提前利用付款记录、可比房源和书面确认协商续租。",
      fact: "The landlord agreed to replace an old refrigerator.", factZh: "房东同意更换一台旧冰箱。",
      inference: "Early evidence-based negotiation can create options beyond simply accepting or leaving.", inferenceZh: "提前依据证据协商，可以产生接受或搬走之外的选择。"
    },
    {
      title: "A Noisy Upstairs Room", titleZh: "楼上的噪声", topic: "租房生活",
      passage: `For three nights, Noor heard heavy footsteps above her bedroom after midnight. She recorded the dates and approximate times, but she did not record private conversations. First, she politely spoke to the upstairs tenant, who was surprised because he wore headphones and did not realise how loudly his chair moved. He added felt pads and moved evening exercise to another room. The footsteps improved, but a separate banging sound continued. Noor sent the building manager her short noise log. Maintenance discovered a loose pipe that knocked when the central heating cooled. After the pipe was secured, the building became quiet. By separating observed facts from assumptions, Noor avoided accusing her neighbour of every sound and helped identify two different causes.`,
      translationZh: `连续三个晚上，努尔在午夜后听到卧室楼上传来沉重脚步声。她记录日期和大致时间，但没有录下私人谈话。她先礼貌地与楼上租客沟通。对方很惊讶，因为戴着耳机，没有意识到椅子移动声很大。他加上毛毡垫，并把晚间锻炼移到另一个房间。脚步声改善了，但另一种敲击声仍存在。努尔把简短噪声日志发给楼管。维修人员发现，中央暖气冷却时有一根松动管道会敲击。管道固定后，楼里安静下来。努尔把观察事实与猜测分开，既没有把所有声音都怪到邻居头上，也帮助找出两个不同原因。`,
      summary: "Noor used respectful contact and a factual noise log to separate a neighbour issue from a building repair.", summaryZh: "努尔通过尊重沟通和事实噪声记录，把邻居问题与建筑维修问题区分开。",
      fact: "Maintenance found a loose heating pipe behind one of the noises.", factZh: "维修人员发现其中一种声音来自松动的暖气管道。",
      inference: "Accurate observation can prevent unfair blame when one problem has multiple causes.", inferenceZh: "当一个问题有多个原因时，准确观察能避免不公平指责。"
    },

    {
      title: "Booking a Same-Day Appointment", titleZh: "预约当天就诊", topic: "医疗健康",
      passage: `Early one morning, Luis developed a red, painful eye. He called the health centre and first gave his name, date of birth, and callback number. When the receptionist asked about urgency, Luis described when the redness began, whether his vision had changed, and that he did not have a serious injury. The receptionist used this information to arrange a same-day nurse appointment rather than a routine visit next week. She also told him not to drive if his vision became unclear and explained which symptoms required emergency help. Luis wrote down the appointment time and safety advice. At the clinic, the nurse quickly understood the timeline because Luis repeated the same clear facts. Preparing a short symptom description made the call faster and supported appropriate care.`,
      translationZh: `一天清晨，路易斯的一只眼睛发红并疼痛。他打电话给医疗中心，先提供姓名、出生日期和回拨号码。接待员询问紧急程度时，路易斯说明发红从何时开始、视力是否变化，以及自己没有严重外伤。接待员据此安排当天护士门诊，而不是下周的普通预约。她还提醒，如果视力模糊就不要开车，并说明哪些症状需要紧急帮助。路易斯记下预约时间和安全建议。到诊所后，他重复同样清晰的事实，护士很快了解时间线。提前准备简短的症状描述，让电话更高效，也帮助获得合适照护。`,
      summary: "A concise symptom timeline helped Luis receive an appropriately urgent appointment and remember safety advice.", summaryZh: "简洁的症状时间线帮助路易斯获得适当紧急程度的预约，并记住安全建议。",
      fact: "The health centre arranged a same-day appointment with a nurse.", factZh: "医疗中心安排了当天的护士门诊。",
      inference: "Specific symptom information helps health staff choose the right level of care.", inferenceZh: "具体症状信息能帮助医护人员选择合适的照护级别。"
    },
    {
      title: "Describing Pain Clearly", titleZh: "清楚描述疼痛", topic: "医疗健康",
      passage: `Mara had knee pain after a long walk, but saying only "It hurts a lot" did not explain enough. Before seeing the doctor, she noted the exact location, when the pain started, and which movements made it better or worse. She used a number from zero to ten to describe the pain at rest and on stairs. Mara also listed the medicine she had already taken and mentioned that the knee was not swollen. During the appointment, the doctor asked follow-up questions and examined her movement. He recommended rest, gentle exercises, and a review if swelling or severe pain developed. Mara received written instructions. Her organised description did not diagnose the problem herself; it gave the doctor clearer information for a safe assessment.`,
      translationZh: `玛拉长途步行后膝盖疼，但只说“很疼”并不能提供足够信息。看医生前，她记下疼痛的准确位置、开始时间，以及哪些动作会缓解或加重。她用零到十的数字分别描述静止和上楼时的疼痛程度。玛拉还列出已服用的药，并说明膝盖没有肿胀。就诊时，医生继续提问并检查她的活动。医生建议休息、做轻柔练习，如果出现肿胀或剧烈疼痛则复诊。玛拉收到书面说明。她有条理的描述并不是自我诊断，而是为医生进行安全评估提供更清晰的信息。`,
      summary: "Mara described pain with location, timing, triggers, intensity, and prior medicine instead of attempting self-diagnosis.", summaryZh: "玛拉用位置、时间、诱因、强度和已用药物描述疼痛，而不是自行诊断。",
      fact: "Mara rated her pain both at rest and while using stairs.", factZh: "玛拉分别评估了静止时和上楼时的疼痛程度。",
      inference: "Well-organised observations can improve a medical conversation without replacing professional judgement.", inferenceZh: "有条理的观察能改善医疗沟通，但不能替代专业判断。"
    },
    {
      title: "Reading a Medicine Label", titleZh: "阅读药品标签", topic: "医疗健康",
      passage: `After a clinic visit, Theo collected antibiotics from a pharmacy. At home, he noticed that the label said "twice daily," but he was unsure whether the doses should be taken together or separately. He did not guess. Theo called the pharmacy using the number on the receipt and read the medicine name and label aloud. The pharmacist explained that he should take one tablet about twelve hours apart, complete the full course, and follow the food instruction printed below. She also asked about an allergy listed in his record and confirmed that this medicine was suitable. Theo wrote morning and evening times on a calendar and set reminders. When one dose was late, he followed the written missed-dose advice instead of doubling the next tablet.`,
      translationZh: `就诊后，西奥从药房取回抗生素。回家后，他看到标签写着“每日两次”，却不确定两次药应该一起吃还是分开吃。他没有猜测，而是用收据上的电话联系药房，并读出药名和标签。药剂师解释说，应大约间隔十二小时服一片，完成整个疗程，并遵守下方印刷的进食说明。她还询问病历中的过敏信息，确认药物适合。西奥在日历上写下早晚时间，并设置提醒。有一次服药晚了，他按照书面的漏服指导处理，没有把下一次剂量加倍。`,
      summary: "Theo clarified an ambiguous dosage with the pharmacist and used written guidance rather than guessing or doubling doses.", summaryZh: "西奥向药剂师确认不清楚的剂量，并遵循书面指引，而不是猜测或加倍服药。",
      fact: "The pharmacist advised taking the tablets about twelve hours apart.", factZh: "药剂师建议两次服药大约间隔十二小时。",
      inference: "Short dosage phrases may need professional clarification before medicine is taken.", inferenceZh: "简短的剂量表述在服药前可能需要专业人员进一步解释。"
    },
    {
      title: "A Calm Dental Visit", titleZh: "一次平静的牙科就诊", topic: "医疗健康",
      passage: `Jae had avoided the dentist for years because an earlier treatment had frightened him. When a tooth began hurting, he booked an appointment and wrote that he was anxious in the online form. At the clinic, the dentist agreed on a hand signal Jae could use whenever he needed a pause. She explained each step before touching the tooth and showed him the X-ray. The first visit focused on examination and temporary pain relief, while the longer treatment was scheduled for another day. Jae used headphones during the procedure and practised slow breathing. Because he had some control and knew what would happen next, he completed the visit. The tooth still needed treatment, but the experience made returning feel possible rather than frightening.`,
      translationZh: `杰因为以前一次治疗让他害怕，多年来一直回避牙医。当牙齿开始疼时，他预约了就诊，并在网上表格中注明自己焦虑。到诊所后，牙医和杰约定一个手势，需要暂停时就使用。她在接触牙齿前解释每一步，并给他看X光片。第一次就诊主要进行检查和临时止痛，较长的治疗另约一天。杰在操作中戴着耳机，并练习缓慢呼吸。因为拥有一定控制感，也知道下一步会发生什么，他顺利完成就诊。牙齿仍需治疗，但这次经历让再次回来变得可以做到，而不再只有恐惧。`,
      summary: "Clear steps, a pause signal, and divided treatment helped Jae complete a dental visit despite anxiety.", summaryZh: "清楚说明、暂停手势和分阶段治疗帮助焦虑的杰完成了牙科就诊。",
      fact: "Jae and the dentist agreed on a hand signal for requesting a pause.", factZh: "杰与牙医约定了请求暂停的手势。",
      inference: "A sense of control can make necessary healthcare more manageable for an anxious patient.", inferenceZh: "对焦虑患者来说，一定的控制感能让必要医疗更容易承受。"
    },
    {
      title: "Supporting a Sick Colleague", titleZh: "帮助生病的同事", topic: "医疗健康",
      passage: `During a morning shift, Rosa's colleague Tom became pale and dizzy. Rosa asked him to sit in a safe place and informed the supervisor. She did not offer him someone else's medicine or tell him to continue working. Tom said he had diabetes and carried an emergency plan in his wallet. Following the workplace procedure, the trained first aider read the plan, gave the recommended support, and called for medical advice. Another colleague covered Tom's customer desk while Rosa kept the area calm and private. Tom improved but went home with a family member after speaking to a clinician. The supervisor later reviewed the response with staff without sharing unnecessary medical details. Knowing roles and following an individual plan prevented confused or unsafe help.`,
      translationZh: `早班期间，罗莎的同事汤姆脸色苍白并感到头晕。罗莎让他坐到安全位置，并通知主管。她没有给他别人的药，也没有让他继续工作。汤姆说自己患有糖尿病，钱包里有紧急处理计划。按照职场流程，受过培训的急救员阅读计划，提供建议中的帮助，并致电寻求医疗意见。另一位同事接替汤姆的顾客服务台，罗莎则让现场保持平静和隐私。汤姆情况好转，但与临床人员沟通后由家人接回家。主管后来复盘处理过程，没有分享不必要的医疗细节。明确角色并遵循个人计划，避免了混乱或不安全的帮助。`,
      summary: "Rosa's team responded to illness with safe positioning, trained help, an individual plan, privacy, and work coverage.", summaryZh: "罗莎的团队通过安全安置、专业帮助、个人计划、隐私保护和工作替补应对同事不适。",
      fact: "Tom carried an emergency plan in his wallet.", factZh: "汤姆的钱包里带着一份紧急处理计划。",
      inference: "Workplace support is safer when helpers follow agreed roles instead of improvising medical treatment.", inferenceZh: "帮助者遵循既定角色而不是临时自行治疗时，职场支持更安全。"
    },
    {
      title: "Choosing Urgent Care", titleZh: "选择紧急医疗", topic: "医疗健康",
      passage: `On Saturday evening, Ibrahim cut his hand while cooking. The cut was deeper than a normal scratch, and firm pressure did not stop the bleeding after several minutes. He first moved the knife away, wrapped the hand with a clean cloth, and asked his flatmate to read the regional health service guidance. The guidance recommended urgent assessment for continued bleeding and provided the nearest open clinic. His flatmate drove while Ibrahim kept pressure on the wound; he did not drive himself. At the clinic, staff cleaned and closed the cut and checked his vaccination history. Ibrahim returned home with written signs of infection to watch for. Using official triage information helped him choose care that was faster and more suitable than waiting for Monday.`,
      translationZh: `周六晚上，易卜拉欣做饭时割伤了手。伤口比普通划伤深，持续按压几分钟后仍未止血。他先把刀移开，用干净布包住手，并请室友查看地区医疗服务指引。指引建议持续出血应紧急评估，并提供最近仍营业的诊所。室友开车，易卜拉欣持续压住伤口，没有自己驾驶。诊所工作人员清洁并闭合伤口，还检查了疫苗接种史。他带着需要观察的感染迹象书面说明回家。使用官方分诊信息，帮助他选择了比等到周一更快、更合适的医疗。`,
      summary: "Official triage advice and practical safety steps guided Ibrahim to appropriate urgent treatment for a deep cut.", summaryZh: "官方分诊建议和实际安全措施引导易卜拉欣为较深伤口获得合适的紧急治疗。",
      fact: "Ibrahim's flatmate drove him while he maintained pressure on the wound.", factZh: "室友开车送易卜拉欣，而他持续按压伤口。",
      inference: "Urgency can be judged more reliably through symptoms and official guidance than the day of the week.", inferenceZh: "判断紧急程度应依据症状和官方指引，而不是因为恰逢周末就等待。"
    },
    {
      title: "A Video Appointment", titleZh: "视频问诊", topic: "医疗健康",
      passage: `Nina had a video appointment to discuss a recurring skin rash. Before the call, she took clear photographs in daylight because the camera sometimes changed colours. She wrote when the rash appeared, what products she had used, and whether it caused pain or fever. Nina joined from a private room and placed her current creams beside the laptop. The doctor compared the photographs, asked Nina to show the affected area on camera, and explained that an in-person examination might still be needed if it spread. He sent written care advice and arranged a review in seven days. Nina checked that the prescription went to the correct pharmacy before ending the call. Preparation made the remote visit useful while respecting the limits of what video could show.`,
      translationZh: `妮娜通过视频问诊讨论反复出现的皮疹。通话前，她在自然光下拍了清晰照片，因为摄像头有时会改变颜色。她写下皮疹出现时间、使用过的产品，以及是否伴随疼痛或发热。妮娜在私人房间接入，并把现用药膏放在电脑旁。医生比较照片，请她在镜头前展示患处，并说明如果范围扩大，仍可能需要线下检查。医生发送书面护理建议，并安排七天后复查。结束通话前，妮娜确认处方已发到正确药房。充分准备让远程问诊发挥作用，同时也尊重视频检查的局限。`,
      summary: "Photographs, symptom notes, medicines, privacy, and follow-up planning made Nina's video appointment effective.", summaryZh: "照片、症状记录、现用药物、隐私环境和复查计划让妮娜的视频问诊更有效。",
      fact: "The doctor arranged a review seven days after the video appointment.", factZh: "医生安排在视频问诊七天后复查。",
      inference: "Remote healthcare is most useful when patients prepare evidence and understand when in-person care may be needed.", inferenceZh: "患者准备证据并理解何时需要线下就诊，远程医疗才最有效。"
    },
    {
      title: "Building a Sleep Routine", titleZh: "建立睡眠规律", topic: "医疗健康",
      passage: `After changing to rotating shifts, Ella struggled to sleep. She tried going to bed very early whenever she felt tired, but her schedule became more irregular. A nurse suggested keeping a two-week sleep diary before making major changes. Ella recorded work times, caffeine, naps, screen use, and how rested she felt. The diary showed that long late-afternoon naps were followed by the worst nights. Ella shortened naps, moved coffee earlier, and created the same thirty-minute wind-down routine before each main sleep period. She used an eye mask after night shifts and kept the room cool. Improvement was gradual, not immediate. When she returned to the nurse, the diary provided evidence for discussing the remaining problem rather than relying on a vague memory.`,
      translationZh: `换成轮班后，埃拉很难入睡。她一觉得累就很早上床，结果作息反而更不规律。护士建议她在作大调整前先记录两周睡眠日记。埃拉记录工作时间、咖啡因、午睡、屏幕使用和醒来后的精神状态。日记显示，下午较晚的长时间午睡之后，夜间睡眠最差。埃拉缩短午睡、把喝咖啡时间提前，并在每次主要睡眠前保持相同的三十分钟放松流程。夜班后她使用眼罩，房间保持凉爽。改善是逐渐发生的，并非立刻见效。复诊时，日记为讨论剩余问题提供了证据，而不是依赖模糊记忆。`,
      summary: "A two-week diary helped Ella identify sleep patterns and test gradual routine changes around rotating shifts.", summaryZh: "两周日记帮助埃拉发现轮班中的睡眠规律，并逐步测试作息调整。",
      fact: "Long late-afternoon naps were linked to Ella's worst nights.", factZh: "下午较晚的长时间午睡与埃拉最差的夜间睡眠有关。",
      inference: "Tracking behaviour over time can reveal health patterns that memory misses.", inferenceZh: "持续记录行为能够发现记忆容易忽略的健康规律。"
    },

    {
      title: "The Platform Changed", titleZh: "站台变更", topic: "旅行出行",
      passage: `At a large station, Marta arrived twenty minutes early for a train to Bristol. The departure board first showed platform four, so she walked there and put on headphones. Five minutes later, she noticed other passengers moving quickly. Marta removed her headphones and checked the board again: the train now left from platform eleven. She followed the signs rather than running behind the crowd, because some people were heading to a different service. At platform eleven, she confirmed the destination and departure time on the smaller screen before boarding. The train left on schedule. Marta kept notifications enabled for the return journey and decided to check displays after every announcement. Arriving early mattered, but staying aware after arrival was equally important.`,
      translationZh: `在一个大型车站，玛尔塔提前二十分钟到达，准备乘火车去布里斯托尔。出发牌起初显示四号站台，她便走过去并戴上耳机。五分钟后，她注意到其他乘客匆忙移动。玛尔塔摘下耳机再次查看牌子：列车已改到十一号站台。她按照指示牌走，而不是跟着人群奔跑，因为其中一些人去的是另一班车。到达十一号站台后，她先在小屏幕确认目的地和发车时间再上车。列车准点出发。返程时，玛尔塔开启通知，并决定每次广播后都查看显示屏。提前到站很重要，到站后持续留意变化同样重要。`,
      summary: "Marta caught a train after a platform change by checking official displays, signs, and destination details.", summaryZh: "站台变更后，玛尔塔通过查看官方显示、指示牌和目的地信息顺利乘车。",
      fact: "The train's platform changed from four to eleven.", factZh: "列车站台从四号改为十一号。",
      inference: "Early arrival helps only if a traveller continues monitoring live information.", inferenceZh: "提前到达只有在旅客持续关注实时信息时才真正有帮助。"
    },
    {
      title: "A Lost Passport Plan", titleZh: "护照丢失后的计划", topic: "旅行出行",
      passage: `While travelling in Lisbon, Daniel discovered that his passport was missing after leaving a café. He returned to the table and asked staff, but nobody had found it. Instead of searching the city without a plan, he used his hotel computer to open his country's official consular website. The instructions said to report the loss to local police and book an emergency-document appointment. Daniel had stored an encrypted copy of the passport and his flight details online, so he could complete the form. The hotel printed the documents and helped him locate the police station. He also cancelled a bank card kept in the same pouch. The temporary travel document was ready the next afternoon. A secure backup did not replace the passport, but it made recovery much faster.`,
      translationZh: `在里斯本旅行时，丹尼尔离开咖啡馆后发现护照不见了。他返回座位询问员工，但没人捡到。他没有毫无计划地满城寻找，而是用酒店电脑打开本国领事机构官方网站。指引要求向当地警方报失，并预约紧急旅行证件。丹尼尔把护照加密副本和航班信息存在线上，因此能够填写表格。酒店帮他打印材料，并指引前往警察局。他还取消了与护照放在同一小包里的银行卡。临时旅行证件第二天下午办好。安全备份不能代替护照，却大大加快了补救过程。`,
      summary: "Official instructions, secure document copies, police reporting, and prompt card action helped Daniel recover from passport loss.", summaryZh: "官方指引、安全证件副本、报警和及时处理银行卡帮助丹尼尔应对护照丢失。",
      fact: "Daniel had stored an encrypted copy of his passport online.", factZh: "丹尼尔在网上保存了护照的加密副本。",
      inference: "Secure preparation before travel can reduce disruption after an important document is lost.", inferenceZh: "出发前做好安全准备，能减少重要证件丢失后的影响。"
    },
    {
      title: "One Day in a Coastal Town", titleZh: "海滨小镇的一天", topic: "旅行出行",
      passage: `Lea had one free day in a coastal town and initially listed eight attractions. The distances made that plan unrealistic, so she chose one morning market, a harbour walk, and a small history museum. At the visitor centre, she learned that the cliff path was closed because of strong wind. Instead, a local guide suggested a sheltered route through old fishing streets. Lea left time for lunch without booking every minute. At the museum, she stayed longer than expected to hear a volunteer's story about rescue boats. She skipped a distant lighthouse rather than rushing. By evening, Lea had walked less but remembered more. A flexible plan with one local recommendation gave her a richer day than collecting hurried photographs at every famous point.`,
      translationZh: `莉娅在一个海滨小镇有一天自由时间，起初列了八个景点。各地距离让计划不现实，于是她选择上午市场、港口散步和一座小型历史博物馆。在游客中心，她得知悬崖步道因大风关闭。当地向导建议改走穿过古老渔街的避风路线。莉娅给午餐留出时间，没有把每一分钟都排满。在博物馆，她为了听志愿者讲救援船的故事，停留得比预期更久。她放弃了遥远灯塔，没有匆忙赶路。傍晚时，她走得更少，却记得更多。一份灵活计划加上一条当地建议，比在每个名胜匆忙拍照带来更丰富的一天。`,
      summary: "Lea improved a short trip by reducing attractions, accepting a weather change, and following a meaningful local suggestion.", summaryZh: "莉娅减少景点、接受天气变化并采纳有意义的当地建议，让短途旅行更加充实。",
      fact: "Strong wind caused the cliff path to close.", factZh: "大风导致悬崖步道关闭。",
      inference: "Travel quality can increase when a visitor leaves space for depth and change.", inferenceZh: "给深入体验和临时变化留出空间，旅行质量可能会提高。"
    },
    {
      title: "Packing for Changing Weather", titleZh: "为多变天气打包", topic: "旅行出行",
      passage: `The forecast for Anya's mountain trip showed sun, rain, and cold evenings. She wanted to travel with one small backpack, so she did not pack three heavy outfits. Instead, she chose light layers that could be worn together, a waterproof jacket, comfortable shoes, and dry socks in a sealed bag. Anya downloaded the route because phone service was weak near the trail. She also carried water, a snack, a power bank, and the accommodation address on paper. On the second afternoon, rain arrived earlier than expected. Anya put on the waterproof layer and shortened the walk using a marked return path. Her bag stayed manageable, and the essential items worked in several conditions. Packing by function was more useful than packing a separate look for each day.`,
      translationZh: `安雅的山区旅行预报显示会有阳光、雨和寒冷夜晚。她只想带一个小背包，因此没有装三套厚重衣服，而是选择可以叠穿的轻薄层、防水外套、舒适鞋子，以及装在密封袋中的干袜子。山路附近手机信号较弱，她提前下载路线。她还带了水、零食、充电宝，并把住宿地址写在纸上。第二天下午，雨比预期更早到来。安雅穿上防水层，沿标记好的返程路线缩短行程。背包仍然轻便，关键物品能应对多种情况。按功能打包，比每天准备一套不同造型更实用。`,
      summary: "Anya packed versatile layers, offline information, and safety essentials for varied mountain conditions.", summaryZh: "安雅为多变山区天气准备了可组合衣物、离线信息和安全必需品。",
      fact: "Anya kept dry socks inside a sealed bag.", factZh: "安雅把干袜子放在密封袋中。",
      inference: "Versatile equipment supports both light travel and responsible adaptation.", inferenceZh: "多用途装备既能轻装旅行，也支持负责任地调整计划。"
    },
    {
      title: "Asking for a Local Bus", titleZh: "询问当地公交", topic: "旅行出行",
      passage: `In a rural area, Omar needed a bus to a village whose name he could not pronounce well. At a grocery shop, he showed the written village name and asked which stop he needed. The shopkeeper explained that two buses used the same number: one ended at the river, while the later service continued to the village. Omar wrote the later departure and asked where to buy a ticket. At the stop, he confirmed the destination with the driver before paying and asked to be told one stop early. He followed the route on an offline map but did not depend on it completely. The driver signalled at the right place. Combining written names, local advice, and a final confirmation prevented Omar from boarding the shorter service.`,
      translationZh: `在乡村地区，奥马尔要乘公交去一个自己不太会念名字的村庄。他在杂货店出示写好的村名，并询问应该在哪一站下车。店主解释，同一个线路号有两班车：一班终点在河边，稍晚的一班才继续到村庄。奥马尔写下较晚的发车时间，并询问在哪里买票。到车站后，他付款前向司机确认目的地，还请求提前一站提醒。他用离线地图跟踪路线，但没有完全依赖地图。司机在正确地点示意。书面地名、当地建议和最后确认结合起来，避免奥马尔坐上短途班次。`,
      summary: "Omar combined written information, local knowledge, driver confirmation, and an offline map to choose the correct rural bus.", summaryZh: "奥马尔结合书面信息、当地知识、司机确认和离线地图，选对了乡村公交。",
      fact: "Two buses shared the same route number but had different final stops.", factZh: "两班公交使用同一线路号，但终点不同。",
      inference: "Route numbers alone may not provide enough information in an unfamiliar transport system.", inferenceZh: "在陌生交通系统中，仅看线路号可能不够。"
    },
    {
      title: "A Delayed Flight Connection", titleZh: "延误的转机", topic: "旅行出行",
      passage: `Iris's first flight landed late, leaving only twenty minutes for an international connection. The airline app already showed that boarding had started at another terminal. Iris followed the purple connection signs and spoke to the transfer desk instead of entering the public arrivals area. The agent checked her boarding pass and said the gate was too far to reach safely. He moved her to the next flight, issued a meal voucher, and confirmed that her checked bag would be transferred. Iris used the airport Wi-Fi to notify her hotel of the later arrival. She kept the new boarding pass and voucher until the journey ended. Missing the original connection was disappointing, but following the official transfer route protected her booking and avoided an unnecessary security exit.`,
      translationZh: `艾里斯的第一班航班延误落地，国际转机只剩二十分钟。航空公司应用已显示另一航站楼开始登机。艾里斯沿紫色转机标志前进，并去转机柜台，而不是进入公共到达区。工作人员查看登机牌后说，安全情况下已经来不及到达登机口。他把她改签到下一班，发放餐券，并确认托运行李会自动转运。艾里斯使用机场Wi-Fi通知酒店自己会晚到。旅程结束前，她保留着新登机牌和餐券。错过原航班令人失望，但遵循官方转机路线保护了她的预订，也避免不必要地离开安检区。`,
      summary: "Iris used the official transfer process to rebook a missed connection, protect her luggage, and update her hotel.", summaryZh: "艾里斯通过官方转机流程改签错过的航班、保护行李并通知酒店。",
      fact: "The transfer agent gave Iris a meal voucher.", factZh: "转机柜台工作人员给了艾里斯一张餐券。",
      inference: "When a connection is impossible, the correct airport channel can preserve travel rights and reduce confusion.", inferenceZh: "转机已无法赶上时，使用正确的机场渠道能够保留旅客权益并减少混乱。"
    },
    {
      title: "Respecting a Quiet Village", titleZh: "尊重安静的村庄", topic: "旅行出行",
      passage: `A mountain village had become popular for sunrise photographs. Visitors often arrived before six, parked near homes, and spoke loudly while setting up cameras. When Lian stayed there, her guesthouse owner explained the village's new visitor code. Cars should remain in the public car park, drones were not allowed, and the path beside the school was closed until eight. Lian walked quietly from the car park with a small torch pointed toward the ground. She chose the marked viewpoint and carried her rubbish back. The sunrise was partly hidden by clouds, yet she enjoyed hearing the village wake slowly. Later, she bought breakfast from a local café. Respecting the place meant accepting that residents' sleep, privacy, and daily routines mattered more than one perfect photograph.`,
      translationZh: `一个山村因日出照片而走红。游客常在六点前到达，把车停在居民家旁，并在架相机时大声说话。莲住在那里时，民宿主人解释了新的游客守则：车辆应留在公共停车场，禁止无人机，学校旁小路八点前关闭。莲从停车场安静步行，手电筒朝地面照。她选择指定观景点，并把垃圾带走。日出有一部分被云挡住，但她喜欢听村庄慢慢醒来的声音。之后，她在当地咖啡馆买早餐。尊重一个地方意味着承认，居民的睡眠、隐私和日常生活比一张完美照片更重要。`,
      summary: "Lian followed a village visitor code that protected residents while still allowing a meaningful sunrise experience.", summaryZh: "莲遵守保护居民的村庄游客守则，同时仍获得了有意义的日出体验。",
      fact: "The path beside the school remained closed until eight o'clock.", factZh: "学校旁的小路在八点前保持关闭。",
      inference: "Responsible tourism may require giving up convenience or an ideal photograph.", inferenceZh: "负责任的旅行可能需要放弃便利或理想照片。"
    },
    {
      title: "The Helpful Hostel Map", titleZh: "有用的青旅地图", topic: "旅行出行",
      passage: `At a hostel in Prague, the free tourist map showed famous buildings but not the everyday places Tessa needed. She asked the receptionist to mark a laundrette, a low-cost supermarket, a late pharmacy, and a tram stop with step-free access. The receptionist used four different symbols and wrote opening times beside two locations. Tessa photographed the marked map, but kept the paper copy in case her phone battery died. During the week, she added a quiet public garden and noted that one cash machine charged a high fee. Before leaving, she gave those updates to the receptionist, who checked them and added the garden to a new map. A useful travel map grew from practical local knowledge rather than only attractions, and later guests benefited from Tessa's discoveries.`,
      translationZh: `在布拉格一家青年旅舍，免费旅游地图标有著名建筑，却没有泰莎日常需要的地点。她请前台标出自助洗衣店、平价超市、深夜药房，以及有无障碍通道的电车站。前台用四种不同符号，并在两个地点旁写上营业时间。泰莎拍下标记后的地图，同时保留纸质版，以防手机没电。一周里，她补充了一个安静的公共花园，并记下某台取款机手续费很高。离开前，她把更新告诉前台。前台核实后，把花园加入新版地图。一张有用的旅行地图来自实际当地知识，而不只是景点；后来的住客也受益于泰莎的发现。`,
      summary: "Tessa and the hostel improved a tourist map by adding practical, verified local information for everyday travel needs.", summaryZh: "泰莎和旅舍通过加入经过核实的日常实用地点，改进了旅游地图。",
      fact: "Tessa asked for a tram stop with step-free access to be marked.", factZh: "泰莎请前台标出一个有无障碍通道的电车站。",
      inference: "Travellers can contribute useful local knowledge instead of only receiving it.", inferenceZh: "旅行者不只能接收当地信息，也可以贡献有用知识。"
    },

    {
      title: "A Better Vocabulary Notebook", titleZh: "更好用的单词本", topic: "学习方法",
      passage: `Jun's old vocabulary notebook contained long lists of English words and one Chinese meaning each. He could recognise many words on the page but rarely use them in conversation. Jun redesigned each entry. He wrote one short example from something he had read, added a common collocation, marked the stressed syllable, and created a personal sentence. For the word "deadline," he recorded "meet a deadline" and wrote about his Friday report. He reviewed five entries at a time, covered the English side, and tried to rebuild both the word and its phrase. At the end of the week, he used three new expressions in a voice recording. The notebook became smaller in quantity but richer in connections, making recall more useful outside the notebook.`,
      translationZh: `俊以前的单词本只有长长的英文词表和每词一个中文意思。他能在纸上认出很多词，却很少在对话中使用。俊重新设计每条记录：写下一句阅读中见到的短例句，加入常见搭配，标出重读音节，再造一个个人化句子。对“deadline”一词，他记录“meet a deadline”，并写到自己的周五报告。他每次复习五条，遮住英文一侧，尝试还原单词和短语。周末，他在语音录音中使用三个新表达。单词本的数量变少，但联系更丰富，回忆也更能用于本子之外。`,
      summary: "Jun changed passive word lists into connected entries with context, collocations, pronunciation, personal use, and retrieval.", summaryZh: "俊把被动词表改成包含语境、搭配、发音、个人运用和主动回忆的关联记录。",
      fact: "Jun reviewed five vocabulary entries at a time.", factZh: "俊每次复习五条词汇记录。",
      inference: "Knowing fewer words deeply can be more practical than recognising many words superficially.", inferenceZh: "深入掌握较少词汇，可能比浅层认出大量词汇更实用。"
    },
    {
      title: "The Twenty-Minute Study Block", titleZh: "二十分钟学习块", topic: "学习方法",
      passage: `After work, Hana often planned to study English for two hours but felt too tired to begin. She replaced the large goal with one twenty-minute block before dinner. The block had a fixed pattern: five minutes reviewing yesterday's words, ten minutes on one listening task, and five minutes speaking a summary aloud. Hana placed her phone in another room and stopped when the timer ended, even if the task was unfinished. On energetic days, she completed a second block later; on difficult days, the first block was enough. After a month, her calendar showed twenty-three study days instead of three long weekend sessions. The short routine reduced the decision to start, and the mix of review, input, and output kept each session purposeful.`,
      translationZh: `下班后，哈娜常计划学两小时英语，却累得无法开始。她把大目标改成晚饭前一个二十分钟学习块。这个学习块有固定结构：五分钟复习昨天的单词，十分钟完成一项听力任务，五分钟大声总结。哈娜把手机放在另一个房间，计时结束就停，即使任务没做完。精力好时，她稍后再做一块；困难的日子里，第一块就足够。一个月后，日历显示她学习了二十三天，而不是只有三次漫长周末学习。短流程降低了开始的难度，复习、输入和输出的组合也让每次学习都有目的。`,
      summary: "A fixed twenty-minute routine helped Hana study consistently by lowering the effort required to begin.", summaryZh: "固定的二十分钟流程降低开始学习的门槛，帮助哈娜保持稳定学习。",
      fact: "Hana's study block ended with five minutes of spoken summary.", factZh: "哈娜的学习块最后是五分钟口头总结。",
      inference: "Consistency may improve when a minimum study session feels easy enough on tired days.", inferenceZh: "最低学习时长在疲惫日也容易完成时，持续性可能提高。"
    },
    {
      title: "Learning from a Wrong Answer", titleZh: "从错题中学习", topic: "学习方法",
      passage: `In a grammar quiz, Mateo chose "I have seen her yesterday" and felt annoyed when it was marked wrong. He nearly clicked the next question without reading the explanation. Instead, he copied the complete sentence into an error log and underlined "yesterday." The rule showed that a finished past time usually requires the simple past: "I saw her yesterday." Mateo then made two contrast sentences using "today" and "last week." Three days later, the review system showed the error again without the answer. This time, he chose correctly and explained the time signal aloud. At the end of the month, Mateo grouped his errors by tense, article, and preposition. Patterns in the log helped him choose what to practise rather than repeating random exercises.`,
      translationZh: `在一次语法测验中，马特奥选择了“I have seen her yesterday”，被判错后很懊恼。他差点不看解释就点下一题。后来，他把完整句子抄进错题本，并在“yesterday”下画线。规则说明，已经结束的过去时间通常要用一般过去时：“I saw her yesterday.” 马特奥又用“today”和“last week”造了两个对比句。三天后，复习系统不显示答案，再次呈现这道错题。这次他选对了，并大声解释时间信号。月底，马特奥把错误按时态、冠词和介词分类。错题中的规律帮助他决定练什么，而不是随机重复练习。`,
      summary: "Mateo turned one grammar mistake into a rule, contrasts, delayed retrieval, and a pattern-based practice plan.", summaryZh: "马特奥把一个语法错误转化为规则、对比例句、延迟回忆和按规律练习的计划。",
      fact: "Mateo underlined the word " + '"yesterday"' + " in his error log.", factZh: "马特奥在错题本中给“yesterday”画了下划线。",
      inference: "An error becomes valuable when a learner analyses and retrieves it, not merely sees the correction.", inferenceZh: "学习者分析并再次回忆错误时，错题才真正产生价值，而不只是看一眼答案。"
    },
    {
      title: "A Friendly Language Exchange", titleZh: "友好的语言交换", topic: "学习方法",
      passage: `Lily and Ana met online for a weekly Chinese-English exchange. Their first call felt unbalanced because they changed languages whenever one person struggled. They created a clearer plan: twenty minutes in English, twenty minutes in Chinese, and five minutes for review. During each section, the listener noted only three important corrections so conversation could continue naturally. They chose a topic in advance and brought one photograph to discuss. At the end, each person repeated a corrected sentence and saved one useful expression in a shared document. After six weeks, both spoke for longer without switching languages. The friendship mattered, but the simple boundaries made the exchange fair. Corrections became manageable feedback rather than constant interruption or a one-sided free lesson.`,
      translationZh: `莉莉和安娜每周在线进行一次中英语言交换。第一次通话不太平衡，因为只要一方遇到困难，两人就会切换语言。她们制定了更清楚的计划：二十分钟英语、二十分钟中文，最后五分钟复盘。每个时段中，倾听者只记三项重要纠正，让对话自然继续。她们提前选主题，并各带一张照片讨论。结束时，每人重复一句改正后的句子，并在共享文档保存一个实用表达。六周后，两人都能在不切换语言的情况下说更久。友谊很重要，但简单边界让交换更公平。纠正变成可管理的反馈，而不是持续打断或单方面免费授课。`,
      summary: "Timed language sections, limited corrections, prepared topics, and review made Lily and Ana's exchange fair and productive.", summaryZh: "定时语言区段、有限纠正、预备主题和复盘让莉莉与安娜的交换公平而高效。",
      fact: "Each listener recorded only three important corrections during a language section.", factZh: "每个语言时段中，倾听者只记录三项重要纠正。",
      inference: "Friendly learning partnerships still benefit from explicit structure and balanced expectations.", inferenceZh: "友好的学习伙伴关系仍然需要明确结构和平衡预期。"
    },
    {
      title: "Preparing a Short Presentation", titleZh: "准备短演讲", topic: "学习方法",
      passage: `For an English class, Niko had to give a four-minute presentation about public transport. His first slide deck contained thirty bullet points and several tiny charts. He replaced it with one question, three main ideas, and a final recommendation. Each slide used a photograph or one simple number. Niko wrote transition phrases on small cards but practised looking at listeners instead of reading full sentences. He recorded the talk twice. The first version lasted six minutes, so he removed a detailed history section. The second lasted four minutes and ten seconds. Before class, he tested the slides on the room computer and saved a PDF backup. During the presentation, one word disappeared from his memory, but the clear structure helped him continue to the next idea.`,
      translationZh: `英语课要求尼科做一个四分钟的公共交通演讲。他最初的幻灯片有三十个项目符号和几张很小的图表。后来他改成一个问题、三个主要观点和最后一条建议。每页只用一张照片或一个简单数字。尼科把过渡语写在小卡片上，但练习时看着听众，而不是读完整句子。他录了两次。第一次长达六分钟，于是删掉详细历史部分；第二次为四分十秒。上课前，他在教室电脑测试幻灯片，并保存PDF备份。演讲中有一个词突然想不起来，但清楚结构帮助他继续讲下一点。`,
      summary: "Niko made a short presentation clearer through fewer ideas, visual simplicity, timed practice, and a technical backup.", summaryZh: "尼科通过减少观点、简化视觉、计时练习和技术备份，让短演讲更清楚。",
      fact: "Niko removed a detailed history section after the first recording ran long.", factZh: "第一次录音超时后，尼科删掉了详细历史部分。",
      inference: "A strong presentation structure can help a speaker recover when a word is forgotten.", inferenceZh: "清晰的演讲结构能帮助讲者在忘词时恢复。"
    },
    {
      title: "Reading Without Translating Every Word", titleZh: "不逐字翻译地阅读", topic: "学习方法",
      passage: `When Mei read news in English, she stopped at every unknown word and finished only one paragraph. Her teacher suggested a three-pass method. On the first pass, Mei read the title and first sentence of each paragraph to predict the topic. On the second, she read without a dictionary and marked only words that blocked the main meaning. On the third, she checked no more than five marked words and reread the relevant sentences. With an article about urban trees, Mei initially marked twelve words but discovered that only four were essential. She summarised the article in Chinese, then wrote two English sentences about its argument. The method did not remove uncertainty, yet it allowed her to understand a complete text and choose vocabulary worth learning.`,
      translationZh: `梅阅读英文新闻时，每遇到一个生词就停下，一次只能读完一段。老师建议她使用三遍法。第一遍读标题和每段首句，预测主题；第二遍不查词典，只标出阻碍主旨理解的词；第三遍最多查五个标记词，并重读相关句子。在一篇城市树木文章中，梅起初标了十二个词，却发现只有四个不可缺少。她先用中文概括文章，再用两句英文写出论点。这种方法没有消除所有不确定，却让她能理解完整文本，并选择真正值得学习的词汇。`,
      summary: "A three-pass reading method helped Mei prioritise meaning and select only the vocabulary necessary for understanding.", summaryZh: "三遍阅读法帮助梅优先理解意义，只选择理解所需的关键词汇。",
      fact: "Mei limited dictionary checks to no more than five marked words.", factZh: "梅把查词数量限制为最多五个标记词。",
      inference: "Tolerating some uncertainty can increase both reading speed and overall comprehension.", inferenceZh: "容忍一定不确定性，可以同时提高阅读速度和整体理解。"
    },
    {
      title: "A Group Project Rescue", titleZh: "挽救小组项目", topic: "学习方法",
      passage: `Four students had one week left to finish an English research project, but their shared document contained duplicated sections and no conclusion. At a meeting, Sara avoided asking who was to blame. She created a simple table listing each required section, its owner, status, and deadline. The group agreed on one main argument and moved repeated material into a separate notes file. Two students combined the evidence, one designed the slides, and Sara drafted the conclusion for review. They met for fifteen minutes every evening and raised problems before deadlines passed. On presentation day, every member explained one part and answered a question. The final project was not perfect, but a visible plan turned four disconnected efforts into one coherent piece of work.`,
      translationZh: `四名学生只剩一周完成英文研究项目，但共享文档里有重复段落，也没有结论。会议上，萨拉没有追问谁该负责，而是建立一张简单表格，列出每个必需部分、负责人、状态和截止时间。小组确定一个中心论点，把重复材料移到单独的笔记文件。两名学生合并证据，一人设计幻灯片，萨拉起草结论供大家审阅。他们每天晚上开十五分钟短会，在截止前提出问题。展示当天，每位成员讲解一个部分并回答一道问题。最终项目并不完美，但可见计划把四份零散努力变成一项连贯成果。`,
      summary: "A shared task table, single argument, short check-ins, and early problem reporting rescued a disconnected group project.", summaryZh: "共享任务表、统一论点、短会和提前报告问题挽救了零散的小组项目。",
      fact: "The group met for fifteen minutes every evening.", factZh: "小组每天晚上开十五分钟会议。",
      inference: "Transparent coordination can solve project confusion without spending time assigning blame.", inferenceZh: "透明协调能够解决项目混乱，而不必把时间花在追责上。"
    },
    {
      title: "The Library Conversation Club", titleZh: "图书馆会话俱乐部", topic: "学习方法",
      passage: `A library started a free English conversation club, but the first meeting was dominated by three confident speakers. The facilitator, Omar, changed the next session. Participants first discussed a picture in pairs, then moved into groups of four with rotating roles: starter, questioner, summariser, and timekeeper. Each person received two coloured tokens and used one whenever they spoke; after both were used, they listened until everyone had contributed. The tokens were not a score and disappeared once the group found its balance. At the end, participants wrote one expression they had heard from someone else. Quieter learners reported speaking more, while fluent members practised asking better questions. The new structure treated conversation as shared practice rather than a competition for airtime.`,
      translationZh: `一家图书馆开设免费英语会话俱乐部，但第一次活动被三位自信的讲者主导。主持人奥马尔调整了下一次安排。参与者先两人讨论一张图片，再组成四人组，轮流担任开场者、提问者、总结者和计时员。每人拿到两枚彩色圆片，每发言一次用掉一枚；两枚用完后先倾听，直到所有人都参与。圆片不是评分，等小组找到平衡就不再使用。结束时，每人写下一条从别人那里听到的表达。较安静的学习者表示说得更多，流利者则练习了更好的提问。新结构把会话视为共同练习，而不是争夺发言时间。`,
      summary: "Pairs, rotating roles, temporary speaking tokens, and listening notes made a conversation club more balanced.", summaryZh: "双人讨论、轮换角色、临时发言圆片和倾听笔记让会话俱乐部更平衡。",
      fact: "Participants wrote down one expression they heard from another person.", factZh: "参与者写下一条从别人那里听到的表达。",
      inference: "Fluent speakers can also learn when a discussion structure asks them to listen and invite others.", inferenceZh: "讨论结构要求倾听和邀请他人时，流利讲者也能学习。"
    },

    {
      title: "The Password Manager Habit", titleZh: "密码管理器习惯", topic: "科技生活",
      passage: `Evan used the same short password for shopping, email, and travel accounts because it was easy to remember. After a shopping site reported a data leak, he realised that one exposed password could unlock several services. Evan installed a reputable password manager, protected it with a long unique passphrase, and enabled multi-factor authentication. He changed his email password first because email could reset many other accounts. Then he updated banking, shopping, and social accounts over several evenings rather than rushing. The manager generated different passwords and stored recovery codes in an encrypted note. Evan also removed two unused accounts. The new habit required a little setup, but it reduced the number of secrets he had to memorise while making each service less dependent on the others.`,
      translationZh: `埃文为了容易记住，在购物、邮箱和旅行账户中使用同一个短密码。一家购物网站报告数据泄露后，他意识到一个密码暴露就可能打开多个服务。埃文安装了信誉良好的密码管理器，用一个长且独特的口令保护，并启用多因素验证。他先修改邮箱密码，因为邮箱可以重置许多其他账户。随后几个晚上，他逐步更新银行、购物和社交账户，没有仓促完成。密码管理器生成不同密码，并在加密笔记中保存恢复代码。埃文还删除了两个不再使用的账户。新习惯需要一些设置，却减少了要记忆的秘密，同时让各服务不再相互依赖。`,
      summary: "Evan replaced reused passwords with a protected manager, unique credentials, multi-factor authentication, and secure recovery records.", summaryZh: "埃文用受保护的密码管理器、独立凭据、多因素验证和安全恢复记录替代重复密码。",
      fact: "Evan changed his email password before his other account passwords.", factZh: "埃文先修改邮箱密码，再修改其他账户。",
      inference: "Securing a central email account can protect many services connected to password resets.", inferenceZh: "保护作为重置中心的邮箱账户，可以保护许多关联服务。"
    },
    {
      title: "An Update Before the Meeting", titleZh: "会议前的软件更新", topic: "科技生活",
      passage: `On the morning of an important online meeting, Aya's computer offered a large operating-system update. The message said installation might take forty minutes, and the meeting started in twenty. Aya did not click immediately. She checked that the update came from the system settings rather than a pop-up website, postponed it until evening, and installed a smaller security update that required no restart. She then tested the meeting software and joined five minutes early. After work, Aya backed up current documents, connected the charger, and ran the large update. The computer restarted twice and finished successfully. She tested the microphone afterward. Separating urgent security checks from a disruptive feature update protected the meeting while ensuring the computer was not ignored indefinitely.`,
      translationZh: `一次重要线上会议当天早上，绫的电脑提示大型操作系统更新。信息称安装可能需要四十分钟，而会议二十分钟后开始。绫没有立刻点击。她确认更新来自系统设置而不是网页弹窗，把大型更新推迟到晚上，并安装一个无需重启的小型安全更新。随后她测试会议软件，提前五分钟加入。下班后，绫备份当前文档、接上电源，再运行大型更新。电脑重启两次并成功完成。她之后重新测试麦克风。把紧急安全检查与会造成中断的功能更新分开，既保护了会议，也没有无限期忽略电脑更新。`,
      summary: "Aya verified and scheduled updates according to risk, meeting timing, backup needs, and restart requirements.", summaryZh: "绫根据风险、会议时间、备份需要和重启要求，核实并安排软件更新。",
      fact: "The large system update was expected to take forty minutes.", factZh: "大型系统更新预计需要四十分钟。",
      inference: "Responsible updating includes choosing a safe time, not automatically accepting or endlessly delaying every prompt.", inferenceZh: "负责任的更新包括选择安全时间，而不是自动接受或永远拖延所有提示。"
    },
    {
      title: "A Helpful Translation App", titleZh: "有帮助的翻译应用", topic: "科技生活",
      passage: `During her first week abroad, Yara used a translation app to understand a letter from the electricity company. The camera translation suggested that service would be "destroyed" on Friday, which frightened her. Yara noticed that the sentence did not fit the rest of the letter. She typed the key paragraph instead of relying on the photograph and compared two translations. The intended word was "disconnected" if payment remained overdue. Yara checked the account number on the official company website and called customer support with a bilingual friend nearby. The bill had already been paid but linked to the wrong reference. Support corrected it and emailed confirmation. The app helped identify the topic, but context, comparison, and an official human check were necessary before Yara acted.`,
      translationZh: `初到国外第一周，雅拉用翻译应用理解电力公司来信。拍照翻译说服务会在周五被“摧毁”，让她很害怕。雅拉注意到这个句子与信件其他内容不合。她手动输入关键段落，而不是只依赖照片，并比较两种译文。原意是如果逾期未付款，服务会“断开”。雅拉在公司官网核对账户号码，并在一位双语朋友陪同下致电客服。账单其实已支付，只是关联了错误编号。客服修正后发来确认邮件。应用帮助她识别主题，但在采取行动前仍需要语境、比较和官方人工确认。`,
      summary: "Yara used translation technology as a starting point, then verified an alarming message through context and official support.", summaryZh: "雅拉把翻译技术作为起点，再通过语境和官方客服核实令人担忧的信息。",
      fact: "The paid bill had been connected to the wrong reference number.", factZh: "已支付账单被关联到错误的参考编号。",
      inference: "Machine translation is useful for orientation but risky as the only source for important decisions.", inferenceZh: "机器翻译适合初步理解，但作为重要决定的唯一依据有风险。"
    },
    {
      title: "Detecting a Fake Message", titleZh: "识别虚假消息", topic: "科技生活",
      passage: `Noah received a text claiming that a parcel could not be delivered until he paid a small fee. The message included his first name and a link that looked similar to a delivery company's website. Noah was expecting a parcel, but he did not open the link. He checked the tracking number through the official app installed on his phone. The parcel was still in transit and required no payment. Noah reported the text as spam and deleted it. He then reviewed the fake address more closely and noticed one extra letter in the company name. The personal detail had made the message feel convincing, yet it did not prove authenticity. Using a separate trusted channel allowed Noah to verify the claim without giving away card or login information.`,
      translationZh: `诺亚收到一条短信，称包裹无法投递，必须先支付一小笔费用。短信中有他的名字，还有一个看起来像快递公司网站的链接。诺亚确实在等包裹，但没有打开链接。他通过手机里已安装的官方应用查询追踪号。包裹仍在运输，不需要付款。诺亚把短信举报为垃圾信息并删除。之后他仔细看虚假地址，发现公司名称多了一个字母。个人信息让短信显得可信，却不能证明真实。通过独立的可信渠道核实，诺亚没有泄露银行卡或登录信息。`,
      summary: "Noah avoided a personalised parcel scam by checking the claim through an independently opened official app.", summaryZh: "诺亚通过独立打开的官方应用核实信息，避开了带有个人信息的包裹骗局。",
      fact: "The fake web address contained one extra letter in the company name.", factZh: "虚假网址中的公司名称多了一个字母。",
      inference: "A message can contain correct personal details and still be fraudulent.", inferenceZh: "一条消息即使包含正确个人信息，也可能是诈骗。"
    },
    {
      title: "Turning Off Notifications", titleZh: "关闭通知", topic: "科技生活",
      passage: `Kai's phone showed an average of ninety notifications a day. Many came from shopping apps, games, and group chats that were not urgent. He noticed that every vibration interrupted his English listening practice, even when he did not unlock the screen. Kai opened the notification settings and kept immediate alerts only for calls, direct family messages, calendar reminders, and banking security. News and social apps moved into a summary delivered at lunchtime and evening. He muted two busy groups for eight hours during work but did not leave them. After one week, the daily total fell below thirty. Kai still checked messages intentionally, yet his study blocks became longer and calmer. Technology had not changed; deciding which information deserved interruption had changed his attention.`,
      translationZh: `凯的手机平均每天显示九十条通知，许多来自不紧急的购物应用、游戏和群聊。他注意到，每次振动都会打断英语听力练习，即使没有解锁屏幕。凯打开通知设置，只保留电话、家人私信、日历提醒和银行安全的即时通知。新闻和社交应用改为午餐和晚间汇总。他在工作期间把两个活跃群聊静音八小时，但没有退出。一周后，每日通知降到三十条以下。凯仍会主动查看消息，但学习时间变得更长、更平静。技术本身没有改变；改变的是他对哪些信息值得打断注意力的决定。`,
      summary: "Kai reduced interruptions by reserving immediate notifications for high-priority communication and scheduling the rest.", summaryZh: "凯只让高优先级沟通即时提醒，把其他信息定时汇总，从而减少干扰。",
      fact: "Kai kept banking security alerts as immediate notifications.", factZh: "凯保留银行安全信息的即时通知。",
      inference: "Digital focus improves when notification timing reflects importance rather than application defaults.", inferenceZh: "通知时间按重要性而非应用默认设置安排时，数字专注力会提高。"
    },
    {
      title: "An Accessible Website Test", titleZh: "无障碍网站测试", topic: "科技生活",
      passage: `A volunteer group built a website for a local festival. The pages looked attractive, but Mia suggested testing them without a mouse. Using only the keyboard, the team discovered that the ticket button could not be reached and the focus marker was almost invisible. A screen-reader user then explained that several photographs had file names instead of useful descriptions. The designers added clear keyboard focus, corrected the button order, wrote concise alternative text, and increased colour contrast. They also simplified one confusing form error. After the changes, the site still matched the festival style. More importantly, people using keyboards, screen readers, or low-contrast displays could complete ticket booking. Accessibility testing revealed functional barriers that visual review alone had missed.`,
      translationZh: `一个志愿团体为当地节庆制作网站。页面很好看，但米娅建议不用鼠标进行测试。团队只用键盘操作时发现，购票按钮无法到达，焦点标记也几乎看不见。一位屏幕阅读器用户随后指出，几张照片读出的只是文件名，而不是有用描述。设计人员增加清晰键盘焦点、修正按钮顺序、撰写简洁替代文本，并提高颜色对比度，还简化了一条令人困惑的表单错误。修改后，网站仍保持节庆风格，更重要的是，使用键盘、屏幕阅读器或低对比度显示的人能够完成购票。无障碍测试发现了单纯视觉检查遗漏的功能障碍。`,
      summary: "Keyboard and screen-reader testing helped a festival team remove functional website barriers without losing its visual identity.", summaryZh: "键盘和屏幕阅读器测试帮助节庆团队移除网站功能障碍，同时保留视觉特色。",
      fact: "The original ticket button could not be reached with the keyboard.", factZh: "原来的购票按钮无法通过键盘到达。",
      inference: "A visually attractive interface is not necessarily usable by every visitor.", inferenceZh: "视觉上漂亮的界面不一定对所有访客都可用。"
    },
    {
      title: "Cloud Notes on Two Devices", titleZh: "两台设备上的云笔记", topic: "科技生活",
      passage: `Sora wrote class notes on a tablet and edited them later on a laptop. One evening, the same document showed different versions on each device because the tablet had been offline. Sora stopped editing before creating a third version. She copied both files into a temporary comparison folder, checked the last-modified times, and identified new paragraphs in each. After merging them into one document, she confirmed that syncing was complete on both devices. Sora then enabled version history and set the app to show an offline warning. For important assignments, she also exported a dated PDF before major revisions. Cloud syncing remained convenient, but she no longer assumed that every visible copy was current. A brief pause and comparison prevented silent loss of work.`,
      translationZh: `空用平板写课堂笔记，后来用笔记本电脑编辑。一天晚上，同一文档在两台设备上显示不同版本，因为平板曾处于离线状态。空先停止编辑，以免产生第三个版本。她把两个文件都复制到临时比较文件夹，查看最后修改时间，并找出各自新增段落。合并成一份文档后，她确认两台设备都完成同步。随后，空启用版本历史，并让应用显示离线警告。对重要作业，她还会在大改前导出带日期的PDF。云同步仍然方便，但她不再假设眼前每份副本都是最新的。短暂停下并比较，避免了工作被悄悄丢失。`,
      summary: "Sora resolved a cloud version conflict carefully and added history, warnings, and dated exports for future protection.", summaryZh: "空谨慎解决云端版本冲突，并增加历史、警告和带日期导出以保护后续工作。",
      fact: "Sora compared last-modified times before merging the two documents.", factZh: "空在合并两份文档前比较了最后修改时间。",
      inference: "Cloud storage reduces some risks but does not remove the need to manage versions deliberately.", inferenceZh: "云存储能降低一些风险，但不能消除主动管理版本的需要。"
    },
    {
      title: "Learning with an AI Tutor", titleZh: "和AI导师学习", topic: "科技生活",
      passage: `Nari used an AI tutor to practise job-interview English. At first, she asked for "good answers" and copied the polished results. During a mock interview, however, she could not explain several phrases naturally. Nari changed her method. She wrote her own answer first, asked the tutor to identify two unclear points, and requested simpler alternatives with reasons. She verified factual claims about the company on its official website rather than trusting generated text. For pronunciation, she recorded herself and compared only short sentences. She also kept private names and contact details out of prompts. After each session, Nari selected one revision she understood and practised it without the tool. The tutor became useful when it supported her thinking, not when it replaced her voice.`,
      translationZh: `奈里用AI导师练习求职面试英语。起初，她要求生成“好答案”，直接复制润色结果。但在模拟面试中，她无法自然解释其中几个短语。奈里改变方法：先写自己的答案，请AI指出两个不清楚之处，再要求给出更简单的替代表达和理由。关于公司的事实，她在官网核实，而不是相信生成文本。练发音时，她录下自己，只比较短句。她也不在提示中放入私人姓名和联系方式。每次结束后，奈里选择一项真正理解的修改，在不用工具的情况下练习。AI在支持她思考时有用，而不是替代她自己的声音。`,
      summary: "Nari made AI practice safer and more effective through original drafts, targeted feedback, verification, privacy, and independent retrieval.", summaryZh: "奈里通过原创初稿、针对性反馈、事实核实、隐私保护和独立回忆，让AI练习更安全有效。",
      fact: "Nari verified company information on the organisation's official website.", factZh: "奈里在公司官方网站核实相关信息。",
      inference: "Learning tools build durable skill when the learner still produces, checks, and recalls the final language.", inferenceZh: "学习者仍亲自表达、核实并回忆最终语言时，工具才能帮助形成持久技能。"
    },

    {
      title: "The Office Refill Station", titleZh: "办公室补水站", topic: "环保行动",
      passage: `An office used hundreds of single-use water bottles during meetings each month. Priya proposed a refill station, but she first counted bottle use for four weeks and asked staff why they chose bottled water. Some worried that tap water tasted unpleasant; others simply could not find clean cups. Facilities installed a filtered dispenser, provided washable glasses, and labelled a shelf for personal bottles. Priya posted cleaning responsibility and filter-change dates beside the station. For external visitors, a small number of sealed bottles remained available. After two months, single-use bottle orders fell by seventy percent. The change worked because it improved convenience and trust instead of only telling people to behave differently. The measurement also showed where further reduction was realistic.`,
      translationZh: `一家办公室每月开会会使用数百个一次性水瓶。普里娅提出设置补水站，但她先连续四周统计瓶子用量，并询问员工为什么选择瓶装水。有些人担心自来水味道不好，另一些人只是找不到干净杯子。后勤安装过滤饮水机，提供可清洗玻璃杯，并为个人水瓶标出专用架。普里娅把清洁责任和滤芯更换日期贴在补水站旁。对外来访客，仍保留少量密封瓶装水。两个月后，一次性水瓶订购量下降七成。这项改变有效，是因为提升了便利和信任，而不只是要求人们改变行为。数据也显示了进一步减少的现实空间。`,
      summary: "Measurement and convenient, trusted alternatives helped an office reduce single-use water bottles by seventy percent.", summaryZh: "统计数据和便利可信的替代方案帮助办公室把一次性水瓶减少了七成。",
      fact: "The office kept a small supply of sealed bottles for external visitors.", factZh: "办公室为外来访客保留了少量密封瓶装水。",
      inference: "Environmental behaviour changes more easily when the alternative solves practical concerns.", inferenceZh: "替代方案解决实际顾虑时，环保行为更容易改变。"
    },
    {
      title: "A Repair Café Saturday", titleZh: "周六维修咖啡馆", topic: "环保行动",
      passage: `Milo brought a broken desk lamp to a community repair café. He expected a volunteer to fix it while he waited, but the event's rule was to repair together. A volunteer first unplugged the lamp and showed Milo how to check the cable safely. The cable was fine; a loose switch connection caused the problem. Milo held the parts while the trained volunteer secured the connection and tested it. They wrote the repair date inside the base and discussed which replacement bulb used less energy. At another table, people repaired a coat zip and a radio. Milo left with a working lamp and a new understanding of its parts. The event prevented waste, shared practical skills, and made safety part of learning rather than encouraging risky home experiments.`,
      translationZh: `米洛把坏掉的台灯带到社区维修咖啡馆。他原以为志愿者会修好，自己只需等待，但活动规则是一起维修。志愿者先拔掉电源，教米洛如何安全检查电线。电线正常，问题来自开关连接松动。米洛扶住部件，由受过培训的志愿者固定连接并测试。他们把维修日期写在底座内，还讨论哪种替换灯泡更节能。另一张桌上，有人在修外套拉链和收音机。米洛带着恢复工作的灯离开，也更了解它的结构。活动既减少浪费、分享实际技能，也把安全纳入学习，而不是鼓励危险的家庭试验。`,
      summary: "A supervised repair café restored Milo's lamp while teaching safe diagnosis, participation, and resource-saving choices.", summaryZh: "在监督下的维修咖啡馆修好了米洛的灯，同时教授安全诊断、共同参与和节约资源。",
      fact: "A loose connection in the lamp switch caused the failure.", factZh: "台灯故障由开关中的松动连接引起。",
      inference: "Community repair can build knowledge as well as extend the life of objects.", inferenceZh: "社区维修不仅能延长物品寿命，也能积累知识。"
    },
    {
      title: "Measuring Food Waste", titleZh: "测量食物浪费", topic: "环保行动",
      passage: `A school cafeteria wanted to reduce food waste, but staff disagreed about the main cause. For five lunch days, students scraped leftovers into labelled containers for vegetables, rice, meat, and unopened items. Nobody's name was recorded. The results showed that most waste came from vegetables served in portions that were too large, while many unopened yoghurts could be saved. The cafeteria introduced a smaller first portion with free seconds and placed an unopened-food shelf beside the exit. A student group also tested two new vegetable recipes. One month later, waste weight had fallen by a third, and students were still eating enough. Measuring categories replaced guesses with evidence and led to changes that protected choice rather than simply telling students to finish everything.`,
      translationZh: `一所学校食堂想减少食物浪费，但员工对主要原因意见不同。连续五个午餐日，学生把剩菜倒入标有蔬菜、米饭、肉类和未开封食品的容器，不记录姓名。结果显示，大部分浪费来自份量过大的蔬菜，而许多未开封酸奶可以保存。食堂开始提供较小的第一份，可免费续添，并在出口旁设置未开封食品架。学生小组还测试两种新蔬菜做法。一个月后，废弃食物重量下降三分之一，学生仍能吃饱。分类测量用证据代替猜测，促成尊重选择的改变，而不是只要求学生把所有东西吃完。`,
      summary: "Categorised food-waste data led a cafeteria to change portions, preserve unopened food, and test recipes without limiting nutrition.", summaryZh: "分类食物浪费数据促使食堂调整份量、保存未开封食品并测试新菜，同时不影响营养。",
      fact: "The cafeteria offered smaller first portions with free additional servings.", factZh: "食堂提供较小的第一份，并允许免费续添。",
      inference: "Environmental measurement can reveal solutions that are fairer than a general rule.", inferenceZh: "环保数据测量能够发现比笼统规定更公平的方案。"
    },
    {
      title: "Cycling Once a Week", titleZh: "每周骑车一次", topic: "环保行动",
      passage: `Dara wanted to cycle to work every day to reduce car use, but the route included a busy junction and she had not ridden for years. She changed the goal to one Friday each week. Before the first trip, Dara checked the bicycle brakes and lights, practised on a quiet path, and tested a longer route with protected lanes on Sunday. The safe route took twelve minutes more than driving. At work, she found a secure bicycle room and kept dry clothes in a locker. After six weeks, Friday cycling felt normal, so she added Tuesday when the weather was suitable. Dara still used a car for some shifts. A gradual, safe routine produced a lasting change instead of an ambitious plan abandoned after one frightening journey.`,
      translationZh: `达拉想每天骑车上班以减少开车，但路线有一个繁忙路口，而且她多年没骑车。她把目标改成每周五一次。第一次通勤前，达拉检查自行车刹车和灯，在安静小路练习，并于周日测试一条更长但有保护车道的路线。安全路线比开车多十二分钟。她在单位找到安全自行车房，并在储物柜放干衣服。六周后，周五骑车已成习惯，于是天气合适时增加周二。达拉有些班次仍开车。渐进而安全的流程带来持久改变，而不是一次可怕旅程后就放弃的宏大计划。`,
      summary: "Dara built a sustainable cycling habit through a modest schedule, route testing, equipment checks, and workplace preparation.", summaryZh: "达拉通过适度频率、路线测试、设备检查和职场准备建立了可持续骑行习惯。",
      fact: "The protected cycling route took twelve minutes longer than driving.", factZh: "受保护的骑行路线比开车多十二分钟。",
      inference: "A smaller environmental goal may create more lasting change when safety and convenience are addressed.", inferenceZh: "在解决安全和便利问题时，较小的环保目标可能带来更持久的改变。"
    },
    {
      title: "A Balcony Garden Experiment", titleZh: "阳台花园实验", topic: "环保行动",
      passage: `Nora wanted to grow herbs on a shaded apartment balcony. She nearly bought ten attractive plants, but a local gardening guide suggested observing the space first. For one week, Nora marked where direct light reached at different times and checked how windy the balcony became. She chose mint, parsley, and lettuce that suited the conditions, reused three clean food containers with drainage holes, and bought one stronger pot for the railing. Rainwater from a small covered bucket watered the plants, but she emptied extra water to avoid insects. Two plants grew well and one struggled, so Nora moved it rather than buying more. The small experiment provided fresh herbs and knowledge about the balcony without wasting many plants, containers, or money.`,
      translationZh: `诺拉想在有阴影的公寓阳台种香草。她差点买十盆漂亮植物，但当地园艺指南建议先观察空间。一周里，诺拉标记不同时间阳光直射的位置，并查看阳台风力。她选择适合条件的薄荷、欧芹和生菜，重新利用三个有排水孔的干净食品容器，并为栏杆买一个更结实的花盆。小型有盖水桶收集的雨水用于浇灌，但她会倒掉多余积水以防昆虫。两株长得很好，一株状态差，于是诺拉移动位置，没有继续购买。这个小实验带来新鲜香草和对阳台的了解，又没有浪费大量植物、容器或金钱。`,
      summary: "Observation and a small trial helped Nora create a low-waste balcony garden suited to light, wind, and water conditions.", summaryZh: "观察和小规模试验帮助诺拉建立适合光照、风和用水条件的低浪费阳台花园。",
      fact: "Nora observed the balcony's light for one week before choosing plants.", factZh: "诺拉在选择植物前观察了一周阳台光照。",
      inference: "Starting small can make an environmental project both more informative and less wasteful.", inferenceZh: "从小规模开始能让环保项目更有信息价值，也更少浪费。"
    },
    {
      title: "The Community Energy Meeting", titleZh: "社区能源会议", topic: "环保行动",
      passage: `Residents of an old apartment block met to discuss high winter energy bills. Some wanted solar panels immediately, while others worried about roof cost and ownership rules. The chair invited an independent adviser who first reviewed twelve months of shared-area electricity data. The biggest use came from hallway lights that stayed fully bright all night. The adviser recommended motion sensors and efficient bulbs as a lower-cost first step, followed by a roof survey for solar potential. Residents approved the lighting change and agreed to compare bills after three months. They also formed a small group to research grants and legal requirements for the roof. The meeting turned a broad argument into a staged plan with evidence, a quick saving, and further investigation rather than one expensive promise.`,
      translationZh: `一栋老公寓楼的住户开会讨论高昂冬季能源账单。有人希望立即安装太阳能板，另一些人担心屋顶费用和产权规定。主持人邀请独立顾问，顾问先查看十二个月公共区域用电数据。最大用电来自整夜保持全亮的走廊灯。顾问建议先用较低成本安装感应器和节能灯泡，再进行屋顶太阳能潜力调查。住户批准照明改造，并同意三个月后比较账单。他们还成立小组研究补贴和屋顶法律要求。会议把宽泛争论转成分阶段计划，包含证据、快速节省和后续调查，而不是一个昂贵承诺。`,
      summary: "Energy data and independent advice helped residents choose a staged plan before committing to expensive solar work.", summaryZh: "能源数据和独立建议帮助住户先制定分阶段计划，再考虑昂贵的太阳能工程。",
      fact: "Hallway lights were the largest source of shared-area electricity use.", factZh: "走廊灯是公共区域用电的最大来源。",
      inference: "A modest evidence-based change can build support for larger environmental decisions.", inferenceZh: "适度且有证据支持的改变，能够为更大的环保决策积累支持。"
    },
    {
      title: "Cleaning a Local Stream", titleZh: "清理本地溪流", topic: "环保行动",
      passage: `A volunteer group planned to clean rubbish from a local stream. Before entering the area, they contacted the council and learned that some sections had unstable banks and protected bird nests. The council marked safe access points and provided gloves, litter pickers, and separate bags for recyclable material. Volunteers worked in pairs and recorded unusual waste instead of touching sharp or chemical items. One team found repeated drink containers near a picnic bench. After the clean-up, the group asked for a bin and a small sign at that location. They weighed the collected rubbish and shared the categories with the community. The day removed waste, but the safety plan and source information also supported prevention and protected wildlife from well-intended disturbance.`,
      translationZh: `一个志愿团体计划清理当地溪流垃圾。进入区域前，他们联系市政部门，得知部分河岸不稳，还有受保护鸟巢。市政标出安全入口，并提供手套、拾物夹和可回收物分类袋。志愿者两人一组工作，发现尖锐或化学物品时只记录，不直接触碰。一组人在野餐长椅附近发现大量重复饮料容器。清理后，团体申请在该位置设置垃圾桶和小告示。他们称量收集物，并向社区分享类别。活动清除了垃圾，而安全计划和来源信息也支持预防，并避免善意行动打扰野生动物。`,
      summary: "Council guidance made a stream clean-up safe, wildlife-aware, measurable, and connected to waste prevention.", summaryZh: "市政指导让溪流清理兼顾安全、野生动物、数据记录和垃圾预防。",
      fact: "Volunteers worked in pairs and did not touch sharp or chemical waste.", factZh: "志愿者两人一组，并且不接触尖锐或化学废物。",
      inference: "Environmental volunteering is more effective when it protects people and habitats while investigating waste sources.", inferenceZh: "环保志愿行动在保护人员和栖息地并调查垃圾来源时更有效。"
    },
    {
      title: "Buying Less but Better", titleZh: "少买但买好", topic: "环保行动",
      passage: `Riku used to buy inexpensive shirts whenever an online sale appeared. Many lost shape quickly, and his wardrobe became crowded. Before replacing another shirt, he counted what he owned and noted which pieces he actually wore. Riku chose a simple replacement rule: buy only for a clear gap, wait forty-eight hours, check material and repairability, and donate or recycle responsibly only after deciding an item was no longer useful. For his next purchase, he compared stitching, washing instructions, and cost per expected wear instead of the discount percentage. The better shirt cost more initially, so he bought one rather than three. Six months later, it still fitted well. Buying less did not mean never enjoying clothes; it meant slowing the decision and valuing longer use.`,
      translationZh: `陆过去每遇到网店促销就买便宜衬衫。很多很快变形，衣柜也越来越拥挤。在再次购买前，他统计现有衣物，并记录哪些真正会穿。陆制定简单替换规则：只填补明确缺口，等待四十八小时，检查材料和可维修性，确认不再有用后才负责任地捐赠或回收。下一次购买时，他比较缝线、洗护说明和预计每次穿着成本，而不是只看折扣百分比。更好的衬衫初始价格较高，于是他只买一件而不是三件。六个月后仍然合身。少买不等于不能享受衣服，而是放慢决定并重视长久使用。`,
      summary: "Riku reduced clothing waste by auditing needs, delaying purchases, checking durability, and valuing cost over repeated use.", summaryZh: "陆通过盘点需求、延迟购买、检查耐用性和重视长期使用成本来减少衣物浪费。",
      fact: "Riku waited forty-eight hours before a planned clothing purchase.", factZh: "陆在计划购买衣物前等待四十八小时。",
      inference: "A higher initial price may support lower waste when an item remains useful much longer.", inferenceZh: "一件物品能长期使用时，较高的初始价格可能反而减少浪费。"
    },

    {
      title: "Dinner at Six or Nine", titleZh: "六点还是九点吃晚餐", topic: "文化交流",
      passage: `When Sofia moved from Spain to Denmark, colleagues invited her to dinner at six. She assumed six meant the time to leave home because her family usually ate after nine. Sofia arrived at seven and found that everyone had finished the main course. Her host welcomed her kindly and later explained that invitations normally gave the actual serving time. Sofia apologised without making excuses and asked how early guests usually arrived. For the next invitation, she reached the house five minutes before the stated time and brought a small dessert after checking with the host. She also told new international colleagues about the timing difference. The experience showed that ordinary words such as "dinner at six" can carry different practical expectations across cultures.`,
      translationZh: `索菲娅从西班牙搬到丹麦后，同事邀请她六点吃晚餐。她以为六点是出门时间，因为她家通常九点以后才吃饭。索菲娅七点到达时，大家已吃完主菜。主人友好欢迎她，后来解释邀请上的时间通常就是上菜时间。索菲娅道歉，没有找借口，并询问客人通常应提前多久到。下一次受邀时，她在规定时间前五分钟到达，并先问主人是否合适，再带了一份小甜点。她也把这个时间差告诉新来的国际同事。这次经历说明，“六点吃晚餐”这类普通词语，在不同文化中可能承载不同实际预期。`,
      summary: "Sofia learned that meal invitations encode local timing expectations and adapted by asking a simple practical question.", summaryZh: "索菲娅发现用餐邀请包含当地时间预期，并通过简单询问作出调整。",
      fact: "At the second dinner, Sofia arrived five minutes before the stated time.", factZh: "第二次晚餐时，索菲娅比标明时间早五分钟到达。",
      inference: "Cultural misunderstandings can come from different assumptions about familiar phrases, not bad intentions.", inferenceZh: "文化误解可能来自对熟悉表达的不同假设，而不是恶意。"
    },
    {
      title: "Learning the Meaning of Silence", titleZh: "理解沉默的含义", topic: "文化交流",
      passage: `In his new team, Daniel became uncomfortable whenever a question was followed by several seconds of silence. He interpreted the pause as disagreement and quickly added more explanations. During a feedback meeting, a colleague said that Daniel's extra talking sometimes made it hard to think. She explained that several team members used silence to consider a question carefully, not to reject it. Daniel began counting slowly to five before speaking again and watching whether someone was preparing to answer. He also said, "Take a moment; I am happy to wait." Meetings became less rushed, and quieter colleagues contributed more detailed ideas. Daniel still asked for clarification when silence continued too long. He learned that the same pause can communicate thoughtfulness, discomfort, or disagreement depending on context.`,
      translationZh: `在新团队里，每当提问后出现几秒沉默，丹尼尔就感到不安。他把停顿理解为反对，于是迅速补充更多解释。一次反馈会中，一位同事说，丹尼尔继续说话有时让人难以思考。她解释，几位成员用沉默认真考虑问题，而不是拒绝。丹尼尔开始在再次开口前慢慢数到五，并观察是否有人准备回答。他也会说：“慢慢想，我可以等。”会议不再那么仓促，安静的同事贡献了更详细的想法。沉默过久时，丹尼尔仍会请求确认。他明白，同一个停顿会因语境表示思考、不适或不同意见。`,
      summary: "Daniel stopped treating every pause as rejection and created more thinking space while still checking prolonged silence.", summaryZh: "丹尼尔不再把所有停顿视为拒绝，给思考留出空间，同时仍会确认过长沉默。",
      fact: "Daniel practised counting slowly to five before speaking again.", factZh: "丹尼尔练习在再次开口前慢慢数到五。",
      inference: "Communication competence includes interpreting timing and silence, not only spoken words.", inferenceZh: "沟通能力不仅包括语言，也包括理解节奏和沉默。"
    },
    {
      title: "A Festival Volunteer", titleZh: "节庆志愿者", topic: "文化交流",
      passage: `Mina volunteered at a neighbourhood lantern festival attended by long-term residents and recent immigrants. Her task was to welcome visitors and explain where activities took place. Before the event, organisers taught volunteers the festival's history and asked community members how sacred symbols should be handled. Mina used a simple map with pictures and learned greetings in four local languages. When a visitor asked to wear a ceremonial costume for a funny photograph, Mina did not embarrass him. She explained that the costume belonged to a formal performance and showed him a separate public dressing area with festival jackets. The visitor accepted the alternative. Mina discovered that warm hospitality and cultural boundaries could exist together when explanations were clear and respectful.`,
      translationZh: `米娜在一个社区灯笼节做志愿者，参与者既有老居民，也有新移民。她负责欢迎访客并说明活动地点。活动前，组织者讲解节庆历史，并询问社区成员应如何对待神圣符号。米娜使用带图片的简单地图，还学会四种当地语言的问候。一位访客想穿仪式服装拍搞笑照片时，米娜没有让他难堪。她解释服装属于正式表演，并带他去公共换装区选择节庆外套。访客接受了替代方案。米娜发现，只要解释清楚且尊重他人，热情接待与文化边界可以同时存在。`,
      summary: "Preparation helped Mina welcome diverse festival visitors while explaining cultural boundaries and offering respectful alternatives.", summaryZh: "充分准备帮助米娜欢迎多元访客，同时解释文化边界并提供尊重的替代方案。",
      fact: "Mina learned greetings in four local languages.", factZh: "米娜学会了四种当地语言的问候。",
      inference: "Saying no to a cultural request can remain hospitable when the reason and an alternative are offered.", inferenceZh: "说明原因并提供替代方案时，拒绝文化相关请求仍可保持友好。"
    },
    {
      title: "The Museum Audio Story", titleZh: "博物馆里的声音故事", topic: "文化交流",
      passage: `A history museum created a new audio guide about dock workers. The first script used formal dates and facts but contained no workers' voices. Curator Hana invited retired workers and their families to record memories. One person described the smell of rope and salt; another remembered sharing tea during winter shifts. The museum obtained written permission, allowed contributors to review edited clips, and included transcripts in two languages. Historians checked dates so personal memories and public records could appear together without pretending they were identical. Visitors spent longer in the gallery and left comments about people rather than only machines. The guide became richer because lived experience was treated as evidence with context, consent, and careful verification.`,
      translationZh: `一家历史博物馆制作关于码头工人的新语音导览。初稿充满正式日期和事实，却没有工人自己的声音。策展人哈娜邀请退休工人及家属录制回忆。一人描述绳索和盐的气味，另一人回忆冬班一起喝茶。博物馆取得书面许可，让参与者审阅剪辑片段，并提供两种语言的文字稿。历史学家核对日期，让个人记忆与公共记录并列出现，同时不假装两者完全相同。访客在展厅停留更久，留言也更多谈到人，而不只是机器。生活经验在获得语境、同意和仔细核实后，被作为证据，使导览更加丰富。`,
      summary: "The museum combined consented oral histories, bilingual transcripts, and verified records to humanise a dock-work exhibition.", summaryZh: "博物馆把经同意的口述历史、双语文字稿和核实记录结合起来，让码头展览更有人情味。",
      fact: "Contributors were allowed to review the edited audio clips.", factZh: "参与者可以审阅剪辑后的录音片段。",
      inference: "Personal memories enrich public history when institutions handle them with consent and context.", inferenceZh: "机构在取得同意并提供语境时，个人回忆能丰富公共历史。"
    },
    {
      title: "Bringing a Small Gift", titleZh: "带一份小礼物", topic: "文化交流",
      passage: `Akiko was invited to a colleague's home for the first time and wanted to bring a gift. Online advice offered many confident but conflicting rules. Instead of buying something expensive, she asked another colleague who knew the host well. He suggested a small box of local biscuits and mentioned that the family did not drink alcohol. Akiko also checked whether the biscuits contained nuts because one child had an allergy. At the door, she gave the gift without expecting it to be opened immediately. The host thanked her and served the biscuits later with tea. The value of the visit came from conversation, not the package. Akiko learned that modest, informed attention to the actual household was more useful than treating a culture as one fixed list of rules.`,
      translationZh: `明子第一次受邀去同事家，想带份礼物。网上建议很多，语气都很肯定，却彼此矛盾。她没有买昂贵物品，而是询问一位熟悉主人的同事。对方建议带一小盒当地饼干，并提到这个家庭不喝酒。明子还确认饼干是否含坚果，因为其中一个孩子过敏。到门口时，她送上礼物，没有期待主人立即打开。主人表示感谢，后来在喝茶时端出饼干。拜访的价值来自谈话，而不是包装。明子明白，针对实际家庭做适度而周到的考虑，比把一种文化当作固定规则清单更有用。`,
      summary: "Akiko chose a modest host gift through household-specific advice, allergy awareness, and low-pressure presentation.", summaryZh: "明子根据具体家庭建议、过敏信息和无压力的赠送方式选择了一份适度礼物。",
      fact: "Akiko checked whether the biscuits contained nuts.", factZh: "明子确认了饼干是否含坚果。",
      inference: "Specific knowledge about people is often more reliable than broad cultural stereotypes.", inferenceZh: "关于具体个人的信息通常比宽泛文化刻板印象更可靠。"
    },
    {
      title: "Names in a New Workplace", titleZh: "新职场中的称呼", topic: "文化交流",
      passage: `On her first day at a university office, Farah heard people call the director by his first name. In her previous workplace, senior staff were always addressed by title and family name. Farah did not want to sound disrespectful, so she introduced herself formally and asked, "How would you like me to address you?" The director said his first name was fine in conversation, while formal letters used his title. Farah added preferred names and pronunciation notes to her private contact list. She also corrected a colleague gently when he shortened her own name without asking. The team began including preferred names in introductions for new staff. A brief question reduced uncertainty and showed that naming customs apply to everyone's identity, not only hierarchy.`,
      translationZh: `法拉在大学办公室上班第一天，听见大家直呼主任名字。她以前的单位总用职称和姓氏称呼资深员工。法拉不想显得无礼，于是正式介绍自己，并问：“您希望我怎样称呼您？”主任说日常交流叫名字即可，正式信件则使用职称。法拉在私人联系人列表里记录偏好称呼和发音。她也在一位同事未经询问就缩短自己名字时，温和地纠正对方。团队后来开始在新员工介绍中加入偏好称呼。一个简短问题减少了不确定，也说明称呼习惯涉及每个人的身份，而不只是等级。`,
      summary: "Farah handled unfamiliar naming customs by asking preferences, recording pronunciation, and asserting her own name respectfully.", summaryZh: "法拉通过询问偏好、记录发音并尊重地维护自己的姓名来处理陌生称呼习惯。",
      fact: "Formal letters to the director still used his title.", factZh: "给主任的正式信件仍使用他的职称。",
      inference: "Respectful naming depends on context and individual preference rather than one universal level of formality.", inferenceZh: "尊重的称呼取决于语境和个人偏好，而不是统一的正式程度。"
    },
    {
      title: "A Library of Family Recipes", titleZh: "家庭食谱图书馆", topic: "文化交流",
      passage: `A community centre invited families to contribute recipes for a neighbourhood book. Early submissions came mostly from confident English writers, so coordinator Leila changed the process. Volunteers offered short interviews, accepted handwritten notes in several languages, and asked contributors what story or occasion belonged with each dish. Families reviewed the translated recipes before publication, especially measurements and allergy information. One grandmother demonstrated a dough texture that could not be explained by exact weight alone, so the book included step-by-step photographs. The finished collection contained everyday breakfasts, celebration foods, and inexpensive meals rather than presenting one dish as the symbol of an entire culture. At the launch, contributors read stories in different languages while visitors tasted small samples.`,
      translationZh: `社区中心邀请各家庭为邻里食谱书投稿。最初来稿主要来自英语写作自信的人，于是协调员莱拉改变流程。志愿者提供简短访谈，接受多种语言的手写笔记，并询问每道菜对应的故事或场合。出版前，家庭会审阅翻译后的食谱，尤其是用量和过敏信息。一位祖母示范了一种无法只用准确重量解释的面团质感，因此书中加入分步骤照片。最终合集包含日常早餐、庆祝食品和经济餐点，没有把某一道菜当作整个文化的代表。发布会上，投稿者用不同语言朗读故事，访客品尝小份样品。`,
      summary: "Flexible multilingual collection and contributor review created a diverse recipe book with stories, accuracy, and no single cultural stereotype.", summaryZh: "灵活的多语收集和投稿者审阅，形成兼具故事、准确性且避免单一刻板印象的食谱书。",
      fact: "Families reviewed translated measurements and allergy information before publication.", factZh: "出版前，各家庭审阅了翻译后的用量和过敏信息。",
      inference: "Inclusive cultural projects may need more than a standard written submission form.", inferenceZh: "包容性的文化项目可能需要超越标准书面投稿表。"
    },
    {
      title: "Watching a Local Play", titleZh: "观看当地戏剧", topic: "文化交流",
      passage: `Tom attended a play in his new city to practise listening, but the actors used regional expressions and spoke quickly. Before the performance, he read the short plot summary without searching for every detail. He selected an aisle seat where he could see the surtitles clearly and borrowed an audio headset offered by the theatre. During the play, Tom focused on relationships, tone, and repeated phrases rather than translating each sentence. At the interval, a local friend explained one joke connected to the city's football history. Afterward, Tom read a review and understood several scenes more fully. He had missed some language, yet he could discuss the central conflict. Cultural participation became a source of learning, not a test requiring complete comprehension.`,
      translationZh: `汤姆为了练习听力，去看新城市的一场戏，但演员使用地区表达，语速也快。演出前，他阅读简短剧情介绍，没有搜索每个细节。他选择能清楚看到字幕的过道座位，并借用剧院提供的音频耳机。演出中，汤姆关注人物关系、语气和重复短语，而不是翻译每句话。中场时，一位当地朋友解释了一个与城市足球历史有关的笑话。之后，汤姆阅读评论，更完整地理解几个场景。他漏掉了一些语言，却能讨论核心冲突。文化参与成了学习来源，而不是要求完全理解的考试。`,
      summary: "Preparation, accessibility tools, selective attention, and later review helped Tom enjoy a play without understanding every line.", summaryZh: "准备、辅助工具、选择性关注和演后复盘帮助汤姆在不懂每句台词时仍欣赏戏剧。",
      fact: "A local friend explained a joke about the city's football history.", factZh: "一位当地朋友解释了与该市足球历史有关的笑话。",
      inference: "Partial language comprehension can still support meaningful cultural participation.", inferenceZh: "部分语言理解仍能支持有意义的文化参与。"
    },

    {
      title: "The Two-Minute Handover", titleZh: "两分钟工作交接", topic: "职场沟通",
      passage: `At a busy reception desk, shift handovers often became long stories, and important actions were lost. Team leader Eva introduced a two-minute structure with three headings: completed, waiting, and urgent. The outgoing worker named the customer or task, gave one relevant fact, and stated the next action and owner. Supporting details stayed in the shared log. During the first week, staff used a small card as a prompt. One evening, the structure highlighted a visitor whose transport had not been confirmed; the incoming worker called immediately and prevented a delay. The handover did not replace conversation when a case was complex. It created a reliable first picture so that limited overlap time focused on priorities instead of memory.`,
      translationZh: `在繁忙前台，换班交接常变成长故事，重要行动反而丢失。组长伊娃引入两分钟结构，分为“已完成、等待中、紧急”三栏。下班员工说出顾客或任务，只给一个相关事实，再说明下一步行动和负责人。支持细节保留在共享日志。第一周，员工用小卡片作为提示。一天晚上，这套结构突出了一位交通尚未确认的访客；接班员工立即打电话，避免延误。复杂情况仍可继续深入交谈。两分钟交接提供可靠的初始全貌，让有限的重叠时间集中于优先事项，而不是依靠记忆。`,
      summary: "A three-part two-minute handover made priorities, owners, and next actions visible while keeping details in a shared log.", summaryZh: "三部分两分钟交接明确优先事项、负责人和下一步行动，详细信息则保留在共享日志。",
      fact: "The handover headings were completed, waiting, and urgent.", factZh: "交接的三个标题是已完成、等待中和紧急。",
      inference: "A concise structure can improve communication without eliminating deeper discussion when needed.", inferenceZh: "简洁结构能改善沟通，同时不妨碍必要时深入讨论。"
    },
    {
      title: "Saying No with a Solution", titleZh: "带着方案说不", topic: "职场沟通",
      passage: `At four o'clock, Ben's manager asked him to prepare a detailed report by the next morning. Ben was already responsible for closing the monthly accounts, which had the same deadline. He did not simply agree and work all night. Ben explained the conflict using the two deliverables and estimated hours. He offered three options: send a short report in the morning and full analysis on Friday, move one account task to a trained colleague, or change the report deadline. The manager chose the first option because the morning meeting needed only key figures. Ben confirmed the decision in a message and delivered the short report on time. By pairing a clear limit with workable choices, he protected quality and helped the manager decide the real priority.`,
      translationZh: `下午四点，本的经理要求他第二天早上完成一份详细报告。本还负责截止时间相同的月度结账。他没有直接答应后通宵工作，而是说明两项交付冲突并估算所需工时。他给出三个选项：早上提交简报、周五补全分析；把一项账务工作移交给受过培训的同事；或调整报告截止日。经理选择第一项，因为早会只需要关键数字。本通过消息确认决定，并按时交付简报。通过把明确限制与可行选择结合，他保护了质量，也帮助经理判断真正优先事项。`,
      summary: "Ben communicated a deadline conflict with estimates and alternatives, allowing his manager to choose the necessary scope.", summaryZh: "本用工时估算和替代方案说明截止冲突，让经理选择真正需要的范围。",
      fact: "The manager chose a short morning report with full analysis on Friday.", factZh: "经理选择早上提交简报，周五再提供完整分析。",
      inference: "A professional refusal is stronger when it shows constraints and supports a decision.", inferenceZh: "职业化拒绝在说明限制并支持决策时更有力量。"
    },
    {
      title: "A Fair Meeting Rotation", titleZh: "公平的会议轮换", topic: "职场沟通",
      passage: `A global team always held its weekly meeting at nine in London. This was convenient for Europe but required colleagues in Vancouver to join at one in the morning. Because recordings existed, managers assumed the arrangement was acceptable. A Vancouver colleague explained that recordings allowed information access but not live decisions. The team mapped everyone's local time and created two alternating meeting slots. Each region would experience the less convenient slot once a month, and major decisions would be listed in advance. People who could not attend could comment in the document before voting. After six weeks, participation increased and fewer decisions had to be reopened. Fairness did not mean one perfect time; it meant sharing inconvenience and preserving meaningful ways to contribute.`,
      translationZh: `一个全球团队总在伦敦时间周一早上九点开周会。欧洲很方便，但温哥华同事要凌晨一点参加。因为有录播，经理以为安排可以接受。一位温哥华同事说明，录播能获得信息，却无法参与实时决策。团队列出每个人的当地时间，制定两个交替会议时段。每个地区每月只经历一次不方便时段，重大决定提前列出。不能出席的人可在表决前在文档中留言。六周后，参与度提高，需要重新讨论的决定减少。公平并不是找到一个完美时间，而是共同承担不便，并保留有意义的参与方式。`,
      summary: "Alternating time zones and asynchronous input made a global meeting schedule more equitable and decisions more stable.", summaryZh: "交替时区和异步意见让全球会议安排更公平，决策也更稳定。",
      fact: "The team introduced two alternating meeting slots.", factZh: "团队引入两个交替会议时段。",
      inference: "Access to a recording is not equivalent to influence over a live decision.", inferenceZh: "能看到录播并不等于能影响实时决策。"
    },
    {
      title: "Fixing a Shared Spreadsheet", titleZh: "修复共享表格", topic: "职场沟通",
      passage: `A sales spreadsheet began showing different totals because people typed dates, currencies, and status words in several formats. Mei first saved a dated copy so the team could recover earlier data. She then highlighted inconsistent columns and invited two frequent users to explain how they worked. Together they selected one date format, locked formula cells, added drop-down status choices, and wrote a short instruction tab with examples. Mei did not silently correct every row; each regional owner reviewed uncertain records. The team tested the new version with ten entries before replacing the live sheet. A monthly check was assigned to a named person. The spreadsheet became more reliable because the fix included user agreement, validation, documentation, ownership, and a backup rather than only prettier formatting.`,
      translationZh: `一份销售共享表格开始显示不同总计，因为大家用多种格式输入日期、货币和状态词。梅先保存带日期的副本，以便恢复早期数据。随后她标出不一致列，并邀请两位常用者解释工作方式。大家共同选择一种日期格式，锁定公式单元格，增加状态下拉选项，并用示例写一页简短说明。梅没有默默修正所有行；每个地区负责人审核不确定记录。团队先用十条数据测试新版，再替换正式表格。月度检查也分配给明确人员。表格更可靠，是因为修复包含用户共识、验证、文档、负责人和备份，而不只是外观更整齐。`,
      summary: "Mei improved a shared spreadsheet through backup, user consultation, validation, documentation, testing, and named ownership.", summaryZh: "梅通过备份、用户协商、验证、说明、测试和明确负责人改进共享表格。",
      fact: "The team tested the revised spreadsheet with ten entries.", factZh: "团队用十条数据测试修改后的表格。",
      inference: "Reliable shared tools depend on agreed working behaviour as much as technical formatting.", inferenceZh: "可靠的共享工具既依赖技术格式，也依赖一致的使用行为。"
    },
    {
      title: "The New Employee Buddy", titleZh: "新员工伙伴", topic: "职场沟通",
      passage: `When Oscar joined a logistics company, he received formal training but still had small questions about lunch, printers, and team language. The company assigned Priya as his buddy for the first month. She was not his manager and did not evaluate performance. They met for ten minutes at the end of each day during the first week, then twice weekly. Priya showed Oscar where reliable instructions were stored instead of answering from memory. When Oscar raised a safety question, she directed him to the supervisor rather than guessing. Oscar kept a list, grouped repeated questions, and later added clear answers to the new-starter guide with approval. The buddy arrangement provided a low-pressure route for everyday learning while preserving the correct channels for formal or safety decisions.`,
      translationZh: `奥斯卡加入一家物流公司后接受了正式培训，但对午餐、打印机和团队用语仍有许多小问题。公司安排普里娅在第一个月担任伙伴。她不是他的经理，也不评估绩效。第一周，两人每天结束时见十分钟，之后改为每周两次。普里娅会告诉奥斯卡可靠说明存在哪里，而不是凭记忆回答。奥斯卡提出安全问题时，她把他引导给主管，没有猜测。奥斯卡保留问题清单，把重复问题分类，后来经批准把清楚答案加入新员工指南。伙伴安排提供了低压力的日常学习渠道，同时保留正式或安全决策的正确路径。`,
      summary: "A non-evaluative buddy helped Oscar with everyday learning while directing formal and safety questions to authoritative sources.", summaryZh: "不负责评估的伙伴帮助奥斯卡处理日常学习，同时把正式和安全问题引向权威来源。",
      fact: "Priya met Oscar for ten minutes at the end of each first-week day.", factZh: "第一周每天结束时，普里娅与奥斯卡见面十分钟。",
      inference: "Informal workplace support is most useful when its role and limits are clear.", inferenceZh: "非正式职场支持在角色和边界清楚时最有用。"
    },
    {
      title: "Giving Specific Praise", titleZh: "给予具体表扬", topic: "职场沟通",
      passage: `Team leader Jo often told staff "Good job," but the phrase did not show what should be repeated. After a busy event, she gave Mia more specific feedback: "You confirmed each visitor's name before printing the badge, so we had no duplicate passes." Jo described the action and its result without comparing Mia to colleagues. She also thanked the whole team for reopening registration quickly after a system problem. During the next event, Mia used the same checking step and taught it to a new volunteer. Other staff began noticing effective behaviours, such as clear handovers and early risk reports. Specific praise did not replace correction; it made successful practice visible. People understood not only that their work was valued, but which choices created the value.`,
      translationZh: `组长乔经常对员工说“干得好”，但这句话没有说明什么值得重复。一次繁忙活动后，她给米娅更具体的反馈：“你在打印胸牌前确认每位访客姓名，所以没有重复通行证。”乔描述行动和结果，没有拿米娅与同事比较。她也感谢整个团队在系统故障后迅速重开登记。下一次活动中，米娅继续使用相同检查步骤，并教给新志愿者。其他员工也开始注意有效行为，如清楚交接和提前报告风险。具体表扬并不取代纠正，而是让成功做法可见。人们不只知道工作被肯定，也知道哪些选择创造了价值。`,
      summary: "Jo connected praise to observable actions and results, helping successful workplace behaviour spread.", summaryZh: "乔把表扬与可观察行动和结果联系起来，帮助成功做法在职场传播。",
      fact: "Mia confirmed visitor names before printing badges.", factZh: "米娅在打印胸牌前确认访客姓名。",
      inference: "Feedback is easier to apply when it identifies the behaviour behind a good result.", inferenceZh: "反馈指出良好结果背后的行为时，更容易被应用。"
    },
    {
      title: "A Conflict About Priorities", titleZh: "优先事项冲突", topic: "职场沟通",
      passage: `Two departments needed the same designer during the final week of a project. Marketing wanted an event poster, while operations needed safety diagrams for a new process. Emails became tense because each side called its task "urgent." The designer's manager brought both requesters together and asked for deadlines, consequences of delay, estimated effort, and possible temporary versions. The safety diagrams were required before staff training on Wednesday; the poster printer deadline was Friday. They agreed that the designer would finish simple safety diagrams first, then create the poster, while marketing used a text-only invitation for early messages. The decision was recorded with times and owners. Comparing consequences replaced competing labels and gave both departments a workable sequence without questioning whose work mattered more.`,
      translationZh: `项目最后一周，两个部门都需要同一位设计师。市场部要活动海报，运营部要新流程安全图。邮件变得紧张，因为双方都称任务“紧急”。设计师经理召集两位需求方，询问截止日、延误后果、预计工时和临时版本。安全图必须在周三员工培训前完成；海报印刷截止是周五。双方同意先完成简化安全图，再做海报，市场部早期消息先用纯文字邀请。决定记录了时间和负责人。比较后果代替争夺“紧急”标签，为两个部门形成可行顺序，也没有质疑哪一方工作更重要。`,
      summary: "Evidence about deadlines, consequences, effort, and temporary versions resolved a cross-department priority conflict.", summaryZh: "关于截止日、后果、工时和临时版本的证据解决了跨部门优先级冲突。",
      fact: "The safety diagrams were needed before Wednesday's staff training.", factZh: "安全图需要在周三员工培训前完成。",
      inference: "Priority decisions improve when teams compare consequences rather than repeat the word urgent.", inferenceZh: "团队比较延误后果，而不是反复强调“紧急”时，优先决策会更好。"
    },
    {
      title: "Asking for Flexible Hours", titleZh: "申请弹性工时", topic: "职场沟通",
      passage: `Luca wanted to start work one hour earlier twice a week so he could attend an evening language course. Before speaking to his manager, he reviewed customer coverage and noticed that another trained employee already worked later on those days. Luca proposed a six-week trial, kept his total hours unchanged, and offered to publish his calendar clearly. He explained how the course supported telephone communication in his role but did not claim the company was required to approve it. The manager checked with the team and agreed, provided that Monday training remained protected. After four weeks, response times and handovers were unchanged. Luca and the manager confirmed the arrangement for the course term. A specific, reversible proposal made it easier to evaluate flexibility through real work evidence.`,
      translationZh: `卢卡希望每周两天提前一小时上班，以参加晚间语言课程。与经理沟通前，他查看顾客服务覆盖，发现那两天已有另一名受过培训的员工工作到较晚。卢卡提出试行六周，总工时不变，并愿意清楚公开日历。他解释课程如何帮助岗位中的电话沟通，但没有声称公司必须批准。经理与团队核实后同意，条件是周一培训时间不受影响。四周后，响应时间和交接都没有变化。卢卡和经理确认在课程期间继续安排。具体且可撤回的提议，让大家能用真实工作证据评估弹性。`,
      summary: "Luca supported a flexible-hours request with coverage research, a fixed trial, unchanged hours, visibility, and review evidence.", summaryZh: "卢卡用覆盖调查、固定试行、总工时不变、日历透明和复盘证据支持弹性工时申请。",
      fact: "Luca proposed a six-week trial of the new schedule.", factZh: "卢卡提出试行新时间表六周。",
      inference: "Managers may find flexibility easier to approve when operational effects can be tested and reversed.", inferenceZh: "运营影响可测试、可撤回时，经理可能更容易批准弹性安排。"
    },

    {
      title: "The Sunday Meal Plan", titleZh: "周日餐食计划", topic: "日常生活",
      passage: `Every weekday evening, Emma opened the refrigerator without knowing what to cook. She often ordered food while vegetables became old. On Sunday, she began a fifteen-minute meal plan. First, she checked what needed to be used soon. Then she chose three flexible meals that shared ingredients, such as roasted vegetables for rice bowls and soup. She left two evenings unplanned for leftovers or social events. Emma wrote the plan on the refrigerator and prepared only one sauce and a box of chopped vegetables. Midweek, a friend invited her out, so she froze the soup rather than forcing the schedule. After a month, Emma spent less, wasted less, and still had choice. The plan reduced daily decisions without turning dinner into a strict timetable.`,
      translationZh: `每个工作日晚，艾玛打开冰箱都不知道做什么，常常点外卖，而蔬菜逐渐变坏。她开始在周日花十五分钟做餐食计划。首先检查哪些食材需要尽快使用，然后选择三种可以共享食材的灵活餐食，例如烤蔬菜既用于盖饭也用于汤。她留出两个晚上不安排，用来吃剩菜或参加社交活动。艾玛把计划写在冰箱上，只提前做一份酱汁和一盒切好的蔬菜。周中朋友邀请她外出，她就把汤冷冻，没有强迫自己照表执行。一个月后，艾玛花费更少、浪费更少，同时仍有选择。计划减少每日决策，却没有把晚餐变成严格时间表。`,
      summary: "Emma's short, flexible meal plan reduced food waste, spending, and daily decisions while preserving choice.", summaryZh: "艾玛简短而灵活的餐食计划减少食物浪费、开支和每日决策，同时保留选择。",
      fact: "Emma deliberately left two evenings without a fixed meal.", factZh: "艾玛特意留出两个晚上不安排固定餐食。",
      inference: "A routine can support daily life without requiring every event to follow the original plan.", inferenceZh: "日常流程能够提供支持，而不必要求所有事情都严格按原计划进行。"
    },
    {
      title: "A Package for the Wrong Door", titleZh: "送错门的包裹", topic: "日常生活",
      passage: `Jin found a parcel outside his apartment, but the label showed the same building number on a different street. The delivery photograph in the tracking message clearly showed Jin's blue door. He did not open the parcel or leave it outdoors overnight. Jin contacted the delivery company through its official app, provided the tracking number, and reported the address mismatch. The agent arranged collection for the next morning and asked him to keep the parcel dry. Jin also sent a short message to the intended recipient using the phone number printed on the label, without sharing a photograph containing other details. The driver collected it as planned. A simple check and secure handling returned the package while protecting both the item and personal information.`,
      translationZh: `金在公寓门外发现一个包裹，但标签显示的是另一条街相同的楼号。物流消息中的投递照片清楚拍到金的蓝色门。他没有打开包裹，也没有把它整夜留在室外。金通过官方应用联系快递公司，提供追踪号并报告地址不符。客服安排第二天早上取回，并请他保持包裹干燥。金还使用标签上的电话号码给真正收件人发简短消息，没有分享包含其他信息的照片。司机按计划取走。一次简单核对和妥善保管，在保护物品和个人信息的同时让包裹回到正确路径。`,
      summary: "Jin handled a misdelivered parcel through official reporting, secure storage, limited contact, and privacy-aware communication.", summaryZh: "金通过官方报告、安全保管、有限联系和隐私意识处理了误投包裹。",
      fact: "The delivery company collected the parcel the following morning.", factZh: "快递公司在第二天早上取走包裹。",
      inference: "Correcting a delivery mistake does not require opening the parcel or exposing label information widely.", inferenceZh: "纠正投递错误不需要打开包裹或广泛暴露标签信息。"
    },
    {
      title: "Learning a New Neighbourhood", titleZh: "熟悉新社区", topic: "日常生活",
      passage: `After moving, Carlos knew the route to work but little else about his neighbourhood. Instead of relying only on map ratings, he took one purposeful walk each weekend. The first route found a grocery shop, pharmacy, and cash machine. The second located a public library, clinic, and safe evening bus stop. Carlos saved opening times and emergency numbers, but also spoke briefly with a shopkeeper about market day. On the third walk, he discovered a quieter shortcut that was open only in daylight. He marked it differently on his map to avoid using it late. Within a month, the area felt familiar because Carlos knew both useful services and practical limits. Repeated local observation created confidence that a list of popular places could not provide.`,
      translationZh: `搬家后，卡洛斯只知道上班路线，对社区其他地方了解很少。他没有只依赖地图评分，而是每周末进行一次有目的的散步。第一条路线找到杂货店、药房和取款机；第二条找到公共图书馆、诊所和安全的晚间公交站。他保存营业时间和紧急号码，也与店主简短聊了集市日。第三次散步发现一条更安静的近路，但只在白天开放。他在地图上用不同方式标记，避免夜间使用。一个月内，社区变得熟悉，因为卡洛斯既了解实用服务，也知道现实限制。重复的本地观察带来的信心，是热门地点清单无法提供的。`,
      summary: "Purposeful weekend walks helped Carlos map essential services, local knowledge, safe transport, and route limitations.", summaryZh: "有目的的周末散步帮助卡洛斯了解基本服务、当地信息、安全交通和路线限制。",
      fact: "Carlos marked a daylight-only shortcut differently on his map.", factZh: "卡洛斯在地图上用不同方式标记一条仅白天开放的近路。",
      inference: "Feeling at home in an area involves understanding limits and routines, not only finding attractions.", inferenceZh: "熟悉一个地区不仅是找到景点，也包括理解限制和日常规律。"
    },
    {
      title: "The Five-Minute Money Check", titleZh: "五分钟财务检查", topic: "日常生活",
      passage: `Leah avoided looking at her bank balance because budgeting felt stressful. A large monthly spreadsheet had failed after three days. She replaced it with a five-minute check every Friday. Leah opened her account, confirmed expected income, reviewed the five largest payments, and moved a fixed amount to savings. She labelled unfamiliar transactions for later investigation rather than solving everything immediately. Once a month, she compared spending in food, transport, and subscriptions. The first review revealed two streaming services she no longer used and a bank fee caused by an old account type. Leah cancelled the services and asked about a better account. The short weekly habit did not control every purchase, but it made surprises visible while they were still small enough to handle.`,
      translationZh: `利娅因为觉得预算令人焦虑，一直回避查看银行余额。复杂的月度表格只坚持三天就失败了。她改成每周五进行五分钟检查：打开账户，确认预期收入，查看最大的五笔支出，再把固定金额转入储蓄。陌生交易先做标记，稍后调查，不强迫自己立刻解决所有问题。每月一次，她比较食品、交通和订阅开支。第一次复盘发现两个不再使用的流媒体服务，以及旧账户类型产生的银行费。利娅取消服务，并询问更合适的账户。短暂的每周习惯没有控制每笔购买，却能在意外仍较小时让它们显现。`,
      summary: "A brief weekly money check gave Leah sustainable visibility, caught unused subscriptions, and revealed an avoidable bank fee.", summaryZh: "简短的每周财务检查让利娅可持续地掌握情况，发现闲置订阅和可避免的银行费用。",
      fact: "Leah reviewed her five largest payments each Friday.", factZh: "利娅每周五查看最大的五笔支出。",
      inference: "A simple financial routine may be more effective than a detailed system that is quickly abandoned.", inferenceZh: "一个能坚持的简单财务流程，可能比很快放弃的复杂系统更有效。"
    },
    {
      title: "Calling the Internet Provider", titleZh: "致电网络运营商", topic: "日常生活",
      passage: `For three evenings, Sam's internet became slow at exactly eight o'clock. Before calling the provider, he restarted the router once, tested two devices, connected one laptop by cable, and wrote down speed results and times. The wired connection was also slow, so the problem was unlikely to be only Wi-Fi. On the support call, Sam gave the account number, explained the pattern, and listed the checks without repeating them unnecessarily. The agent saw heavy errors on the local line and booked an engineer rather than asking him to reset every device again. A damaged outdoor connector was replaced the next day. Sam saved the repair reference and tested the same evening period. Clear evidence turned a vague complaint about "bad internet" into a specific problem that support could investigate.`,
      translationZh: `连续三个晚上，萨姆的网络都在八点整变慢。致电运营商前，他重启一次路由器，测试两台设备，用网线连接一台笔记本，并记录测速结果和时间。有线连接也很慢，因此问题不太可能只是Wi-Fi。客服通话中，萨姆提供账户号，说明规律，并列出已完成检查，避免无意义重复。客服发现本地线路有大量错误，直接预约工程师，而不是再次要求重置所有设备。第二天，更换了损坏的室外接头。萨姆保存维修编号，并在同一晚间时段重新测试。清楚证据把“网络很差”的笼统投诉变成客服可以调查的具体问题。`,
      summary: "Sam's timed wired and wireless tests gave support enough evidence to identify and repair a line problem efficiently.", summaryZh: "萨姆带时间的有线和无线测试，为客服高效识别并修复线路问题提供了证据。",
      fact: "A damaged outdoor connector was replaced after the support call.", factZh: "客服通话后，一个损坏的室外接头被更换。",
      inference: "Basic troubleshooting records can prevent repeated steps and direct technical support toward the real cause.", inferenceZh: "基础排查记录能避免重复步骤，并引导技术支持找到真正原因。"
    },
    {
      title: "A Rainy Laundry Day", titleZh: "下雨的洗衣日", topic: "日常生活",
      passage: `Maya washed all her work clothes on a Saturday morning, then heavy rain continued for two days. Her apartment rules did not allow wet clothing on heaters because of fire and moisture risks. Maya checked the care labels, used an extra spin cycle, and hung items with space between them near an open but sheltered window. She placed a small fan across the room rather than directly against wet fabric and emptied the room's moisture collector. One shirt was needed Monday, so she used the building's shared dryer on its low setting after confirming the label allowed it. The clothes dried without damaging the room or fabric. Maya later kept one clean work outfit separate, so unexpected weather would not make every item urgent.`,
      translationZh: `玛雅周六早上洗了所有工作服，随后大雨持续两天。公寓规定不能把湿衣服放在暖气上，因为有火灾和潮湿风险。玛雅查看洗护标签，多进行一次脱水，并把衣物留出间隔，挂在有遮挡的开窗附近。她把小风扇放在房间另一侧，而不是紧贴湿衣，并倒掉除湿盒里的水。周一需要一件衬衫，于是确认标签允许后，用大楼共享烘干机的低温档烘干。衣服顺利干燥，没有损坏房间或面料。此后，玛雅单独保留一套干净工作服，避免突发天气让所有衣服都变成紧急任务。`,
      summary: "Maya dried work clothes safely through labels, airflow, moisture control, limited low heat, and a future spare outfit.", summaryZh: "玛雅通过查看标签、通风、控湿、有限低温烘干和备用衣物安全解决晾晒问题。",
      fact: "Maya used an extra spin cycle before hanging the clothes.", factZh: "玛雅晾衣前额外进行了一次脱水。",
      inference: "A small backup can reduce pressure to use unsafe shortcuts during ordinary disruptions.", inferenceZh: "小型备用方案能够减少日常意外中采取不安全捷径的压力。"
    },
    {
      title: "A Shared Birthday Calendar", titleZh: "共享生日日历", topic: "日常生活",
      passage: `A friendship group often remembered birthdays late and then rushed to buy unwanted gifts. Chen suggested a shared calendar, but first asked whether everyone wanted their birthday included. Two people preferred only the month to be visible, while one person did not want gift reminders. The calendar therefore stored different preferences and sent a general planning reminder two weeks ahead. Friends added notes such as "no physical gifts," "likes a phone call," or "group dinner is enough." For Marta's birthday, the reminder led to a picnic scheduled around her shift rather than five separate packages. The system improved attention without treating personal dates and wishes as public information. Consent and useful preferences made the calendar kinder than a simple list of birthdays.`,
      translationZh: `一个朋友群经常很晚才想起生日，然后匆忙购买并不需要的礼物。陈建议使用共享日历，但先询问每个人是否愿意加入。两人只想显示月份，一人不希望收到礼物提醒。因此日历保存不同偏好，并提前两周发送一般计划提醒。朋友们添加“不要实物礼物”“喜欢电话祝福”或“一起吃饭就够了”等说明。玛尔塔生日时，提醒促成一场配合她班次的野餐，而不是五个单独包裹。系统改善了关心，又没有把个人日期和愿望当作公开信息。获得同意和记录实用偏好，让日历比简单生日清单更体贴。`,
      summary: "A consent-based birthday calendar used flexible privacy and gift preferences to support more thoughtful celebrations.", summaryZh: "基于同意的生日日历通过灵活隐私和礼物偏好，支持更体贴的庆祝。",
      fact: "The calendar sent a general reminder two weeks before a birthday.", factZh: "日历在生日两周前发送一般计划提醒。",
      inference: "Organisation becomes more considerate when it records people's boundaries as well as dates.", inferenceZh: "整理系统同时记录个人边界和日期时，会更加体贴。"
    },
    {
      title: "The Evening Without Screens", titleZh: "没有屏幕的夜晚", topic: "日常生活",
      passage: `After remote work, Jia spent most evenings moving from a laptop to a phone and then a television. She wanted to sleep better but found the idea of a completely screen-free life unrealistic. Jia chose Wednesday from eight until bedtime as a small experiment. She printed one recipe before work, placed her phone on charge outside the bedroom, and told family to call if something was urgent. During the evening, she cooked, stretched, and read a paper book. At first she reached for a phone several times, so she wrote possible tasks on a card for later. After four Wednesdays, Jia noticed that bedtime felt calmer. She kept the weekly routine without judging other evenings, using one clear boundary to create rest rather than another impossible rule.`,
      translationZh: `远程工作后，佳大多数晚上从笔记本转到手机，再转到电视。她想改善睡眠，却觉得完全无屏幕的生活不现实。佳选择每周三晚上八点到睡前做小实验。她上班前打印一份食谱，把手机放在卧室外充电，并告诉家人紧急情况可以打电话。晚上，她做饭、拉伸、读纸质书。起初她几次伸手找手机，于是把可能要做的事写在卡片上留到以后。四个周三后，佳发现睡前更平静。她保留每周一次的流程，不评判其他晚上，用一条明确边界创造休息，而不是又制定无法做到的规则。`,
      summary: "Jia tested one realistic weekly screen boundary with preparation, emergency access, offline activities, and reflection.", summaryZh: "佳通过准备、保留紧急联系、离线活动和复盘，试行一条现实的每周屏幕边界。",
      fact: "Jia kept her phone charging outside the bedroom on Wednesday evenings.", factZh: "周三晚上，佳把手机放在卧室外充电。",
      inference: "A limited repeatable boundary may support rest better than an unrealistic total ban.", inferenceZh: "有限且可重复的边界，可能比不现实的全面禁止更有助于休息。"
    },
  ];

  function insertCorrect(correct, distractors, answerIndex) {
    const options = distractors.slice(0, 3);
    options.splice(answerIndex, 0, correct);
    return options;
  }

  function buildQuestion(question, questionZh, correctEn, correctZh, distractorsEn, distractorsZh, answer, explanation, explanationZh) {
    return {
      question,
      questionZh,
      options: insertCorrect(correctEn, distractorsEn, answer),
      optionsZh: insertCorrect(correctZh, distractorsZh, answer),
      answer,
      explanation,
      explanationZh
    };
  }

  const loadedVocabularyBank = Object.keys(window)
    .filter((key) => /^ENGLISH_COMPASS_.*VOCABULARY/.test(key))
    .flatMap((key) => Array.isArray(window[key]) ? window[key] : [])
    .filter((entry) => entry && typeof entry.word === "string" && typeof entry.definition === "string" && typeof entry.definitionEn === "string")
    .filter((entry, index, entries) => entries.findIndex((candidate) => candidate.word.toLowerCase() === entry.word.toLowerCase()) === index);

  function phraseAppears(passage, phrase) {
    const escaped = String(phrase).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return new RegExp(`(^|[^a-z])${escaped}([^a-z]|$)`, "i").test(passage);
  }

  function selectPassageVocabulary(item) {
    const genericWords = new Set(["about", "after", "again", "before", "could", "every", "first", "other", "people", "really", "still", "their", "there", "these", "thing", "think", "through", "under", "where", "which", "while", "would"]);
    const candidates = loadedVocabularyBank
      .filter((entry) => entry.word.length >= 4 && !genericWords.has(entry.word.toLowerCase()) && phraseAppears(item.passage, entry.word))
      .filter((entry, index, entries) => entries.findIndex((candidate) => candidate.definition !== entry.definition && candidate.word.toLowerCase() === entry.word.toLowerCase()) < 0)
      .sort((left, right) => {
        const leftScore = (left.topic === item.topic ? 24 : 0) + (left.word.includes(" ") ? 18 : 0) + left.word.length;
        const rightScore = (right.topic === item.topic ? 24 : 0) + (right.word.includes(" ") ? 18 : 0) + right.word.length;
        return rightScore - leftScore || left.word.localeCompare(right.word, "en");
      });
    const selected = [];
    for (const entry of candidates) {
      if (selected.some((candidate) => candidate[1] === entry.definition || candidate[2] === entry.definitionEn)) continue;
      selected.push([entry.word, entry.definition, entry.definitionEn]);
      if (selected.length === 5) break;
    }
    if (selected.length >= 4) return selected;
    return topicVocabulary[item.topic].filter(([word]) => phraseAppears(item.passage, word)).concat(topicVocabulary[item.topic]).slice(0, 5);
  }

  const levels = ["A2", "B1", "B2"];
  const readings = raw.map((item, index) => {
    const mainAnswer = index % 4;
    const detailAnswer = (index + 1) % 4;
    const challengeAnswer = (index + 2) % 4;
    const other = (offset) => raw[(index + offset) % raw.length];
    const vocabulary = selectPassageVocabulary(item);

    const mainQuestion = buildQuestion(
      `What is the main message of "${item.title}"?`,
      `《${item.titleZh}》的主旨是什么？`,
      item.summary,
      item.summaryZh,
      [other(11).summary, other(37).summary, other(71).summary],
      [other(11).summaryZh, other(37).summaryZh, other(71).summaryZh],
      mainAnswer,
      `The passage as a whole shows that ${item.summary.charAt(0).toLowerCase()}${item.summary.slice(1)}`,
      `全文围绕“${item.summaryZh}”展开，因此这是最准确的主旨。`
    );

    const detailQuestion = buildQuestion(
      `According to "${item.title}", which detail is stated in the passage?`,
      `根据《${item.titleZh}》，文中明确提到了哪项细节？`,
      item.fact,
      item.factZh,
      [other(17).fact, other(43).fact, other(79).fact],
      [other(17).factZh, other(43).factZh, other(79).factZh],
      detailAnswer,
      `The passage explicitly states: ${item.fact}`,
      `原文明确说明：“${item.factZh}”`
    );

    let challengeQuestion;
    if (index % 2 === 0) {
      const word = vocabulary[0];
      challengeQuestion = buildQuestion(
        `In "${item.title}", what does the word or phrase "${word[0]}" most nearly mean?`,
        `在《${item.titleZh}》中，单词或短语“${word[0]}”最接近什么意思？`,
        word[2],
        word[1],
        vocabulary.slice(1, 4).map((entry) => entry[2]),
        vocabulary.slice(1, 4).map((entry) => entry[1]),
        challengeAnswer,
        `Here, "${word[0]}" means ${word[2]}.`,
        `这里“${word[0]}”表示“${word[1]}”。`
      );
    } else {
      challengeQuestion = buildQuestion(
        `What can readers reasonably infer from "${item.title}"?`,
        `从《${item.titleZh}》中可以合理推断出什么？`,
        item.inference,
        item.inferenceZh,
        [other(23).inference, other(49).inference, other(83).inference],
        [other(23).inferenceZh, other(49).inferenceZh, other(83).inferenceZh],
        challengeAnswer,
        `The events support the inference that ${item.inference.charAt(0).toLowerCase()}${item.inference.slice(1)}`,
        `文中的事件支持这一推断：“${item.inferenceZh}”`
      );
    }

    return {
      id: `reading-v100-${String(index + 1).padStart(3, "0")}`,
      title: item.title,
      titleZh: item.titleZh,
      topic: item.topic,
      level: levels[index % levels.length],
      passage: item.passage,
      translationZh: item.translationZh,
      vocabulary: vocabulary.map(([word, meaning]) => ({ word, meaning })),
      questions: [mainQuestion, detailQuestion, challengeQuestion],
      summary: item.summary,
      summaryZh: item.summaryZh
    };
  });

  window.ENGLISH_COMPASS_READING_V100 = readings;
})();

// English Compass v1.9 self-authored practical vocabulary expansion.
(function () {
  "use strict";

  const groups = [
    {
      topic: "文件与记录", level: "B1",
      actions: [["verify", "核验", "to check that the details are correct in"], ["update", "更新", "to add the latest information to"], ["attach", "附上", "to include a file with"], ["archive", "归档", "to store safely for future reference"], ["retrieve", "调取", "to find and bring back"]],
      objects: [["application form", "申请表"], ["expense receipt", "报销收据"], ["training record", "培训记录"], ["project brief", "项目简报"], ["meeting notes", "会议记录"], ["rental contract", "租赁合同"], ["medical certificate", "医疗证明"], ["travel itinerary", "旅行行程单"], ["product invoice", "产品发票"], ["professional reference", "职业推荐材料"]]
    },
    {
      topic: "计划与执行", level: "B1",
      actions: [["draft", "起草", "to prepare the first version of"], ["revise", "修订", "to improve or correct"], ["approve", "批准", "to formally accept"], ["circulate", "传阅", "to share with everyone who needs"], ["implement", "实施", "to put into practice"]],
      objects: [["contingency plan", "应急方案"], ["onboarding plan", "入职方案"], ["maintenance plan", "维护方案"], ["project roadmap", "项目路线图"], ["safety procedure", "安全流程"], ["expense policy", "费用政策"], ["communication strategy", "沟通策略"], ["launch checklist", "上线清单"], ["handover guide", "交接指南"], ["quality standard", "质量标准"]]
    },
    {
      topic: "数字工具", level: "B1",
      actions: [["back up", "备份", "to make a safe copy of"], ["encrypt", "加密", "to protect with coded access"], ["synchronize", "同步", "to keep the same version across devices of"], ["restore", "恢复", "to return a saved copy of"], ["migrate", "迁移", "to move to a new system"]],
      objects: [["customer database", "客户数据库"], ["project folder", "项目文件夹"], ["phone contacts", "手机联系人"], ["browser preferences", "浏览器偏好设置"], ["accounting records", "会计记录"], ["training videos", "培训视频"], ["research notes", "研究笔记"], ["photo library", "照片库"], ["credential vault", "凭据保险库"], ["shared calendar", "共享日历"]]
    },
    {
      topic: "技术排障", level: "B2",
      actions: [["diagnose", "诊断", "to identify the cause of"], ["isolate", "隔离", "to separate the source of"], ["reproduce", "复现", "to make happen again for testing"], ["document", "记录", "to write down the evidence about"], ["resolve", "解决", "to find and apply a fix for"]],
      objects: [["login failure", "登录失败"], ["payment error", "支付错误"], ["audio delay", "音频延迟"], ["printer issue", "打印机问题"], ["network outage", "网络中断"], ["upload problem", "上传问题"], ["display glitch", "显示故障"], ["sync conflict", "同步冲突"], ["battery drain", "电量异常消耗"], ["permission error", "权限错误"]]
    },
    {
      topic: "职场沟通", level: "B1",
      actions: [["clarify", "澄清", "to make the meaning easier to understand in"], ["summarize", "总结", "to state the main points of"], ["translate", "翻译", "to express in another language"], ["proofread", "校对", "to check language and typing in"], ["forward", "转发", "to send on to another person"]],
      objects: [["customer message", "客户消息"], ["meeting decision", "会议决定"], ["support reply", "支持回复"], ["interview feedback", "面试反馈"], ["policy update", "政策更新"], ["delivery notice", "配送通知"], ["booking request", "预订请求"], ["safety warning", "安全警告"], ["training instruction", "培训说明"], ["service clause", "服务条款"]]
    },
    {
      topic: "费用与预算", level: "B1",
      actions: [["calculate", "计算", "to work out the amount of"], ["compare", "比较", "to examine the differences in"], ["review", "复核", "to check carefully"], ["approve", "审批", "to give formal permission for"], ["track", "跟踪", "to follow changes over time in"]],
      objects: [["monthly expenses", "每月支出"], ["repair cost", "维修费用"], ["service fee", "服务费"], ["salary package", "薪酬方案"], ["travel allowance", "差旅补贴"], ["insurance premium", "保险费"], ["project budget", "项目预算"], ["supplier quote", "供应商报价"], ["refund amount", "退款金额"], ["utility bill", "水电账单"]]
    },
    {
      topic: "时间协调", level: "B2",
      actions: [["block out", "预留", "to reserve time for"], ["bring forward", "提前", "to move to an earlier time"], ["space out", "错开", "to leave more time between parts of"], ["fit in", "安排进", "to find enough time for"], ["work around", "绕开安排", "to plan despite a difficulty with"]],
      objects: [["focus session", "专注学习时段"], ["maintenance window", "维护窗口"], ["childcare pickup", "接孩子时间"], ["team briefing", "团队简报会"], ["exam date", "考试日期"], ["travel connection", "交通衔接"], ["rotating shift", "轮班安排"], ["launch deadline", "上线截止期"], ["medical appointment", "就医预约"], ["peak period", "高峰时段"]]
    },
    {
      topic: "客户服务", level: "B2",
      actions: [["acknowledge", "确认收到", "to show that the team has received"], ["investigate", "调查", "to examine the facts behind"], ["escalate", "升级处理", "to send to a higher level of support"], ["remedy", "补救", "to correct the harm caused by"], ["close", "结案", "to complete all action on"]],
      objects: [["billing complaint", "账单投诉"], ["delayed order", "延迟订单"], ["damaged parcel", "损坏包裹"], ["access request", "访问请求"], ["refund case", "退款案例"], ["service outage", "服务中断"], ["account dispute", "账户争议"], ["warranty claim", "保修申请"], ["privacy concern", "隐私疑虑"], ["quality issue", "质量问题"]]
    },
    {
      topic: "职业表达", level: "B1",
      actions: [["practice", "练习", "to repeat in order to improve"], ["rehearse", "排练", "to prepare by saying aloud"], ["refine", "完善", "to make clearer and more effective"], ["record", "录制", "to save audio or video of"], ["review", "复盘", "to examine performance in"]],
      objects: [["interview answer", "面试回答"], ["elevator pitch", "电梯式自我介绍"], ["pronunciation drill", "发音训练"], ["presentation opening", "演讲开场"], ["negotiation strategy", "谈判策略"], ["writing sample", "写作样本"], ["technical explanation", "技术说明"], ["customer greeting", "客户问候语"], ["leadership example", "领导力案例"], ["career summary", "职业概述"]]
    },
    {
      topic: "分析与决策", level: "B2",
      actions: [["identify", "识别", "to recognize and name"], ["assess", "评估", "to judge the importance of"], ["prioritize", "确定优先级", "to decide the order for handling"], ["mitigate", "降低", "to reduce the possible impact of"], ["monitor", "监控", "to observe changes in"]],
      objects: [["safety risk", "安全风险"], ["delivery dependency", "交付依赖"], ["data gap", "数据缺口"], ["cost variance", "成本偏差"], ["customer need", "客户需求"], ["schedule conflict", "排期冲突"], ["compliance issue", "合规问题"], ["training requirement", "培训需求"], ["quality trend", "质量趋势"], ["resource constraint", "资源限制"]]
    }
  ];

  const englishFrames = [
    (phrase) => `Please ${phrase} before the final review.`,
    (phrase) => `We need to ${phrase} before the next step.`,
    (phrase) => `Could you ${phrase} and send me an update?`,
    (phrase) => `The team agreed to ${phrase} this afternoon.`,
    (phrase) => `I will ${phrase} through the correct channel.`,
    (phrase) => `The checklist reminds us to ${phrase}.`,
    (phrase) => `It is safer to ${phrase} before making a decision.`,
    (phrase) => `Our plan is to ${phrase} during tomorrow's review.`,
    (phrase) => `The supervisor asked me to ${phrase} today.`,
    (phrase) => `I learned how to ${phrase} in the role-play.`
  ];
  const chineseFrames = [
    (meaning) => `请在最终复核前${meaning}。`,
    (meaning) => `我们需要在下一步之前${meaning}。`,
    (meaning) => `你可以${meaning}并告诉我最新进展吗？`,
    (meaning) => `团队同意今天下午${meaning}。`,
    (meaning) => `我会通过正确渠道${meaning}。`,
    (meaning) => `清单提醒我们要${meaning}。`,
    (meaning) => `做决定前先${meaning}更稳妥。`,
    (meaning) => `我们的计划是在明天复盘时${meaning}。`,
    (meaning) => `主管要求我今天${meaning}。`,
    (meaning) => `我在角色扮演中学会了如何${meaning}。`
  ];

  const rows = [];
  groups.forEach((group, groupIndex) => {
    group.actions.forEach(([action, actionZh, actionDefinition], actionIndex) => {
      group.objects.forEach(([object, objectZh], objectIndex) => {
        const index = groupIndex * 50 + actionIndex * 10 + objectIndex;
        const phrase = `${action} ${object}`;
        const meaning = `${actionZh}${objectZh}`;
        rows.push(Object.freeze({
          id: `vx3500-${String(index + 1).padStart(4, "0")}`,
          word: phrase,
          phonetic: `/${phrase}/`,
          partOfSpeech: "verb phrase",
          definition: meaning,
          definitionEn: `${actionDefinition} ${object}`,
          collocation: `${phrase} before the next step`,
          example: englishFrames[index % englishFrames.length](phrase),
          exampleZh: chineseFrames[index % chineseFrames.length](meaning),
          topic: group.topic,
          level: group.level
        }));
      });
    });
  });

  window.ENGLISH_COMPASS_VOCABULARY_EXPANSION_V3500 = Object.freeze(rows);
})();

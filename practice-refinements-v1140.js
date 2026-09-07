// v1.14 editorial corrections. Original packs remain immutable on disk.
(function () {
  "use strict";
  const purposesZh = ["把分歧转化为可以检验的问题","用应急成本逻辑解释一项预算","回答岗位保障问题而不过度承诺","把复杂研究概括成可选决策","签署前澄清续期条款的歧义","起草承认不确定性的首份声明","要求系统上线前具备可解释性","兼顾薪酬透明与差距校正","依据记录的贡献分配署名","根据审计推动整改并保护工人","用证据回应带有错误前提的问题","解释重组决策及其依据","用实施数据回应规则草案","平衡最少保留与审计需要","用人员流失成本论证导师制","区分无意错误和故意违规","澄清协定下的税务居民义务","主张谨慎完整的排放披露","停止维护时为用户提供过渡","报告筛选偏差及修复优先项"];
  const original = window.ENGLISH_COMPASS_READING_V280;
  const purposeMap = new Map(original.map((item,index)=>[item.questions[0].options[item.questions[0].answer],purposesZh[index]]));
  const question = (en,zh,options,optionsZh,answer,evidence,evidenceZh) => ({question:en,questionZh:zh,options,optionsZh,answer,explanation:evidence,explanationZh:evidenceZh});
  const rewrites = {
    0: {
      passage: "At a research seminar, Rosa questioned a model that predicted a sales peak every winter. Last year's figures showed no such peak. Several colleagues wanted to reject the model immediately.\n\nRosa asked the team to check how the figures had been collected first. One regional office had changed its reporting software in October; the other offices had kept the old system. If the new software grouped late orders differently, the apparent difference might reflect reporting rather than customer behaviour.\n\nThe team agreed to compare the unchanged offices first and publish the comparison rule before examining their results. If the predicted peak was absent there too, the model would need revision. Rosa stressed that checking the records was not a defence of the model. It was a way to ensure that any decision to reject it rested on evidence that another team could reproduce.",
      translationZh:"在一次研究研讨会上，Rosa 质疑了一个预测每年冬季销售高峰的模型。去年的数字没有显示这种高峰，几位同事希望立即否定模型。\n\nRosa 请团队先检查数据的收集方式。一个地区办公室在十月更换了报表软件，其他办公室则沿用旧系统。如果新软件对延迟订单采用了不同归类方式，表面上的差异可能来自报表，而非顾客行为。\n\n团队同意先比较未更换系统的办公室，并在查看结果前公布比较规则。如果那里也没有预测的高峰，就需要修订模型。Rosa 强调，检查记录并不是替模型辩护，而是确保否定模型的决定建立在另一团队也能复现的证据上。",
      vocabulary:[{word:"predicted",meaning:"预测的"},{word:"reporting",meaning:"报表编制"},{word:"reproduce",meaning:"复现"}],
      summary:"Check whether a measurement change explains an apparent failure before rejecting a model.",summaryZh:"否定模型前，先排除数据测量方式改变造成的假象。",
      questions:[
        question("Why does Rosa request a check of the reporting software?","Rosa 为什么要求检查报表软件？",["To find a possible measurement explanation for the missing peak.","To prove that winter sales always rise.","To remove the regional office from every future study.","To postpone publishing any research results."],["寻找高峰消失是否源自测量方式的解释。","证明冬季销售总会上升。","将该地区办公室排除出今后的所有研究。","推迟发布任何研究结果。"],0,"The software may group late orders differently. That is a possible alternative explanation, not proof that the model is right.","原文说软件可能以不同方式归类延迟订单。这是待检验的替代解释，并不能证明模型正确；其余三项均超出原文。"),
        question("What would most strongly support revising the model?","哪项发现最能支持修订模型？",["The new software was installed in October.","The unchanged offices also show no predicted peak.","One colleague dislikes the comparison rule.","The reporting team is smaller than last year."],["新软件于十月安装。","未更换系统的办公室也没有出现预测的高峰。","一位同事不喜欢比较规则。","报表团队比去年规模小。"],1,"The last paragraph explicitly makes revision conditional on the peak being absent in the unchanged offices too.","最后一段明确指出：若未更换系统的办公室也没有高峰，就需要修订模型。软件安装时间本身不足以支持该结论。"),
        question("What does publishing the comparison rule in advance achieve?","提前公布比较规则有什么作用？",["It guarantees agreement with the model.","It makes the old software unnecessary.","It makes the test transparent and harder to adjust to a preferred result.","It eliminates the need to compare offices."],["保证结果符合模型。","使旧软件不再必要。","让检验过程透明，并减少为迎合结果而修改规则的空间。","免除比较各办公室的必要。"],2,"The rule is published before results are examined, and the decision should be reproducible. This supports a transparent test, not a guaranteed outcome.","规则在查看结果前公布，决定还须可复现。因此可推断其目的在于透明检验，而非保证某种结果或取消比较。")
      ]
    },
    1: {
      passage:"To: Funding committee\n\nThank you for reviewing our equipment budget. The purchase price is lower than last year's quotation, but the total request includes calibration and two years of maintenance. Removing those services would reduce this year's payment, not necessarily the project's overall cost.\n\nOur laboratory cannot use measurements from an uncalibrated instrument in its final report. An emergency calibration visit also costs more than a scheduled one and may take three weeks to arrange. A delay during the field season could therefore leave us with a cheaper machine and no usable results.\n\nWe can accept payment in two stages. However, we ask that the first stage cover both the instrument and its initial calibration. Maintenance for the second year could be released after a review of the first year's service record. This would give the committee a meaningful checkpoint without placing the first set of measurements at risk.\n\nEmil",
      translationZh:"致经费委员会：\n\n感谢审阅我们的设备预算。采购价低于去年的报价，但申请总额包含校准与两年维护。取消这些服务会降低今年的付款，却不一定降低项目总成本。\n\n实验室不能在最终报告中使用未经校准的仪器所得的数据。紧急校准上门服务比预约服务更贵，而且可能需要三周才能安排。在野外工作季发生延误，可能意味着虽然机器买得便宜，却得不到可用结果。\n\n我们可以接受分两阶段拨款，但希望第一阶段同时覆盖设备与初次校准。第二年的维护款可以在审查第一年服务记录后发放。这能给委员会提供实质性的检查节点，同时不让首批测量数据承担风险。\n\nEmil",
      vocabulary:[{word:"calibration",meaning:"校准"},{word:"checkpoint",meaning:"检查节点"},{word:"quotation",meaning:"报价"}],summary:"Stage the funding while protecting the calibration needed for usable measurements.",summaryZh:"可分期拨款，但须保留取得有效数据所必需的校准经费。",
      questions:[
        question("Which part of the proposal is Emil willing to change?","Emil 愿意调整方案的哪个部分？",["Whether the instrument is calibrated.","Whether uncalibrated data can be reported.","When the funding is released.","The requirement to collect usable results."],["是否校准仪器。","是否允许报告未经校准的数据。","拨款时间安排。","收集有效结果的要求。"],2,"He accepts payment in two stages but protects initial calibration. The concession concerns timing, not measurement quality.","他接受分两阶段付款，但坚持初次校准。让步涉及时间安排，并非测量质量。"),
        question("Why might deleting calibration be a false saving?","为什么删除校准经费可能只是表面省钱？",["Emergency service costs more and may delay usable measurements.","The equipment price has risen since last year.","The committee charges a fee for each review.","Maintenance must always be paid in advance."],["紧急服务更贵，也可能延迟有效测量。","设备价格比去年上涨。","委员会每次审查都收费。","维护款必须始终提前支付。"],0,"The letter links emergency costs and a three-week wait to the risk of losing a field season. It actually says the purchase price fell.","信中把紧急服务费用、三周等待与错失工作季的风险联系起来；采购价格实际上是下降的。"),
        question("What would the committee review before releasing second-year maintenance funds?","发放第二年维护款前，委员会将审查什么？",["A new purchase quotation.","The first year's service record.","Every raw measurement in the final report.","The number of committee meetings."],["新的采购报价。","第一年的服务记录。","最终报告中的全部原始测量值。","委员会开会次数。"],1,"The final paragraph names the first year's service record as the checkpoint. It does not require a new quotation or a complete data audit.","末段明确将第一年的服务记录作为检查依据，并未要求重新报价或全面审计数据。")
      ]
    }
  };
  const conciseMessages = [
    ["The model predicts a peak that last year's data do not show.","模型预测的峰值未出现在去年的数据中。"],
    ["Cutting planned services could lead to costlier emergency contracts.","削减计划服务可能带来更昂贵的紧急合同。"],
    ["Role changes need advance notice and priority access to transfers.","岗位调整需提前通知并提供优先内部转岗机会。"],
    ["The three policy options have different levels of evidence.","三个政策方案的证据支持程度不同。"],
    ["The renewal clause should specify a ninety-day notice period.","续期条款应写明九十天的通知期限。"],
    ["The first statement should contain verified facts only.","首份声明应只包含已核实的事实。"],
    ["High-impact decisions need understandable, appealable reasons.","高影响决定需提供可理解、可申诉的理由。"],
    ["Pay transparency needs a correction budget and an appeal window.","薪酬透明需要差距校正预算和申诉窗口。"],
    ["Authorship should reflect documented contributions, not seniority.","署名应体现记录在案的贡献，而非资历。"],
    ["Require verified improvements instead of immediately abandoning workers.","要求可验证的整改，而非立即放弃工人。"],
    ["The sample covers four countries, not just one region.","样本覆盖四个国家，并非仅来自一个地区。"],
    ["Competing divisions have already cost the company major clients.","相互竞争的部门已使公司流失重要客户。"],
    ["Small firms need twelve months, not six, to implement the changes.","小企业需要十二个月而非六个月来完成改造。"],
    ["Retain logs for eighteen months, then anonymise older data.","日志保留十八个月，之后匿名化较旧数据。"],
    ["Lower staff turnover supports the financial case for mentoring.","较低的人员流失率支持导师制的财务合理性。"],
    ["A voluntary correction helps distinguish error from misconduct.","主动更正有助于区分错误与违规。"],
    ["Treaty rules should clarify tax residency and double-tax relief.","应依据协定明确税务居民身份与双重征税减免。"],
    ["Excluding outsourced transport would leave a material omission.","排除外包运输会造成重大遗漏。"],
    ["Maintenance will end with a year of updates and migration support.","停止维护后仍提供一年更新和迁移支持。"],
    ["The parser, rather than reviewers, mainly caused the screening gap.","筛选差距主要由解析器而非评审者造成。"]
  ];
  const conciseFollowups = [
    ["Agree on test criteria before debating the conclusion.","辩论结论前先就检验标准达成一致。"],
    ["Accept staged funding while protecting calibration.","接受分期拨款，但保留校准经费。"],
    ["Publish integration updates every Friday from next week.","从下周起每周五发布整合进展。"],
    ["Pilot option C if time permits.","时间允许时为方案 C 开展试点。"],
    ["Sign after the legal team approves the revised wording.","法务批准修订文本后再签署。"],
    ["Use one statement across channels and approve extra answers.","各渠道统一使用声明，并审批补充回答。"],
    ["Prepare a joint plan for explanations and appeals before review.","审查前准备解释与申诉的联合方案。"],
    ["Correct the largest pay gaps first, with external verification.","优先校正最大薪酬差距，并由外部核验。"],
    ["Send written objections to the corresponding author by Friday.","周五前向通讯作者提交书面异议。"],
    ["Exit within ninety days if the follow-up audit still fails.","复查仍不达标时，在九十天内退出。"],
    ["Share regional results and discuss them after the session.","会后分享各地区结果并讨论。"],
    ["Give affected staff written role options and timelines.","向受影响员工提供书面岗位选项和时间表。"],
    ["Provide upgrade costs and timelines for three different firms.","提供三家不同企业的改造成本与时间表。"],
    ["Apply the new schedule next month after joint approval.","共同审批后，从下月执行新保留表。"],
    ["Extend the pilot to two departments and preregister metrics.","将试点扩大到两个部门，并预登记指标。"],
    ["Close with a correction notice and improve data checks.","以更正启事结案，并改进数据检查。"],
    ["List both countries' filing deadlines and required documents.","列出两国的申报截止日和所需文件。"],
    ["Publish the assurance provider's letter with the report.","随报告发布审验机构的意见函。"],
    ["Offer enterprise customers extended support at cost.","按成本向企业客户提供延长支持。"],
    ["Fix the parser and retest the same metric after two quarters.","修复解析器，并在两个季度后复测同一指标。"]
  ];
  const messageMap=new Map(original.map((item,index)=>[item.questions[1].options[item.questions[1].answer],conciseMessages[index]]));
  const followMap=new Map(original.map((item,index)=>[item.questions[2].options[item.questions[2].answer],conciseFollowups[index]]));

  window.ENGLISH_COMPASS_READING_V280=Object.freeze(original.map((item,index)=>Object.freeze({
    ...item,
    questions:Object.freeze(item.questions.map((q,i)=>i===0?Object.freeze({...q,optionsZh:Object.freeze(q.options.map(option=>purposeMap.get(option))),explanationZh:`本题目标是“${purposesZh[index]}”，请结合原文中的行动与理由理解。`}):Object.freeze({...q, options:Object.freeze(q.options.map(option=>(i===1?messageMap:followMap).get(option)[0])),optionsZh:Object.freeze(q.options.map(option=>(i===1?messageMap:followMap).get(option)[1]))}))),
    ...(rewrites[index]||{})
  })));
  // Do not label a duplicate full answer as a simpler alternative.
  const vocabularyEdits = {
    "vx4750-0001": ["examine underlying assumptions","检查潜在假设","to check the unstated ideas on which an argument depends","examine the assumptions behind a forecast","Before using the forecast, examine the underlying assumptions about energy prices.","使用预测前，先检查其中关于能源价格的潜在假设。"],
    "vx4750-0002": ["acknowledge methodological limitations","承认研究方法的局限","to explain what a research method cannot establish","acknowledge the limitations of a small sample","The authors acknowledge methodological limitations and avoid claiming that the treatment caused the improvement.","作者承认研究方法的局限，没有声称改善一定由治疗导致。"],
    "vx4750-0003": ["distinguish correlation from causation","区分相关关系与因果关系","to separate two things changing together from one making the other change","distinguish correlation from causation in a study","The two measures rose together, but we must distinguish correlation from causation.","两个指标同时上升，但我们必须区分相关关系与因果关系。"],
    "vx4750-0004": ["assess whether a sample is representative","评估样本是否具有代表性","to check whether studied cases reflect the population of interest","assess whether a sample represents the wider population","Before applying the findings nationally, assess whether the sample is representative.","在全国推广研究结论前，先评估样本是否具有代表性。"],
    "vx4750-0005": ["weigh competing interpretations","权衡不同的解释","to compare plausible explanations of the same evidence","weigh competing interpretations of the findings","We should weigh competing interpretations instead of accepting the first explanation.","我们应权衡不同的解释，而不是接受最先提出的说法。"],
    "vx4750-0006": ["trace a claim to its original source","追溯说法的原始来源","to find the first reliable source behind a repeated claim","trace a widely repeated claim to its source","The journalist traced the claim to its original source and found that it had been quoted out of context.","记者追溯了这项说法的原始来源，发现它被断章取义地引用了。"]
  };
  window.ENGLISH_COMPASS_VOCABULARY_EXPANSION_V4750=Object.freeze(window.ENGLISH_COMPASS_VOCABULARY_EXPANSION_V4750.map(item=>{
    const row=vocabularyEdits[item.id]; if(!row)return item;
    const [word,definition,definitionEn,collocation,example,exampleZh]=row;
    return Object.freeze({...item,word,definition,definitionEn,collocation,example,exampleZh,partOfSpeech:"verb phrase"});
  }));
  const translationEdits = {
    "t680-001": {shortAnswer:"We can test our disagreement: the model predicts a seasonal peak in last year's data, but none appears.",chunks:[["我们的分歧可以检验","our disagreement is testable"],["如果模型正确","if the model were correct"],["应当显示季节性峰值","should show a seasonal peak"],["而事实并非如此","in fact it does not"]]},
    "t680-002": {shortAnswer:"Let's agree on test criteria before debating the conclusion.",chunks:[["先就标准达成一致","first agree on the criteria"],["在继续辩论之前","before continuing to debate"],["结论","the conclusion"]]},
    "t680-003": {shortAnswer:"The budget includes calibration and two years of maintenance; cuts would mean costlier emergency contracts later.",chunks:[["设备预算看似偏高","the equipment budget appears high"],["包含校准服务和两年维护","includes a calibration service and two years of maintenance"],["如果削减这部分","if this part is cut"],["更昂贵的临时合同","far more expensive ad hoc contracts"]]},
    "t680-004": {shortAnswer:"Staged funding is acceptable, but calibration must remain protected.",chunks:[["接受分期拨款","accept staged funding"],["但请把校准视为","but please treat the calibration as"],["不可削减项","a non-negotiable item"]]}
  };
  window.ENGLISH_COMPASS_EXPANSION_TRANSLATIONS_V680=Object.freeze(window.ENGLISH_COMPASS_EXPANSION_TRANSLATIONS_V680.map(item=>Object.freeze({...item,...(translationEdits[item.id]||{})})));

  window.ENGLISH_COMPASS_EDITORIAL_VERSION="1.14.0";
})();

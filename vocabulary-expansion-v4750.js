// English Compass v1.13 self-authored C1 advanced academic and professional vocabulary.
(function () {
  "use strict";

  const group = (topic, level, raw) => Object.freeze({
    topic,
    level,
    entries: Object.freeze(raw.trim().split("\n").map((line) => Object.freeze(line.split("|"))))
  });

  const groups = [
    group("学术阅读与批判思维", "C1", `
underlying assumption analysis|潜在假设分析|examining the unstated beliefs on which an argument depends
methodological limitation note|方法局限说明|a statement of the weaknesses in how a study was conducted
correlation-causation distinction|相关与因果之辨|the difference between things occurring together and one causing the other
sample representativeness question|样本代表性质疑|a doubt about whether studied cases reflect the wider population
competing interpretation weighing|对立解读权衡|comparing alternative explanations of the same evidence
citation chain verification|引用链核验|tracing a claim back through its cited sources
peer review commentary|同行评审意见|expert feedback given before research is published
replication attempt outcome|重复实验结果|what happened when researchers tried to reproduce a finding
confounding variable check|混杂变量排查|a search for hidden factors that could distort a result
effect size interpretation|效应量解读|judging how large and meaningful a measured difference is
publication bias awareness|发表偏倚意识|recognising that positive results are printed more often than null ones
primary source consultation|一手来源查阅|reading the original document rather than a summary of it
theoretical framework fit|理论框架适配|how well evidence sits within an explanatory model
counterexample identification|反例识别|finding a case that contradicts a general claim
premise-conclusion mapping|前提结论梳理|laying out how an argument's statements support its final claim
evidentiary threshold judgement|证据门槛判断|deciding how much proof a particular claim requires
scope condition statement|适用范围界定|a description of when and where a finding holds true
literature synthesis matrix|文献综合矩阵|a structured comparison of findings across many studies
operational definition clarity|操作性定义清晰度|how precisely an abstract concept is defined for measurement
anomalous finding follow-up|异常发现追查|further investigation of a result that does not fit the pattern
interdisciplinary borrowing risk|跨学科借用风险|the danger of importing concepts without their original context
preregistered hypothesis record|预注册假设记录|a hypothesis publicly logged before data collection begins
null result significance|无效结果的意义|the informational value of finding no measurable effect
inference overreach warning|推论过度警示|a caution that conclusions exceed what the data support
critical reading annotation|批判性阅读批注|margin notes that question and evaluate a text while reading`),

    group("高级书面论证", "C1", `
thesis statement precision|论点表述精确性|how exactly a central claim is worded and bounded
concession-rebuttal structure|让步反驳结构|acknowledging an opposing point before answering it
line of reasoning coherence|论证链条连贯性|the logical flow that connects claims to a conclusion
qualifier placement strategy|限定语安排策略|deliberate use of words that adjust a claim's strength
burden of proof allocation|举证责任分配|deciding which side of a debate must supply evidence
rhetorical question restraint|反问克制使用|limiting persuasive questions that add no substance
paragraph-level signposting|段落级路标语|phrases that tell readers where an argument is going
evidence-to-claim ratio|证据与论断比例|the balance between support offered and assertions made
straw man avoidance|避免稻草人谬误|refusing to misrepresent an opposing view to defeat it easily
circular reasoning detection|循环论证识别|noticing when a conclusion is smuggled into its own premises
false dilemma correction|虚假两难修正|showing that more than two options actually exist
analogical argument limit|类比论证边界|the point at which a comparison stops being informative
executive abstract drafting|决策摘要撰写|writing a condensed version for time-pressed readers
counterfactual scenario framing|反事实情景构建|arguing from what would have happened under other conditions
source triangulation practice|多源交叉印证|supporting a claim with independent kinds of evidence
tone register calibration|语域基调校准|matching formality and stance to audience and purpose
hedged claim formulation|留有余地的论断|stating a position while signalling its uncertainty
proportionate conclusion drafting|结论分寸把握|ending with claims no stronger than the evidence allows
peer feedback incorporation|同侪反馈吸收|revising an argument in response to informed criticism
red-team review request|红队审阅请求|asking colleagues to attack a draft before opponents do
appendix evidence organisation|附录证据编排|arranging supporting material outside the main text
revision history transparency|修订历史透明|keeping visible records of how a document changed
terminology consistency audit|术语一致性检查|verifying that key terms keep one meaning throughout
reader objection anticipation|读者异议预判|addressing likely doubts before they are raised
closing synthesis paragraph|结尾综合段|a final passage that unifies threads rather than repeating them`),

    group("复杂谈判与影响力", "C1", `
interest-position separation|利益与立场分离|distinguishing what parties truly need from what they demand
best alternative assessment|最佳替代方案评估|judging what happens if the current negotiation fails
reservation point discipline|底线纪律|refusing to accept terms worse than a pre-set limit
value creation framing|价值创造框架|presenting negotiation as enlarging rather than dividing gains
concession sequencing plan|让步节奏计划|a deliberate order and pace for offering compromises
coalition building groundwork|联盟构建铺垫|early relationship work that gathers support for a proposal
authority limit disclosure|授权范围披露|stating honestly what one is empowered to agree
anchoring effect counter|锚定效应应对|techniques that reduce the pull of an opening number
face-saving exit design|保全颜面的台阶|an arrangement that lets a counterpart retreat with dignity
silence tolerance tactic|沉默容忍策略|using pauses without rushing to fill them
package deal construction|一揽子方案构建|bundling issues so trades across them become possible
objective criteria appeal|客观标准诉求|grounding terms in market data or accepted benchmarks
deadline pressure resistance|期限压力抵御|declining to concede merely because time is short
relationship capital investment|关系资本投入|effort spent building trust before it is needed
mandate clarification request|授权澄清请求|asking whether a counterpart can actually commit
side agreement documentation|附属协议记录|writing down understandings reached outside the main contract
impasse diagnosis method|僵局诊断方法|identifying whether a deadlock is about substance process or people
principled refusal wording|有原则的拒绝措辞|declining firmly while keeping the relationship intact
post-agreement drift watch|协议后偏移监测|checking that implementation matches what was agreed
stakeholder influence map|干系人影响力图|a chart of who can advance or block a decision
reciprocity norm awareness|互惠规范意识|understanding how favours create expectations of return
commitment escalation guard|承诺升级防范|avoiding deeper investment merely to justify past investment
framing effect audit|框架效应审视|checking whether wording rather than substance drives a choice
trust repair sequence|信任修复步骤|the ordered actions that rebuild confidence after a breach
walk-away rehearsal|离场预演|practising how to end talks calmly if limits are crossed`),

    group("组织变革与领导沟通", "C1", `
change rationale narrative|变革理由叙事|a coherent story explaining why change is necessary now
stakeholder anxiety mapping|干系人焦虑图谱|identifying who fears what during a transition
transition state ambiguity|过渡期模糊性|the uncertainty between an old structure and a new one
sponsorship visibility cadence|高层支持展示节奏|how often leaders publicly back a change effort
resistance signal interpretation|阻力信号解读|reading objections as information rather than obstruction
psychological contract shift|心理契约变动|changes in unwritten expectations between staff and employer
capability gap honesty|能力缺口坦诚|admitting openly what the organisation cannot yet do
symbolic action selection|象征性行动选择|choosing visible deeds that embody a stated direction
two-way briefing forum|双向沟通例会|a meeting designed for questions as much as announcements
survivor guilt acknowledgement|留任者愧疚正视|recognising the feelings of staff who keep their jobs in cuts
decision rights clarification|决策权界定|stating precisely who decides what after restructuring
pace-of-change calibration|变革节奏校准|adjusting speed so ambition does not outrun capacity
early win identification|早期成果识别|selecting quick visible successes that build momentum
narrative consistency check|口径一致性核查|ensuring different leaders tell a compatible story
informal network leverage|非正式网络借力|working through respected peers rather than hierarchy alone
feedback loop institutionalisation|反馈回路制度化|making the gathering of staff input a standing routine
values-behaviour alignment test|价值与行为一致性检验|checking whether daily decisions match stated principles
middle manager translation load|中层转译负担|the work managers do turning strategy into local meaning
attrition risk forecasting|流失风险预测|estimating who may leave because of a change
communication vacuum prevention|信息真空预防|filling silence before rumour fills it first
after-action review candour|复盘坦率程度|how honestly a team examines its own performance
succession depth assessment|梯队厚度评估|judging how many people could step into key roles
ceremonial closure ritual|仪式性收尾|a formal moment that marks the end of an era respectfully
credibility reservoir management|信誉储备管理|treating trust as a resource spent by every broken promise
distributed leadership encouragement|分布式领导培育|growing initiative at every level rather than at the top only`),

    group("政策与公共事务讨论", "C1", `
evidence-based policymaking|循证决策|forming public policy on tested findings rather than intuition
unintended consequence scan|意外后果排查|searching for harms a well-meant rule might cause
regulatory impact assessment|监管影响评估|a structured estimate of a proposed rule's costs and benefits
public consultation synthesis|公众意见综合|distilling many submitted views into usable themes
implementation feasibility test|落地可行性检验|asking whether agencies can actually deliver a policy
sunset clause provision|日落条款设置|a rule that expires unless actively renewed
distributional effect analysis|分配效应分析|examining which groups gain and which lose under a policy
pilot programme evaluation|试点项目评估|measuring a small-scale trial before wider rollout
compliance burden estimate|合规负担估算|the time and cost a rule imposes on those it governs
policy trade-off articulation|政策取舍阐明|stating openly what is sacrificed for what is gained
lobbying transparency register|游说透明登记|a public record of who seeks to influence decisions
grandfather clause scope|既得权利条款范围|which existing cases an old rule continues to cover
cross-jurisdiction comparison|跨辖区比较|learning from how other regions handled the same issue
administrative discretion boundary|行政裁量边界|the limits within which officials may judge case by case
evidence hierarchy debate|证据等级之争|disagreement over which kinds of proof should count most
horizon scanning exercise|前瞻扫描工作|systematic searching for issues likely to matter soon
accountability mechanism design|问责机制设计|building ways to answer for public decisions
policy window recognition|政策窗口识别|noticing the brief moments when reform becomes possible
white paper consultation draft|白皮书征求意见稿|a government document inviting comment before legislation
minority impact statement|少数群体影响说明|an account of how a measure affects smaller communities
procurement fairness safeguard|采购公平保障|rules that keep public purchasing open and contestable
freedom of information request|政府信息公开申请|a formal demand to see documents held by public bodies
deliberative forum facilitation|协商论坛主持|guiding structured citizen discussion of a public question
post-legislative scrutiny|立法后审查|checking whether a law achieved what parliament intended
intergenerational equity concern|代际公平考量|weighing present benefits against burdens on future people`),

    group("科技与社会前沿议题", "C1", `
algorithmic transparency demand|算法透明诉求|the call for automated decisions to be explainable
training data provenance|训练数据来源|where the information used to build a model came from
automation displacement debate|自动化替代之争|disagreement about jobs lost and created by machines
digital divide persistence|数字鸿沟持续|the lasting gap between the connected and the excluded
platform moderation dilemma|平台内容治理困境|the tension between open speech and harm prevention
synthetic media detection|合成媒体识别|telling machine-generated content from authentic recordings
informed consent erosion|知情同意弱化|the weakening of meaningful agreement in data collection
dual-use technology concern|军民两用技术隐忧|worry that a beneficial invention can also cause harm
attention economy critique|注意力经济批判|analysis of business models that profit from captured focus
interoperability mandate debate|互操作性义务之争|argument over forcing rival systems to work together
digital sovereignty claim|数字主权主张|a state's assertion of control over data and infrastructure
open source sustainability|开源可持续性|how freely shared software is maintained and funded
human oversight requirement|人工监督要求|the rule that people must supervise automated decisions
model capability threshold|模型能力阈值|a level of AI performance that triggers extra safeguards
benchmark gaming suspicion|基准测试作弊质疑|doubt that a system was tuned to test scores not real use
technology assessment office|技术评估机构|a body that studies innovations for legislatures
precautionary principle application|预防原则适用|restricting a technology before harm is fully proven
data portability right|数据可携权|a person's entitlement to move their data between services
surveillance creep warning|监控蔓延警示|the gradual expansion of monitoring beyond its first purpose
digital literacy curriculum|数字素养课程|structured teaching of safe and critical technology use
platform lock-in effect|平台锁定效应|the cost of leaving a service that holds one's data and habits
responsible disclosure practice|负责任漏洞披露|reporting security flaws privately before publishing them
compute resource concentration|算力资源集中|the gathering of processing power in few organisations
value alignment research|价值对齐研究|work on making machine goals match human intentions
socio-technical system view|社会技术系统视角|analysing technology and its human context as one system`),

    group("宏观经济与商业分析", "C1", `
leading indicator interpretation|先行指标解读|reading data that tends to move before the wider economy
monetary tightening cycle|货币紧缩周期|a sustained period of rising interest rates
supply-side constraint diagnosis|供给侧约束诊断|identifying production limits behind price pressures
purchasing power erosion|购买力侵蚀|the shrinking of what a unit of money can buy
market concentration measure|市场集中度衡量|an index of how few firms dominate an industry
barriers to entry analysis|进入壁垒分析|studying what stops new competitors from emerging
pricing power evidence|定价权证据|signs that a firm can raise prices without losing customers
working capital discipline|营运资金纪律|tight management of cash tied up in daily operations
margin compression pressure|利润率压缩压力|forces squeezing the gap between costs and prices
capital expenditure justification|资本开支论证|the case made for large long-term investments
scenario planning exercise|情景规划演练|preparing for several plausible futures rather than one forecast
sensitivity analysis table|敏感性分析表|a display of how results change as assumptions vary
counterparty risk review|交易对手风险审查|assessing whether the other side of a deal can perform
currency exposure hedging|汇率敞口对冲|reducing losses from exchange-rate movement
earnings quality scrutiny|盈余质量审视|checking whether reported profits reflect real cash generation
off-balance-sheet obligation|表外义务|a commitment that does not appear among listed liabilities
going concern assessment|持续经营评估|judging whether a firm can survive the coming year
segment reporting granularity|分部报告颗粒度|how finely results are broken down by business line
dividend sustainability question|股息可持续性质疑|doubt about whether payouts can continue at current levels
economic moat evaluation|护城河评估|judging how defensible a firm's advantage is
procyclical behaviour risk|顺周期行为风险|the danger of actions that amplify booms and busts
stress test assumption set|压力测试假设集|the adverse conditions imagined to test resilience
total addressable market sizing|潜在市场规模测算|estimating the full demand a product could serve
unit economics breakdown|单位经济性拆解|profit and cost measured per customer or transaction
forward guidance reading|前瞻指引解读|interpreting a central bank's hints about future policy`),

    group("合同与法律文本细读", "C1", `
governing law clause|管辖法律条款|the contract term choosing which legal system applies
entire agreement provision|完整协议条款|wording that excludes promises made outside the document
indemnification scope limit|赔偿范围限定|the boundary of one party's duty to cover another's losses
consequential damages exclusion|间接损失免责|a term removing liability for indirect harm
material breach definition|重大违约界定|what the contract counts as a serious failure to perform
cure period mechanics|补救期机制|the time allowed to fix a breach before consequences follow
assignment consent requirement|转让同意要求|the need for approval before contract rights change hands
force majeure enumeration|不可抗力列举|the specific uncontrollable events a contract excuses
representations and warranties|陈述与保证|statements of fact each party formally stands behind
survival clause duration|存续条款期限|which obligations continue after the contract ends
liquidated damages reasonableness|违约金合理性|whether a pre-agreed penalty reflects genuine expected loss
non-solicitation covenant|禁止挖角约定|a promise not to recruit the other party's staff or clients
audit rights provision|审计权条款|a term allowing one party to inspect the other's records
notice requirement formality|通知形式要求|the prescribed way official communications must be sent
severability clause effect|可分割条款效力|keeping the rest of a contract alive if one term fails
precedence of documents order|文件优先顺序|which document controls when contract papers conflict
implied term recognition|默示条款认定|obligations read into a contract though never written
condition precedent satisfaction|先决条件成就|fulfilling requirements before duties become active
good faith obligation reading|诚信义务解读|how far parties must consider each other's interests
limitation period awareness|时效期间意识|knowing the deadline for bringing a legal claim
dispute escalation ladder|争议升级阶梯|the ordered steps from negotiation to formal proceedings
without prejudice communication|无损权利沟通|settlement talk that cannot be quoted in court
ambiguity construction rule|歧义解释规则|the principle that unclear wording counts against its drafter
definition section cross-check|定义条款核对|verifying that defined terms are used as defined
execution formality validation|签署形式核验|confirming signatures and authority make a contract binding`),

    group("危机管理与公共沟通", "C1", `
holding statement issuance|初步声明发布|an early message confirming awareness before facts are full
single spokesperson designation|唯一发言人指定|routing public comment through one authorised voice
fact verification bottleneck|事实核验瓶颈|the delay caused by confirming information under pressure
speculation refusal discipline|拒绝猜测的纪律|declining to guess publicly about unconfirmed causes
stakeholder notification order|干系人通知顺序|the sequence in which affected groups are informed
media enquiry triage|媒体问询分级|sorting journalist questions by urgency and risk
correction without amplification|纠错不扩散|fixing a false story without spreading it further
apology sincerity test|道歉诚意检验|whether an apology names the harm and changes behaviour
reputational damage containment|声誉损害控制|limiting how far a crisis spreads through public trust
dark site activation|备用页面启用|switching on a pre-built emergency information page
rumour lifecycle monitoring|谣言周期监测|tracking how a false claim spreads and fades
legal-communications tension|法务与传播张力|the conflict between saying little and saying enough
victim-first message ordering|受影响者优先表达|putting people harmed ahead of institutional defence
operational update rhythm|进展通报节奏|the promised frequency of new information releases
crisis simulation debrief|危机演练复盘|the structured review after a practised emergency
message discipline maintenance|口径纪律保持|keeping every channel consistent with agreed facts
empathy statement authenticity|共情表达真实性|whether expressed concern sounds felt rather than scripted
blame attribution restraint|归因克制|withholding judgement of fault until evidence is firm
recovery milestone communication|恢复里程碑通报|announcing verified steps back to normal service
trust rebuilding roadmap|信任重建路线图|the published plan showing how confidence will be restored
internal audience priority|内部受众优先|telling staff before they learn from the news
question bridging technique|问题引导技巧|linking a hard question back to established facts
disclosure timing judgement|披露时机判断|choosing when openness helps more than it harms
post-crisis narrative audit|危机后叙事审查|reviewing what the public now believes and why
preparedness culture investment|常备文化投入|resources spent so the next crisis meets a ready team`),

    group("跨学科研究协作", "C1", `
shared vocabulary negotiation|共同术语协商|agreeing what key words mean across different fields
disciplinary boundary object|学科边界物|a concept or tool that different fields can each use
methodological pluralism respect|方法多元尊重|valuing different research traditions on their own terms
authorship contribution taxonomy|署名贡献分类|a scheme recording exactly who did what in a paper
data sharing agreement|数据共享协议|the terms under which research data moves between teams
reproducible workflow standard|可重复工作流标准|conventions that let others rerun an analysis exactly
grant consortium coordination|联合课题协调|managing many institutions inside one funded project
ethics approval harmonisation|伦理审批协调|aligning review requirements across institutions
open access mandate compliance|开放获取要求遵从|meeting funder rules that results be freely readable
preprint feedback cycle|预印本反馈循环|gathering comments on work shared before formal review
conflicting convention reconciliation|规范冲突调和|resolving field differences in style evidence and citation
translational research pathway|转化研究路径|the route from laboratory finding to practical use
knowledge broker role|知识中介角色|a person who moves insight between research and practice
negative result publication|阴性结果发表|reporting studies that found no effect
version control etiquette|版本管理礼仪|shared habits for editing common files without conflict
annotation schema agreement|标注框架共识|a common system for labelling shared research material
capacity building commitment|能力建设承诺|investment in partners' skills not just their output
equitable partnership principle|公平伙伴原则|fair distribution of credit funding and decision power
milestone renegotiation protocol|里程碑重议程序|the agreed way to adjust deadlines when science surprises
cross-lab replication exchange|跨实验室互验|laboratories testing each other's findings
terminology drift monitoring|术语漂移监测|watching how a shared term changes meaning over time
integrative literature review|整合性文献综述|a survey that unites evidence across disciplines
stakeholder co-design session|利益相关方共创会|involving affected communities in shaping research questions
research impact articulation|研究影响阐述|explaining what difference a project makes beyond papers
sunset data retention plan|数据退役保存计划|the scheduled archiving or deletion of project data`)
  ];

  const usageProfiles = Object.freeze({
    "学术阅读与批判思维": Object.freeze({ collocation: (word) => `apply the ${word}`, example: (word) => `The seminar leader modelled the ${word} while dissecting a published study.`, exampleZh: (definition) => `研讨课导师在剖析一篇已发表研究时示范了${definition}。` }),
    "高级书面论证": Object.freeze({ collocation: (word) => `refine the ${word}`, example: (word) => `The writing tutor singled out the ${word} as the draft's decisive improvement.`, exampleZh: (definition) => `写作导师指出，${definition}是这份草稿最关键的改进。` }),
    "复杂谈判与影响力": Object.freeze({ collocation: (word) => `prepare the ${word}`, example: (word) => `Before the final round, the lead negotiator revisited the ${word} with the team.`, exampleZh: (definition) => `最后一轮谈判前，首席谈判代表与团队重新梳理了${definition}。` }),
    "组织变革与领导沟通": Object.freeze({ collocation: (word) => `attend to the ${word}`, example: (word) => `The transformation office reviewed the ${word} at every steering meeting.`, exampleZh: (definition) => `变革办公室在每次指导委员会上都会审视${definition}。` }),
    "政策与公共事务讨论": Object.freeze({ collocation: (word) => `debate the ${word}`, example: (word) => `The committee hearing turned on the ${word} rather than on party lines.`, exampleZh: (definition) => `委员会听证的焦点是${definition}，而不是党派立场。` }),
    "科技与社会前沿议题": Object.freeze({ collocation: (word) => `examine the ${word}`, example: (word) => `The panel examined the ${word} from both engineering and civic perspectives.`, exampleZh: (definition) => `专家组从工程和公民两个视角审视了${definition}。` }),
    "宏观经济与商业分析": Object.freeze({ collocation: (word) => `model the ${word}`, example: (word) => `The analyst walked investors through the ${word} behind the revised forecast.`, exampleZh: (definition) => `分析师向投资者讲解了修订预测背后的${definition}。` }),
    "合同与法律文本细读": Object.freeze({ collocation: (word) => `scrutinise the ${word}`, example: (word) => `Counsel scrutinised the ${word} before advising the board to sign.`, exampleZh: (definition) => `法律顾问在建议董事会签署前仔细审查了${definition}。` }),
    "危机管理与公共沟通": Object.freeze({ collocation: (word) => `rehearse the ${word}`, example: (word) => `The response team rehearsed the ${word} during the quarterly drill.`, exampleZh: (definition) => `应对团队在季度演练中演练了${definition}。` }),
    "跨学科研究协作": Object.freeze({ collocation: (word) => `establish the ${word}`, example: (word) => `The consortium established the ${word} during its kickoff workshop.`, exampleZh: (definition) => `联合团队在启动工作坊上确立了${definition}。` })
  });

  const rows = [];
  groups.forEach((entryGroup) => {
    const usage = usageProfiles[entryGroup.topic];
    if (!usage) throw new Error(`Missing usage profile for ${entryGroup.topic}.`);
    entryGroup.entries.forEach(([word, definition, definitionEn]) => {
      rows.push(Object.freeze({
        id: `vx4750-${String(rows.length + 1).padStart(4, "0")}`,
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
    throw new Error(`Expected 250 v4750 vocabulary rows, received ${rows.length}.`);
  }

  window.ENGLISH_COMPASS_VOCABULARY_EXPANSION_V4750 = Object.freeze(rows);
})();

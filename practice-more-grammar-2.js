(function () {
  "use strict";

  window.ENGLISH_COMPASS_MORE_GRAMMAR_2 = Object.freeze([
    {
      id: "more2-grammar-present-continuous-arrangements",
      category: "日程安排",
      title: "现在进行时：表达已经确定的未来安排",
      summary: "现在进行时不仅能描述眼前正在发生的事，也能表达已经约好时间或地点的近期安排。",
      rule: "主语 + am/is/are + 动词 -ing，可与 tomorrow、next week 等未来时间连用；通常要有日历、预约或双方约定作为依据。",
      examples: [
        {
          good: true,
          text: "I am meeting the regional manager at 10:30 tomorrow.",
          note: "时间已经确定，使用 am meeting 表达已安排的会面"
        },
        {
          good: false,
          text: "I meet the regional manager at 10:30 tomorrow.",
          note: "单次且已约定的未来安排更自然地说 I am meeting"
        }
      ],
      quiz: {
        question: "We ___ the regional manager at 10:30 tomorrow; the appointment is already in the calendar.",
        options: ["meet", "are meeting", "will have met"],
        answer: 1,
        explanation: "预约已经写入日历，说明这是确定的未来安排，使用 are meeting。"
      },
      level: "A2"
    },
    {
      id: "more2-grammar-too-enough",
      category: "程度表达",
      title: "too 与 enough：说明过度或是否足够",
      summary: "too 表示程度超过需要，enough 表示数量或程度足以满足需要。",
      rule: "too 放在形容词或副词前；enough 放在形容词或副词后，但放在名词前：too heavy、light enough、enough space。",
      examples: [
        {
          good: true,
          text: "The parcel is too heavy for one person to lift.",
          note: "too heavy 表示重量超过一个人能够搬动的程度"
        },
        {
          good: false,
          text: "The meeting room is enough large for twelve people.",
          note: "enough 修饰形容词时应放在后面：large enough"
        }
      ],
      quiz: {
        question: "The storage room is not ___ for all these boxes.",
        options: ["enough large", "large enough", "too large"],
        answer: 1,
        explanation: "enough 修饰形容词 large 时位于其后，正确形式是 large enough。"
      },
      level: "A2"
    },
    {
      id: "more2-grammar-question-tags",
      category: "确认信息",
      title: "反意疑问句：自然地确认已知信息",
      summary: "在陈述句后加简短问句，可以礼貌确认对方是否同意或事实是否正确。",
      rule: "肯定陈述后接否定尾问，否定陈述后接肯定尾问；尾问沿用主句的助动词和对应代词。",
      examples: [
        {
          good: true,
          text: "The delivery has arrived, hasn't it?",
          note: "肯定的 has arrived 后使用否定形式 hasn't it"
        },
        {
          good: false,
          text: "You didn't change the password, didn't you?",
          note: "主句是否定形式，尾问应改为肯定的 did you"
        }
      ],
      quiz: {
        question: "You've already sent the revised invoice, ___?",
        options: ["haven't you", "didn't you", "aren't you"],
        answer: 0,
        explanation: "主句是肯定的现在完成时 have sent，尾问使用否定的 haven't you。"
      },
      level: "A2"
    },
    {
      id: "more2-grammar-could-was-able-to",
      category: "能力与结果",
      title: "could 与 was able to：区分过去能力和具体成功",
      summary: "could 常描述过去长期具备的能力；was/were able to 更适合强调某次具体行动最终成功。",
      rule: "谈一般过去能力可用 could；谈困难情况下某一次成功完成的事情，优先使用 was/were able to。",
      examples: [
        {
          good: true,
          text: "After checking the backup, we were able to recover every file.",
          note: "强调这一次成功恢复了所有文件，使用 were able to"
        },
        {
          good: false,
          text: "After three failed attempts, we could finally unlock the door yesterday.",
          note: "强调某次具体成功时，更自然地说 we were finally able to unlock"
        }
      ],
      quiz: {
        question: "Before the technician arrived, we ___ restart the server ourselves.",
        options: ["could", "were able to", "can"],
        answer: 1,
        explanation: "句子强调在技术人员到来前成功完成了一次重启，使用 were able to。"
      },
      level: "B1"
    },
    {
      id: "more2-grammar-second-conditional",
      category: "假设建议",
      title: "第二条件句：讨论不真实或可能性较低的情况",
      summary: "第二条件句用于想象与现在事实不同，或未来不太可能发生的情况及其结果。",
      rule: "If + 一般过去时，主句用 would/could + 动词原形；正式表达中各人称均可在 if 从句中使用 were。",
      examples: [
        {
          good: true,
          text: "If I were in your position, I would ask for written confirmation.",
          note: "说话者并不处于对方的位置，因此使用 were 和 would ask"
        },
        {
          good: false,
          text: "If I would manage the rota, I gave everyone more notice.",
          note: "if 从句用过去时 managed，主句应为 would give"
        }
      ],
      quiz: {
        question: "If I ___ responsible for the rota, I would give everyone more notice.",
        options: ["am", "were", "would be"],
        answer: 1,
        explanation: "这是与当前事实不同的假设，if 从句使用 were，结果使用 would give。"
      },
      level: "B1"
    },
    {
      id: "more2-grammar-purpose-so-that",
      category: "说明目的",
      title: "to 与 so that：清楚说明行动目的",
      summary: "to + 动词原形适合说明同一主语的直接目的；so that + 完整从句可引入不同主语或能力、可能性。",
      rule: "主句和目的动作的执行者相同时可用 to；需要明确另一主语时使用 so that + 主语 + can/could/will/would。",
      examples: [
        {
          good: true,
          text: "We added clear labels so that new staff could find items quickly.",
          note: "主句主语是 we，目的从句主语是 new staff，因此使用 so that"
        },
        {
          good: false,
          text: "I called the supplier for ask about the delay.",
          note: "直接说明自己的目的应使用 to ask，而不是 for ask"
        }
      ],
      quiz: {
        question: "We added labels to each shelf ___ new staff could find items quickly.",
        options: ["so that", "because of", "despite"],
        answer: 0,
        explanation: "空格后是完整从句 new staff could find，so that 正确引出行动目的。"
      },
      level: "B1"
    },
    {
      id: "more2-grammar-would-rather",
      category: "偏好与建议",
      title: "would rather：表达自己的选择和对他人的期望",
      summary: "would rather + 动词原形表达自己更愿意做什么；would rather + 另一主语 + 过去时表达希望别人怎么做。",
      rule: "同一主语用 would rather do；出现另一主语时用 would rather somebody did，即使事情指现在或未来。",
      examples: [
        {
          good: true,
          text: "I'd rather you checked with the client before changing the date.",
          note: "希望另一人先确认，you 后使用过去式 checked"
        },
        {
          good: false,
          text: "I'd rather to discuss this by phone.",
          note: "would rather 后直接接动词原形：rather discuss"
        }
      ],
      quiz: {
        question: "I'd rather you ___ the client before changing the delivery date.",
        options: ["contact", "contacted", "will contact"],
        answer: 1,
        explanation: "would rather 后出现另一主语 you，使用过去式 contacted 表达期望。"
      },
      level: "B1"
    },
    {
      id: "more2-grammar-causative-have",
      category: "委托服务",
      title: "have something done：表达请别人完成服务",
      summary: "当自己安排专业人员完成某项工作时，可用 have + 事物 + 过去分词，而不必说明执行者。",
      rule: "结构是 have/get + 宾语 + 过去分词：have the printer repaired；时态变化体现在 have 或 get 上。",
      examples: [
        {
          good: true,
          text: "We had the air conditioner serviced before summer.",
          note: "公司安排专业人员保养空调，使用 had + 宾语 + 过去分词"
        },
        {
          good: false,
          text: "I had repaired my laptop at the service centre.",
          note: "若是请服务中心维修，应说 I had my laptop repaired"
        }
      ],
      quiz: {
        question: "We need to ___ before the safety inspection.",
        options: ["have the faulty lock replaced", "have replaced the faulty lock", "replace the faulty lock by us"],
        answer: 0,
        explanation: "安排别人更换门锁使用 have + the faulty lock + replaced。"
      },
      level: "B2"
    },
    {
      id: "more2-grammar-mixed-conditional",
      category: "过去与现在",
      title: "混合条件句：连接过去原因与现在结果",
      summary: "混合条件句可以说明过去没有发生的事情，如何造成现在仍然存在的结果。",
      rule: "过去的假设条件用 If + had + 过去分词；现在的假设结果用 would/could + 动词原形。",
      examples: [
        {
          good: true,
          text: "If we had kept the receipt, we could request a refund now.",
          note: "过去没有保留收据，导致现在无法申请退款"
        },
        {
          good: false,
          text: "If I saved the original file, I would be able to restore it now.",
          note: "过去未发生的条件应使用 had saved"
        }
      ],
      quiz: {
        question: "If I had saved the original file, I ___ able to restore the data now.",
        options: ["would be", "would have been", "am"],
        answer: 0,
        explanation: "if 从句是假设过去，now 指向现在结果，因此使用 would be。"
      },
      level: "B2"
    },
    {
      id: "more2-grammar-inversion-only-after",
      category: "正式强调",
      title: "Only after 引起的倒装：强调时间条件",
      summary: "将 only after 等限制性短语放在句首时，主句使用部分倒装，使正式表达更有强调效果。",
      rule: "Only after + 名词或从句之后，主句采用助动词 + 主语 + 动词的顺序；过去时通常使用 did + 主语 + 动词原形。",
      examples: [
        {
          good: true,
          text: "Only after the audit did we discover the missing records.",
          note: "Only after 位于句首，主句使用 did we discover 的部分倒装"
        },
        {
          good: false,
          text: "Only after the audit we discovered the missing records.",
          note: "限制性短语置于句首后，主句不能继续使用普通陈述语序"
        }
      ],
      quiz: {
        question: "Only after the audit ___ how serious the error was.",
        options: ["we understood", "did we understand", "we did understand"],
        answer: 1,
        explanation: "Only after 置于句首引起部分倒装，过去时使用 did we understand。"
      },
      level: "B2"
    }
  ]);
})();

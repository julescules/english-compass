(function () {
  "use strict";

  window.ENGLISH_COMPASS_BULK_LISTENING = Object.freeze([
    {
      id: "bulk-listening-residence-card-pickup",
      level: "A2",
      topic: "海外生活",
      text: "Your residence card will be ready for collection on Tuesday afternoon. Please bring your passport to the municipal office before four thirty.",
      question: "What must the resident bring to collect the card?",
      options: ["A passport", "A rental receipt", "A bank statement"],
      answer: 0,
      keywords: ["residence card", "Tuesday afternoon", "passport", "municipal office"]
    },
    {
      id: "bulk-listening-utility-meter-reading",
      level: "B1",
      topic: "海外生活",
      text: "Please submit your electricity meter reading by the eighteenth. You can enter the number online or upload a clear photo, otherwise your bill will be estimated.",
      question: "What may happen if no meter reading is submitted?",
      options: ["The electricity will be disconnected", "The bill will be estimated", "The meter will be replaced"],
      answer: 1,
      keywords: ["meter reading", "eighteenth", "upload a photo", "bill will be estimated"]
    },
    {
      id: "bulk-listening-shared-kitchen-labels",
      level: "B1",
      topic: "海外生活",
      text: "Everyone using the shared kitchen should label food with a name and date by Friday evening. Unlabeled items will be removed during the weekly cleaning on Saturday.",
      question: "What will happen to food without a label?",
      options: ["It will be moved to another refrigerator", "It will be given to new residents", "It will be removed on Saturday"],
      answer: 2,
      keywords: ["shared kitchen", "label food", "Friday evening", "removed"]
    },
    {
      id: "bulk-listening-tax-residence-appointment",
      level: "B2",
      topic: "海外生活",
      text: "For your tax residence appointment, bring proof of your current address and your employment agreement. Salary records are helpful, but they are not required for the initial registration.",
      question: "Which two documents are required for the appointment?",
      options: ["Proof of address and an employment agreement", "Salary records and a passport photo", "A bank card and a travel itinerary"],
      answer: 0,
      keywords: ["tax residence", "proof of address", "employment agreement", "not required"]
    },

    {
      id: "bulk-listening-bus-diversion-library-stop",
      level: "A2",
      topic: "交通",
      text: "Because of roadwork, bus number sixteen will not stop outside the hospital today. Please use the temporary stop beside the public library.",
      question: "Where is the temporary bus stop?",
      options: ["Outside the hospital", "Beside the public library", "Near the train station"],
      answer: 1,
      keywords: ["roadwork", "bus number sixteen", "temporary stop", "public library"]
    },
    {
      id: "bulk-listening-bicycle-return-dock",
      level: "A2",
      topic: "交通",
      text: "Your bicycle rental ends at eight this evening. Return the bicycle to any green dock and wait for the light to turn blue before you leave.",
      question: "How does the rider know the bicycle was returned correctly?",
      options: ["The light turns blue", "The dock makes a phone call", "The bicycle seat moves down"],
      answer: 0,
      keywords: ["bicycle rental", "eight", "green dock", "light turns blue"]
    },
    {
      id: "bulk-listening-platform-connection-change",
      level: "B1",
      topic: "交通",
      text: "Passengers connecting to the northbound service should go to platform nine, not platform six. The connecting train will wait an additional five minutes because the first service arrived late.",
      question: "Which platform should connecting passengers use?",
      options: ["Platform five", "Platform six", "Platform nine"],
      answer: 2,
      keywords: ["northbound service", "platform nine", "not platform six", "five minutes"]
    },
    {
      id: "bulk-listening-overbooked-flight-volunteer",
      level: "B2",
      topic: "交通",
      text: "This flight is overbooked, and we are seeking one volunteer to travel tomorrow morning. The volunteer will receive a hotel room, dinner, and a travel voucher worth three hundred dollars.",
      question: "What must the volunteer agree to do?",
      options: ["Travel tomorrow morning", "Pay for the hotel room", "Take a flight to a different city"],
      answer: 0,
      keywords: ["overbooked", "volunteer", "tomorrow morning", "travel voucher"]
    },

    {
      id: "bulk-listening-interview-third-floor",
      level: "A2",
      topic: "面试",
      text: "Your interview is in room three twelve on the third floor. When you arrive, please ask the receptionist for Elena from human resources.",
      question: "Who should the candidate ask for?",
      options: ["Elena", "The building manager", "The sales director"],
      answer: 0,
      keywords: ["interview", "room three twelve", "third floor", "Elena"]
    },
    {
      id: "bulk-listening-interview-project-presentation",
      level: "B1",
      topic: "面试",
      text: "For the next stage, prepare a five-minute presentation about a project you completed. Slides are optional, but you should explain your role, one challenge, and the final result.",
      question: "What must the presentation include?",
      options: ["A detailed company history", "The candidate's role, a challenge, and the result", "At least ten presentation slides"],
      answer: 1,
      keywords: ["five-minute presentation", "project", "your role", "final result"]
    },
    {
      id: "bulk-listening-employment-gap-explanation",
      level: "B2",
      topic: "面试",
      text: "The panel may ask about the eight-month gap in your employment history. Give a brief explanation, then focus on the course you completed and the skills you developed during that period.",
      question: "How should the candidate discuss the employment gap?",
      options: ["Avoid the question completely", "Describe every personal event in detail", "Explain it briefly and emphasize relevant development"],
      answer: 2,
      keywords: ["panel", "employment gap", "brief explanation", "skills developed"]
    },
    {
      id: "bulk-listening-probation-salary-review",
      level: "B2",
      topic: "面试",
      text: "The advertised salary is the starting rate for the first three months. After probation, compensation is reviewed according to performance, although an increase is not automatic.",
      question: "What happens after the probation period?",
      options: ["Performance is reviewed before any salary change", "Every employee receives the same increase", "The starting salary is reduced"],
      answer: 0,
      keywords: ["starting rate", "three months", "after probation", "not automatic"]
    },

    {
      id: "bulk-listening-locker-code-change",
      level: "A2",
      topic: "职场",
      text: "The code for the staff lockers has changed to four eight two zero. Do not write it on the locker door or share it with visitors.",
      question: "What is the new locker code?",
      options: ["Four two eight zero", "Four eight two zero", "Eight four two zero"],
      answer: 1,
      keywords: ["staff lockers", "changed", "four eight two zero", "visitors"]
    },
    {
      id: "bulk-listening-flexible-core-hours",
      level: "B1",
      topic: "职场",
      text: "Employees may begin between eight and ten in the morning, but everyone must be available during the core hours from ten until three. Any change should be recorded in the team calendar.",
      question: "When must every employee be available?",
      options: ["From eight until ten", "From nine until five", "From ten until three"],
      answer: 2,
      keywords: ["begin between eight and ten", "core hours", "ten until three", "team calendar"]
    },
    {
      id: "bulk-listening-report-file-naming",
      level: "B1",
      topic: "职场",
      text: "To avoid confusion, save each report with the department name followed by the date. Do not use words like final because another revision may still be needed.",
      question: "How should employees name each report?",
      options: ["With the department name and date", "With the word final only", "With the writer's first name only"],
      answer: 0,
      keywords: ["avoid confusion", "department name", "date", "another revision"]
    },
    {
      id: "bulk-listening-workload-reprioritization",
      level: "B2",
      topic: "职场",
      text: "Since two urgent requests arrived this morning, postpone the low-risk audit until Wednesday. Inform the compliance lead today and record the reason for changing the priority.",
      question: "Which task should be postponed?",
      options: ["Both urgent requests", "The low-risk audit", "The compliance notification"],
      answer: 1,
      keywords: ["urgent requests", "postpone", "low-risk audit", "changing the priority"]
    },

    {
      id: "bulk-listening-replacement-charger-collection",
      level: "A2",
      topic: "客户服务",
      text: "Your replacement charger is ready at our West Street branch. Please collect it before six on Saturday and bring the damaged charger with you.",
      question: "What should the customer bring when collecting the replacement?",
      options: ["The damaged charger", "A new cable", "The original package"],
      answer: 0,
      keywords: ["replacement charger", "West Street branch", "Saturday", "damaged charger"]
    },
    {
      id: "bulk-listening-subscription-downgrade-cycle",
      level: "B1",
      topic: "客户服务",
      text: "I have changed your subscription to the basic plan. The lower price will begin with your next billing cycle, but the current month's payment cannot be partly refunded.",
      question: "When will the lower subscription price begin?",
      options: ["Immediately today", "With the next billing cycle", "After twelve months"],
      answer: 1,
      keywords: ["basic plan", "lower price", "next billing cycle", "cannot be refunded"]
    },
    {
      id: "bulk-listening-scratched-table-options",
      level: "B1",
      topic: "客户服务",
      text: "I am sorry the table arrived with a scratch. We can deliver a replacement next Tuesday, or you may keep this one and receive a fifteen-percent refund.",
      question: "What can the customer receive for keeping the scratched table?",
      options: ["Free chairs", "A full refund", "A fifteen-percent refund"],
      answer: 2,
      keywords: ["table", "scratch", "replacement", "fifteen-percent refund"]
    },
    {
      id: "bulk-listening-recurring-login-escalation",
      level: "B2",
      topic: "客户服务",
      text: "The password reset worked temporarily, but the login error returned after two hours. I have attached the system logs and escalated the case to our identity team for a deeper investigation.",
      question: "Why was the case escalated?",
      options: ["The customer forgot the username", "The error returned after a temporary fix", "The system logs were unavailable"],
      answer: 1,
      keywords: ["password reset", "temporarily", "error returned", "escalated"]
    },

    {
      id: "bulk-listening-meeting-room-delay",
      level: "A2",
      topic: "会议",
      text: "Today's team meeting has moved to room four and will begin at ten fifteen, which is fifteen minutes later than planned.",
      question: "When will the meeting begin?",
      options: ["At ten", "At ten fifteen", "At ten thirty"],
      answer: 1,
      keywords: ["team meeting", "room four", "ten fifteen", "later than planned"]
    },
    {
      id: "bulk-listening-standup-update-format",
      level: "B1",
      topic: "会议",
      text: "During tomorrow's stand-up, each person has two minutes. Mention what you completed, what you will do next, and anything that is blocking your progress.",
      question: "What should each person mention besides completed and next work?",
      options: ["Their annual leave plans", "Anything blocking progress", "Every email they received"],
      answer: 1,
      keywords: ["stand-up", "two minutes", "completed", "blocking progress"]
    },
    {
      id: "bulk-listening-budget-decision-postponed",
      level: "B2",
      topic: "会议",
      text: "We cannot approve the supplier change today because finance has not confirmed the updated cost figures. The decision will remain open until those figures are circulated on Thursday.",
      question: "Why was the supplier decision postponed?",
      options: ["The supplier missed the meeting", "Finance has not confirmed the costs", "The project was canceled"],
      answer: 1,
      keywords: ["supplier change", "finance", "cost figures", "decision will remain open"]
    },
    {
      id: "bulk-listening-conditional-pilot-consensus",
      level: "B2",
      topic: "会议",
      text: "The group supports a limited pilot provided that the privacy review is completed first. Legal will report on Monday, so final approval depends on its findings.",
      question: "What must happen before the pilot receives final approval?",
      options: ["The privacy review must be completed", "The pilot must expand nationally", "The group must hire another manager"],
      answer: 0,
      keywords: ["limited pilot", "provided that", "privacy review", "final approval"]
    },

    {
      id: "bulk-listening-user-test-participants",
      level: "B1",
      topic: "项目",
      text: "User testing starts next Monday, but we still need four participants who have never used the product. Recruitment should be completed by Thursday so that instructions can be sent on Friday.",
      question: "What kind of participants are still needed?",
      options: ["People who designed the product", "People who have never used the product", "People who tested it last month"],
      answer: 1,
      keywords: ["user testing", "four participants", "never used the product", "Thursday"]
    },
    {
      id: "bulk-listening-translation-copy-dependency",
      level: "B1",
      topic: "项目",
      text: "The design is ready, but the web team cannot add the final copy until the translation is approved. If approval arrives tomorrow, the page can still launch on Monday.",
      question: "What is the web team waiting for?",
      options: ["Approval of the translation", "A new page design", "Monday's visitor data"],
      answer: 0,
      keywords: ["design is ready", "final copy", "translation", "approved"]
    },
    {
      id: "bulk-listening-reporting-scope-change",
      level: "B2",
      topic: "项目",
      text: "The client has requested a reporting feature that was not included in the agreed scope. Adding it would require two extra weeks, so we need written approval for both the revised schedule and budget.",
      question: "What is required before adding the reporting feature?",
      options: ["A new project manager", "Written approval of schedule and budget changes", "Removal of the original features"],
      answer: 1,
      keywords: ["reporting feature", "agreed scope", "two extra weeks", "written approval"]
    },
    {
      id: "bulk-listening-second-supplier-risk",
      level: "B2",
      topic: "项目",
      text: "The main component currently comes from a single manufacturer. To reduce disruption risk, procurement will qualify a second supplier before peak production begins.",
      question: "Why will procurement qualify another supplier?",
      options: ["To redesign the main component", "To increase peak production prices", "To reduce dependence on one manufacturer"],
      answer: 2,
      keywords: ["main component", "single manufacturer", "reduce risk", "second supplier"]
    },

    {
      id: "bulk-listening-quotation-validity",
      level: "A2",
      topic: "商务",
      text: "This price quotation is valid until the last day of the month. Orders confirmed after that date may use a different price list.",
      question: "How long is the quotation valid?",
      options: ["Until the end of the month", "For one full year", "Until tomorrow morning"],
      answer: 0,
      keywords: ["price quotation", "valid", "last day", "different price list"]
    },
    {
      id: "bulk-listening-thirty-day-payment-terms",
      level: "B1",
      topic: "商务",
      text: "Payment is due within thirty days of the billing date. A late fee applies only if the full amount remains unpaid after that period.",
      question: "When may a late fee apply?",
      options: ["On the billing date", "After thirty days with money still unpaid", "Whenever a partial early payment is made"],
      answer: 1,
      keywords: ["payment", "thirty days", "late fee", "remains unpaid"]
    },
    {
      id: "bulk-listening-revenue-margin-shipping",
      level: "B2",
      topic: "商务",
      text: "Quarterly revenue increased by nine percent, yet our profit margin fell slightly. Higher express shipping costs were the main reason, rather than lower product prices.",
      question: "What mainly reduced the profit margin?",
      options: ["Lower product prices", "Fewer customer orders", "Higher express shipping costs"],
      answer: 2,
      keywords: ["revenue increased", "profit margin", "express shipping costs", "main reason"]
    },
    {
      id: "bulk-listening-regional-retention-pilot",
      level: "B2",
      topic: "商务",
      text: "Research shows strong initial interest in the region, but we have limited evidence about long-term customer retention. The board therefore recommends a six-month pilot before opening permanent offices.",
      question: "Why does the board recommend a pilot?",
      options: ["Initial interest is too low", "Long-term customer retention is uncertain", "Permanent offices are already open"],
      answer: 1,
      keywords: ["initial interest", "limited evidence", "customer retention", "six-month pilot"]
    },

    {
      id: "bulk-listening-office-shoe-custom",
      level: "A2",
      topic: "跨文化",
      text: "At this office, employees leave outdoor shoes near the entrance and wear indoor slippers. Visitors may borrow a clean pair from reception.",
      question: "What do employees wear inside the office?",
      options: ["Outdoor boots", "Indoor slippers", "Safety shoes"],
      answer: 1,
      keywords: ["outdoor shoes", "entrance", "indoor slippers", "reception"]
    },
    {
      id: "bulk-listening-confirm-feedback-meaning",
      level: "B1",
      topic: "跨文化",
      text: "Some colleagues give suggestions very directly, while others use softer language. If the meaning is unclear, summarize what you understood and ask them to confirm it.",
      question: "What should someone do when feedback is unclear?",
      options: ["Ignore the suggestion", "Summarize and confirm the meaning", "Immediately report the colleague"],
      answer: 1,
      keywords: ["suggestions", "softer language", "unclear", "summarize"]
    },
    {
      id: "bulk-listening-meeting-silence-reflection",
      level: "B1",
      topic: "跨文化",
      text: "Silence after a proposal does not always mean agreement. In this team, several members prefer to reflect before offering an opinion, so the chair allows a short pause.",
      question: "Why does the chair allow a pause?",
      options: ["Some members need time to reflect", "The proposal has already passed", "The meeting room is too noisy"],
      answer: 0,
      keywords: ["silence", "does not always mean agreement", "reflect", "short pause"]
    },
    {
      id: "bulk-listening-high-context-written-recap",
      level: "B2",
      topic: "跨文化",
      text: "The partners rely heavily on context and shared understanding, but our remote team cannot assume that every implication is clear. Send a written recap that states decisions, owners, and deadlines explicitly.",
      question: "What should the written recap state clearly?",
      options: ["Only the participants' names", "Cultural history and office customs", "Decisions, owners, and deadlines"],
      answer: 2,
      keywords: ["shared understanding", "remote team", "written recap", "decisions"]
    },

    {
      id: "bulk-listening-fire-drill-west-stairs",
      level: "A2",
      topic: "应急",
      text: "During today's fire drill, leave through the west stairs and meet beside the bicycle shelter. Do not use the lift, even if it appears to be working.",
      question: "Which route should employees use?",
      options: ["The west stairs", "The lift", "The underground car park"],
      answer: 0,
      keywords: ["fire drill", "west stairs", "bicycle shelter", "do not use the lift"]
    },
    {
      id: "bulk-listening-severe-weather-shelter",
      level: "A2",
      topic: "应急",
      text: "A severe weather warning is now active. Move to the interior cafeteria, stay away from windows, and remain there until the safety officer gives further instructions.",
      question: "Where should people shelter?",
      options: ["Beside the windows", "In the interior cafeteria", "Outside the main entrance"],
      answer: 1,
      keywords: ["severe weather", "interior cafeteria", "away from windows", "safety officer"]
    },
    {
      id: "bulk-listening-suspected-data-breach",
      level: "B1",
      topic: "应急",
      text: "If you suspect a data breach, disconnect the affected device from the network and call information security immediately. Do not delete files because the investigation team may need them.",
      question: "Why should employees avoid deleting files?",
      options: ["The investigation team may need them", "The device needs more storage space", "The files must be emailed to customers"],
      answer: 0,
      keywords: ["data breach", "disconnect", "information security", "do not delete"]
    },
    {
      id: "bulk-listening-chemical-spill-zone",
      level: "B2",
      topic: "应急",
      text: "A container has leaked in the loading area, so the supervisor has closed the entire zone. Only the trained response team may enter until the substance is identified and the air is tested.",
      question: "Who may enter the closed area?",
      options: ["Any employee wearing gloves", "Only the trained response team", "Customers waiting for deliveries"],
      answer: 1,
      keywords: ["container leaked", "closed the zone", "trained response team", "air is tested"]
    }
  ]);
})();

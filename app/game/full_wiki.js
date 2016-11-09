const WIKI = {
  // Modifiers starts here

  // Qualities starts here
  "0001A24": {
    id: "0001A24",
    class: "quality",
    name: "Dominance",
    description: "An attribute responsible for installing your standings in many social groups.",
    note: "A high dominance may reduce the cost of certain options, particularly the ones related to favors.",
    image_url: "http://i.imgur.com/jmjDapu.png",
  },
  "0001A25": {
    id: "0001A25",
    class: "quality",
    name: "Diplomacy",
    description: "An attribute responsible for proper communication in structured social environment such as meetings and conferences.",
    note: "A high diplomacy opens up choices otherwise unavailable in social settings.",
    image_url: "http://i.imgur.com/FFZrsof.png",
  },
  "0001A26": {
    id: "0001A26",
    class: "quality",
    name: "Fluency",
    description: "An attribute responsible for getting out of incidental or unpredictable situations.",
    note: "A high fluency helps you fend off incidental conflicts.",
    image_url: "http://i.imgur.com/y3v3Iwu.png",
  },
  "0001A27": {
    id: "0001A27",
    class: "quality",
    name: "Perception",
    description: "An attribute responsible for your information acquisition abilities.",
    note: "A high perception helps you detect options that are otherwise unavailable.",
    image_url: "http://i.imgur.com/5rpfPHK.png",
  },
  "0001A28": {
    id: "0001A28",
    class: "quality",
    name: "Knowledge",
    description: "An attribute responsible for decipharing the information you acquire.",
    note: "A high knowledge helps you understand the meaning of the pieces you collect.",
    image_url: "http://i.imgur.com/rS1tvUK.png",
  },

  // Items starts here
  "0001A00": {
    id: "0001A00",
    class: "item",
    name: "Cash",
    description: "People disagrees on whether it's the key to happiness.",
    note: "Can be used to acquire assets.",
    image_url: "http://i.imgur.com/oaxWsNW.png",
    message_insufficiency: "Not enough coins for you to squander.",
    message_acquisition: "Obtained a fortune."
  },

  "0002B94": {
    id: "0002B94",
    class: "item",
    name: "Stock Chart",
    description: "Line drawings decipharable to certain trained eyes.",
    note: "Can be used for trading or favors.",
    image_url: "http://i.imgur.com/Pwqz5wg.png",
  },

  "0002A00": {
    id: "0002A00",
    class: "equipment",
    name: "Wall Street Journal Beeper",
    description: "For those who can only afford the worst but strive to play the best.",
    note: "This ultimate poor man's stock portal will randomly select a stock chart from the billions on the market. (+1 Stock Chart)",
    image_url: "http://i.imgur.com/8fBs1H6.png",
    choices: [
      {
        buttonText: "Use Beeper",
        hasDisplayCondition: false,
        hasCondition: false,
        storeImpact: [
          {
            category: "items",
            id: "0002B94",
            amountChange: 1,
          }
        ]
      }
    ]
  },

  "0003C73": {
    id: "0003C73",
    class: "equipment",
    name: "DS47 Home Market Portal",
    description: "Poor man's watcher.",
    note: "Use this item to acquire daily stock charts.",
    image_url: "http://i.imgur.com/HbLXhIE.png",
  },

  "0004A25": {
    id: "0004A25",
    class: "item",
    name: "Chance for a Night Out",
    description: "A chance for exploring the noctournal activities in the city.",
    note: "This item is required for participation in night activites, such as going to bars.",
    image_url: "http://i.imgur.com/6thzQ0o.png",
  },

  "0001A23": {
    id: "0001A23",
    class: "quality",
    name: "Stress",
    description: "An unpleasant by-product of life.",
    note: "When stress reach certain levels, you won't be able to select certain options.",
    image_url: "http://i.imgur.com/YGOlU5z.png",
  },

  // Relationship items
  "0027A23": {
    id: "0027A23",
    class: "relationship",
    name: "Zane's Friendship",
    description: "The tech-driven fella find you a great company.",
    note: "Maintaining a good relationship with Zane will open up his advanced hardware arsenal to you.",
    image_url: "http://i.imgur.com/xgmIj2o.png",
  },

  "0027A27": {
    id: "0027A27",
    class: "relationship",
    name: "Erez's Friendship",
    description: "Culturally driven, his friendship is a reflection of your sophistication.",
    note: "Maintaining a good relationship with Erez will bring you opportunities to socialize with other creatives.",
    image_url: "http://i.imgur.com/JinWLf4.png",
  },

  // Nodes Start Here

  "1001A00": {
    id: "1001A00",
    class: "node",
    type: "split-two",
    name: "Your Apartment on Lower East Side",
    description: "A modest but comfortable lodging where you spent the years rearing your son. Now he's gone, you have the place to yourself.",
    image_url: "http://i.imgur.com/v2bl35p.png",
    choices: [
      {
        title: "Work in Your Midtown Office",
        note: "Without subsistence, the investigation is doomed. However, you won't be able to work if your stress is more than 75.",
        buttonText: "Work",
        hasDisplayCondition: false,
        hasCondition: true,
        satisfyCondition: function(store){
          return (!(!!store.qualities["0001A23"])) ||
                 (store.qualities["0001A23"].amount < 75);
        },
        requirements: [
          {
            id: "0001A23",
            amount: 75,
            isMoreThan: false,
          }
        ],
        storeImpact: [
          {
            category: "qualities",
            id: "0001A23",
            amountChange: 1,
          },
          {
            category: "items",
            id: "0001A00",
            amountChange: 100,
          }
        ],
        nextNode: "1001A45",
      },
      {
        title: "Visit Your Neighbor Erez D. Fordorn",
        note: "Conversing with your neighbor can help you feel at ease and reduce stress. Also, Erez is a well-connected creative professional and can introduce you to a variety of key characters.",
        buttonText: "Pay a Visit",
        hasDisplayCondition: false,
        hasCondition: false,
        requirements: [],
        storeImpact: [],
        nextNode: "7000B99",
      },
      {
        title: "Visit Zane Galaychglov at NYU Tech Co-Op",
        note: "A regular at the NYU tech scene, but he only speaks to people up-to-date with market since he doesn't like wasting time explaining. Also, you need to be partially well-off.",
        buttonText: "Go",
        hasDisplayCondition: true,
        satisfyDisplayCondition: function(store){
          return (!!store.relationships["0027A23"] &&
                  store.relationships["0027A23"].amount > 0);
        },
        hasCondition: true,
        satisfyCondition: function(store){
          return (!!store.items['0001A00'] && store.items['0001A00'].amount > 450) &&
                 (!!store.items['0002B94'] && store.items['0002B94'].amount > 5);
        },
        requirements: [
          {
            id: "0001A00",
            name: "Cash",
            amount: 450,
            isMoreThan: true,
          },
          {
            id: "0002B94",
            name: "Stock Chart",
            amount: 10,
            isMoreThan: true,
          }
        ],
        storeImpact: [],
        nextNode: "1001A01",
      }
    ]
  },

  "1001A01": {
    id: "1001A01",
    class: "node",
    type: "split-two",
    name: "Zane Galaychglov's Usual Spot in the Tech Lounge",
    description: "He emits an air of intense focus.",
    image_url: "http://i.imgur.com/xgmIj2o.png",
    choices: [
      {
        title: "Converse with Him about Technology",
        note: "Acquire information from him",
        buttonText: "Talk to Him",
        requirements: {},
        nextNode: "1001A44",
      },
      {
        title: "Go Home",
        note: "Enough tech talk for the day.",
        buttonText: "Decide on This",
        requirements: {},
        nextNode: "1001A00",
      }
    ]
  },

  "1001A02": {
    id: "1001A02",
    class: "node",
    type: "split-two",
    name: "With Erez out on the Street",
    description: "Erez is the rare breed of creatives that actively invest in his friend's work. Sometimes he spares some cash, other times his own effort. But his fascination with the creative community has earned him a fruitful network.",
    image_url: "http://i.imgur.com/JinWLf4.png",
    choices: [
      {
        title: "Converse with Him about Life",
        note: "He enjoys a good chat about life on the lower east side and how it used to be more culturally diverse.",
        buttonText: "Choose Topic",
        hasCondition: true,
        satisfyCondition: function(store){
          return !!store.qualities["0001A23"] &&
                 store.qualities["0001A23"].amount >= 2;
        },
        requirements: [
          {
            id: "0001A23",
            amount: 1,
            isMoreThan: true,
          }
        ],
        storeImpact: [
          {
            id: "0001A23",
            category: "qualities",
            amountChange: -2,
          }
        ],
        nextNode: "1001A02",
      },
      {
        title: "Ask if You Can Help His Friends",
        note: "He knows a number of friends who can use some additional support, either with cash or specific resources. You can develop friendship with his friends through these investments.",
        buttonText: "Inquire on Topic",
        hasDisplayCondition: false,
        hasCondition: false,
        requirements: [],
        storeImpact: [],
        nextNode: "7000B98",
      },
      {
        title: "Say Bye",
        note: "You've done enough catching up with him.",
        buttonText: "Go Home",
        hasDisplayCondition: false,
        hasCondition: false,
        nextNode: "1001A00",
      }
    ]
  },

  "1001A03": {
    id: "1001A03",
    class: "node",
    type: "split-two",
    name: "He Speaks on a few Promissing Projects",
    description: "By nature, he remembers the very best that capture his fancy. Some of the projects he know are expensive to support but in any case, a great investment comes with a price.",
    image_url: "http://i.imgur.com/JinWLf4.png",
    choices: [
      {
        title: "Support Zane with His Reference Cabin",
        note: "Erez's tech friend Zane is developing a market access portal and need to acquire some expensive reference books. Helping him can potentially lead to advanced hardware.",
        buttonText: "Invest in This Project",
        hasDisplayCondition: true,
        satisfyDisplayCondition: function(store){
          return (!(!!store.relationships["0027A23"]) ||
                  store.relationships["0027A23"].amount < 1);
        },
        hasCondition: true,
        satisfyCondition: function(store){
          return (!!store.items["0001A00"] &&
                  store.items["0001A00"].amount >= 200);
        },
        requirements: [
          {
            id: "0001A00",
            amount: 200,
            isMoreThan: true,
          }
        ],
        storeImpact: [
          {
            id: "0001A00",
            category: "items",
            amountChange: -200
          },
          {
            id: "0027A23",
            category: "relationships",
            amountChange: 1
          },
          {
            id: "0027A27",
            category: "relationships",
            amountChange: 1
          }
        ],
        nextNode: "1001A09",
      },

      {
        title: "Back to Casual Conversation",
        note: "Done inquiring about the projects.",
        buttonText: "Back",
        hasDisplayCondition: false,
        hasCondition: false,
        nextNode: "1001A02",
      }
    ]
  },

  "1001A09": {
    id: "1001A09",
    class: "node",
    type: "split-two",
    name: "Erez and Zane will Remember You",
    description: "The duo has a long coworking history and has worked on several pieces of intriguing technologies. Their well-funded venture will soon produce equipments ahead of their time.",
    image_url: "http://i.imgur.com/hPTwmXV.png",
    rewardList: [
      {
        id: "0001A00",
        category: "items",
        amountChange: -200
      },
      {
        id: "0027A23",
        category: "relationships",
        amountChange: 1
      },
      {
        id: "0027A27",
        category: "relationships",
        amountChange: 1
      }
    ],
    choices: [
      {
        title: "Back to Erez D Fordorn",
        note: "Continue conversing with him",
        buttonText: "Keep Talking",
        nextNode: "1001A02",
      }
    ]
  },

  "1001A44": {
    id: "1001A44",
    class: "node",
    type: "reward",
    name: "Zane Galaychglov's Information",
    description: "He gives you information",
    image_url: "http://i.imgur.com/xgmIj2o.png",
    rewards: [],
    choices: [
      {
        title: "Back to Zane Galaychglov",
        note: "Visit the genius and his scrap shop.",
        buttonText: "Thank You",
        nextNode: "1001A01",
      },
    ]
  },

  "1001A45": {
    id: "1001A45",
    class: "node",
    type: "split-two",
    name: "A Productive Working Session",
    description: "Your diligence earns you a post, but to continue the investigation, you need to develop other means of income. ",
    image_url: "http://i.imgur.com/nWDkgFb.png",
    rewardList: [
      {
        id: "0001A00",
        amountChange: 100,
        category: "items"
      },
      {
        id: "0001A23",
        amountChange: 1,
        category: "qualities"
      }
    ],
    choices: [
      {
        title: "Go Home",
        note: "Best destination for any work-drained soul.",
        buttonText: "Decide on This",
        nextNode: "1001A00",
      }
    ]
  },

  // Complicated nodes (elaborate ones) starts here
  "7000A99": {
    id: "7000A99",
    class: "node",
    type: "single",
    shouldDisplay: function(store){
      return true;
    },
    shouldLog: function(store){
      return !(!!store.chapters.contents["7000A99"]);
    },
    title: "Foreword",
    subtitle: "Plunging and Emptying",
    paragraphs: [
      {
        sectionTitle: "October 2030, New York.",
        content: "The chaos wasn’t fueled with outcries. Instead it was nailed in with dead silence, as the crowd on the floor of the NYSE paused and looked up at the plunging price of the Elliot & Shinka Agricultural Holding Co. (ESA). Seasoned traders, brokers, though witnessed thousands of collapsing cases before the day, came to a halt and stared in disbelief. ",
      },
      {
        content: "Falling prices on miniature screens never stirred these crafty folks, but something else might. Elliot & Shinka, nicknamed TechGrow, a 6-year-old tech new-comer, the embodiment of the once searing concept to decentralize the trading activities of agricultural produces in mid-west United States, today announces that 78% of its seasonal warehouse stores, together with its 40 billion asset of farming equipments, are in fact forged numbers on its corporate sheet; that over 43% of the winter supplies of agricultural produces for the entire country has been created out of the wildest imaginations and has evaporated, under just a short span of one minute, into thin air. ",
      },
      {
        content: "Someone will lose his shirt on Wall Street of course, but famine is coming for everyone. The storages once ripe and filled with promises of a well-stocked winter, now show their guts as empty and bloated only by the chilly breeze of October. You know you won’t bother going to the groceries after 5pm today, for no matter how hard you seek, supplies won’t come off from an empty shelf. ",
      }
    ],
    choices: [
      {
        title: "Continue Reading",
        note: "You can review the past readings by pressing the Journal button in your Navbar.",
        buttonText: "Decide on This",
        nextNode: "7000A98",
      }
    ],
    nextNode: "0001A00",
  },

  "7000A98": {
    id: "7000A98",
    class: "node",
    type: "single",
    shouldDisplay: function(store){
      return true;
    },
    shouldLog: function(store){
      return !(!!store.chapters.contents["7000A98"]);
    },
    title: "Chapter One",
    subtitle: "A Hasty Departure",
    paragraphs: [
      {
        content: "No grocery trip today means no sauces for the bland pasta you shelved up for last-minute dinners. As if a flavorless dinner is not enough symbolism for a bleak night, your phone rings up just minutes before your usual bed time. "
      },
      {
        content: "“Yes?” Tired and torn, you struggled to engage an interaction. ",
      },
      {
        content: "“Hey! Hey!! Do you know Aaron?”",
      },
      {
        content: "“Yes, he’s my son…” Half-awaken by the other voice’s show of urgency, you trailed off with an inviting silence. ",
      },
      {
        content: "“He disappeared from the office. We thought he went out for pizza… But he left your number on the desk and never came back. We called everyone……”"
      },
      {
        content: "You didn’t catch all of what he said and could only assume it’s a hasty summary of their failed attempts to locate him. The police was there, but left with no results. ",
      },
      {
        content: "You wanted to pick up your feet and rush to the police station, but was discouraged by a siege of fatigue. You thought about how your son left home, and how he seldom leaves any message to you. In the end, you decided to pursue the case in the morning.",
      },
      {
        content: "But it was no use. Your unexpected attention to your ungrateful son’s missing was met by a cold wall of vague police speeches decorated by a politeness half-genuine. You learnt nothing but a lesson, that those who get to control the information are never the ones to ask. "
      },
      {
        content: "In the coming days, as you witness the uniforms being deployed to ordinary stores to prevent people from trampling each other in the craze for scarce supplies, you realized you’re alone in the search to come. "
      }
    ],
    choices: [
      {
        title: "Continue Reading",
        note: "You will be prompted to select your character background next.",
        buttonText: "Decide on This",
        nextNode: "7000A97",
      }
    ],
    nextNode: "0001A00",
  },

  "7000A97": {
    id: "7000A97",
    class: "node",
    type: "single",
    shouldDisplay: function(store){
      return true;
    },
    shouldLog: function(store){
      return false;
    },
    title: "Who Are You?",
    subtitle: "Choose a Background to Initialize Your Base Attributes",
    paragraphs: [
      {
        sectionTitle: "Learning about The Game: Attributes",
        content: "You will have a temperament profile consisted of five basic attributes: Dominance, Diplomacy, Fluency, Perception and Knowledge (DDFPK, pronounced as 'Duffpack').",
      },
      {
        sectionTitle: "1. Dominance",
        content: "Dominance is the combined account for physical and mental strength. Dominance establishes the degree of confidence and advantage in physical and hierarchical conflicts. It is closely related to armed conflicts, the ability to wield weapons, the ability to overcome challenges, and the ability to establish an influential position in a social group. ",
      },
      {
        sectionTitle: "2. Diplomacy",
        content: "Diplomacy is related to interpersonal relationships, establishing contacts, navigating social contexts and forming alliance. ",
      },
      {
        sectionTitle: "3. Fluency",
        content: "Fluency is related to the protagonist’s ability to handle incidental situations. Unlike diplomacy which gives you an edge in formalized social relationships, fluency gives you flexibility in navigating the chaotic scenes on the street of New York. ",
      },
      {
        sectionTitle: "4. Perception",
        content: "Perception is related to investigation, knowledge acquisition, revealing secrets, detecting lies, and various information-driven activities. "
      },
      {
        sectionTitle: "5. Knowledge",
        content: "Knowledge is closely related to dissecting information, processing puzzles, making sense of situations, tying together snippets of intrigues and developing valuable theories. Unlike Perception which deals primarily with the acquisition of information, Knowledge helps to make use of them. ",
      }
    ],
    choices: [
      {
        title: "You're a Relocated Veteran (+10 Dominance)",
        note: "Once a soldier, you opted to establish a family in the great city. After your divorce, you obtained the child right and continued to support him till he stormed out on you in pursuit of a plush high life. Now, having lost contact with him, you decide to take matter into your own hand.",
        buttonText: "Choose This Background",
        storeImpact: [
          {
            id: "0001A24",
            category: "qualities",
            amountChange: 10,
          }
        ],
        nextNode: "7000A95",
      },
      {
        title: "You're a District Advisor (+10 Diplomacy)",
        note: "Once the governor’s favorite intern, you effortlessly obtained a post as the chief adviser for a wealthy city district. Your extensive outreach into the corporate world propelled your son’s financial career and ultimately your own wealth. Your son left little traces, but your persuaded friends, assuming they’re as eager as you to find your missing child, might provide insight in his case. ",
        buttonText: "Choose This Background",
        storeImpact: [
          {
            id: "0001A25",
            category: "qualities",
            amountChange: 10,
          }
        ],
        nextNode: "7000A94",
      },
      {
        title: "You're a New Artist (+10 Fluency)",
        note: "You lead one of the prominent niche genres in the city, having a substantial following from a diverse set of audience. Your child was a creative one just like you, well-versed and adept, almost mysterious. He must have left some unique strokes on the vast canvas of the financial scene, and it’s up to you to pick them up and interpret his tellings.",
        buttonText: "Choose This Background",
        storeImpact: [
          {
            id: "0001A26",
            category: "qualities",
            amountChange: 10,
          }
        ],
        nextNode: "7000A93",
      },
      {
        title: "You're a Forensic Accountant (+10 Perception)",
        note: "People assume you’re a finance person, but you’re not. Instead, your breed is more closely related to the police officers sitting in their concrete headquarter on 1st Ave, except obviously without government-sponsored cars for mid-day coffee run. Having dealt with numbers for as long as you remember, you opt to follow the scant scent of shenanigans from all those crafted figures on the corporate papers.",
        buttonText: "Choose This Background",
        storeImpact: [
          {
            id: "0001A27",
            category: "qualities",
            amountChange: 10,
          }
        ],
        nextNode: "7000A92",
      },
      {
        title: "You're a Scientific Contractor (+10 Knowledge)",
        note: "You are one of the less-known commissioners of the most elusive scientific problems. With a broad industrial background and a well-stocked conceptual toolbox, you contributed to the foundation of the modern financial system. Your child, however, cares more about people than intricate constructs. Concerned he might have been consumed in the deep politics of the financial world, you set out to discover his whereabouts through the eyes and ears you installed on the digital trading network decades ago.",
        buttonText: "Choose This Background",
        storeImpact: [
          {
            id: "0001A28",
            category: "qualities",
            amountChange: 10,
          }
        ],
        nextNode: "7000A91",
      }
    ],
    nextNode: "1001A00",
  },

  "7000A95": {
    id: "7000A95",
    class: "node",
    type: "single",
    shouldDisplay: function(store){
      return false;
    },
    shouldLog: function(store){
      return !(!!store.chapters.contents["7000A95"]);
    },
    paragraphs: [
      {
        sectionTitle: "You are who you are, but you're prepared",
        content: "Once a soldier, you opted to establish a family in the great city. After your divorce, you obtained the child right and continued to support him till he stormed out on you in pursuit of a plush high life. Now, having lost contact with him, you decide to take matter into your own hand."
      },
      {
        content: "In any case, it's best you go home first.",
      }
    ],
    choices: [],
    nextNode: "1001A00",
  },

  "7000A94": {
    id: "7000A94",
    class: "node",
    type: "single",
    shouldDisplay: function(store){
      return false;
    },
    shouldLog: function(store){
      return !(!!store.chapters.contents["7000A94"]);
    },
    paragraphs: [
      {
        sectionTitle: "You are who you are, but you're prepared",
        content: "Once the governor’s favorite intern, you effortlessly obtained a post as the chief adviser for a wealthy city district. Your extensive outreach into the corporate world propelled your son’s financial career and ultimately your own wealth. Your son left little traces, but your persuaded friends, assuming they’re as eager as you to find your missing child, might provide insight in his case.",
      },
      {
        content: "In any case, it's best you go home first.",
      }
    ],
    choices: [],
    nextNode: "1001A00",
  },

  "7000A93": {
    id: "7000A93",
    class: "node",
    type: "single",
    shouldDisplay: function(store){
      return false;
    },
    shouldLog: function(store){
      return !(!!store.chapters.contents["7000A93"]);
    },
    paragraphs: [
      {
        sectionTitle: "You are who you are, but you're prepared",
        content: "You lead one of the prominent niche genres in the city, having a substantial following from a diverse set of audience. Your child was a creative one just like you, well-versed and adept, almost mysterious. He must have left some unique strokes on the vast canvas of the financial scene, and it’s up to you to pick them up and interpret his tellings.",
      },
      {
        content: "In any case, it's best you go home first.",
      }
    ],
    choices: [],
    nextNode: "1001A00",
  },

  "7000A92": {
    id: "7000A92",
    class: "node",
    type: "single",
    shouldDisplay: function(){
      return false;
    },
    shouldLog: function(store){
      return !(!!store.chapters.contents["7000A92"]);
    },
    paragraphs: [
      {
        sectionTitle: "You are who you are, but you're prepared",
        content: "People assume you’re a finance person, but you’re not. Instead, your breed is more closely related to the police officers sitting in their concrete headquarter on 1st Ave, except obviously without government-sponsored cars for mid-day coffee run. Having dealt with numbers for as long as you remember, you opt to follow the scant scent of shenanigans from all those crafted figures on the corporate papers.",
      },
      {
        content: "In any case, it's best you go home first.",
      }
    ],
    choices: [],
    nextNode: "1001A00",
  },

  "7000A91": {
    id: "7000A91",
    class: "node",
    type: "single",
    shouldDisplay: function(store){
      return false;
    },
    shouldLog: function(store){
      return !(!!store.chapters.contents["7000A91"]);
    },
    paragraphs: [
      {
        sectionTitle: "You are who you are, but you're prepared",
        content: "You are one of the less-known commissioners of the most elusive scientific problems. With a broad industrial background and a well-stocked conceptual toolbox, you contributed to the foundation of the modern financial system. Your child, however, cares more about people than intricate constructs. Concerned he might have been consumed in the deep politics of the financial world, you set out to discover his whereabouts through the eyes and ears you installed on the digital trading network decades ago.",
      },
      {
        content: "In any case, it's best you go home first.",
      }
    ],
    choices: [],
    nextNode: "1001A00",
  },

  "7000B99": {
    id: "7000B99",
    class: "node",
    type: "single",
    shouldDisplay: function(store){
      return !(!!store.chapters.contents["7000B99"]);
    },
    shouldLog: function(store){
      return !(!!store.chapters.contents["7000B99"]);
    },
    paragraphs: [
      {
        sectionTitle: "You decided to pay a visit to your creative neighbor",
        content: "Erez might have some ideas. He always does. ",
      },
      {
        content: "The well-connected creative must have sponsored a couple dozen of his friends’ projects since he moved into the city, and he certainly have no intention of hiding his generosity. Since he moved next door, the staircase used to be silent throughout the day suddenly becomes filled with heated chatting and debating after work hours, with him, of course, being the center of attention. In the end, the conversations end either in the form of exchanges, handshakes or some reserved promises. "
      },
      {
        content: "You, however, enjoys the privilege of talking with him in the late night hours on the fire escape just reachable from his windows, sometimes with beers in hand, since he doesn’t see any visitors after 10pm.  A calm and thoughtful fella, he talks smoothly about the cultural movements that he’s been proud to be a part of, including the Atlantic Tribe, a de-modernization movement just 3 years ago in protest of the installment of Deep Learning Eyes (DLE) across the city’s dwellings. They told the public that the system was a revolutionary way of detecting any signs of violence, disturbance, or illegal exchanges through a state-of-art machine learning scheme, to enhance residential security. They won’t be needing the ‘eyes’ anymore, ironically, since the prevalent violence in the fight for supplies has already sent enough signals to overwhelm the system, contributing to nothing but constant distraction for the police force. It’s evident that a thousand pairs of eyes can’t be useful if there’s only a few pairs of hands to deal with what they see. ",
      }
    ],
    choices: [
      {
        title: "Accompany Him Downstairs for a Chat",
        note: "You won't see this text next time you visit Erez. The text will be logged to your journal.",
        buttonText: "Proceed",
        nextNode: "1001A02",
      }
    ],
    nextNode: "1001A02",
  },

  "7000B98": {
    id: "7000B98",
    class: "node",
    type: "single",
    shouldDisplay: function(store){
      return !(!!store.chapters.contents["7000B98"]);
    },
    shouldLog: function(store){
      return !(!!store.chapters.contents["7000B98"]);
    },
    paragraphs: [
      {
        content: "He speaks of a few projects, which you find fascinating, especially the ones closely related to your son’s case. Among them, you picked a market access project from Erez’s friend Zane, an auto-enhancement project run by Zane’s friend Derek and a side-tracked art exhibition show by a curator named Anthony. ",
      }
    ],
    choices: [
      {
        title: "Inquire Details",
        note: "You won't see this text next time you ask Erez about these projects. The text will be logged to your journal.",
        buttonText: "Proceed",
        nextNode: "1001A03",
      }
    ],
    nextNode: "1001A03",
  },
}

export default WIKI;





















////

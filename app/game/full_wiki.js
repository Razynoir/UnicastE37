const WIKI = {
  // Modifiers starts here

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
    name: "Daily Wall Street Journal Beeper",
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
        nextNode: "1001A02",
      },
      {
        title: "Visit Zane Galaychglov at NYU Tech Co-Op",
        note: "A regular at the NYU tech scene.",
        buttonText: "Go",
        hasDisplayCondition: true,
        satisfyDisplayCondition: function(store){
          return (!!store.relationships["0027A23"] &&
                  store.relationships["0027A23"].amount > 0);
        },
        hasCondition: true,
        satisfyCondition: function(store){
          return (!!store.items['0001A00'] && store.items['0001A00'].amount > 450) &&
                 (!!store.items['0002B94'] && store.items['0002B94'].amount < 5);
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
            amount: 5,
            isMoreThan: false,
          }
        ],
        storeImpact: [
          {
            id: "0001A00",
            amountChange: -450,
          }
        ],
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
        nextNode: "1001A03",
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
    type: "reward",
    name: "Erez and Zane will Remember You",
    description: "The duo has a long coworking history and has worked on several pieces of intriguing technologies. Their well-funded venture will soon produce equipments ahead of their time.",
    image_url: "http://i.imgur.com/hPTwmXV.png",
    rewards: [],
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
    name: "Zane Galaychglov's Information Reward",
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
    type: "reward",
    name: "A Productive Working Session",
    description: "",
    image_url: "http://i.imgur.com/nWDkgFb.png",
    rewards: [],
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
      return !(!!store.chapters.contents["7000A99"]);
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
      return !(!!store.chapters.contents["7000A98"]);
    },
    shouldLog: function(store){
      return !(!!store.chapters.contents["7000A98"]);
    },
    title: "Chapter One",
    subtitle: "Aaron is Missing",
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
        nextNode: "7000A98",
      }
    ],
    nextNode: "0001A00",
  },

  "7000A97": {
    id: "7000A97",
    class: "node",
    type: "single",
    shouldDisplay: function(store){
      return !(!!store.chapters.contents["7000A97"]);
    },
    shouldLog: false,
    title: "Who Are You?",
    subtitle: "Choose a Background to Initialize Your Base Attributes",
    paragraphs: [
      {
        sectionTitle: "Learning about The Game: Attributes",
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


}


export default WIKI;





















////

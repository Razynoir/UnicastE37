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
    description: "Line drawings designed to illustrate a stock's well-being.",
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
    name: "Stree",
    description: "An unpleasant by-product of life.",
    note: "When stress reach certain levels, you won't be able to select certain options.",
    image_url: "http://i.imgur.com/YGOlU5z.png",
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
        note: "Without subsistence, the investigation is doomed. However, you won't be able to work if your stress is more than 75. (+1 stress each time you work)",
        buttonText: "Work",
        hasDisplayCondition: false,
        hasCondition: true,
        satisfyCondition: function(currentStore){
          var state = currentStore.getState();
          return (!(!!state.qualities["0001A23"])) ||
                 (state.qualities["0001A23"].amount < 75);
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
        title: "Visit Zane Galaychglov at NYU Tech Co-Op",
        note: "A regular at the NYU tech scene.",
        buttonText: "Go",
        hasDisplayCondition: true,
        satisfyDisplayCondition: function(currentStore){

        },
        hasCondition: true,
        satisfyCondition: function(currentStore){
          var state= currentStore.getState();
          return (!!state.items['0001A00'] && state.items['0001A00'].amount > 450) &&
                 (!!state.items['0002B94'] && state.items['0002B94'].amount < 5);
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
        assetImpact: [
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

  "1001A02": {
    id: "1001A02",
    class: "node",
    type: "split-two",
    name: "Phil Dowerstone's Office in a Shared Work Space",
    description: "Visit the veteran's office",
    image_url: "http://i.imgur.com/2wT2TLz.png",
    choices: [
      {
        title: "Go Home",
        note: "Enough talk with the veteran.",
        buttonText: "Decide on This",
        nextNode: "1001A00",
      }
    ]
  },

  // Chapter nodes Start Here
  "4007A01": {
    id: "4007A01",
    class: "node",
    type: "single",
    isChapter: true,
    title: "Chapter One<br/>Your Son is Missing",
    content: "",
    shouldLog: true,
    logContent: "",
  },
}


export default WIKI;





















////

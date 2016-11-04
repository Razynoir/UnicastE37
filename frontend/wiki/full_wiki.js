const WIKI = {
  "0001A00": {
    id: "0001A00",
    class: "item",
    name: "Dollar",
    description: "People disagrees on whether it's the key to happiness.",
    note: "Can be used to purchase things or gain favors.",
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

  "0003C73": {
    id: "0003C73",
    class: "item",
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

  // Nodes Start Here

  "1007A01": {
    id: "1007A01",
    class: "node",
    type: "single",
    isChapter: true,
    title: "Chapter One<br/>Your Son is Missing",
    content: "",
    shouldLog: true,
    logContent: "",
  },

  "1001A00": {
    id: "1001A00",
    class: "node",
    type: "split-two",
    name: "Your Apartment on Lower East Side",
    description: "A modest but comfortable lodging.",
    image_url: "http://i.imgur.com/v2bl35p.png",
    choices: [
      {
        title: "Visit Zane Galaychglov at NYU Tech Co-Op",
        note: "A regular at the NYU tech scene.",
        buttonText: "Go",
        hasCondition: true,
        satisfyCondition: function(currentStore){
          var state= currentStore.getState();
          return state.items['0001A00'].amount > 450 &&
                 state.items['0002B94'].amount < 5;
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
      },
      {
        title: "Take N to Cpt. Phil Dowerstone",
        note: "Visit the half bionics with double the balls.",
        buttonText: "Decide on This",
        nextNode: "1001A02",
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
  }

  // Nodes Start Here
}


export default WIKI;





















////

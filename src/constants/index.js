const listItemArr1 = [
    {
      text: "Price",
      link: "/price",
    },
    {
      text: "Volume",
      link: "/volume",
    },
    {
      text: "Market CP",
      link: "/marketCP",
    },
    {
      text: "Watch",
      link: "/watch",
    },
  ];
  const titleText1 = "Chain";
  
  const listItemArr2 = [
    {
      text: "Knowledge Base",
      link: "/knowledgeBase",
    },
    {
      text: "FAQ",
      link: "/faq",
    },
    {
      text: "Learn",
      link: "/learn",
    },
    {
      text: "Blog",
      link: "/blog",
    },
    {
      text: "Sitemap",
      link: "/sitemap",
    },
    {
      text: "Terms of use",
      link: "/termsOfUse",
    },
    {
      text: "Privacy Policy",
      link: "/privacyPolicy",
    },
  ];
  const titleText2 = "Resources";
  
  const listItemArr3 = [
    {
      text: "Alerts",
      link: "/alerts",
    },
    {
      text: "Coin Analytics",
      link: "/coinAnalytics",
    },
    {
      text: "Coin API",
      link: "/coinAPI",
    },
    {
      text: "Mint Day",
      link: "/mintDay",
    },
    {
      text: "Partnerships",
      link: "/partnerships",
    },
  ];
  const titleText3 = "Solutions";

  const mainContentTitle1 = {
  desktop: { 
    titleHeadingTextWhite: "Trending Crypto Currencies",
    titleHeadingTextBlue: "by Volume",
    titleSubHeadingText: "The top trending coins for the past hour with the highest increase in volume"
  },
  mobile: { 
    titleHeadingTextWhite: "Trending Crypto Currencies",
    titleHeadingTextBlue: "by Volume",
    titleSubHeadingText: "The top trending coins for the past hour with the highest increase in volume"
  },
  }

  const mainContentTitle2 = {
    desktop: { 
      titleHeadingTextWhite: "Top Miners",
      titleHeadingTextBlue: "by TVL",
      titleSubHeadingText: "The top trending miners for the past 1 hour with the highest increase in TVL"
    },
    mobile: { 
      titleHeadingTextWhite: "Top Miners",
      titleHeadingTextBlue: "by TVL",
      titleSubHeadingText: "The top trending miners for the past 24 hours with the highest increase in TVL"
    },
  }

  const mainContentTitle3 = {
    desktop: { 
      titleHeadingTextWhite: "Upcoming",
      titleHeadingTextBlue: "Miners",
      titleSubHeadingText: "List of miners that are launching soon"
    },
     mobile: { 
      titleHeadingTextWhite: "Top Miners",
      titleHeadingTextBlue: "by TVL",
      titleSubHeadingText: "The top trending miners for the past 24 hours with the highest increase in TVL"
    },
  }

  const filterButtonOneText = {
  desktop: {
    btn1Text: "All",
    btn2Text: "Upcoming",
  },
  mobile: {
    btn1Text: "Trending",
    btn2Text: "Upcoming",
  }
  }
  const filterButtonTwoText = {
    desktop: {
      btn1Text: "All",
      btn2Text: "Upcoming",
    },
    mobile: {
      btn1Text: "All",
      btn2Text: "Upcoming",
    }
  }
  const filterButtonThree = {
    desktop: {
      btn1Text: "All",
      btn2Text: "Upcoming",
    },
    mobile: {
      btn1Text: "All",
      btn2Text: "Upcoming",
    }
  }

  const ColsData1= [
    {
      colText: "Coin",
      isHourStatusBox: true
    },
    {
      colText: "Price",
      isColIcon: true
    },
    {
      colText: "Chain",
      isColIcon: true
    },
    {
      colText: "Market cap",
      isColIcon: true
    },
    {
      colText: "Risk Rating",
      isColIcon: true
    },
    {
      colText: "Volume",
      isColIcon: true
    },
    {
      colText: "7d Vol",
      isColIcon: true
    }
  ]

  const ColsData2= [
    {
      colText: "Miner",
      isHourStatusBox: true
    },
    {
      colText: "TVL",
      isColIcon: false
    },
    {
      colText: "Chain",
      isColIcon: false
    },
    {
      colText: "FEES",
      isColIcon: true
    },
    {
      colText: "Daily",
      isColIcon: false
    },
    {
      colText: "Launch",
      isColIcon: false
    },
    {
      colText: "RISK RATING",
      isColIcon: true
    }
  ]

  const ColsData3= [
    {
      colText: "Miner",
      isHourStatusBox: false
    },
    {
      colText: "Chain",
      isColIcon: false
    },
    {
      colText: "FEES",
      isColIcon: true
    },
    {
      colText: "Daily",
      isColIcon: false
    },
    {
      colText: "TVL",
      isColIcon: false
    },
    {
      colText: "RISK RATING",
      isColIcon: true
    },
    {
      colText: "",
      isColIcon: false
    }
  ]


  const rowsData1 = [
    {
      col1avatarPath: "avatartwo.png",
      col3imgPath: "colthreeimgone.png",
      col7imgPath: "colsevenimgtwo.png",
      mainTitle: "Doge",
      subTitle: "DOGE",
      percentageText1: "80.5%",
      percentageText2: "-10.4%",
    },
    {
      col1avatarPath: "avatarthree.png",
      col3imgPath: "colthreeimgtwo.png",
      col7imgPath: "colsevenimgthree.png",
      mainTitle: "Elon",
      subTitle: "ELON",
      percentageText1: "80.5%",
      percentageText2: "-10.4%",
    },
    {
      col1avatarPath: "avatarfour.png",
      col3imgPath: "colthreeimgthree.png",
      col7imgPath: "colsevenimgfour.png",
      mainTitle: "Bart's Farm Frens",
      subTitle: "BFFS",
      percentageText1: "80.5%",
      percentageText2: "-10.4%",
    },
    {
      col1avatarPath: "avatarfive.png",
      col3imgPath: "colthreeimgtwo.png",
      col7imgPath: "colsevenimgfifth.png",
      mainTitle: "Yagiverse Genesis",
      subTitle: "YGGN",
      percentageText1: "80.5%",
      percentageText2: "-10.4%",
    },
    {
      col1avatarPath: "avatarsix.png",
      col3imgPath: "colthreeimgtwo.png",
      col7imgPath: "colsevenimgsixth.png",
      mainTitle: "MetalCore Infantry Genesis",
      subTitle: "MCIG",
      percentageText1: "80.5%",
      percentageText2: "-10.4%",
    },
    {
      col1avatarPath: "avatarseven.png",
      col3imgPath: "colthreeimgone.png",
      col7imgPath: "colsevenimgseventh.png",
      mainTitle: "Art Not Real",
      subTitle: "ANRL",
      percentageText1: "80.5%",
      percentageText2: "-10.4%",
    },
    {
      col1avatarPath: "avatareight.png",
      col3imgPath: "colthreeimgone.png",
      col7imgPath: "colsevenimgeight.png",
      mainTitle: "PG: JIRAVERSE",
      subTitle: "PGJS",
      percentageText1: "80.5%",
      percentageText2: "-10.4%",
    },
    {
      col1avatarPath: "avatarnine.png",
      col3imgPath: "colthreeimgone.png",
      col7imgPath: "colsevenimgnine.png",
      mainTitle: "Tycoon Tigers Club",
      subTitle: "TTCB",
      percentageText1: "80.5%",
      percentageText2: "-10.4%",
    },
    {
      col1avatarPath: "avatartenth.png",
      col3imgPath: "colthreeimgone.png",
      col7imgPath: "colsevenimgtenth.png",
      mainTitle: "Cosmic Trippies",
      subTitle: "CSTS",
      percentageText1: "80.5%",
      percentageText2: "-10.4%",
    },
    {
      col1avatarPath: "avatareleventh.png",
      col3imgPath: "colthreeimgone.png",
      col7imgPath: "colsevenimgeleventh.png",
      mainTitle: "BoredAIClub",
      subTitle: "BAIC",
      percentageText1: "80.5%",
      percentageText2: "-10.4%",
    },
    {
      col1avatarPath: "avatartwelevth.png",
      col3imgPath: "colthreeimgone.png",
      col7imgPath: "colsevenimgtwelevth.png",
      mainTitle: "Moonthers NFT",
      subTitle: "MNFT",
      percentageText1: "80.5%",
      percentageText2: "-10.4%",
    },
    {
      col1avatarPath: "avatarthirteenth.png",
      col3imgPath: "colthreeimgone.png",
      col7imgPath: "colsevenimgthirteenth.png",
      mainTitle: "ThunderBuddiez",
      subTitle: "TDBZ",
      percentageText1: "80.5%",
      percentageText2: "-10.4%",
    },
    {
      col1avatarPath: "avatarfourteenth.png",
      col3imgPath: "colthreeimgone.png",
      col7imgPath: "colsevenimgfourteenth.png",
      mainTitle: "Surf The Kali Yuga 42",
      subTitle: "SK42",
      percentageText1: "80.5%",
      percentageText2: "-10.4%",
    },
    {
      col1avatarPath: "avatarfifteenth.png",
      col3imgPath: "colthreeimgone.png",
      col7imgPath: "colsevenimgtfifteenth.png",
      mainTitle: "0xTheSaudis Official",
      subTitle: "0xSO",
      percentageText1: "80.5%",
      percentageText2: "-10.4%",
    },
    {
      col1avatarPath: "avatarsixteenth.png",
      col3imgPath: "colthreeimgone.png",
      col7imgPath: "colsevenimgsixteenth.png",
      mainTitle: "Superful - Superuser Genesis Pass",
      subTitle: "SSGP",
      percentageText1: "80.5%",
      percentageText2: "-10.4%",
    },
    {
      col1avatarPath: "avatarseventeenth.png",
      col3imgPath: "colthreeimgone.png",
      col7imgPath: "colsevenimgone.png",
      mainTitle: "BozzCatz",
      subTitle: "BZCT",
      percentageText1: "80.5%",
      percentageText2: "-10.4%",
    },
  ]
  const rowsData2 = [
    {
      col1avatarPath: "avatartwo.png",
      col3imgPath: "colthreeimgone.png",
      col7imgPath: "colsevenimgtwo.png",
      mainTitle: "Doge",
      subTitle: "DOGE",
      percentageText1: "70.5%",
      percentageText2: "-10.4%",
    },
    {
      col1avatarPath: "avatarthree.png",
      col3imgPath: "colthreeimgtwo.png",
      col7imgPath: "colsevenimgthree.png",
      mainTitle: "Elon",
      subTitle: "ELON",
      percentageText1: "69.5%",
      percentageText2: "-10.4%",
    },
    {
      col1avatarPath: "avatarfour.png",
      col3imgPath: "colthreeimgthree.png",
      col7imgPath: "colsevenimgfour.png",
      mainTitle: "Bart's Farm Frens",
      subTitle: "BFFS",
      percentageText1: "80.5%",
      percentageText2: "-10.4%",
    },
    {
      col1avatarPath: "avatarfive.png",
      col3imgPath: "colthreeimgtwo.png",
      col7imgPath: "colsevenimgfifth.png",
      mainTitle: "Yagiverse Genesis",
      subTitle: "YGGN",
      percentageText1: "80.5%",
      percentageText2: "-10.4%",
    },
    {
      col1avatarPath: "avatarsix.png",
      col3imgPath: "colthreeimgtwo.png",
      col7imgPath: "colsevenimgsixth.png",
      mainTitle: "MetalCore Infantry Genesis",
      subTitle: "MCIG",
      percentageText1: "80.5%",
      percentageText2: "-10.4%",
    },
    {
      col1avatarPath: "avatarseven.png",
      col3imgPath: "colthreeimgone.png",
      col7imgPath: "colsevenimgseventh.png",
      mainTitle: "Art Not Real",
      subTitle: "ANRL",
      percentageText1: "80.5%",
      percentageText2: "-10.4%",
    },
    {
      col1avatarPath: "avatareight.png",
      col3imgPath: "colthreeimgone.png",
      col7imgPath: "colsevenimgeight.png",
      mainTitle: "PG: JIRAVERSE",
      subTitle: "PGJS",
      percentageText1: "80.5%",
      percentageText2: "-10.4%",
    },
    {
      col1avatarPath: "avatarnine.png",
      col3imgPath: "colthreeimgone.png",
      col7imgPath: "colsevenimgnine.png",
      mainTitle: "Tycoon Tigers Club",
      subTitle: "TTCB",
      percentageText1: "80.5%",
      percentageText2: "-10.4%",
    },
    {
      col1avatarPath: "avatartenth.png",
      col3imgPath: "colthreeimgone.png",
      col7imgPath: "colsevenimgtenth.png",
      mainTitle: "Cosmic Trippies",
      subTitle: "CSTS",
      percentageText1: "80.5%",
      percentageText2: "-10.4%",
    },
    {
      col1avatarPath: "avatareleventh.png",
      col3imgPath: "colthreeimgone.png",
      col7imgPath: "colsevenimgeleventh.png",
      mainTitle: "BoredAIClub",
      subTitle: "BAIC",
      percentageText1: "80.5%",
      percentageText2: "-10.4%",
    },
    {
      col1avatarPath: "avatartwelevth.png",
      col3imgPath: "colthreeimgone.png",
      col7imgPath: "colsevenimgtwelevth.png",
      mainTitle: "Moonthers NFT",
      subTitle: "MNFT",
      percentageText1: "80.5%",
      percentageText2: "-10.4%",
    },
    {
      col1avatarPath: "avatarthirteenth.png",
      col3imgPath: "colthreeimgone.png",
      col7imgPath: "colsevenimgthirteenth.png",
      mainTitle: "ThunderBuddiez",
      subTitle: "TDBZ",
      percentageText1: "80.5%",
      percentageText2: "-10.4%",
    },
    {
      col1avatarPath: "avatarfourteenth.png",
      col3imgPath: "colthreeimgone.png",
      col7imgPath: "colsevenimgfourteenth.png",
      mainTitle: "Surf The Kali Yuga 42",
      subTitle: "SK42",
      percentageText1: "80.5%",
      percentageText2: "-10.4%",
    },
    {
      col1avatarPath: "avatarfifteenth.png",
      col3imgPath: "colthreeimgone.png",
      col7imgPath: "colsevenimgtfifteenth.png",
      mainTitle: "0xTheSaudis Official",
      subTitle: "0xSO",
      percentageText1: "80.5%",
      percentageText2: "-10.4%",
    },
    {
      col1avatarPath: "avatarsixteenth.png",
      col3imgPath: "colthreeimgone.png",
      col7imgPath: "colsevenimgsixteenth.png",
      mainTitle: "Superful - Superuser Genesis Pass",
      subTitle: "SSGP",
      percentageText1: "80.5%",
      percentageText2: "-10.4%",
    },
    {
      col1avatarPath: "avatarseventeenth.png",
      col3imgPath: "colthreeimgone.png",
      col7imgPath: "colsevenimgone.png",
      mainTitle: "BozzCatz",
      subTitle: "BZCT",
      percentageText1: "80.5%",
      percentageText2: "-10.4%",
    },
  ]
  const rowsData3 = [
    {
      col1avatarPath: "avatartwo.png",
      col3imgPath: "colthreeimgone.png",
      col7imgPath: "colsevenimgtwo.png",
      mainTitle: "Doge",
      subTitle: "DOGE",
      percentageText1: "70.5%",
      percentageText2: "-10.4%",
    },
    {
      col1avatarPath: "avatarthree.png",
      col3imgPath: "colthreeimgtwo.png",
      col7imgPath: "colsevenimgthree.png",
      mainTitle: "Elon",
      subTitle: "ELON",
      percentageText1: "69.5%",
      percentageText2: "-10.4%",
    },
    {
      col1avatarPath: "avatarfour.png",
      col3imgPath: "colthreeimgthree.png",
      col7imgPath: "colsevenimgfour.png",
      mainTitle: "Bart's Farm Frens",
      subTitle: "BFFS",
      percentageText1: "80.5%",
      percentageText2: "-10.4%",
    },
    {
      col1avatarPath: "avatarfive.png",
      col3imgPath: "colthreeimgtwo.png",
      col7imgPath: "colsevenimgfifth.png",
      mainTitle: "Yagiverse Genesis",
      subTitle: "YGGN",
      percentageText1: "80.5%",
      percentageText2: "-10.4%",
    },
    {
      col1avatarPath: "avatarsix.png",
      col3imgPath: "colthreeimgtwo.png",
      col7imgPath: "colsevenimgsixth.png",
      mainTitle: "MetalCore Infantry Genesis",
      subTitle: "MCIG",
      percentageText1: "80.5%",
      percentageText2: "-10.4%",
    },
    {
      col1avatarPath: "avatarseven.png",
      col3imgPath: "colthreeimgone.png",
      col7imgPath: "colsevenimgseventh.png",
      mainTitle: "Art Not Real",
      subTitle: "ANRL",
      percentageText1: "80.5%",
      percentageText2: "-10.4%",
    },
    {
      col1avatarPath: "avatareight.png",
      col3imgPath: "colthreeimgone.png",
      col7imgPath: "colsevenimgeight.png",
      mainTitle: "PG: JIRAVERSE",
      subTitle: "PGJS",
      percentageText1: "80.5%",
      percentageText2: "-10.4%",
    },
    {
      col1avatarPath: "avatarnine.png",
      col3imgPath: "colthreeimgone.png",
      col7imgPath: "colsevenimgnine.png",
      mainTitle: "Tycoon Tigers Club",
      subTitle: "TTCB",
      percentageText1: "80.5%",
      percentageText2: "-10.4%",
    },
    {
      col1avatarPath: "avatartenth.png",
      col3imgPath: "colthreeimgone.png",
      col7imgPath: "colsevenimgtenth.png",
      mainTitle: "Cosmic Trippies",
      subTitle: "CSTS",
      percentageText1: "80.5%",
      percentageText2: "-10.4%",
    },
    {
      col1avatarPath: "avatareleventh.png",
      col3imgPath: "colthreeimgone.png",
      col7imgPath: "colsevenimgeleventh.png",
      mainTitle: "BoredAIClub",
      subTitle: "BAIC",
      percentageText1: "80.5%",
      percentageText2: "-10.4%",
    },
    {
      col1avatarPath: "avatartwelevth.png",
      col3imgPath: "colthreeimgone.png",
      col7imgPath: "colsevenimgtwelevth.png",
      mainTitle: "Moonthers NFT",
      subTitle: "MNFT",
      percentageText1: "80.5%",
      percentageText2: "-10.4%",
    },
    {
      col1avatarPath: "avatarthirteenth.png",
      col3imgPath: "colthreeimgone.png",
      col7imgPath: "colsevenimgthirteenth.png",
      mainTitle: "ThunderBuddiez",
      subTitle: "TDBZ",
      percentageText1: "80.5%",
      percentageText2: "-10.4%",
    },
    {
      col1avatarPath: "avatarfourteenth.png",
      col3imgPath: "colthreeimgone.png",
      col7imgPath: "colsevenimgfourteenth.png",
      mainTitle: "Surf The Kali Yuga 42",
      subTitle: "SK42",
      percentageText1: "80.5%",
      percentageText2: "-10.4%",
    },
    {
      col1avatarPath: "avatarfifteenth.png",
      col3imgPath: "colthreeimgone.png",
      col7imgPath: "colsevenimgtfifteenth.png",
      mainTitle: "0xTheSaudis Official",
      subTitle: "0xSO",
      percentageText1: "80.5%",
      percentageText2: "-10.4%",
    },
    {
      col1avatarPath: "avatarsixteenth.png",
      col3imgPath: "colthreeimgone.png",
      col7imgPath: "colsevenimgsixteenth.png",
      mainTitle: "Superful - Superuser Genesis Pass",
      subTitle: "SSGP",
      percentageText1: "80.5%",
      percentageText2: "-10.4%",
    },
    {
      col1avatarPath: "avatarseventeenth.png",
      col3imgPath: "colthreeimgone.png",
      col7imgPath: "colsevenimgone.png",
      mainTitle: "BozzCatz",
      subTitle: "BZCT",
      percentageText1: "80.5%",
      percentageText2: "-10.4%",
    },
  ]

  module.exports = {
    listItemArr1,
    titleText1,
    listItemArr2,
    titleText2,
    listItemArr3,
    titleText3,
    mainContentTitle1,
    mainContentTitle2,
    mainContentTitle3,
    filterButtonOneText,
    filterButtonTwoText,
    filterButtonThree,
    ColsData1,
    ColsData2,
    ColsData3,
    rowsData1,
    rowsData2,
    rowsData3,
  }


  
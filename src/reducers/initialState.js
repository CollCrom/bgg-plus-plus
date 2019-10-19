export default {
    openTabs: {
        playingTime: false,
        suggestPlayers: false,
        reviewScore: false,
        numReviewers: false,
        complexity: false,
        numPlayers: false,
        categories: false,
        ageRange: false,
        designer: false,
        artists: false,
        publisher: false,
    },
    leftNavOpen: true,

    playingTime: [1, 240], //in minutes
    complexity: [0, 5],
    ageRange: [1, 99],
    averageReviewScore: 0,
    numberOfReviewers: 0,
    categories: [],
    designer: [],
    artists: [],
    publisher: [],
    suggestPlayers: {
        min: 1,
        max: 99
    },
    numberOfPlayers: {
        min: 1,
        max: 99
    }
};

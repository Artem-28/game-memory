export default {
    namespaced: true,
    state: {
        numberOfCell: 0,
        cards: [
            {
                id: 1,
                externalId: '1',
                frontSide: '1.svg',
                backSide: 'back.svg',
            },
            {
                id: 2,
                externalId: '2',
                frontSide: '2.svg',
                backSide: 'back.svg',
            },
            {
                id: 3,
                externalId: '3',
                frontSide: '3.svg',
                backSide: 'back.svg',
            },
            {
                id: 4,
                externalId: '4',
                frontSide: '4.svg',
                backSide: 'back.svg',
            },
            {
                id: 5,
                externalId: '5',
                frontSide: '5.svg',
                backSide: 'back.svg',
            },
            {
                id: 6,
                externalId: '6',
                frontSide: '6.svg',
                backSide: 'back.svg',
            },
            {
                id: 7,
                externalId: '7',
                frontSide: '7.svg',
                backSide: 'back.svg',
            },
            {
                id: 8,
                externalId: '8',
                frontSide: '8.svg',
                backSide: 'back.svg',
            },
            {
                id: 9,
                externalId: '9',
                frontSide: '9.svg',
                backSide: 'back.svg',
            },
            {
                id: 10,
                externalId: '10',
                frontSide: '10.svg',
                backSide: 'back.svg',
            },
            {
                id: 11,
                externalId: '11',
                frontSide: '11.svg',
                backSide: 'back.svg',
            },
            {
                id: 12,
                externalId: '12',
                frontSide: '12.svg',
                backSide: 'back.svg',
            },
            {
                id: 13,
                externalId: '13',
                frontSide: '13.svg',
                backSide: 'back.svg',
            },
            {
                id: 14,
                externalId: '14',
                frontSide: '14.svg',
                backSide: 'back.svg',
            },
            {
                id: 15,
                externalId: '15',
                frontSide: '15.svg',
                backSide: 'back.svg',
            },
            {
                id: 16,
                externalId: '16',
                frontSide: '16.svg',
                backSide: 'back.svg',
            },
            {
                id: 17,
                externalId: '17',
                frontSide: '17.svg',
                backSide: 'back.svg',
            },
            {
                id: 18,
                externalId: '18',
                frontSide: '18.svg',
                backSide: 'back.svg',
            },
        ],
    },
    mutations: {
        generatingGameCards: (state) => {
            const generateCards = [
                ...state.cards,
                ...state.cards.map( card => {
                    return  {...card, externalId: state.cards.length + card.externalId}
                })
            ].sort(() => Math.round(Math.random() * 100) - 50);
            delete generateCards[8]
            console.log(generateCards)
            state.cards = generateCards
        },

        countingNumberOfCell: (state) => {
            state.numberOfCell = state.cards.length
        }
    },
}

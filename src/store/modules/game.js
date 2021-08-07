const cards = [
        {
            id: 1,
            externalId: '1',
            frontSide: '1.svg',
            backSide: 'back.svg',
            flip: true
        },
        {
            id: 2,
            externalId: '2',
            frontSide: '2.svg',
            backSide: 'back.svg',
            flip: true
        },
        {
            id: 3,
            externalId: '3',
            frontSide: '3.svg',
            backSide: 'back.svg',
            flip: true
        },
        {
            id: 4,
            externalId: '4',
            frontSide: '4.svg',
            backSide: 'back.svg',
            flip: true
        },
        {
            id: 5,
            externalId: '5',
            frontSide: '5.svg',
            backSide: 'back.svg',
            flip: true
        },
        {
            id: 6,
            externalId: '6',
            frontSide: '6.svg',
            backSide: 'back.svg',
            flip: true
        },
        {
            id: 7,
            externalId: '7',
            frontSide: '7.svg',
            backSide: 'back.svg',
            flip: true
        },
        {
            id: 8,
            externalId: '8',
            frontSide: '8.svg',
            backSide: 'back.svg',
            flip: true
        },
        {
            id: 9,
            externalId: '9',
            frontSide: '9.svg',
            backSide: 'back.svg',
            flip: true
        },
        {
            id: 10,
            externalId: '10',
            frontSide: '10.svg',
            backSide: 'back.svg',
            flip: true
        },
        {
            id: 11,
            externalId: '11',
            frontSide: '11.svg',
            backSide: 'back.svg',
            flip: true
        },
        {
            id: 12,
            externalId: '12',
            frontSide: '12.svg',
            backSide: 'back.svg',
            flip: true
        },
        {
            id: 13,
            externalId: '13',
            frontSide: '13.svg',
            backSide: 'back.svg',
            flip: true
        },
        {
            id: 14,
            externalId: '14',
            frontSide: '14.svg',
            backSide: 'back.svg',
            flip: true
        },
        {
            id: 15,
            externalId: '15',
            frontSide: '15.svg',
            backSide: 'back.svg',
            flip: true
        },
        {
            id: 16,
            externalId: '16',
            frontSide: '16.svg',
            backSide: 'back.svg',
            flip: true
        },
        {
            id: 17,
            externalId: '17',
            frontSide: '17.svg',
            backSide: 'back.svg',
            flip: true
        },
        {
            id: 18,
            externalId: '18',
            frontSide: '18.svg',
            backSide: 'back.svg',
            flip: true
        },
    ]
export default {
    namespaced: true,
    state: {
        start: false,
        numberOfCell: 36,
        cards: []
    },
    mutations: {
        generatingGameCards: (state) => {
            const generateCards = []
            cards.map(card => {
                generateCards.push({...card})
                generateCards.push({...card, externalId: state.cards.length + card.externalId})
            })
            state.cards = generateCards.sort(() => Math.round(Math.random() * 100) - 50)
        },

        /*countingNumberOfCell: (state) => {
            state.numberOfCell = state.cards.length
        },*/

        flipCard: (state, payload) => {
            state.cards = state.cards.map(card => {
                if (card === payload) {
                    card.flip = !card.flip
                }
                return card
            })
        },

        deleteCards: (state, payload) => {
            state.cards = state.cards.map((card, index) => {
                if (card === payload.firstCard || card === payload.secondCard) {
                    delete state.cards[index]
                    return
                }
                return card;
            })
        },
        resetGame: (state) => {
            state.cards = [];
        },

        toggleStartGame: state => {
            state.start = !state.start
        },
    },
    actions: {
        restartGame(context) {
            context.commit("resetGame");
            /*context.commit("generatingGameCards");*/
           /* context.commit("countingNumberOfCell")*/
        }
    }
}

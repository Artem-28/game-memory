import {displayUnitOfTime, incrementUnitOfTime} from '../../helpers/common'
export default {
    namespaced: true,
    state: {
        steps: 0,
        points: 0,
        timer: {
            second: 0,
            minutes: 0
        },
        successInterval: {
            second: 0,
            steps: 0,
        }
    },
    getters: {
        timer: state => `${displayUnitOfTime(state.timer.minutes)} : ${displayUnitOfTime(state.timer.second)}`,
        points: state => {

        }
    },
    mutations: {
        updateTime: state => {
            state.timer.second = incrementUnitOfTime(state.timer.second);
            state.successInterval.second ++
            if (!state.timer.second) {
                state.timer.minutes = incrementUnitOfTime(state.timer.minutes);
            }
        },
        resetCounter: state => {
            state.timer.second = 0
            state.timer.minutes = 0
            state.steps = 0
            state.points = 0
            state.successInterval.second = 0
            state.successInterval.steps = 0
        },
        incrementSteps: state => {
            state.steps++
            state.successInterval.steps ++
        },
        restartSuccessInterval: state => {
            state.successInterval.steps = 0
            state.successInterval.second = 0
        },
        updatePoints: state => {
            const maxPoints = 100000
            const steps = state.successInterval.steps
            const second = state.successInterval.second
            const points = Math.round(maxPoints / second / steps)
            state.successInterval.steps = 0
            state.successInterval.second = 0
            state.points += points;
        }

    }
}

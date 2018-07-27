import { types } from '../actions';
import { Animated } from 'react-native';

const initialState = {
    volume: 200,
    result: 0,
    goal: 2000,
    history: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case types.SET_GOAL:
          const newGoal = state.goal === 2000 ? 3000 : 2000;

          return {
            ...state,
            goal: newGoal,
            filling: state.result / newGoal * 100
          };
        case types.SET_RESULT:
            const newRes = state.volume + action.result;

            return {
                ...state,
                result: newRes,
                filling: newRes / state.goal * 100,
                history: [ ...state.history, newRes ]
            };
        case types.RESET_RESULT:
            const { history } = state;

            history.pop();
            const historyLength = history.length;
            const prevRes = history[historyLength - 1] || 0;

            return {
                ...state,
                result: prevRes,
                history,
                filling: prevRes / state.goal * 100
            }
        default:
            return state;
    }
}

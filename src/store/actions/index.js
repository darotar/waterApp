export const types = {
    SET_GOAL: Symbol('SET_GOAL'),
    SET_RESULT: Symbol('SET_RESULT'),
    RESET_RESULT: Symbol('RESET_RESULT')
}

export const setGoal = () => {
    return {
        type: types.SET_GOAL
    }
}

export const setResult = (result) => {
    return {
        type: types.SET_RESULT,
        result
    }
}

export const resetResult = () => {
    return {
        type: types.RESET_RESULT
    }
}

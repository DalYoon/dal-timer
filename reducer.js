// import

// Actions

const START_TIMER = 'START_TIMER';
const RESTART_TIMER = 'RESTART_TIMER';
const ADD_SECOND = 'ADD_SECOND';

// Action Creators

const startTimer = () => {
    return {
        type: START_TIMER
    };
}

const restartTimer = () => {
    return {
        type: RESTART_TIMER
    };
}

const addSecond = () => {
    return {
        type: ADD_SECOND
    };
}

// Reducer
const TIMER_DURATION = 1500;

const initialState = {
    isPlaying: false,
    elapcedTime: 0,
    timerDuration: TIMER_DURATION
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case START_TIMER:
            return applyStartTimer(state);
        case RESTART_TIMER:
            return applyRestartTimer(state);
        case ADD_SECOND:
            return applyAddSecond(state);
        default:
            return state;
    }
}

// Reduver Functions
const applyStartTimer = state => {
    return {
        ...state,
        isPlaying: true
    };
};

const applyRestartTimer = state => {
    return {
        ...state,
        isPlaying: false,
        elapcedTime: 0
    };
};

const applyAddSecond = state => {
    if(state.elapcedTime < TIMER_DURATION) {
        return {
            ...state,
            elapcedTime: state.elapcedTime + 1
        };
    } else {
        return {
            ...state,
            isPlaying: false,
            elapcedTime: 0,
        };
    }
};

// Export Action Creators

const actionCreators = {
    startTimer,
    restartTimer,
    addSecond
};

export { actionCreators };

// Export Reducer

export default reducer;
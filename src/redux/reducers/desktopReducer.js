import * as actionTypes from '../actionTypes';

const initialState = {
    desktopStack: [],
    topPosition: false
};

const desktopReducer = (state = initialState, action) => {
    switch(action.type){
        case(actionTypes.OPENFOLDER):
            return {...state, desktopStack: action.value};
        case(actionTypes.SETPOSITION):
            return {...state, topPosition: action.value}
    }

    return state;
};

export default desktopReducer;
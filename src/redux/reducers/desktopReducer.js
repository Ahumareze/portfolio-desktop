import * as actionTypes from '../actionTypes';

const initialState = {
    desktopStack: []
};

const desktopReducer = (state = initialState, actions) => {
    switch(actions.types){
        case(actionTypes.OPENFOLDER):
            return {...state, desktopStack: actions.value};
    }

    return state;
};

export default desktopReducer;
import * as actionTypes from '../actionTypes';

export const openFolder = (value) => {
    return(dispatch) => {
        dispatch(updateStack(value))
    }
};

const updateStack = (value) => {
    return{
        type: actionTypes.OPENFOLDER,
        value
    }
};

export const setTopPosition = (value) => {
    return{
        type: actionTypes.SETPOSITION,
        value
    }
}
import { DECREMENT_COUNTER, INCREMENT_COUNTER } from '../constants';

export const incrementCounter = (dispatch) => () => {
    dispatch({
        type: INCREMENT_COUNTER,
    });
};

export const decrementCounter = (dispatch) => () => {
    dispatch({
        type: DECREMENT_COUNTER,
    });
};

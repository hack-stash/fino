import * as types from '../../constants/Auth/index';

const initialState = {
    isAuthorized: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_IS_AUTHORIZED:
            return {
                ...state,
                isAuthorized: action.payload
            };


        default:
            return state;
    }
};

export default reducer;
const users = (state = { token: '' }, action) => {

    switch (action.type) {
        case 'LOG_IN_SUCCESS':
            return { token: action.token };
        case 'LOG_OUT_SUCCESS':
            return { token: '' };
        case 'SIGNUP_SUCESS':
            return { token: action.token };
        case 'LOG_IN_FAILED':
        case 'SIGNUP_FAILED':
        case 'LOG_OUT_FAILED':
        default:
            return state;
    }


};

export default users;

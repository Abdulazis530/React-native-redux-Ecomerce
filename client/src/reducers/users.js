const users = (state = { token: '' }, action) => {

    switch (action.type) {
        case 'LOGIN_SUCCESS':
            console.log('INSIDE user reducer:', action.token)
            console.log(action.token)
            return { token: action.token };
        case 'LOG_OUT_SUCCESS':
            console.log('inside user reducer succes logout:', state)
            return { token: '' };
        case 'SIGNUP_SUCCESS':
            return { token: action.token };
        case 'LOGIN_FAILED':
            console.log('LOGIN FAILDE =', state)
            return state
        case 'SIGNUP_FAILED':
        case 'LOG_OUT_FAILED':
        default:
            return state;
    }


};

export default users;

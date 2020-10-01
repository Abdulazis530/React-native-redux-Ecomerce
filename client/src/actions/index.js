
/* Login */
export const logIn = (email, password, navigation) => ({
    type: 'LOGIN',
    email,
    password,
    navigation,
});

export const logInSuccess = (token) => ({
    type: 'LOG_IN_SUCCESS',
    token
});
export const logInFail = () => ({
    type: 'LOG_IN_FAILED',
});

/*end of login */


/* Sign Up */
export const signUpSuccess = response => ({
    type: 'SIGNUP_SUCESS',
    response,
});

export const signUp = data => ({
    type: 'SIGNUP',
    data,
});

export const signUpFailed = response => ({
    type: 'SIGNUP_FAILED',
    response,
});

/*end of Sign Up */

/******** Log Out ************/
export const logOut = (token) => ({
    type: 'LOG_OUT', token,
});
export const logOutSuccess = () => ({
    type: 'LOG_OUT_SUCCESS',
});
export const logOutFail = () => ({
    type: 'LOG_OUT_FAILED',
});


// start load adds data
export const loadProductsSuccess = (products) => ({
    type: 'LOAD_PRODUCTS_SUCCESS',
    products,
});
export const loadProductsFailure = () => ({
    type: 'LOAD_PRODUCTS_FAILURE',
});

export const loadProducts = (page, limit) => ({
    type: 'LOAD_PRODUCTS', page, limit,
});

export const resetProducts = () => ({
    type: 'RESET_PRODUCTS',
});
// end load adds data

















// start post chat data

export const postChatSuccess = (chats) => ({
    type: 'POST_CHAT_SUCCESS',
    chats,
});

export const postChatFailure = (id) => ({
    type: 'POST_CHAT_FAILURE', id,
});

export const postChatRedux = (id, name, message) => ({
    type: 'POST_CHAT', id, name, message,
});


export const postChat = (name, message) => ({
    type: 'ADD_CHAT', name, message,
});

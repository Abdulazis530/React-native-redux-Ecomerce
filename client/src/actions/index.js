
/* Login */
export const logIn = (email, password, navigation) => ({
    type: 'LOGIN',
    email,
    password,
    navigation,
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


/******** Log Out ************/
export const logOut = (token) => ({
    type: 'LOG_OUT', token
})

















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

// start delete chat data

export const deleteChatRedux = (id) => ({
    type: 'DELETE_CHAT', id,
});

export const deleteChatSuccess = (chats) => ({
    type: 'DELETE_CHAT_SUCCESS',
    chats,
});

export const deleteChatFailure = () => ({
    type: 'DELETE_CHAT_FAILURE',
});


export const deleteChat = (id) => ({
    type: 'REMOVE_CHAT', id,
});


// end delete chat data

export const resendChatSuccess = (id) => ({
    type: 'RESEND_CHAT_SUCCESS', id,
});

export const resendChat = (id, name, message) => ({
    type: 'RESEND_CHAT', id, name, message,
});


/* Login */
export const logIn = (email, password, navigation) => ({
    type: 'LOGIN',
    email,
    password,
    navigation,
});

/*end of login */


/* Sign Up */

export const signUp = (email, password, retypepassword, navigation) => ({
    type: 'SIGNUP',
    email,
    password,
    retypepassword,
    navigation,
});



/*end of Sign Up */

/******** Log Out ************/
export const logOut = (token, cb) => ({
    type: 'LOG_OUT', token, cb
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

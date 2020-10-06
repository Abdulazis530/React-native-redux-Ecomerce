
/* Login */
export const logInSuccess = (token) => ({
    type: 'LOGIN_SUCCESS',
    token
})
export const logIn = (email, password, navigation) => ({
    type: 'LOGIN',
    email,
    password,
    navigation,
});
export const logInFail = () => ({
    type: 'LOGIN_FAILED',

});
/*end of login */

/* Sign Up */
export const signUpSuccess = (token) => ({
    type: 'SIGNUP_SUCCESS',
    token,
});
export const signUp = (email, password, retypepassword, navigation) => ({
    type: 'SIGNUP',
    email,
    password,
    retypepassword,
    navigation,
});
export const signUpFail = () => ({
    type: 'SIGNUP_FAILED',
});
/*end of Sign Up */

/******** Log Out ************/
export const logOutSuccess = () => ({
    type: 'LOG_OUT_SUCCESS',
});

export const logOut = (token) => ({
    type: 'LOG_OUT', token,
});

export const logOutFail = () => ({
    type: 'LOG_OUT_FAILED'
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

// export const addProductSuccess = (product) => ({
//     type: 'ADD_PRODUCT_SUCCESS',
//     product,
// });

export const addProduct = (newProduct, token, navigation) => ({
    type: 'ADD_PRODUCT',
    newProduct,
    token,
    navigation,
});


/*Handiling image */

export const addImage = (response) => ({
    type: 'ADD_IMAGE',
    response,
});

export const cancelAddImage = (image) => ({
    type: 'CANCEL_ADD_IMAGE',
    image,
});
export const resetImage = () => ({
    type: 'RESET_IMAGE',
});

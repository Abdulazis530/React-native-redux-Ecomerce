const products = (state = { totalPage: 0, data: [] }, action) => {
    switch (action.type) {
        case 'LOAD_PRODUCTS_SUCCESS':
            return {
                totalPage: action.products.totalPage,
                data: [...state.data, ...action.products.data],
            };
        case 'RESET_PRODUCTS':
            return { totalPage: 0, data: [] };
        case 'LOAD_PRODUCTS_FAILURE':
        default:
            return state;
    }
};

export default products;

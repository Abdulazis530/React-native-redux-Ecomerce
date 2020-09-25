const SERVER = 'http://192.168.1.12:3001/';

const products = (state = { totalPage: 0, data: [] }, action) => {
    switch (action.type) {
        case 'LOAD_PRODUCTS_SUCCESS':
            console.log('INSIDE LOAD_SUCCES REDUCER');

            const modifiedData = action.products.data.map(item => {
                const imagesWithDirection = item.images.map(image => `${SERVER}images/${image}`);
                return {
                    ...item,
                    images: imagesWithDirection,
                };
            });

            return {
                totalPage: action.products.totalPage,
                data: [...state.data, ...modifiedData],
            };
        case 'RESET_PRODUCTS':
            return { totalPage: 0, data: [] };
        case 'LOAD_PRODUCTS_FAILURE':
        default:
            return state;
    }
};

export default products;

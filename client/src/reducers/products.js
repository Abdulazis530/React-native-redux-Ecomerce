const SERVER = 'http://192.168.1.8:3001/';
import numToRupiah from '../helpers/rupiah';

const products = (state = { totalPage: 0, data: [] }, action) => {
    switch (action.type) {
        case 'LOAD_PRODUCTS_SUCCESS':
            const modifiedData = action.products.data.map(item => {
                const imagesWithDirection = item.images.map(image => `${SERVER}images/${image}`);
                return {
                    ...item,
                    images: imagesWithDirection,
                    price: numToRupiah(item.price),
                };
            });
            return {
                totalPage: action.products.totalPage,
                data: [...state.data, ...modifiedData],
            };
        case 'RESET_PRODUCTS':
            return { totalPage: 0, data: [] };
        case 'ADD_PRODUCT_SUCCESS':
            const imagesWidthDirection = action.product.data.images(image => `${SERVER}images/${image}`);
            action.product.data.images = imagesWidthDirection
            return {
                data: [
                    action.product.data,
                    ...state.data,
                ],
                totalPage: state.totalPage,
            };
        case 'LOAD_PRODUCTS_FAILURE':
        default:
            return state;
    }
};

export default products;

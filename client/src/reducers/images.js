const images = (state = { productImages: [] }, action) => {
    switch (action.type) {
        case 'ADD_IMAGE':
            console.log('test')

            return {
                productImages: [...state.productImages, action.response],
            };
        case 'CANCEL_ADD_IMAGE':
            return {
                productImages: [...state.productImages.filter(productImage => productImage.uri !== action.image.uri)],
            };
        default:
            return state;
    }

}
export default images;

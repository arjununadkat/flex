const initState = {
    products: [
        { id: '1', title: 'Flex-CRM', content: 'I am flex1' },
        { id: '2', title: 'Flex-Stock', content: 'I am flex2' },
        { id: '3', title: 'Flex-Me', content: 'I am flex3' }
    ]
};
const productReducer = (state = initState, action: any) => {
    switch (action.type) {
        case 'CREATE_PRODUCT':
            console.log('created product', action.product)
            return state;
        case 'CREATE_PRODUCT_ERROR':
            console.log('create product error', action.err)
            return state;
        case 'UPDATE_PRODUCT':
            console.log('updated product', action.product)
            return state;
        case 'UPDATE_PRODUCT_ERROR':
            console.log('update product failed', action.err)
            return state;
        case 'DELETED_PRODUCT':
            console.log('deleted product')
            return state;
        case 'DELETED_PRODUCT_ERROR':
            console.log('delete product failed', action.err)
            return state;
        default:
            return state;
    }
}

export default productReducer;
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
            console.log('created project', action.project)
            return state;
        case 'CREATE_PRODUCT_ERROR':
            console.log('create project error', action.err)
            return state;
        default:
            return state;
    }
}

export default productReducer;
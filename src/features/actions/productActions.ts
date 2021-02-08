export const createProduct = (product: any) => {
    return (dispatch: (arg0: { type: string; product?: any; msg?: any; }) => void, getState: any, { getFirebase, getFirestore }: any) => {
        //make async call to database
        const firestore = getFirestore();
        firestore.collection("Products").add({
            ...product
        }).then(() => {
            dispatch({ type: "CREATE_PRODUCT", product });
        }).catch((msg: any) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', msg });
        });

    }
}
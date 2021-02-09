import { iProduct } from "../../global";

export const createProduct = (product: iProduct) => {
    return (dispatch: (arg0: { type: string; product?: any; msg?: any; }) => void, getState: any, { getFirestore }: any) => {
        //make async call to database
        const firestore = getFirestore();
        firestore.collection("Products").add({
            ...product
        }).then(() => {
            dispatch({ type: "CREATE_PRODUCT", product });
        }).catch((msg: any) => {
            dispatch({ type: 'CREATE_PRODUCT_ERROR', msg });
        });

    }
}

export const updateProduct = (product: iProduct) => {
    return (dispatch: (arg0: { type: string; product?: iProduct; msg?: any; }) => void, getState: any, { getFirestore }: any) => {
        const firestore = getFirestore();
        firestore.collection("Products").doc(product.id).set({
            ...product
        }).then(() => {
            dispatch({ type: "UPDATE_PRODUCT", product });
        }).catch((msg: any) => {
            dispatch({ type: 'UPDATE_PRODUCT_ERROR', msg });
        });
    }
}
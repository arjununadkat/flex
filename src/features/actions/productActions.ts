import { iProduct } from "../../global";

export const createProduct = (product: iProduct) => {
    return (dispatch: (arg0: { type: string; product?: any; msg?: any; }) => void, getState: any, { getFirestore }: any) => {
        //make async call to database
        const firestore = getFirestore();
        firestore.collection("Products").doc(product.id).set({
            ...product
        }).then(() => {
            dispatch({ type: "CREATE_PRODUCT", product });

        }).catch((msg: any) => {

            dispatch({ type: 'CREATE_PRODUCT_ERROR', msg });
        });

    }
}

export const updateProduct = (product: iProduct, props: any) => {
    return (dispatch: (arg0: { type: string; product?: iProduct; msg?: any; }) => void, getState: any, { getFirestore }: any) => {
        const firestore = getFirestore();
        firestore.collection("Products").doc(product.id).set({
            ...product
        }).then(() => {
            dispatch({ type: "UPDATE_PRODUCT", product });
            props.history.push('/admin/manage');
        }).catch((msg: any) => {
            dispatch({ type: 'UPDATE_PRODUCT_ERROR', msg });
        });
    }
}

export const deleteProduct = (product: iProduct, addToast: any) => {
    return (dispatch: (arg0: { type: string; product?: iProduct; msg?: any; }) => void, getState: any, { getFirestore }: any) => {
        const firestore = getFirestore();
        firestore.collection("Products").doc(product.id).delete().then(() => {
            console.log("Document successfully deleted!");
            dispatch({ type: "DELETED_PRODUCT" });
            addToast("Product " + product.product + " has been deleted!", { appearance: 'success', autoDismiss: true });
        }).catch((err: any) => {
            addToast("Failed to delete " + product.product, { appearance: 'error', autoDismiss: true })
            console.error("Error removing document: ", err);
            dispatch({ type: 'DELETE_PRODUCT_ERROR' });
        });
    }
}
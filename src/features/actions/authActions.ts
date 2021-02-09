export const signIn = (credentials: { email: string; password: string; }) => {
    return (dispatch: (arg0: { type: string; err?: any; }) => void, getState: any, { getFirebase }: any) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' })
        }).catch((err: any) => {
            dispatch({ type: 'LOGIN_SUCCESS', err })
        })
    }
}

export const signOut = () => {
    return (dispatch: (arg0: { type: string; }) => void, getState: any, { getFirebase }: any) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS' })
        });
    }
}
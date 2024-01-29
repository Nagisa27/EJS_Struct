import login from "../componentes/login/login/login"

export const emailandPasswordLogin = async(email, password) => {
    await signInWithEmailandPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user
        dispatch(login(user.uid, user.displayName))
    }).catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
    })
}

export const login = (uid, displayName) => {
    return{
        type: types.login,
        payload:{
            uid,
            displayName
        }
    }
}
import { auth, provider } from "../firebase";


//signin with google
export const signInWithGoogle = async () => {
    let user;

   await auth.signInWithPopup(provider)
    .then((res) => {
        console.log(res.user);

        user = res.user;
    }).catch((error) => {
        console.log(error.message);
    })

    return user;
}

//logout of account
export const logoutOfAccount = async () => {
    let logoutSuccess;

    await auth.signOut()
    .then(() => {
        logoutSuccess = true;
    }).catch((error) => {
        console.log(error.message);
    })

}
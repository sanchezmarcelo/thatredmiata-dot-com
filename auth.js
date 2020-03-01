auth.onAuthStateChanged(user => {
    if(user){
        console.log('User logged in.');
    }else{
        console.log("User logged out.");
    }
});
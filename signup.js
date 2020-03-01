const signUp = document.querySelector('.formSignUp');
signUp.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = signUp['inputEmail'].value;
    const password = signUp['inputPassword'].value;
    const confirmPassword = signUp['inputConfirmPassword'].value;

    if(checkForPasswordMatch() == false){
        console.log("method returned false");
        signUp.querySelector('.passwordMismatch').innerHTML = "Passwords do not match."
    }else{
        console.log("method returned true");
        signUp.querySelector('.passwordMismatch').innerHTML = ""
        auth.createUserWithEmailAndPassword(email, password).then(cred => {
            console.log(cred);
            signUp.reset();
            signUp.querySelector('.error').innerHTML = '';
            window.location.href ="account.html"
        }).catch(err => {
            signUp.querySelector('.error').innerHTML = err.message;
        })
    }

    
});

function checkForPasswordMatch(){
    var password = $("#inputPassword").val();
    var confirmPassword = $('#inputConfirmPassword').val();

    if(password != confirmPassword){
        return false;
    }else{    
        return true;
    }
}







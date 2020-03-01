const login = document.querySelector('.formSignIn');
login.addEventListener('submit', (event) =>{
    event.preventDefault();

    const email = login['inputEmail'].value;
    const password = login['inputPassword'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred =>{
        console.log(cred)
        login.reset();
        login.querySelector('.error').innerHTML = "";
        window.location.href ="account.html"
    }).catch(err =>{
        login.querySelector('.error').innerHTML = err.message;
    })
})
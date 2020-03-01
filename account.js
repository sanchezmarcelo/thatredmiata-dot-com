const signOut = document.querySelector('.signOutButton');
signOut.addEventListener('click', (event) =>{
    event.preventDefault();
    auth.signOut().then((console.log('user signed out')));
    window.location.href ="index.html"
});
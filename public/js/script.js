const searchBox = document.querySelector('.search-box');
const searchIcon = document.querySelector('#search-icon');

searchIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    searchBox.style.display = 'flex';
    searchBox.classList.add('appear');
});
document.addEventListener('click', (e) => {
    if (!searchBox.contains(e.target) && e.target !== searchIcon) {
        searchBox.style.display = 'none';
        searchBox.classList.remove('appear');
    }      
});


// login and sign in

const loginBtn = document.querySelectorAll('.login-btn');
const signBtn = document.querySelectorAll('.sign-btn');

const loginCard = document.querySelector('.login-box');
const signCard = document.querySelector('.signup-box');

const loginOverlay = document.querySelector('.login-container');
const signOverlay = document.querySelector('.signup-container');

loginBtn.forEach(el => {
    el.addEventListener('click', (e) => {
        e.stopPropagation();
        loginOverlay.style.display = 'flex';
    });
});

signBtn.forEach(el => {
    el.addEventListener('click', (e) => {
        e.stopPropagation();
        signOverlay.style.display = 'flex';
    });
});

loginOverlay.addEventListener('click', (e) => {
    if(!loginCard.contains(e.target))
        loginOverlay.style.display = 'none';
});
signOverlay.addEventListener('click', (e) => {
    if(!signCard.contains(e.target))
        signOverlay.style.display = 'none';
});

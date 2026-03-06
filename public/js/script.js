const searchBox = document.querySelector('.search-box');
const searchIcon = document.querySelector('#search-icon');

searchIcon.addEventListener('click', (e) => 
{
    e.stopPropagation();
    searchBox.style.display = 'flex';
});
document.addEventListener('click', (e) =>
{
    if (!searchBox.contains(e.target) && e.target !== searchIcon)
        searchBox.style.display = 'none';
});

const homeBtn = document.querySelector('#home');
const aboutBtn = document.querySelector('#about');
const linksBtn = document.querySelector('#links');

homeBtn.addEventListener('click', function () 
{
    // aboutBtn.classList.remove('active');
    // linksBtn.classList.remove('active');
    homeBtn.classList.add('active');
});

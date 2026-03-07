const searchBox = document.querySelector('.search-box');
const searchIcon = document.querySelector('#search-icon');

searchIcon.addEventListener('click', (e) => 
{
    e.stopPropagation();
    searchBox.style.display = 'flex';
    searchBox.classList.add('appear');
});
document.addEventListener('click', (e) =>
{
    if (!searchBox.contains(e.target) && e.target !== searchIcon)
    {
        searchBox.style.display = 'none';
        searchBox.classList.remove('appear');
    }      
});


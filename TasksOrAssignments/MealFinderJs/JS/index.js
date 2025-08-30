const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const closeMenuButton = document.getElementById('closeMenuButton');

hamburger.addEventListener('click', () => {
    menu.style.display = 'flex';
    menu.style.flexDirection = 'column';

    document.addEventListener('click', function (event) {
        if (!hamburger.contains(event.target) && !menu.contains(event.target)) {
        menu.style.display = 'none';
        }
    });
});

closeMenuButton.addEventListener('click', (e) => {
    e.stopPropagation();
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    }
})


async function navitems() {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    const data = await response.json();

    const menu = document.getElementById('navRedirect');

    localStorage.setItem('mealCategories', JSON.stringify(data.categories));

    data.categories.forEach(e => {
        menu.innerHTML += `
        <a href="../HTML/meals.html" class="listitems" data-category="${e.strCategoryDescription}" data-name="${e.strCategory}">${e.strCategory}</a>
        `;
    });

    const listitems = document.querySelectorAll('.listitems');
    listitems.forEach(e => {
        e.addEventListener('click', () => {
            const category = e.getAttribute('data-category');
            const name = e.getAttribute('data-name');
            console.log(category);
            console.log(name);
            localStorage.setItem('selectedCategory', category);
            localStorage.setItem('selectedCategoryName', name);
        })
    })
    
}

navitems();

async function fetchitems() {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    const data = await response.json();

    const categories = document.getElementById('categories');

    localStorage.setItem('mealCategories', JSON.stringify(data.categories));

    data.categories.forEach(e => {
        categories.innerHTML += `
        <a href="../HTML/meals.html" class="card" data-category="${e.strCategoryDescription}" data-name="${e.strCategory}">
            <img src="${e.strCategoryThumb}" alt="${e.strCategory}">
            <span class="label">${e.strCategory}</span>
        </a>
        `;
    });

    const cards = document.querySelectorAll('.card');
    cards.forEach(e => {
        e.addEventListener('click', () => {
            const category = e.getAttribute('data-category');
            const name = e.getAttribute('data-name');
            console.log(category);
            console.log(name);
            localStorage.setItem('selectedCategory', category);
            localStorage.setItem('selectedCategoryName', name);
        })
    })
}

fetchitems();


const searchbar = document.getElementById('searchbar');
const itemSearch = document.getElementById('itemSearch');
const mealhead = document.querySelector('.mealhead');
mealhead.style.display = 'none';

let itemname = null;

itemSearch.addEventListener('change', (e) => {
    console.log(e.target.value);
    itemname = e.target.value;
})

let fetchcategoryitem = async (foodName) => {
    const items = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
    const data = await items.json();

    const categories = document.getElementById('mealcard');
    categories.innerHTML = '';
    mealhead.style.display = 'block';

    data.meals.forEach(e => {
        categories.innerHTML += `
        <a href="../HTML/item.html" class="card" data-id="${e.idMeal}">
            <img src="${e.strMealThumb}" alt="${e.strCategory}">
            <span class="label">${e.strCategory}</span>
        </a>
        `
    });

    const cards = document.querySelectorAll('.card');
    cards.forEach(e => {
        e.addEventListener('click', () => {
            const id = e.getAttribute('data-id');
            console.log(id);
            localStorage.setItem('idofmeal', id);
        })
    })

}


searchbar.addEventListener('click', () => {
    if (itemname != null) {
        fetchcategoryitem(itemname);
    }
})

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

document.addEventListener('DOMContentLoaded', () => {
    const categoryname = localStorage.getItem('selectedCategoryName');
    console.log(categoryname);
    const categorydesc = localStorage.getItem('selectedCategory');
    console.log(categorydesc);
    const seccategorybox = document.querySelectorAll('.category-box');
    seccategorybox.forEach(e => {
        e.innerHTML = `
        <h2>${categoryname}</h2>
        <p>${categorydesc}</p>
        `
    });

    let mealitems = async (foodName) => {
        const items = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${foodName}`)
        const data = await items.json();

        console.log(data);

        const grid = document.querySelector('.grid');
        data.meals.forEach(e => {
            grid.innerHTML += `
                <div class="meal-card">
                    <a href="../HTML/item.html" class="card" data-id=${e.idMeal}>
                    <img src="${e.strMealThumb}" alt="${e.strMeal}">
                    <p>${e.strMeal}</p>
                    </a>
                </div>
            `
        })

        const cards = document.querySelectorAll('.card');
        cards.forEach(e => {
            e.addEventListener('click', () => {
                const id = e.getAttribute('data-id');
                console.log(id);
                localStorage.setItem('idofmeal', id);
            })
        })
    }
    mealitems(categoryname);
})

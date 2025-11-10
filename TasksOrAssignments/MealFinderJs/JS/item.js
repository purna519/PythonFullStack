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
  const idOfMeal = localStorage.getItem('idofmeal');
  console.log(idOfMeal);

  let itemDetails = async (itemid) => {
    const items = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${itemid}`);
    const data = await items.json();
    console.log(data);

    data.meals.forEach(e => {
      document.querySelector('.navMealName').innerHTML = `<p>${e.strMeal}</p>`;

      // Image
      document.querySelector('.meal-image').innerHTML = `
        <img src="${e.strMealThumb}" alt="${e.strMeal}">
      `;

      let a = e.strTags ? e.strTags.split(',') : [];
      console.log(a);

      // Info + Ingredients Box inserted back dynamically
      document.querySelector('.meal-info').innerHTML = `
        <h3>${e.strMeal}</h3>
        <p class="Category"><strong>Category:</strong> ${e.strCategory}</p>
        <p class="Source"><strong>Source:</strong> <a href="${e.strYoutube}" target="_blank">${e.strYoutube}</a></p>
        <div class="tags">
          <span class="headTag"><b>Tags:</b></span>
        </div>
      `;

      const tagsContainer = document.querySelector('.tags');

      a.forEach(tag => {
        tagsContainer.innerHTML += `<span class="tag">${tag}</span>`;
      });

      // Ingredients
      let ingredientHTML = '';
      for (let i = 1; i <= 20; i++) {
        const ingredient = e['strIngredient' + i];
        if (ingredient && ingredient.trim()) {
          ingredientHTML += `<div><span class="circle">${i}</span> ${ingredient}</div>`;
        }
      }
      document.querySelector('.ingredient-grid').innerHTML = ingredientHTML;

      // Measurements
      let measureHTML = '';
      for (let i = 1; i <= 20; i++) {
        const measure = e['strMeasure' + i];
        if (measure && measure.trim()) {
          measureHTML += `<div><span class="circle">${i}</span> ${measure}</div>`;
        }
      }
      document.querySelector('.measure-grid').innerHTML = measureHTML;

      // Instructions
      let steps = e.strInstructions.split('.');
      let list = '';
      for (let step of steps) {
        if (step.trim()) {
          list += `<li><i class="fa-regular fa-square-check"></i>${step}.</li>`;
        }
      }
      document.querySelector('.instructions ul').innerHTML = list;
    });
  }

  if (idOfMeal) {
    itemDetails(idOfMeal);
  }
});

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
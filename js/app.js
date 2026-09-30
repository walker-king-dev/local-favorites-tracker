let favorites = [];

const form = document.getElementById('add-favorite-form');
const favoritesList = document.getElementById('favorites-list');

const searchInput = document.getElementById('search-input');
const categoryFilter = document.getElementById('category-filter');

const searchText = searchInput.value.toLowerCase().trim();
const selectedCategory = categoryFilter.value;

searchInput.addEventListener('input', searchFavorites);
categoryFilter.addEventListener('change', searchFavorites);

let myFavorite = {
    name: 'Kentucky',
    category: 'state',
    rating: 5,
    notes: 'Beautiful rolling green horse pastures',
    dateAdded: 'Sep 2026'
};

let today = new Date().toLocaleDateString();
console.log(today);

console.log(myFavorite);
console.log(typeof myFavorite.name);
console.log(typeof myFavorite.rating)

function addFavorite(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const category = document.getElementById('category').value;

    if (!name || !category) {
        alert('Please fill in name and category!');
        return;
    }

    const newFavorite = {
        name: name,
        category: category,
        rating: parseInt(document.getElementById('rating').value),
        notes: document.getElementById('notes').value.trim(),
        dateAdded: new Date().toLocaleDateString()
    };

    favorites.push(newFavorite);
    saveFavorites();
    
    form.reset();
    displayFavorites();
}

form.addEventListener('submit', addFavorite);

function saveFavorites() {
    try {
        localStorage.setItem('localFavorites', JSON.stringify(favorites));
    } catch (error) {
        alert('Unable to save favorites. Storage may be disabled.');
    }
}

function loadFavorites() {
    try {
        const saved = localStorage.getItem('localFavorites');
        if (saved) {
            favorites = JSON.parse(saved);
        } else {
            favorites = [];
        }
    } catch (error) {
        favorites = [];
    }
}

function displayFavorites() {
    searchInput.value = '';
    categoryFilter.value = 'all';
    searchFavorites()
    }
    favorites.forEach(function(favorite) {
        const stars = '⭐'.repeat(favorite.rating);
        favoritesList.innerHTML += `
            <div class="favorite-card">
                <h3>${favorite.name}</h3>
                <span class="favorite-category">${favorite.category}</span>
                <div class="favorite-rating">${stars} (${favorite.rating}/5)</div>
                <p class="favorite-notes">${favorite.notes}</p>
                <p class="favorite-date">Added: ${favorite.dateAdded}</p>
            </div>`;
    });


function deleteFavorite(index) {
    const favorite = favorites[index];
    if (confirm(`Delete "${favorite.name}"?`)) {
        favorites.splice(index, 1);
        saveFavorites();
        searchFavorites();            // re-render, keeping current filter
    }
}

function searchFavorites() {
    const searchText = searchInput.value.toLowerCase().trim();
    const selectedCategory = categoryFilter.value;

    const filtered = favorites.filter(function(favorite) {
    const matchesSearch = searchText === '' ||
        favorite.name.toLowerCase().includes(searchText) ||
        favorite.notes.toLowerCase().includes(searchText);
    const matchesCategory = selectedCategory === 'all' ||
        favorite.category === selectedCategory;
    return matchesSearch && matchesCategory;
});

favoritesList.innerHTML = '';

if (favorites.length === 0) {
        favoritesList.innerHTML = '<p class="empty-message">No favorites yet. Add your first favorite place above!</p>';
        return;
    }
    if (filtered.length === 0) {
        favoritesList.innerHTML = '<p class="empty-message">No favorites match your search.</p>';
        return;
    }

filtered.forEach(function(favorite) {
    const index = favorites.indexOf(favorite);
    const stars = '⭐'.repeat(favorite.rating);
    
    favoritesList.innerHTML += `
        <div class="favorite-card">
            <h3>${favorite.name}</h3>
                <span class="favorite-category">${favorite.category}</span>
                <div class="favorite-rating">${stars} (${favorite.rating}/5)</div>
                <p class="favorite-notes">${favorite.notes}</p>
                <p class="favorite-date">Added: ${favorite.dateAdded}</p>
            <button class="btn-danger" onclick="deleteFavorite(${index})">Delete</button>
        </div>`;
});

}

loadFavorites();
displayFavorites();
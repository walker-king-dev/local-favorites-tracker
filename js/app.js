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

function greetFavorite(placeName, rating) {
    console.log(placeName + ' has ' + rating + ' stars!');
}
greetFavorite('Kentucky', 5);

const nameInput = document.getElementById('name');
console.log(nameInput.value);

const practiceForm = document.getElementById('add-favorite-form');

function handleSubmit(event) {
    event.preventDefault();   // stop the page reload
    console.log('You typed: ' + nameInput.value);
}

practiceForm.addEventListener('submit', handleSubmit);
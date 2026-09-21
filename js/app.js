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
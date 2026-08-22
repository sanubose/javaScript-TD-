// Question 5 — Netflix 🎬
// let movies = [
//     { title: "A", rating: 8.5, genre: "action" },
//     { title: "B", rating: 6.2, genre: "comedy" },
//     { title: "C", rating: 9.1, genre: "action" },
//     { title: "D", rating: 7.8, genre: "drama" }
// ];

// Task: Sirf action movies jinki rating 8 se zyada hai, unhe nikalo.

let movies = [
    { title: "A", rating: 8.5, genre: "action" },
    { title: "B", rating: 6.2, genre: "comedy" },
    { title: "C", rating: 9.1, genre: "action" },
    { title: "D", rating: 7.8, genre: "drama" },
    { title: "E", rating: 9.5, genre: "action" },
    { title: "F", rating: 9.0, genre: "action" },
  
    

];

let actionFilm = movies.filter((obj) => {
    return obj.genre === "action" && obj.rating > 8;
});
let result = movies
    .filter(movie => movie.genre === "action")
    .map(movie => movie.title);
    console.log("Action movie name :",result)

console.log(actionFilm);
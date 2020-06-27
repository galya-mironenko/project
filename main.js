const numberOfFilms = +prompt("Сколько фильмов Вы уже просмотрели?", " ");

const  personalMovieDB = {
    count: numberOfFilms,
    movies: { },
    actors: { },
    geners: [ ],
    privat: false
};

const film = prompt("Один из последних просмотренных фильмов?", " "); 
const filmsGrate = +prompt("На сколько оцените его?", " "); 

personalMovieDB.movies[film] = filmsGrate;

console.log(personalMovieDB);


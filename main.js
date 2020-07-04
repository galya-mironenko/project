'use strict';

let numberOfFilms;

function startApp() {
    numberOfFilms = +prompt("Сколько фильмов Вы уже просмотрели?", " ");

    while(numberOfFilms == " " || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов Вы уже просмотрели?", " ");
    }
}

startApp();

const  personalMovieDB = {
    count: numberOfFilms,
    movies: { },
    actors: { },
    geners: [ ],
    privat: false
};

function rememberMyFilms() {
    for (let numberQuestion = 0; numberQuestion < numberOfFilms; numberQuestion++) {
        const film = prompt("Один из последних просмотренных фильмов?", " "); 
        const filmsGrate = +prompt("На сколько оцените его?", " "); 
        
    if (film != null && filmsGrate != null && film != "" && filmsGrate!= "" && film.length < 50) {
        personalMovieDB.movies[film] = filmsGrate;
        console.log("Готово!");
    } else {
        console.log("Ошибка в данных, введите значения корректно!");
        numberQuestion--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if(personalMovieDB.count <= 10) {
        console.log("Просмотрено мало фильмов");
    }else if(personalMovieDB.count > 10 && personalMovieDB.count <= 30 ) {
        console.log("Вы классический зритель");
    }else if(personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    }else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let numberGenres = 1; numberGenres <= 3; numberGenres++) {
        personalMovieDB.geners[numberGenres - 1] = prompt(`Ваш любимый жанр под номером ${numberGenres}`);
    }
}

writeYourGenres();



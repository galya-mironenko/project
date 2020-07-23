// 'use strict';

const  personalMovieDB = {
    count: 0,
    movies: { },
    actors: { },
    geners: [ ],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt("Сколько фильмов Вы уже просмотрели?", " ");
    
        while(personalMovieDB.count == " " || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов Вы уже просмотрели?", " ");
        }
    },
    rememberMyFilms: function() {
        for (let numberQuestion = 0; numberQuestion < personalMovieDB.count; numberQuestion++) {
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
    },
    detectPersonalLevel: function() {
        if(personalMovieDB.count <= 10) {
            console.log("Просмотрено мало фильмов");
        }else if(personalMovieDB.count > 10 && personalMovieDB.count <= 30 ) {
            console.log("Вы классический зритель");
        }else if(personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        }else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function(hidden) {
        if(!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function(){
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        }else{
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let numberGenres = 1; numberGenres < 2; numberGenres++) {

            let genreses = prompt(`Введите Вашb любимыt жанрs, через запятую`).toLowerCase();

            if(genreses == " " || genreses == null){
                console.log("Вы ввели неккорректные данные или не ввели их вовсе");
                numberGenres--;
            } else {
                personalMovieDB.geners = genreses.split(', ');
                personalMovieDB.geners.sort();
            }
        } 

        personalMovieDB.geners.forEach((item, numberGenres) => {
            console.log(`Любимый жанр ${numberGenres + 1} - это ${item}`);
        });
    }
};

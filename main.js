const numberOfFilms = +prompt("Сколько фильмов Вы уже просмотрели?", " ");

const  personalMovieDB = {
    count: numberOfFilms,
    movies: { },
    actors: { },
    geners: [ ],
    privat: false
};

for (let numberQuestion = 0; numberQuestion < 2; numberQuestion++) {
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

if(personalMovieDB.count <= 10){
    console.log("Просмотрено мало фильмов");
}else if(personalMovieDB.count > 10 && personalMovieDB.count <= 30 ){
    console.log("Вы классический зритель");
}else if(personalMovieDB.count >= 30){
    console.log("Вы киноман");
}else{
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);







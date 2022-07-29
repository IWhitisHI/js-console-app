'use strict';

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }

const personalMovieDB = {
    start: function(){
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    rememderMyFilms: function(){
        for(let i = 0; i < 2; i++){
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько оцените его?', '');
    
            if(a != null || b != null || a != '' || b != '' || a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            }
            else{
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function(){
        if(personalMovieDB.count < 10){
            console.log('Просмотрено довольно мало фильмов');
        }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log('Вы классический зритель');
        }else if(personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        }else{
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function(hidden){
        if(!hidden){
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function(){
        for(let i = 1; i <= 3; i++){
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            if (genre != null || genre != ''){
                personalMovieDB.genres[i - 1] = genre;
            }   else {
                i--;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function(){
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};

// function rememderMyFilms() {
//     for(let i = 0; i < 2; i++){
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//             b = prompt('На сколько оцените его?', '');

//         if(a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         }
//         else{
//             console.log('error');
//             i--;
//         }
//     }
// }

// function detectPersonalLevel() {
//     if(personalMovieDB.count < 10){
//         console.log('Просмотрено довольно мало фильмов');
//     }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
//         console.log('Вы классический зритель');
//     }else if(personalMovieDB.count >= 30) {
//         console.log('Вы киноман');
//     }else{
//         console.log('Произошла ошибка');
//     }
// }

// function showMyDB(hidden) {
//     if(!hidden){
//         console.log(personalMovieDB);
//     }
// }

// function writeYourGenres() {
//     for(let i = 1; i <= 3; i++){
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//     }
// }

// personalMovieDB.start();
// personalMovieDB.rememderMyFilms();
personalMovieDB.writeYourGenres();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.privat);
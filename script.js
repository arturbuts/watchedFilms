"use strict"

let numberOfFilms;

function start() {
	numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
	}
}

start();


const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
}


function rememberMyFilms() {

	for (let i = 0; i < 2; i++) {
		const lastWatchedMovies = prompt("Один из последних просмотренных фильмов?", "");
		const lastWatchedMoviesRate = +prompt("На сколько оцените его?", "");
	
		if (lastWatchedMovies != null && lastWatchedMoviesRate != null && lastWatchedMovies != '' && lastWatchedMoviesRate != '' && lastWatchedMovies.length < 50) {
			personalMovieDB.movies[lastWatchedMovies] = lastWatchedMoviesRate;
		} else {
			console.log('error');
			i--;
		}
	}

}

rememberMyFilms();


function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log('Просмотрено довольно мало фильмов')
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log('Вы классический зритель');
	} else if (personalMovieDB.count >= 30){
		console.log('Вы киноман');
	} else {
		console.log('error');
	}
}

detectPersonalLevel();

console.log(personalMovieDB)
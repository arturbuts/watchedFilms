"use strict"

// let numberOfFilms;

// function start() {
// 	numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// 	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
// 		numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
// 	}
// }

// start();


const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function() {
		personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
	
		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
		}
	},

	rememberMyFilms: function() {
		for (let i = 0; i < 2; i++) {
			const a = prompt("Один из последних просмотренных фильмов?", "").trim();
			const b = +prompt("На сколько оцените его?", "");
		
			if (a != null && b != null && a != '' && b != '' && a.length < 50) {
				personalMovieDB.movies[a] = b;
			} else {
				console.log('error');
				i--;
			}
		}
	},

	detectPersonalLevel: function() {
		if (personalMovieDB.count < 10) {
			console.log('Просмотрено довольно мало фильмов')
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
			console.log('Вы классический зритель');
		} else if (personalMovieDB.count >= 30){
			console.log('Вы киноман');
		} else {
			console.log('error');
		}
	},

	showMyBD: function(hidden) {
		if(!hidden) {
			console.log(personalMovieDB)
		}
	},

	writeYourGeneres: function() {

		for(let i = 1; i <= 3; i++) {
			personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`)
		}
	},
	
}


// function rememberMyFilms() {

// 	for (let i = 0; i < 2; i++) {
// 		const a = prompt("Один из последних просмотренных фильмов?", "").trim();
// 		const b = +prompt("На сколько оцените его?", "");
	
// 		if (a != null && b != null && a != '' && b != '' && a.length < 50) {
// 			personalMovieDB.movies[a] = b;
// 		} else {
// 			console.log('error');
// 			i--;
// 		}
// 	}

// }

// rememberMyFilms();


// function detectPersonalLevel() {
// 	if (personalMovieDB.count < 10) {
// 		console.log('Просмотрено довольно мало фильмов')
// 	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
// 		console.log('Вы классический зритель');
// 	} else if (personalMovieDB.count >= 30){
// 		console.log('Вы киноман');
// 	} else {
// 		console.log('error');
// 	}
// }

// detectPersonalLevel();


// function showMyBD(hidden) {
// 	if(!hidden) {
// 		console.log(personalMovieDB)
// 	}
// }

// showMyBD(personalMovieDB.privat);


// function writeYourGeneres() {

// 	for(let i = 1; i <= 3; i++) {
// 		personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`)
// 	}
// }

// writeYourGeneres();
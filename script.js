const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", ""),
			lastWatchedMoviesA = prompt("Один из последних просмотренных фильмов?", ""),
			lastWatchedMoviesRateA = +prompt("На сколько оцените его?", ""),
			lastWatchedMoviesB = prompt("Один из последних просмотренных фильмов?", ""),
			lastWatchedMoviesRateB = +prompt("На сколько оцените его?", "");


const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
}

personalMovieDB.movies[lastWatchedMoviesA] = lastWatchedMoviesRateA;
personalMovieDB.movies[lastWatchedMoviesB] = lastWatchedMoviesRateB;

console.log(personalMovieDB)
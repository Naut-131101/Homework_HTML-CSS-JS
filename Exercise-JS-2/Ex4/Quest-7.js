const movies = [
    {
        title: 'A',
        year: 2018,
        rating: 4.5
    },
    {
        title: 'B',
        year: 2018,
        rating: 4.7
    },
    {
        title: 'C',
        year: 2018,
        rating: 3
    },
    {
        title: 'D',
        year: 2017,
        rating: 4.5
    }
]

function getMovie(movies) {
    const getMovieChoosed = [];
    let count = 0;
    for (const key in movies) {
        if (movies[key].year === 2018 && movies[key].rating > 4) {
            getMovieChoosed[count++] = movies[key];
        }
    }
    getMovieChoosed.sort((a, b) => b.rating - a.rating);
    for (const movie of getMovieChoosed) {
        console.log(movie.title);
    }
}

getMovie(movies);
const allMoviesList = document.querySelector("#allMovies");

async function getMovies() {
  const response = await fetch(
    "https://striveschool-api.herokuapp.com/api/movies",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZThmNGQ0YmUzZDAwMTU4NDVmYzYiLCJpYXQiOjE2NjgwODE5MDksImV4cCI6MTY2OTI5MTUwOX0.QNq9tHcsO7ERSNl6vnftSRLSZKCW63_UJGE_lt_6WJ8",
      },
    }
  );
  const moviesCat = await response.json();
  return moviesCat;
}

async function getHorrorMovies() {
  const response = await fetch(
    "https://striveschool-api.herokuapp.com/api/movies/Horror",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZThmNGQ0YmUzZDAwMTU4NDVmYzYiLCJpYXQiOjE2NjgwODE5MDksImV4cCI6MTY2OTI5MTUwOX0.QNq9tHcsO7ERSNl6vnftSRLSZKCW63_UJGE_lt_6WJ8",
      },
    }
  );
  const moviesHorror = await response.json();
  return moviesHorror;
}
async function getActionMovies() {
  const response = await fetch(
    "https://striveschool-api.herokuapp.com/api/movies/Action",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZThmNGQ0YmUzZDAwMTU4NDVmYzYiLCJpYXQiOjE2NjgwODE5MDksImV4cCI6MTY2OTI5MTUwOX0.QNq9tHcsO7ERSNl6vnftSRLSZKCW63_UJGE_lt_6WJ8",
      },
    }
  );
  const moviesAction = await response.json();
  return moviesAction;
}

async function getCrimeMovies() {
  const response = await fetch(
    "https://striveschool-api.herokuapp.com/api/movies/Crime",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZThmNGQ0YmUzZDAwMTU4NDVmYzYiLCJpYXQiOjE2NjgwODE5MDksImV4cCI6MTY2OTI5MTUwOX0.QNq9tHcsO7ERSNl6vnftSRLSZKCW63_UJGE_lt_6WJ8",
      },
    }
  );
  const moviesCrime = await response.json();
  return moviesCrime;
}

window.onload = async () => {
  const moviesCat = await getMovies();
  const moviesHorror = await getHorrorMovies();
  const moviesAction = await getActionMovies();
  const moviesCrime = await getCrimeMovies();
  console.log(moviesCat);
  addHorror(moviesHorror);
  addAction(moviesAction);
  addCrime(moviesCrime);
};

let addHorror = function (moviesHorror) {
  moviesHorror.forEach((movie) => {
    allMoviesList.innerHTML += ` <li class="list-group-item">
    <span class="title col-3">${movie.name}</span
    ><span class="description col-5">${movie.description}</span>
    <span class="genre col-2">${movie.category}</span>
    <div class="col-2">
      <a href="details.html?movieID=${movie._id}" class="btn btn-dark">Browse Movie</a>
    </div>`;
  });
};

let addAction = function (moviesAction) {
  moviesAction.forEach((movie) => {
    allMoviesList.innerHTML += ` <li class="list-group-item">
    <span class="title col-3">${movie.name}</span
    ><span class="description col-5">${movie.description}</span>
    <span class="genre col-2">${movie.category}</span>
    <div class="col-2">
    <a href="details.html?movieID=${movie._id}" class="btn btn-dark">Browse Movie</a>
    </div>`;
  });
};

let addCrime = function (moviesCrime) {
  moviesCrime.forEach((movie) => {
    allMoviesList.innerHTML += ` <li class="list-group-item">
    <span class="title col-3">${movie.name}</span
    ><span class="description col-5">${movie.description}</span>
    <span class="genre col-2">${movie.category}</span>
    <div class="col-2">
    <a href="details.html?movieID=${movie._id}" class="btn btn-dark">Browse Movie</a>
    </div>`;
  });
};

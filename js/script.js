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
  console.log(moviesHorror);
  createRowHorror(moviesHorror);
  createRowAction(moviesAction);
  createRowCrime(moviesCrime);
};
const rowhorror1 = document.querySelector("#first_row");
const rowhorror2 = document.querySelector("#first_row2");
const rowaction1 = document.querySelector("#second_row");
const rowaction2 = document.querySelector("#second_row2");
const rowcrime1 = document.querySelector("#third_row");
const rowcrime2 = document.querySelector("#third_row2");

let createRowHorror = function (moviesHorror) {
  rowhorror1.innerHTML = "";
  rowhorror2.innerHTML = "";
  moviesHorror.forEach((movie) => {
    rowhorror1.innerHTML += `<div class="col-md-2">
        <img class="movie-cover" src=${movie.imageUrl} />
        <a href="details.html?movieID=${movie._id}" class="btn-dark btn infobtn">Info</a>
        <div class="fadeout"></div>
        <div class="fadeoutText"><h3>${movie.name}</h3> <p class="imageDescription">${movie.description}</p></div>
       


      </div>`;
    rowhorror2.innerHTML += `<div class="col-md-2">
      <img class="movie-cover" src=${movie.imageUrl} />
      <a href="details.html?movieID=${movie._id}" class="btn-dark btn infobtn">Info</a>
      <div class="fadeout"></div>
      <div class="fadeoutText"><h3>${movie.name}</h3> <p class="imageDescription">${movie.description}</p></div>
      </div>`;
  });
};
let createRowAction = function (moviesAction) {
  rowaction1.innerHTML = "";
  rowaction2.innerHTML = "";
  moviesAction.forEach((movie) => {
    rowaction1.innerHTML += `<div class="col-md-2">
          <img class="movie-cover" src=${movie.imageUrl} />
          <a href="details.html?movieID=${movie._id}" class="btn-dark btn infobtn">Info</a>
          <div class="fadeout"></div>
          <div class="fadeoutText"><h3>${movie.name}</h3> <p class="imageDescription">${movie.description}</p></div>

        </div>`;
    rowaction2.innerHTML += `<div class="col-md-2">
        <img class="movie-cover" src=${movie.imageUrl} />
        <a href="details.html?movieID=${movie._id}" class="btn-dark btn infobtn">Info</a>
        <div class="fadeout"></div>
        <div class="fadeoutText"><h3>${movie.name}</h3> <p class="imageDescription">${movie.description}</p></div>

      </div>`;
  });
};

let createRowCrime = function (moviesCrime) {
  rowcrime1.innerHTML = "";
  rowcrime2.innerHTML = "";
  moviesCrime.forEach((movie) => {
    rowcrime1.innerHTML += `<div class="col-md-2">
            <img class="movie-cover" src=${movie.imageUrl} />
            <a href="details.html?movieID=${movie._id}" class="btn-dark btn infobtn">Info</a>
            <div class="fadeout"></div>
            <div class="fadeoutText"><h3>${movie.name}</h3> <p class="imageDescription">${movie.description}</p></div>

          </div>`;
    rowcrime2.innerHTML += `<div class="col-md-2">
          <img class="movie-cover" src=${movie.imageUrl} />
      <a href="details.html?movieID=${movie._id}" class="btn-dark btn infobtn">Info</a>
      <div class="fadeout"></div>
      <div class="fadeoutText"><h3>${movie.name}</h3> <p class="imageDescription">${movie.description}</p></div>
        </div>`;
  });
};

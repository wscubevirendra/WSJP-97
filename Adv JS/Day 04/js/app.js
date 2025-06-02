const TOPMOVIESAPIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const moiveBox = document.querySelector("#movie-box");
const inp = document.querySelector("input")

const row = document.querySelector(".row")

const getMovies = async (API) => {
    console.log(API)
    const response = await fetch(API);
    const data = await response.json()
    showMovies(data.results)

}

getMovies(TOPMOVIESAPIURL)


function showMovies(data) {
    row.innerHTML = ""
    data.map((movie, index) => {
        const box = document.createElement("div");
        box.classList.add("col-3")
        box.innerHTML = ` <div class="my-card position-relative">
                            <img width="100%" height="100%"
                                src=${IMGPATH + movie.poster_path} alt="">
                            <div class="overview position-absolute">
                                <h6>${movie.original_title}</h6>
                                <div>
                                    <b>Overview:</b>
                                    <p>
                                        ${movie.overview}
                                    </p>
                                </div>

                            </div>
                        </div>`
        row.appendChild(box)

    });
}




inp.addEventListener(
    "keyup",
    (event) => {
        if (event.target.value == "") {
            getMovies(TOPMOVIESAPIURL)

        } else {
            getMovies(`${SEARCHAPI + event.target.value}`)

        }
    }
)
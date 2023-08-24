const basePath = 'https://image.tmdb.org/t/p/w220_and_h330_face/';
let cardResults;
let Movie;
let page = 1;

let searchFn;
let genereFilter;
let AllMovies;
let work;

const btnPrev = document.getElementById("prev");
const btnCurrent = document.getElementById("current");
const btnNext = document.getElementById("next");

function btnPrevPage(page) {
    btnPrev.addEventListener('click', () => {
        if (page === 1) {
            btnPrev.disabled = true;
        }
        else {
            btnPrev.disabled = false;
            page--;
        }
        btnCurrent.innerHTML = page;
    })
}
console.log(btnCurrent)
btnNextPage();
function btnNextPage() {
    btnNext.addEventListener('click', () => {
        console.log("hai")

        page = page + 1;
        btnCurrent.innerHTML = page;
        btnPrevPage(page)
        getNowplayingMovies(page)
    })
}
//-----------------Nowplaying---------
function getNowplayingMovies(page) {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OWRhNmNlYzRjMGIyZTllNWYzMjJjNTA3Yjk3MjU3YyIsInN1YiI6IjY0YTU1OWM3ZGExMGYwMDEzOTdjNjM0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lJGjYugk9yrfEfE8Hw9jKed4GdMvcEuzUjo4gjyTGF4'
        }
    };


    fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            console.log(response.total_pages)
            rendingCard(response.results);
            cardResults = response.results;
            work = "globalMovie";
        })
        .catch(err => console.error(err));
}
getNowplayingMovies();

//-----------------------displaycards function-----


function rendingCard(results) {
    let cardDisplay = "";
    document.getElementById("movie-details").innerHTML = "";
    results.map((d) => {

        cardDisplay += ` <div class="card" style="background-color:beige" onclick="ShowMovie(this)">
    <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/${d.poster_path}" class="card-image">
    <h3 class="card-title">${d.title}</h3>
    <div class="card-details">
        <div class="card-detail-lang">${d.original_language}</div>
        <div class="card-detail-rating">${d.vote_average}</div>
    </div>
</div>`;
    })
    document.getElementById("movie-details").innerHTML = cardDisplay;
}


async function getGenersFilter(genereid) {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTQxNzBjNjQ3MjRkMDIyZTkyOTZhNWZhOTg2NDRlYiIsInN1YiI6IjY0OTAyNGE5MjYzNDYyMDBhZTFjZGI1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7il3x7f91baELU8ceqe8OYauvsHEJ-lC34vS3Gslqoc'
        }
    };

    let res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=99da6cec4c0b2e9e5f322c507b97257c&with_genres=${genereid}`)
    let response = await res.json();
    let data = await response;
    console.log(data)
    rendingCard(data.results);
    genereFilter = data.results;
    work = "genreMovie";
}

// movieFilter();


function filterMovie(e) {
    btnPrev.disabled = true;
    btnCurrent.disabled = true;
    btnNext.disabled = true;
    console.log(cardResults);
    console.log(e.target.dataset.genereid)
    let id = e.target.dataset.genereid;
    getGenersFilter(id);

}

//-------------------------search --------------------------
const submitBtn = document.getElementById("submit");
const searchInput = document.getElementById("search");
submitBtn.addEventListener('click', () => {
    let getSearchValue = searchInput.value.toLowerCase();
    searchMovie(getSearchValue)
})

function searchMovie(movie) {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OWRhNmNlYzRjMGIyZTllNWYzMjJjNTA3Yjk3MjU3YyIsInN1YiI6IjY0YTU1OWM3ZGExMGYwMDEzOTdjNjM0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lJGjYugk9yrfEfE8Hw9jKed4GdMvcEuzUjo4gjyTGF4'
        }
    };

    fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&api_key=99da6cec4c0b2e9e5f322c507b97257c`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response, "search")
            Movie = response;

            searchFn = response.results;
            work = "searchingMovie";
            rendingCard(response.results);

        })
        .catch(err => console.error(err));
}

let containerMovieDes = document.getElementById('container-moviedescription');


function ShowMovie(e) {
    // document.getElementById("card-container").style.filter="brightness(75%)";
    containerMovieDes.style.display = "block";
    document.getElementById("container").style.filter = "blur(10px)";

    console.log(e.innerText.split("\n")[0]);
    let MovieTitle = e.innerText.split("\n")[0].toLowerCase();

    let moviedetail;

    // All movie
    if (work === "globalMovie") {
        moviedetail = cardResults.filter((d) => {
           console.log(d);
           if (d.title.toLowerCase().includes(MovieTitle)) {
               return d;
           }
           // return d.title.toLowerCase().includes(MovieTitle);
       })
    } else if (work === "searchingMovie") {
        // search
         moviedetail = searchFn.filter((d) => {
            console.log(d);
            if (d.title.toLowerCase().includes(MovieTitle)) {
                return d;
            }
            // return d.title.toLowerCase().includes(MovieTitle);
        })
    } else if (work === "genreMovie") {
        // Genre
         moviedetail = genereFilter.filter((d) => {
            console.log(d);
            if (d.title.toLowerCase().includes(MovieTitle)) {
                return d;
            }
            // return d.title.toLowerCase().includes(MovieTitle);
        })
    }
    


    console.log(moviedetail)
    console.log(moviedetail[0].vote_average)
    movieDescription(moviedetail)
}

function movieDescription(moviedetail) {
    let cardDescription = "";
    document.getElementById("container-moviedescription").innerHTML = "";
    console.log(moviedetail[0].original_title)    
    sessionStorage.setItem('key', (moviedetail[0].original_title));
    cardDescription = `<div class="Movie-Description">
          <div class="movie-detail-image">    
          <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/${moviedetail[0].poster_path}" class="card-image">
          </div>
          <div class="movie-description-details">
          <h2 style="display: inline-block;">${moviedetail[0].original_title}</h2>
          <i class="fa-solid fa-xmark fa-2xl" onclick="closebtn()"></i>
      
          <div class="moviedescription-icon">
              <i class="fa-solid fa-star"></i>
              <div class="movie-des-average" style="display: block;">${moviedetail[0].vote_average}</div>
          </div>
      
          <div class="moviedetail-des">
          <div class="moviedetail-lan" style="display: inline-block;">${moviedetail[0].original_language.toUpperCase()} </div>
          <i class="fa-solid fa-circle fa-2xs" style="display:inline-block;"> </i>
          <div class="moviedetail-genere" style="display:inline-block;"> Action</div>
          </div>
          <div class="moviedetail-para">
          ${moviedetail[0].overview}
              </div>
          <div class="moviedetail-price">
              <i class="fa-solid fa-rupee-sign fa-xs"></i>
              <div style="display: inline-block;">250</div>
          </div>
          <button class="moviedetails-ticketbtn" onclick="redirectpage()" type="submit">Book Ticket</button>
      </div>
      </div>`;


    document.getElementById("container-moviedescription").innerHTML = cardDescription;
}





//-------------------geners-------------------
// function getGenersFilter(){
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OWRhNmNlYzRjMGIyZTllNWYzMjJjNTA3Yjk3MjU3YyIsInN1YiI6IjY0YTU1OWM3ZGExMGYwMDEzOTdjNjM0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lJGjYugk9yrfEfE8Hw9jKed4GdMvcEuzUjo4gjyTGF4'
//   }
// };

  // let results=response;
    // const cardResultsTitle=cardResults;
    // console.log(cardResultsTitle)
    // const updateResults=cardResults.filter((d)=>{
    //   console.log(d.title.toLowerCase().includes(results))
    
    //    return d.title.toLowerCase().includes(results);
    // });
  // let closebtn=document.getElementById("close-btn");
  // console.log(closebtn)
  // // closebtn.onclick = function(){
  // //   console.log("hai");

  // // };
  // closebtn.addEventListener('click',(e)=>{
  //   console.dir(e);
  // })
  // / filterMovie();
  // function filterMovie(results)
  // {
  //  console.log(results,"hello"); 
  //  results.forEach(element => {
  //   const updateResults=element.filter((d)=>{
  //     return d.id.includes(id);
  //    })
  //    rendingCard(updateResults);
  //  });
  // }
  
  // function filterMovie(id)
  // {
  //  console.log(id,cardResults); 
  //  const updateResults=cardResults.filter((d)=>{
  //   return d.genre_ids.includes(id);
  //  })
  //  rendingCard(updateResults);
  // }
  // function filterMovie(name)
  // {
  //  console.log(id,response.genres); 
  //  const updateResults=response.genres.filter((d)=>{
  //   return d.name.includes(name);
  //  })
  //  rendingCard(updateResults);
  // }
  
  

// fetch(`https://api.themoviedb.org/3/genre/movie/list?language=en`, options)
//   .then(response => response.json())
//   .then(response => {
//     console.log(response.genres)
   
//   })
//   .catch(err => console.error(err));
// }










// -----------My coding----------
// submitBtn.addEventListener('click',()=>{
// const getSearchValue=searchInput.value.toLowerCase();
// console.log(getSearchValue)
// // console.log(cardResults[0].title.toLowerCase())


// const cardResultsTitle=cardResults;
// console.log(cardResultsTitle)
// const updateResults=cardResults.filter((d)=>{
//  // console.log(d.title.toLowerCase().includes(getSearchValue))

//    return d.title.toLowerCase().includes(getSearchValue);
// });
// rendingCard(updateResults)
//    })
 //console.log(e.target.getAttribute("data-genereid"))
  //  const updateResults=cardResults.filter((d)=>{
  //   console.log(d.genre_ids.includes(Number(id)));
  //    return d.genre_ids.includes(Number(id));
     
    //  })
     
    // rendingCard(updateResults);
    //  console.log(updateResults);
  
  //console.log(e.innerHTML.toLowerCase());

   

// let filteredSearch=cardResults.filter(()=>{
//   for(let i=0;i<cardResults.length;i++)
//   {
//   if(cardResults[i].title.toLowerCase()===getSearchValue){
//   console.log("true");
//   }
//   }
  
// });
// console.log(filteredSearch)

// -------------------------------

// function ShowMovie(e)
// {
//      console.log(e.innerText.split("\n")[0]);
// let MovieTitle=e.innerText.split("\n")[0].toLowerCase();
// console.log(MovieTitle)


// const updateResults=Movie.filter((d)=>{
//   console.log(d.title.toLowerCase().includes(MovieTitle))

//    return d.title.toLowerCase().includes(MovieTitle);
   
// });
// MovieDescription(updateResults);
// }

// function MovieDescription(updateResults){
  
//     let cardDescription="";
//      document.getElementsByClassName("container-moviedescription").innerHTML="";
//    updateResults.map((d)=>{
    
//       cardDescription= `<div class="Movie-Description" style>
//       <div class="movie-detail-image">    
//       <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/${d.poster_path}" class="card-image">
//       </div>
//       <div class="movie-description-details">
//       <h2 style="display: inline-block;">${d.title}</h2>
//       <i class="fa-solid fa-xmark fa-2xl"></i>
  
//       <div class="moviedescription-icon">
//           <i class="fa-solid fa-star"></i>
//           <div style="display: block;">rating</div>
//       </div>
  
//       <div class="moviedetail-des">
//       <div class="moviedetail-lan" style="display: inline-block;">EN </div>
//       <i class="fa-solid fa-circle fa-2xs" style="display:inline-block;"> </i>
//       <div class="moviedetail-genere" style="display:inline-block;"> Action</div>
//       </div>
//       <div class="moviedetail-para">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolores delectus, quas corrupti deserunt perferendis vero, molestiae accusamus temporibus impedit maxime natus quia provi.
//       </div>
//       <div class="moviedetail-price">
//           <i class="fa-solid fa-rupee-sign fa-xs"></i>
//           <div style="display: inline-block;">250</div>
//       </div>
//       <button class="moviedetails-ticketbtn" type="submit">Book Ticket</button>
//   </div>
//   </div>`;
//     })
//     document.getElementsByClassName("container-moviedescription").innerHTML=cardDescription;
   
//   }
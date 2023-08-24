
// buttons

const businessbtn = document.getElementById("business");
const sportsbtn = document.getElementById("sports");
const entertainmentbtn = document.getElementById("entertainment");
const technologybtn = document.getElementById("technology");
const loginbtn = document.querySelector(".fa-solid.fa-user");
const searchbtn = document.querySelector(".search-btn");
const country=document.getElementById("countrySelect");

let countryNameKey = "in";

function urlUpdate(nation, category) {
    return `https://newsapi.org/v2/top-headlines?country=${nation}&category=${category}&apiKey=3b4613ef7b604936bbc82426671ddb95`
}

country.addEventListener("click",(e)=>{
    countryNameKey =e.target.value;
    datafetch(searchurl)
})

businessbtn.addEventListener("click",(e)=>{
    let category = e.target.innerText.toLowerCase();
    let url = urlUpdate(countryNameKey, category);
    datafetch(url);
})

sportsbtn.addEventListener("click",(e)=>{
    let category = e.target.innerText.toLowerCase();
    console.log(category)
    let url = urlUpdate(countryNameKey, category);
    datafetch(url);
})
technologybtn.addEventListener("click",(e)=>{
    let category = e.target.innerText.toLowerCase();
    let url = urlUpdate(countryNameKey, category);
    datafetch(url);
    
})
entertainmentbtn.addEventListener("click",(e)=>{
    let category = e.target.innerText.toLowerCase();
    let url = urlUpdate(countryNameKey, category);
    datafetch(url);
})
loginbtn.addEventListener("click",(e)=>{
    let category = e.target.innerText.toLowerCase();
    let url = urlUpdate(countryNameKey, category);
    datafetch(url);
})
searchbtn.addEventListener("click",(e)=>{
    let searchinput=document.querySelector(".search").value;
    let searchurl= `https://newsapi.org/v2/everything?q=${searchinput}&apiKey=3b4613ef7b604936bbc82426671ddb95`;
    console.log(searchurl)
    datafetch(searchurl)
})



let newsarr=[]

async function fetchnews(url){
   try{ 
    const response = await fetch(url)
    const data =  await response.json();
    newsarr=data.articles;
    // console.log(newsarr)
    return newsarr;

  } catch(error){
    console.log("Error is:"+ error);
  }
}
// fetchnews()
async function datafetch(url){
    try{
    const news  = await fetchnews(url);
    // news.map((item)=>{
    //     console.log(item)
    // })
    console.log(news)
    return news;
    }catch(error){
        console.log("Error is:"+ error);    
    }
}
// datafetch(SPORTS_NEWS)

// country select































// time fnctionality
const timeElement=document.querySelector(".date-time");
// const dateElement=document.querySelector(".date");
function formatTime(date){
    const hours12 = date.getHours() ;
    const minutes = date.getMinutes();
    return `${hours12.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")} IST`
}
function formatDate(date){
    const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}
setInterval(() =>{
    const now = new Date();
    timeElement.textContent = formatTime(now)+ "  |  ";
    timeElement.textContent += formatDate(now);
    // dateElement.textContent = formatDate(now);
},200)
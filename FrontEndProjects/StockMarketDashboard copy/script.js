let searchEvent = document.getElementById('search-bar');
let searchBtn = document.getElementById('fetchStart');
let tableBody = document.getElementsByClassName('table-data-filling-in-script')[0];
let searchingOptionLi = document.querySelector('.searching-option-li');

let apiArray = ["AO48IFCXLA3BX1O9", "T4Y29QFCCCFF7V03", "T4Y29QFCCCFF7V03", "7V18I4NFIV62Z5ZP", "IPW3ZIJPAL09OOPG", "IPW3ZIJPAL09OOPG", "3YI9UO1YNH2VBACE"];

let keyForApi = "AO48IFCXLA3BX1O9";

let apiIndex = 0;
function keyForApiFn() {
  keyForApi = apiArray[apiIndex];
  apiIndex++;
  if (apiIndex == apiArray.length - 1) {
    apiIndex = 0;
  }
}

let choosingTradeDetails = "";

// Searching Function
searchBtn.onclick = function () {
  keyForApiFn();
  let searchingKeyWords = searchEvent.value;
  let url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchingKeyWords}&apikey=${keyForApi}`
  console.log(keyForApi);
  let urlforPrice = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${searchingKeyWords}&apikey=${keyForApi}`;

  fetchApiDataForsearch(url);

}


async function fetchApiData(apiUrl = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=ama&apikey=${keyForApi}`) {
  keyForApiFn();
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Error occurs");
    }
    const data = await response.json();
    console.log(data, " table fetch")

    if (data["Error Message"]) {
      tableBody.innerHTML = "";
      alert("No Data in API");
    }
    else if ("Note".includes("Thank you for using Alpha Vantage")) {
      tableBody.innerHTML = "";
      alert("Please try after some time - Standard API call frequency is 5 calls per minute and 500 calls per day")
    }

    if (data.hasOwnProperty(choosingTradeDetails)) {
      const timeSeries = data[choosingTradeDetails];
      tableDataFill(timeSeries);
    }
  } catch (error) {
    tableBody.innerHTML = "";
    console.log(error, " Error is here");
  }
}


// async function fetchApiDataForsearch(apiUrl = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=ama&apikey=${keyForApi}`) {
async function fetchApiDataForsearch(apiUrl) {
  keyForApiFn();
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Error occurs");
    }
    const data = await response.json();
    console.log(data, " searching fetch")

    if (data["Error Message"]) {
      tableBody.innerHTML = "";
      alert("No Data in API");
    }
    else if ("Note".includes("Thank you for using Alpha Vantage")) {
      tableBody.innerHTML = "";
      alert("Please try after some time - Standard API call frequency is 5 calls per minute and 500 calls per day")
    }

    searchingOptionLi.innerHTML = "";

    let result = await data.bestMatches;
    if (result === undefined || result.length === 0) {
      searchingOptionLi.innerText = "No Result Found";
    }
    searchBarRender(result);

  } catch (error) {
    tableBody.innerHTML = "";
    console.log(error, " Error is here");
  }
}




let searchResultData = [];

function searchBarRender(searchValue) {
  console.log(searchValue, " search value")
  searchResultData = (searchValue);

  for (const item of searchValue) {
    searchingOptionLi.innerHTML +=
      `
        <li>
            <div>
                <h3>${item["2. name"]}</h3>
                <h5>${item["1. symbol"]}</h5>
            </div>
            <h4>
                ${item["9. matchScore"]}
            </h4>
            <i id="eye" onclick="symboltesting(this.getAttribute('symbol'))" symbol=${item["1. symbol"]} class="fa-solid fa-eye"></i>
        </li>
      `;
  }
}

if (localStorage.length > 0) {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = JSON.parse(localStorage.getItem(key));
    (value[0].wishList) && watchListCardRender(value);
  }
}

function symboltesting(e) {
  let watchListObject = [];
  searchResultData.forEach((item) => {
    if (item["1. symbol"] == e) {
      const objToPush = {
        name: item["2. name"],
        symbol: item["1. symbol"],
        region: item["4. region"],
        wishList: true
      };

      let getWatchListObject = [];
      let getWatchListObjectstore = JSON.parse(localStorage.getItem(e));
      (getWatchListObjectstore && getWatchListObjectstore.length > 0) && (getWatchListObject = getWatchListObjectstore)
      getWatchListObject.push(objToPush);
      localStorage.setItem(e, JSON.stringify(getWatchListObject));
      watchListObject = getWatchListObject;

    }
  })
  watchListCardRender(watchListObject);
  watchListDataContainer(e);
  intiallyCallingWatchListDataContainer();
}

// function stockpriceUpdate() {
//   let stockPrice = document.querySelector('.stock-latest-price');
//   stockPrice.innerHTML = latestPriceOfStock;
// }


function watchListCardRender(searchResultData) {

  for (const item of searchResultData) {
    document.getElementsByClassName('random-data-main-page')[0].innerHTML =
      `
      <div class="stock" id="${item.symbol}">
        <div>
            <i class="fa-sharp fa-solid fa-money-bill-trend-up"></i>
            <span class="stock-name">${item.name} </span>
        </div>
        <div class="stock-region"> 
            <span class="stock-symbol"> ${item.symbol} </span>            
            <span class="region-heading">Region</span>
            <span class="region">${item.region}</span>
            
        </div>
        <div class="stock-latest-price">
          
        </div>
        <span>
            <button class="trade-data remove" value="${item.symbol}">Take off</button>
            <button class="trade-data analytics">Data Analytics</button>
        </span>
      </div>
    `
      + document.getElementsByClassName('random-data-main-page')[0].innerHTML
  }
  removingData();
}


// when directly see the data from watch list container
intiallyCallingWatchListDataContainer();
function intiallyCallingWatchListDataContainer() {
  let tradeDataAttachingInDataContainer = document.querySelectorAll('.analytics');

  tradeDataAttachingInDataContainer.forEach((item) => {
    item.addEventListener('click', (e) => {
      let itemName = document.getElementsByClassName('stock');
      for (let i = 0; i < itemName.length; i++) {
        itemName[i].style.backgroundColor = "";
      }

      const container = e.target.parentElement.parentElement;

      const tradeType = container.childNodes[3].innerText.split(" ")[0];
      typeOfTrade(tradeType);
      container.style.backgroundColor = '#B7B7B7';
    });
  });
}

function watchListDataContainer(e) {
  typeOfTrade(e);
}

function typeOfTrade(entry) {
  let keyWordOfTrade;
  document.querySelectorAll(".trade-selection").forEach((item) => {
    item.addEventListener('click', (e) => {
      if (e.target.innerHTML === 'INTRADAY') {
        keyWordOfTrade = "TIME_SERIES_INTRADAY&interval=5min";
        choosingTradeDetails = "Time Series (5min)";
        document.querySelector('.trading-type-heading').innerHTML = "Time Series (5min)";
        (e.target.parentElement.children[0].classList.add('active'));
        (e.target.parentElement.children[1].classList.remove('active'));
        (e.target.parentElement.children[2].classList.remove('active'));
        (e.target.parentElement.children[3].classList.remove('active'));
        keyForApiFn()
      } else if (e.target.innerHTML === 'DAILY') {
        document.querySelector('.trading-type-heading').innerHTML = "Time Series (Daily)";
        keyWordOfTrade = "TIME_SERIES_DAILY_ADJUSTED"
        choosingTradeDetails = "Time Series (Daily)";
        (e.target.parentElement.children[0].classList.remove('active'));
        (e.target.parentElement.children[1].classList.add('active'));
        (e.target.parentElement.children[2].classList.remove('active'));
        (e.target.parentElement.children[3].classList.remove('active'));
        keyForApiFn()
      } else if (e.target.innerHTML === 'WEEKLY') {
        document.querySelector('.trading-type-heading').innerHTML = "Weekly Time Series";
        keyWordOfTrade = "TIME_SERIES_WEEKLY"
        choosingTradeDetails = "Weekly Time Series";
        (e.target.parentElement.children[0].classList.remove('active'));
        (e.target.parentElement.children[1].classList.remove('active'));
        (e.target.parentElement.children[2].classList.add('active'));
        (e.target.parentElement.children[3].classList.remove('active'));
        keyForApiFn()
      } else if (e.target.innerHTML === 'MONTHLY') {
        document.querySelector('.trading-type-heading').innerHTML = "Monthly Time Series";
        keyWordOfTrade = "TIME_SERIES_MONTHLY"
        choosingTradeDetails = "Monthly Time Series";
        (e.target.parentElement.children[0].classList.remove('active'));
        (e.target.parentElement.children[1].classList.remove('active'));
        (e.target.parentElement.children[2].classList.remove('active'));
        (e.target.parentElement.children[3].classList.add('active'));
        keyForApiFn()
      }
      let tradeUrl = `https://www.alphavantage.co/query?function=${keyWordOfTrade}&symbol=${entry}&apikey=${keyForApi}`;
      console.log(tradeUrl, " urllllllllllllllll")

      fetchApiData(tradeUrl);
    });
  });
}


// Table data filling
function tableDataFill(e) {
  console.log(e)

  // let tableBody = document.getElementsByClassName('table-data-filling-in-script')[0];
  tableBody.innerHTML = '';
  let count = 0;

  for (let date in e) {
    if (e.hasOwnProperty(date)) {
      let rowData = e[date];
      let volume = (rowData['5. volume']);
      if (volume === undefined) {
        volume = (rowData['6. volume']);
      }
      let row =
        `
        <tr>
          <td>${date}</td>
          <td>${rowData['1. open']}</td>
          <td>${rowData['2. high']}</td>
          <td>${rowData['3. low']}</td>
          <td>${rowData['4. close']}</td>
          <td>${volume}</td>
        </tr>
      `;
      tableBody.innerHTML += row;
      count++;

      if (count >= 20) {
        break;
      }
    }
  }
}







// local storage delete

function removingData() {
  let tradeDataAttachingInDataContainer = document.querySelectorAll('.remove');
  tradeDataAttachingInDataContainer.forEach((item) => {
    item.addEventListener('click', (e) => {
      localStorage.removeItem(e.target.value);
      let item = document.getElementById(e.target.value);
      item.remove();
    });
  });
}

// Search Result toggle
let searchBarClose = document.getElementById('search-close-button')
searchBtn.addEventListener('click', () => {
  searchingOptionLi.style.display = 'block';
})
searchBarClose.addEventListener('click', () => {
  searchingOptionLi.style.display = 'none';
  searchEvent.value = "";
})




let leftSideBar = document.getElementsByClassName('left-side-bar')[0];
let barIcon = document.getElementsByClassName('bar-icon')[0];
let barClose = document.getElementsByClassName('bar-close')[0];


barIcon.addEventListener('click', () => {
  console.log("hi")
  leftSideBar.style.display = 'flex';
  barClose.style.display = 'block';
  leftSideBar.style.transition = "2s ease";
})
barClose.addEventListener('click', () => {
  leftSideBar.style.display = 'none';
  barClose.style.display = 'none';
  leftSideBar.style.transition = "2s ease";
})
window.addEventListener('resize', () => {
  if (window.innerWidth > 590) {
    leftSideBar.style.display = 'flex';
  } else {
    leftSideBar.style.display = 'none';
    barClose.style.display = 'none';
  }
})


let imageScroll = document.getElementById('images-container');
let imageArr = ['image-1.jpg', 'image-2.jpg', 'image-3.jpg', 'image-4.jpg', 'image-5.jpeg', 'image-6.jpeg', 'image-7.jpeg', 'image-8.jpeg'];

let i = 0;
setInterval(() => {
  imageScroll.innerHTML = `<img class="img-right-side" src="${imageArr[i]}" alt="img">`;

  i++;
  if (i >= imageArr.length) {
    i = 0;
  }
}, 4000);


const category = 'business';
// fetchQuotesByCategory(category);

setInterval(() => {
  fetchQuotesByCategory(category);
}, 5000)

const fetchQuotesByCategory = async (category) => {
  try {
    const response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
      method: 'GET',
      headers: {
        'X-Api-Key': 'E8PgODjCuHl37Fg9L1GDIg==j4zCl9yImLIk9l8b',
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Error: ' + response.status);
    }

    const result = await response.json();
    document.getElementsByClassName('quote')[0].innerHTML = result[0].quote;
    document.getElementsByClassName('author')[0].innerHTML = result[0].author;
  } catch (error) {
    console.error('Error: ', error);
  }
};






// graph
// function graph() {
//   const xValues = [20, 10, 70, 10, 90, 100, 110, 120, 130, 140, 150];
//   const yValues = [7, 15, 8, 9, 9, 9, 10, 11, 14, 14, 15];

//   new Chart("myChart", {
//     type: "line",
//     data: {
//       labels: xValues,
//       datasets: [{
//         fill: false,
//         lineTension: 0,
//         backgroundColor: "rgba(0,0,0,1.0)",
//         borderColor: "rgba(0,0,0,0.5)",
//         data: yValues
//       }]
//     },
//     options: {
//       legend: { display: false },
//       scales: {
//         yAxes: [{
//           ticks: {
//             min: 6,
//             max: 16
//           }
//         }]
//       }
//     }
//   });
// }

// graph()


// my code
// function symboltesting(e) {
//   let watchListObject = [];

//   // console.log(e, " symbol");
//   // console.log(searchResultData);

//   // let storedData = JSON.parse(localStorage.getItem('wishList'));
//   // if (storedData) {
//     // searchResultData = storedData;
//   // }

//   searchResultData.forEach((item) => {
//     if (item["1. symbol"] == e) {
//       watchListObject.push({
//         name: item["2. name"],
//         symbol: item["1. symbol"],
//         region: item["4. region"]
//       }
//       );
//     }
//   })

//   // localStorage.setItem('wishList', JSON.stringify(watchListObject));

//   watchListCardRender(watchListObject);

//   watchListDataContainer(e);
// }

// getWatchListObjectstore = JSON.parse(localStorage.getItem('wishList'));
// (getWatchListObjectstore && getWatchListObjectstore.length > 0) && (watchListCardRender(getWatchListObjectstore))

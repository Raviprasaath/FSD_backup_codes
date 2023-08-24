// const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=SEA&apikey=AO48IFCXLA3BX1O9';

// async function closingPointfetchData(url) {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data)
//     if (data.hasOwnProperty('Time Series (Daily)')) {
//       const timeSeries = data['Time Series (Daily)'];
//       const latestEntry = Object.keys(timeSeries)[0];
//       const latestPrice = timeSeries[latestEntry]['4. close'];

//       console.log('Latest price:', latestPrice);
//     } else {
//       console.log('Time series data not found in the API response.');
//     }
//   } catch (error) {
//     console.log('Error:', error);
//   }
// }

// closingPointfetchData(url);



// const url = 'https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=COIN,CRYPTO:BTC,FOREX:USD&time_from=20220410T0130&limit=1000&apikey=AO48IFCXLA3BX1O9';

// async function closingPointfetchData(url) {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data)


//   } catch (error) {
//     console.log('Error:', error);
//   }
// }

// closingPointfetchData(url);




// let newsFeed = document.getElementsByClassName('news-feed')[0];
// let newsFeedBanner = document.getElementsByClassName('news-feed-banner')[0];
// let newsFeedTitle = document.getElementsByClassName('news-feed-title')[0];
// let newsFeedAnchorLink = document.getElementsByClassName('newsfeed-anchor-link')[0];

// const url = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=COIN,CRYPTO:BTC,FOREX:USD&time_from=20220410T0130&limit=1000&apikey=${keyForApi}`;
// async function newsFeedApi(url) {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     let dataStore =(data.feed)
//     for(let i=0; i<dataStore.length-1; i++) {
//       let {banner_image, title, url} = dataStore[i];
//       newsFeed.innerHTML = 
//       `
//       <img class="news-feed-banner"  src="${banner_image}" alt="news-img">
//       <div class="news-feed-a-title">
//           <p class="news-feed-title">${title}</p>
//           <a class="newsfeed-anchor-link" href="${url}">Read More</a>
//       </div>
//       `
//     }
//   } catch (error) {
//     console.log('Error:', error);
//   }
// }

// newsFeedApi(url);



window.addEventListener('resize', (e)=> {
    console.log("hi")
})













const url = 'https://shazam.p.rapidapi.com/songs/v2/get-details?id=1217912247&l=en-US';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'e0294ca7b8msh5016f0be89998dfp14e078jsn3fe5f33cbff9',
    'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
  }
};
async function fetching() {
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

fetching()

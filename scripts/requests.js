const getPuzzle = async (wordCount) => {
  const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
  if(response.status === 200){
    const data = await response.json();
    return data.puzzle;
  }else{
    throw new Error('Error!');
  }
}

const getPuzzleOld = (wordCount) => {
  return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
    if(response.status === 200){
      return response.json();
    }else{
      throw new Error('Error!');
    }
  }).then((data) => {
    return data.puzzle;
  })
}

// const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
//   //HTTP Request
//   const request = new XMLHttpRequest();

//   request.addEventListener('readystatechange', (e) => {
//     if(e.target.readyState === 4 && e.target.status === 200){
//       const data = JSON.parse(e.target.responseText);
//       // Called a callback function
//       resolve(data.puzzle);
//     }else if(e.target.status === 400){
//       reject('Error has occured.');
//     }
//   });

//   // In the link you can specify how many word you want to get
//   request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
//   request.send();
// })


// Gets country information using short code of country
const getCountry = async (code) => {
  const response = await fetch(`https://restcountries.eu/rest/v2/all`);
  if(response.status === 200){
    const data = await response.json();
    return data.find(item => item.alpha2Code == code.toUpperCase());
  }else{
    throw new Error('Error');
  }
}

const getLocation = async () => {
  const response = await fetch(`http://ipinfo.io/json?token=81756dd7a2eb70`);
  if(response.status === 200){
    return response.json();
  }else{
    throw new Error('Error');
  }
}

const getCurrentCountry = async () => {
  const location = await getLocation();
  const countryName = await getCountry(location.country);
  return countryName;
}
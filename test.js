// const axios = require('axios')

// axios.get('http://data.tmsapi.com/v1.1/movies/showings?startDate=2019-05-14&zip=84106&api_key=ygdzea2kk74u3mkf4egva622')
// .then(results => {
//     console.log(results.data[results.data.length - 1].showtimes)
// })

// const find = (arr, str) => arr.indexOf(str) > -1
function find(arr, str) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === str) return true
    }
    return false
}
console.log(find(['hey', 'hi', 'hello'], 'hi'))  // should return true
console.log(find(['hey', 'hi', 'hello'], 'oi'))  // should return false

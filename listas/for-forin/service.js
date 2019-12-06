const axios = require('axios')
const URL = `https://swapi.co/api/people`

async function obterPEssoas(nome) {
    const url = `${URL}/?search=${nome}&format=json`
    const response = await axios.get(url)
    return response.data
}

/*obterPEssoas('r2')
    .then(function (resultado) {
        console.log('resultado', resultado.results[0].films)
    })
.catch(function (error) {
    console.log('DEU RUIM', error)
})*/

module.exports = {
    obterPEssoas
}

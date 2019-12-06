const { obterPEssoas } = require('./service')

async function main() {
    try{
        const { results } = await obterPEssoas(`a`)
        const pesos = results.map(item => {
            console.log(`
                Nome: ${item.name}
                Peso: ${item.height}
            `);
            return parseInt(item.height)
        })
        const total = pesos.reduce((anterior, proximo) => {
            return anterior + proximo
        })
        console.log('total', total)
    }
    catch (e) {
        console.log(e)
    }
}

main()

const { obterPEssoas } = require('./service')

Array.prototype.meuFilter = function(callbak) {
    const lista = []
    for (let index in this) {
        const item = this[index]
        const result = callbak(item, index, this)
        if(!result) continue;
        lista.push(item)
    }
    return lista
}

async function main() {
    try {
        const { results } = await obterPEssoas(`a`)

        /*const familiaLars = results.filter(function (item) {
            return item.name.toLowerCase().indexOf(`lars`) !== -1
        })
        const names = familiaLars.map((pessoa) => pessoa.name)
        console.log(names)*/

        const familiaLars = results.filter(function (item) {
            return  item.name.toLowerCase().indexOf(`lars`) !== -1
        }).map((pessoa) => pessoa.name)
        console.log(familiaLars)
        const familie = results.meuFilter((item, index, lista) => {
            console.log(`index: ${index}`, lista.length)
            return item.name.toLowerCase().indexOf('skywalker') !== -1
        }).map((pessoa) => pessoa.name)
        console.log(familie)

    }
    catch (e) {
        console.log(e)
    }
}

main()


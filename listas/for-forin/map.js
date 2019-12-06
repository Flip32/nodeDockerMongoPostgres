const service = require('./service')



async function main() {
    try{
        const result = await service.obterPEssoas(`a`)
        const names = []

        result.results.forEach(function (item) {
            names.push(item.name)
        })

        const namesMap = result.results.map(data => data.name)

        console.log('names', names)
        console.log('namesMap', namesMap)
    }
    catch (e) {
        console.log(e)
    }
}

main()

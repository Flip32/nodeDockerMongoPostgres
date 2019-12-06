const service = require('./service')

async function main() {
    try{
        const result = await service.obterPEssoas('a')

        const namesFor = []
        const namesForIn = []
        const namesForOf = []
        const namesMap = []

        console.time('map')
        result.results.map(data => namesMap.push(data.name))
        console.timeEnd('map')


        console.time('for')
        for(let i=0; i<=result.results.length -1; i++) {
            const pessoa = result.results[i]
            namesFor.push(pessoa.name)
        }
        console.timeEnd('for')


        console.time('forIn')
        for (let i in result.results){
            const pessoa = result.results[i]
            namesForIn.push(pessoa.name)
        }
        console.timeEnd('forIn')


        console.time('forOf')
        for (let pessoa of result.results) {
            namesForOf.push(pessoa.name)
        }
        console.timeEnd('forOf')

        // console.log('names', names)
    }
    catch (error) {
        console.log('error interno', error)
    }
}
main()

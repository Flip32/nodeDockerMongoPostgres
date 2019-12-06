const Commander = require('commander')
const Database = require('./database')
const Heroi = require('./heroi')

async function main() {
    Commander
        .version('v1')
        .option('-n, --nome [value]', "Nome do Heroi")
        .option('-p, --poder [value]', "Poder do Heroi")
        .option('-i, --id [value]', "ID do Heroi")

        .option('-c, --cadastrar', "Cadastrar um heroi")
        .option('-l, --listar', "Listar um heroi")
        .option('-r, --remover', "Remover um heroi por id")
        .option('-a, --atualizar [value]', "Atualizar um heroi por id")
        .parse(process.argv)

    const heroi = new Heroi(Commander)

    try {
        if(Commander.cadastrar){
            // console.log(heroi)
            delete heroi.id
            const resultado = await Database.cadastrar(heroi)
            if(!resultado) {
                console.error('Heroi nao foi cadastrado')
                return
            }
            console.log('Heroi Cadastrado com sucesso!')
        }
        if(Commander.listar){
            const resultado = await Database.listar()
            console.log(resultado)
            return;
        }
        if(Commander.remover) {
            const resultado = await Database.remover(heroi.id)
            if(!resultado) {
                console.error('Não foi possivel remover o heroi')
            }
            console.log('Heroi removido com sucesso.')
        }
        if(Commander.atualizar){
            const idParaAtualizar = parseInt(Commander.atualizar);
        //    remover todoas as chaver que estiver com undefined | null
            const dado = JSON.stringify(heroi)
            const heroiAtualizar = JSON.parse(dado)
            const resultado = await Database.atualizar(idParaAtualizar, heroiAtualizar)
            if(!resultado) {
                console.error('Não foi possivel atualizar o heroi.')
                return;
            }
        console.log('Heroi atualizado com sucesso!')
        }
    }

    catch (e) {
        console.log('DEU RUIM.', e)
    }
}

main()

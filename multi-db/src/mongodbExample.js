//npm install mongoose

const Mongoose = require('mongoose')
Mongoose.connect(
    'mongodb://filipe:minhasenha@localhost:27017/herois',
    { useNewUrlParser: true },
    function (error) {
        if(!error) return;
        console.log('Falha na conexão!', error)
    });

const connection = Mongoose.connection
connection.once('open', () => console.log('database rodando!!'))
/*const state = connection.readyState
console.log('state', state)*/
/*
* 0: Disconectado
* 1: Conectado
* 2: Conectadno
* 3: Disconectando
* */

const heroiSchema = new Mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    poder: {
        type: String,
        required: true
    },
    insertAt: {
        type: Date,
        default: new Date()
    }
})

const model = Mongoose.model('herois', heroiSchema)

async function main() {
    const resultCadastrar = await model.create({
        nome: 'Mulher Maravilha',
        poder: 'Laço da Verdade'
    })
    console.log('result Cadastrar', resultCadastrar)

    const listItens = await model.find()
    console.log('item', listItens)
}
main()

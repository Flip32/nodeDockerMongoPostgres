const ICrud = require('./interfaces/interfaceCrud')
const Mongoose = require('mongoose')
const STATUS = {
     0: 'Disconectado',
     1: 'Conectado',
     2: 'Conectando',
     3: 'Disconectando'
}

class MongoDB extends ICrud {
    constructor() {
        super();
        this._herois = null
        this._driver = null
    }
    async isConnected() {
        const state = STATUS[this._driver.readyState]
        if(state === 'Conectado') return state;
        if(state !== 'Conectando')  return state

        await new Promise(resolve => setTimeout(resolve, 1000))

        return STATUS[this._driver.readyState]
    }

    defineModel(){
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

        this._herois = Mongoose.model('herois', heroiSchema)
    }

    connect() {
        Mongoose.connect(
            'mongodb://filipe:minhasenha@localhost:27017/herois',
            { useNewUrlParser: true },
            function (error) {
                if(!error) return;
                console.log('Falha na conexão!', error)
            });

        const connection = Mongoose.connection
        connection.once('open', () => console.log('database rodando!!'))
        this._driver = connection
    }

    async create(item) {
        const resultCadastrar = await model.create({
            nome: 'Mulher Maravilha',
            poder: 'Laço da Verdade'
        })
        console.log('result Cadastrar', resultCadastrar)
        console.log('O item foi salvo em MongoDB')
    }

    read(query) {

    }

    update(id, item) {

    }

    delete(id) {

    }
}

module.exports = MongoDB

//intalar o mongoosejs npm install mongoose

const assert = require('assert')
const MongoDb = require('./../db/stratagies/mongodb')
const Context = require('./../db/stratagies/base/contextStrategy')

const context = new Context(new MongoDb())
describe('MongoDB Suite de testes', function() {
    this.beforeAll( async () => {
        await context.connect()
    })
    it('verificar conexao', async () => {
        const result = await context.isConnected()
        const expected = 'Conectado'

        assert.deepEqual(result, expected)
    })
})

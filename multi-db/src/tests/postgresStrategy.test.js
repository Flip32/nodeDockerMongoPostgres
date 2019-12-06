const assert = require('assert')
const Postgres = require('./../db/stratagies/postgres')
const Context = require('./../db/stratagies/base/contextStrategy')

const context = new Context(new Postgres())
const MOCK_HEROI_CADASTRAR = { nome: 'Gaviao Negro', poder: 'flechas'}
const MOCK_HEROI_UPDATE = { nome: 'Jaspion', poder: 'seila'}


describe('Postgres Strategy', function () {
    this.timeout(Infinity)
    this.beforeAll(async function () {
        await context.connect()
        await context.delete()
        await context.create(MOCK_HEROI_UPDATE)
    })
    it('PostegresSQL Connection', async function () {
        const result = await context.isConnected()
        assert.equal(result, true)
    })
    it('cadastrar', async function () {
        const result = await context.create(MOCK_HEROI_CADASTRAR)
        delete result.id
        // console.log('result', result)
        assert.deepEqual(result, MOCK_HEROI_CADASTRAR)
    })
    it('listar', async function () {
        const [result] = await context.read({ nome: MOCK_HEROI_CADASTRAR.nome })
        delete result.id
        assert.deepEqual(result, MOCK_HEROI_CADASTRAR)
    })
    it('update', async function () {
        const [itemUpdate] = await context.read({nome: MOCK_HEROI_UPDATE.nome})
        const novoItem = {
            ...MOCK_HEROI_UPDATE,
            nome: 'Mulher Maravilha'
        }
        const [result] = await context.update(itemUpdate.id, novoItem)
        const [itemUpdated] = await context.read({id: itemUpdate.id})
        assert.deepEqual(result, 1)
        assert.deepEqual(itemUpdated.nome, novoItem.nome)
        /*
        * No JavaScript temos uma tecnica chamada rest/spread que é um metodo usado para margear objetos ou separá-lo
        * {
        *   nome: 'Jaspion',
        *   poder: 'seila'
        * }
        *
        * {
        *   dataNascimento: '1954-01-01'
        * }
        * */
    })
    it('delete', async function () {
        const [item] = await context.read({})
        const result = await context.delete(item.id)
        assert.deepEqual(result, 1)
    })
})

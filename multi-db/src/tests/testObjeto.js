const MOCK_HEROI_UPDATE = { nome: 'Jaspion', poder: 'seila'}

const novo = {
    ...MOCK_HEROI_UPDATE,
    nome: 'novoNome',
    nascimento: '1954'
}

console.log(novo)

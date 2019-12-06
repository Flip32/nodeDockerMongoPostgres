/*
*0 Obter um usuario
* 1 Obter o numero de telefone de um usuario a partir de seu Id
* 2 Obter o enderço do usuario pelo Id
*/
// importamos um módulo interno do node.js
const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario() {
    //quando der algum problema -> reject(ERRO)
    //quando success -> Resolve
    return new Promise((function resolvePromise(resolve, reject) {

        setTimeout(function () {
            return resolve({
                id: 1,
                nome: 'Aladim',
                dataNascimento: new Date()
            })
        }, 1000)
    }))
}

function obterTelefone(idUsuario) {
    return new Promise(function resolverPromise(resolve, reject) {
        setTimeout(() => {
            return resolve ({
                telefone: '1199002',
                ddd: 11
            })
        }, 2000)
    })
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'Qualquer',
            numero: 0
        })
    })
}

const usuarioPromise = obterUsuario()
//para manipular o sucesso usamos a função .then
//para manipular erros, usamos o .catch

usuarioPromise
    .then(function (usuario) {
        return obterTelefone(usuario.id)
            .then(function resolverTelefone(result) {
                return {
                    usuario: {
                        nome: usuario.nome,
                        id: usuario.id
                    },
                    telefone: result

                }
            })
    })
    .then(function (resultado) {
        const endereco = obterEnderecoAsync(resultado.usuario.id)
        return endereco.then(function resolverEndereco(result) {
            return {
                usuario: resultado.usuario,
                telefone: resultado.telefone,
                endereco: result
            }
        })
    })
    .then(function (resultado) {
        console.log(`
            Nome: ${resultado.usuario.nome}
            Endereço: ${resultado.endereco.rua}, ${resultado.endereco.numero}
            Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
        `)
    })
    .catch(function (error) {
        console.log("DEU RUIM", error)
    })

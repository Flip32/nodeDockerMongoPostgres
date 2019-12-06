/*
docker ps
docker exec -it 62fa78aa11b0 mongo -u filipe -p minhasenha --authenticationDatabase herois
*/
/*
show dbs

use herois

show collections

db.herois.insert({
    nome: 'SuperMan',
    poder: 'Kritoniao',
    weakness: 'Kritonita'
})

db.herois.find()
db.herois.find().pretty()

for (let i = 0; i <= 10000; i++) {
    db.herois.insert({
        nome: `Clone-${i}`,
        poder: 'Velocidade',
        weakness: 'Family'
    })
}

db.herois.count()
db.herois.findOne()
db.herois.find().limit(100).sort({nome: -1})
db.herois.find({}, {poder: 1, _id:0})




// create

db.herois.insert({
    nome: 'SuperMan',
    poder: 'Kritoniao',
    weakness: 'Kritonita'
})


// read
db.herois.find()

// update
  // Nesse caso vai substituir o objeto com o novo, perdendo as outras propriedades
db.herois.update( { _id: ObjectId("5dea7202894113cbe92e020a") },
    { nome: 'Mulher Maravilha'} );

db.herois.update( { _id: ObjectId("5dea746aee185aeec3bfd962")},
    { $set: { nome: 'Lanterna Verde'} })

//delete
db.herois.remove({}) //remove to+do mundo
db.herois.remove({nome: "Clone-16"})


 */

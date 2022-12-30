const players = require('./players.models');

const getPlayer = (req, res) => {
    players.find({}).exec((err, playerList) => {
        if (err) {
            return res.status(500).send({ error: 'Internal Server Error' });
        }
        res.status(200).send({ playerList: playerList });
    })
}

const getOnePlayer = (req, res) => {
    players.find({}).skip(req.query.skip).limit("1").exec((err, onePlayer) => {
        console.log(onePlayer)
        if (err) {
            return res.status(500).send({ error: 'Internal Server Error' });
        }
        res.status(200).send(onePlayer);

    })
}

const createPlayer = (req, res) => {
    // console.log(req)
    const player = new players({hi:"hello1"});
    console.log(player)
    player.save((err, createdPlayer) => {
        console.log(err)
        if (err) {
            return res.status(500).send({ error: 'Internal Server Error' });
        }
        res.status(201).send({PlayerCreated : createdPlayer});
    });
    // Players.insertOne()
    // .exec((err, playerList) => {
    //     if (err) {
    //         return res.status(500).send({ error: 'Internal Server Error' });
    //     }
    //     res.status(200).send({ playerList: playerList });
    // })
};

module.exports = {
            getPlayer,
            createPlayer,
            getOnePlayer
        }
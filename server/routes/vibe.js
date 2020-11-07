const vibeRouter = require('express').Router();
const Vibe = require('../models/vibe');

vibeRouter.get('/', async (req, res) => {
    try{
        const vibes = await Vibe.find({});
        res.json(vibes.map(v => v.toJSON()));
    } catch(e){
        console.log(e)
        res.status(400).json({ error: "something went wrong..." })
    }
});

vibeRouter.get('/random', async (req, res) => {
    try{
        // Get the count of all vibes
        Vibe.count().exec(function (err, count) {
            // Get a random entry
            var random = Math.floor(Math.random() * count)
        
            // Again query all vibes but only fetch one offset by our random #
            Vibe.findOne().skip(random).exec(
            function (err, result) {
                // Tada! random vibe
                res.json(result.toJSON());
            })
        })
    } catch(e){
        console.log(e)
        res.status(400).json({ error: "something went wrong..." })
    }
});

vibeRouter.post('/', async (req, res) => {
    const body = req.body;
    if(!body || !body.vibe){ 
        console.log(body);
        return res.status(400).json({ error: "malformatted data..." });
    }

    const vibe = new Vibe({ vibe: body.vibe });

    try{
        const savedVibe = await vibe.save();
        res.json(savedVibe.toJSON());
    } catch(e) {
        console.log(e)
        res.status(400).json({ error: "something went wrong... Vibe could not be uploaded!" })
    }

});

module.exports = vibeRouter;
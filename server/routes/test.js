const testRouter = require('express').Router();

testRouter.get('/', (req, res) => {
    res.send('<h1>Hei guys!</h1>');
});

module.exports = testRouter;
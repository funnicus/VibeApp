const mongoose = require('mongoose');

const vibeSchema = mongoose.Schema({
    vibe: String
});

vibeSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id
        delete returnedObject.__v
    }
});

const Vibe = mongoose.model('Vibe', vibeSchema);

module.exports = Vibe;
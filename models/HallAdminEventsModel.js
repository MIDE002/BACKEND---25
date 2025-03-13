// const mongoose = require('mongoose');

// const eventSchema = new mongoose.Schema({
//     eventName: String,
//     eventDate: String,
//     eventTime: String,
//     eventLocation: String,
//     eventVenue: String
// });

// const Event = mongoose.model('Event', eventSchema);

// module.exports = Event;





const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    eventName: {
        type: String,
        required: true
    },
    eventDate: {
        type: String,
        required: true
    },
    eventTime: {
        type: String, // Change to string
        required: true
    },
    eventLocation: {
        type: String,
        required: true
    },
    eventVenue: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Event', EventSchema);

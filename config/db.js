const mongoose = require('mongoose');

//MAP GLOBAL PROMISE
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://my_shayon:Shayon1234@ds127655.mlab.com:27655/pusherpoll')
    .then(() => console.log('mongodb connected'))
    .catch(err => console.log('Mongo DB ERROR: ' + err));
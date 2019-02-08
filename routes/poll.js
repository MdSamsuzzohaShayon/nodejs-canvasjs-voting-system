const express = require('express');
const router = express.Router();
const Pusher = require('pusher');

var pusher = new Pusher({
    appId: '709936',
    key: 'b976189345ad44e8dfb4',
    secret: 'a49439830e035cdc4062',
    cluster: 'ap2',
    encrypted: true
});



router.get('/', (req, res) => {
    res.send('poll is running');
});

router.post('/', (req, res) => {
    pusher.trigger('os-poll', 'os-vote', {
        points: 1,
        os: req.body.os
    });
    return res.json({
        success: true,
        message: 'Thank you for voting'
    });
})

module.exports = router;
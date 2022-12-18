'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Bakugan = new Schema({
    name: {
        type: String,
        required: 'No name ?'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    attribute: [
        {
        type: String
        }
    ],
    power:{
        base: {
            type: Number
        },
        physical:[
            pyrus:[
                {
                    
                }
            ]
        ]
    }
});

module.exports = mongoose.model('Bakugan', Bakugan);
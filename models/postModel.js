const mongoose = require('mongoose');

const postScama = mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model("Post",postScama)
const mongoose = require('mongoose')

const scheme = {
    username:{type:String,require:true},
    number:{type:String,require:true},
    email:{type:String,require:true},
    website:{type:String,require:true},
    addrese:{type:String,require:true},
    profileImage:{type:String,require:true},
    color:{type:String,require:true},
}

exports.UserInfo = mongoose.model('UserInfo',scheme)
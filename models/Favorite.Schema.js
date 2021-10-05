'use strict';
const mongoose =require('mongoose');

const WatchsSchema=new mongoose.Schema({
    title: String,
    description: String,
    toUSD:String,
    image: String 
});
const WatchesModel= mongoose.model('Favorites',WatchsSchema);

module.exports={
    WatchesModel
}
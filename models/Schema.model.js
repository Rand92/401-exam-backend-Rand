'use strict';
const mongoose =require('mongoose')
const Schema=mongoose.Schema;

const initialval=new Schema({
    myEmail:String,
    yahiaEmail :String
});
const initialModel=mongoose.model('inital',initialval);
const seedData=()=>{
    let initialData =new initialModel({
        myEmail:"s.rund@yahoo.com",
        yahiaEmail :"v.salvatore7.gs@gmail.com"});
    initialData.save();
    return initialData;

};

module.exports={initialModel,seedData}
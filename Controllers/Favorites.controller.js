'use strict';
const {WatchesModel}=require('../models/Favorite.Schema');

const AddToFavorite = async (req,res)=>{
const favoriteItem=req.body;
const newFavItem= new WatchesModel(favoriteItem)
try {
    newFavItem.save()
res.send(newFavItem)
} catch(err){
    console.log(err)
}
};
const getFavorites = (req,res)=>{
    WatchesModel.find({}).then(
        items=>res.send(items)
    ).catch(err=>res.send(err))
};
const updateFavorites=(req,res)=>{
    const id =req.params.id;
    const obj=req.body;
    WatchesModel.findByIdAndUpdate(id,obj,{new:true},()=>WatchesModel.find().then(data=>res.send(data)))
};
const deleteFavorit =(req,res)=>{
    const id=req.params.id;
    WatchesModel.findByIdAndDelete(id).then(
        item=>WatchesModel.find().then(
            data=>res.send(data)
        ).catch(err=>res.send(err))
    )
};
module.exports={AddToFavorite,getFavorites,updateFavorites,deleteFavorit}
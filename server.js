const express = require('express');
const app= express();
const cors = require('cors');
app.use(cors());
const mongoose =require('mongoose');
require('dotenv').config();
app.use(express.json());
const PORT =process.env.PORT;
const MONGO_URL=process.env.MONGO_URL;
mongoose.connect(`${MONGO_URL}`,{useNewUrlParser: true, useUnifiedTopology: true})
.then(console.log('Connected!')).catch(error=>console.log(error))
const {seedData}=require('./models/Schema.model');
const {AddToFavorite,getFavorites,updateFavorites,deleteFavorit}=require('./Controllers/Favorites.controller');
// app.get('/seed',(req,res)=>{
//     res.json(seedData());
// })
app.get('/',(req,res)=>{res.send('Hello World!')});
app.post('/AddToFavorite',AddToFavorite);
app.get('/getFavorites',getFavorites);
app.put('/updateFavorites/:id',updateFavorites);
app.delete('/deleteFavorit/:id',deleteFavorit);

app.listen(PORT,()=>{
    console.log(`running on port ${PORT}`);
})
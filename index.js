const express = require('express')
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')

app.use(cors());
const categories = require('./data/categories.json')
const newses = require('./data/news.json')

app.get('/', (req, res) =>{
    res.send("News is coming soon")
})


app.get('/news-categories', (req, res) =>{
    res.send(categories)
    
})

app.get('/news', (req, res) =>{
    res.send(newses)
})


app.get('/news/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    console.log(id);
    const news = newses.find(ns => ns.id === id) || {};
    res.send(news)
})


app.listen(port, () =>{
    console.log('Dragon news port is', port)
})
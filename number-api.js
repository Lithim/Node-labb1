const express = require('express')
const app = express();
const port = 3000;

var numbers =(1,1035);



app.use(express.static('public'))

app.get('/api/random',function(req,res){
res.json({number:34})
})

app.get('/api/custom_random/:numbers',function(req,res){
    res.json( {randomnum} = Math.floor(Math.random() * numbers))
    })

    const vowels = ["a", "e", "i", "o", "u"]
    let counter=0;
app.get('/api/vowels/:text',function(req,res){
    res.json({counter})

    
    for (let letter of text.toLowerCase()){
        if (vowels.includes(letter)) {
           counter++
        }
    }


    return counter;
     
})




app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
const  express = require('express');

const app = express();

app.get('/Comics',(req,res)=>{
    res.send('Hola mundo ');
});

app.use(express.static('public'));


app.listen(3001,() =>{

    console.log('Activo Puerto:3001');
});




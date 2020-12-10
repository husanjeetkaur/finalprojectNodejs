var express = require('express');
const app = express();
var mysql = require('mysql');

var bodyparser = require('body-parser');

var connection = mysql.createConnection({

    host:"localhost",
    user:"root",
    password:"",
    database:'demo'
});

connection.connect(function(err){

    if(err) throw err;
    console.log("Connected");
});
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.get('/demo/',(req,res)=>{
     
            let sql = "Select * From demo1";
            let query = connection.query(sql,(err,result)=>{

                if (err)throw err;
                res.send(JSON.stringify(result));

            });
    
    });
    


var server = app.listen(3000,()=>{
    console.log("Server running at http://localhost:3000");
});
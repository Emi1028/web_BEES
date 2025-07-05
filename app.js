const express = require("express")
const mysql= require("mysql2")
var bodyParser=require('body-parser')
var app=express()
var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'n0m3l0',
    database:'b.e.e.s'
})
con.connect();

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(express.static('public'))

app.post('/agregarUsuario',(req,res)=>{
        let nombre=req.body.nombre
        let apellido_p=req.body.apellido_p
        let apellido_m=req.body.apellido_m  
        let telefono=req.body.telefono
        let contraseña=req.body.contraseña

        con.query('INSERT INTO cuenta ( nombre_padre, apellido_paterno_padre, apellido_materno_padre, telefono_padre, contrasena_padre) VALUES (?, ?, ?, ?, ?)', 
            [nombre ,apellido_p, apellido_m, telefono, contraseña], (err, respuesta, fields) => {
            if (err) {
                console.log("Error al conectar", err);
                return res.status(500).send("Error al conectar");
            }
           
            return res.send(exitoso.html);
        });
   
})

app.listen(10000,()=>{
    console.log('Servidor escuchando en el puerto 10000');
});
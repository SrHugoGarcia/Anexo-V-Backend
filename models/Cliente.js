const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
    clienteID:{
        type: Number,
        require: [true,"Un cliente necesita un ID"],
        min:[10,"El ID del cliente debe de tener minimo 10 caracteres"],
        maxlength: [10,"Ell ID del cliente debe de tener maximo 10 caracteres"],
        trim: true,
    },
    cliente:{
        type: String,
        require: [true,"Un cliente necesita un nombre"],
        minlength:[2,"El nombre del cliente debe de tener como minimo 2 caracteres"],
        maxlength: [100,"El nombre del cliente debe de tener como maximo 100 caracteres"],
        trim: true,
    },
    ciudad:{
        type: String,
        require: [true,"Un cliente necesita una ciudad"],
        minlength:[2,"La ciudad del cliente debe de tener como minimo 2 caracteres"],
        maxlength: [100,"La ciudad del cliente debe de tener como maximo 100 caracteres"],
        trim: true,
    },
    trimestre:{
        type: String,
        require: [true,"Un cliente necesita un trimestre"],
        minlength:[1,"El trimestre del cliente debe de tener como minimo 2 caracteres"],
        maxlength: [1,"El trimestre del cliente debe de tener como maximo 100 caracteres"],
        trim: true,
    },
})

const Cliente = mongoose.model("Clientes", clienteSchema,"Clientes")
module.exports = Cliente;
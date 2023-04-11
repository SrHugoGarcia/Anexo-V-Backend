const mongoose = require('mongoose');

const conexionDB =async ()=>{
    /*useNewUrlParser, useUnifiedTopology, useFindAndModifyy useCreateIndex ya no son opciones 
    compatibles. Mongoose 6 siempre se comporta como si useNewUrlParser, useUnifiedTopologyy 
    useCreateIndexfueran truey useFindAndModifyes false.*/
    const db = "mongodb+srv://iktanAmbiental:v8BkpUKICq5Rvhqf@cluster1.u3cetrx.mongodb.net/IKTAN_AMBIENTAL?retryWrites=true&w=majority";


    //Parametros(conexionDataBase,{configuracion})).La promesa(nos regresa algo)
    await  mongoose.connect(db,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(con=>{
        // console.log(con.connections)
        console.log("Conexion con la base de datos exitosa");
    })
   
}


module.exports = conexionDB;
/*
const { initializeApp } =require("firebase/app");
const { getFirestore, collection, getDocs } = require('firebase/firestore');
const firebaseConfig = {
  apiKey: "AIzaSyBB2VgbxNT8PUn03NnltXYgQpXAZzAjzTQ",
  authDomain: "iktanstrategies-456ee.firebaseapp.com",
  databaseURL: "https://iktanstrategies-456ee-default-rtdb.firebaseio.com",
  projectId: "iktanstrategies-456ee",
  storageBucket: "iktanstrategies-456ee.appspot.com",
  messagingSenderId: "1013860949516",
  appId: "1:1013860949516:web:030087a2abf14db0fd1829",
  measurementId: "G-EQ2RVEXKG2"
};
const db = ()=>{
    try {
        const app = initializeApp(firebaseConfig);
        console.log("conectando db correctamente");
        return getFirestore(app);
    } catch (error) {
        console.log("Hubo un error al conectarse con la db")
    }
}

module.exports = { db };

*/
const catchAsync = require("../utils/catchAsync");
/*const {
  query,
  collection,
  doc,
  getDocs,
  getDoc,
  where,
  updateDoc
} = require("firebase/firestore");
const { db } = require("../config/db");*/

const crearAnexoV = require("../utils/anexoV")
const crearInforme = require("../utils/informe");
const AppError = require("../utils/AppError");
const SeccionII = require("../models/SeccionII");
/*
const generarAnexoV = catchAsync(async (req, res, next) => 
    const id = parseInt(req.body.idSeccionII);
    const dbOptions = db();
  
    const collectionSeccionII = collection(dbOptions, "SeccionII");
    const seccionesII = [];
    const querySnapshot = await getDocs(
      query(collectionSeccionII, where("anexoID", "==", id))
    );
    querySnapshot.forEach((doc) => {
      seccionesII.push({ id: doc.id, ...doc.data() });
    });
    if(!seccionesII[0]){
        res.status(404).json({
            status: "fail",
            data: "No existe ese ID",
        });
    }
    const url = await crearAnexoV(seccionesII);
    console.log(seccionesII)
    const docRef = doc(collectionSeccionII, seccionesII[0].id);
    console.log(docRef)
    const seccionIIDoc = await getDoc(docRef);
    const seccionIIData = seccionIIDoc.data();
    await updateDoc(docRef, { url: url });
    res.status(200).json({
      status: "successful",
      data: seccionIIData,
    });
  });
  */
 /*
  const generarInforme = catchAsync(async (req, res, next) => {
    const id = parseInt(req.body.idSeccionII);
    const dbOptions = db();
  
    const collectionSeccionII = collection(dbOptions, "SeccionII");
    const seccionesII = [];
    const querySnapshot = await getDocs(
      query(collectionSeccionII, where("anexoID", "==", id))
    );
    querySnapshot.forEach((doc) => {
      seccionesII.push({ id: doc.id, ...doc.data() });
    });
    if(!seccionesII[0]){
        res.status(404).json({
            status: "fail",
            data: "No existe ese ID",
        });
    }
    const informeURL = await crearInforme(seccionesII);
    const docRef = doc(collectionSeccionII, seccionesII[0].id);
    console.log(docRef)
    const seccionIIDoc = await getDoc(docRef);
    const seccionIIData = seccionIIDoc.data();
    await updateDoc(docRef, { informeURL });
    console.log("ok")
    res.status(200).json({
      status: "successful",
      data: seccionIIData,
    });
  });*/

  const generarAnexoV = catchAsync(async (req, res, next) => {
    const anexoID = req.body.idSeccionII;
    if(!anexoID) return next( new AppError("Ingresa un ID",400))

    const seccionII = await SeccionII.findOne({anexoID});
    if(!seccionII) return next(new AppError("Ingresa un ID valido",400));
    console.log(seccionII)
    const url = await crearAnexoV(seccionII);
    seccionII.anexoURL = url;

    const updateSecionII =await  SeccionII.updateOne({anexoID},seccionII)
    res.status(200).json({
      status: "successful",
      data: seccionII,
    });
  });

  const generarInforme = catchAsync(async (req, res, next) => {
    const anexoID = req.body.idSeccionII;
    if(!anexoID) return next(new AppError("Ingresa un ID",400))

    const seccionII = await SeccionII.findOne({anexoID});

    if(!seccionII) return next(new AppError("Ingresa un ID valido",400));

    const url = await crearInforme(seccionII);

    seccionII.informeURL = url;

    const updateSecionII = SeccionII.updateOne({anexoID},seccionII)
    res.status(200).json({
      status: "successful",
      data: seccionII,
    });
  });
module.exports = { generarAnexoV, generarInforme };

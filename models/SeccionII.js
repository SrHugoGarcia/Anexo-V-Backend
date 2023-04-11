const mongoose = require('mongoose');

const seccionIISchema = new mongoose.Schema({
   anexoID: {
    type: Number,
    require: [true,"Una seccion II necesita un ID"],
    min:[10,"El ID de la seccion II debe de tener minimo 10 caracteres"],
    maxlength: [10,"El ID de la seccion II debe de tener maximo 10 caracteres"],
    trim: true,
},
  nombreInstalacion: {
    type: String,
    minlength:[2,"El nombre de instalacion debe de tener como minimo 2 caracteres"],
    maxlength: [100,"El nombre de instalacion debe de tener como maximo 100 caracteres"],
    trim: true,
},
  idComponente: {
    type: Number,
    min:[5,"El ID de la seccion II debe de tener minimo 5 caracteres"],
    max: [5,"El ID de la seccion II debe de tener maximo 5 caracteres"],
    trim: true,
},
  ubicacionInstalacion: {
    type: String,
    minlength:[2,"La ubicacion de la instalacion debe de tener minimo 2 caracteres"],
    maxlength: [100,"La ubicacion de la instalacion debe de tener maximo 100 caracteres"],
    trim: true,
},
  equipoCritico: {
    type: String,
    minlength:[2,"El equipo critico debe de tener minimo 2 caracteres"],
    maxlength: [100,"El equipo critico  debe de tener maximo 100 caracteres"],
    trim: true,
},
  inspeccionTecnicaRiesgo: {
    type: String,
    minlength:[2,"La inspeccion tecnica del riesgo debe de tener minimo 2 caracteres"],
    maxlength: [100,"La inspeccion tecnica del riesgo debe de tener maximo 100 caracteres"],
    trim: true,
},
  nombrePersonal:  {
    type: String,
    minlength:[2,"El nombre del personal debe de tener minimo 2 caracteres"],
    maxlength: [100,"El nombre del personal debe de tener maximo 100 caracteres"],
    trim: true,
},
  fechaInicioInspeccion:  {
    type: String,
    trim: true,
},
  horaInicioInspeccion:  {
    type: String,
    trim: true,
},
  fechafinalizacionInspeccion:  {
    type: String,
    trim: true,
},
  horafinalizacionInspeccion:  {
    type: String,
    trim: true,
},
  velocidadViento:  {
    type: String,
    trim: true,
},
  temperatura:  {
    type: String,
    trim: true,
},
  instrumentoUtilizado:  {
    type: String,
    trim: true,
},
  fechaCalibracion:  {
    type: String,
    trim: true,
},
  desviacionProcedimiento:  {
    type: String,
    trim: true,
},
  justificacionDesviacion:  {
    type: String,
    trim: true,
},
  interferenciaDeteccion:  {
    type: String,
    trim: true,
},
  concentracionPrevia:  {
    type: String,
    trim: true,
},
  reparado:  {
    type: String,
    trim: true,
},
  fechaReparacion:  {
    type: String,
    trim: true,
},
  horaReparacion:  {
    type: String,
    trim: true,
},
  fechaComprobacionReparacion:  {
    type: String,
    trim: true,
},
  horaComprobacionReparacion:  {
    type: String,
    trim: true,
},
  concentracionPosteriorReparacion:  {
    type: String,
    trim: true,
},
  noReparadofaltaComponentes:  {
    type: String,
    trim: true,
},
  fechaRemisionComponente:  {
    type: String,
    trim: true,
},
  fechaReperacionComponente:  {
    type: String,
    trim: true,
},
  fechaRemplazoEquipo:  {
    type: String,
    trim: true,
},
  volumenMetano:  {
    type: String,
    trim: true,
},
  fuga:  {
    type: String,
    trim: true,
},
  observacionPersonal:  {
    type: String,
    trim: true,
},
  observacion:  {
    type: String,
    trim: true,
},
  imagen:  {
    type: String,
    trim: true,
    },  
imagenInfrarroja:  {
    type: String,
    trim: true,
},
  anexoURL:  {
    type: String,
    trim: true,
},
  informeURL:  {
    type: String,
    trim: true,
},
  trimestre:  {
    type: String,
    trim: true,
},
  clienteID : {
    type: Number,
    trim: true,
},
})

const SeccionII = mongoose.model("SeccionII", seccionIISchema,"SeccionII");

module.exports = SeccionII;
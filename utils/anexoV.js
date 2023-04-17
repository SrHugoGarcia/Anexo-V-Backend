const pdf = require('html-pdf');
const S3 = require('aws-sdk/clients/s3');

const puppeteer = require('puppeteer');

const createPDFBuffer = async (html, opciones) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(html);
  const buffer = await page.pdf(opciones);
  await browser.close();
  return buffer;
};

const crearAnexoV = async (seccionII) => {
  const s3 = new S3({
    region: '',
    accessKeyId: '',
    secretAccessKey: ''
  });
  const opciones = {
    format: 'Letter', //A3, A4, A5, Legal, Letter 
    orientation: 'portrait',
    printBackground: true,
    margin: {
      top: '.8cm',
      right: '.6cm',
      bottom: '.6cm',
      left: '.6cm',
    },
  };
  
  const templateHTML = html(seccionII);
  const fileName = `AnexoV-${seccionII.anexoID}-${Date.now()}.pdf`;
  console.log("PASA")
  const buffer = await createPDFBuffer(templateHTML, opciones);
  const uploadConstancia = {
    Bucket: 'iktan-training-production',    
    Body: buffer,
    Key: `IKTAN-Ambiental/Anexos V/${fileName}`
  };
  const respuesta = await s3.upload(uploadConstancia).promise();
  return respuesta.Location;
};


const html = (seccionII)=>{
 
const contenido = `
<!DOCTYPE html>
<html>
  <head>
    <style>
    * {
    font-family: Arial, sans-serif;
  }
  .container {
    
    flex-direction: column;
    width: 100%;
  }
  .column {
    height: auto;
    flex: 1;
  }
  
  .column-1 {
    background-color: #3B3838;
    color: white;
    border-top: 1px solid black;
    border-bottom: 0px solid black;
    border-left: 1px solid black;
    border-right: 1px solid black;
    padding-top: 10px;
    padding-left: 15px;
    padding-bottom: 10px;
    padding-right: 10px;
    font-weight: 600;
    font-size: 12px;
  }
  
  .column-2 {
    background-color: #D9D9D9;
    text-align: center;
    font-size: 12px; 
    padding-left: 40px;
    padding-right: 40px;
    border: 1px solid black;
    font-weight: 400;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .tituloysub{
    font-size: 12px; 
    text-align: center; 
    line-height: 0px;
  }
  .segundatablablanca{
    border-color: #A6A6A6; 
    font-size: 11px; 
    text-align: center; 
    line-height: 3px; 
    background-color: #FFFFFF; 
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .segundatablablanca2{
    border-color: #A6A6A6; 
    font-size: 11px; 
    text-align: center; 
    line-height: 3px; 
    background-color: #D9D9D9;
    padding-top: 10px;
    padding-bottom: 10px; 
  }
   
  .seccionIyII {
    font-size: 12px; 
    text-align: center; 
    line-height: 3px; 
    background-color: #D9D9D9; 
    border-color: #A6A6A6;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .fondbordseccI{
    background-color: #FFFFFF; 
    border-color: #A6A6A6;
  }
  .trestitulosSeccionII{
    background-color: #ffffff; 
    border-color: #A6A6A6; 
    padding-left: 0px; 
    padding-right: 0px; 
    text-align: center; 
    line-height: 10px;
    font-size: 11px;
  }
  .titulosseccionII{
    width: 10%; 
    background-color: #ffffff; 
    border-color: #A6A6A6; 
    padding-left: 4px; 
    padding-right: 0px; 
    text-align: start; 
    line-height: 12px;
  }
    .tresopciones{
      width: 10%; 
      background-color: #ffffff; 
      border-color: #A6A6A6; 
      padding-left: 0px; 
      padding-right: 0px; 
      padding-top: 0px;
    }
    
    .contenedortresopciones{
      height: 100%; 
      display: flex; 
      justify-content: 
      space-between; 
      align-items: center;
    }
  .primeraopcion{
      width: 100%; 
      background-color: white; 
      height: 33.33%; 
      border-bottom: 1px solid #A6A6A6; 
      padding-bottom: 0px;
  }
  .segundaopcion{
    width: 100%; 
    background-color: white; 
    height: 33.33%; 
    border-bottom: 1px solid #A6A6A6; 
    padding-top: 0px; 
    padding-bottom: 4px;
  }
 
  .terceraopcion{
    width: 100%; 
    background-color: white; 
    height: 33.33%; 
    padding-top: 0px; 
    padding-bottom: 0px; 
    margin-bottom: 0px; 
  }
  .margendospx{
    margin-left: 2px;
  }
  .margendospxsize{
    margin-left: 2px;
    font-size: 6px;
  }
  .paddingtrecepx{
    padding-left: 13px;
  }
  .paddingcincopx{
    padding-left: 5px;
  }
  .diseñocolumnahojados{
    font-size: 11px; 
    text-align: start; 
    line-height: 6px;
  }
  .bodytablahojauno{
    width: 100%; 
    background-color: #ffffff; 
    border-color: #A6A6A6;
  }
  .espaciotabladearriba{
    margin-top: 12px;
  }
  .primerparrafo{
    font-size: 9px; 
    font-weight: 600; 
    text-align: center; 
    line-height: 10px; 
    padding-top: 35px;
  }
  .tituloseccionII{
    font-size: 11px; 
    text-align: start; 
    line-height: 3px; 
    background-color: #D9D9D9; 
    border-color: #A6A6A6;
  }
  .seccionIIsubtitulos3{
    background-color: #ffffff; 
    border-color: #A6A6A6; 
    padding-left: 0px; 
    padding-right: 0px; 
    text-align: center; 
    line-height: 4px;
  }
  .temasseccionII{
    width: 12%; 
    background-color: #ffffff; 
    border-color: #A6A6A6; 
    padding-left: 0px; 
    padding-right: 0px; 
    text-align: center; 
    line-height: 8px;
  }
  .filaseccionII{
    font-size: 7px; 
    text-align: center; 
    line-height: 6px;
  }
  .casillaenblancoseccionIII{
    width: 12%; 
    background-color: #ffffff; 
    border-color: #A6A6A6; 
    padding-left: 0px; 
    padding-right: 0px;
  }
  .contenedortresopcionesseccionIII{
    width: 12%; 
    background-color: #ffffff; 
    border-color: #A6A6A6; 
    padding-left: 0px; 
    padding-right: 0px; 
    padding-top: 0px;
  }
  .tresopcionesseccionIII{
    height: 100%; 
    display: flex; 
    justify-content: space-between; 
    align-items: center;
  }
  .casillascirculos{
    width: 10%; 
    background-color: #ffffff; 
    border-color: #A6A6A6; 
    padding-left: 0px; 
    padding-right: 0px; 
    text-align: center; 
    line-height: 8px;
  }
  .tituloseccionIV{
    font-size: 12px; 
    text-align: center; 
    line-height: 3px; 
    background-color: #D9D9D9; 
    border-color: #A6A6A6;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .opcionesseccionIV{
    background-color: #ffffff; 
    border-color: #A6A6A6; 
    padding-left: 0px; 
    padding-right: 0px; 
    text-align: center; 
    line-height: 4px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 11px; 
  }
  .filasseccionIV{
    font-size: 11px; 
    text-align: center; 
    line-height: 4px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .casillascirculostexto{
    width: 70%; 
    background-color: #ffffff; 
    border-color: #A6A6A6; 
    padding-left: 0px; 
    padding-right: 0px; 
    text-align: start; 
    line-height: 8px; 
    padding-left: 5px;
  }
  .firmasynombre{
    width: 50%; 
    height: 45px; 
    background-color: #ffffff; 
    border-color: #A6A6A6; 
    padding-left: 0px; 
    padding-right: 0px; 
    text-align: center; 
    line-height: 8px;
  }
  .filafirmasynombre{
    font-size: 7px; 
    text-align: center; 
    line-height: 6px;
  }
  .parrafodos{
    font-size: 11px; 
    font-weight: 400; 
    text-align: justify; 
    line-height: 10px;
  }
  .interlineadodiezpx{
    line-height: 11px;
  }
  .interlineadoochopx{
    line-height: 8px;
  }
  .container2 {
    width: 100%;
    overflow: auto;
  }
  .seccion1{
    float: left;
    width: 49%; 
  }
  .seccion2{
    float: right;
    width: 49%;
    
    text-align: center;
  }
  
  table {
    border-collapse: collapse;
    width: 100%;
  }
  th {
    border: 1px solid black;
    padding: 8px;
    text-align: left;
  }
  td {
    border: 1px solid black;
    padding: 8px;
    text-align: left;
    height: 0px;
  }
  th {
    background-color: #ddd;
  }
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  
  .container3 {
    position: absolute;
    display: flex;
    height: 80px; /* altura del 100% del viewport */
    width: 100%; /* ancho del 100% del viewport */
  }
  
  .tablacompleta {
    page-break-inside: avoid;
  }
  .fondorojo{
    
  }
    </style>
  </head>
  <body>
   
  <div> <!----------------------------------Hoja 1 ----------------------->
  <div class="container">
      <div class="column column-1">gob<span style="color: red;">.</span>mx </div>
      <div class="column column-2"> Agencia Nacional de Seguridad Industrial y de Protección al Medio Ambiente del Sector Hidrocarburos
      Unidad de Gestión Industrial</div>
  </div>

  <div class="container">
      <h2 class="tituloysub" style=" padding-top: 5px; font-weight: 400; " >Anexo V</h2></p>
  
      <p class="tituloysub" style="  padding-top: 0px; padding-bottom: 0px; line-height: 5px;" >Formato registro de las acciones implementadas de Detección y Reparación de Fugas por equipo o Componente.
      </div>
  
  <div class="container2 ">
     <div class="seccion1"> 
     <table class="tablacompleta">
     <tr>
       <td class="segundatablablanca2">Homoclave del formato</td>
     </tr>
     <tr>
       <td class="segundatablablanca">FF-ASEA-033</td>
     </tr>
     <tr>
       <td class="segundatablablanca2" >Lugar de elaboración</td>
     </tr>
     <tr>
       <td class="segundatablablanca"> Hola </td>
     </tr>
   </table>
     </div>
     <div class="seccion2"> 
     <table class="tablacompleta">
     <tr>
       <td class="segundatablablanca2" >Fecha de publicación del formato en el DOF</th>
     </tr>
     <tr>
       <td class="segundatablablanca"> 06 11 2018</td>
     </tr>
     <tr>
       <td class="segundatablablanca2" >Fecha de elaboración</td>
     </tr>
     <tr ">
       <td class="segundatablablanca">DD MM AAAA</td>
     </tr>
   </table>
  </div>
  
  <div class="container2">
  <div class="espaciotabladearriba"> 
      <table class="tablacompleta" style="width: 100%; ">
          <tr>
              <td colspan="8" style="font-size: 12px; text-align: center; line-height: 3px; background-color: #D9D9D9; border-color: #A6A6A6; padding-top: 10px; padding-bottom: 10px;">Sección I. Datos generales</td>
          </tr>
          <tr style="width: 100%;">
              <td style="text-align: center; line-height: 10px; background-color: #FFFFFF; border-color: #A6A6A6; width: 11%; font-size: 11px; text-align: justify; padding-top: 10px; padding-bottom: 10px; " >Nombre de la Instalación</td>
              <td style="text-align: center; line-height: 10px; background-color: #FFFFFF; border-color: #A6A6A6; width: 37%; font-size: 11px; text-align: justify; padding-top: 10px; padding-bottom: 10px; " >${seccionII.nombreInstalacion ? seccionII.nombreInstalacion :""}</td>
              <td style="text-align: center; line-height: 10px; background-color: #FFFFFF; border-color: #A6A6A6; width: 11%;  font-size: 11px; text-align: justify; padding-top: 10px; padding-bottom: 10px;" >Ubicación de la instalación</td>
              <td colspan="5" style="text-align: center; line-height: 10px; background-color: #FFFFFF; border-color: #A6A6A6; width: 41%; font-size: 11px; text-align: justify; padding-top: 10px; padding-bottom: 10px;" >${seccionII.ubicacionInstalacion ? seccionII.ubicacionInstalacion : ""}</td>
          </tr>
          
          <tr style="width: 100%;">
            <td style="text-align: center; line-height: 10px; background-color: #FFFFFF; border-color: #A6A6A6; width: 11%;  font-size: 11px; text-align: justify;" >Id y tipo de equipo a Componente</td>
            <td style="text-align: center; line-height: 10px; background-color: #FFFFFF; border-color: #A6A6A6; width: 37%;  font-size: 11px; text-align: justify;" >${seccionII.idComponente ? seccionII.idComponente : ""}</td>
            <td style="text-align: center; line-height: 10px; background-color: #FFFFFF; border-color: #A6A6A6; width: 11%;  font-size: 11px; text-align: justify;" >Equipo critico</td> 
            <td style="text-align: center; line-height: 10px; background-color: #FFFFFF; border-color: #A6A6A6; width: %7;  font-size: 11px; text-align: justify; " >
            <label  class="margendospxsize" ><input type="radio" style=" margin-right: 4px; "  name="estado"  ${(seccionII.equipoCritico == "Si") ? "checked":""} ></label>Si
            </td>
            <td style="text-align: center; line-height: 10px; background-color: #FFFFFF; border-color: #A6A6A6; width: %7; font-size: 11px; text-align: justify; " >
            <label class="margendospxsize"><input type="radio" style=" margin-right: 4px; font-size: 14px;" name="estado1" ${(seccionII.equipoCritico == "No") ? "checked":""}></label>No
            </td>
            <td style="text-align: center; line-height: 10px; background-color: #FFFFFF; border-color: #A6A6A6; width: 10%; font-size: 11px; text-align: justify;" >Inspección tecnica del riesgo</td>
            <td style="text-align: center; line-height: 10px; background-color: #FFFFFF; border-color: #A6A6A6; width: %7; font-size: 11px; text-align: justify; " >
            <label class="margendospxsize"><input type="radio" style=" margin-right: 4px; font-size: 14px;" name="estado2" ${(seccionII.inspeccionTecnicaRiesgo == "Si") ? "checked":""}></label>Si
            </td>
            <td style="text-align: center; line-height: 10px; background-color: #FFFFFF; border-color: #A6A6A6; width: 8%; font-size: 11px; text-align: justify; " >
            <label class="margendospxsize"><input type="radio" style=" margin-right: 4px; font-size: 14px;" name="estado3" ${(seccionII.inspeccionTecnicaRiesgo == "No") ? "checked":""} ></label>No
            </td>
          </tr>
      </table>
  </div>
</div>
  
  
<table class="espaciotabladearriba">
  <thead >
    <tr>
      <td colspan="7" class="seccionIyII" >Sección II. Detalle de las acciones del programa de Detección y Reparacion de Fugas</td>
      
    </tr>
    <tr style="font-size: 11px; text-align: center; line-height: 10px;">
      <td class="trestitulosSeccionII" style="width: 40%;" ></td>
      <td class="trestitulosSeccionII" style="width: 11%; line-height: 10px;">Inspección técnica 1</td>
      <td class="trestitulosSeccionII" style="width: 11%; line-height: 10px;">Inspección técnica 2</td>
      <td class="trestitulosSeccionII" style="width: 11%; line-height: 10px;">Inspección técnica 3</td>
      <td class="trestitulosSeccionII" style="width: 11%; line-height: 10px;">Inspección técnica 4</td>
      <td class="trestitulosSeccionII" style="width: 11%; line-height: 10px;">Inspección técnica 5</td>
    </tr>
  </thead>
  <tbody id="tabla-body" class="bodytablahojauno">
    <tr class="diseñocolumnahojados">
      <td class="titulosseccionII" >Nombre del personal que implemento el programa</td>
      <td class="titulosseccionII">${seccionII.nombrePersonal ? seccionII.nombrePersonal: "" } </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
     
    </tr>
    
    <tr class="diseñocolumnahojados" >    <!-- Fila2 -->
      <td class="titulosseccionII" >Fecha de inicio de la inspección técnica (dd/mm/aaaa)</td>
      <td class="titulosseccionII">${seccionII.fechaInicioInspeccion ? seccionII.fechaInicioInspeccion : ""} </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
    
    </tr>
    <tr class="diseñocolumnahojados" >    <!-- Fila3 -->
      <td class="titulosseccionII" >Hora de inicio de la inspección técnica (hh:mm)</td>
      <td class="titulosseccionII">${seccionII.horaInicioInspeccion ? seccionII.horaInicioInspeccion : "" } </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>

    </tr>
    <tr class="diseñocolumnahojados" >    <!-- Fila4 -->
      <td class="titulosseccionII" >Fecha de conclusión de la inspección técnica</td>
      <td class="titulosseccionII">${seccionII.fechafinalizacionInspeccion ? seccionII.fechafinalizacionInspeccion :""} </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
 
    </tr>
    <tr class="diseñocolumnahojados" >    <!-- Fila5 -->
      <td class="titulosseccionII" >Hora de conclusión de la inspección técnica</td>
      <td class="titulosseccionII"> ${seccionII.horafinalizacionInspeccion ? seccionII.horafinalizacionInspeccion:""}</td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      
    </tr>
    <tr class="diseñocolumnahojados" >    <!-- Fila6 -->
      <td class="titulosseccionII" >Factores técnicos y ambientales durante la inpección técnica</td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
    
    </tr>
    
    <tr class="diseñocolumnahojados" >    <!-- Fila7 -->
      <td class="titulosseccionII" >Instrumento utilizado para la detección</td>
      <td class="titulosseccionII"> ${seccionII.instrumentoUtilizado ? seccionII.instrumentoUtilizado : ""}</td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
 
    </tr>
    <tr class="diseñocolumnahojados" >    <!-- Fila8 -->
      <td class="titulosseccionII" >Fecha de calibración y de prueba del instrumento (dd/mm/aaaa)</td>
      <td class="titulosseccionII">${seccionII.fechaCalibracion ? seccionII.fechaCalibracion : ""} </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
    </tr>
    <tr class="diseñocolumnahojados" >    <!-- Fila9 -->
      <td class="titulosseccionII" >Desviaciones del procedimiento de inspección técnica</td>
      <td class="titulosseccionII"> ${seccionII.desviacionProcedimiento ? seccionII.desviacionProcedimiento : ""}</td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
  
    </tr>
    <tr class="diseñocolumnahojados" >    <!-- Fila10 -->
      <td class="titulosseccionII" >Justificación de las desviaciones del procedimiento de inspección técnica </td>
      <td class="titulosseccionII">${seccionII.justificacionDesviacion ? seccionII.justificacionDesviacion : "" } </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
  
    </tr>
    <tr class="diseñocolumnahojados" >    <!-- Fila11 -->
      <td class="titulosseccionII" >Interferencias en la detección</td>
      <td class="titulosseccionII">${seccionII.interferenciaDeteccion ? seccionII.interferenciaDeteccion : ""} </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
  
    </tr>
    <tr class="diseñocolumnahojados" >    <!-- Fila12 -->
      <td class="titulosseccionII" >Concentración previa a la reparación(ppm) </td>
      <td class="titulosseccionII"> ${seccionII.concentracionPrevia ? seccionII.concentracionPrevia : ""}</td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
  
    </tr>
    <tr class="diseñocolumnahojados" >    <!-- Fila13 -->
      <td class="titulosseccionII" >¿Pudo ser reparado?</td>
      <td class="titulosseccionII" style="padding: 0px;"> 
      <div style="display: -webkit-box; display: -ms-flexbox; display: flex; width: 100%">
        <div style="width: 50%; border-right: 1px solid #A6A6A6; padding-top: 6px; padding-bottom: 6px; ">
        <label class="margendospxsize"><input type="radio" style=" margin-right: 4px;"  ${(seccionII.reparado == "Si") ? "checked" : ""} name="estado4"></label>Si
        </div>
        <div style="width: 50%; padding-top: 6px;">
        <label class="margendospxsize"><input type="radio" style=" margin-right: 4px;" ${(seccionII.reparado == "No") ? "checked" : ""} name="estado5"></label>No
        </div>
      </div>
      </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
  
    </tr>
   
    <!-- Agrega más filas aquí -->
  </tbody>
</table>
<!-- Restatnte de tabla inicia -->
<table class="espaciotabladearriba tablacompleta">
  <thead >
    
    <tr style="font-size: 11px; text-align: center; line-height: 10px;">
      <td class="trestitulosSeccionII" style="width: 40%;" ></td>
      <td class="trestitulosSeccionII" style="width: 11%; line-height: 10px;">Inspección técnica 1</td>
      <td class="trestitulosSeccionII" style="width: 11%; line-height: 10px;">Inspección técnica 2</td>
      <td class="trestitulosSeccionII" style="width: 11%; line-height: 10px;">Inspección técnica 3</td>
      <td class="trestitulosSeccionII" style="width: 11%; line-height: 10px;">Inspección técnica 4</td>
      <td class="trestitulosSeccionII" style="width: 11%; line-height: 10px;">Inspección técnica 5</td>
    </tr>
  </thead>
  <tbody id="tabla-body" class="bodytablahojauno">
    <tr class="diseñocolumnahojados">
      <td class="titulosseccionII" >Fecha de la reparación (dd/mm/aaaa)</td>
      <td class="titulosseccionII">${seccionII.fechaReparacion ? seccionII.fechaReparacion : ""} </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      
    </tr>
    
    <tr class="diseñocolumnahojados" >    <!-- Fila2 -->
    <td class="titulosseccionII">Hora de la reparación (hh:mm)</td>
      <td class="titulosseccionII">${seccionII.horaReparacion ? seccionII.horaReparacion : ""} </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
    
    </tr>
    <tr class="diseñocolumnahojados" >    <!-- Fila3 -->
    <td class="titulosseccionII">Fecha de comprobación de la reparación (dd/mm/aaaa)</td>
      <td class="titulosseccionII">${seccionII.fechaComprobacionReparacion ? seccionII.fechaComprobacionReparacion : ""} </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>

    </tr>
 
    <tr class="diseñocolumnahojados" >    <!-- Fila5 -->
      <td class="titulosseccionII">Hora de comprobaión de la reparación (hh:mm)</td>
      <td class="titulosseccionII">${seccionII.horaComprobacionReparacion ? seccionII.horaComprobacionReparacion: "" } </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      
    </tr>
    <tr class="diseñocolumnahojados" >    <!-- Fila6 -->
      <td class="titulosseccionII">Concentración posterior a la reparación (ppm)</td>
      <td class="titulosseccionII"> ${seccionII.concentracionPosteriorReparacion ? seccionII.concentracionPosteriorReparacion : ""}</td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
    
    </tr>
    
    <tr class="diseñocolumnahojados" >    <!-- Fila7 -->
      <td class="titulosseccionII">¿No pudo ser reparado por falta de componentes?</td>
      <td class="titulosseccionII" style="padding: 0px;"> 
      <div style="display: -webkit-box; display: -ms-flexbox; display: flex; width: 100%">
        <div style="width: 33%; border-right: 1px solid #A6A6A6; padding-top: 6px; padding-bottom: 6px; ">
        <label class="margendospxsize"><input type="radio"  ${(seccionII.noReparadofaltaComponentes == "Si") ? "checked" : "" } style=" margin-right: 0px;" name="estado7"></label>Si
        </div>
        <div style="width: 33%; border-right: 1px solid #A6A6A6; padding-top: 6px; padding-bottom: 6px;">
        <label class="margendospxsize"><input type="radio" style=" margin-right: 0px; " ${(seccionII.noReparadofaltaComponentes == "No") ? "checked" : "" } name="estado8"></label>No
        </div>
        <div style="width: 34%; padding-top: 6px;">
        <label class="margendospxsize"><input type="radio" style=" margin-right: 0px; "  ${(seccionII.noReparadofaltaComponentes == "N/A") ? "checked" : "" } name="estado9"></label>N/A*
        </div>
      </div>
      </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
 
    </tr>
    <tr class="diseñocolumnahojados" >    <!-- Fila8 -->
      <td class="titulosseccionII">Fecha de remisión o compra del componente (dd/mm/aaaa)</td>
      <td class="titulosseccionII"> ${seccionII.fechaRemisionComponente ? seccionII.fechaRemisionComponente : "" } </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
    </tr>
    <tr class="diseñocolumnahojados" >    <!-- Fila9 -->
      <td class="titulosseccionII">Fecha de reparación o compra del componente adquirido (dd/mm/aaaa)</td>
      <td class="titulosseccionII">${seccionII.fechaReperacionComponente ? seccionII.fechaReperacionComponente : ""} </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
  
    </tr>
    <tr class="diseñocolumnahojados" >    <!-- Fila10 -->
      <td class="titulosseccionII">Fecha de reemplazo del equipo sino pudo ser reparado (dd/mm/aaaa)</td>
      <td class="titulosseccionII">${seccionII.fechaRemplazoEquipo ? seccionII.fechaRemplazoEquipo  : ""} </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
  
    </tr>
    <tr class="diseñocolumnahojados" >    <!-- Fila11 -->
      <td class="titulosseccionII">Volumen de metano fugado (g/kg/t)</td>
      <td class="titulosseccionII"> ${seccionII.volumenMetano ? seccionII.volumenMetano:""} </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
  
    </tr>
    
   
    <!-- Agrega más filas aquí -->
  </tbody>
</table>
<!-- Restatnte de tabla Finaliza -->
   <div class="container">
      <p class="primerparrafo" >De conformidad con el artículo 4 de la Ley Federal de Procedimiento Administrativo, los formatos para solicitar trámites y servicios deberán publicarse en el Diario Oficial de la
      Federación (DOF).</p>
  </div>
 

</div> <!----------------------------------Hoja 1 Fin ----------------------->

<div> <!----------------------------------Hoja 2  -------------------------->

<table class="tablacompleta espaciotabladearriba" >
  <thead >
    <tr>
      <td colspan="4" class="tituloseccionIV" >Sección III. Documentos anexos al formato</td>
    </tr>
    <tr class="filasseccionIV">
      <td class="opcionesseccionIV" >Si</td>
      <td class="opcionesseccionIV" >No</td>
      <td class="opcionesseccionIV" >No aplica</td>
      <td style="background-color: #ffffff; border-color: #A6A6A6; padding-left: 0px; padding-right: 0px; text-align: start; line-height: 4px; padding-left: 5px;">Documento</td>
    </tr>
  </thead>
  <tbody id="tabla-body" style="width: 100%; background-color: #ffffff; border-color: #A6A6A6; padding: ">
    <tr class="filasseccionIV" >
      <td class="casillascirculos"> <label class="margendospx" ><input type="radio"  name="estado"></label></td>
      <td class="casillascirculos"> <label class="margendospx" ><input type="radio"  name="estado"></label></td>
      <td class="casillascirculos"> <label class="margendospx" ><input type="radio"  name="estado"></label></td>
      <td class="casillascirculostexto" >Documentación probatoria de la remisión o compra del equipo y/o Componente</td>
    </tr>
   
          
    
    <!-- Agrega más filas aquí -->
  </tbody>
</table>
<table class="tablacompleta espaciotabladearriba" >
  <thead >
    <tr>
      <td  class="seccionIyII" >Nombre del responsable que implementó el programa</td>
      <td  class="seccionIyII" >Firma del responsable que implementó el programa</td>
    </tr>
  </thead>
  <tbody id="tabla-body" style="width: 100%; background-color: #ffffff; border-color: #A6A6A6; padding: ">
    <tr class="filafirmasynombre" >
      <td class="firmasynombre"> <label class="margendospx"> </td>
      <td class="firmasynombre"> <label class="margendospx"> </td>
    </tr>
    
    <!-- Agrega más filas aquí -->
  </tbody>
</table>
<div>
  <p class="parrafodos"> Los datos personales recabados para la atención de su trámite serán protegidos, incorporados y tratados, con fundamento en el artículo  15 de la 
  LFPA, Lo anterior en cumplimiento del décimo séptimo de los lineamientos de protección de datos personales publicados en el Diario Oficial de la 
  Federación el 30 de septiembre de 2005.
   </p>
<div>
</div> <!----------------------------------Hoja 2 Fin ----------------------->

<div> <!----------------------------------Hoja 3 --------------------------->
<table class="tablacompleta espaciotabladearriba" >
  <thead >
    <tr>
      <td class="seccionIyII" >Instructivo para el llenado del formato Anexo V </td>
    </tr>
  </thead>
  <tbody id="tabla-body" style="width: 100%; font-size: 11px; background-color: #ffffff; border-color: #A6A6A6;  ">
    <tr style="filasseccionIV" >
      <td style="width: 100%; height: 45px; background-color: #ffffff; border-color: #A6A6A6; padding-left: 0px; padding-right: 0px; line-height: 10px;">  
      
      <p class="text-align: start;  padding: 0px; margin: 0px; line-height: 0px; left: 2%;"> <strong><span style=" color: transparent;">---</span>Indicaciones generales</strong><p>
        <div>
      <ol type="a" style="font-size: 11px;>     
          <li class="interlineadodiezpx" > Esta solicitud deberá ser llenada en computadora.</li>
          <li class="interlineadodiezpx" > Esta solicitud deberá presentarse a la Agencia en medios físicos, magnéticos o electrónicos.</li>
          <li class="interlineadodiezpx" > Se deberá llenar un formato por equipo o Componente dentro del programa de Detección y Reparación por Fuga.</li>
          <li class="interlineadodiezpx" > Se deberá llenar una columna por cada inspección técnica. </li>
        </ol>
        </div>
      <div style=" position: relative; width: 100%;">
      <p class="text-align: start; left: 2%;"> <strong><span style=" color: transparent;">---</span>Información requerida en el formato</strong><p>
      <div>
      <ol type="i" start="1" >
        <li>Sección I: Datos generales</li>
        <ol type="a" style=" padding-top: 5px; padding-bottom: 7px;  ">
              <li class="interlineadodiezpx" > Escribir el nombre de la instalación</li>
              <li class="interlineadodiezpx" > Escribir la ubicación de la instalación. Domicilio y coordenadas geograficas en UTM (share file)</li>
              <li class="interlineadodiezpx" > Escribir la Clave Unica de Registro del Regulado</li>
              <li class="interlineadodiezpx" > Escribir el Id y tipo de equipo o Componente objeto del formato</li>
              <li class="interlineadodiezpx" > Indicar con una X si se trata de equipo critico o no</li>
              <li class="interlineadodiezpx" > Indicar con una X si el equipo o Componente conlleva una inspección técnica de riesgo o no.</li>
          </ol>
        <li>Sección II: Detalle de la inspección</li>
        <ol type="a" style=" padding-top: 5px; padding-bottom: 7px; ">
              <li class="interlineadodiezpx" >Anotar el nombre completo del personal que implementó el programa.</li>
              <li class="interlineadodiezpx" >Escribir la fecha de inicio de la detección.</li>
              <li class="interlineadodiezpx" >Escribir la hora de inicio de la detección.</li>
              <li class="interlineadodiezpx" >Escribir la fecha de conclusión de la detección.</li>
              <li class="interlineadodiezpx" >Escribir la hora de conclusión de la detección.</li>
              <li class="interlineadodiezpx" >Describir los factores técnicos y ambientales durante la detección.</li>
              <li class="interlineadodiezpx" >Indicar el instrumento utilizado para la detección.</li>
              <li class="interlineadodiezpx" >Anotar las fechas de la calibración y prueba de los instrumentos.</li>
              <li class="interlineadodiezpx">En su caso, describir las desviaciones del procedimiento de inspección técnica.</li>
              <li class="interlineadodiezpx">En su caso, justificar las desviaciones del procedimiento de inspección técnica.</li>
              <li class="interlineadodiezpx" >Describir las interferencias durante la detección.</li>
              <li class="interlineadodiezpx" >Anotar la concentración previa a la reparación en partes por millón.</li>
              <li class="interlineadodiezpx" >Indicar con una X si pudo ser reparada o no.</li>
              <li class="interlineadodiezpx" >Escribir la fecha de la reparación.</li>
              <li class="interlineadodiezpx" >Escribir la hora de la reparación.</li>
              <li class="interlineadodiezpx" >Escribir la fecha de la comprobación de la reparación.</li>
              <li class="interlineadodiezpx" >Escribir la hora de la comprobación de la reparación.</li>
              <li class="interlineadodiezpx" >Anotar la concentración posterior a la reparación en partes por millón.</li>
              <li class="interlineadodiezpx" >En caso de no poderse reparar, indicar si esto se debió o no a una falta de Componentes.</li>
              <li class="interlineadodiezpx" >En su caso, escribir la fecha de reparación utilizando el Componente adquirido.</li>
              <li class="interlineadodiezpx" >En su caso, escribir la fecha de reemplazo del equipo que no pudo ser reparado.</li>
              <li class="interlineadodiezpx" >Anotar el volumen total de metano fugado del equipo o Componente en gramos (g), kilogramos (kg) o toneladas (t).</li>
          </ol>
        <li>Sección III: Documentos anexos al formato
          <ol type="a" style=" padding-top: 5px; padding-bottom: 0px; ">
              <li class="interlineadodiezpx" >Adjuntar la documentación probatoria de la remisión o compra del Componente</li>
          </ol>
        </li>
      </ol>        
      </td>
    </tr>
    <!-- Agrega más filas aquí -->
  </tbody>
</table>
</div> <!----------------------------------Hoja 3 Fin ----------------------->


 
<!--Footer 1--> 
<div style=" width:100%; height: auto; bottom: 0; background-color: #D9D9D9; border-top: 1px solid #767171; margin-top: 12px;" >
<div style="width:22%; height: auto; display:inline-block; left:0; vertical-align: middle;  "> <img src="https://i.imgur.com/09HeOR0.png" width="120px" height="auto" style="padding-left: 18px; padding-bottom: 15px;" > </div>
<div style="width:11%; height: auto; display:inline-block; left:20%; vertical-align: middle; "> <img src="https://i.imgur.com/Kz7xzj7.png" width="80px" height="auto"  style="padding-bottom: 11px;"> </div>
<div style="width:11%; height: auto; display:inline-block; left:40%; vertical-align: middle; "> <img src="https://i.imgur.com/mp2K5fP.png" width="80px" height="auto"  style="padding-bottom: 15px;"> </div>
<div style="width:12%; height: auto; display:inline-block; left:60%; vertical-align: middle;  "> <img src="https://i.imgur.com/Ws1Ngrd.png" width="80px" height="auto" style="padding-bottom: 15px;" > </div>
<div style="width:39%; height: auto; display:inline-block; left:80%;"> 
    <p style=" line-height: 0px; padding: 0px; padding-top: 10px; margin: 0px; font-size: 11px; font-weight: 600; ">Contacto: </p>  
    <p style=" line-height: 10px; font-size: 10px; padding-right: 50px; "> Boulevard Adolfo Ruiz Cortines No. 4209,
    Colonia Jardines en la Montaña, C.P. 14210,
    Delegación Tlalpan, Ciudad de México,
    Teléfono (+52.55) 9126-0100</p>
</div>
  </body>
</html>
`;

    return contenido
}

module.exports = crearAnexoV;


const puppeteer = require('puppeteer');
const { S3 } = require('aws-sdk');

const createPDFBuffer = async (html, opciones) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(html);
  const buffer = await page.pdf(opciones);
  await browser.close();
  return buffer;
};

const crearInforme = async (seccionII) => {
  const s3 = new S3({
    region: '',
    accessKeyId: '',
    secretAccessKey: ''
  });
  const opciones = {
    format: 'Letter', // A3, A4, A5, Legal, Letter
    printBackground: true,
    landscape: false,
    margin: {
      top: '.8cm',
      right: '.6cm',
      bottom: '.6cm',
      left: '.6cm',
    },
  };
  const templateHTML = html(seccionII); // Reemplaza esto con tu función html() correspondiente
  const fileName = `Informe-${seccionII.anexoID}-${Date.now()}.pdf`;
  const buffer = await createPDFBuffer(templateHTML, opciones);
  const uploadInforme = {
    Bucket: 'iktan-training-production',    
    Body: buffer,
    Key: `IKTAN-Ambiental/Informes/${fileName}`,
  };
  const respuesta = await s3.upload(uploadInforme).promise();
  return respuesta.Location;
};


const html = (seccionII)=>{

  const contenido = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
    * {
      font-family: Arial, sans-serif;
    }
    
    </style>
    <title>Document</title>
  </head>
  <body style="margin-top: 40px;">
  <div style="display: flex; flex-direction: column; margin: 0 auto; width: 500px; height: 550px; border-left: 1px solid black; border-right: 1px solid black; border-bottom: 1px solid black;  ">
    
    <div style="width: 100%; height: 4%; border-bottom: 1px solid black; background-color: black; ">
        <h1 style="font-size: 14px; text-align: center;  color: white; padding-top: 0px; transform: translateY(-4px); ">${seccionII.idComponente ? seccionII.idComponente : ""} </h1> 
    </div>
    <div style="display: -webkit-box; display: -ms-flexbox; display: flex; width: 100%; height: 6%; border-bottom: 1px solid black;">
        <div style=" height: 100%; width: 50%;  border-right: 1px solid black; ">
            <p style=" font-size: 12px; line-height: 0px; padding-top: 1px;">Fecha de inspección: ${seccionII.fechaInicioInspeccion ? seccionII.fechaInicioInspeccion:""}</p>
            <p style=" font-size: 12px; line-height: 0px; padding-top: 0px;">Hora de inspección: ${seccionII.horaInicioInspeccion ? seccionII.horaInicioInspeccion :""}  </p>
        </div>
        <div style=" height: 100%; width: 50%; ">
            <p style=" font-size: 12px; line-height: 0px; padding-top: 1px;">Ubicación: X=335,786,201 Y=1,931,445.186</p>
            <p style=" font-size: 12px; line-height: 0px; padding-top: 0px;">Estado: <b>${(seccionII.fuga =="Si") ?"Con fugas":"Sin fugas"}</b> </p>
        </div>
    </div>
    <div style="display: -webkit-box; display: -ms-flexbox; display: flex; width: 100%; height: 43%; border-bottom: 1px solid black;">
        <div style="height: 100%; width: 50%; border-right: 1px solid black; inset: 50%;  text-align: center; ">
          <img style="height: auto; width: 230px; padding-top: 40px; " src="${seccionII.imgCamara}" alt="">
        </div>
        <div style=" height: 100%; width: 50%;  text-align: center;">
          <img style=" height: auto; width: 230px; padding-top: 40px;  " src="${seccionII.imagenInfrarroja}" alt="" >
        </div>
    </div>
    <div style="display: -webkit-box; display: -ms-flexbox; display: flex; width: 100%; height: 4%; border-top: 1px solid black;">
        <div style=" height: 100%; width: 50%;  border-right: 1px solid black; background-color: black;">
            <p style=" font-size: 12px; text-align: center;  color: white; padding-top: 0px; transform: translateY(-6px); ">Imagen norma</p>
        </div>
        <div style=" height: 100%; width: 50%; background-color: black; ">
            <p style=" font-size: 12px; text-align: center;  color: white; padding-top: 0px; transform: translateY(-6px);">Imagen infrarroja</p>
        </div>
    </div>
    <div style="display: -webkit-box; display: -ms-flexbox; display: flex; width: 100%; height: 42%; border-top: 1px solid black;">
        
        <div style=" height: 100%; width: 50%;  border-right: 1px solid black;  text-align: center; ">
        <img style=" height: auto; width: 230px; padding-top: 40px; " src="${seccionII.imagen}" alt="" >  
        </div>
        <div style=" height: 100%; width: 50%; ">
          <p style=" text-align: center; font-size: 11px; line-height: 0px; padding-top: 60px;">Factores ambientales</p>
          <p style=" text-align: center; font-size: 11px; line-height: 0px; padding-top: 20px;">Velocidad del viento: ${seccionII.velocidadViento ? (seccionII.velocidadViento + " m/s") : ""}</p>
          <p style=" text-align: center; font-size: 11px; line-height: 0px; padding-top: 5px;">Temperatura: </p>
          <p style=" text-align: center; font-size: 11px; line-height: 0px; padding-top: 5px;">${seccionII.temperatura ? (seccionII.temperatura + "°C") : ""}</p>
          <p style=" text-align: center; font-size: 11px; line-height: 0px; padding-top: 15px;">Observación: ${seccionII.observacion? seccionII.observacion :""}</p>  
        </div>
    </div>
  </div>
  </body>
  </html>
  `;
    return contenido
}

module.exports = crearInforme;

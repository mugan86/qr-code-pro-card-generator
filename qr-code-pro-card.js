const fs = require('fs');
const pdf = require('html-pdf');
const QRCode = require('qrcode');

// Obtener la estructura HTML de la tarjeta con sus estilos
let html = fs.readFileSync('./card.html', 'utf8');
async function generateQR(text) {
  try {
    return await QRCode.toDataURL(text);
  } catch (err) {
    console.error(err)
  }
}

// Start function
const start = async function() {
  const imageText = await generateQR("https://anartz-mugika.com/");
  // Reemplazamos {{image}} con la URL de la imagen creada del QR
  const htmlFinal = html.replace('{{image}}', imageText);

  // Configuración del PDF
  const options = { format: 'A7' };
  // Creamos la tarjeta con toda la configuración
  pdf.create(htmlFinal, options).toFile('./anartz-card.pdf', function(err, res) {
    if (err) return console.log(err);
    console.log(res); // { filename: 'anartz-card.pdf' }
  });
}

// Call start
start();

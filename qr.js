const QRCode = require('qrcode');
const generateQR = async text => {
  try {
    console.log(await QRCode.toDataURL(text));
  } catch (err) {
    console.error(err)
  }
}

const generateQRImageFile = async (text, name) => {
    try {
      await QRCode.toFile(`./${name}.png`, text);
    } catch (err) {
      console.error(err)
    }
  }


generateQR("http://imharshpatel.com");
generateQRImageFile("https://anartz-mugika.com/", "qr-anartz");
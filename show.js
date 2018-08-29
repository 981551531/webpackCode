import QRCode from 'qrcode'

class show{
    init(str) {
        // generateQRCode("dsfsdf")
        document.getElementById("root").innerHTML = `Hello ${str}`;
    }
}


function generateQRCode(str) {
    let result = ''
    /*    var segs = [
            { data: 'https://www.cmaotai.com/index.html?faceverify=qrscan&t=284814', mode: 'Kanji' },

        ]

        QRCode.toDataURL("https://www.cmaotai.com/index.html?faceverify=qrscan&t=284814", {errorCorrectionLevel: 'H',version:5,width:500,height:500, type: 'image/jpeg'}, function (err, url) {
            result = url;
        })
    */



    /*  QRCode.toString('https://www.cmaotai.com/index.html?faceverify=qrscan&t=284814',    function (err, string) {
          if (err) throw err
          document.getElementById("qrcode").innerHTML=string;
          console.log(string)
      })*/



    
    /*  QRCode.toCanvas('https://www.cmaotai.com/index.html?faceverify=qrscan&t=284814', {
          errorCorrectionLevel: 'H',
          version: 7,
          width: 170,
          height: 170,
          margin: 1
      }, function (err, canvas) {
          if (err) throw err

          var container = document.getElementById('qrcode')
          container.appendChild(canvas)
      })
  */

    var opts = {
        errorCorrectionLevel: 'H',
        errorCorrectionLevel: 'H',
        
        width: 170,
        height: 170,
        margin: 1,
        type: 'image/jpeg',
        rendererOpts: {
            quality: 0.3
        }
    }

    QRCode.toDataURL('请使用茅台云商APP扫描右侧二维码，进入人脸识别界面', opts, function (err, url) {
        if (err) throw err

        document.getElementById("qrcode").innerHTML = `<img src=${url}  />`
    })

    console.log(result)
    return result
}

export {show};
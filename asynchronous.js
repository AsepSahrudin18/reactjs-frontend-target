function download(){
    setTimeout(function(){
        console.log('Download..');
    }, 3000);
}

function verify(){
    setTimeout(function(){
        console.log('Verify file...');
    }, 2000);
}

function notify(){
    console.log('Download successfully!...');
}

function main(){
    download();
    verify();
    notify();
}

main();

/**
 * Hasil yang muncul tidak sesuai.
 * Karena operasi asynchronous tidak mencegah (non-blocking) proses selanjutnya.
 * Solusi: callback.
 * lihat contoh dibawah ini
 */
function ActionDownload(callVerify){
    setTimeout(function(){
        console.log('Download..');
        callVerify();
    }, 3000);
}

function callVerify(callNotify){
    setTimeout(function(){
        console.log('Verify file...');
        callNotify();
    }, 2000);
}

function callNotify(){
    console.log('Download successfully!...');
}

function main(){
    download(function(){
        callVerify(function(){
            callNotify();
        })
    })
}

main();
/** 
 *  Bagaimana jika ada 10 operasi asynchronous?
 *  Problem: Callback Hell.
 *  Solusi: Promise.
 */

/**
 * async: memberitahu ada proses asynchronous
 * await: menunggu proses asynchronous selesai
 * 
 * async await hanya akan berefect ketika menggunakan promise based
 */
function download(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve('Download..');
        }, 3000);
    })
}

function verify(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Verify file...');
        }, 2000);
    });
}

function notify(){
    console.log('Download successfully!...');
}

const main = async () => {
    console.log(await download());
    console.log(await verify());
    notify();
}

main();
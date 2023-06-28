function download(){
    /**
     * promise dibuat menggunakan class promise
     * menerima callback/executor
     * executor menerima 2 parameter: resolve dan reject
     * resolved untuk mengembalikan promise berhasil
     * reject untuk mengembalikan promise gagal
     */
    
        return new Promise(function(resolve, reject){
            setTimeout(function(){
                resolve('Downloading...');
            }, 3000);
        });
    }
    
    function verify(){
        return new Promise(function(resolve, reject){
            setTimeout(function(){
                resolve('Verify file...');
            })
        })
    }
    
    function notify(){
        console.log('Downloas successfully!');
    }


    download()
    .then(function(result){
        console.log(result);
        return verify();
    })
    .then(function(result){
        console.log(result);
    })
    .catch(function(error){
        console.log(error);
    })
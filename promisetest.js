import Promise from "bluebird"
class  a{
    init(){
        let rPromise=new Promise((resolve,reject )=>{
            resolve(555);
        })

        return rPromise;
    }
}

export  default  a;
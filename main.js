import a from "./promisetest.js";

 
let s=new  a();
s.init().then(re=>{
    console.log("promise返回结果",re)   ;
    document.getElementById("root").innerHTML=`promise返回结果,${re}`
});
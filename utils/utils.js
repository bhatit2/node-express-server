module.exports.add = (a,b)=> a+b;
module.exports.asyncAdd = (a,b,callback)=>{
    setTimeout(()=> callback(a+b), 1000);
}
module.exports.asyncSquare = (a)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(a*a),1000);
    })
}

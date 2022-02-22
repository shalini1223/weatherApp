var add = function (a,b,cb){
    if(typeof(a)!= "number" || typeof(b)!= "number"){
        cb("a and b must be a number",undefined)
        return;
    }
    setTimeout( () => {
       cb(undefined,(a / b));
    },2000);
   
}
add(5,"a",function (error,c){
    if(error){
    console.log("error",error);
    return;
    }
   console.log("result",c);
});
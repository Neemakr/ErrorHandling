//Reference Error:
let x = 5;
try{
    x += y;
    console.log(x);
}
catch(err){
    console.log(err.name);
}     

//Syntax Error:
try{
    eval("alert('Hello)");
}
catch(e){
    console.log(e.name);
}
        
//TypeError
let num = 1;
try{
    console.log(num.toUpperCase());
}
catch(error){
    console.log(error.name);
}

//RangeError
let n = 1;
try{
    n.toPrecision(500);
}
catch(err){
    console.log(err.name);
}

//URI Error:
try{
    decodeURI("%%%%");
}
catch(errr){
    console.log(errr.name);
}
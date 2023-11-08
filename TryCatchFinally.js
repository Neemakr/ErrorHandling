//try catch
let numerator = 10, denominator = 'b';
try{
    console.log(numerator/denominator);
    console.log(b);
}
catch(e){
    console.log('Error message:'+" " + e);
}

//e.name
try{
    console.log(unicycle);
}
catch(e){
    console.log(e.name);
}

//e.message
try{
    console.log(g);
    console.log("Hi");//will not be executed as an error occurs in the previous statement
}
catch(e){
    console.log(e.message);
}

//try catch finally
try{
    console.log(i);
}
catch(error){
    console.log('Error message: ' + error);
}
finally{
    console.log('Finally will execute every time')
}
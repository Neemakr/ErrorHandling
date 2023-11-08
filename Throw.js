try{
    i;
    console.log(i);
    throw new ReferenceError('this is reference error');//will not be executed as error occurs in the previous statement and it doesn't reach this statement 
}
catch(error){
    console.log("Error message: " + error);
}

let num = 40;
try{
    if(num > 50){
        throw new Error('Number is too high')
    }
    else{
        throw new Error('Number is too low');
    }
}
catch(error){
    console.log("Error message: " + error);
}

//throw the exception
const number = 1;
try{
    if(number > 10){
        console.log('Number is high')
    }
    else{
        throw new Error('Number is too low');
    }
    // if throw executes, the below code does not execute
    console.log('hello');
}

catch(error){
    console.log('Error message:' + error);
}

//Or 
const numb = 50;
try{
    if(numb>10){
        throw "Number is high";
    }
    else{
        throw "Number is too low";
    }
}
catch(err){
    console.log(err);
}
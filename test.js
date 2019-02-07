
function stringOne(){
    let firstString = "Hello World";
    console.log(firstString);
    stringTwo();
}

stringOne()

function stringTwo(){
    let secondString = "Hi";
    console.log(secondString);
    addOneToString(secondString);
}

function addOneToString(a){
console.log(a);
secondString = a + " 1";
console.log(secondString);
checkLengthOfString(secondString); 
}

function checkLengthOfString(b){
    if (b.length < 5){
    console.log(true);
}else{
    console.log(false);
}
stringLoop(b);
}

function stringLoop(c){
    // console.log(c);
    for(i = 0; i < c.length; i++){
        console.log("I'm a string in a loop!");
    }
}
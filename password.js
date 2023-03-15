
//function for show/hide the password
function myfunction() {
    var x=document.getElementById("input");

    if(x.type === "password"){
        x.type="text";
    }
    else{
        x.type="password";
    }
}

//code for getting the element by getElementById method
var myInput = document.getElementById("input");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var special = document.getElementById("special");

//code for, when the user focus on the password field, show the card
myInput.onfocus = function(){
    document.getElementById("message").style.display="block";
}
// myInput.onblur= function(){
//     document.getElementById("message").style.display="none";
// }

//lowercase
myInput.onkeyup=function(){   //onkeyup event runs when a user relseases a key
    //for lowercase 
    var lowerCaseletters = /[a-z]/g;
    if(myInput.value.match(lowerCaseletters)){
        letter.classList.remove("invalid");   //if the condition is satisfied then this removes the class "invalid"
        letter.classList.add("valid");        //And adds this "valid" class
}  
 else{
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

//for capital letter
var upperCaseletters= /[A-Z]/g;
if(myInput.value.match(upperCaseletters)){
    capital.classList.remove("invalid");
    capital.classList.add("valid");
}
else{
    capital.classList.remove("valid");
    capital.classList.add("invalid");
}

//for number
var numberLetter= /[0-9]/g;
if(myInput.value.match(numberLetter)){
    number.classList.remove("invalid");
    number.classList.add("valid");
} else{
    number.classList.remove("valid");
    number.classList.add("invalid");
}

//for length of password
if(myInput.value.length >= 8){
    length.classList.remove("invalid");
    length.classList.add("valid");
}
else{
    length.classList.remove("valid");
    length.classList.add("invalid");
}

//for special character
var special1=/[!@#$%^&*()<>?]/g;
if(myInput.value.match(special1)){
    special.classList.remove("invalid");
    special.classList.add("valid");
}
else{
    special.classList.remove("valid");
    special.classList.add("invalid");
}
}
var mail=document.getElementById("mail").value;
console.log(mail);
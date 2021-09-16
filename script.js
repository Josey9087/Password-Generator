// Assignment Code
//Below is a list of global variables that will be used throughout the code. They are all assigned values through functions
// in the code. It is important they are global so they can be used by an function.
LowerCase=""
UpperCase=""
Special=""
Numbers=""
allfunc=""
ready=""
password1=""
var generateBtn = document.querySelector("#generate");

// Write password to the #password input.
// Below is the function used to write the 'password1' variable into the box containing the password that was genetrated.
// It selects the box which is empty, it then assigns that value to the variable named 'password1'.
function writePassword() {
var passwordText = document.querySelector("#password");
passwordText.value = password1;}






// Add event listener to generate button.
// This event listener decides the length of the password generated as well as sets off a chain of functions
// depending on whether of not if statments have been met. 
// It prompts the user to input a length. If the length of the input is between 8 and 128 then it calls the 
// other functions needed to generate the password.
// If the length is not between these numbers then the function stops and alerts the user as to the criteria.
// go1, go2, go3, and go4 all give a true or false value to variables based on the user input of the prompts they displayed.
// If the output of the password is "None" then it will alert the user that one of the criteria must be used.
// If the output of the password function is anything other than "None" then it will generate a password.
// After generating the password the writePassword function is called in order to display the password in the box on screen. 
lengthof=generateBtn.addEventListener("click",function(){
  answer=prompt("What would you like the length of the password to be?(Must be between 8-128 characters) " , "8-128")
  if (answer>=8 && answer<=128){
    lengthof=answer
    go1()
    go2()
    go3()
    go4()
    passwordcriteria()
    if (password()=="None"){
      return alert("Please respond 'yes' to at least one criteria for your password.")}
      else{
        times()
        writePassword()
      }}
      
      else
      alert("Please input a number between 8-128")
      
});
 
    

//Functions that push true or false based on prompt input to values used to decide criteria.
    
// The four functions below named 'go1, go2, go3, and go4' prompt the user to decide what criteria they would like in their password.
// All the functions uppercase the input so that if the user captializes letters or not it still has the same effect. 
// It compares the answer to the value "YES" the output is a boolean. it then adds that boolean to corresponding global variables.
function go1(){
  true1=prompt("Would you like to add lowercase letters?(Yes or No)")
  got1=true1.toUpperCase()
  LowerCase=(got1==="YES")
};
    
function go2(){
  true2=prompt("Would you like to add uppercase letters? (Yes or No) ")
  got2=true2.toUpperCase()
  UpperCase=(got2==="YES")
};
    
function go3 (){
  true3=prompt("Would you like to add special characters?(Yes or No)")
  got3=true3.toUpperCase()
  Special=(got3==="YES")
};
    
function go4 () {
  true4=prompt("Would you like to add numbers? (Yes or No)")
  got4=true4.toUpperCase()
  Numbers=(got4==="YES")
};

// The function below named 'passwordcriteria' is used to decide which of the four character types avalible will be included in the password
// generated. If the global variable corresponding to each prompt holds the value true then a single character is added into a global
// variable.

function passwordcriteria(){
  allfunc=""
  if(UpperCase===true){
    allfunc+="U"
  }
  if(LowerCase===true){
    allfunc+="L"
  }
  if(Numbers===true){
    allfunc+="N"
  }
  if(Special===true){
    allfunc+="S"
  }
}

// The below function named 'password' generates a single letter of the password each time it is called.
// If the criteria length is 0 then the function returns "None". If it doesnt equal 0 then it randomizes
// the type of character that's gonna be used based on what characters exist in the variable 'allfunc' these characters were decided by which
// types of characters the user wanted when prompted. Once it lands on a specific character it calls the function that gets a random character
// of that type and adds it to the 'password1' variable.

function password(){
  ready=""
  criteria=allfunc.length
  if(criteria==0){
    return "None"
  }
  ready=allfunc.charAt(Math.random()*criteria)
  if (ready=="S"){
    password1+=randomspecial()
  }
  if (ready=="U"){
    password1+=randomupper()
  }
  if (ready=="N"){
    password1+=randomnumber()
  }
  if (ready=="L"){
    password1+=randomlower()
  }
  return password1
}


// The function bellow named 'times' decides the amount of times to call the 'password' function in order to add characters
// into the 'password1'. It does this by calling the function as many times as it takes for 0 to get to the 'length' value by
// intervals of 1 and stops when it reachs that value. The function resets the value of 'password1' before begining ensuring that it
// is blank before truly generating the new password based on the length the user wanted.
function times(){
  password1=""
  for (var i = 0; i < lengthof; i++){
  password()
  }
}
    
    
// The function below randomly picks a lowercase letter by randomly generating a number from 1-length of the character possible
// it then grabs the character that exists in this number and returns that character when the function is called.
function randomlower() {
  lowercase = "abcdefghijklmnopqrstuvwxyz",
  val = "";
  l=lowercase.length;
  val+= lowercase.charAt(Math.random()*l)
  return val;
}



// The function below randomly picks an uppercase letter by randomly generating a number from 1-length of the character possible
// it then grabs the character that exists in this number and returns that character when the function is called.
function randomupper() {
  uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  val = "";
  l=uppercase.length; 
  val+= uppercase.charAt(Math.random()*l)
  return val;
  }


// The function below randomly picks a special character by randomly generating a number from 1-length of the character possible
// it then grabs the character that exists in this number and returns that character when the function is called.
function randomspecial() {
  special= "!”#$%&’()*+,-./:;<=>?@ []\^_`{|}~"
  val= "";
  l=special.length; 
  val+= special.charAt(Math.random()*l)
  return val;
  }


// The function below randomly picks a number by randomly generating a number from 1-length of the character possible
// it then grabs the character that exists in this number and returns that character when the function is called.
function randomnumber() {
  numbers = "0123456789",
  val = "";
  l=numbers.length;
  val+= numbers.charAt(Math.random()*l)
  return val;
}
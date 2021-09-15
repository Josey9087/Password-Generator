// Assignment Code

LowerCase=""
UpperCase=""
Special=""
Numbers=""
allfunc=""
ready=""
password1=""
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password1;}

// }


// function generatePassword(){
//   // for (var i=0, n=all.length; i<n; ++i){
//     for(i in all){
//       console.log(`${i}: ${all[i]}`)
//       all=all.filter(value =>  true)
//     }

//   }

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
function times(){
  password1=""
   for (var i = 0; i < lengthof; i++){
     password()
   }

}


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



// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
lengthof=generateBtn.addEventListener("click",function(){
  answer=prompt("What would you like the length of the password to be?(Must be between 8-128 characters) " , "8-128")
  if (answer>=8 && answer<=128){
      lengthof=answer
      go4()
      go3()
      go2()
      go1()
      passwordcriteria()
      password()
      if (password()=="None"){
        return alert("Please respond 'yes' to at least one criteria for your password.")}
      else{
        times()
        writePassword()
      }}

  else
    alert("Please input a number between 8-128")
      
});

//
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



//generating lower case words
function randomlower() {
  lowercase = "abcdefghijklmnopqrstuvwxyz",
  val = "";
  n=lowercase.length;
    val+= lowercase.charAt(Math.random()*n)
  return val;
}



//generating upper case words
function randomupper() {
  uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  val = "";
  n=uppercase.length; 
    val+= uppercase.charAt(Math.random()*n)
  
  return val;
  }


//generating special characters
function randomspecial() {
    special= "!”#$%&’()*+,-./:;<=>?@[]\^_`{|}~"
    val= "";
  n=special.length; 
  val+= special.charAt(Math.random()*n)
  
  return val;
  }


//generating length betweeen 8-128 characters


//generating numeric characters
function randomnumber() {
    numbers = "0123456789",
    val = "";
    n=numbers.length;
    val+= numbers.charAt(Math.random()*n)
  return val;
}

// Assignment Code

LowerCase=""
UpperCase=""
Special=""
Numbers=""
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }


// function generatePassword(){
//   // for (var i=0, n=all.length; i<n; ++i){
//     for(i in all){
//       console.log(`${i}: ${all[i]}`)
//       all=all.filter(value =>  true)
//     }

//   }


all=[]
allfunc=""
function passwordcriteria(){
  password=""
  if(UpperCase===true){
    all.push('Lower')
    }
  if(LowerCase===true){
    all.push('Upper')
  }
  if(Numbers===true){
    all.push('Numbers')
  }
  if(Special===true){
    all.push('Special')
  }
  if (all.includes('Lower')==true){
    allfunc+="L"
  }
  if (all.includes('Upper')==true){
      allfunc+="U"
  }
  if (all.includes('Special')==true){
    allfunc+="S"
  }
  if (all.includes('Numbers')==true){
    allfunc+="N"
  }
}

function password(){
  if(allfunc.length=0){
    break}
  for(i in length){
      allfunc.charAt(Math.random()*length)}}



// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
length=generateBtn.addEventListener("click",function(){
  answer=prompt("What would you like the length of the password to be?(Must be between 8-128 characters) " , "8-128")
  if (answer>=8 && answer<=128){
      length=answer
      go4()
      go3()
      go2()
      go1()}
  else
    alert("Please input a number between 8-128")
      
});

function go4 () {
  true4=prompt("Would you like to add numbers?")
  got4=true4.toUpperCase()
  Numbers=(got4==="YES")
};

function go3 (){
  true3=prompt("Would you like to add special characters?")
  got3=true3.toUpperCase()
  Special=(got3==="YES")
};

function go2(){
  true2=prompt("Would you like to add uppercase letters?")
  got2=true2.toUpperCase()
  UpperCase=(got2==="YES")
};

function go1(){
  true1=prompt("Would you like to add lowercase letters?")
  got1=true1.toUpperCase()
  LowerCase=(got1==="YES")
};


Password={
  lower: randomlower(),
  upper:randomupper(),
  number:randomnumber(),
  character:randomspecial()

}
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

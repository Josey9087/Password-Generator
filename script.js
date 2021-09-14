// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
length=generateBtn.addEventListener("click",function(){
  answer=prompt("What would you like the length of the password to be?(Must be between 8-128 characters) " , "8-128")
  if (answer>=8 && answer<=128)
      length=answer
  else
    alert("Please input a number between 8-128")
      
});

go4=generateBtn.addEventListener("click",function(){
  true4=prompt("Would you like to add numbers?")
  go4=true4.toUpperCase()
  Truish.push(go4)
});

go3=generateBtn.addEventListener("click",function(){
  true3=prompt("Would you like to add special characters?")
  go3=true3.toUpperCase()
  Truish.push(go3)
});

go2=generateBtn.addEventListener("click",function(){
  true2=prompt("Would you like to add uppercase letters?")
  go2=true2.toUpperCase()
  Truish.push(go2)
});

go1=generateBtn.addEventListener("click",function(){
  true1=prompt("Would you like to add lowercase letters?")
  go1=true1.toUpperCase()
  Truish.push(go1)}
);

Truish=[]
function list(){
  for (var i=0, n=Truish.length; i<n; ++i)
  {
    right=Truish[i]==="YES"
    console.log(right)
  }
}


 Password={
  lower: randomlower(),
  upper:randomupper(),
  number:randomnumber(),
  character:randomspecial()

}
//generating lower case words
function randomlower() {
  lowercase = "abcdefghijklmnopqrstuvwxyz",
  pass = "";
  n=lowercase.length;
    pass+= lowercase.charAt(Math.random()*n)
  return pass;
}

//generating upper case words
function randomupper() {
  uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  pass = "";
  n=uppercase.length; 
    pass+= uppercase.charAt(Math.random()*n)
  
  return pass;
  }


//generating special characters
function randomspecial() {
    special= "!”#$%&’()*+,-./:;<=>?@[]\^_`{|}~"
    pass= "";
  n=special.length; 
  pass+= special.charAt(Math.random()*n)
  
  return pass;
  }


//generating length betweeen 8-128 characters


//generating numeric characters
function randomnumber() {
    numbers = "0123456789",
    num = "";
    for (var i=0, n=numbers.length; i<length; ++i) {
    num+= numbers.charAt(Math.random()*n)
  }
  return pass;
}




randomlower()





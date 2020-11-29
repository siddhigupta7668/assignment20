var person = prompt("Please enter your First Name", "");

if (person == null || person == "") {
  txt = "User cancelled the prompt.";
} else {
  txt = "Hello " + person + "! How are you today?";
}

var last = prompt("Please enter your Last Name", "");

if (last == null || last == "") {
  txt = "User cancelled the prompt.";
} else {
  txt = "Hello " + last + "! How are you today?";
  
}
console.log("Your full name is " + person + last)

var age = prompt("Please enter your Age", "");

if (age == null || age == "") {
  txt = "User cancelled the prompt.";
} else {
  txt = "Hello " + age + "! How are you today?";
  
}
console.log("Your age Is " + age)
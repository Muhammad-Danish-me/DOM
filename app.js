// Q.1
// i
var main = document.getElementById("main-content");
// console.log(main)

// ii
var main = document.getElementById("main-content");
// console.log(main.children)

// iii
var render = document.getElementsByClassName("render");

// console.log(render)

// iv
function getValue() {
  var firstName = document.getElementById("first-name");
  firstName = firstName.value;
  console.log("First Name: " + firstName);
  var lastName = document.getElementById("last-name");
  lastName = lastName.value;
  console.log("Last Name: " + lastName);
  var email = document.getElementById("email");
  email = email.value;
  console.log("Email: " + email);
}

// Q.2
// i.
var form = document.getElementById("form-content");
// console.log("Form-Content: " + form.nodeType);
var lastName = document.getElementById("last-name");

console.log(
  "Last Name Node Type: " +
    lastName.nodeType +
    " Child Node: " +
    lastName.childNodes
);

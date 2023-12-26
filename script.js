let signUp = document.getElementById("signUpBtn");
let signIn = document.getElementById("signInBtn");
let title = document.getElementById("title");
let nameField = document.getElementById("nameField");

signIn.addEventListener("click", () => {
  nameField.style.maxHeight = "0";
  title.innerHTML = "Sign In";
  signUp.classList.add("disable");
  signIn.classList.remove("disable");
});

signUp.addEventListener("click", () => {
  nameField.style.maxHeight = "65px";
  title.innerHTML = "Sign Up";
  signUp.classList.remove("disable");
  signIn.classList.add("disable");
});

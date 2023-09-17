const submitBtn = document.querySelector("#submitButton");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
let validatePassword = () => {
  if (password.value.length < 8) {
    password.setCustomValidity("Password must be at least 8 characters long");
  } else if (password.value !== confirmPassword.value) {
    confirmPassword.setCustomValidity("Passwords Don't Match");
  } else {
    confirmPassword.setCustomValidity("");
  }
};
submitBtn.addEventListener("click", validatePassword);

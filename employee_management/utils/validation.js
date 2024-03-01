export function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validateSignUpForm(name, email, password, confirmPass) {

  if (name === "" || email === "" || password === "" || confirmPass === "") {
    alert("Please fill in all fields.");
    return false;
  }

  if (!isValidEmail(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (password.length < 8) {
    alert("Password should be at least 8 characters long.");
    return false;
  }

  if (password !== confirmPass) {
    console.log("Password does not match...");
    alert("Password and Confirm password must be the same.");
    return false;
  }

  return true;
}

export function validateAddEmployeeForm(name, email, password) {

  if (name === "" || email === "" || password === "") {
    alert("Please fill in all fields.");
    return false;
  }

  if (!isValidEmail(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (password.length < 8) {
    alert("Password should be at least 8 characters long.");
    return false;
  }

  return true;
}
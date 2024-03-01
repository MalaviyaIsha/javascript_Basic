import { validateSignUpForm } from "../../utils/validation.js";

async function signUpForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPass = document.getElementById("confirmpassword").value;

  if (!validateSignUpForm(name, email, password, confirmPass)) {
    return;
  }

  const data = {};
  data["name"] = name;
  data["email"] = email;
  data["password"] = password;
  data["confirmPass"] = confirmPass;

  try {
    const response = await fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (result.success) {
      window.location.href = "../login/login.html";
      alert(result.message);
    } else {
      alert(result.error);
    }
  } catch (error) {
    console.error("Error during fetch:", error);
    alert("An error occurred. Please try again later.");
  }
}

document.getElementById("login-btn").addEventListener("click", signUpForm);

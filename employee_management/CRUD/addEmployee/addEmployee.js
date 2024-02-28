import { validateAddEmployeeForm } from "../../utils/validation.js";

async function addEmployee() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (!validateAddEmployeeForm(name, email, password)) {
    return;
  }

  const data = {};
  data["name"] = name;
  data["email"] = email;
  data["password"] = password;

  try {
    console.log(data, "tryyyyyyyy");
    const response = await fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log("ddddddddddd", result);

    if (result.success) {
      window.location.href = "../../empDisplay/empList.html";
      alert(result.message);
    } else {
      alert(result.error);
    }
  } catch (error) {
    console.error("Error during fetch:", error);
    alert("An error occurred. Please try again later.");
  }

  return false;
}

document.getElementById("login-btn").addEventListener("click", addEmployee);

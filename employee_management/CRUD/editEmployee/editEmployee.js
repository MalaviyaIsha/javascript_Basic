async function editEmployee() {

  console.log("functionnnnnnn............");
  var id = document.getElementById("empID").value;
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  console.log(name, email);

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (name === " " || email === " " || password === " ") {
    alert("Please fill in all fields.");
    return false;
  }

  if (password.length < 8) {
    alert("Password should be at least 8 characters long.");
    return false;
  }

  const data = {};
  data["id"] = parseInt(id);
  data["email"] = email;
  data["name"] = name;
  data["password"] = password;

  try {
    console.log(data, "tryyyyyyyy");
    const response = await fetch("http://localhost:3000/editUser", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
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

}
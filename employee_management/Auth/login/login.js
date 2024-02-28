async function loginForm() {
  console.log("functionnnnnnn............");
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  console.log(email);

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (email === "" || password === "") {
    alert("Please fill in all fields.");
    return false;
  }

  if (password.length < 8) {
    alert("Password should be at least 8 characters long.");
    return false;
  }

  const data = {};
  data["email"] = email;
  data["password"] = password;

  try {
    console.log(data, "tryyyyyyyy");
    const response = await fetch("http://localhost:3000/userlogin", {
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

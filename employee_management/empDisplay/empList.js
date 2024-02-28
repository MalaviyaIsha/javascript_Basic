const addEmployee = () => {
  window.location.href = "../CRUD/addEmployee/addEmployee.html";
};

const editEmployee = (id) => {
  console.log(id);
  window.location.href = "../CRUD/editEmployee/editEmployee.html";
};

const deleteEmployee = (id) => {
  const confirmed = window.confirm("Are you sure you want to delete this employee?");
  if (confirmed) {
    performDelete(id);
  }
};

const performDelete = async (id) => {

  try {
    const response = await fetch(`http://localhost:3000/deleteUser/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },

    });

    const result = await response.json();
    console.log("ddddddddddd", result);

    if (result.success) {
      window.location.href = "empList.html";
      alert(result.message);
    } else {
      alert(result.error);
    }
  } catch (error) {
    console.error("Error during fetch:", error);
    alert("An error occurred. Please try again later.");
  }

};

const logout = () => {
  window.location.href = "../login/login.html";
};

fetch("http://localhost:3000/getdata")
  .then(response => response.json())
  .then(data => {
    const employeesContainer = document.getElementById("employeesContainer");
    data.forEach((employee) => {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${employee.id}</td>
          <td>${employee.name}</td>
          <td>${employee.email}</td>
          <td>   <button class="edit-button" onclick="editEmployee(${employee.id})">Edit</button>
          <button class="delete-button" onclick="deleteEmployee(${employee.id})">Delete</button></td>
            `;
      employeesContainer.appendChild(row);
    });
  });

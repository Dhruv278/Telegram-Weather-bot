console.log("hello for login form")
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the form values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Create an object with the form data
    var formData = {
      username: username,
      password: password
    };

    // Send the form data to the backend API
    fetch("http://127.0.0.1:3000/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      // Handle the response from the backend
      if(data.status==='success'){
        localStorage.setItem("Admin","LoggedIn");
        window.location.href = "http://127.0.0.1:3000/admin/adminpage";

      }else{
        alert(data.message);
        localStorage.setItem("Admin","");
      }
    })
    .catch(error => {
        alert("Internal Server Error");
    });
  });
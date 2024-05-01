document
  .getElementById("userForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const userName = document.getElementById("userName").value;
    const userEmail = document.getElementById("userEmail").value;
    const userPassword = document.getElementById("userPassword").value;

    const userData = {
      username: userName,
      email: userEmail,
      password: userPassword,
    };

    localStorage.setItem("userData", JSON.stringify(userData));

    window.location.href = "display.html";
  });

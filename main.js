document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Input
  let name = document.getElementById("username").value.toLowerCase();
  let pass = document.getElementById("pass").value;

  console.log(name);
  console.log(pass);
  // If Statement - Test the Input

  if (name === "admin" && pass === "1234") {
    alert("Login Successful");
  } else if (name != "admin") {
    alert("Invalid Username");
  } else {
    alert("Invlid Password");
  }
}

let username = document.getElementById("username");
let password = document.getElementById("password");
let btnLogin = document.querySelector(".btn-login");

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  let user = {
    username: username.value,
    password: password.value,
  };
  localStorage.setItem('admin','{"username":"admin","password":"123"}');
  localStorage.setItem('aquen','{"username":"aquen","password":"123"}');
  console.log(user);
  let json = JSON.stringify(user);
  
  if (localStorage.getItem(username.value) == json) {
    window.location.href = "storage.html";
  } else {
    alert("Try again!!!");
  }
});

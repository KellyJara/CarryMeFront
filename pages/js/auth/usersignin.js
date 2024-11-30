
const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const loginBtn = document.getElementById("btnSignIn");

loginBtn.addEventListener("click",checkCredentials);

function checkCredentials(){
  // ICI, IL FAUDRA APPELER L'APIpour verifier les credentials en BDD
  if(mailInput.value== "test@gmail.com" && passwordInput.value == "123"){
    alert ("vous etes connecté");

     //Il faudra récupérer le vrai token
     const token = "lkjsdngfljsqdnglkjsdbglkjqskjgkfjgbqslkfdgbskldfgdfgsdgf";
     setToken(token);
     
     //placer ce token en cookie
    setCookie(RoleCookieName, "admin", 7);
    window.location.replace("/");
  }
  else{
    alert ("vous etes disconnectés");
    mailInput.classList.add("is-invalid");
    passwordInput.classList.add("is-invalid");
  }
}


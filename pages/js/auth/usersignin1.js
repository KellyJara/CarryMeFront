const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const loginBtn = document.getElementById("btnSignIn");

loginBtn.addEventListener("click",checkCredentials);

function checkCredentials(){
    if(mailInput.value == "test@mail.com" && passwordInput.value == "123"){
        //Il faudra récupérer le vrai token
    const token = "lkjsdngfljsqdnglkjsdbglkjqskjgkfjgbqslkfdgbskldfgdfgsdgf";
    
    setToken(token);
    //placer ce token en cookie
    setCookie("role", "admin", 7);
    window.location.replace("/");
    console.log(getRole());
    }else{
    mailInput.classList.add("is-invalid");
    passwordInput.classList.add("is-invalid");
  }
}


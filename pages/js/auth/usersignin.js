
const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const loginBtn = document.getElementById("btnSignIn");
const signInForm = document.getElementById("signInForm");

loginBtn.addEventListener("click",checkCredentials);

function checkCredentials(){
  // ICI, IL FAUDRA APPELER L'APIpour verifier les credentials en BDD
/*  if(mailInput.value== "test@gmail.com" && passwordInput.value == "123"){
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
*/
let dataForm = new FormData(signInForm);
  
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({  
  "username": dataForm.get("email"),  
  "password": dataForm.get("password"),
});
  
  const requestOptions = { 
     method: "POST",  
     headers: myHeaders,  
     body: raw,  
     redirect: "follow"
    };
    
    fetch("https://127.0.0.1:8000/api/login", requestOptions)  
    .then(response => {
              if(response.ok){
                  return response.json();
              }
              else{
                  mailInput.classList.add("is-invalid");
                  passwordInput.classList.add("is-invalid");
              }
          }) 
          .then(result => {
              const token = result.apiToken;
              setToken(token);
               //placer ce token en cookie
              setCookie(RoleCookieName, result.roles[0], 7);
              window.location.replace("/");
                }) 
    .catch((error) => console.error(error));
}


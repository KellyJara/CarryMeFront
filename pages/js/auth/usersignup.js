//Implémenter le JS de ma page

const inputLastname = document.getElementById("LastnameInput");
const inputName = document.getElementById("NameInput");
const inputMail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const inputValidationPassword = document.getElementById("ValidatePasswordInput");
const btnValidation = document.getElementById("btn-validation-inscription");

inputLastname.addEventListener("keyup", validateForm); 
inputName.addEventListener("keyup", validateForm);
inputMail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputValidationPassword.addEventListener("keyup", validateForm);
btnValidation.addEventListener("click",signUpUser);

//Function permettant de valider tout le formulaire
function validateForm(){
    const nomOK = validateRequired(inputLastname);
    const prenomOK = validateRequired(inputName);
    const mailOK = validateMail(inputMail);
    const passwordOK = validatePassword(inputPassword);
    const validatepasswordOK = validateConfirmationPassword(inputPassword, inputValidationPassword);

   if(nomOK && prenomOK && mailOK && passwordOK && validatepasswordOK){
    btnValidation.disabled = false;
   }
   else{
    btnValidation.disabled = true;
   }
}

function validatePassword(input){
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    const passwordUser = inputPassword.value;
    if(passwordUser.match(passwordRegex)){
                input.classList.add("is-valid");
                input.classList.remove("is-invalid"); 
                return true;
            }
            else{
                input.classList.remove("is-valid");
                input.classList.add("is-invalid");
                return false;
            }
}

function validateMail(input){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = inputMail.value;
    if(mailUser.match(emailRegex)){
                input.classList.add("is-valid");
                input.classList.remove("is-invalid"); 
                return true;
            }
            else{
                input.classList.remove("is-valid");
                input.classList.add("is-invalid");
                return false;
            }
}

function validateRequired(input){
    if(input.value != ''){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid"); 
        return true;
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}


function validateConfirmationPassword(inputPwd, inputConfirmPwd){
        if(inputPwd.value == inputConfirmPwd.value){
            inputConfirmPwd.classList.add("is-valid");
            inputConfirmPwd.classList.remove("is-invalid");
            return true;
        }
        else{
            inputConfirmPwd.classList.add("is-invalid");
            inputConfirmPwd.classList.remove("is-valid");
            return false;
        }
    }

function signUpUser(){
    alert("fetching");

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("auth-token", "133c8317ba0477a3b55e3e5ddcdeb3993f01a333");
    myHeaders.append("Cookie", "PHPSESSID=c9g66h2bgnjr5ph75e9f7nf4c5");
    
    let raw = JSON.stringify({
      "email": "fifthtestpostman20@toto.com",
      "password": "Vozeke99*",
      "lastname": "Jaramillo",
      "name": "Vanessa"
    });
    
    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    
    fetch("http://carrymeback.local/api/registration", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
}
    
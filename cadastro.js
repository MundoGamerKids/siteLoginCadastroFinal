import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVyxbDPeR_vAkuynCE6whvKte3ahZXN-0",
  authDomain: "app-login-74451.firebaseapp.com",
  projectId: "app-login-74451",
  storageBucket: "app-login-74451.appspot.com",
  messagingSenderId: "772270886329",
  appId: "1:772270886329:web:6d7b8f67e05068953bfa68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("login_button").addEventListener("click", function(){
    const email = document.getElementById("username").value; 
    const senha = document.getElementById("password").value;
    const confirmeSenha = document.getElementById("confirm_password").value;
    if (senha == confirmeSenha) {
        createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("Deu certo!");
          window.location = "index.html";
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + " " + errorMessage);
        }); 
    } else {
        document.getElementById("resultado").innerHTML = "Email ou senha inválidos!!!";
        document.getElementById("resultado").style.color = "red";
    };
    
}) 

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

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
    signInWithEmailAndPassword(auth, email, senha)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log("Deu certo!");
    document.getElementById("container").style.display = "none";
    document.getElementById("concluido").innerHTML = "Bem vindo \n" + email + " !!!";
    document.getElementById("concluido").style.color = "white";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode + " " + errorMessage);
    document.getElementById("concluido").innerHTML = "Senha ou email inválidos!" + errorMessage + errorCode;
    document.getElementById("concluido").style.color = "red";
  });
})

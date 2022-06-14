src="https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js"
src="https://www.gstatic.com/firebasejs/9.8.3/firebase-auth.js"
src="https://www.gstatic.com/firebasejs/9.8.3/firebase-database.js"
type="module"
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
    import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-auth.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    var firebaseConfig = {
      apiKey: "AIzaSyD3Gx8A7d--QiVS_5Afg3KUoyM-0JUOlnA",
      authDomain: "finding-tutors-online.firebaseapp.com",
      projectId: "finding-tutors-online",
      storageBucket: "finding-tutors-online.appspot.com",
      messagingSenderId: "949343373478",
      appId: "1:949343373478:web:ceff178044426d2c194c67",
      measurementId: "G-4HZR4PKVMF"
    };
    const app = initializeApp(firebaseConfig);
    const auth = getAuth();

    function register(){
        var email=document.getElementById('em');
        var password=document.getElementById('pswd');
        const promise =auth.createUserWithEmailAndPassword(email.value,password.value);
        promise.catch(e=>alert(e.message));
        alert('successfull');
    }
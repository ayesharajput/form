const firebaseConfig = {
    apiKey: "AIzaSyDwronP6l3fV2igcRqz0zvckz-XuTSycuo",
    authDomain: "authclass-aef15.firebaseapp.com",
    projectId: "authclass-aef15",
    storageBucket: "authclass-aef15.appspot.com",
    messagingSenderId: "998318861781",
    appId: "1:998318861781:web:751bb1b23d5253453e615c",
    measurementId: "G-MLCNSCTY13"
  };
  // ***********singup ************************

  var firebase = firebase.initializeApp(firebaseConfig);

function getvalueSingUp()
{
    var suemail = document.getElementById("suEmail")
    var suPassword = document.getElementById("suPassword")
    firebase.auth().createUserWithEmailAndPassword( suemail.value, suPassword.value)
    .then((userCredential) => {
    
      var user = userCredential.user;
    console.log(user)
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage)
    });
}

// **************************************************************************************************************
// sing in 
function singin()
{
    var siemail = document.getElementById("siEmail")
    var sipassword = document.getElementById("siPassword")
firebase.auth().signInWithEmailAndPassword(siemail.value, sipassword.value)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
   console.log (user)
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
  });

}
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
// import ReactDOM from 'react-dom/client';

const firebaseConfig = {
    apiKey: "AIzaSyDquzKVekhneVLHQ2Cw7YwB5I78CrljDEw",
    authDomain: "blockchain-69ca5.firebaseapp.com",
    databaseURL: "https://blockchain-69ca5-default-rtdb.firebaseio.com",
    projectId: "blockchain-69ca5",
    storageBucket: "blockchain-69ca5.appspot.com",
    messagingSenderId: "374145838923",
    appId: "1:374145838923:web:0ffb2f4c18983f5f1902ce",
    measurementId: "G-2FNKJ13PTT"
  };

  firebase.initializeApp(firebaseConfig);
  // var firebaseRef = firebase.database().ref("SEM");
  // firebaseRef.on("value",function(snapshot){
  //   snapshot.forEach(function(element){
  //     Voltage.innerHTML = "Voltage: " + snapshot.val().Voltage;
  //     Current.innerHTML = "Current: " + snapshot.val().Current;
  //     Cost.innerHTML = "Cost: " + snapshot.val().Cost;
  //   });
  // })

  const database = firebase.database();
//   const voltage = ReactDOM.createVoltage(document.getElementById('voltage'));
  const voltage = document.getElementById('voltage');
  const current = document.getElementById('current');
  const cost = document.getElementById('cost');

  database.ref('/SEM/Voltage').on('value', (snapshot) => {
    const data = snapshot.val();
    voltage.value = data;
  });

  database.ref('/SEM/Current').on('value', (snapshot) => {
    const data = snapshot.val();
    current.value = data;
  });

  database.ref('/SEM/Cost').on('value', (snapshot) => {
    const data = snapshot.val();
    cost.value = data;
  });


  export const dataref=firebase.database();
  export default firebase;
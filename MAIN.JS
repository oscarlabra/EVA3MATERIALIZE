firebase.initializeApp({
    apiKey: "AIzaSyCO_x16mUGxRBi-xTsPYOkihMBXYALMkzw",
    authDomain: "semana04062019.firebaseapp.com",
    projectId: "semana04062019"
  });//
   
  // Initialize Cloud Firestore through Firebase
  var db = firebase.firestore();
  
  function agregar(){
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var fecha = document.getElementById("fecha").value;
  
  db.collection("usuarios").add({
      first: nombre,
      last: apellido,
      born: fecha
  })
  .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });
    
  }
    
  function eliminar(){
  
      db.collection("usuarios").doc("0Jv77r2vBkkcYahfFmKk").delete().then(function() {
          console.log("Document successfully deleted!");
      }).catch(function(error) {
          console.error("Error removing document: ", error);
      });
  }
  
  function editar(){
      db.collection("usuarios").get().then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data().first + " - " + doc.data().last + " - " +doc.data().born );
          });
      });
  
  }

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "solomon-farming.firebaseapp.com",
  projectId: "solomon-farming",
  storageBucket: "solomon-farming.firebasestorage.app",
  messagingSenderId: "74753397092",
  appId: "1:74753397092:web:f6c6326821de3dbfb62a71"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.saveData = async function () {
  const name = document.getElementById("nameInput").value;

  try {
    await addDoc(collection(db, "users"), {
      name: name,
      time: new Date()
    });

    alert("Data saved to Firebase!");
  } catch (error) {
    console.error("Error:", error);
  }
};

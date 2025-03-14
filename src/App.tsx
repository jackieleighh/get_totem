import React from 'react';
import logo from './logo.png';
import './App.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDZqtE2YC-wuquNorOzIW5gNtD1ESuQ8is",
  authDomain: "get-totem.firebaseapp.com",
  projectId: "get-totem",
  storageBucket: "get-totem.firebasestorage.app",
  messagingSenderId: "258539474151",
  appId: "1:258539474151:web:27d98aa4e1c1c032f72642",
  measurementId: "G-01KG6BFET5"
};

function App() {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Your music festival app.
        </p>
        <a
          className="App-link"
          href="mailto:jackieleighh@gmail.com"
        >
          Contact Us
        </a>
      </header>
    </div>
  );
}

export default App;

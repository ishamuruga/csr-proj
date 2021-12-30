// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAR4dg-XCTlKalrC6oJ4YE5vzbwpKL13VU",
  authDomain: "karunashraya-portal.firebaseapp.com",
  projectId: "karunashraya-portal",
  storageBucket: "karunashraya-portal.appspot.com",
  messagingSenderId: "642796786399",
  appId: "1:642796786399:web:6ae50b38295d494b4a4f6a",
  measurementId: "G-RYEMBF5C1K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

https://developers.google.com/codelabs/building-a-web-app-with-angular-and-firebase#5
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
        
        export const firebaseConfig = {
          apiKey: "AIzaSyCH7VGpcSO2NGYxAF9dytRuIWvxAwWoSwQ",
          authDomain: "managershoes-28195.firebaseapp.com",
          projectId: "managershoes-28195",
          storageBucket: "managershoes-28195.appspot.com",
          messagingSenderId: "176450868178",
          appId: "1:176450868178:web:98de7da99d74d34066ee0b",
          measurementId: "G-QP3E6WBX85"
        };
      
        // Initialize Firebase
        export const app = initializeApp(firebaseConfig);
        export const analytics = getAnalytics(app);

console.log(app)
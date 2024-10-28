- Frontend

  1. mongoDB
  2. Firebase [Console](https://console.firebase.google.com/u/0/project/campusbite-hub/overview)

  ***

  ```
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { getAnalytics } from "firebase/analytics";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
  apiKey: "GET-YOUR-OWN-KEY",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  ```

3. Auth0
4. Hosting on Netlify
   [Live Demo](https://paltech-capmus-eats.netlify.app/)

- Backend

  1. MongoDB Compass for database management
  2. Postman / ThunderClient for API testing
  3. Hosting on Vercel

- General
  1. Git for version control
  2. Github for collaboration, code review and code hosting/storage
  3. Slack for communication
  4. [Prototyping and Wireframing](https://wireframe.cc/)
     [Live Demo](https://campus-bite-hub.vercel.app/)

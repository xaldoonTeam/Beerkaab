// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCEudSrTyCBnx0Wc7ZKASpE67JzPxOWiwk",
//   authDomain: "nemo-estate.firebaseapp.com",
//   projectId: "nemo-estate",
//   storageBucket: "nemo-estate.appspot.com",
//   messagingSenderId: "617753154809",
//   appId: "1:617753154809:web:2581d37dcb3e3ed826fe28",
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);



import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBASUTy_XGksHPE7h5ECoIP6HSwIQik6A0',
  authDomain: 'voting-image.firebaseapp.com',
  projectId: 'voting-image',
  storageBucket: 'voting-image.appspot.com',
  messagingSenderId: '813511901703',
  appId: '1:813511901703:web:3b8a9bdc92c39d7a59a0a2',
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage, app };
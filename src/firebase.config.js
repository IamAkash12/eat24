import {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyA4YGEYwqhManwRNd-C5OX76TAz5mSe6Mo",
    authDomain: "eat24-51914.firebaseapp.com",
    databaseURL: "https://eat24-51914-default-rtdb.firebaseio.com",
    projectId: "eat24-51914",
    storageBucket: "eat24-51914.appspot.com",
    messagingSenderId: "283404734776",
    appId: "1:283404734776:web:e184ee57a9542ff96fb1cd"
  };

  const app = getApps.length >0 ? getApp() : initializeApp(firebaseConfig);

  const firestore =getFirestore(app);
  const storage = getStorage(app);

  export {app,firestore,storage};

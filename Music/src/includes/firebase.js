import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDHZH_iOOcxavyrsj7YHSwcpXQ6bv4okOY',
  authDomain: 'music-vue-15343.firebaseapp.com',
  projectId: 'music-vue-15343',
  storageBucket: 'music-vue-15343.appspot.com',
  appId: '1:739620497838:web:587f96ab91275e13eb403f'
  //   measurementId: 'G-QT6ZTW9XF0'
};

export default firebase.initializeApp(firebaseConfig);

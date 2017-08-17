import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAilrv1y9GI-jhWrJUBxaVPcvHr2d1c3qw',
  authDomain: 'daily-bucket.firebaseapp.com',
  databaseURL: 'https://daily-bucket.firebaseio.com',
  projectId: 'daily-bucket',
  storageBucket: '',
  messagingSenderId: '867985989991'
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();

import * as firebase from 'firebase'


var config = {
  apiKey: "AIzaSyCRxDbi-2PcePKWn8IBccNFpoSDknlcmOc",
  authDomain: "myfitness425-426.firebaseapp.com",
  databaseURL: "https://myfitness425-426.firebaseio.com",
  projectId: "myfitness425-426",
  storageBucket: "myfitness425-426.appspot.com",
  messagingSenderId: "27583195048"
};

firebase.initializeApp(config);
// Get a reference to the database service


export const createUser = (email, password) => {
  console.log('Create User was called');
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch((error) => console.log('Create User Error: ', error));

}

export const userInfo = (firstName, lastName, age, height, weight, sex) => {
  console.log('userInfo called');

}

export const signinUser = (email, password) => {
  console.log('signinUser called');
  firebase.auth().signInWithEmailAndPassword(email, password)
    .catch((error) => console.log('Sign In User Error: ', error));
}

export const logoutUser = () => {
  firebase.auth().signOut();
}

export const forgotPassword = (email) => {
  console.log('forgotPassword called');
  firebase.auth().sendPasswordResetEmail(email)
    .catch((error) => console.log('Forgot Password User Error: ', error));
}

import * as firebase from 'firebase'

export const createUser = (email, password) => {
  console.log('Create User was called')
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch((error) => console.log('Create User Error: ', error));
}

export const signinUser = (email, password) => {
  console.log('signinUser called');
  firebase.auth().signInWithEmailAndPassword(email, password)
    .catch((error) => console.log('Create User Error: ', error));
}

export const logoutUser = () => {
  firebase.auth().signOut();
}

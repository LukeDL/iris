// Import the functions you need from the SDKs you need
import { Injectable, OnModuleInit } from '@nestjs/common';
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAavTEEhrFleVURlI0l2FsB7JapQzOD0Po',
  authDomain: 'iris-ab1dd.firebaseapp.com',
  projectId: 'iris-ab1dd',
  storageBucket: 'iris-ab1dd.appspot.com',
  messagingSenderId: '888269239546',
  appId: '1:888269239546:web:b82ed65cb948e7610c4543',
};

// Initialize Firebase
// const FirebaseService = initializeApp(firebaseConfig);

@Injectable()
export class FirebaseService implements OnModuleInit {
  async onModuleInit() {
    await initializeApp(firebaseConfig);
  }
}

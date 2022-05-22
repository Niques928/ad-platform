import { initializeApp } from "firebase/app";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyBO-SzQS5QZiik-n8HyB8udlX3lIQXubqM",

  authDomain: "ad-platform-285b4.firebaseapp.com",

  projectId: "ad-platform-285b4",

  storageBucket: "ad-platform-285b4.appspot.com",

  messagingSenderId: "67224947157",

  appId: "1:67224947157:web:492bb08e521df5c4aa155c",
};

const firebaseApp = initializeApp(config);

const db = getFirestore(firebaseApp);

export const getJobs = async () => {
  const querySnapshot = await getDocs(collection(db, "Jobs"));
  let jobs = [];
  querySnapshot.forEach((doc) => {
    jobs.push(doc.data());
  });
  return jobs;
};

export const postJob = async (values) => {
  console.log(values);
  const docRef = await addDoc(collection(db, "Jobs"), values);
};

export const getCandidates = async () => {
  const querySnapshot = await getDocs(collection(db, "Candidates"));
  let Candidates = [];
  querySnapshot.forEach((doc) => {
    Candidates.push(doc.data());
  });
  return Candidates;
};
export const getCompanies = async () => {
  const querySnapshot = await getDocs(collection(db, "Companies "));
  let Companies = [];
  querySnapshot.forEach((doc) => {
    Companies.push(doc.data());
    console.log(doc.data());
  });
  return Companies;
};

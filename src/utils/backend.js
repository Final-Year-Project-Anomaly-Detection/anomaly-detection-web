import { db } from "../firebaseConfig";
import {
  doc,
  setDoc,
} from "firebase/firestore";

// function list
// 1 create new user

// 1 create new user
export const addUser = async (userDetails) => {
  console.log('funcio')
  const res = await setDoc(doc(db, "users"), userDetails);
  return res;
};

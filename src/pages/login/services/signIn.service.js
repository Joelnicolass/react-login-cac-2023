import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../../../config/firebase.config";

export const singIn = async (email, password) => {
  return await signInWithEmailAndPassword(
    auth,
    "joelnicolass@gmail.com",
    "123456"
  );
};

export const singInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  return await signInWithPopup(auth, provider);
};

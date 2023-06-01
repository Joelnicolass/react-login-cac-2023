import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config/firebase.config";

export const signUp = async (email, password) => {
  return await createUserWithEmailAndPassword(
    auth,
    "joelnicolass@gmail.com",
    "123456"
  );
};

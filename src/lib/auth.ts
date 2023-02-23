import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, type User, type UserCredential } from "firebase/auth";
import app from "./firebase";

const auth = getAuth(app);

export function login(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(auth, email, password)
}

export function onAuthChange(callback: (user: User | null) => void) {
    onAuthStateChanged(auth, callback);
}
import { getAuth, type Unsubscribe } from "firebase/auth";
import { collection, deleteDoc, doc, getFirestore, onSnapshot, orderBy, query, QuerySnapshot, setDoc, where } from "firebase/firestore"; 
import app from "./firebase";
import type { CbtItem } from "./types";

const db = getFirestore(app);
const auth = getAuth(app);

export function set(item: CbtItem) {
    return setDoc(doc(db, 'cbtItems', item.id), {
        userId: getUserId(),
        ...item
    })
}

export function getAll(callback: (items: CbtItem[]) => void): Unsubscribe {
    const q = query(collection(db, "cbtItems"), where("userId", "==", getUserId()), orderBy("created", "desc"))
    const unsubscribe = onSnapshot(q, (querySnapshots) => {
        const items: CbtItem[] = [];

        querySnapshots.forEach(doc => {
            const data = doc.data();
            items.push({
                ...data,
                created: data.created.toDate()
            }as CbtItem);
        });

        callback(items);
    });

    return unsubscribe;
}

export function deleteItem(id: string) {
    deleteDoc(doc(db, "cbtItems", id));
}

function getUserId(): string | undefined {
    return auth.currentUser?.uid
}
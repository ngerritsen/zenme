import { getAuth, type Unsubscribe } from 'firebase/auth';
import {
	collection,
	deleteDoc,
	doc,
	getFirestore,
	onSnapshot,
	orderBy,
	query,
	setDoc,
	where
} from 'firebase/firestore';
import { nanoid } from 'nanoid';
import app from './firebase';
import type { Entry, EntryPayload, EntryType } from './types';

const db = getFirestore(app);
const auth = getAuth(app);
const TABLE = 'entries';

export function update(id: string, type: EntryType, created: Date, payload: EntryPayload) {
	return set({
		id,
		type,
		created,
		lastUpdated: new Date(),
		payload
	});
}

export function add(type: EntryType, payload: EntryPayload) {
	return update(nanoid(), type, new Date(), payload);
}

function set(entry: Entry) {
	return setDoc(doc(db, TABLE, entry.id), {
		...entry,
		userId: getUserId()
	});
}

export function getAll(callback: (items: Entry[]) => void): Unsubscribe {
	const q = query(
		collection(db, TABLE),
		where('userId', '==', getUserId()),
		orderBy('created', 'desc')
	);
	const unsubscribe = onSnapshot(q, (querySnapshots) => {
		const entries: Entry[] = [];

		querySnapshots.forEach((doc) => {
			const data = doc.data();
			entries.push({
				...data,
				created: data.created.toDate(),
				lastUpdated: data.lastUpdated.toDate()
			} as Entry);
		});

		callback(entries);
	});

	return unsubscribe;
}

export function remove(id: string) {
	deleteDoc(doc(db, TABLE, id));
}

function getUserId(): string | undefined {
	return auth.currentUser?.uid;
}

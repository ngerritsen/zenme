export type EntryDefinition = {
	type: string;
	title: string;
	form: ConstructorOfATypedSvelteComponent;
};
export type EntryType = 'mood' | 'quote' | 'challenge' | 'journal';

export type EntryPayload = Challenge | Journal | Quote | Mood;

export type Entry = {
	id: string;
	created: Date;
	lastUpdated: Date;
	type: EntryType;
	payload: EntryPayload;
};

export type Journal = {
	content: string;
};

export type Quote = {
	content: string;
	author?: string;
};

export type Mood = {
	mood: string;
};

export type Challenge = {
	situation: string;
	thought: string;
	emotion: string;
	behaviour: string;
	helpfulThought: string;
	helpfulBehaviour: string;
};

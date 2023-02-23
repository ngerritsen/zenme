import type { Entry } from './types';

export function groupEntries(entries: Entry[]): {
	value: string;
	entries: { value: string; entries: { value: string; entries: Entry[] }[] }[];
}[] {
	return groupBy(entries, (entry) => entry.created.getFullYear().toString()).map(
		({ value, entries }) => ({
			value,
			entries: groupBy(entries, (entry) =>
				entry.created.toLocaleString(undefined, { month: 'long' })
			).map(({ value, entries }) => ({
				value,
				entries: groupBy(entries, (entry) => entry.created.getDay().toString())
			}))
		})
	);
}

function groupBy(
	entries: Entry[],
	getValue: (entry: Entry) => string
): { value: string; entries: Entry[] }[] {
	const grouped: Record<string, Entry[]> = {};

	entries.forEach((entry) => {
		const value = getValue(entry);

		if (!grouped[value]) {
			grouped[value] = [];
		}

		grouped[value] = [...grouped[value], entry];
	});

	return Object.entries(grouped).map(([value, entries]) => ({
		value,
		entries
	}));
}

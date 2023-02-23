import entryTypes from '$lib/entryTypes';
import type { EntryType } from '$lib/types';
import { error } from '@sveltejs/kit';

export function load({ params }: { params: { type: string } }) {
	const type = params.type as EntryType;

	if (!entryTypes[type]) {
		return error(404, `Type ${params.type} not found`);
	}

	return entryTypes[type];
}

import ChallengeForm from './entries/forms/Challenge.svelte';
import JournalForm from './entries/forms/Journal.svelte';
import MoodForm from './entries/forms/Mood.svelte';
import QuoteForm from './entries/forms/Quote.svelte';
import ChallengeCard from './entries/cards/Challenge.svelte';
import JournalCard from './entries/cards/Journal.svelte';
import MoodCard from './entries/cards/Mood.svelte';
import QuoteCard from './entries/cards/Quote.svelte';

export default {
	journal: {
		type: 'journal',
		title: '📕 Journal',
		form: JournalForm,
		card: JournalCard
	},
	challenge: {
		type: 'challenge',
		title: '⚔️ Challenge negative thoughts',
		form: ChallengeForm,
		card: ChallengeCard
	},
	mood: {
		type: 'mood',
		title: '😶 Check in with my mood',
		form: MoodForm,
		card: MoodCard
	},
	quote: {
		type: 'quote',
		title: '🪧 Write a quote',
		form: QuoteForm,
		card: QuoteCard
	}
};

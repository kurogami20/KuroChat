import { atomWithStorage } from 'jotai/utils';
import { atom } from 'jotai/vanilla';

export const questionAtom = atom<string>('');

export const convoAtom = atom<{
	question: string;
	answer: string;
} | null>(null);

export const convoListAtom = atomWithStorage<
	{ question: string; answer: string }[]
>('convoList', []);

export const currentConversationAtom = atomWithStorage<number | null>(
	'currentConversation',
	null,
);

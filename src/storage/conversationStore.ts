import { atomWithStorage } from 'jotai/utils';

export const convoAtom = atomWithStorage<{
	question: string;
	answer: string;
} | null>('convo', null);

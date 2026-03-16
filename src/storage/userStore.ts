import { atomWithStorage } from 'jotai/utils';
import { atom } from 'jotai/vanilla';

export const userAtom = atomWithStorage<{ token: string; user: string }>(
	'user',
	{
		token: '',
		user: '',
	},
);

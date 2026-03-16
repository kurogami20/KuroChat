import { atomWithStorage } from 'jotai/utils';

export const userAtom = atomWithStorage<{ token: string; user: string }>(
	'user',
	{
		token: '',
		user: '',
	},
);

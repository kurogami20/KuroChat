export type User = {
	id: number;
	mail: string;
	password: string;
};

export type Conversation = {
	id: number;
	user_id: number;
};

export type Question = {
	id: number;
	conversation_id: number;
	text: string;
};

export type Answer = {
	id: number;
	conversation_id: number;
	text: string;
};

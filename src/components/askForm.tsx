import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';
import { Field, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';

import {
	convoAtom,
	convoListAtom,
	questionAtom,
} from '@/storage/conversationStore';
import { useSetAtom } from 'jotai/react';
import { Trash2 } from 'lucide-react';
import { useState } from 'react';

interface AskFormProps {
	disTitle?: boolean;
}

export function AskForm({ disTitle = false }: AskFormProps) {
	const [displayTitle, setDisplayTitle] = useState(disTitle);
	const setConvoList = useSetAtom(convoListAtom);
	const setQuestion = useSetAtom(questionAtom);
	const question = [
		'What do you need help with today?',
		'How can I assist you?',
		'What would you like to know?',
		'Feel free to ask me anything!',
		'What topic are you interested in?',
	];

	async function SubmitAction(formData: FormData) {
		setDisplayTitle(false);
		const form = document.querySelector('form');
		form?.reset();
		const data = Object.fromEntries(formData) as {
			content: string;
		};
		setQuestion(data.content);
	}

	return (
		<form className="w-full" action={SubmitAction}>
			<Field>
				{displayTitle && (
					<FieldLabel htmlFor="input-button-group">
						<h2
							id="title"
							className="text-2xl md:text-4xl text-center font-semibold mb-4 text-foreground w-full"
						>
							{question[Math.floor(Math.random() * question.length)]}
						</h2>
					</FieldLabel>
				)}
				<ButtonGroup className="w-full md:max-w-2xl mx-auto h-12">
					<Input
						id="input-button-group"
						type="text"
						name="content"
						placeholder="Ask your question"
						className="h-full"
					/>
					<Button
						variant="default"
						type="submit"
						className="cursor-pointer h-full"
					>
						Ask
					</Button>
				</ButtonGroup>
			</Field>
		</form>
	);
}

import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';
import { Field, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';

import query from '@/services/prompt';
import { convoAtom } from '@/storage/conversationStore';
import { useSetAtom } from 'jotai/react';

export function AskForm() {
	const setConvo = useSetAtom(convoAtom);
	const question = [
		'What do you need help with today?',
		'How can I assist you?',
		'What would you like to know?',
		'Feel free to ask me anything!',
		'What topic are you interested in?',
	];

	async function OnSubmit(event: React.SubmitEvent<HTMLFormElement>) {
		event.preventDefault();
		console.log(event.currentTarget.firstChild);
		const formData = new FormData(event.currentTarget);
		const content = formData.get('content') as string;
		if (content) {
			event.currentTarget.reset();
			const response = await query(content);
			if (response) {
				const convoData = {
					question: content,
					answer: response,
				};

				setConvo(convoData);
			}
		}
	}

	return (
		<form className="w-full" onSubmit={OnSubmit}>
			<Field>
				<FieldLabel htmlFor="input-button-group">
					<h2
						id="title"
						className="text-2xl md:text-4xl text-center font-semibold mb-4 text-foreground w-full"
					>
						{question[Math.floor(Math.random() * question.length)]}
					</h2>
				</FieldLabel>
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
						Search
					</Button>
				</ButtonGroup>
			</Field>
		</form>
	);
}

import { AskForm } from '@/components/askForm';
import ConvoCard from '@/components/convoCard';
import { ConvoCardSkeleton } from '@/components/convoCardSkeleton';
import answerService from '@/services/answer';
import { conversationService } from '@/services/conversation';
// import { ScrollArea } from '@/components/ui/scroll-area';
import query from '@/services/prompt';
import questionService from '@/services/question';
import {
	convoAtom,
	convoListAtom,
	currentConversationAtom,
	questionAtom,
} from '@/storage/conversationStore';
import { userAtom } from '@/storage/userStore';
import { useAtom, useAtomValue, useSetAtom } from 'jotai/react';
import { useEffect, useState } from 'react';

const Home = () => {
	// const [displayCard, setDisplayCard] = useState(true);
	const setQuestion = useSetAtom(questionAtom);

	const question = useAtomValue(questionAtom);

	const setConvoList = useSetAtom(convoListAtom);

	const user = useAtomValue(userAtom);

	const [currentConversation, setCurrentConversation] = useAtom(
		currentConversationAtom,
	);

	async function answerQuestion() {
		if (question) {
			const response = await query(question);
			if (response && question) {
				const convoData = {
					question: question,
					answer: response,
				};

				setConvoList((prev) => (convoData ? [...prev, convoData] : prev));

				// setDisplayCard(false);
				setQuestion('');

				if (user.token) {
					if (currentConversation === null) {
						const createConvo = await conversationService.createConversation(
							user.token,
						);
						if (createConvo && createConvo.status === 'success') {
							console.log('Conversation created with ID:', createConvo.id);
							setCurrentConversation(createConvo.id);

							const addQuestion = await questionService.createQuestion(
								user.token,
								{
									text: question,
									conversation_id: createConvo.id,
								},
							);
							if (addQuestion.status === 'success') {
								console.log('Question added to conversation');
								const addAnswer = await answerService.createAnswer(user.token, {
									text: response,
									conversation_id: createConvo.id,
								});
								if (addAnswer.status === 'success') {
									console.log('Answer added to conversation');
								} else {
									console.log('Failed to add answer to conversation');
								}
							} else {
								console.log('Failed to add question to conversation');
							}
						}
					} else if (currentConversation !== null) {
						console.log(currentConversation);
						const addQuestion = await questionService.createQuestion(
							user.token,
							{
								text: question,
								conversation_id: currentConversation,
							},
						);
						if (addQuestion.status === 'success') {
							console.log('Question added to conversation');

							const addAnswer = await answerService.createAnswer(user.token, {
								text: response,
								conversation_id: currentConversation,
							});
							if (addAnswer.status === 'success') {
								console.log('Answer added to conversation');
							} else {
								console.log('Failed to add answer to conversation');
							}
						} else {
							console.log('Failed to add question to conversation');
						}
					}
				}
			}
		}
		// setDisplayCard(true);
		return;
	}
	useEffect(() => {
		answerQuestion();
	}, [question]);
	const convoListValue = useAtomValue(convoListAtom);

	return (
		<div className="flex flex-col items-center justify-center min-h-dvh py-2">
			<div className="w-full md:max-w-4xl mx-auto mb-6 space-y-4 flex flex-col gap-5 overflow-y-auto max-h-[75vh] px-5 ">
				{convoListValue &&
					convoListValue.length > 0 &&
					convoListValue.map((item) => (
						<>
							<div key={item.question}>
								<ConvoCard text={item.question} question={true} />
							</div>
							<div key={item.answer}>
								<ConvoCard text={item.answer} question={false} />
							</div>
						</>
					))}
				{question && (
					<>
						<ConvoCard text={question} question={true} />
						<ConvoCardSkeleton />
					</>
				)}
			</div>
			{convoListValue[0] ? (
				<AskForm disTitle={false} />
			) : (
				<AskForm disTitle={true} />
			)}
		</div>
	);
};

export default Home;

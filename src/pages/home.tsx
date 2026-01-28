import { AskForm } from '@/components/askForm';
import ConvoCard from '@/components/convoCard';
import { ConvoCardSkeleton } from '@/components/convoCardSkeleton';
// import { ScrollArea } from '@/components/ui/scroll-area';
import query from '@/services/prompt';
import {  convoAtom, convoListAtom, questionAtom } from '@/storage/conversationStore';
import { useAtomValue, useSetAtom } from 'jotai/react';
import { useState } from 'react';

const Home =  () => {
	// const [displayCard, setDisplayCard] = useState(true);

	const setConvo = useSetAtom(convoAtom); 

	const question = useAtomValue(questionAtom)
	
	const setConvoList = useSetAtom(convoListAtom);


async function answerQuestion() {
	const setQuestion = useSetAtom(questionAtom);
		if (question){			
			const response = await query(question);
			if (response && question) {
				const convoData = {
					question: question,
					answer: response,
				};

		
				setConvoList((prev) => (convoData ? [...prev, convoData] : prev));
				console.log("done" + 1);
				// setDisplayCard(false);
				setQuestion('');
}
			}
		// setDisplayCard(true);
		return;
	}
	answerQuestion();
	const convoListValue = useAtomValue(convoListAtom);

	

	return (
		<div className="flex flex-col items-center justify-center min-h-dvh py-2">
			

<div className="w-full md:max-w-4xl mx-auto mb-6 space-y-4 flex flex-col gap-5 overflow-y-auto max-h-[75vh] px-5 " >
			{convoListValue  && convoListValue.length > 0 && (
				<>
					{convoListValue.map((item, index) => (
						<>
						<div key={item.question}>
							<ConvoCard
								text={item.question}
								question={true}
							/>
							</div>
							<div key={item.answer}>
							<ConvoCard
								text={item.answer}
								question={false}
							/>
							</div>
						</>
					))}
				</>
						
				
				
				
			)}
			{question && (
					<>
					<ConvoCard
					keyValue={question}
					text={question}
					question={true}
					/>
					<ConvoCardSkeleton />
					</>
				
			)}
			</div>
			{(convoListValue[0] ? <AskForm disTitle={false} delConvo ={true} /> :<AskForm disTitle={true} delConvo ={false} />)}
			
		</div>
	);
};

export default Home;

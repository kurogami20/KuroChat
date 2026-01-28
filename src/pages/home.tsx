import { AskForm } from '@/components/askForm';
import ConvoCard from '@/components/convoCard';
import { convoAtom, convoListAtom } from '@/storage/conversationStore';
import { useAtomValue, useSetAtom } from 'jotai/react';

const Home = () => {
	const convo = useAtomValue(convoAtom);
	const setConvoList = useSetAtom(convoListAtom);
	setConvoList((prev) => (convo ? [...prev, convo] : prev));
	const setConvo = useSetAtom(convoAtom);
	setConvo(null);
	const convoListValue = useAtomValue(convoListAtom);
	console.log({ convoListValue });
	return (
		<div className="flex flex-col items-center justify-center min-h-dvh py-2">
			{convoListValue && convoListValue.length > 0 && (
				<div className="w-full md:max-w-4xl mx-auto mb-6 space-y-4 flex flex-col gap-5 overflow-auto h-max-[75vh] ">
					{convoListValue.map((item, index) => (
						<>
							<ConvoCard
								key={item.question}
								text={item.question}
								question={true}
							/>
							<ConvoCard
								key={item.answer}
								text={item.answer}
								question={false}
							/>
						</>
					))}
				</div>
			)}
			<AskForm />
		</div>
	);
};

export default Home;

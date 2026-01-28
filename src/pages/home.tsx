import { AskForm } from '@/components/askForm';
import { convoAtom } from '@/storage/conversationStore';
import { useAtomValue } from 'jotai/react';

const Home = () => {
	const convo = useAtomValue(convoAtom);
	console.log(convo);
	return (
		<div className="flex flex-col items-center justify-center min-h-dvh py-2">
			<AskForm />
		</div>
	);
};

export default Home;

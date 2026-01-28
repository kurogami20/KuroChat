import { Card, CardContent } from './ui/card';
import { markdown } from 'markdown';

interface ConvoCardProps {
	text: string;
	question?: boolean;

}

const ConvoCard = ({ text, question }: ConvoCardProps) => {
	return (
		
			<Card
				{...(question
					? { className: 'ml-auto w-fit max-w-[75%] bg-muted' }
					: { className: 'w-fit max-w-[75%]' })}
			>
				<CardContent
				className='text-wrap'
					dangerouslySetInnerHTML={{ __html: markdown.toHTML(text) }}
				/>
			</Card>
		
	);
};

export default ConvoCard;

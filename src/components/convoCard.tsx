import { Card, CardContent } from './ui/card';
import { markdown } from 'markdown';

interface ConvoCardProps {
	text: string;
	question?: boolean;
}

const ConvoCard = ({ text, question }: ConvoCardProps) => {
	return (
		<div>
			<Card
				{...(question
					? { className: 'ml-auto w-fit max-w-[75%]' }
					: { className: 'w-fit max-w-[75%]' })}
			>
				<CardContent
					dangerouslySetInnerHTML={{ __html: markdown.toHTML(text) }}
				/>
			</Card>
		</div>
	);
};

export default ConvoCard;

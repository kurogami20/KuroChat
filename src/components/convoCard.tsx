import { Card, CardContent } from './ui/card';

interface ConvoCardProps {
	text: string;
}

const ConvoCard = ({ text }: ConvoCardProps) => {
	return (
		<div>
			<Card>
				<CardContent>{text}</CardContent>
			</Card>
		</div>
	);
};

export default ConvoCard;

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircleIcon } from 'lucide-react';

interface ErrorMessageAlertProps {
	message: string;
	description?: string;
}
export function ErrorMessageAlert({
	message,
	description,
}: ErrorMessageAlertProps) {
	return (
		<Alert variant="destructive" className="w-lg">
			<AlertCircleIcon />
			<AlertTitle>{message}</AlertTitle>
			<AlertDescription>{description}</AlertDescription>
		</Alert>
	);
}

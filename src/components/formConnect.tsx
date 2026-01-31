import { Button } from '@/components/ui/button';
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface CardDemoProps {
	title: string;
	description: string;
	action: string;
	password: string | undefined;
	formAction?: (formData: FormData) => Promise<void>;
}

export function FormConnect({
	title,
	description,
	action,
	password,
	formAction,
}: CardDemoProps) {
	return (
		<Card className="w-full max-w-lg">
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
				<CardAction>
					<Button variant="link" className="cursor-pointer">
						{action}
					</Button>
				</CardAction>
			</CardHeader>
			<CardContent>
				<form id="connect-form" action={formAction}>
					<div className="flex flex-col gap-6">
						<div className="grid gap-2">
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								type="email"
								placeholder="m@example.com"
								name="mail"
								required
							/>
						</div>
						<div className="grid gap-2">
							<div className="flex items-center">
								<Label htmlFor="password">Password</Label>
								<a
									href="#"
									className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
								>
									{password}
								</a>
							</div>
							<Input id="password" type="password" name="password" required />
						</div>
					</div>
				</form>
			</CardContent>
			<CardFooter className="flex-col gap-2">
				<Button
					type="submit"
					form="connect-form"
					className="w-full cursor-pointer"
				>
					{action}
				</Button>
			</CardFooter>
		</Card>
	);
}

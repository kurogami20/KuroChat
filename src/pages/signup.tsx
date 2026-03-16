import { ErrorMessageAlert } from '@/components/errorMessageAlert';
import { FormConnect } from '@/components/formConnect';
import { Progress } from '@/components/ui/progress';
import userService from '@/services/user';
import { convoListAtom } from '@/storage/conversationStore';
import { useSetAtom } from 'jotai/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const Signup = () => {
	const [error, setError] = useState<boolean>(false);
	const setConvo = useSetAtom(convoListAtom);
	const navigate = useNavigate();
	const [progress, setProgress] = useState<boolean>(false);
	const [progressValue, setProgressValue] = useState<number>(10);

	return (
		<div className="flex flex-col items-center justify-center min-h-dvh py-2 gap-5">
			{error && (
				<ErrorMessageAlert
					message="Signup failed"
					description="Invalid email or password (at least 8 characters). Try again or login."
				/>
			)}
			{!progress && (
				<FormConnect
					title="Create your account"
					description="Enter your email below to create your account"
					action="Signup"
					otherwise="login"
					password={undefined}
					formAction={async (formData: FormData) => {
						const data = Object.fromEntries(formData) as {
							mail: string;
							password: string;
						};
						setProgress(true);

						if (progressValue < 90) {
							setTimeout(() => {
								setProgressValue(progressValue + 10);
							}, 500);
						}

						if (data.mail && data.password) {
							const response = await userService.signUp(data);

							if (response && response.status === 'error') {
								setError(true);
								setProgress(false);
							} else {
								setProgress(false);
								setError(false);
								console.log(response);
								setProgressValue(100);
								setConvo([]);
								navigate('/login');
							}
						}
					}}
				/>
			)}
			{progress && <Progress value={progressValue} className="w-[60%]" />}
		</div>
	);
};

export default Signup;

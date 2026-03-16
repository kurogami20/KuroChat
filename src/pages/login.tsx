import { FormConnect } from '@/components/formConnect';
import userService from '@/services/user';
import { ErrorMessageAlert } from '@/components/errorMessageAlert';
import { use, useEffect, useState } from 'react';
import { userAtom } from '@/storage/userStore';
import { useNavigate } from 'react-router';
import { useSetAtom } from 'jotai/react';
import { convoListAtom } from '@/storage/conversationStore';
import { Progress } from '@/components/ui/progress';

const Login = () => {
	const [error, setError] = useState<boolean>(false);
	const setUserToken = useSetAtom(userAtom);
	const setConvo = useSetAtom(convoListAtom);
	const navigate = useNavigate();
	const [progress, setProgress] = useState<boolean>(false);
	const [progressValue, setProgressValue] = useState<number>(10);
	return (
		<div className="flex flex-col items-center justify-center min-h-dvh py-2 gap-5">
			{error && (
				<ErrorMessageAlert
					message="Login failed"
					description="Invalid email or password. Try again or create an account."
				/>
			)}

			{!progress && (
				<FormConnect
					title="Login to your account"
					description="Enter your email below to login to your account"
					action="Login"
					otherwise="signup"
					password="Forgot your password?"
					formAction={async (formData: FormData) => {
						const data = Object.fromEntries(formData) as {
							mail: string;
							password: string;
						};
						setProgress(true);
						setProgressValue(25);

						if (data.mail && data.password) {
							const response = await userService.login(data);
							setProgressValue(75);
							if (response && response.status === 'error') {
								setError(true);
								setProgress(false);
							} else {
								setProgressValue(100);
								setProgress(false);
								setError(false);
								console.log(response);
								setUserToken({ token: response.token, user: response.user }); //token à vérifier
								setConvo([]);
								navigate('/');
							}
						}
					}}
				/>
			)}
			{progress && <Progress value={progressValue} className="w-[60%]" />}
		</div>
	);
};

export default Login;

import { NavLink } from 'react-router';
import { SidebarProvider, SidebarTrigger } from './ui/sidebar';
import { AppSidebar } from './sidebar';
import { useAtom, useSetAtom } from 'jotai/react';
import { userAtom } from '@/storage/userStore';
import { convoListAtom } from '@/storage/conversationStore';

const Header = () => {
	const [user, setUser] = useAtom(userAtom);
	const setConvo = useSetAtom(convoListAtom);
	if (user.token !== '') {
		setTimeout(
			() => {
				setUser({ token: '', user: '' });
				setConvo([]);
				window.location.reload();
			},
			60 * 60 * 1000,
		);
	}
	return (
		<header className=" px-10 py-7  flex items-center gap-8 fixed">
			<SidebarProvider className=" min-h-fit  items-center w-fit ">
				<AppSidebar />
				<span>
					<SidebarTrigger className="cursor-pointer [&_svg:not([class*='size-'])]:size-6" />
				</span>
			</SidebarProvider>
			<NavLink to="/">
				<h1 className="text-3xl md:text-5xl font-bold text-foreground text-center ">
					Kuro Chat
				</h1>
			</NavLink>
		</header>
	);
};

export default Header;

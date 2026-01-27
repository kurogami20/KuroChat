import { NavLink } from 'react-router';
import { SidebarProvider, SidebarTrigger } from './ui/sidebar';
import { AppSidebar } from './sidebar';

const Header = () => {
	return (
		<header className=" px-10 py-7  flex items-center gap-8 fixed">
			<SidebarProvider className=" min-h-fit  items-center w-fit ">
				<AppSidebar />
				<nav className="h-fit">
					<SidebarTrigger className="cursor-pointer" />
				</nav>
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

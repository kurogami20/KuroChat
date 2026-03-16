import { NavLink } from 'react-router';
import { SidebarProvider, SidebarTrigger } from './ui/sidebar';
import { AppSidebar } from './sidebar';

const Header = () => {
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

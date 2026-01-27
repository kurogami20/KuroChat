import { NavLink } from 'react-router';
import { SidebarProvider, SidebarTrigger } from './ui/sidebar';
import { AppSidebar } from './sidebar';
const Header = () => {
	return (
		<header className=" p-4  flex ">
			<SidebarProvider className=" min-h-fit  items-center">
				<AppSidebar />
				<nav className="h-fit">
					<SidebarTrigger className="" />
				</nav>
				<NavLink to="/">
					<h1 className="text-3xl md:text-5xl font-bold text-foreground text-center ">
						Kuro Chat
					</h1>
				</NavLink>
			</SidebarProvider>
		</header>
	);
};

export default Header;

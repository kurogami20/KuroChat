import { NavLink } from 'react-router';
const Header = () => {
	return (
		<header className=" p-4 flex justify-center items-center border-b border-[#171717]">
			<NavLink to="/">
				<h1 className="text-3xl md:text-5xl font-bold text-white">Kuro Chat</h1>
			</NavLink>
		</header>
	);
};

export default Header;

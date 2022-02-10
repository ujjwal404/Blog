import { useTheme } from 'next-themes';
import Image from 'next/image';
import logo from '../public/favicon.ico';

const Navbar = () => {
	const { theme, setTheme } = useTheme();
	return (
		<nav>
			<h1>navbar</h1>
		</nav>
	);
};
export default Navbar;

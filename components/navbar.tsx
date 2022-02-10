import { useTheme } from 'next-themes';
import Image from 'next/image';
import logo from '../public/favicon.ico';

const Navbar = () => {
	const { theme, setTheme } = useTheme();
	return (
		<nav className="w-full z-50 h-16">
			<div className="flex flex-row justify-between">
				<span className="flex row m-3">
					<Image src={logo} alt="Vault" width={40} height={10} className="h-8 w-8 mr-2" />
					<p className="font-lato primary font-normal uppercase text-3xl">Vault</p>
				</span>
				{/* <button
					aria-label="Toggle Dark Mode"
					onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
				>
					dark
				</button> */}
			</div>
		</nav>
	);
};
export default Navbar;

import ThemeSwitch from './themeSwitch'
import Link from 'next/link';
import logo from '../public/favicon.ico'
import Image from 'next/image'

const Navbar = () => {

	return (
		<div className='h-16 w-full dark:bg-darkGray dark:text-navTextDark shadow'>
			<div className='w-full flex relative h-full'>
				<div className='absolute inset-x-0 bottom-0 flex justify-between m-1'>
				<Link href={'/'}>
			
				<a><div className='flex ml-10'>
					<div className='h-10 w-10'>
						<Image src={logo} alt="logo"/>
					</div>
					<h1 className='text-4xl ml-2 mb-2'>
					
					Macros</h1>
					</div>
					</a>
				</Link>
				<ThemeSwitch />
				</div>
			</div>
		</div>

	);
};
export default Navbar;

import ThemeSwitch from './themeSwitch'
import Link from 'next/link';
import logo from '../public/logo.webp'
import Image from 'next/image'

function getRandomString() {
	return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

const Navbar = () => {

	return (
		<div className='h-12 pt-2 md:h-14 lg:h-16 w-full dark:bg-darkGray dark:text-navTextDark shadow'>
			<div className='w-full flex relative h-full'>
				<div className='absolute inset-x-0 bottom-0 flex justify-between m-1'>
				<Link href={'/'}>
			
				<a><div className='flex ml-4 md:ml-10 mt-3'>
					<div className='w-6 h-6 md:w-8 md:h-8 mt-3 md:mt-2 lg:mt-2' >
						<Image src={logo} height={35} width={35} layout="responsive" alt="logo"/>
					</div>
					<div className="md:mt-1">
					<h1 className='text-xl mt-3 sm:mt-0 md:text-2xl lg:text-4xl ml-2'>
					
					Macros</h1>
					</div>
					</div>
					</a>
				</Link>
				<div className='flex flex-row mt-2'>
				<div className='mt-3'>
					<Link href={'/about'}>
						<a>
						<Image src={`https://avatars.dicebear.com/api/bottts/${getRandomString()}.svg`} height={23} width={23} alt="about"/>
						</a>
					</Link>
						<ThemeSwitch />
				</div>
			
				</div>
				</div>
			</div>
		</div>

	);
};
export default Navbar;

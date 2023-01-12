import Head from 'next/head';
import Footer from './footer';
import Navbar from './navbar';

type Props = {
	children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
	return (
		<div className="min-h-screen flex flex-col dark:bg-darkBG dark:text-textgray">
			<Head>
				<title>Macros</title>
				<meta name="description" content="Personal Blog site. I write about Web dev, ML and other things that I find interesting." />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header>
				<Navbar/>
			</header>
			<div className="flex flex-col md:flex-row flex-1">
				<main className="flex-1">{children}</main>
			</div>
			<Footer />
		</div>
	);
};

export default Layout;

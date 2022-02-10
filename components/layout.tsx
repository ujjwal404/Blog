import Head from 'next/head';
import Footer from './footer';
import Navbar from './navbar';

type Props = {
	children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
	return (
		<div className="min-h-screen flex flex-col">
			<Head>
				<title>Vault</title>
				<meta name="description" content="Secure your app using cryptographic algorithms" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header>
				<Navbar />
			</header>
			<div className="flex flex-col md:flex-row flex-1">
				<main className="flex-1">{children}</main>
			</div>
			<Footer />
		</div>
	);
};

export default Layout;

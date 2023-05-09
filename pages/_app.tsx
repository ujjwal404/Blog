import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import Layout from '../components/layout';
import '../styles/github-dark.css'
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider attribute="class">
			<Layout>
				 <Head>
        <meta name="keywords" content="blogs ujjwal blogsite Ujjwal kadam ujjwalkadam blog NSUT" />
        <meta name="author" content="Ujjwal" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
			<Component {...pageProps} />
		</Layout>
		</ThemeProvider>
	);
}

export default MyApp;

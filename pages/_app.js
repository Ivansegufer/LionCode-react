import Head from 'next/head';
import { useRouter } from 'next/router';
import { getTitle } from '../utils/getters';
import Header from '../components/organisms/Header';
import '../styles/styles.scss';

const App = ({ Component, pageProps }) => { 
    const router = useRouter();

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
                <title>{ getTitle(router.asPath) }</title>
            </Head>
            <Header route={router.asPath} />
            <Component { ...pageProps }/>
            <footer className="copyright">
                LionCode &copy; <span>{new Date().getFullYear()}</span>
            </footer>
            <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
            <script src="/js/aos.js"></script>
        </>
    );
}

export default App;
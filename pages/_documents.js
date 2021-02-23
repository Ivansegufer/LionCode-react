import Document, { Html, Head, Main, NextScript } from 'next/document';

class MainDocument extends Document {

    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    static render() {
        return (
            <Html lang='es'>
                <Head>
                    <body>
                        <Main />
                        <NextScript />
                    </body>
                </Head>
            </Html>
        );
    }
}

export default MainDocument;
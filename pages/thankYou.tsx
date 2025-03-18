import { NextPage } from "next";
import { Layout } from "components/layout";
import Head from "next/head"

const ThankYouPage: NextPage = () => {

    return (
        <>
            <Head>
                <title>Gracias por su compra</title>
                <meta name="description" content="gracias por su compra" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <h1>compra aprobada</h1>
            </Layout>
        </>
    );
};

export default ThankYouPage;
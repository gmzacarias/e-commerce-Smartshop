import { NextPage } from "next";
import Head from "next/head"
import { Layout } from "components/layout";
import { Profile } from "@/features/user/pages/profile"


const MePage: NextPage = () => {

    return (
        <>
            <Head>
                <title>Mi perfil</title>
                <meta name="description" content="Mis datos de usuario" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <Profile />
            </Layout>
        </>
    );
};

export default MePage;
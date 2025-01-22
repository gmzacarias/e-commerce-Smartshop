import { NextPage } from "next";
import Head from "next/head"
import { Layout } from "components/layout";
import { Me } from "@/components/myProfile/profile"
import styled from "styled-components"

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
                <Me />
            </Layout>
        </>
    );
};

export default MePage;
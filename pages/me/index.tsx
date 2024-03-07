import { NextPage } from "next";
import { Layout } from "components/layout";
import { useMe } from "lib/hooks"
import { Me } from "components/me"
import styled from "styled-components"
import Head from "next/head"

const MePageBody = styled.div`
    display: flex;
    padding-top: 30px;
    flex-direction: column;
    align-items: center;
`

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
                <MePageBody>
                    <Me />
                </MePageBody>
            </Layout>
        </>
    );
};

export default MePage;
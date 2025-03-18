import { NextPage } from "next";
import Head from "next/head"
import { Layout } from "components/layout";
import { Login } from "@/features/auth/pages/login"
import styled from "styled-components"

const LoginPageBody = styled.div`
    /* display: flex;
    padding-top: 30px;
    flex-direction: column;
    align-items: center; */
`

const LoginPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Iniciar sesion</title>
                <meta name="description" content="Iniciar sesion en Smartshop" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <LoginPageBody>
                    <Login />
                </LoginPageBody>
            </Layout>
        </>
    );
};

export default LoginPage;
import { NextPage } from "next";
import { Layout } from "components/layout";
import { useMe } from "lib/hooks"
import { Me } from "components/me"
import styled from "styled-components"
import Head from "next/head"

const OrdersPage: NextPage = () => {

    return (
        <>
            <Head>
                <title>Mis ordenes</title>
                <meta name="description" content="Mis ordenes" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <h1>hola soy las ordenes</h1>
            </Layout>
        </>
    );
};

export default OrdersPage;
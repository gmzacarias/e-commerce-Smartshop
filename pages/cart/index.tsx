import { Login } from "components/login"
import { Layout } from "components/layout";
import { NextPage } from "next";
import Head from "next/head";
import {Cart} from "components/cart"

const CartPage: NextPage = () => {

    return (
        <>
            <Head>
                <title>Carrito de compras</title>
                <meta name="description" content="Mi carrito de compras" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <Cart />
            </Layout>
        </>
    );
};

export default CartPage;
import { NextPage } from "next";
import { Layout } from "components/layout";
import Head from "next/head"
import { MyOrders } from "@/features/user/pages/myOrders"

const MyOrdersPage: NextPage = () => {

    return (
        <>
            <Head>
                <title>Mis ordenes</title>
                <meta name="description" content="Mis ordenes" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <MyOrders></MyOrders>
            </Layout>
        </>
    );
};

export default MyOrdersPage;
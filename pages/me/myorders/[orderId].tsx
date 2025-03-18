import { NextPage } from "next";
import { Layout } from "components/layout";
import { useMe } from "@/hooks/swr/useSWR"
import styled from "styled-components"
import Head from "next/head"
import { useRouter } from "next/router";
import { OrderById } from "@/features/user/components/myOrders/orderById"

const OrderByIdPage: NextPage = () => {
    const router = useRouter();
    const orderId = router.query.orderId
    console.log("id", orderId)
    return (
        <>
            <Head>
                <title>Orden:{orderId}</title>
                <meta name="description" content="Mis ordenes" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <OrderById orderId={orderId} />
            </Layout>
        </>
    );
};

export default OrderByIdPage;
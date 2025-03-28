import { NextPage } from "next";
import { Layout } from "components/layout";
import Head from "next/head"
import { useRouter } from "next/router";
import { OrdersById } from "@/features/user/components/orderById"
import { MyOrderById } from "@/features/user/pages/myOrderById";

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
                <MyOrderById orderId={orderId} />
            </Layout>
        </>
    );
};

export default OrderByIdPage;
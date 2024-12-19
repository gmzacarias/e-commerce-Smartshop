"use client"

import { NextPage } from "next";
import { Layout } from "components/layout";
import Head from "next/head"
import { PurchaseTicketCard } from "@/components/purchaseTicketCard";
import { useCheckoutPages } from "@/components/utils/pages/usePages";

const CheckOutPage: NextPage = () => {
    const { orderIdType, statusType, paymentIdType, statusMessage, description, isLoading } = useCheckoutPages()

    return (
        <>
            <Head>
                <title>{statusMessage}</title>
                <meta name="description" content={description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                {isLoading ? (
                    <>
                        <div>..loading</div>
                    </>
                ) : (
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 10 }}>
                        <h1>{orderIdType ? orderIdType : "no hay datos"}</h1>
                        <h2>{statusType ? statusType : "no hay datos"}</h2>
                        <h3>{paymentIdType ? paymentIdType : "no hay datos"}</h3>
                        <PurchaseTicketCard status={statusType} orderId={orderIdType} paymentId={paymentIdType} />
                        <h4>hola</h4>

                    </div>
                )
                }
            </Layout>
        </>
    );
};

export default CheckOutPage;
"use client"

import { NextPage } from "next";
import { Layout } from "components/layout";
import { useMe } from "lib/hooks"
import { Me } from "@/components/myProfile/me"
import styled from "styled-components"
import Head from "next/head"
import { useRouter } from "next/router";
import { PurchaseTicketCard } from "@/components/purchaseTicketCard";




const CheckOutPage: NextPage = () => {
    const router = useRouter()
    const orderId = router.query.orderId
    const { status, payment_Id } = router.query

    let statusMessage
    let description
    if (status == "approved") {
        statusMessage = "Compra aprobada"
        description = "Compra realizada con exito"
    } else if (status == "pending") {
        statusMessage = "Compra pendiente de pago"
        description="compra pendiente de pago"
    } else {
        statusMessage = "Fallo al realizar el pago"
        description="fallo al realizar el pago,reintente con otro medio de pago"
    }

    return (
        <>
            <Head>
                <title>{statusMessage}</title>
                <meta name="description" content={description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 10 }}>
                    <h1>compra aprobada ${orderId}</h1>
                    <PurchaseTicketCard status={status}/>

                </div>
            </Layout>
        </>
    );
};

export default CheckOutPage;
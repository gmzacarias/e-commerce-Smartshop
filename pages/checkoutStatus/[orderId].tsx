"use client"

import { NextPage } from "next";
import { Layout } from "components/layout";
import { useMe } from "lib/hooks"
import { Me } from "@/components/myProfile/me"
import styled from "styled-components"
import Head from "next/head"
import { useRouter } from "next/router";
import { PurchaseTicketCard } from "@/components/purchaseTicketCard";
import { useEffect, useState } from "react";




const CheckOutPage: NextPage = () => {
    const router = useRouter()
    // const {orderId}=router.query
    const { status, payment_id, orderId } = router.query
    const orderIdType = typeof orderId === "string" ? orderId : undefined
    const statusType = status === "success" || status === "pending" || status === "failure" ? status : undefined
    const paymentIdType = typeof payment_id === "string" ? payment_id : undefined

    console.log("estado", orderId, status, payment_id)

    const [statusMessage, SetStatusMessage] = useState("Estado de la compra");
    const [description, SetDescription] = useState(`estado de la compra`)
    const [isLoading, SetIsLoading] = useState(true)

    useEffect(() => {
        if (status) {
            if (status == "success") {
                SetStatusMessage("Compra aprobada")
                SetDescription("Compra realizada con exito")
            } else if (status == "pending") {
                SetStatusMessage("Compra pendiente de pago")
                SetDescription("compra pendiente de pago")
            } else if (status === "failure") {
                SetStatusMessage("Fallo al realizar el pago")
                SetDescription("fallo al realizar el pago,reintente con otro medio de pago")
            }
            SetIsLoading(false)
        }
    }, [status])

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
import { NextPage } from "next";
import Head from "next/head"
import { useRouter } from "next/router";
import { Layout } from "components/layout"
import {ItemById}from "components/itemById"
import { useProduct } from "@/lib/hooks";


const ItemPage: NextPage = () => {
    const router = useRouter();
    const id = router.query.id
  
    return (
        <div>

            <Head>
                <title>producto {id}</title>
                <meta name="description" content="Descubre lo último en smartphones Android de las marcas líderes como Motorola, Xiaomi y Samsung en Smartshop." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
         <ItemById productId={id}/>
            </Layout>
        </div>
    );
};

export default ItemPage;
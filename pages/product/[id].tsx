import { NextPage } from "next";
import Head from "next/head"
import { useRouter } from "next/router";
import { Layout } from "components/layout"
import { DetailedProduct } from "@/components/detailedProduct"



const ProductPage: NextPage = () => {
    const router = useRouter();
    const id = router.query.id
console.log("id",id)
    return (
        <div>
            <Head>
                <title>Detalle de producto</title>
                <meta name="description" content="Especificaciones tecnicas del smartphone." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <DetailedProduct productId={id} />
            </Layout>
        </div>
    );
};

export default ProductPage;
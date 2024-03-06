import { NextPage } from "next";
import Head from "next/head"
import { useRouter } from "next/router";
import { Layout } from "components/layout"
import { DetailedProduct } from "@/components/detailedProduct"
import { useProduct } from "@/lib/hooks";


const ProductPage: NextPage = () => {
    const router = useRouter();
    const id = router.query.id
console.log("id",id)
    return (
        <div>
            <Head>
                <title>Detalle de producto</title>
                <meta name="description" content="Descubre lo último en smartphones Android de las marcas líderes como Motorola, Xiaomi y Samsung en Smartshop." />
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
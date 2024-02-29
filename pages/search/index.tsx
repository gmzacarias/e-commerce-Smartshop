import { Login } from "components/login"
import { Layout } from "components/layout";
import { NextPage } from "next";
import { BasicProduct } from "components/basicProduct"
import { useRouter } from "next/router";
import { useEffect } from "react"
import Head from "next/head"

const SearchPage: NextPage = () => {
  const router = useRouter();
  const { q, offset, limit } = router.query;



  return (<>
    <Head>
      <title>{`Busqueda ${q}`}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <BasicProduct query={q} offset={offset} limit={limit}></BasicProduct>
    </Layout>
  </>
  );
};

export default SearchPage;
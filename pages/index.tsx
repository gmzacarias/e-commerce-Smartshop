import { NextPage } from "next"
import Head from "next/head"
import { Layout } from "components/layout"
import { Home } from "@/features/home/pages"

const HomePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Bienvenidos a Smartshop</title>
        <meta name="description" content="Descubre lo último en smartphones Android de las marcas líderes como Motorola, Xiaomi y Samsung en Smartshop." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Home />
      </Layout>
    </div>
  )
}
export default HomePage






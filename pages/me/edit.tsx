import { NextPage } from "next";
import Head from "next/head"
import { Layout } from "components/layout";
import { EditProfile } from "@/components/pages/myProfile/editProfile"
import styled from "styled-components"


const EditMePage: NextPage = () => {

    return (
        <>
            <Head>
                <title>Editar perfil</title>

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
               
                    <EditProfile />
               
            </Layout>
        </>
    );
};

export default EditMePage;
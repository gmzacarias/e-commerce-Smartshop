import { NextPage } from "next";
import Head from "next/head"
import { Layout } from "components/layout";
import { EditProfile } from "@/components/pages/myProfile/editProfile"
import styled from "styled-components"

const EditMePageBody = styled.div`
    display: flex;
    padding-top: 30px;
    flex-direction: column;
    align-items: center;
`
const EditMePage: NextPage = () => {

    return (
        <>
            <Head>
                <title>Editar perfil</title>

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <EditMePageBody>
                    <EditProfile />
                </EditMePageBody>
            </Layout>
        </>
    );
};

export default EditMePage;
import { NextPage } from "next";
import { Layout } from "components/layout";
import { useMe } from "lib/hooks"
import { EditProfile } from "@/components/editProfile"
import styled from "styled-components"

const EditMePageBody = styled.div`
    display: flex;
    padding-top: 30px;
    flex-direction: column;
    align-items: center;
`
const EditMePage: NextPage = () => {
    return (
        <Layout>
            <EditMePageBody>
                <EditProfile />
            </EditMePageBody>
        </Layout>
    );
};

export default EditMePage;
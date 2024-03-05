import { NextPage } from "next";
import { Layout } from "components/layout";
import { useMe } from "lib/hooks"
import { Me } from "components/me"
import styled from "styled-components"

const MePageBody = styled.div`
    display: flex;
    padding-top: 30px;
    flex-direction: column;
    align-items: center;
`

const MePage: NextPage = () => {
    return (
        <Layout>
            <MePageBody>
                <Me />
            </MePageBody>
        </Layout>
    );
};

export default MePage;
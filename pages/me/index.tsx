import { NextPage } from "next";
import { Layout } from "components/layout";
import { useMe } from "lib/hooks"
import { Me } from "components/me"

const MePage: NextPage = () => {
    
    return (
        <Layout>
            <Me />
        </Layout>
    );
};

export default MePage;
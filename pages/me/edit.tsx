import { NextPage } from "next";
import { Layout } from "components/layout";
import { useMe } from "lib/hooks"
import { EditProfile} from "@/components/editProfile"

const EditMePage: NextPage = () => {
    return (
        <Layout>
            <EditProfile />
        </Layout>
    );
};

export default EditMePage;
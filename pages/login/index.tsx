import { Login } from "components/login"
import { Layout } from "components/layout";
import { NextPage } from "next";

const LoginPage: NextPage = () => {
    return (
        <Layout>
            <Login />
        </Layout>
    );
};

export default LoginPage;
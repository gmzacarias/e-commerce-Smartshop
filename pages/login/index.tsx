import { Login } from "components/login"
import { Layout } from "components/layout";
import { NextPage } from "next";
import styled from "styled-components"

const LoginPageBody = styled.div`
    display: flex;
    padding-top: 30px;
    flex-direction: column;
    align-items: center;
`

const LoginPage: NextPage = () => {
    return (
        <Layout>
            <LoginPageBody>
                <Login />
            </LoginPageBody>
        </Layout>
    );
};

export default LoginPage;
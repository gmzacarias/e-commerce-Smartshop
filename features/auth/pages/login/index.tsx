import { useLogin } from "@/features/auth/hooks/useLogin";
import { EmailForm } from "@/features/auth/components/emailForm";
import { OTPForm } from "@/features/auth/components/otpForm";
import { SubTitle } from "ui/typography"
import { BrandPagesIcon } from "@/ui/icons";
import { LoginBody, PageContainer, FormContainer } from "./styles";

export function Login() {
    const { currentEmail } = useLogin()

    return (
        <LoginBody>
            <PageContainer>
                <BrandPagesIcon />
                <SubTitle>Ingresa a tu cuenta</SubTitle>
            </PageContainer>
            <FormContainer>
                {!currentEmail ? (<EmailForm />) : (<OTPForm />)}
            </FormContainer>
        </LoginBody >
    )
}
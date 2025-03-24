"use client"
import { useLogin } from "@/features/auth/hooks/useLogin";
import { PagesContainer } from "@/ui/containers/pagesContainer";
import { EmailForm } from "@/features/auth/components/emailForm";
import { OTPForm } from "@/features/auth/components/otpForm";

export function Login() {
    const { currentEmail } = useLogin()
    return (
        <PagesContainer $isAuth={true} subTitleText="Ingrese tu cuenta">
            {!currentEmail ? (<EmailForm />) : (<OTPForm />)}
        </PagesContainer>

    )
}
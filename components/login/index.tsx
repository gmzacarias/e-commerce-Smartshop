import { LoginBody, LoginContainer, PageContainer } from "./styles";
import { SubTitle, Label, Small, Paragraph } from "ui/typography"
import { DefaultInput } from "@/ui/inputs"
import { DefaultButton, FormButton } from "ui/buttons"
import { BrandPagesIcon } from "@/ui/icons";
import { useLogin } from "@/utils/components/useLogin";
import { Controller } from "react-hook-form";

interface EmailFormValue {
    email: string
}

interface CodeFormValue {
    code: number
}

export function Login() {
    const { currentEmail, controlEmail, controlCode,handleEmailSubmit, handleEmailForm, handleCodeSubmit, handleCodeForm } = useLogin()

    return (
        <LoginBody>
            {!currentEmail ? (
                <>
                    <PageContainer>
                        <BrandPagesIcon />
                        <SubTitle>Regístrate para comprar tu smartphone preferido</SubTitle>
                    </PageContainer>
                    <LoginContainer>
                        <form onSubmit={handleEmailSubmit(handleEmailForm)}>
                            <Controller
                                control={controlEmail}
                                name="email"
                                rules={{
                                    required: "ingrese un email",
                                    pattern: {
                                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                        message: "Formato de email inválido",
                                    },
                                }
                                }
                                render={({ field: { onChange, value } }) => (
                                    <Label>
                                        Email
                                        <DefaultInput
                                            type="text"
                                            placeholder="example@email.com"
                                            onChange={onChange}
                                            value={value}
                                        />

                                    </Label>
                                )}
                            />
                            <FormButton title="iniciar sesion">
                                INGRESAR
                            </FormButton>
                        </form>
                    </LoginContainer>
                </>
            ) : (
                <LoginContainer>
                    <PageContainer>
                        <BrandPagesIcon />
                        <SubTitle>Regístrate para comprar tu smartphone preferido</SubTitle>
                    </PageContainer>
                    <FormButton title="iniciar sesion">
                        INGRESAR
                    </FormButton>
                    <FormButton title="iniciar sesion">
                        INGRESAR
                    </FormButton>
                    <FormButton title="iniciar sesion">
                        INGRESAR
                    </FormButton>
                </LoginContainer>
            )
            }
        </LoginBody >
    )
}
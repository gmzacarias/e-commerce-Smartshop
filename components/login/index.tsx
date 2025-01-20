import { LoginBody, LoginContainer, PageContainer, OTPContainer } from "./styles";
import { SubTitle, Label, Small, Paragraph } from "ui/typography"
import { DefaultInput, OTPInput ,CurrentOTPInput} from "@/ui/inputs"
import { DefaultButton, FormButton } from "ui/buttons"
import { BrandPagesIcon } from "@/ui/icons";
import { useLogin } from "@/utils/components/useLogin";
import { Controller } from "react-hook-form";

export function Login() {
    const { otpRef,currentEmail, controlEmail, controlCode, onErrorEmail, onErrorCode,resendCode, handleEmailSubmit, handleEmailForm, handleCodeSubmit, handleCodeForm,handleKeyUp } = useLogin()

    return (
        <LoginBody>
            {!currentEmail ? (
                <>
                    <PageContainer>
                        <BrandPagesIcon />
                        <SubTitle>Regístrate para comprar tu smartphone preferido</SubTitle>
                    </PageContainer>

                    <LoginContainer>
                        <form onSubmit={handleEmailSubmit(handleEmailForm, onErrorEmail)}>
                            <Controller
                                control={controlEmail}
                                name="email"
                                rules={{
                                    required: "ingrese un email valido",
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
                                            required
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
                <>
                    <PageContainer>
                        <BrandPagesIcon />
                        <SubTitle>Ingresa el codigo para entrar a tu cuenta</SubTitle>
                    </PageContainer>
                    <LoginContainer>
                        <form onSubmit={handleCodeSubmit(handleCodeForm, onErrorCode)}>
                            <Label>
                                Codigo
                                <Small>
                                    Enviamos un código de verificación a email
                                </Small>
                                <OTPContainer>
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <Controller
                                            key={index}
                                            control={controlCode}
                                            name={`otp.${index}`}
                                            rules={{
                                                required: "ingrese un codigo valido",
                                                pattern: {
                                                    value: /^\d+$/,
                                                    message: "Formato de codigo inválido",
                                                },
                                            }
                                            }
                                            render={({ field: { onChange, value } }) => (
                                                <CurrentOTPInput
                                                    type="number"
                                                    ref={(element) => (otpRef.current[index] = element)}
                                                    placeholder="-"
                                                    maxlength={1}
                                                    onChange={onChange}
                                                    onKeyUp={() => handleKeyUp(index)} 
                                                    value={value}
                                                    required
                                                />
                                            )
                                            }
                                        />
                                    ))
                                    }
                                </OTPContainer>
                            </Label>
                            <FormButton title="iniciar sesion">
                                INGRESAR
                            </FormButton>
                        </form>
                        <Small>
                            ¿No recibiste el código?  
                        </Small>
                        <button onClick={resendCode} style={{background:"none",border:"none",cursor:"pointer"}}>
                            reenviar codigo
                        </button>
                    </LoginContainer>
                </>
            )
            }





        </LoginBody >
    )
}
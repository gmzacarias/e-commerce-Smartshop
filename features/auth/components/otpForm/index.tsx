"use client"
import { Controller } from "react-hook-form";
import { useLogin } from "@/features/auth/hooks/useLogin";
import { OTPContainer } from "@/ui/containers/otpContainer";
import { Label, Small } from "@/ui/typography";
import { RefOTPInput } from "@/ui/inputs";
import { FormButton } from "@/ui/buttons";

export function OTPForm() {
    const { handleCodeSubmit, handleCodeForm, onErrorCode, controlCode, otpRef, handleKeyUp, resendCode } = useLogin()
    return (
        <>
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
                                    required: "ingrese solo numeros",
                                    pattern: {
                                        value: /^\d$/,
                                        message: "Formato de codigo inválido",
                                    },
                                }
                                }
                                render={({ field: { onChange, value } }) => (
                                    <RefOTPInput
                                        type="text"
                                        ref={(element) => (otpRef.current[index] = element)}
                                        placeholder="-"
                                        maxLength={1}
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
            <button onClick={resendCode} style={{ background: "none", border: "none", cursor: "pointer" }}>
                reenviar codigo
            </button>
        </>
    )
}
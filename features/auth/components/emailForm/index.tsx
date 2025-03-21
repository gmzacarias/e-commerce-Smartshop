import { LoginInput } from "@/ui/inputs"
import { useLogin } from "../../hooks/useLogin"
import { Label } from "@/ui/typography"
import { FormButton } from "@/ui/buttons"
import { Controller } from "react-hook-form"

export function EmailForm() {
    const { controlEmail, onErrorEmail, handleEmailSubmit, handleEmailForm } = useLogin()
    return (
        <>
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
                            <LoginInput
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

        </>
    )
}
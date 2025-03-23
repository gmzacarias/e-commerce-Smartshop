import { FormButton } from "@/ui/buttons"
import { EditProfileInput } from "@/ui/inputs"
import { ButtonsContainer } from "@/ui/navbar/styles"
import { Label } from "@/ui/typography"
import { Controller } from "react-hook-form"
import { useEditProfile } from "../../hooks/useEditProfile"
import { ReactNode } from "react"

type EditProfileProps = {
    children: ReactNode
}

export function EditProfileForm({ children }: EditProfileProps) {
    const { handleSubmit, handleSubmitForm, onErrorForm, control, handleReset } = useEditProfile()

    return (
        <div style={{ display: "flex", gap: 10 }}>

            <form onSubmit={handleSubmit(handleSubmitForm, onErrorForm)}>
                <Controller
                    control={control}
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
                            <EditProfileInput
                                type="text"
                                placeholder="example@email.com"
                                onChange={onChange}
                                value={value}
                            />
                        </Label>
                    )}
                />
                <Controller
                    control={control}
                    name="userName"
                    rules={{
                        required: "ingrese un nombre valido",
                        pattern: {
                            value: /^[A-Za-z\s]+$/,
                            message: "Formato de nombre inválido",
                        },
                    }
                    }
                    render={({ field: { onChange, value } }) => (
                        <Label>
                            Nombre y Apellido
                            <EditProfileInput
                                type="text"
                                placeholder="nombre y apellido"
                                onChange={onChange}
                                value={value}
                            />
                        </Label>
                    )}
                />
                <Controller
                    control={control}
                    name="address"
                    rules={{
                        required: "ingrese un direccion valida",
                        pattern: {
                            value: /^[A-Za-z0-9\s,.-]{3,}$/,
                            message: "Formato de direccion inválida",
                        },
                    }
                    }
                    render={({ field: { onChange, value } }) => (
                        <Label>
                            Domicilio
                            <EditProfileInput
                                type="text"
                                placeholder="domicilio"
                                onChange={onChange}
                                value={value}
                                required
                            />
                        </Label>
                    )}
                />
                <Controller
                    control={control}
                    name="phoneNumber"
                    rules={{
                        required: "ingrese un celular valido",
                        pattern: {
                            value: /^\d+$/,
                            message: "Formato de celular inválido",
                        },
                    }
                    }
                    render={({ field: { onChange, value } }) => (
                        <Label>
                            Direccion
                            <EditProfileInput
                                type="text"
                                placeholder="numero de contacto"
                                onChange={onChange}
                                value={value}
                            />
                        </Label>
                    )}
                />
                <ButtonsContainer>

                    <FormButton title="guardar">
                        Guardar
                    </FormButton>
                    <FormButton onClick={handleReset} title={"resetear formulario"}>
                        Resetear
                    </FormButton>
                </ButtonsContainer>

            </form>
        </div>
    )
}
"use client"
import { ReactNode } from "react"
import { Controller } from "react-hook-form"
import { useEditProfile } from "@/features/user/hooks/useEditProfile"
import { EditProfileInput } from "@/ui/inputs"
import { Label } from "@/ui/typography"

type EditProfileType = {
    children: ReactNode
}

export function EditProfileForm({ children }: EditProfileType) {
    const { handleSubmit, handleSubmitForm, onErrorForm, control, handleReset } = useEditProfile()

    return (
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
                    required: "Ingrese un celular válido",
                    minLength: {
                        value: 10,
                        message: "El número  de contacto debe tener al menos 10 dígitos",
                    },
                    maxLength: {
                        value: 13,
                        message: "El número de contacto no puede tener más de 13 dígitos",
                    },
                    pattern: {
                        value: /^\d{10,13}$/,
                        message: "El número de contacto tener entre 10 y 13 dígitos",
                    },
                }
                }
                render={({ field: { onChange, value } }) => (
                    <Label>
                        Direccion
                        <EditProfileInput
                            type="number"
                            placeholder="numero de contacto"
                            onChange={onChange}
                            value={value}
                        />
                    </Label>
                )}
            />
            {children}
        </form>
    )
}
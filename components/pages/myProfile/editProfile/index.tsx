import { Controller } from "react-hook-form"
import { useEditProfile } from "@/utils/components/useEditProfile"
import { SubTitle, Label } from "@/ui/typography"
import { LoginInput } from "ui/inputs"
import { DefaultButton, FormButton } from "ui/buttons"
import { ButtonsContainer, EditProfileDataContainer, EditProfileSection, PageContainer } from "./styles"



export function EditProfile() {
    const { handleSubmit, handleSubmitForm, handleReset, handleCancel, onErrorForm, control } = useEditProfile()

    return (
        <EditProfileSection>
            <PageContainer>
                <SubTitle>Editar mis datos</SubTitle>
                <EditProfileDataContainer>
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
                                    <LoginInput
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
                                    <LoginInput
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
                                    <LoginInput
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
                                    <LoginInput
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
                            <FormButton onClick={handleCancel} title={"cancelar"}>
                                Cancelar
                            </FormButton>
                        </ButtonsContainer>
                    </form>
                </EditProfileDataContainer>
            </PageContainer >
        </EditProfileSection >
    )
}
import { ReactNode } from "react"
import { OTPContentContainer } from "./styles"

type OTPContainerProps = {
    children: ReactNode
}

export function OTPContainer({ children }: OTPContainerProps) {

    return (
        <OTPContentContainer>
            {children}
        </OTPContentContainer>
    )
}
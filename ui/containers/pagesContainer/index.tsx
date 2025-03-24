import { ReactNode } from "react";
import { AuthFormContainer, ContentContainer, PageContainer } from "./styles";
import { SubTitle } from "@/ui/typography";
import { BrandPagesIcon } from "@/ui/icons";

type PagesContainerProps = {
    isAuth: boolean
    subTitleText: string,
    children: ReactNode
}

export function PagesContainer({ isAuth, subTitleText, children }: PagesContainerProps) {

    return (
        <PageContainer>
            <ContentContainer>
                {isAuth && <BrandPagesIcon />}
                <SubTitle>{subTitleText}</SubTitle>
                {isAuth ?
                    (<AuthFormContainer> {children} </AuthFormContainer>)
                    :
                    children
                }
            </ContentContainer>
        </PageContainer>
    )
}
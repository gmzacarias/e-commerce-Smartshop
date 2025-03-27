import { BrandPagesIcon } from "@/ui/icons";
import { SubTitle } from "@/ui/typography";
import { AuthFormContainer, ContentContainer, PageContainer } from "./styles";

export function PagesContainer({ $isAuth, subTitleText, children }: PagesContainerProps) {
    return (
        <PageContainer $isAuth={$isAuth}>
            <ContentContainer $isAuth={$isAuth}>
                {$isAuth && <BrandPagesIcon />}
                <SubTitle>{subTitleText}</SubTitle>
                {!$isAuth && children}
            </ContentContainer>
            {$isAuth && <AuthFormContainer>{children}</AuthFormContainer>}
        </PageContainer>
    )
}
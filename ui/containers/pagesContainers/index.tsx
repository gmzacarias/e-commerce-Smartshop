import { ReactNode } from "react";
import { ContentContainer, PageContainer } from "./styles";
import { SubTitle } from "@/ui/typography";

type PagesContainerProps = {
    subTitleText: string,
    children: ReactNode
}

export function PagesContainers({ subTitleText, children }: PagesContainerProps) {
    <PageContainer>
        <ContentContainer>
            <SubTitle>{subTitleText}</SubTitle>
            {children}
        </ContentContainer>
    </PageContainer>
}
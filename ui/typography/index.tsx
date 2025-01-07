import { ReactNode } from "react"
import { TitleText, SubTitleText, SectionText, SectionTextBold, ParagraphText, ParagraphTextBold, SmallText, LabelText } from "./styles"

type TextProps ={
    children:ReactNode
}

export function Title({ children }:TextProps) {
    return <TitleText>{children}</TitleText>
}

export function SubTitle({ children }:TextProps) {
    return <SubTitleText>{children}</SubTitleText>
}

export function SectionTitle({ children }:TextProps) {
    return <SectionText>{children}</SectionText>
}

export function SectionTitleBold({ children }:TextProps) {
    return <SectionTextBold>{children}</SectionTextBold>
}

export function Paragraph({ children }:TextProps) {
    return <ParagraphText>{children}</ParagraphText>
}

export function ParagraphBold({ children }:TextProps) {
    return <ParagraphTextBold>{children}</ParagraphTextBold>
}

export function Small({ children }:TextProps) {
    return <SmallText>{children}</SmallText>
}

export function Label({ children }:TextProps) {
    return <LabelText>
        {children}
    </LabelText >
}


import styled from "styled-components"

const TitleText = styled.h1`
    font-size:48px;
    font-weight: var(--font-weight-bold);
    text-align: center;

    @media screen and(max-width:768px) {
    &{
        font-size: 40px;
    }
}

`

const SubTitleText = styled.h2`
    font-size:32px;
    font-weight: var(--font-weight-bold);
    text-align: center;
`

const SectionText = styled.h3`
font-size:20px;
`
const SectionTextBold = styled(SectionText)`
font-weight:var(--font-weight-bold);
`

const ParagraphText = styled.p`
     font-size:16px;
`
const ParagraphTextBold = styled(ParagraphText)`
    font-weight: var(--font-weight-bold);
`

const LabelText = styled.label`
    text-align: left;
  display: flex;
  flex-direction: column;
  gap:10px
`

const SmallText = styled.h5`
    font-size:12px;
`


export function Title({ children }) {
    return <TitleText>{children}</TitleText>
}

export function SubTitle({ children }) {
    return <SubTitleText>{children}</SubTitleText>
}

export function SectionTitle({ children }) {
    return <SectionText>{children}</SectionText>
}

export function SectionTitleBold({ children }) {
    return <SectionTextBold>{children}</SectionTextBold>
}

export function Paragraph({ children }) {
    return <ParagraphText>{children}</ParagraphText>
}

export function ParagraphBold({ children }) {
    return <ParagraphTextBold>{children}</ParagraphTextBold>
}

export function Small({ children }) {
    return <SmallText>{children}</SmallText>
}

export function Label({ children }) {
    return <LabelText>
        {children}
    </LabelText>
}
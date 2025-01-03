import styled from "styled-components"

export const TitleText = styled.h1`
  font-size:clamp(32px,4vw,48px);
  font-weight: var(--font-weight-bold);
  color:${({ theme }) => theme.color};
  text-align: center;
  word-wrap: break-word;
`

export const SubTitleText = styled.h2`
  font-size:clamp(24px,4vw,32px);
  font-weight: var(--font-weight-medium);
  color:${({ theme }) => theme.color};
  text-align: center;
  word-wrap: break-word;
`

export const SectionText = styled.h3`
  font-size:clamp(18px,4vw,24px);
  font-weight: var(--font-weight-medium);
  color:${({ theme }) => theme.color};
  word-wrap: break-word;
`

export const SectionTextBold = styled(SectionText)`
  font-weight:var(--font-weight-bold);
`

export const ParagraphText = styled.p`
  color:${({ theme }) => theme.color};
`
export const ParagraphTextBold = styled(ParagraphText)`
  font-weight: var(--font-weight-bold);
`

export const LabelText = styled.label`
  color:${({ theme }) => theme.color};
  text-align: left;
`

export const SmallText = styled.h5`
  font-size:12px;
  color:${({ theme }) => theme.color};  
`


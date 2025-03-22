import { ParagraphBold, Paragraph } from "@/ui/typography"
import { ErrorContainer } from "./styles"

type ErrorDataProps = {
    text: string,
    error: string
}

export function ErrorDataCard({ text, error }: ErrorDataProps) {
    return (
        <ErrorContainer>
            <ParagraphBold>{text}</ParagraphBold>
            <Paragraph>{error}</Paragraph>
        </ErrorContainer>
    )
}
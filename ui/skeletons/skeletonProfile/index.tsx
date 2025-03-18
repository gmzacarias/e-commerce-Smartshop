import { SkeletonTheme } from "react-loading-skeleton"
import { useTheme } from "@/context/themeContext"
import { SkeletonContainer, SkeletonLabel, SkeletonText, ButtonsContainer, SkeletonButton } from "./styles"

export function SkeletonProfile() {
    const { isDarkMode } = useTheme()
    const baseColor = isDarkMode ? "#000" : "#d0d0d0"
    const highlightColor = isDarkMode ? "#292728" : "#f5f5f5"

    return (
        <SkeletonTheme borderRadius={5} baseColor={baseColor} highlightColor={highlightColor}>
            <SkeletonContainer>
                <SkeletonLabel />
                <SkeletonText />
                <SkeletonLabel />
                <SkeletonText />
                <SkeletonLabel />
                <SkeletonText />
                <SkeletonLabel />
                <SkeletonText />
                <ButtonsContainer>
                    <SkeletonButton />
                    <SkeletonButton />
                    <SkeletonButton />
                </ButtonsContainer>
            </SkeletonContainer>
        </SkeletonTheme>
    );
}
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import { SkeletonContainer,SkeletonImage, SkeletonText,SkeletonButton } from "./styles"
import { useTheme } from "@/utils/darkMode/themeContext"

type LengthProps = {
    length: number
}

export function SkeletonProductsCard({ length }: LengthProps) {
 const {isDarkMode}=useTheme()
    const baseColor = isDarkMode ? "#000" : "#d0d0d0"
    const highlightColor=isDarkMode ? "#292728" : "#f5f5f5"
  
    return (
      <SkeletonTheme borderRadius={5} baseColor={baseColor} highlightColor={highlightColor}>
        {Array.from({ length }).map((_, index) => (
          <SkeletonContainer key={index}>
            <SkeletonImage />
            <SkeletonText />
            <SkeletonText />
            <SkeletonText />
            <SkeletonButton />
          </SkeletonContainer>
        ))}
      </SkeletonTheme>
    );
  }
  
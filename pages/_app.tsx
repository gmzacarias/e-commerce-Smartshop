import type { AppProps } from "next/app"
import { PrivateRoute } from "@/utils/private-routes"
import { RecoilRoot } from 'recoil';
import { Toaster } from "sonner"
import "styles/base.css"
import { Suspense } from "react";

import { useTheme, ThemeProvider, ThemeConsumer } from "@/utils/darkMode/themeContext";




export default function App({ Component, pageProps }: AppProps) {
  const { isDarkMode } = useTheme();
  return (
    <Suspense>
      <RecoilRoot>
        <ThemeProvider>
          <ThemeConsumer>
            <Toaster expand={true} richColors position="bottom-right" />
            <link rel="icon" href="/favicon.png" sizes="any" />
            <Component {...pageProps} />

          </ThemeConsumer>

        </ThemeProvider>
      </RecoilRoot>
    </Suspense>
  )
}

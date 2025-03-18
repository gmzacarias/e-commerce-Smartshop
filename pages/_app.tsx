import type { AppProps } from "next/app"
import { RecoilRoot } from 'recoil';
import { ThemeProvider, ThemeConsumer } from "@/context/themeContext";
import { Toaster } from "sonner"
import "styles/base.css"
import 'react-loading-skeleton/dist/skeleton.css';

export default function App({ Component, pageProps }: AppProps) {

  return (

    <RecoilRoot>
      <ThemeProvider>
        <ThemeConsumer>
          <Toaster expand={true} richColors position="bottom-right" />
          <link rel="icon" href="/favicon.png" sizes="any" />
          <Component {...pageProps} />
        </ThemeConsumer>
      </ThemeProvider>
    </RecoilRoot>
  )
}

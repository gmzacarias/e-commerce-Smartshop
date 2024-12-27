import type { AppProps } from "next/app"
import { PrivateRoute } from "@/utils/private-routes"
import { RecoilRoot } from 'recoil';
import { Toaster } from "sonner"
import "styles/base.css"
import { Suspense } from "react";

export default function App({ Component, pageProps }: AppProps) {

  return (
    <Suspense>
      <RecoilRoot>
        <Toaster expand={true} richColors position="bottom-right" />
        <link rel="icon" href="/favicon.png" sizes="any" />
        <Component {...pageProps} />
      </RecoilRoot>
    </Suspense>
  )
}

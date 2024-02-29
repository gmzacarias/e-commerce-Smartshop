import type { AppProps } from "next/app"
import {PrivateRoute} from "components/utils/private-routes"
import { RecoilRoot } from 'recoil';
import { Toaster } from "sonner"
import "styles/base.css"

export default function App({ Component, pageProps }: AppProps) {
  return (

      <RecoilRoot>
    
      <Toaster expand={true} richColors position="bottom-right" />
      <Component {...pageProps} />
     
      </RecoilRoot>
  )
}

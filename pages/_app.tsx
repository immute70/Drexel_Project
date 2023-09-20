import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from "@/pages/componets/header";
import Footer from "@/pages/componets/footer";
import '@/styles/item.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
      <div>
        <Header></Header>
        <Component {...pageProps} />
        <Footer></Footer>
      </div>

  )
}

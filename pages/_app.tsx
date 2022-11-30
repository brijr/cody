import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Libre_Baskerville } from "@next/font/google";

const libre = Libre_Baskerville({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={libre.className}>
      <Component {...pageProps} />
    </main>
  );
}

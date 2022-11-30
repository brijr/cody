import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className='p-4 lg:p-12'>
      <Component {...pageProps} />
    </main>
  );
}

import '../styles/globals.css'
import type { AppProps } from 'next/app';
import Sidebar from '../components/sidebar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Sidebar />
      <Component {...pageProps} />
    </main>
  );
}

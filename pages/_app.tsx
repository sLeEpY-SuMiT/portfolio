import type { AppProps } from 'next/app';
import "../styles/globals.css"
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

function MyApp({ Component, pageProps }: AppProps) {
 return <Component {...pageProps} />;
}

export default MyApp;
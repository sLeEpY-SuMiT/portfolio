import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import "../styles/globals.css"

function MyApp({ Component, pageProps }: AppProps) {
 return <Component {...pageProps} />;
}

export default MyApp;
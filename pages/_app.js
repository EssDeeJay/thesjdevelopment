import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Head>
       <link rel="icon" href="/img/thesjlogo.svg" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

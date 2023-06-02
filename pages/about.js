import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import AboutComponent from "../components/about";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About Us - {siteTitle}</title>
        <meta
             property="og:title"
             content="About Us - The SJ Development | Shopify Experts"
           />
          <meta
              property="og:description"
              content="Transforming from a side hustle to a full-time business, The SJ Development supports small to large-scale businesses in managing their Shopify stores and websites. Our expert team offers tailored solutions for optimized performance. Elevate your online presence today."
           />
          <meta property="og:url" content="www.thesjdevelopment.com/about" />
          <meta
             property="og:site_name"
             content="About Us - The SJ Development | Shopify Experts"
          />
          <meta property="article:publisher" content="www.thesjdevelopment.com" />
          <meta property="og:image" content="/img/thesjlogo.svg" />
          <meta name="author" content="The SJ Development" />
          <meta
            name="description"
            content="Transforming from a side hustle to a full-time business, The SJ Development supports small to large-scale businesses in managing their Shopify stores and websites. Our expert team offers tailored solutions for optimized performance. Elevate your online presence today."
          />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href="https://www.thesjdevelopment.com/about"></link>
      </Head>
      <AboutComponent />
    </Layout>
  );
}

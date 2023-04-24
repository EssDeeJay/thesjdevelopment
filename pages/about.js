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
              content="The SJ Development was founded as part of the side hustle but it became full time business supporting small to large scale businesses managing their shopify stores and their websites."
           />
          <meta property="og:url" content="www.thesjdevelopment.com" />
          <meta
             property="og:site_name"
             content="About Us - The SJ Development | Shopify Experts"
          />
          <meta property="article:publisher" content="www.thesjdevelopment.com" />
          <meta property="og:image" content="/img/thesjlogo.svg" />
          <meta name="author" content="The SJ Development" />
          <meta
            name="description"
            content="The SJ Development was founded as part of the side hustle but it became full time business supporting small to large scale businesses managing their shopify stores and their websites."
          />
            <meta name="robots" content="index, follow" />
      </Head>
      <AboutComponent />
    </Layout>
  );
}

import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Container from "../components/container";
import Us from "../components/whyUs";

export default function WhyUs() {
  return (
    <Layout>
      <Head>
        <title>Why Us ? - {siteTitle}</title>
        <meta
             property="og:title"
             content="Why Us - The SJ Development | Shopify Experts"
           />
          <meta
              property="og:description"
              content="Choose us as your Shopify experts for exceptional results. With our extensive experience, certified expertise, and tailored solutions, we deliver top-notch Shopify development. Trust us to elevate your online presence and maximize conversions."
           />
          <meta property="og:url" content="www.thesjdevelopment.com" />
          <meta
             property="og:site_name"
             content="Shopify - The SJ Development | Shopify Experts"
          />
          <meta property="article:publisher" content="www.thesjdevelopment.com" />
          <meta property="og:image" content="/img/thesjlogo.svg" />
          <meta name="author" content="The SJ Development" />
          <meta
            name="description"
            content="Choose us as your Shopify experts for exceptional results. With our extensive experience, certified expertise, and tailored solutions, we deliver top-notch Shopify development. Trust us to elevate your online presence and maximize conversions."
          />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href="https://www.thesjdevelopment.com/why-us"></link>
      </Head>
      <Container>
          <Us/>
      </Container>
    </Layout>
  );
}
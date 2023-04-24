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
              content="We are certified Shopify and Shopify plus partners who have vast experience developing shopify websites and apps. We also develop custom static websites.Your business employees just a click away."
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
            content="We are certified Shopify and Shopify plus partners who have vast experience developing shopify websites and apps. We also develop custom static websites.Your business employees just a click away."
          />
            <meta name="robots" content="index, follow" />
      </Head>
      <Container>
          <Us/>
      </Container>
    </Layout>
  );
}
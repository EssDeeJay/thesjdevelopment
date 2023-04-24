import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Container from "../components/container";
import ServicesFeatures from "../components/serviceComponent";

export default function Services() {
  return (
    <Layout>
      <Head>
        <title>Services - {siteTitle}</title>
        <meta
             property="og:title"
             content="Services - The SJ Development | Shopify Experts"
           />
          <meta
              property="og:description"
              content="We are certified Shopify and Shopify plus partners who have vast experience developing shopify websites and apps. We also develop custom static websites."
           />
          <meta property="og:url" content="www.thesjdevelopment.com" />
          <meta
             property="og:site_name"
             content="Services - The SJ Development | Shopify Experts"
          />
          <meta property="article:publisher" content="www.thesjdevelopment.com" />
          <meta property="og:image" content="/img/thesjlogo.svg" />
          <meta name="author" content="The SJ Development" />
          <meta
            name="description"
            content="We are certified Shopify and Shopify plus partners who have vast experience developing shopify websites and apps. We also develop custom static websites."
          />
            <meta name="robots" content="index, follow" />
      </Head>
      <Container>
         <ServicesFeatures/>
      </Container>
    </Layout>
  );
}
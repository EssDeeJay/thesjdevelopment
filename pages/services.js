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
              content="As certified Shopify and Shopify Plus partners, we bring vast experience in developing Shopify websites and apps. Our expertise extends to custom static website development. Trust our proven track record and exceptional solutions."
           />
          <meta property="og:url" content="www.thesjdevelopment.com/services" />
          <meta
             property="og:site_name"
             content="Services - The SJ Development | Shopify Experts"
          />
          <meta property="article:publisher" content="www.thesjdevelopment.com" />
          <meta property="og:image" content="/img/thesjlogo.svg" />
          <meta name="author" content="The SJ Development" />
          <meta
            name="description"
            content="As certified Shopify and Shopify Plus partners, we bring vast experience in developing Shopify websites and apps. Our expertise extends to custom static website development. Trust our proven track record and exceptional solutions."
          />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href="https://www.thesjdevelopment.com/services"></link>
      </Head>
      <Container>
         <ServicesFeatures/>
      </Container>
    </Layout>
  );
}
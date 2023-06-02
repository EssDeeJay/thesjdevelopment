import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Container from "../components/container";
import ShopifyComponent from "../components/shopify-component";

export default function Shopify() {
  return (
    <Layout>
      <Head>
        <title>Shopify - {siteTitle}</title>
        <meta
             property="og:title"
             content="Shopify - The SJ Development | Shopify Experts"
           />
          <meta
              property="og:description"
              content="Looking to launch your online store? Choose Shopify, the leading eCommerce platform trusted by businesses worldwide. Create a seamless shopping experience, boost sales, and enhance your online presence with Shopify's powerful features and user-friendly interface"
           />
          <meta property="og:url" content="www.thesjdevelopment.com/shopify" />
          <meta
             property="og:site_name"
             content="Shopify - The SJ Development | Shopify Experts"
          />
          <meta property="article:publisher" content="www.thesjdevelopment.com" />
          <meta property="og:image" content="/img/thesjlogo.svg" />
          <meta name="author" content="The SJ Development" />
          <meta
            name="description"
            content="Looking to launch your online store? Choose Shopify, the leading eCommerce platform trusted by businesses worldwide. Create a seamless shopping experience, boost sales, and enhance your online presence with Shopify's powerful features and user-friendly interface"
          />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href="https://www.thesjdevelopment.com/shopify"></link>
      </Head>
      <Container>
          <ShopifyComponent />
      </Container>
    </Layout>
  );
}
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Container from "../components/container";
import Terms from "../components/terms";

export default function Shopify() {
  return (
    <Layout>
      <Head>
        <title>Terms & Conditions - {siteTitle}</title>
        <meta
             property="og:title"
             content="Terms and Conditions - The SJ Development | Shopify Experts"
           />
          <meta
              property="og:description"
              content="Terms and Conditions of the sj development website."
           />
          <meta property="og:url" content="www.thesjdevelopment.com" />
          <meta
             property="og:site_name"
             content="Terms and Conditions - The SJ Development | Shopify Experts"
          />
          <meta property="article:publisher" content="www.thesjdevelopment.com" />
          <meta property="og:image" content="/img/thesjlogo.svg" />
          <meta name="author" content="The SJ Development" />
          <meta
            name="description"
            content="Terms and Conditions of the sj development website."
          />
            <meta name="robots" content="index, follow" />
      </Head>
      <Container>
         <Terms/>
      </Container>
    </Layout>
  );
}
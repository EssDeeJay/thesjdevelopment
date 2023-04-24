import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Container from "../components/container";
import Privacy from "../components/privacy";

export default function Shopify() {
  return (
    <Layout>
      <Head>
        <title>Privacy Policy - {siteTitle}</title>
        <meta
             property="og:title"
             content="Privacy Policy - The SJ Development | Shopify Experts"
           />
          <meta
              property="og:description"
              content="privacy policy of the sj development website, as we value the privacy of our website users."
           />
          <meta property="og:url" content="www.thesjdevelopment.com" />
          <meta
             property="og:site_name"
             content="Privacy Policy - The SJ Development | Shopify Experts"
          />
          <meta property="article:publisher" content="www.thesjdevelopment.com" />
          <meta property="og:image" content="/img/thesjlogo.svg" />
          <meta name="author" content="The SJ Development" />
          <meta
            name="description"
            content="privacy policy of the sj development website, as we value the privacy of our website users."
          />
            <meta name="robots" content="index, follow" />
      </Head>
      <Container>
         <Privacy />
      </Container>
    </Layout>
  );
}
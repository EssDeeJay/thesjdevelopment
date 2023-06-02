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
              content="At The SJ Development, we prioritize user privacy. Read our website's privacy policy to understand how we safeguard your information. Trust in our commitment to privacy and transparency."
           />
          <meta property="og:url" content="www.thesjdevelopment.com/privacy-policy" />
          <meta
             property="og:site_name"
             content="Privacy Policy - The SJ Development | Shopify Experts"
          />
          <meta property="article:publisher" content="www.thesjdevelopment.com" />
          <meta property="og:image" content="/img/thesjlogo.svg" />
          <meta name="author" content="The SJ Development" />
          <meta
            name="description"
            content="At The SJ Development, we prioritize user privacy. Read our website's privacy policy to understand how we safeguard your information. Trust in our commitment to privacy and transparency."
          />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href="https://www.thesjdevelopment.com/privacy-policy"></link>
      </Head>
      <Container>
         <Privacy />
      </Container>
    </Layout>
  );
}
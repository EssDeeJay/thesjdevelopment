import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Container from "../components/container";
import ContactHero from "../components/contact-hero";
import ContactForm from "../components/contact-form";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>Contact Us - {siteTitle}</title>
        <meta
             property="og:title"
             content="Contact Us - The SJ Development | Shopify Experts"
           />
          <meta
              property="og:description"
              content="Contact us if you are looking for shopify experts or looking to make custom shopify themes or just looking to fix your shopify store website."
           />
          <meta property="og:url" content="www.thesjdevelopment.com" />
          <meta
             property="og:site_name"
             content=" Contact Us - The SJ Development | Shopify Experts"
          />
          <meta property="article:publisher" content="www.thesjdevelopment.com" />
          <meta property="og:image" content="/img/thesjlogo.svg" />
          <meta name="author" content="The SJ Development" />
          <meta
            name="description"
            content="Contact us if you are looking for shopify experts or looking to make custom shopify themes or just looking to fix your shopify store website."
          />
            <meta name="robots" content="index, follow" />
      </Head>
      <Container>
           <ContactHero />
           <ContactForm />
      </Container>
    </Layout>
  );
}
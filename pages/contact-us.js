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
              content="Looking for Shopify experts? Need custom Shopify themes or fixes for your store website? Contact us for expert assistance and solutions. Boost your Shopify performance today."
           />
          <meta property="og:url" content="www.thesjdevelopment.com/contact" />
          <meta
             property="og:site_name"
             content=" Contact Us - The SJ Development | Shopify Experts"
          />
          <meta property="article:publisher" content="www.thesjdevelopment.com" />
          <meta property="og:image" content="/img/thesjlogo.svg" />
          <meta name="author" content="The SJ Development" />
          <meta
            name="description"
            content="Looking for Shopify experts? Need custom Shopify themes or fixes for your store website? Contact us for expert assistance and solutions. Boost your Shopify performance today."
          />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href="https://www.thesjdevelopment.com/contact-us"></link>
      </Head>
      <Container>
           <ContactHero />
           <ContactForm />
      </Container>
    </Layout>
  );
}
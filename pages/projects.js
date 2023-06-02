import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Container from "../components/container";
import OurProjects from "../components/projects";

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>Our Projects - {siteTitle}</title>
        <meta
             property="og:title"
             content="Projects - The SJ Development | Shopify Experts"
           />
          <meta
              property="og:description"
              content="Explore our project case studies from renowned Shopify stores worldwide. From micro tasks to headless Shopify development, discover our expertise. Learn from our success stories today."
           />
          <meta property="og:url" content="www.thesjdevelopment.com/projects" />
          <meta
             property="og:site_name"
             content="Projects - The SJ Development | Shopify Experts"
          />
          <meta property="article:publisher" content="www.thesjdevelopment.com" />
          <meta property="og:image" content="/img/thesjlogo.svg" />
          <meta name="author" content="The SJ Development" />
          <meta
            name="description"
            content="Explore our project case studies from renowned Shopify stores worldwide. From micro tasks to headless Shopify development, discover our expertise. Learn from our success stories today."
          />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href="https://www.thesjdevelopment.com/projects"></link>
      </Head>
      <Container>
          <OurProjects/>
      </Container>
    </Layout>
  );
}
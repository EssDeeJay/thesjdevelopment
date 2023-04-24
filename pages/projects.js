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
              content="Read Our Project case studies from the most famous shopify stores around the world. We have done from micro shopify tasks to major headless shopify development."
           />
          <meta property="og:url" content="www.thesjdevelopment.com" />
          <meta
             property="og:site_name"
             content="Projects - The SJ Development | Shopify Experts"
          />
          <meta property="article:publisher" content="www.thesjdevelopment.com" />
          <meta property="og:image" content="/img/thesjlogo.svg" />
          <meta name="author" content="The SJ Development" />
          <meta
            name="description"
            content="Read Our Project case studies from the most famous shopify stores around the world. We have done from micro shopify tasks to major headless shopify development."
          />
            <meta name="robots" content="index, follow" />
      </Head>
      <Container>
          <OurProjects/>
      </Container>
    </Layout>
  );
}
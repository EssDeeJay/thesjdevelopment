import Head from "next/head";
import Hero from "../components/hero";
import SectionTitle from "../components/sectionTitle";
import Layout, {siteTitle} from "../components/layout";
import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import Props from "../components/props";
import { getSortedBlogsData } from "../lib/blogs";
import IndexPosts from "../components/indexBlogs";


export default function Home({allBlogsData}) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
          <meta
             property="og:title"
             content="The SJ Development | Professional Shopify Experts"
           />
          <meta
              property="og:description"
              content="Boost online presence with certified Shopify experts. Our web developers create impactful websites. Contact us for top-notch Shopify solutions and improved SEO."
           />
          <meta property="og:url" content="www.thesjdevelopment.com" />
          <meta
             property="og:site_name"
             content="The SJ Development | Professional Shopify Experts"
          />
          <meta property="article:publisher" content="www.thesjdevelopment.com" />
          <meta property="og:image" content="/img/thesjlogo.svg" />
          <meta name="author" content="The SJ Development" />
          <meta
            name="description"
            content="Boost online presence with certified Shopify experts. Our web developers create impactful websites. Contact us for top-notch Shopify solutions and improved SEO."
          />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://www.thesjdevelopment.com/"></link>
      </Head>
      <Hero />
      <IndexPosts allBlogsData={allBlogsData}/>
      <SectionTitle
        pretitle="WE BREATHE SHOPIFY"
        title="One Stop Shopify Solutions">
        We are experts of shopify who have worked for numerous brands developing custom solutions 
        to setting up their store. We also maintain their websites and offer full support after development. 
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="HOW WE WORK"
        title="Our Design / Development Process">
        We carefully review each project and move according to the best industry standards. We take pride in each project and our goal is to deliver the best results
        that makes your goals true.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="WHY CHOOSE US"
        title="Our Strengths for your success">
        Our core capabilities that will help you reimagine your bussiness with much bigger imagination
      </SectionTitle>
      <Props/>
      <SectionTitle
        pretitle="TESTIMONIALS"
        title="Some of Our Client Reviews">
        Take a glance at some of our top client's testimonials and learn more to read our project case studies for these projects to see how we work.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="QUESTIONS" title="Frequently Asked Questions">
        We Know that everyone has questions in mind and thats okay. Here is some of the answers to most common questions asked to us.
      </SectionTitle>
      <Faq />
      <Cta />
    </Layout>
  );
}

export async function getStaticProps(){
  const allBlogsData = getSortedBlogsData();

  return {
      props: {
          allBlogsData,
      }
  }
}

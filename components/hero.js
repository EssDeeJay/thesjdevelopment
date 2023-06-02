import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/138.png";
import shopifyLogo from "../public/img/shopifyplus.png";
import googleLogo from "../public/img/google.png";
import klaviyoLogo from "../public/img/klaviyo.png";
import shopifyPartners from "../public/img/shopify.png";
import wordpressLogo from "../public/img/wordpress.png";

export default function Hero() {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-extrabold leading-snug tracking-tight text-custom-blue lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Take Your Shopify Store to the NEXT Level
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              We help you transform your Shopify store to new heights by helping you build your brand by creating a website that makes a difference.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="/about"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-custom-blue rounded-md ">
                Learn More
              </a>
              <a
                href="/why-us"
                className="flex items-center space-x-2 text-custom-blue font-bold dark:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span> Why Us?</span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="900"
              height="600"
              alt="Hero Illustration"
              layout="intrinsic"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      <Container className="dark:bg-custom-light-gray">
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-500">
            Worked with <span className="text-custom-blue font-bold">100+</span>{" "}
            partners worldwide
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around items-center">
            <div className="pt-2 text-gray-400 dark:text-gray-400 w-48 my-2 md:my-0">
              <Image src={shopifyLogo} alt="shopify-logo" className="w-full" width="1024" height="290" loading="lazy" placeholder="blur" />
            </div>
            <div className="text-gray-400 dark:text-gray-400 w-48 my-2 md:my-0">
            <Image src={googleLogo} alt="google-logo" className="w-full" width="2000" height="676" loading="lazy" placeholder="blur" />
            </div>
            <div className="text-gray-400 dark:text-gray-400 w-48 my-2 md:my-0">
            <Image src={shopifyPartners} alt="shopify-partners-logo" className="w-full" width="600" height="108" loading="lazy" placeholder="blur" />
            </div>
            <div className="pt-1 text-gray-400 dark:text-gray-400 w-48 my-2 md:my-0">
            <Image src={klaviyoLogo} alt="klaviyo-logo" className="w-full" width="581" height="172" loading="lazy" placeholder="blur" />
            </div>
            <div className="pt-2 text-gray-400 dark:text-gray-400 w-48 my-2 md:my-0">
            <Image src={wordpressLogo} alt="wordpress-logo" className="w-full" width="1280" height="373" loading="lazy" placeholder="blur" />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

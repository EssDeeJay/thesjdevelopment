import React from "react";
import SectionTitle from "./sectionTitle";
import Image from "next/dist/client/image";
import image1 from '../public/img/64.png';
import image2 from '../public/img/60.png';
import image3 from '../public/img/367.png';
import image4 from '../public/img/433.png';
import image5 from '../public/img/479.png';
import image6 from '../public/img/461.png';
import image7 from '../public/img/102.png';
import image8 from '../public/img/136.png';
import image9 from '../public/img/shopify_partner.jpg';

export default function ShopifyComponent() {
    return (
        <>
            <div className="container flex flex-col py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                <div className="w-full lg:w-1/2">
                    <div className="lg:max-w-lg">
                        <h1 className="text-3xl font-extrabold text-custom-blue dark:text-white lg:text-4xl">You've Found The Perfect Shopify Partner !</h1>
                        <p className="mt-4 text-gray-600 dark:text-gray-300">Hire a Shopify developer today and you’ll soon have a website that looks great and works like a dream.
                                         Contact us for a free consultation without delay.</p>
                        <div className="grid gap-6 mt-8 sm:grid-cols-2">
                            <div className="flex items-center text-custom-medium-blue -px-3 dark:text-gray-200 font-bold">
                                <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>

                                <span className="mx-3">Shopify / Shopify Plus Migration</span>
                            </div>

                            <div className="flex items-center text-custom-medium-blue -px-3 dark:text-gray-200 font-bold">
                                <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>

                                <span className="mx-3">Custom Shopify Templates / Themes</span>
                            </div>

                            <div className="flex items-center text-custom-medium-blue -px-3 dark:text-gray-200 font-bold">
                                <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>

                                <span className="mx-3">Shopify B2B Development</span>
                            </div>

                            <div className="flex items-center text-custom-medium-blue -px-3 dark:text-gray-200 font-bold">
                                <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>

                                <span className="mx-3">Shopify Headless Storefront</span>
                            </div>

                            <div className="flex items-center text-custom-medium-blue -px-3 dark:text-gray-200 font-bold">
                                <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>

                                <span className="mx-3">Shopify Store Setups</span>
                            </div>

                            <div className="flex items-center text-custom-medium-blue -px-3 dark:text-gray-200 font-bold">
                                <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>

                                <span className="mx-3">Shopify Micro Tasks</span>
                            </div>

                            <div className="flex items-center text-custom-medium-blue -px-3 dark:text-gray-200 font-bold">
                                <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>

                                <span className="mx-3">Shopify Site Speed Improvement</span>
                            </div>

                            <div className="flex items-center text-custom-medium-blue -px-3 dark:text-gray-200 font-bold">
                                <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>

                                <span className="mx-3">Shopify Web Accessibility</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center w-full h-full lg:w-1/2">
                    <Image className="object-cover w-full h-full max-w-2xl rounded-md" 
                           src={image9}
                            width="4460" 
                           height="2973"
                           layout="intrinsic"
                           loading="eager"
                           placeholder="blur"
                           alt="Shopify Partners" />
                </div>
            </div>

            <SectionTitle pretitle="SHOPIFY FEATURES" title="Why Shopify for Ecommerce ?">
                Shopify offers wide range of features that caters for every business needs and helps to deliver immaculate customer experience.
            </SectionTitle>

            <section className="bg-custom-light-blue dark:bg-trueGray-700">
                <div className="gap-8 items-center py-8 mx-auto max-w-screen-2xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 md:px-4">
                    <Image
                        src={image1}
                        width="900"
                        height="600"
                        alt="Inventory Management Illustration"
                        layout="intrinsic"
                        loading="eager"
                        placeholder="blur"
                    />
                            <div className="mt-4 md:mt-0 p-2">
                                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-custom-blue dark:text-white">Inventory Management</h2>
                                <p className="mb-6 font-normal text-gray-600 md:text-lg dark:text-gray-100">Inventory management is incredibly critical for most ecommerce businesses and often a nightmare to manage consuming hours and hours of time. Shopify offers convenient & accurate inventory management feature that saves your time and help you focus on other priorities. With Shopify you can track inventory in real-time with in-stock product counts and automatically stop selling products when inventory runs out.</p>
                            </div>
                        </div>
            </section>

            <section className="bg-white dark:bg-trueGray-900">
                <div className="gap-8 items-center py-8 mx-auto max-w-screen-2xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 md:px-4">
                            <div className="mt-4 md:mt-0">
                                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-custom-blue dark:text-white">Product Customization & Organization</h2>
                                <p className="mb-6 font-normal text-gray-600 md:text-lg dark:text-gray-400">Often there is demand for variations in productsColor and size. Businesses can now offer customization to shoppers with easy to maintain Shopify product customization feature. Smart collection feature offers automatic sorting of products based on vendor, price, and inventory level.</p>
                            </div>
                    <Image
                        src={image2}
                        width="900"
                        height="600"
                        alt="Product Customization Illustration"
                        layout="intrinsic"
                        loading="lazy"
                        placeholder="blur"
                    />
                </div>
            </section>

            <section className="bg-custom-light-blue dark:bg-trueGray-700">
                <div className="gap-8 items-center py-8 mx-auto max-w-screen-2xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 md:px-4">
                    <Image
                        src={image3}
                        width="900"
                        height="600"
                        alt="Seamless Checkout Illustration"
                        layout="intrinsic"
                        loading="lazy"
                        placeholder="blur"
                    />
                            <div className="mt-4 md:mt-0 p-2">
                                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-custom-blue dark:text-white">Seamless Checkout Process</h2>
                                <p className="mb-6 font-normal text-gray-600 md:text-lg dark:text-gray-100">Every Shopify store has a seamless checkout process which is fully integrated and available in 50+ languages thus saving customers from re-routing to payment gateways. It offers secure payment services with more than 70 payment gateways to choose from, making it easy to process online payments from all over the world.</p>
                            </div>
                        </div>
            </section>

            <section className="bg-white dark:bg-trueGray-900">
                <div className="gap-8 items-center py-8 mx-auto max-w-screen-2xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 md:px-4">
                            <div className="mt-4 md:mt-0">
                                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-custom-blue dark:text-white">POS Functionality</h2>
                                <p className="mb-6 font-light text-gray-600 md:text-lg dark:text-gray-100">For businesses with physical store, it is useful to integrate ecommerce into in-store transactions. Shopify offers easy and smooth integration to your ecommerce store including POS utilities, printers, and card readers. Through this, everything works smoothly with your online & physical stores.</p>
                            </div>
                    <Image
                        src={image4}
                        width="900"
                        height="600"
                        alt="POS Functionality Illustration"
                        layout="intrinsic"
                        loading="lazy"
                        placeholder="blur"
                    />
                </div>
            </section>

            <section className="bg-custom-light-blue dark:bg-trueGray-700">
                <div className="gap-8 items-center py-8 mx-auto max-w-screen-2xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 md:px-4">
                    <Image
                        src={image5}
                        width="900"
                        height="600"
                        alt="Analytics Illustration"
                        layout="intrinsic"
                        loading="eager"
                        placeholder="blur"
                    />
                            <div className="mt-4 md:mt-0 p-2">
                                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-custom-blue dark:text-white">Analytics</h2>
                                <p className="mb-6 font-normal text-gray-600 md:text-lg dark:text-gray-100">Enhance your store for search engines by knowing customer’s behavior through analytics. Shopify offer smooth integration of store with various analytics platforms including Google Analytics. It offers custom dashboard with easy to view orders, sales section for the business along with export reports option.</p>
                            </div>
                        </div>
            </section>

            <section className="bg-white dark:bg-trueGray-900">
                <div className="gap-8 items-center py-8 mx-auto max-w-screen-2xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 md:px-4">
                            <div className="mt-4 md:mt-0">
                                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-custom-blue dark:text-white">E-Mail Integration</h2>
                                <p className="mb-6 font-normal text-gray-600 md:text-lg dark:text-gray-100">Another distinct feature of Shopify is its email client integration enabling automated emails to customers. It offers functionality to stay in touch with customers with e-mail marketing campaigns, sending targeted e-mails, and maintaining mailing lists along with automatic reminders for abandoned shopping carts.</p>
                            </div>
                    <Image
                        src={image6}
                        width="900"
                        height="600"
                        alt="e-mail Illustration"
                        layout="intrinsic"
                        loading="lazy"
                        placeholder="blur"
                    />
                </div>
            </section>

            <section className="bg-custom-light-blue dark:bg-trueGray-700">
                <div className="gap-8 items-center py-8 mx-auto max-w-screen-2xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 md:px-4">
                <Image
                        src={image7}
                        width="900"
                        height="600"
                        alt="Customization Illustration"
                        layout="intrinsic"
                        loading="lazy"
                        placeholder="blur"
                    />
                            <div className="mt-4 md:mt-0 p-2">
                                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-custom-blue dark:text-white">Customization of Online Store</h2>
                                <p className="mb-6 font-normal text-gray-600 md:text-lg dark:text-gray-100">Shopify offers fully customizable look and feel for every store. It has settings that are easy to customize according to brands and gives Shopify developers full access to HTML & CSS, making it easy to customize every aspect of your website.</p>
                            </div>
                        </div>
            </section>

            <section className="bg-white dark:bg-trueGray-900">
                <div className="gap-8 items-center py-8 mx-auto max-w-screen-2xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 md:px-4">
                            <div className="mt-4 md:mt-0 p-2">
                                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-custom-blue dark:text-white">Search Engine Optimized</h2>
                                <p className="mb-6 font-normal text-gray-600 md:text-lg dark:text-gray-100">Good, search engine visibility is integral to e-commerce success. Shopify out of the box features combined with various plugins can help boost your organic traffic via search engines..</p>
                            </div>
                    <Image
                        src={image8}
                        width="900"
                        height="600"
                        alt="Search Engine Illustration"
                        layout="intrinsic"
                        loading="lazy"
                        placeholder="blur"
                    />
                </div>
            </section>

            <section className="py-4">
                <div className="container mx-auto">
                    <div
                        className="bg-custom-blue relative z-10 overflow-hidden rounded py-12 px-8 md:p-[70px]"
                    >
                        <div className="-mx-4 flex flex-wrap items-center">
                            <div className="w-full px-4 lg:w-1/2">
                                <span className="mb-2 text-base font-semibold text-white">
                                    Let us make you look good 🔥
                                </span>
                                <h2
                                    className="mb-6 text-3xl font-bold leading-tight text-white sm:mb-8 sm:text-[38px] lg:mb-0"
                                >
                                    Get started with <br className="xs:block hidden" />
                                    your next project with us
                                </h2>
                            </div>
                            <div className="w-full px-4 lg:w-1/2">
                                <div className="flex flex-wrap lg:justify-end">
                                    <a
                                        href="/about"
                                        className="hover:text-primary my-1 mr-4 inline-block rounded bg-custom-medium-blue bgOpacity-[15%] py-4 px-6 text-base font-medium text-white transition hover:bgOpacity-25 md:px-9 lg:px-6 xl:px-9"
                                    >
                                     How it Works
                                    </a>
                                    <a
                                        href="/contact-us"
                                        className="my-1 inline-block rounded bg-[#13C296] py-4 px-6 text-base font-medium text-white transition hover:bgOpacity-90 md:px-9 lg:px-6 xl:px-9"
                                    >
                                    Contact Us
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <span className="absolute top-0 left-0 z-[-1]">
                                <svg
                                    width="189"
                                    height="162"
                                    viewBox="0 0 189 162"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <ellipse
                                        cx="16"
                                        cy="-16.5"
                                        rx="173"
                                        ry="178.5"
                                        transform="rotate(180 16 -16.5)"
                                        fill="url(#paint0_linear)"
                                    />
                                    <defs>
                                        <linearGradient
                                            id="paint0_linear"
                                            x1="-157"
                                            y1="-107.754"
                                            x2="98.5011"
                                            y2="-106.425"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="white" stopOpacity="0.07" />
                                            <stop offset="1" stopColor="white" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </span>
                            <span className="absolute bottom-0 right-0 z-[-1]">
                                <svg
                                    width="191"
                                    height="208"
                                    viewBox="0 0 191 208"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <ellipse
                                        cx="173"
                                        cy="178.5"
                                        rx="173"
                                        ry="178.5"
                                        fill="url(#paint0_linear)"
                                    />
                                    <defs>
                                        <linearGradient
                                            id="paint0_linear"
                                            x1="-3.27832e-05"
                                            y1="87.2457"
                                            x2="255.501"
                                            y2="88.5747"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="white" stopOpacity="0.07" />
                                            <stop offset="1" stopColor="white" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
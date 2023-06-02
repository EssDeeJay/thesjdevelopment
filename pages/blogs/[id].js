import Layout from "../../components/layout";
import { getAllBlogsIds, getBlogData } from "../../lib/blogs";
import Head from "next/head";
import Date from "../../components/date";

export default function Blog({ blogData }) {
    return (
        <Layout>
            <Head>    
                <title>{blogData.title}</title>
        <meta
             property="og:title"
             content={blogData.title}
           />
          <meta
              property="og:description"
              content={blogData.truncatedDescription}
           />
          <meta property="og:url" content={`www.thesjdevelopment.com/${blogData.id}`} />
          <meta
             property="og:site_name"
             content={blogData.title}
          />
          <meta property="article:publisher" content="www.thesjdevelopment.com" />
          <meta property="og:image" content="/img/thesjlogo.svg" />
          <meta name="author" content="The SJ Development" />
          <meta
            name="description"
            content={blogData.truncatedDescription}
          />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={`https://www.thesjdevelopment.com/blogs/${blogData.id}`}></link>
            </Head>

            <div className="container p-8 xl:px-0 mx-auto">
                <div className="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6 lg:gap-x-12">

                    <div className="lg:col-span-2">
                        <div className="py-8 lg:pr-4 lg:pr-8">
                            <div className="space-y-5 lg:space-y-8">
                                <a className="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2 hover:underline dark:text-blue-400" href="/">
                                    <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                    </svg>
                                    Back to Home
                                </a>

                                <h2 className="text-3xl font-bold lg:text-4xl lg:text-5xl dark:text-white">{blogData.title}</h2>

                                <div className="flex items-center gap-x-5">
                                    <span className="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-800 dark:text-gray-200">
                                        Shopify
                                    </span>
                                    <p className="text-xs sm:text-sm text-gray-800 dark:text-gray-200">
                                        <Date dateString={blogData.date} />
                                    </p>
                                </div>

                                <blockquote className="relative border-l-4 pl-4 sm:pl-6 dark:border-gray-700">
                                    <p className="text-gray-800 sm:text-xl dark:text-white">{blogData.blockquote}</p>
                                </blockquote>

                                <div className="leading-relaxed blog-content" dangerouslySetInnerHTML={{__html: blogData.contentHtml }}></div>

                            
                                <div className="grid lg:flex lg:justify-between lg:items-center gap-y-5 lg:gap-y-0">

                                    <div>
                                        <span className="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 cursor-pointer">
                                            Shopify
                                        </span>
                                        <span className="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 cursor-pointer">
                                            Website
                                        </span>
                                        <span className="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 cursor-pointer">
                                            E-commerce
                                        </span>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-1 lg:w-full lg:h-full lg:bg-gradient-to-r lg:from-gray-50 lg:via-transparent lg:to-transparent dark:from-black dark:to-black">
                        <div className="sticky top-0 left-0 py-8 lg:pl-4 lg:pl-8 dark:pr-8">

                            <div className="group flex items-center gap-x-3 border-b border-gray-200 pb-8 mb-8 dark:border-gray-700">
                                <span className="block flex-shrink-0">
                                    <img className="h-10 w-10 rounded-full" src={blogData.author_img} alt="Author Image" />
                                </span>

                                <span className="group grow block">
                                    <h5 className="group-hover:text-gray-600 text-sm font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                                        {blogData.author}
                                    </h5>
                                    <p className="text-sm text-gray-500">
                                        {blogData.author_profession}
                                    </p>
                                </span>

                            </div>


                            <div className="space-y-6">

                                <h3 className="flex items-center justify-center font-bold text-custom-blue dark:text-white">Latest Articles</h3>

                                <a className="group flex items-center gap-x-6" href="/blogs/5-essential-shopify-store-optimization-tips-for-improved-ecommerce-success">
                                    <div className="grow">
                                        <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-gray-200 dark:group-hover:text-blue-500">
                                        5 Essential Shopify Store Optimization Tips for Improved E-commerce Success
                                        </span>
                                    </div>

                                    <div className="flex-shrink-0 relative rounded-lg overflow-hidden w-20 h-20">
                                        <img className="w-full h-full absolute top-0 left-0 object-cover rounded-lg" src="/img/blogs-images/tap-and-beep.jpg" alt="article image" />
                                    </div>
                                </a>

                                <a className="group flex items-center gap-x-6" href="/blogs/the-ultimate-guide-of-updating-shopify-checkout-with-checkout-extensibility">
                                    <div className="grow">
                                        <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-gray-200 dark:group-hover:text-blue-500">
                                        The Ultimate Guide : Updating Shopify Checkout with the latest checkout extensibility updates.
                                        </span>
                                    </div>

                                    <div className="flex-shrink-0 relative rounded-lg overflow-hidden w-20 h-20">
                                        <img className="w-full h-full absolute top-0 left-0 object-cover rounded-lg" src="/img/blogs-images/sale-tag.jpg" alt="another article image" />
                                    </div>
                                </a>

                                <a className="group flex items-center justify-between gap-x-6" href="/blogs/dropshipping-business-pros-cons-steps-for-success">
                                    <div className="grow">
                                        <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-gray-200 dark:group-hover:text-blue-500">
                                        Dropshipping Business: Pros, Cons, and Steps for Success
                                        </span>
                                    </div>

                                    <div className="flex-shrink-0 relative rounded-lg overflow-hidden w-20 h-20">
                                        <img className="w-full h-full absolute top-0 left-0 object-cover rounded-lg" src="/img/blogs-images/checkout-button.jpg" alt="third article image" />
                                    </div>
                                </a>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllBlogsIds();

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const blogData = await getBlogData(params.id);

    return {
        props: {
            blogData
        }
    }
}
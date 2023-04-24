


/* This example requires Tailwind CSS v2.0+ */
const posts = [
    {
      title: 'Vraj & Co. -  Shopify Website + Store Setups',
      href: 'https://vraj.co.nz/',
      category: { name: 'Shopify'},
      description:
        "We have successfully onboarded new zealand's authentic spices retailer to the shopify and helped them make their website , shopify store set ups, shopify product inventory management to full shopify store consulation and set ups. All of these without compromising website performance with their custom design and fonts.Click on the link below to see live preview of how they look.",
      imageUrl: '/img/vraj_final.png',
    },
    {
      title: 'DYNA - Shopify Migration + Shopify Support',
      href: 'https://dyna-metro-inc.myshopify.com/',
      category: { name: 'Shopify Migration'},
      description:
        'DYNA had very old website and they were looking to refresh their look and feel with ecommerce. Just like cherry on top. We recommended Shopify. Their construction company is now offering ecommerce on their site. We developed custom shopify theme with in built features like store locator, custom calculator logics to help them stand out in the market.',
      imageUrl:
        '/img/dyna_final.png',
    },
    {
      title: 'Village Juicery - Website Design + Development',
      href: 'https://www.villagejuicery.com/',
      category: { name: 'Shopify Development' },
      description:
        'Village Juicery sells plant based nutrition products, Located in toronto, we worked for village juicery to design their website and customize their shopify theme with some advanced features like shop all products under one page with add to cart and delivery zone detector. We further helped them lower their page speed loads and increase the site performance.',
      imageUrl:
        '/img/vj_final.png',
    },
    {
        title: 'GTA Vapes - Shopify Tasks',
        href: 'https://www.villagejuicery.com/',
        category: { name: 'Shopify Plus Development' },
        description:
          'GTA Vapes is a famous chain of smoking products including cannabis and they were looking to implement custom adult verification popup on their website and also changing the look of their menus. Our team has helped them to integrate this with their current theme and made sure their requirements are satisfied with the follw ups.',
        imageUrl:
          '/img/gta_final.png',
    },
    {
        title: 'SupportiveLiving.ca - Static Website',
        href: '#',
        category: { name: 'Website Development'},
        description:
          'Supportive Living is a website that provides support to ontario community by helping them maintaining their permanent housing. They were looking to build the website and reached out with the design. We have implemented their design in a static website and made sure their design is fully responsive and works across all major devices.',
        imageUrl:
          '/img/sl_final.png',
      },
  ]
  
  export default function OurProjects() {
    return (
      <div className="relative pt-4 pb-4">
        <div className="absolute inset-0">
          <div className="h-1/3 sm:h-2/3" />
        </div>
        <div className="relative mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-custom-blue dark:text-white sm:text-4xl">Our Portfolio</h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-100 sm:mt-4">
              Take a glance at some of our best Shopify and Static Website project case studies to see what we can achieve
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {posts.map((post) => (
              <div key={post.title} className="flex flex-col rounded-lg shadow-xl overflow-hidden">
                <div className="flex-shrink-0">
                  <img className="h-full w-full object-cover" src={post.imageUrl} alt="" />
                </div>
                <div className="flex-1 bg-white dark:bg-trueGray-700 p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-bold text-custom-medium-blue dark:text-white">
                      <span className="hover:underline">
                        {post.category.name}
                      </span>
                    </p>
                    <div className="block mt-2">
                      <p className="text-xl font-semibold text-custom-blue dark:text-white">{post.title}</p>
                      <p className="mt-3 text-base text-gray-600 dark:text-gray-100">{post.description}</p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                                <a
                                    href={post.href}
                                    target="_blank"
                                    className="bg-custom-blue inline-flex items-center justify-center rounded-full py-4 px-10 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                                >
                                    View Website
                                </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
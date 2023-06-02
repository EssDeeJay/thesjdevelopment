export default function IndexPosts({ allBlogsData }) {
    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white text-custom-blue">Latest Articles</h2>
                <p className="mt-1 text-gray-500 dark:text-gray-300 text-lg lg:text-xl xl:text-xl">Learn how latest updates from shopify and other web technologies can effectively help your business.</p>
            </div>


            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {allBlogsData.map((item) => {
                    return(
                    <a className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4]" href={`/blogs/${item.id}`}  key={item.id}>
                        <div className="aspect-w-16 aspect-h-11">
                            <img className="w-full object-cover rounded-xl" src={item.image_url} alt="Blog Post Image" />
                        </div>
                        <div className="my-6">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
                                {item.title}
                            </h3>
                            <p className="mt-5 text-gray-600 dark:text-gray-400">
                                {item.truncatedDescription}
                            </p>
                        </div>
                        <div className="mt-auto flex items-center gap-x-3">
                            <img className="w-8 h-8 rounded-full" src={item.author_img} alt="Author Profile Photo" />
                            <div>
                                <h5 className="text-sm text-gray-800 dark:text-gray-200">By {item.author}</h5>
                            </div>
                        </div>
                    </a>

                    )
                })}

            </div>

        </div>

    )
}
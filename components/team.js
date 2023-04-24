import Image from "next/dist/client/image";
import shreya from "../public/img/shreya_final.jpg";
import shreyank from "../public/img/shreyank_profile.jpg";
import henry from "../public/img/henry_profile.jpg";
import finch from "../public/img/finch_profile.jpg";

export default function Team() {
    return (
        <section className="text-gray-600 dark:text-gray-400 body-font mt-12">
            <div className="mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="text-2xl lg:text-4xl font-bold title-font mb-4 text-custom-blue dark:text-white">Meet Our Superheros</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">These are our superstars who works hard and make your project successful without any hassle.</p>
                </div>
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 lg:w-1/2">
                        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                        <div className="flex-shrink-0 w-48 h-48 object-cover object-center sm:mb-0 mb-4">
                              <Image alt="shreyank profile pic"  className="rounded-lg" src={shreyank} width="400" height="400" loading="lazy" placeholder="blur" />
                            </div>
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-bold text-lg text-custom-blue dark:text-white">Shreyank Jadiya</h2>
                                    <h3 className="text-gray-500 dark:text-gray-100 mb-3">Founder, Full stack Web Developer</h3>
                                    <p className="mb-4">DIY Developer/founder with expertise in Shopify Solutions.</p>
                                </div>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/2">
                        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <div className="flex-shrink-0 w-48 h-48 object-cover object-center sm:mb-0 mb-4">
                              <Image alt="shreya profile pic"  className="rounded-lg" src={shreya} width="400" height="400" loading="lazy" placeholder="blur" />
                            </div>
                            
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-bold text-lg text-custom-blue dark:text-white">Shreya Jadiya</h2>
                                    <h3 className="text-gray-500 dark:text-gray-100 mb-3">Administrator</h3>
                                    <p className="mb-4">Office Administrator with extensive design experience.</p>
                                </div>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/2">
                        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                        <div className="flex-shrink-0 w-48 h-48 object-cover object-center sm:mb-0 mb-4">
                              <Image alt="atticus profile pic"  className="rounded-lg" src={finch} width="400" height="400" loading="lazy" placeholder="blur" />
                            </div>
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-bold text-lg text-custom-blue dark:text-white">Atticus Finch</h2>
                                    <h3 className="text-gray-500 dark:text-gray-100 mb-3">Senior Developer</h3>
                                    <p className="mb-4">Web developer with expertise of more than 10 years</p>
                                </div>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/2">
                        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                        <div className="flex-shrink-0 w-48 h-48 object-cover object-center sm:mb-0 mb-4">
                              <Image alt="henry profile pic"  className="rounded-lg" src={henry} width="400" height="400" loading="lazy" placeholder="blur" />
                            </div>
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-bold text-lg text-custom-blue dark:text-white">Henry Letham</h2>
                                    <h3 className="text-gray-500 dark:text-gray-100 mb-3">Web Designer Lead</h3>
                                    <p className="mb-4">Lead Designer mastermind of famous brands</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
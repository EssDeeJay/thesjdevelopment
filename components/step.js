import React from "react";
import Image from "next/dist/client/image";
import image1 from "../public/img/business_meeting.jpg";

export default function Step(){
    return(
        <section className="text-gray-600 dark:text-gray-100 body-font">
            <div className="mx-auto flex flex-wrap">
                <div className="flex flex-wrap w-full">
                    <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                        <div className="flex relative pb-12">
                            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                            </div>
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-custom-blue inline-flex items-center justify-center text-white relative z-10">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            </svg>
                        </div>
                        <div className="flex-grow pl-4">
                            <h2 className="font-extrabold title-font text-sm text-custom-blue dark:text-white mb-1 tracking-wider">STEP 1 - RESEARCH</h2>
                            <p className="leading-relaxed">We sit with you to discuss project details and expectaions. We then research the market for you to help you undestand possible solutions followed by estimated budget with timeline.</p>
                        </div>
                        </div>
                        <div className="flex relative pb-12">
                            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                            </div>
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-custom-blue inline-flex items-center justify-center text-white relative z-10">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                </svg>
                            </div>
                            <div className="flex-grow pl-4">
                                <h2 className="font-extrabold title-font text-sm text-custom-blue dark:text-white mb-1 tracking-wider">STEP 2 - ONBOARDING</h2>
                                <p className="leading-relaxed">Congratulations ! We will assign you the best designer / developer to look after your project.</p>
                            </div>
                        </div>
                        <div className="flex relative pb-12">
                            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                            </div>
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-custom-blue inline-flex items-center justify-center text-white relative z-10">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <circle cx="12" cy="5" r="3"></circle>
                                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                                </svg>
                            </div>
                            <div className="flex-grow pl-4">
                                 <h2 className="font-extrabold title-font text-sm text-custom-blue dark:text-white mb-1 tracking-wider">STEP 3 - DEVELOPMENT</h2>
                                <p className="leading-relaxed">Our Developer will work hard on your project with regular updates on where your project at.</p>
                            </div>
                        </div>
                        <div className="flex relative pb-12">
                            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                            </div>
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-custom-blue inline-flex items-center justify-center text-white relative z-10">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </div>
                         <div className="flex-grow pl-4">
                             <h2 className="font-extrabold title-font text-sm text-custom-blue dark:text-white mb-1 tracking-wider">STEP 4 - TESTING</h2>
                                <p className="leading-relaxed">Our Developer will sit with you to go over the testing scenarios and make sure the project outcome is success.</p>
                        </div>
                        </div>
                        <div className="flex relative">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-custom-blue inline-flex items-center justify-center text-white relative z-10">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                 <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                 <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                            </div>
                        <div className="flex-grow pl-4">
                            <h2 className="font-extrabold title-font text-sm text-custom-blue dark:text-white mb-1 tracking-wider">FINISH - FOLLOW UPS</h2>
                            <p className="leading-relaxed">Hurray ! Your project is completed. We will follow up with you on certain time intervals to make sure how the update is performing and never leave you hanging after the project.</p>
                        </div>
                        </div>
                    </div>
                    <div className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12">
                        <Image className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
                            src={image1}
                            alt="step"
                        width="4460"
                            height="2973"
                            loading="lazy"
                            placeholder="blur" />
                    </div>
            </div>
        </div>
    </section>
    )
}
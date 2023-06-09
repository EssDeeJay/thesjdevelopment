import React from "react";
import Image from "next/dist/client/image";
import image1 from "../public/img/why-us.jpg";

export default function Us() {
    return (
        <>
            <div className='overflow-y-hidden'>
                <div className="xl:mx-auto xl:container py-4">
                    <div className="lg:flex items-center justify-center lg:space-x-12 2xl:space-x-6">
                        <div className>
                            <p className="lg:text-4xl text-3xl font-extrabold leading-9 text-custom-blue dark:text-white">Why Choose Us ?</p>
                            <p className="text-lg leading-7 text-gray-600 mt-4 xl:w-7/12 w-full dark:text-gray-300">Whether it is a micro task or a whole new project itself, we treat each and every task with our full dedication.</p>
                            <div className="lg:hidden lg:w-3/5 xl:w-3/5 w-full lg:mt-0 mt-6">
                                <Image src={image1} alt="why us" className="w-full obejct-fit object-center object-fill h-full" height="3024" width="4032" loading="eager" layout="intrinsic" placeholder="blur"/>
                            </div>
                            <div className="mt-6 md:mt-10 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 lg:mt-6 2xl:mt-12">
                                <div className="flex items-center">
                                    <div className="w-16 h-16 relative">
                                        <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                            <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="8" y="8" width="60" height="60" rx="6" fill="#d6e4f0" />
                                                <rect width="60" height="60" rx="6" fill="#163172" />
                                                <path d="M23.5999 20.9037C23.7313 20.7737 23.8343 20.6179 23.9025 20.4461C23.9706 20.2742 24.0025 20.0902 23.996 19.9054C23.9894 19.7207 23.9447 19.5393 23.8646 19.3727C23.7845 19.2061 23.6707 19.0579 23.5305 18.9375C22.8248 18.3352 21.9283 18.003 21.0005 18L20.7961 18.0056H20.7661C18.6505 18.1344 17.0005 19.9719 17.0049 22.1875C17.0049 23.375 17.5049 24.0037 17.8999 24.5069C18.0107 24.6475 18.1497 24.7635 18.3079 24.8475C18.4661 24.9314 18.64 24.9814 18.8186 24.9944C18.8349 24.9944 18.8624 24.9975 18.9436 24.9975C19.1043 24.9973 19.2633 24.9645 19.411 24.9013C19.5586 24.838 19.692 24.7455 19.803 24.6294L23.5999 20.9037ZM39.2374 18.0069L39.033 18.0006H39.0005C38.0719 18.003 37.1744 18.3353 36.468 18.9381C36.328 19.0586 36.2144 19.2067 36.1344 19.3731C36.0544 19.5396 36.0098 19.7209 36.0033 19.9054C35.9967 20.09 36.0285 20.274 36.0965 20.4457C36.1646 20.6174 36.2675 20.7731 36.3986 20.9031L40.1968 24.6313C40.308 24.7478 40.4418 24.8406 40.5899 24.904C40.738 24.9674 40.8975 25 41.0586 25C41.1386 25 41.1661 25 41.1836 24.9969C41.3621 24.9839 41.536 24.9338 41.6941 24.8499C41.8521 24.7659 41.991 24.65 42.1018 24.5094C42.4993 24.0062 42.9943 23.3794 42.9968 22.19C43.0005 19.9719 41.3505 18.1344 39.2374 18.0069Z" fill="white" />
                                                <path d="M30.0042 20C23.9417 20 19.0042 24.9344 19.0042 31C19.002 33.5717 19.905 36.0622 21.5548 38.035L19.2973 40.2931C19.2022 40.3855 19.1265 40.4958 19.0744 40.6178C19.0224 40.7397 18.9951 40.8707 18.9942 41.0033C18.9932 41.1358 19.0186 41.2672 19.069 41.3898C19.1193 41.5125 19.1934 41.6239 19.2872 41.7176C19.3809 41.8113 19.4924 41.8854 19.615 41.9357C19.7377 41.9859 19.8691 42.0113 20.0017 42.0103C20.1342 42.0093 20.2652 41.982 20.3871 41.9299C20.509 41.8778 20.6193 41.802 20.7117 41.7069L22.9692 39.4494C24.943 41.0973 27.4328 42.0001 30.0042 42.0001C32.5755 42.0001 35.0653 41.0973 37.0392 39.4494L39.2973 41.7069C39.3896 41.802 39.4999 41.8778 39.6218 41.9299C39.7437 41.982 39.8747 42.0093 40.0073 42.0103C40.1398 42.0113 40.2712 41.9859 40.3939 41.9357C40.5166 41.8854 40.628 41.8113 40.7218 41.7176C40.8155 41.6239 40.8897 41.5125 40.94 41.3898C40.9903 41.2672 41.0157 41.1358 41.0148 41.0033C41.0138 40.8707 40.9866 40.7397 40.9345 40.6178C40.8825 40.4958 40.8067 40.3855 40.7117 40.2931L38.4535 38.035C40.1036 36.0624 41.0066 33.5718 41.0042 31C41.0042 24.9375 36.0698 20 30.0042 20ZM31.0042 31C31.0042 31.2652 30.8988 31.5196 30.7113 31.7071C30.5237 31.8946 30.2694 32 30.0042 32H25.0042C24.7389 32 24.4846 31.8946 24.2971 31.7071C24.1095 31.5196 24.0042 31.2652 24.0042 31C24.0042 30.7348 24.1095 30.4804 24.2971 30.2929C24.4846 30.1054 24.7389 30 25.0042 30H29.0042V24C29.0042 23.7348 29.1095 23.4804 29.2971 23.2929C29.4846 23.1054 29.7389 23 30.0042 23C30.2694 23 30.5237 23.1054 30.7113 23.2929C30.8988 23.4804 31.0042 23.7348 31.0042 24V31Z" fill="white" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex items-start flex-col ml-6 pt-8">
                                        <h2 className="text-lg font-semibold leading-4 text-custom-blue dark:text-white">Time Prompt</h2>
                                        <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600 dark:text-gray-300">We strongly believe in delivering on time projects.</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-16 h-16 relative">
                                        <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                            
                                            <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="8" y="8" width="60" height="60" rx="6" fill="#d6e4f0" />
                                                <rect width="60" height="60" rx="6" fill="#163172" />
                                                <path d="M34.7904 18.0363C33.5741 16.7231 31.8754 16 30.0004 16C28.1154 16 26.411 16.7187 25.2004 18.0237C23.9766 19.3431 23.3804 21.1363 23.5204 23.0725C23.7979 26.8925 26.7047 30 30.0004 30C33.296 30 36.1979 26.8931 36.4797 23.0737C36.6216 21.155 36.0216 19.3656 34.7904 18.0363ZM41.0004 44H19.0004C18.7124 44.0037 18.4272 43.9433 18.1656 43.8229C17.9039 43.7026 17.6724 43.5254 17.4879 43.3044C17.0816 42.8188 16.9179 42.1556 17.0391 41.485C17.5666 38.5588 19.2129 36.1006 21.8004 34.375C24.0991 32.8431 27.011 32 30.0004 32C32.9897 32 35.9016 32.8438 38.2004 34.375C40.7879 36.1 42.4341 38.5581 42.9616 41.4844C43.0829 42.155 42.9191 42.8181 42.5129 43.3037C42.3284 43.5249 42.0969 43.7022 41.8352 43.8226C41.5736 43.9431 41.2884 44.0037 41.0004 44Z" fill="white" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex items-start flex-col ml-6 pt-8">
                                        <h2 className="text-lg font-semibold leading-4 text-custom-blue dark:text-white">Client First</h2>
                                        <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600 dark:text-gray-300">We put your goals above everything.</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-16 h-16 relative">
                                        <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                            <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="8" y="8" width="60" height="60" rx="6" fill="#d6e4f0" />
                                                <rect width="60" height="60" rx="6" fill="#163172" />
                                                <path d="M32 43H28C27.7348 43 27.4805 43.1054 27.2929 43.2929C27.1054 43.4805 27 43.7348 27 44C27 44.2652 27.1054 44.5196 27.2929 44.7071C27.4805 44.8947 27.7348 45 28 45H32C32.2652 45 32.5196 44.8947 32.7071 44.7071C32.8947 44.5196 33 44.2652 33 44C33 43.7348 32.8947 43.4805 32.7071 43.2929C32.5196 43.1054 32.2652 43 32 43ZM33 40H27C26.7348 40 26.4805 40.1054 26.2929 40.2929C26.1054 40.4805 26 40.7348 26 41C26 41.2652 26.1054 41.5196 26.2929 41.7071C26.4805 41.8947 26.7348 42 27 42H33C33.2652 42 33.5196 41.8947 33.7071 41.7071C33.8947 41.5196 34 41.2652 34 41C34 40.7348 33.8947 40.4805 33.7071 40.2929C33.5196 40.1054 33.2652 40 33 40ZM37.0888 17.9182C35.2094 16.0363 32.6919 15 30 15C28.6859 14.9969 27.3842 15.2534 26.1695 15.7549C24.9548 16.2563 23.8512 16.9928 22.922 17.922C21.9928 18.8512 21.2563 19.9548 20.7549 21.1695C20.2534 22.3842 19.9969 23.6859 20 25C20 27.9138 21.1169 30.6394 23.0625 32.4775L23.335 32.7332C24.4607 33.7857 26 35.2275 26 36.5V38C26 38.2652 26.1054 38.5196 26.2929 38.7071C26.4805 38.8947 26.7348 39 27 39H28.5C28.6326 39 28.7598 38.9473 28.8536 38.8536C28.9474 38.7598 29 38.6326 29 38.5V31.1763C29.0001 31.0752 28.9694 30.9764 28.9122 30.8931C28.855 30.8097 28.7738 30.7457 28.6794 30.7094C28.102 30.4738 27.5534 30.1729 27.0444 29.8125C26.93 29.7395 26.8317 29.6439 26.7554 29.5317C26.6792 29.4194 26.6266 29.2928 26.6008 29.1596C26.575 29.0263 26.5767 28.8892 26.6056 28.7566C26.6345 28.624 26.6901 28.4987 26.769 28.3883C26.8479 28.2779 26.9485 28.1847 27.0645 28.1144C27.1806 28.0441 27.3098 27.9981 27.4442 27.9793C27.5786 27.9606 27.7154 27.9693 27.8463 28.0051C27.9772 28.0409 28.0995 28.103 28.2057 28.1875C28.6682 28.515 29.5588 29 30 29C30.4413 29 31.3319 28.5138 31.7957 28.1875C32.0116 28.0518 32.2712 28.0037 32.5215 28.053C32.7717 28.1024 32.9936 28.2455 33.1418 28.4531C33.29 28.6607 33.3532 28.9171 33.3186 29.1698C33.284 29.4225 33.1542 29.6524 32.9557 29.8125C32.4466 30.1723 31.898 30.4725 31.3207 30.7075C31.2263 30.7438 31.1451 30.8078 31.0879 30.8912C31.0306 30.9745 31 31.0733 31 31.1744V38.5C31 38.6326 31.0527 38.7598 31.1465 38.8536C31.2402 38.9473 31.3674 39 31.5 39H33C33.2652 39 33.5196 38.8947 33.7071 38.7071C33.8947 38.5196 34 38.2652 34 38V36.5C34 35.2575 35.5225 33.8169 36.6344 32.7644L36.9413 32.4732C38.9425 30.5625 40 27.9757 40 25C40.0067 23.6858 39.7528 22.3833 39.2531 21.1678C38.7534 19.9522 38.0178 18.8477 37.0888 17.9182Z" fill="white" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex items-start flex-col ml-6 pt-8">
                                        <h2 className="text-lg font-semibold leading-4 text-custom-blue">Creative Ideas</h2>
                                        <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600 dark:text-gray-300">We are known for the ideas that makes a difference.</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-16 h-16 relative">
                                        <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                            <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="8" y="8" width="60" height="60" rx="6" fill="#d6e4f0" />
                                                <rect width="60" height="60" rx="6" fill="#163172" />
                                                <path d="M43 19H39.2437C39.1774 19 39.1139 18.9737 39.067 18.9268C39.0201 18.8799 38.9937 18.8163 38.9937 18.75V17.995C38.9924 17.4654 38.7811 16.958 38.4062 16.584C38.0313 16.21 37.5233 16 36.9937 16L23.0069 16.0162C22.4778 16.0172 21.9708 16.2278 21.5966 16.6018C21.2225 16.9758 21.0118 17.4828 21.0106 18.0119V18.75C21.0106 18.8163 20.9843 18.8799 20.9374 18.9268C20.8905 18.9737 20.8269 19 20.7606 19H17C16.7348 19 16.4804 19.1054 16.2929 19.2929C16.1054 19.4804 16 19.7348 16 20V21C16 24.4081 17.875 28.0281 20.7825 28.8344C20.8685 28.8583 20.9463 28.9053 21.0074 28.9703C21.0686 29.0353 21.1107 29.1158 21.1294 29.2031C21.49 30.8837 22.5994 32.4844 24.3425 33.8037C25.6494 34.7931 27.2081 35.5225 28.6094 35.8337C28.7202 35.8586 28.8192 35.9204 28.8902 36.009C28.9612 36.0976 28.9999 36.2077 29 36.3213V41.75C29 41.8163 28.9737 41.8799 28.9268 41.9268C28.8799 41.9737 28.8163 42 28.75 42H25.0281C24.49 42 24.0281 42.4138 24.0013 42.9519C23.9947 43.0871 24.0157 43.2222 24.063 43.3491C24.1102 43.4759 24.1828 43.5919 24.2761 43.6898C24.3695 43.7878 24.4818 43.8659 24.6063 43.9192C24.7307 43.9725 24.8646 44 25 44H34.9719C35.51 44 35.9719 43.5862 35.9988 43.0481C36.0053 42.9129 35.9843 42.7778 35.937 42.6509C35.8898 42.5241 35.8172 42.4081 35.7239 42.3102C35.6305 42.2122 35.5182 42.1341 35.3937 42.0808C35.2693 42.0275 35.1354 42 35 42H31.25C31.1837 42 31.1201 41.9737 31.0732 41.9268C31.0263 41.8799 31 41.8163 31 41.75V36.3213C31.0001 36.2077 31.0388 36.0976 31.1098 36.009C31.1808 35.9204 31.2798 35.8586 31.3906 35.8337C32.7919 35.5212 34.3506 34.7931 35.6575 33.8037C37.4006 32.4844 38.51 30.8837 38.8706 29.2031C38.8893 29.1158 38.9314 29.0353 38.9926 28.9703C39.0537 28.9053 39.1315 28.8583 39.2175 28.8344C42.125 28.0281 44 24.4081 44 21V20C44 19.7348 43.8946 19.4804 43.7071 19.2929C43.5196 19.1054 43.2652 19 43 19ZM21 26.3888C20.9998 26.4326 20.9882 26.4756 20.9662 26.5134C20.9442 26.5513 20.9126 26.5828 20.8746 26.6046C20.8366 26.6264 20.7936 26.6379 20.7498 26.6379C20.706 26.6378 20.6629 26.6263 20.625 26.6044C19.9837 26.2225 19.5156 25.6438 19.2413 25.2362C18.4969 24.1306 18.0538 22.6944 18.0044 21.2594C18.0031 21.2258 18.0086 21.1922 18.0206 21.1608C18.0326 21.1294 18.0509 21.1007 18.0742 21.0765C18.0975 21.0523 18.1255 21.033 18.1565 21.0199C18.1874 21.0067 18.2207 21 18.2544 21H20.7544C20.8207 21 20.8843 21.0263 20.9312 21.0732C20.978 21.1201 21.0044 21.1837 21.0044 21.25C21.0031 22.9656 21 24.9294 21 26.3888ZM40.7581 25.2362C40.4837 25.6438 40.0163 26.2225 39.375 26.6044C39.337 26.6263 39.2939 26.6379 39.2501 26.6379C39.2062 26.6379 39.1631 26.6264 39.1251 26.6044C39.0871 26.5825 39.0556 26.551 39.0336 26.513C39.0116 26.4751 39 26.432 39 26.3881C39 24.7313 39 22.8488 38.9969 21.25C38.9969 21.1837 39.0232 21.1201 39.0701 21.0732C39.117 21.0263 39.1806 21 39.2469 21H41.7469C41.7805 21 41.8138 21.0067 41.8448 21.0199C41.8757 21.033 41.9037 21.0523 41.9271 21.0765C41.9504 21.1007 41.9686 21.1294 41.9806 21.1608C41.9926 21.1922 41.9981 21.2258 41.9969 21.2594C41.9475 22.6944 41.5031 24.1306 40.7588 25.2362H40.7581Z" fill="white" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex items-start flex-col ml-6 pt-8">
                                        <h2 className="text-lg font-semibold leading-4 text-custom-blue dark:text-white">Achievments</h2>
                                        <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600 dark:text-gray-300">We celebrate when your goals are achieved.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden lg:block lg:w-3/5 xl:w-3/5 w-full lg:mt-0 mt-6">
                            <Image src={image1} alt="why us" className="w-full obejct-fit object-center object-fill h-full" height="3024" width="4032" loading="eager" layout="intrinsic" placeholder="blur"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='overflow-y-hidden'>
                <div className="pb-16">
                    {/* Code block starts */}
                    <dh-component>
                        <section className="mx-auto container pt-16">
                            <div className="px-4 lg:px-0">
                                <div role="contentinfo" className="flex items-center flex-col px-4">
                                    <p tabIndex={0} className="focus:outline-none uppercase text-sm text-center text-custom-medium-blue dark:text-gray-300 leading-none">in few easy steps</p>
                                    <h1 tabIndex={0} className="focus:outline-none text-4xl lg:text-4xl pt-4 font-extrabold text-center leading-tight text-custom-blue dark:text-white lg:w-7/12 md:w-9/12 xl:w-5/12">Create Beautiful Websites &amp; Designs with Us</h1>
                                </div>
                            </div>
                        </section>
                        <section className="bg-custom-blue dark:bg-trueGray-700 py-12 mt-12">
                            <div tabIndex={0} aria-label="group of cards" className="focus:outline-none px-4 lg:px-0">
                                <div className="mx-auto container flex flex-wrap px-2 lg:px-24">
                                    <div tabIndex={0} aria-label="card 1" className="focus:outline-none flex sm:w-full md:w-1/2 lg:border-r md:border-r sm:border-r-0 border-custom-light-blue pb-10 lg:pt-10">
                                        <div className=" flex flex-shrink-0 mr-5 text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                                            </svg>


                                        </div>
                                        <div className="md:w-9/12 lg:w-9/12">
                                            <h2 tabIndex={0} className="focus:outline-none text-lg font-semibold leading-5 text-white">Strategic Roadmapping</h2>
                                            <p tabIndex={0} className="focus:outline-none text-base text-white leading-normal xl:w-10/12 pt-2">By deep diving to understand the needs of your business, we create intentional, thoughtful ecommerce experiences tailored for success at the highest levels.</p>
                                        </div>
                                    </div>
                                    <div tabIndex={0} aria-label="card 2" className="focus:outline-none flex sm:w-full md:w-1/2 lg:pb-10 lg:pt-10">
                                        <div className=" flex flex-shrink-0 sm:ml-0 md:ml-10 lg:ml-10 mr-5 text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                            </svg>

                                        </div>
                                        <div className="md:w-9/12 lg:w-9/12 ">
                                            <h2 tabIndex={0} className="focus:outline-none text-lg font-semibold leading-5 text-white">Hight Quality UI you can reply on</h2>
                                            <p tabIndex={0} className="focus:outline-none text-base text-white leading-normal xl:w-10/12 pt-2">Our process presents high fidelity prototypes in an open and collaborative manner, to ultimately drive business objectives and effectively communicate with your target audience.</p>
                                        </div>
                                    </div>
                                    <div tabIndex={0} aria-label="card 3" className="focus:outline-none flex sm:w-full md:w-1/2 lg:border-t md:border-t sm:border-t-0 lg:border-r md:border-r sm:border-r-0 border-custom-light-blue pt-10 lg:pb-20">
                                        <div className=" flex flex-shrink-0 mr-5 text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                                            </svg>

                                        </div>
                                        <div className="md:w-9/12 lg:w-9/12 ">
                                            <h2 tabIndex={0} className="focus:outline-none text-lg font-semibold leading-5 text-white">Coded by Expert Developers</h2>
                                            <p tabIndex={0} className="focus:outline-none text-base text-white leading-normal xl:w-10/12 pt-2">We handle everything you need to get your newly designed site up and running. Our sites, built on Shopify, deliver a user-friendly experience not only for the consumers but tailored towards your business needs. </p>
                                        </div>
                                    </div>
                                    <div tabIndex={0} aria-label="card 4" className="focus:outline-none flex sm:w-full md:w-1/2 lg:border-t md:border-t sm:border-t-0 border-custom-light-blue pt-10 lg:pb-20">
                                        <div className=" flex flex-shrink-0 sm:ml-0 md:ml-10 lg:ml-10 mr-5 text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                            </svg>

                                        </div>
                                        <div className="md:w-9/12 lg:w-9/12 ">
                                            <h2 tabIndex={0} className="focus:outline-none text-lg font-semibold leading-5 text-white">The Last UI you’ll ever need</h2>
                                            <p tabIndex={0} className="focus:outline-none text-base text-white leading-normal xl:w-10/12 pt-2">Using modern mobile-first approach and following industry best practices, we ensure that your custom digital experience will reflect your brand and provide a great ecommerce experience for your consumers.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </dh-component>
                    {/* Code block ends */}
                </div>

            </div>


           
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
                                    our free consultation
                                </h2>
                            </div>
                            <div className="w-full px-4 lg:w-1/2">
                                <div className="flex flex-wrap lg:justify-end">
                                    <a
                                        href="/projects"
                                        className="hover:text-primary my-1 mr-4 inline-block rounded bg-custom-medium-blue bgOpacity-[15%] py-4 px-6 text-base font-medium text-white transition hover:bgOpacity-25 md:px-9 lg:px-6 xl:px-9"
                                    >
                                        Our Projects
                                    </a>
                                    <a
                                        href="/contact-us"
                                        className="my-1 inline-block rounded bg-[#13C296] py-4 px-6 text-base font-medium text-white transition hover:bgOpacity-90 md:px-9 lg:px-6 xl:px-9"
                                    >
                                        Start Free Consultation
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
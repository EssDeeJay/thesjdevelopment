import React from "react";
import Container from "./container";
import SectionTitle from "./sectionTitle";
import Step from "./step";
import Team from "./team";
import Image from "next/dist/client/image";
import shreyank from "../public/img/shreyank_final.jpg";

export default function AboutComponent(){

    return (
    <>
      <Container>
      <div className="mb-12">
            <div className="lg:w-10/12 w-full">
                <p className="font-bold text-sm leading-3 text-custom-medium-blue  cursor-pointer uppercase ">About Us</p>
                <h2 className="xl:w-8/12 lg:w-10/12 w-full font-bold text-custom-blue dark:text-white lg:text-4xl text-3xl lg:leading-10 leading-9 mt-2">We are here to make websites that makes difference for your customers</h2>
                <p className="font-normal text-base leading-6 text-gray-600 dark:text-gray-100 mt-6">We are a nimble team of designers and developers based in canada who believes in canadian politeness, new york work ethic and califonian fun. We are ecommerce shopify experts in the field for more than 10 years.</p>
            </div>

            <div className="lg:mt-14 sm:mt-10 mt-12">
                <img className="lg:block hidden w-full" src="https://i.ibb.co/GvwJnvn/Group-736.png" alt="Group of people Chilling" />
                <img className="lg:hidden sm:block hidden w-full" src="https://i.ibb.co/5sZTmHq/Rectangle-116.png" alt="Group of people Chilling" />
                <img className="sm:hidden block w-full" src="https://i.ibb.co/zSxXJGQ/Rectangle-122.png" alt="Group of people Chilling" />
            </div>

            <div className="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
                <div className="w-full xl:w-5/12 lg:w-6/12">
                    <p className="font-bold text-sm leading-3 text-custom-medium-blue  cursor-pointer uppercase ">Our Story</p>
                    <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-custom-blue dark:text-white mt-3 capitalize">A Word from our Founder</h2>
                    <p className="font-normal text-base leading-6 text-gray-600 dark:text-gray-100 mt-4">The SJ Development was founded for the purpose of helping small businesses to grow and for big businesses to make an impact in the market without paying hefty charges to digital agencies and still not getting the desired results. It Was Founded by me(a.k.a. Shreyank Jadiya) as part of side hustle into web development projects and became full time jobs leading to success of the projects. We then grew our team across north america to take care of growing workloads and from there we never stopped looking back. Our name might be new in the market but we are the old players of this game who will play key role to help your businesses. </p>
                    <p className="font-normal text-base leading-6 text-gray-600 dark:text-gray-100 mt-6">We are leading web development firm and experts of ecommerce. We breathe shopify and have vast experience in creating customized storefronts as per business needs. You might be wondering, well what is the difference here than agency ? We are not agency, we are your employees who works in accordance with you as per your timelines and give the best possible results, so your business can achieve new heights. Enough Said ! Please checkout our process of work to see how we can help you reach your next goal. </p>
                </div>
                <div className="lg:flex items-center w-full lg:w-1/2 ">
                   <Image src={shreyank} loading="lazy" placeholder="blur" layout="intrinsic" alt="founder image" width="2684" height="1804" className="rounded-md"/> 
                </div>
            </div>
        </div>
        </Container>
        <SectionTitle pretitle="Workflow"
                      title="Our Approach to a project"
        >
           We carefully review each of the request and assign our best team member who will take care of your business goal and give you the best result you need.
        </SectionTitle>
        <Container>
          <Step/>
          <Team />
        </Container>
    </>
       
    );
};

import Image from "next/image";
import React from "react";
import Container from "./container";

import userOneImg from "../public/img/user-icon.png";
import userTwoImg from "../public/img/user-icon.png";
import userThreeImg from "../public/img/user-icon.png";

export default function Testimonials() {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              We have worked with them in the past and we are continuing as they are doing the  <Mark>Fabulous</Mark>
              Job that makes us satisfied. They are time managing, understands the priorities and replies very quickly to your question. I will recommend them on any of your website projects.
            </p>

            <Avatar
              image={userOneImg}
              name="Mark Calvert"
              title="Owner at supportiveLiving.ca"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              They did a very good job on our <Mark>Shopify</Mark> Store to make it look more lively and that helped us bring 
              good sale and our conversion went way above then the before. Also, need to mention, their work on site speed was flawless as they eliminated the bugs that was crashing our site.
            </p>

            <Avatar
              image={userTwoImg}
              name="Karmen Salim"
              title="Manager at Village Juicery"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              They are quick and reliable as they work on their timelines and deliver<Mark>the best</Mark> of your project. We feel like we have our own the employees working with us on the project. They gave good ideas and their research is also excellent.
            </p>

            <Avatar
              image={userThreeImg}
              name="Daniel Eidan"
              title="Manager at GTA Vapes"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          layout="responsive"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}

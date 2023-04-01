"use client";

import { Badge } from "flowbite-react";
import Image from "next/image";
import { HiEnvelope, HiMapPin } from "react-icons/hi2";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Profile() {
  return (
    <div className="py-2">
      <div className="relative overflow-hidden rounded-full aspect-square w-44 mx-auto border border-gray-200 dark:border-gray-700">
        <Image
          className="absolute object-cover"
          src="/profile.jpg"
          alt="Picture"
          fill
        />
      </div>
      <div className="flex flex-col text-center md:text-left items-center md:items-stretch gap-2 pt-4 ">
        <h5 className="text-2xl py-2 font-bold tracking-tight text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
          Suraj T. Chandrashekhar
        </h5>
        <h5 className="text-lg font-normal tracking-tight text-gray-700 dark:text-white">
          Graduate Student
          <br />
          University of Maryland
        </h5>
        <div className="flex flex-wrap justify-center md:justify-start w-2/3 md:w-full gap-2">
          {[
            "Machine Learning",
            "NLP",
            "Computer Vision",
            "Deep Learning",
            "Web Development",
          ].map((item, index) => (
            <Badge
              key={index}
              color="gray"
              size="sm"
              className="whitespace-nowrap"
            >
              {item}
            </Badge>
          ))}
        </div>
        <div className="hidden md:block">
          <div className="flex gap-2 items-center py-2 border-b border-gray-200 dark:border-gray-700">
            <HiMapPin />
            <p className="font-normal text-gray-700 dark:text-gray-400">
              College Park, MD
            </p>
          </div>
          {[
            { icon: <HiEnvelope />, text: "stelugar@umd.edu", link: "/blogs" },
            {
              icon: <HiEnvelope />,
              text: "mail.surajtc@gmail.com",
              link: "/blogs",
            },
            { icon: <FaLinkedin />, text: "LinkedIn", link: "/blogs" },
            { icon: <FaGithub />, text: "Github", link: "/blogs" },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="flex gap-2 items-center py-1"
            >
              {item.icon}
              <p className="font-normal text-gray-700 dark:text-gray-400 hover:underline">
                {item.text}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

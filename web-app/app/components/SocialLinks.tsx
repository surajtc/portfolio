import { HiEnvelope, HiMapPin } from "react-icons/hi2";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

interface Props {
  showLocation?: boolean;
}

export default function SocialLinks({ showLocation }: Props) {
  return (
    <>
      {showLocation && (
        <div className="flex gap-2 items-center py-2 border-b border-gray-200 dark:border-gray-700">
          <HiMapPin />
          <p className="font-normal text-gray-700 dark:text-gray-400">
            College Park, MD
          </p>
        </div>
      )}

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
    </>
  );
}

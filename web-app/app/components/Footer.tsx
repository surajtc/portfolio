"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub, FaHeart, FaRegCopyright, FaRegHeart } from "react-icons/fa";
import SocialLinks from "./SocialLinks";
export default function Footer() {
  const path = usePathname();

  return (
    <footer className="px-2 py-4 sm:px-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400">
      <div className="max-w-4xl mx-auto">
        {path.length > 1 && <SocialLinks />}
        {path.length === 1 && (
          <div className="md:hidden">
            <SocialLinks showLocation />
          </div>
        )}
        <div className="text-sm pt-2 mt-2 flex flex-col gap-4 md:flex-row items-center justify-between border-t md:border-0 border-gray-200 dark:border-gray-700">
          <span className="text-gray-600 dark:text-gray-400 w-full md:w-auto">
            {"Made with "}
            {<FaHeart className="inline text-xs" />}
            {" by Suraj"}
          </span>

          <div className="flex justify-between w-full md:w-auto">
            <span className="pr-4">{"© 2023 Suraj T C"}</span>
            <Link href="https://github.com/SurajTC/portfolio" target="_blank">
              <FaGithub className="inline md:mb-1" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

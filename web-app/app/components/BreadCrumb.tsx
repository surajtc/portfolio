"use client";

import { Breadcrumb } from "flowbite-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiHome } from "react-icons/hi2";

export default function BreadCrumb() {
  const path = usePathname().split("/").slice(1);

  return path.length >= 2 ? (
    <div className="w-full max-w-4xl mx-auto px-2 pt-2">
      <Breadcrumb aria-label="Breadcrumb">
        <Breadcrumb.Item icon={HiHome}>
          <Link href={"/"}>Home</Link>
        </Breadcrumb.Item>
        {path.map((item, index) => (
          <Breadcrumb.Item key={index}>
            <Link href={`/${path.slice(0, index + 1).join("/")}`}>
              {item
                .replace("-", " ")
                .replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
                  letter.toUpperCase()
                )}
            </Link>
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </div>
  ) : null;
}

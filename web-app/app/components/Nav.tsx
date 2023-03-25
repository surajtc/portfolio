"use client";

import { Navbar, Flowbite, DarkThemeToggle } from "flowbite-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
});

export default function Nav() {
  const path = usePathname();
  return (
    <Navbar fluid border className="[&>div]:max-w-4xl">
      <Navbar.Brand as="div">
        <Link href="/">
          <span
            className={`${caveat.className} self-center whitespace-nowrap text-2xl font-bold dark:text-white`}
          >
            {"< Suraj TC />"}
          </span>
        </Link>
      </Navbar.Brand>

      <div className="flex gap-x-2 md:order-2">
        <Flowbite>
          <DarkThemeToggle />
        </Flowbite>
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        {[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: "Blogs", path: "/blogs" },
        ].map((item, index) => (
          <Navbar.Link
            key={index}
            active={
              path === item.path ||
              (item.path.length > 1 && path.startsWith(item.path))
            }
            as="div"
          >
            <Link href={item.path} style={{ display: "block" }}>
              {item.name}
            </Link>
          </Navbar.Link>
        ))}
        <Navbar.Link as="div">
          <Link
            href="/SurajTC_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            style={{ display: "block" }}
          >
            Resume
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

"use client";
import { Navbar, Button } from "flowbite-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const path = usePathname();
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand as="div">
        <Link href="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Suraj
          </span>
        </Link>
      </Navbar.Brand>
      {/* <div className="flex md:order-2">
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div> */}
      <Navbar.Toggle />
      <Navbar.Collapse>
        {[
          { name: "About", path: "/about" },
          { name: "Blogs", path: "/blogs" },
          { name: "Resume", path: "/resume" },
        ].map((item, index) => (
          <Navbar.Link key={index} active={path.startsWith(item.path)} as="div">
            <Link href={item.path}>{item.name}</Link>
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}

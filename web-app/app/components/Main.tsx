import { ReactNode } from "react";
import BreadCrumb from "./BreadCrumb";
import Footer from "./Footer";

interface Props {
  children: ReactNode;
}

export default function Main({ children }: Props) {
  return (
    <main className="grow flex flex-col overflow-auto">
      <div className="grow w-full max-w-4xl mx-auto px-2 sm:px-4">
        <BreadCrumb />
        <div className="py-4 md:pt-8">{children}</div>
      </div>
      <Footer />
    </main>
  );
}

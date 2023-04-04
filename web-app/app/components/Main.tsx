import { ReactNode } from "react";
import BreadCrumb from "./BreadCrumb";
import Footer from "./Footer";

interface Props {
  children: ReactNode;
}

export default function Main({ children }: Props) {
  return (
    <main className="grow flex flex-col overflow-auto">
      <BreadCrumb />
      <div className="grow w-full max-w-4xl mx-auto p-2 pt-4">
        {children}
      </div>
      <Footer />
    </main>
  );
}

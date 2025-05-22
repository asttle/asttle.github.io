import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = (props) => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark 
    font-medium text-lg dark: text-dark dark:border-light sm:text-base dark:text-light"
    >
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>Asttle Joseph &mdash; DevOps Engineer &mdash; {new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center lg:py-2 ">
          Build With{" "}
          <span className="text-2xl px-1 dark:text-primaryDark">&#128187;</span>
          <Link href="/">Next.js, TailwindCSS and framer-motion</Link>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;

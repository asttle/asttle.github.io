import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import artcile1image from "../../public/images/articles/article1.png";
import artcile2image from "../../public/images/articles/article2.jpeg";
import artcile3image from "../../public/images/articles/article3.png";
import artcile4image from "../../public/images/articles/article4.png";

import articlen from "../../public/images/articles/form validation in reactjs using custom react hook.png";

const FramerImage = motion(Image);

const MovingImage = ({ title, image, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imageRef = useRef(null);

  function handleMouse(event) {
    imageRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imageRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }
  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        src={image}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
        ref={imageRef}
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </Link>
  );
};

const Article = ({ image, title, date, link }) => {
  return (
    <motion.li
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between
      sm:flex-col
      bg-light text-dark first:mt-0 border border-solid border-dark dark:text-light dark:bg-dark dark:border-light"
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      initial={{ y: 200 }}
      viewport={{ once: true }}
    >
      <MovingImage title={title} image={image} link={link} />
      <span className="text-primary font-semibold pl-4 dark: dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ image, title, time, summary, link }) => {
  return (
    <li className="col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light">
      <Link
        className="w-full cursor-pointer overflow-hidden rounded-lg inline-block"
        href={link}
        target="_blank"
      >
        <FramerImage
          src={image}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        ></FramerImage>
      </Link>
      <Link href={link} target="_blank">
        <h2
          className="capitalize text-2xl font-bold my-2 mt-4 
        hover:underline dark:text-light
        xs:text-lg
        "
        >
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2 dark:text-light">{summary}</p>
      <span className="text-primary font-semibold dark:text-primaryDark">
        {time}
      </span>
    </li>
  );
};

const Articles = (props) => {
  return (
    <>
      <Head>
        <title>Asttle | Articles Page</title>
        <meta name="description" content="any description"></meta>
      </Head>
      <main className="w-full mb-16 flex items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText
            text="Through words, we can transform the course of history!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              title={"AWS CloudFront"}
              summary={
                "Get to know more about the glocal content delivery network AWS service"
              }
              time={"2 min read"}
              link={
                "https://medium.com/@asttle1997/aws-cloud-front-baac6accb396"
              }
              image={artcile1image}
            />
            <FeaturedArticle
              title={"AWS CloudTrail"}
              summary={
                "Get to know more about tracking IAM user activity and API usage AWS service"
              }
              time={"2 min read"}
              link={
                "https://medium.com/@asttle1997/aws-cloudtrail-40ab0e5d868d"
              }
              image={artcile2image}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32 dark:text-light">
            All Articles
          </h2>
          <ul>
            <Article
              title={"Lightweight Directory Access Protocol(LDAP)"}
              date={"August 29, 2023"}
              link={
                "https://medium.com/@asttle1997/lightweight-directory-access-protocol-ldap-6d39cbc6a318"
              }
              image={artcile3image}
            />
            <Article
              title={"Single Sign On (SSO) with SAML"}
              date={"August 31, 2023"}
              link={
                "https://medium.com/@asttle1997/single-sign-on-sso-with-saml-f831492d512c"
              }
              image={artcile4image}
            />
            <Article
              title={
                "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling                "
              }
              image={articlen}
              date={"August 25, 2023"}
              link={"/"}
            />
            <Article
              title={
                "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling                "
              }
              image={articlen}
              date={"August 25, 2023"}
              link={"/"}
            />
            <Article
              title={
                "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling                "
              }
              image={articlen}
              date={"August 25, 2023"}
              link={"/"}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default Articles;

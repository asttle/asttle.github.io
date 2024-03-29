import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/Hireme";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Asttle - Portfolio</title>
        <meta name="description" content="Portfolio site of asttle joseph" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:p-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="Image"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              ></Image>
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Bring complex user interfaces to life."
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                Innovative and motivated MSc Computing and Technology student
                with a strong passion for leveraging technology to drive
                business growth and enhance user experiences.Passionate
                front-end developer having a great expertise in React and 5
                years of professional experience in web and mobile app
                development. A motivated achiever with proven experience in
                developing complex UI and functionalities with test driven
                development using Jest, maintaining proper coding practices
                using ESLint, documenting the work using Storybook and also
                integration with REST and GraphQL endpoints.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/Asttle_Joseph_CV.pdf"
                  target={"_blank"}
                  download={true}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
                  dark:bg-light dark:text-dark hover:bg-light hover:text-dark border border-solid 
                  hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                  border-transparent hover:border-dark md:p-2 md:px-4 md:text-base"
                >
                  Resume <LinkArrow className="w-6 ml-1" />
                </Link>
                <Link
                  href="mailto:asttle1997@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
      </main>
    </>
  );
}

import React, { useRef, useEffect } from "react";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import profilePic from "../../public/images/profile/developer-pic-2.jpg";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);
  return <span ref={ref}></span>;
};

const About = (props) => {
  return (
    <>
      <Head>
        <title>Asttle | About Page</title>
        <meta name="description" content="any description"></meta>
      </Head>
      <main className="flex w-full flex-col items-center dark:text-light justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Intensity fuels aspiration!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg uppercase font-bold dark:text-light text-dark opacity-75">
                About me
              </h2>
              <p className="font-medium">
                I am Asttle Joseph, an innovative and motivated MSc Computing
                and Technology student based in London, United Kingdom. With a
                deep passion for harnessing technology to drive business growth
                and enhance user experiences, I am a dedicated front-end
                developer with a strong expertise in React and over 5 years of
                professional experience in web and mobile app development.
              </p>
              <p className="font-medium my-4">
                My educational journey includes pursuing a Master of Science in
                Computing and Technology from Northumbria University, London,
                and achieving a Bachelor of Technology in Information Technology
                from Saranathan College of Engineering in India, where I
                graduated as an academic topper.
              </p>
              <p p className="font-medium my-4">
                In my current role as a Lead Software Engineer at Workhall
                Private Ltd in Chennai, TN, I have been instrumental in working
                on a no-code platform that empowers users to build easily
                customizable applications. Managing a team of 10-13 members
                effectively, I lead the front-end team as a subject matter
                expert in React.JS. My approach includes test-driven development
                using Jest and Enzyme, supporting mobile app development with
                React Native, and implementing valuable changes like
                transitioning code from JavaScript to TypeScript. My
                responsibilities extend to automation testing using k6, building
                CI/CD pipelines with Jenkins, and containerizing applications
                using Docker. Moreover, I contributed to building static sites
                using Gatsby.js and implemented server-side rendering for
                websites using Next.js. I'm experienced in incorporating CSS
                frameworks like Tailwind CSS, establishing connections from
                React to GraphQL API endpoints for chat modules, and focusing on
                auto deployment using Fastlane in React Native. Collaboration
                and code maintenance are also central to my role, as I
                collaborate on web and mobile app code while creating a separate
                component library using Nx. Ensuring code quality, optimization,
                and documentation are integral to my work, utilizing ESLint,
                Lighthouse reports, and Storybook for these purposes.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 lg:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-dark " />
              <Image
                src={profilePic}
                alt="Asttle"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              ></Image>
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value="50" />+
                </span>
                <h2 className="text-xl font-medium capitalize  text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs-text-sm">
                  satisfied clients
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value="40" />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs-text-sm">
                  projects completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value="4" />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs-text-sm">
                  years of experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default About;

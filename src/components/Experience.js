import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      reference={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{
          y: 50,
        }}
        whileInView={{
          y: 0,
        }}
        transition={{
          duration: 0.5,
          type: "spring",
        }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = (props) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offeset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w-[2px] md:left-[30px] xs:left-[20px]
          "
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position={"Senior Software Engineer"}
            company={"Workhall Private Limited"}
            companyLink={"https://workhall.com"}
            time={"July 2022 - Present"}
            work={
              "Worked on no code platform where any user can build easy to use customisable application; managing team of 10-13 members effectively. Lead front-end team as subject matter expert in React.JS Followed test driven development using Jest and Enzyme Supported mobile application development using React Native Changed code from JavaScript to Typescript. Administered scripts for automation testing in k6 and also building CI/CD pipeline using Jenkins and containerising application using Docker. Helped team build static site using Gatsby.js. Developed server side rendering for website using Next.js. Incorporated adaptable, easy to build CSS frameworks like Tailwind CSS. Implemented connections in Chat module from React to GraphQL API endpoints Focussed on Auto deployment using Fastlane in React native. Collaborated web and mobile app code and building separate component library using Nx. Maintained proper coding standards using ESLint, optimised code using reports from Lighthouse and. documented code using Storybook"
            }
          />
          <Details
            position={"Software Engineer"}
            company={"WNS-Vuram"}
            companyLink={"https://vuram.com"}
            time={"May 2018 - June 2022"}
            work={
              "Worked on free online donation platform (Humane Life) enabling easy and fast contribution of goods for charity homes, non-profit organisations and NGOs. Focusing on front-end development and also contributed to back-end API written in Django. Managing and developing mobile applications for this platform using React native. Holding responsibility in deploying code to beta app distribution for beta testing and final product to app store and play store for mobile application. Developed bridge modules for native support in iOS. Performed optimisation strategies to reduce application size by 40% and increased app downloads by 20% Visited 10 NGOs to market product"
            }
          />
          <Details
            position={"Intern"}
            company={"WNS-Vuram"}
            companyLink={"https://workhall.com"}
            time={"January 2022 - April 2018"}
            work={
              "Worked on building plugins in java to preserve document formatting while converting PDF document to word document(especially Arabic). Acquired knowledge about basics of Angular JS. Learned about basics of Node JS and socket programming."
            }
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;

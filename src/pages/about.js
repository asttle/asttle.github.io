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
            text="Automating Cloud, Empowering Teams."
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg uppercase font-bold dark:text-light text-dark opacity-75">
                About me
              </h2>
              <p className="font-medium">
                I am Asttle Joseph, a DevOps Engineer based in London, UK, with over 5 years of experience in the software industry. I specialize in cloud infrastructure (AWS, Azure), containerization (Docker, Kubernetes), CI/CD automation, and observability solutions. I recently completed my MSc in Computing and Technology from Northumbria University with first-class honours. I am passionate about building scalable, reliable, and secure systems, and have a proven track record of delivering robust solutions in fast-paced environments.
              </p>
              <p className="font-medium my-4">
                My expertise includes deploying AI services in the cloud, architecting GitOps workflows with ArgoCD, leading EKS/AKS cluster upgrades, orchestrating multi-cloud migrations, and implementing comprehensive observability stacks using OpenTelemetry, Jaeger, Prometheus, and Loki. I am certified as an AWS Solutions Architect Associate and a Kubernetes Administrator.
              </p>
              <p className="font-medium my-4">
                I am always eager to learn new technologies and collaborate with teams to drive automation, efficiency, and innovation. Let's connect if you are looking for a DevOps Engineer who can make a difference!
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
                  <AnimatedNumbers value="5" />+
                </span>
                <h2 className="text-xl font-medium capitalize  text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs-text-sm">
                  Years of Experience
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value="2" />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs-text-sm">
                  major projects
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value="5" />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs-text-sm">
                  blogs written
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

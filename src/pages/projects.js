import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import humaneImage from "../../public/images/projects/humanelife.png";
import workhallImage from "../../public/images/projects/workhall.png";
import projectManagementImage from "../../public/images/projects/project-management.jpeg";
import { motion } from "framer-motion";
import artcile1image from "../../public/images/articles/article1.png";
import artcile2image from "../../public/images/articles/article2.jpeg";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, image, link, gitLink }) => {
  return (
    <article
      className="w-full flex items-center justify-between 
    rounded-3xl border border-solid border-dark p-12
     bg-light shadow-2xl dark:bg-dark dark:border-light
     lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
     "
    >
      <Link
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full "
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
      <div
        className="w-1/2 flex flex-col items-start justify-between
         pl-6 lg:w-full lg:pl-0 lg:pt-6"
      >
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          className="hover:underline underline-offset-2"
          href={link}
          target="_blank"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link className="w-10 dark:text-light" href={gitLink} target="_blank">
            <GithubIcon />
          </Link>
          <Link
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark
            sm:px-4 sm:text-base
            "
            href={link}
            target="_blank"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, summary, image, link, type, gitLink }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:border-light dark:bg-dark xs:p-4 ">
      <Link
        className="w-full cursor-pointer overflow-hidden rounded-lg"
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
      <div
        className="w-full flex flex-col items-start justify-between
         mt-4"
      >
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base ">
          {type}
        </span>
        <Link
          className="hover:underline underline-offset-2"
          href={link}
          target="_blank"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            className="text-lg font-semibold underline dark:text-light md:text-base"
            href={link}
            target="_blank"
          >
            Visit
          </Link>
          <Link
            className="w-8 md:w-6 dark:text-light"
            href={gitLink}
            target="_blank"
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = (props) => {
  return (
    <>
      <Head>
        <title>Asttle | Projects Page</title>
        <meta name="description" content="any description"></meta>
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
            text={"Conceptualization Surmounts Cognizance!"}
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12 ">
              <FeaturedProject
                title="Cloud-Native AI Model Deployment"
                image={workhallImage}
                summary={
                  "Deployed AI services and models in AWS and Azure, establishing infrastructure for model training, serving, and monitoring. Automated deployment pipelines and implemented robust monitoring using OpenTelemetry, Prometheus, and Jaeger."
                }
                link={"https://sigtech.com"}
                type={"Featured DevOps Project"}
                gitLink={"https://github.com/asttle"}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="GitOps Workflow Automation with ArgoCD"
                summary={
                  "Architected and implemented GitOps workflow automation using ArgoCD, standardizing deployment processes and enabling automatic image updates across multiple environments."
                }
                image={projectManagementImage}
                link={"https://sigtech.com"}
                type={"DevOps Project"}
                gitLink={"https://github.com/asttle"}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Multi-Cloud Migration & EKS/AKS Upgrades"
                summary={
                  "Orchestrated multi-cloud migration strategy, including EKS and AKS cluster setup, Azure Cache for Redis, and Application Gateway configuration. Led EKS cluster upgrades and managed cluster addons, achieving 99.99% uptime during transitions."
                }
                image={humaneImage}
                link={"https://sigtech.com"}
                type={"DevOps Project"}
                gitLink={"https://github.com/asttle"}
              />
            </div>
            <div className="col-span-12">
              <Project
                title="Observability Stack Implementation"
                summary={
                  "Implemented comprehensive observability stack using OpenTelemetry, Jaeger, Prometheus/Mimir, and Fluentbit/Loki across multiple environments, enhancing system reliability and troubleshooting capabilities."
                }
                image={artcile1image}
                link={"https://sigtech.com"}
                type={"DevOps Project"}
                gitLink={"https://github.com/asttle"}
              />
            </div>
            <div className="col-span-12">
              <Project
                title="CI/CD Pipeline Automation"
                summary={
                  "Created and managed CI/CD pipelines with GitHub Actions and Jenkins, reducing deployment time and increasing deployment frequency. Automated CD pipeline using GitOps with ArgoCD."
                }
                image={artcile2image}
                link={"https://workhall.com"}
                type={"DevOps Project"}
                gitLink={"https://github.com/asttle"}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;

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
            position={"DevOps Engineer"}
            company={"SigTech"}
            companyLink={"https://sigtech.com"}
            time={"August 2024 - Present"}
            address={"London, UK"}
            work={
              "• Successfully deployed AI services and models in cloud environments, establishing infrastructure for model training, serving, and monitoring.\n• Implemented comprehensive observability stack using OpenTelemetry with Jaeger, Prometheus/Mimir, and Fluentbit/Loki across multiple environments, enhancing system reliability and troubleshooting capabilities.\n• Architected GitOps workflow automation using ArgoCD that standardized deployment processes and enabled automatic image updates, significantly reducing manual intervention.\n• Led EKS cluster upgrades across multiple environments, including management of cluster addons and comprehensive documentation of processes.\n• Orchestrated multi-cloud migration strategy including AKS cluster setup, Azure Cache for Redis, and Application Gateway configuration, maintaining service continuity and achieving a 99.99% uptime during the transition process."
            }
          />
          <Details
            position={"DevOps Engineer"}
            company={"WorkHall"}
            companyLink={"https://workhall.com"}
            time={"July 2022 - April 2023"}
            address={"Bengaluru, India"}
            work={
              "• Collaborated on migration to AWS cloud infrastructure from on-premises, resulting in 40% reduction in infrastructure management time and 30% improvement in system performance and scalability.\n• Developed and deployed infrastructure for EKS clusters using Terraform, cutting provisioning time from 4 hours to 2 hours per cluster.\n• Created and managed CI/CD pipelines with GitHub Actions, reducing deployment time by 20% and increasing deployment frequency from 10 to 17 times per week.\n• Implemented Istio service mesh for EKS clusters to enhance security through mTLS, resulting in 50% reduction in security breaches and incidents.\n• Automated CD pipeline using GitOps with ArgoCD, saving developers time of 20 minutes per build.\n• Employed HashiCorp Vault for secrets management, increasing security and reducing vulnerabilities by 20%."
            }
          />
          <Details
            position={"Software Engineer"}
            company={"WNS-Vuram"}
            companyLink={"https://vuram.com"}
            time={"May 2018 - June 2022"}
            address={"Chennai, India"}
            work={
              "• Overcame scalability hurdles to enable donations exceeding 1 crore, introducing real-time tracking features that increased donation efficiency by 30%.\n• Administered shell scripting for database migration which reduced manual effort by more than 50%.\n• Incorporated real-time donation tracking and push notifications into Humane platform mobile apps, resulting in 50% increase in app downloads and 100% surge in active users.\n• Applied code splitting and asset compression techniques, reducing application size from 15 MB to 5 MB."
            }
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;

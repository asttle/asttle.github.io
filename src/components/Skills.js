import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
      lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold
      "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      animate={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = (props) => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
      lg:h-[80vh]  sm:h-[60vh] xs:h-[50vh]
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightMd md:dark:bg-circularDarkMd
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm
      "
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light
          lg:p-6 md:p-4 xs:text-xs xs:p-2
          "
          whileHover={{ scale: 1.05 }}
        >
          DevOps
        </motion.div>
        <Skill name="AWS" x="-21vw" y="2vw" />
        <Skill name="Azure" x="-5vw" y="-9vw" />
        <Skill name="Docker" x="19vw" y="6vw" />
        <Skill name="Kubernetes (EKS, AKS)" x="0vw" y="12vw" />
        <Skill name="Terraform" x="-19vw" y="-15vw" />
        <Skill name="CloudFormation" x="15vw" y="-12vw" />
        <Skill name="Jenkins" x="30vw" y="-5vw" />
        <Skill name="GitHub Actions" x="0vw" y="-21vw" />
        <Skill name="Prometheus" x="-25vw" y="18vw" />
        <Skill name="Grafana" x="18vw" y="-5vw" />
        <Skill name="ELK Stack" x="18vw" y="18vw" />
        <Skill name="CloudWatch" x="-18vw" y="-22vw" />
        <Skill name="Python" x="-30vw" y="-5vw" />
        <Skill name="Shell Scripting" x="25vw" y="-18vw" />
        <Skill name="ArgoCD" x="-10vw" y="22vw" />
        <Skill name="Istio" x="10vw" y="22vw" />
        <Skill name="HashiCorp Vault" x="-32vw" y="10vw" />
        <Skill name="OpenTelemetry" x="32vw" y="10vw" />
        <Skill name="Jaeger" x="-32vw" y="-10vw" />
        <Skill name="Loki" x="32vw" y="-10vw" />
        <Skill name="Mimir" x="0vw" y="-32vw" />
      </div>
    </>
  );
};

export default Skills;

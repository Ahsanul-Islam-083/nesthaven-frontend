"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

type FadeInProps = HTMLMotionProps<"div"> & {
  as?: "div" | "section";
};

export function FadeIn({ children, as = "div", ...props }: FadeInProps) {
  const Tag = as === "section" ? motion.section : motion.div;
  return (
    <Tag
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </Tag>
  );
}

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

type StaggerWrapperProps = HTMLMotionProps<"div">;

export function StaggerWrapper({ children, ...props }: StaggerWrapperProps) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = HTMLMotionProps<"div">;

export function StaggerItem({ children, ...props }: StaggerItemProps) {
  return (
    <motion.div variants={item} {...props}>
      {children}
    </motion.div>
  );
}

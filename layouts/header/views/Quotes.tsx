import React, { MutableRefObject, useRef } from "react";
import { motion } from "framer-motion";
import data from "../../../data";
import Link from "next/link";

const motionBubble = {
  container: {
    whileInView: {
      x: [-100, 0],
      opacity: [0, 1],
      transition: { duration: 0.5, ease: "easeIn" },
    },
  },
  lg: {
    whileHover: {
      scale: 1.2,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  },
};

const {
  info: {
    header: { name, hello, title },
  },
} = data;

const Quotes = () => {
  const wellComeDivRef = useRef() as MutableRefObject<HTMLDivElement>;
  const titleRef = useRef() as MutableRefObject<HTMLHeadingElement>;
  const helloRef = useRef() as MutableRefObject<HTMLParagraphElement>;
  const emojiRef = useRef() as MutableRefObject<HTMLSpanElement>;

  const handleAboutMouseEnter = () => {
    helloRef.current.innerText = "";
    wellComeDivRef.current.classList.add("bg-slate-700");
    titleRef.current.innerText = "About  ";
    titleRef.current.classList.add("text-zinc-50");
    emojiRef.current.innerText = "👉";
  };
  const handleAboutMouseLeave = () => {
    titleRef.current.innerText = name;
    helloRef.current.innerText = hello;
    titleRef.current.classList.remove("text-zinc-50");
    wellComeDivRef.current.classList.remove("bg-slate-700");
    wellComeDivRef.current.classList.add("bg-white");
    emojiRef.current.innerText = "👋";
  };
  return (
    <div className={"flex-1 basis-1/4"}>
      <motion.div
        whileInView={motionBubble.container.whileInView}
        className={
          "flex flex-col space-y-9 items-start lg:items-end xl:space-y-11"
        }
      >
        <Link href="/about" passHref>
          <a>
            <motion.div
              onMouseEnter={handleAboutMouseEnter}
              onMouseLeave={handleAboutMouseLeave}
              drag
              ref={wellComeDivRef}
              dragSnapToOrigin
              whileHover={motionBubble.lg.whileHover}
              className={
                "flex flex-col justify-center bg-white rounded-3xl drop-shadow-md py-5 px-8 cursor-pointer xl:py-7 xl:px-10"
              }
            >
              <div className={"flex items-center space-x-4"}>
                <span ref={emojiRef} className={"text-4xl xl:text-5xl"}>
                  👋
                </span>
                <div className={"space-y-2"}>
                  <p ref={helloRef} className={"p-text"}>
                    {hello}
                  </p>
                  <h3
                    ref={titleRef}
                    className={"text-4xl font-semibold text-black xl:text-5xl"}
                  >
                    {name}
                  </h3>
                </div>
              </div>
            </motion.div>
          </a>
        </Link>

        <motion.div
          drag
          dragSnapToOrigin
          whileHover={motionBubble.lg.whileHover}
          className={
            "flex flex-col justify-center bg-white rounded-3xl drop-shadow-md py-3 px-8 cursor-pointer p-text text-xs uppercase xl:px-10"
          }
        >
          <p>{title}</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Quotes;

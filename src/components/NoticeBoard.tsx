"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null,
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-10 h-full w-full bg-black/20"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  z-[100] grid place-items-center">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white lg:hidden"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="flex h-full  w-full max-w-[500px] flex-col overflow-hidden bg-white dark:bg-neutral-900 sm:rounded-3xl md:h-fit md:max-h-[90%]"
            >
              <div>
                <div className="flex items-start justify-between p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className=" dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                </div>
                <div className="relative px-4 pt-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex h-40 flex-col items-start gap-4 overflow-auto pb-10 text-xs text-neutral-600 [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [scrollbar-width:none] dark:text-neutral-400 md:h-fit md:text-sm lg:text-base"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="mx-auto w-full max-w-2xl gap-4 ">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.id}
            onClick={() => setActive(card)}
            className="flex cursor-pointer flex-col items-center justify-between rounded-xl p-3 hover:bg-neutral-50 dark:hover:bg-neutral-800 md:flex-row "
          >
            <div className="flex flex-col gap-4 md:flex-row ">
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="text-center font-medium text-neutral-800 dark:text-neutral-200 md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-center text-neutral-600 dark:text-neutral-400 md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    id: 1,
    description: "Exam Schedule",
    title: "Final Exams - Fall Semester 2024",
    content: () => {
      return (
        <p>
          The final exams for the Fall Semester 2024 are scheduled to begin on
          December 10th and will conclude on December 22nd. All students are
          advised to check their respective exam timetables and prepare
          accordingly. <br /> <br /> Please ensure that you are aware of the
          exam locations and timings for each subject. In case of any
          discrepancies, contact the examination office immediately. Best of
          luck to all students!
        </p>
      );
    },
  },
  {
    id: 2,
    description: "Cultural Fest",
    title: "Annual College Cultural Fest",
    content: () => {
      return (
        <p>
          The much-awaited Annual College Cultural Fest is scheduled to take
          place from October 5th to October 7th, 2024. This event will feature
          various cultural activities, including dance, music, drama, and art
          exhibitions. <br /> <br /> Students are encouraged to participate and
          showcase their talents. Registration for events is now open. For more
          details, please visit the student council office or check the college
          website.
        </p>
      );
    },
  },
  {
    id: 3,
    description: "Guest Lecture",
    title: "Guest Lecture on Data Science",
    content: () => {
      return (
        <p>
          We are pleased to announce a guest lecture on Data Science by Dr. Jane
          Doe, a renowned expert in the field. The lecture will be held on
          November 15th, 2024, at 10:00 AM in the college auditorium. <br />{" "}
          <br /> This lecture will cover the latest trends and advancements in
          Data Science, including machine learning, AI, and big data analytics.
          Students from all departments are welcome to attend. Don&apos;t miss
          this opportunity to gain valuable insights from an industry leader.
        </p>
      );
    },
  },
  {
    id: 4,
    description: "Sports Meet",
    title: "Inter-College Sports Meet 2024",
    content: () => {
      return (
        <p>
          The Inter-College Sports Meet 2024 is set to take place from November
          20th to November 25th. Our college will compete in various sports,
          including football, basketball, volleyball, and athletics. <br />{" "}
          <br /> Students interested in representing our college are requested
          to sign up for the selection trials. Let&apos;s come together and
          bring the trophy home! For more information, contact the sports
          department.
        </p>
      );
    },
  },
  {
    id: 5,
    description: "Library Notice",
    title: "Extended Library Hours During Exams",
    content: () => {
      return (
        <p>
          To accommodate students preparing for their final exams, the college
          library will extend its hours from December 1st to December 22nd. The
          library will be open from 8:00 AM to 12:00 AM during this period.{" "}
          <br /> <br /> Students are encouraged to utilize this time to study
          and prepare for their exams. Please ensure to maintain silence and
          discipline within the library premises. Happy studying!
        </p>
      );
    },
  },
];


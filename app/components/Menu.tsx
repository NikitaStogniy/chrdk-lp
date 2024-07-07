"use client";

import { useState, useRef, useEffect } from "react";
import { useClickAway } from "react-use";
import { Squash as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import { routes } from "../lib/routes"; // Ensure you have a routes file
import Link from "next/link";

const Menu = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));
  useEffect(() => {
    const handleScroll = () => setOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="justify-start flex-row items-start max-w-[1450px] mx-auto relative">
        <div className="hidden lg:flex justify-start flex-row items-start max-w-[1450px] mx-auto p-4 md:p-8 gap-8 absolute">
          <Link href={"/"} className="font-bold">
            chrk.
          </Link>
          <div className="flex flex-row gap-4">
            <Link href={"/#download"}>Скачать</Link>
            <Link href={"/help"}>Помощь</Link>
            <Link href={"/help#privacy"}>Конфиденциальность</Link>
          </div>
        </div>
      </div>
      <div ref={ref} className="lg:hidden">
        <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed left-0 shadow-4xl right-0 top-[3.5rem] p-5 pt-0 bg-white border-b border-b-white/20"
            >
              <ul className="grid gap-2">
                {routes.map((route, idx) => {
                  return (
                    <motion.li
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.1 + idx / 10,
                      }}
                      key={route.title}
                      className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-100 via-neutral-100 to-neutral-200"
                    >
                      <a
                        onClick={() => setOpen((prev) => !prev)}
                        className="flex items-center justify-between w-full p-5 rounded-xl bg-neutral-100"
                        href={route.href}
                      >
                        <span className="flex gap-1 text-lg">
                          {route.title}
                        </span>
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Menu;

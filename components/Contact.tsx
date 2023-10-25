"use client";

import React from "react";
import Sectionheading from "./Sectionheading";
// import Submitbtn from "@/components/submit-btn";
import { motion } from "framer-motion";
import { useSectionInview } from "@/lib/hooks";
import { senderEmail } from "@/actions/serverAction";
import { FaPaperPlane } from "react-icons/fa";
// import toast from "react-hot-toast/headless";

function Contact() {
  const { ref } = useSectionInview("Contact");
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      className="mb-20 text-center sm:mb-20  w-[min(100%,38rem)]   "
      id="contact"
    >
      <Sectionheading>contact me</Sectionheading>
      <p className=" -mt-4 text-gray-700">
        Please contact me directly at{" "}
        <a className="uderline " href="mailto:abanoubmilad64@gmail.com">
          abanoubmilad64@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        action={async (FormData) => {
          await senderEmail(FormData);
          alert("Email send successfully!");
        }}
        className="mt-10 p-4   flex flex-col gap-2 "
      >
        <input
          name="senderEmail"
          className="h-14 px-4 rounded-lg borderblack"
          placeholder="Your email"
          type="email"
          required
          maxLength={500}
        />
        <textarea
          name="message"
          placeholder="Your message"
          required
          maxLength={500}
          className="h-52 borderblack  p-4  my-3 rounded-lg"
        />
        <button
          className="h-[3rem] hover:scale-110 hover:bg-gray-950  transition-all active:scale-105 group w-[8rem] justify-center items-center flex gap-2 text-white rounded-full outline-none bg-gray-900  disabled:scale-100 disabled:bg-opacity-65"
          type="submit"
        >
          Submit{" "}
          <FaPaperPlane className="   group-hover:-translate-y-1  group-hover:translate-x-1 text-xs opacity-75 transition-all" />
        </button>
      </form>
    </motion.section>
  );
}

export default Contact;

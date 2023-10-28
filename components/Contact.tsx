"use client";

import React, { useState } from "react";
import Sectionheading from "./Sectionheading";
import Submitbtn from "@/components/submit-btn";
import { motion } from "framer-motion";
import { useSectionInview } from "@/lib/hooks";
import { senderEmail } from "@/actions/serverAction";
import toast from "react-hot-toast";

function Contact() {
  const [pending, setPending] = useState<any | null>(null);
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
      <p className=" dark:text-gray-50 -mt-4 text-gray-700">
        Please contact me directly at{" "}
        <a className="uderline " href="mailto:abanoubmilad64@gmail.com">
          abanoubmilad64@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        onSubmit={() => setPending(true)}
        action={async (FormData) => {
          await senderEmail(FormData);
          toast.success("Email send successfully!");
          setPending(false);
        }}
        className="mt-10 p-4   flex flex-col gap-2 "
      >
        <input
          name="senderEmail"
          className="h-14  dark:bg-white dark:text-black/50  dark:focus:bg-opacity-100 transition-all dark:outline-none dark:bg-opacity-80 px-4 rounded-lg borderblack"
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
          className="h-52 border border-black dark:outline-none  dark:bg-white dark:bg-opacity-80  dark:focus:bg-opacity-100 transition-all  p-4  my-3 rounded-lg"
        />
        <Submitbtn pending={pending} />
      </form>
    </motion.section>
  );
}

export default Contact;

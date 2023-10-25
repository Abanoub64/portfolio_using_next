"use client";

import React from "react";
import Sectionheading from "./Sectionheading";
import Submitbtn from "@/components/submit-btn";
import { motion } from "framer-motion";
import { useSectionInview } from "@/lib/hooks";
import { senderEmail } from "@/actions/serverAction";
import toast from "react-hot-toast/headless";

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
          const { data, error } = await senderEmail(FormData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully!");
          console.log(data);
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
        <Submitbtn />
      </form>
    </motion.section>
  );
}

export default Contact;

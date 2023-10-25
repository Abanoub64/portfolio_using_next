"use client";
import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";
export default function Submitbtn() {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="h-[3rem] hover:scale-110 hover:bg-gray-950  transition-all active:scale-105 group w-[8rem] justify-center items-center flex gap-2 text-white rounded-full outline-none bg-gray-900  disabled:scale-100 disabled:bg-opacity-65"
      type="submit"
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="   group-hover:-translate-y-1  group-hover:translate-x-1 text-xs opacity-75 transition-all" />
        </>
      )}
    </button>
  );
}

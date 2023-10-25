import React from "react";

export default function Footer() {
  return (
    <footer className="text-center">
      <small>
        &copy; {new Date().getFullYear()} Abanoub - All Rights Reserverd{" "}
      </small>
      <p>
        About this website:{" "}
        <span>
          built with React Next.js (App Router & Server Actions) , TypeScript
          ,Tailwind CSS , Framer Motion, React Email , Resend , vercel hosting.
        </span>
      </p>
    </footer>
  );
}

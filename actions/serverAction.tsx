"use server";
import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import contactformemail from "@/email/contact-form-email";
const resend = new Resend(process.env.RESEND_API_KEY);

export const senderEmail = async (formData: FormData) => {
  const message = formData.get("message");
  const senderEmail = formData.get("senderEmail");

  if (!validateString(senderEmail, 500)) {
    return "Invalied senderE mail";
  }
  if (!validateString(message, 5000)) {
    return "Invalied message";
  }
  try {
    await resend.emails.send({
      from: " contect form <onboarding@resend.dev>",
      to: process.env.MY_EMAIL as string,
      reply_to: senderEmail as string,
      subject: "Testing",
      react: React.createElement(contactformemail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
};

import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type contactformEmailProp = {
  message: string;
  senderEmail: String;
};

export default function contactformemail({
  message,
  senderEmail,
}: contactformEmailProp) {
  return (
    <Html lang="en" dir="ltr">
      <Head></Head>
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className=" bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderblack my-10 px-10 py-4 rounded-md">
              <Heading className=" leading-tight text-black ">
                You recevied the following message from the contact form
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The sender's email is: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

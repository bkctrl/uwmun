import React from "react";
import { useState, useRef } from 'react';
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/TextArea";
import { Button } from "@/components/ui/Button";
import emailjs from "@emailjs/browser";

export default function ContactForm() {

  // use Email JS to send emails to the UWMUN club email
  emailjs.init(process.env.NEXT_PUBLIC_EMAIL_API_KEY!);

  const emailRef = useRef<HTMLInputElement | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    console.log("public key :" + process.env.NEXT_PUBLIC_EMAIL_API_KEY);
    e.preventDefault();
    const serviceId = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID;
    try {
      setLoading(true);
      await emailjs.send(serviceId!, templateId!, {
        name: nameRef.current?.value,
        email: emailRef.current?.value,
        message: messageRef.current?.value
      });
      alert("Email sent successfully!");
    } catch (error) {
      alert("Failed to send email!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-sm space-y-2" data-aos="zoom-in" aos-duration="1500">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4" style={{ paddingTop: '5vh' }}>
        <Input
          ref={nameRef}
          type="text"
          name="name"
          placeholder="Name"
          className="max-w-lg flex-1"
        />
        <Input
          ref={emailRef}
          type="email"
          name="email"
          placeholder="Email"
          className="max-w-lg flex-1"
        />
        <Textarea
          ref={messageRef}
          name="message"
          placeholder="Message"
          className="max-w-lg flex-1 min-h-[100px]"
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

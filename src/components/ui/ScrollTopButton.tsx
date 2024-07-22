"use client";

import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react";

export default function ScrollTopButton() {
  return (
    <div className="fixed bottom-20 right-12 z-50">
      <Button
        size="icon"
        className="shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        style={{borderRadius : "50%", width: "4rem", height: "4rem" }}
      >
        <ArrowUpIcon className="h-6 w-6" />
        <span className="sr-only">Scroll to top</span>
      </Button>
    </div>
  )
}

function ArrowUpIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  )
}

import React from 'react';
import Link from "next/link";
import { InstagramIcon, DiscordIcon, LinkedinIcon } from "@/components/ui/Icons";

export default function Footer() {
  return (
  <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-primary text-primary-foreground text-center" style={{minHeight: "7vh"}}>
        <p className="text-xs w-full ml-auto" style={{fontSize: "0.9rem", marginLeft : "7vw"}}>Made with 🦆 in Waterloo</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <div className="flex items-center gap-4">
            <Link href="https://www.instagram.com/uwmun/" target="_blank" className="group" prefetch={false}>
            <InstagramIcon className="h-6 w-6 transition-colors group-hover:text-[#E1306C]" />
            </Link>
            <Link href="https://discord.gg/QBf92Q5FgR" target="_blank" className="group" prefetch={false}>
            <DiscordIcon className="h-6 w-6 fill-white transition-colors group-hover:fill-[#7289da]" />
            </Link>
            <Link href="https://www.linkedin.com/company/university-of-waterloo-model-united-nations/?originalSubdomain=ca" target="_blank" className="group" prefetch={false}>
            <LinkedinIcon className="h-6 w-6 fill-white transition-colors group-hover:fill-[#0077B5]" />
            </Link>
          </div>
        </nav>
  </footer>
  )
}
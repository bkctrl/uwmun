import { App } from "@/components/App";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UWMUN",
};

export default function Home() {
  return (
    <div>
      <App />
      <Analytics/> 
      <SpeedInsights/>
    </div>
  );
}

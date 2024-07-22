import { App } from "@/components/App";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>UWMUN</title>
        <meta name="description" content="UWMUN - Participate in MUN conferences, improve your public speaking, and engage in global discussions at the University of Waterloo." />
        <meta name="keywords" content="University of Waterloo Model United Nations, University of Waterloo MUN, University of Waterloo, UW Model United Nations, UWMUN, uwmun, UW MUN, MUN, uwmun.ca, uwmun.com" />
        <meta name="robots" content="index, follow" />
      </Head>
      <App />
      <Analytics/> 
      <SpeedInsights/>
    </div>
  );
}

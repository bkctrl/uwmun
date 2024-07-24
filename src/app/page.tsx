"use client"
import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import AOS from 'aos';
import { Avatar } from "@/components/ui/Avatar"; 
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from "@/components/ui/Card"; 
import ContactForm from "@/components/ui/ContactForm";
import Footer from "@/components/ui/Footer";
import ScrollTopButton from "@/components/ui/ScrollTopButton";
import ScrollDownButton from "@/components/ui/ScrollDownButton";
import { CalendarIcon, GlobeIcon, ArrowRightIcon, BookIcon, BookOpenIcon, NewspaperIcon, CalendarDaysIcon, LocateIcon, ArrowUpIcon, LinkedinIcon, InstagramIcon, DiscordIcon } from "@/components/ui/Icons";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import axios from "axios";

export default function Home() {
  const [execData, setExecData] = useState([]);
  const [eventData, setEventData] = useState([]);
  const [resourceData, setResourceData] = useState([]);
  axios.defaults.withCredentials = true;

  const API = process.env.NEXT_PUBLIC_VERCEL_SERVER;
  // const API = "http://localhost:4000"; // enable for local testing

  useEffect(() => {
    AOS.init();
    const fetchData = async () => {
      // axios.post("uwmun-5g9fnie2r-bkctrls-projects.vercel.app");
      try {
        const execResponse = await fetch(`${API}/execs-data`);
        const execJson = await execResponse.json();
        setExecData(execJson);
        const eventResponse = await fetch(`${API}/events-data`);
        const eventJson = await eventResponse.json();
        setEventData(eventJson);
        const resourceResponse = await fetch(`${API}/resources-data`);
        const resourceJson = await resourceResponse.json();
        setResourceData(resourceJson);
      } catch (error) {
        console.error("Error fetching exec data:", error);
      }
    };
    
    fetchData();
  }, []);

  if (execData.length === 0) {
    return;
  }

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Analytics/> 
      <SpeedInsights/>
      <title>UWMUN</title>
      <link rel="stylesheet" href="/styles.css" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" />
      <a href="#top">< ScrollTopButton /></a>
      {/* Header */}
      <div id="top">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-primary text-primary-foreground">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <img src="/assets/uwmun-logo.png" width="36" height="36"></img>
          <div className="header-text flex-shrink-0 text-xl font-bold flex-shrink-0">&nbsp; &nbsp; UWMUN.</div>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="nav-menu text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Home
          </Link>
          <Link href="#about" className="nav-menu text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#events" className="nav-menu text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Events
          </Link>
          <Link href="#resources" className="nav-menu text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Resources
          </Link>
        </nav>
      </header> 
      </div>
      
      <main className="flex-1 justify-center">
        {/* Home */}
         <section className="w-full justify-center bg-primary text-primary-foreground" style={{paddingTop : "20vh", width: "100vw", minHeight: "100vh"}}>
          <div className="w-full" style={{width: "100%"}}>
            <div className="grid gap-6 lg:grid-cols-[1fr_minmax(0,60vw)] lg:gap-12 xl:grid-cols-[1fr_minmax(0,60vw)] justify-center" style={{width: "100%", paddingLeft: "24vw", paddingRight: "16vw"}}>
            <img src="assets/uwmun-logo.png"
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-mirror="true"
              style={{width : "22vw", height: "272"}}
              alt="uwmun-logo"
              className="mx-auto  overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
              <div className="flex flex-col justify-center space-y-4" data-aos="fade-right" data-aos-duration="1500" data-aos-mirror="true">
                <div className="space-y-2">
                  <h1 className="flex text-xl font-bold tracking-tighter sm:text-xl xl:text-2xl/none" style={{width : "60%"}}>
                    University of Waterloo 
                  </h1>
                  <h1 className="flex text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none" style={{width : "25vw"}}>
                    Model United Nations
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl" style={{width : "27vw"}}>
                    The Model United Nations (UWMUN) Club at the University of Waterloo is a student-run organization dedicated to fostering
                    global awareness, diplomacy, and leadership skills.
                  </p>
                </div>
                <div className="flex items-center gap-4" style={{paddingBottom : "4rem"}}>
                  <Link href="https://www.instagram.com/uwmun/" target="_blank" className="group" prefetch={false}>
                  <InstagramIcon className="h-8 w-8 transition-colors group-hover:text-[#E1306C]" />
                  </Link>
                  <Link href="https://discord.gg/QBf92Q5FgR" target="_blank" className="group" prefetch={false}>
                  <DiscordIcon className="h-8 w-8 fill-white transition-colors group-hover:fill-[#7289da]" />
                  </Link>
                  <Link href="https://www.linkedin.com/company/university-of-waterloo-model-united-nations/?originalSubdomain=ca" target="_blank" className="group" prefetch={false}>
                  <LinkedinIcon className="h-8 w-8 fill-white transition-colors group-hover:fill-[#0077B5]" />
                  </Link>
                </div>
              </div>
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
            <a href="#about"><ScrollDownButton /></a>
          </div>
        </div>
        </section>

        {/* What We Do */}
        <div id="about">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted" style={{padding : "10vw", minHeight: "100vh"}} data-aos="fade-up" data-aos-duration="1500">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm" style={{backgroundColor : "white"}}>What We Do</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Empowering Global Perspectives</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We discuss the political, social, and economic state of the world via student driven and focused debate. Using this debate, we endeavour to also expand the individual awareness of the world at large, and discover possible solutions to the issues plaguing the world and the people within. UWMUN has at its core the goal of making its members into more aware and capable global citizens, through open debate and engagement on the issues of the world through the club&apos;s events and initiatives.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="assets/placards-up.jpg"
                width="550"
                height="410"
                alt="Image"
                className="mx-auto overflow-hidden rounded-lg object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Weekly Crisis Days</h3>
                      <p className="text-muted-foreground">
                      Simulate exciting imaginary crises to develop rapid decision-making and problem-solving skills. Engage in dynamic debates and improve your crisis management abilities
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Internal Conferences</h3>
                      <p className="text-muted-foreground">
                      Practice public speaking, negotiation, and diplomacy in a supportive space. Build confidence and refine strategies through constructive feedback.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">External MUN Participation</h3>
                      <p className="text-muted-foreground">
                      Represent our university at national and international MUN conferences. Engage with peers worldwide, apply your skills globally, and expand your network. Join us and make an impact on the world stage.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        </div>

        {/* Executive Board */}
        <div id="execs">
        <section className="w-full py-12 md:py-24 lg:py-32" style={{padding : "10vw", minHeight: "100vh"}} data-aos="fade-up" data-aos-duration="1000">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Executive Board</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet the Team</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our executive board is composed of dedicated and passionate students who strive to ensure the success of our club.
                </p>
              </div>
            </div>    
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {execData.map((exec, index) => { 
                return (
                  <div key={index} data-aos="zoom-in" aos-duration="1500" className="flex flex-col items-center justify-center space-y-4">
                    <Avatar>
                      <img src={(exec as any)["Profile Link"].url} className="mx-auto" style={{borderRadius : "50%", width : "20%", height : "20%"}}/>
                    </Avatar>
                    <div className="space-y-1 text-center">
                      <h3 className="text-xl font-bold">{(exec as any).Name.title[0].plain_text}</h3>
                      <p className="text-muted-foreground">{(exec as any).Position.rich_text[0].plain_text}</p>
                      <p className="text-muted-foreground">{(exec as any).Program.rich_text[0].plain_text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        </div>

        {/* Upcoming Events */}
        <div id="events">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary" style={{padding : "10vw", minHeight: "100vh"}} data-aos="fade-up" data-aos-duration="1000">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm" style={{backgroundColor : "white"}}>Upcoming Events</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Mark Your Calendars</h2>
                <p className="max-w-[900px] text-secondary-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out our upcoming Model UN events and conferences. Join us to expand your global perspective and
                  develop your leadership skills.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" style={{paddingTop : "8vh"}}>
            {eventData.map((event, index) => { 
              return (
              <Card key={index} data-aos="zoom-in" aos-duration="1500">
                <CardHeader>
                  <CardTitle>{(event as any).Event.title[0].plain_text}</CardTitle>
                  <CardDescription>
                  {(event as any).Description.rich_text[0].plain_text}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <CalendarDaysIcon className="w-5 h-5 text-muted-foreground" />
                    <span className="text-muted-foreground">{(event as any)["Date & Time"].rich_text[0].plain_text}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <LocateIcon className="w-5 h-5 text-muted-foreground" />
                    <span className="text-muted-foreground">{(event as any).Location.rich_text[0].plain_text}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link
                    target="_blank"
                    href={(event as any)['Signup Link'].url}
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                   {(event as any)['Link Title'].rich_text[0].plain_text}
                  </Link>
                </CardFooter>
              </Card>
            );})}
            </div>
          </div>
        </section>
        </div>

        {/* Resources */}
        <div id="resources">
        <section className="w-full py-12 md:py-24 lg:py-32" style={{padding : "10vw", minHeight: "100vh"}} data-aos="fade-up" data-aos-duration="1000">
          <div className="container grid gap-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm" >New to MUN?</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">MUN Resources</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore a curated collection of resources to enhance your Model United Nations experience.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" style={{paddingTop : "5vh"}}>
              {resourceData.map((resource, index) => {
                return (
                  <Card key={index} data-aos="zoom-in" aos-duration="1500">
                  <CardHeader>
                    <CardTitle>
                      <GlobeIcon className="w-7 h-7 mr-2"/>
                      <p style={{paddingTop : "3vh"}}>{(resource as any)['Resource Name'].title[0].plain_text}</p>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                    {(resource as any).Description.rich_text[0].plain_text}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href={(resource as any)['File/Website Link'].url} target="_blank" className="flex items-center group hover:underline underline-offset-4" prefetch={false}>
                      {(resource as any)['Link Title'].rich_text[0].plain_text}{" "}
                      <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </CardFooter>
                </Card>
                )})}
            </div>
          </div>
        </section>
        </div>

        {/* Get Involved */}
        <div>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted" style={{minHeight: "93vh", padding : "10vw"}} data-aos="fade-up" data-aos-duration="1000">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm" style={{backgroundColor : "white"}}>Interested?</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get Involved</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Got questions? Fill out the form below — we would love to be in
                  touch with more information.
                </p>
              </div>
            </div>
            <ContactForm />
          </div> 
        </section>
        </div>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  )
}

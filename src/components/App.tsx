"use client"
import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from "@/components/ui/card"
import ScrollTopButton from "@/components/ui/ScrollTopButton"
import ScrollDownButton from "@/components/ui/ScrollDownButton"
import { JSX, SVGProps, useEffect, useState } from "react"
import AOS from 'aos';

export function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <title>UWMUN</title>
      <link rel="icon" href="/assets/uwmun-page-logo.png" />
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
                <div className="flex items-center gap-4" style={{paddingBottom : "4rem;"}}>
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
              <div data-aos="zoom-in" aos-duration="1500" className="flex flex-col items-center justify-center space-y-4">
                <Avatar>
                <img src="assets/executive-placeholder.png" className="mx-auto" style={{borderRadius : "50%", width : "20%", height : "20%"}}/>
                </Avatar>
                <div className="space-y-1 text-center">
                  <h3 className="text-xl font-bold">Lorem Ipsum</h3>
                  <p className="text-muted-foreground">President</p>
                  <p className="text-muted-foreground">1B Legal Studies</p>
                </div>
              </div>
              <div data-aos="zoom-in" aos-duration="1500" className="flex flex-col items-center justify-center space-y-4">
                <Avatar>
                <img src="assets/executive-placeholder.png" className="mx-auto" style={{borderRadius : "50%", width : "20%", height : "20%"}}/>
                </Avatar>
                <div className="space-y-1 text-center">
                  <h3 className="text-xl font-bold">Lorem Ipsum</h3>
                  <p className="text-muted-foreground">Director of Events</p>
                  <p className="text-muted-foreground">2A Chemistry</p>
                </div>
              </div>
              <div data-aos="zoom-in" aos-duration="1500" className="flex flex-col items-center justify-center space-y-4">
                <Avatar>
                  <img src="assets/executive-placeholder.png" className="mx-auto" style={{borderRadius : "50%", width : "20%", height : "20%"}}/>
                </Avatar>
                <div className="space-y-1 text-center">
                  <h3 className="text-xl font-bold">Lorem Ipsum</h3>
                  <p className="text-muted-foreground">Director of Education</p>
                  <p className="text-muted-foreground">3A Computer Science</p>
                </div>
              </div>
              <div data-aos="zoom-in" aos-duration="1500" className="flex flex-col items-center justify-center space-y-4">
                <Avatar>
                  <img src="assets/executive-placeholder.png" className="mx-auto" style={{borderRadius : "50%", width : "20%", height : "20%"}}/>
                </Avatar>
                <div className="space-y-1 text-center">
                  <h3 className="text-xl font-bold">Lorem Ipsum</h3>
                  <p className="text-muted-foreground">Director of Finance</p>
                  <p className="text-muted-foreground">2B Accounting</p>
                </div>
              </div>
              <div data-aos="zoom-in" aos-duration="1500" className="flex flex-col items-center justify-center space-y-4">
                <Avatar>
                  <img src="assets/executive-placeholder.png" className="mx-auto" style={{borderRadius : "50%", width : "20%", height : "20%"}}/>
                </Avatar>
                <div className="space-y-1 text-center">
                  <h3 className="text-xl font-bold">Lorem Ipsum</h3>
                  <p className="text-muted-foreground">Director of Communications</p>
                  <p className="text-muted-foreground">4A Economics</p>
                </div>
              </div>
              <div data-aos="zoom-in" aos-duration="1500" className="flex flex-col items-center justify-center space-y-4">
                <Avatar>
                  <img src="assets/executive-placeholder.png" className="mx-auto" style={{borderRadius : "50%", width : "20%", height : "20%"}}/>
                </Avatar>
                <div className="space-y-1 text-center">
                  <h3 className="text-xl font-bold">Lorem Ipsum</h3>
                  <p className="text-muted-foreground">Director of Marketing</p>
                  <p className="text-muted-foreground">3B History</p>
                </div>
              </div>
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
              <Card data-aos="zoom-in" aos-duration="1500">
                <CardHeader>
                  <CardTitle>Winter 2024 Training Session</CardTitle>
                  <CardDescription>
                  Join us for the Winter 2024 Training Session to sharpen your MUN skills and prepare for upcoming conferences.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <CalendarDaysIcon className="w-5 h-5 text-muted-foreground" />
                    <span className="text-muted-foreground">January 12, @ 5:30 PM</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <LocateIcon className="w-5 h-5 text-muted-foreground" />
                    <span className="text-muted-foreground">RCH 111</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link
                    target="_blank"
                    href="https://forms.google.com"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    Free to Join!
                  </Link>
                </CardFooter>
              </Card>
              <Card data-aos="zoom-in" aos-duration="1500">
                <CardHeader>
                  <CardTitle>Weekly Crisis Night</CardTitle>
                  <CardDescription>
                  Participate in our Weekly Crisis Night to tackle simulated crises and enhance your rapid decision-making abilities.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <CalendarDaysIcon className="w-5 h-5 text-muted-foreground" />
                    <span className="text-muted-foreground">January 16, @ 7:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <LocateIcon className="w-5 h-5 text-muted-foreground" />
                    <span className="text-muted-foreground">ML 146</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link
                    target="_blank"
                    href="https://forms.google.com"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    Sign Up
                  </Link>
                </CardFooter>
              </Card>
              <Card data-aos="zoom-in" aos-duration="1500">
                <CardHeader>
                  <CardTitle>World War II Conference</CardTitle>
                  <CardDescription>
                  Dive into historical diplomacy at our World War II Conference, where you&apos;ll debate and resolve key wartime issues.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <CalendarDaysIcon className="w-5 h-5 text-muted-foreground" />
                    <span className="text-muted-foreground">February 10-11, @ 9:00 AM</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <LocateIcon className="w-5 h-5 text-muted-foreground" />
                    <span className="text-muted-foreground">QNC 2532</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link
                    target="_blank"
                    href="https://forms.google.com"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    Sign Up
                  </Link>
                </CardFooter>
              </Card>
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
              <Card data-aos="zoom-in" aos-duration="1500">
                <CardHeader>
                  <CardTitle>
                    <GlobeIcon className="w-7 h-7 mr-2"/>
                    <p style={{paddingTop : "3vh"}}>Best Delegate</p>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                  Explore the Best Delegate website for comprehensive MUN guides, tips, and resources.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="https://bestdelegate.com/" target="_blank" className="flex items-center group hover:underline underline-offset-4" prefetch={false}>
                    Visit Best Delegate{" "}
                    <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardFooter>
              </Card>
              <Card data-aos="zoom-in" aos-duration="1500">
                <CardHeader>
                  <CardTitle>
                    <BookIcon className="w-7 h-7 mr-2" />
                    <p style={{paddingTop : "3vh"}}>Training Session Slides</p>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                  Missed the training session? Access our training session slides for essential MUN strategies and insights.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="assets/training-session.pdf" target="_blank" className="flex items-center group hover:underline underline-offset-4" prefetch={false}>
                    Download Slides{" "}
                    <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardFooter>
              </Card>
              <Card data-aos="zoom-in" aos-duration="1500">
                <CardHeader>
                  <CardTitle>
                    <NewspaperIcon className="w-7 h-7 mr-2" />
                    <p style={{paddingTop : "3vh"}}>Example Resolution</p>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                  Review our example resolution to understand the structure and content of effective MUN documents.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="assets/example-resolution.pdf" target="_blank" className="flex items-center group hover:underline underline-offset-4" prefetch={false}>
                    View Sample Paper <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardFooter>
              </Card>
              <Card data-aos="zoom-in" aos-duration="1500">
                <CardHeader>
                  <CardTitle>
                    <BookOpenIcon className="w-7 h-7 mr-2" />
                    <p style={{paddingTop : "3vh"}}>Cheat Sheet</p>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                  Use our expressions cheat sheet to enhance your MUN vocabulary and diplomatic language skills.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="assets/cheat-sheet.pdf" target="_blank" className="flex items-center group hover:underline underline-offset-4" prefetch={false}>
                    Download Cheat Sheet{" "}
                    <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardFooter>
              </Card>
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
            <div className="mx-auto w-full max-w-sm space-y-2" data-aos="zoom-in" aos-duration="1500">
              <form className="flex flex-col gap-4" style={{paddingTop: "5vh"}}>
                <Input type="text" placeholder="Name" className="max-w-lg flex-1" />
                <Input type="email" placeholder="Email" className="max-w-lg flex-1" />
                <Textarea placeholder="Message" className="max-w-lg flex-1 min-h-[100px]" />
                <Button type="submit">Submit</Button>
              </form>
            </div>
          </div>
        </section>
        </div>
        
      </main>
      {/* Footer */}
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
    </div>
  )
}


// ICONS ------------------------------------------

function CalendarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}

function GlobeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  )
}

function ArrowRightIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

function BookIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}

function BookOpenIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  )
}

function NewspaperIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
      <path d="M18 14h-8" />
      <path d="M15 18h-5" />
      <path d="M10 6h8v4h-8V6Z" />
    </svg>
  )
}

function CalendarDaysIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  )
}

function LocateIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
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

function LinkedinIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="white"
      stroke="currentColor"
      strokeWidth="0"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function InstagramIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function DiscordIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 16 16"
      fill="white"
      stroke="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
    <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>

    </svg>
  )
}

import { Button } from "@/components/ui/button";
import Heading from "./_componets/heading";
import Heroes from "./_componets/heroes";
import Footer from "./_componets/footer";
import TitleSection from "./_componets/title";
import Image from "next/image";
import { Divide } from "lucide-react";
import { CLIENTS, USERS } from "@/lib/constants";
import { randomUUID } from "crypto";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import CustomCard from "./_componets/custom-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardDescription, CardTitle } from "@/components/ui/card";

const HomePage = () => {
  return (

    <>
      {/* Hero */}
      <section>
        <div className="overflow-hidden flex flex-col items-center justify-center text-center mt-10 px:4 gap-10 max-w-5xl">

          <TitleSection pill="Your workspace perfected" title="prod platform" />

          <div>
            <Button variant="secondary"> Click me</Button>
          </div>

          {/* Hero Images */}
          <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]">
            <Image
              src="/reading.png"
              fill
              className="object-contain dark:hidden"
              alt="Reading"
            />
            <Image
              src="/reading-dark.png"
              fill
              className="object-contain hidden dark:block"
              alt="Reading"
            />

          </div>

          {/* Testimonials */}

          {/* <Heading /> */}
          {/* <Heroes /> */}
        </div >
      </section >

      {/* Institutions using*/}
      <section className="relative">
        <div className="overflow-hidden flex absolute  
        after:content[''] after:dark:from-brand/dark after:to-transparent after:from-background after-bg-gradient-to-l after:right-0 after:top-0 after:bottom-0 after:w-20 after:z-10 after:absolute
        before:content[''] before:dark:from-brand/dark before:to-transparent before:from-background before-bg-gradient-to-r before:left-0 before:bottom-0 before:top-0 before:w-20 before:z-10 before:absolute"
        >

          {[...Array(2)].map((arr) => <div
            key={arr} className="flex flex-nowrap animate-slide"> {CLIENTS.map((client) => (<div
              key={client.alt} className="relative w-[200px] m-20 shrink-0 flex items-center">

              <Image src={client.logo} alt={client.alt} width={200} height={100} className="object-contain max-w-none" >

              </Image>
            </div>))}
          </div>)}

        </div>
      </section >

      {/* Calendar image  */}
      <section
        className="flex justify-center items-center text-center flex-col relative px-4 py-48 sm:px-6"
      >

        {/* White gradient above image */}
        <div
          className="w-[30%] blur-[120px] rounded-full h-32 absolute bg-Primary-Purple/primary-purple-50 -z-10 top-82"
        />

        <TitleSection
          title="Keep track of your meetings all in one place"
          subheading="Capture your ideas, thoughts, and meeting notes in a structured and organized manner."
          pill="Features"
        />

        <div className="mt-10 max-w-[450px] sm:ml-0 rounded-2xl border-8 border-washed-purple-300 border-opacity-10">

          <Image src={"/cal.png"} alt="Banner" className="rounded-2xl" width={400} height={400} />
        </div>
      </section>


      {/* Testimonials */}
      <section className="relative">
        <div
          className="w-full
          blur-[120px]
          rounded-full
          h-32
          absolute
          bg-brand-primaryPurple/50
          -z-100
          top-56
        "
        />
        <div
          className="px-4 sm:px-6 flex flex-col overflow-x-hidden overflow-visible items-center justify-center text-center
        "
        >
          <TitleSection
            title="Trusted by all"
            subheading="Join thousands of satisfied users who rely on our platform for their 
            personal and professional productivity needs."
            pill="Testimonials"
          />
          {[...Array(2)].map((arr, index) => (
            <div
              key={randomUUID()}
              className={twMerge(
                clsx('mt-10 flex flex-nowrap gap-6 self-start', {
                  'flex-row-reverse': index === 1,
                  'animate-[slide_250s_linear_infinite]': true,
                  'animate-[slide_250s_linear_infinite_reverse]': index === 1,
                  'ml-[100vw]': index === 1,
                }),
                'hover:paused'
              )}
            >
              {USERS.map((testimonial, index) => (
                <CustomCard
                  key={testimonial.name}
                  className="w-[500px]
                  shrink-0s
                  rounded-xl
                  dark:bg-gradient-to-t
                  dark:from-border dark:to-background
                "
                  cardHeader={
                    <div
                      className="flex
                      items-center
                      gap-4
                  "
                    >
                      <Avatar>
                        <AvatarImage src={`/avatars/${index + 1}.png`} />
                        <AvatarFallback>AV</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-foreground">
                          {testimonial.name}
                        </CardTitle>
                        <CardDescription className="dark:text-washed-purple-800">
                          {testimonial.name.toLocaleLowerCase()}
                        </CardDescription>
                      </div>
                    </div>
                  }
                  cardContent={
                    <p className="dark:text-washed-purple-800">
                      {testimonial.message}
                    </p>
                  }
                ></CustomCard>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Footer  */}
      {/* < section >
        <Footer />
      </section > */}

    </>
  );
}


export default HomePage;
import { Button } from "@/src/components/ui/button";
import LoginButton from "./_componets/login-button";
import Heroes from "./_componets/heroes";
import Footer from "./_componets/footer";
import TitleSection from "./_componets/title";
import Image from "next/image";
import { Divide } from "lucide-react";
import { CLIENTS, PRICING_CARDS, PRICING_PLANS, USERS } from "@/src/lib/constants";
import { randomUUID } from "crypto";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import CustomCard from "./_componets/custom-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar";
import { CardContent, CardDescription, CardTitle } from "@/src/components/ui/card";

const HomePage = () => {
  return (

    <>
      {/* Hero */}
      <section className="flex justify-center items-center text-center flex-col relative " >
        <div className="overflow-hidden flex flex-col relative mt-10 px:4 gap-10 max-w-5xl justify-center items-center text-center ">

          <TitleSection pill="Your workspace perfected" title="prod platform" />

          {/* Login button  */}
          {/* <div>
            <LoginButton />
          </div> */}

          {/* Hero Images */}

          <div className="w-[400px] h-[200px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[800px]">
            <Image
              src="/appBanner.png"
              fill
              className="object-contain dark:hidden"
              alt="Reading"
            />
            <Image
              src="/appBanner.png"
              fill
              className="object-contain hidden dark:block"
              alt="Reading"
            />

          </div>
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
        className="flex flex-col relative justify-center items-center text-center px-4 py-48 sm:px-6"
      >

        {/* White gradient above image */}
        <div
          className="w-[15%] blur-[160px] rounded-full h-28 absolute bg-Primary-Purple/primary-purple-50 -z-10"
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
      {/* <section className="relative">
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
                  bg-brand-primaryPurple/600
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
      </section> */}

      {/* Pricing cards */}
      <section className="flex flex-col relative justify-center items-center text-center px-4 sm:px-6">

        {/* White gradient above image */}
        <div className="w-[10%] blur-[250px] rounded-full h-12 absolute bg-Primary-Purple/primary-purple-50" />

        <TitleSection
          title="The Perfect Plan For You"
          subheading="Experience all the benefits of our platform. Select a plan that suits your needs and take your productivity to new heights."
          pill="Pricing"
        />

        {/* White gradient above image */}
        <div
          className="w-[20%] blur-[160px] rounded-full h-32 absolute bg-Primary-Purple/primary-purple-50 -z-50"
        />

        <div
          className="flex 
        flex-col-reverse
        sm:flex-row
        gap-4
        justify-center
        sm:items-stretch
        items-center
        mt-10
        "
        >
          {PRICING_CARDS.map((card) => (
            <CustomCard
              key={card.planType}
              className={clsx(
                'w-[300px] rounded-2xl dark:bg-black/60 background-blur-3xl relative',
                {
                  'border-brand-primaryPurple/70':
                    card.planType === PRICING_PLANS.proplan,
                }
              )}
              cardHeader={
                <CardTitle
                  className="text-2xl
                  font-semibold
              "
                >
                  {card.planType === PRICING_PLANS.proplan && (
                    <>
                      <div
                        className="hidden dark:block w-full blur-[120px] rounded-full h-32
                        absolute
                        bg-brand-primaryPurple/80
                        -z-10
                        top-0
                      "
                      />
                      <Image
                        src={"/icons/Diamond.svg"}
                        alt="Pro Plan Icon"
                        className="absolute top-6 right-6"
                        width={50} height={50}
                      />
                    </>
                  )}
                  {card.planType}
                </CardTitle>
              }
              cardContent={
                <CardContent className="p-0">
                  <span
                    className="font-normal 
                    text-2xl
                "
                  >
                    ${card.price}
                  </span>
                  {+card.price > 0 ? (
                    <span className="dark:text-washed-purple-800 ml-1">
                      /mo
                    </span>
                  ) : (
                    ''
                  )}
                  <p className="dark:text-washed-purple-800">
                    {card.description}
                  </p>
                  <Button
                    variant="default"
                    className="whitespace-nowrap w-full mt-4"
                  >
                    {card.planType === PRICING_PLANS.proplan
                      ? 'Go Pro'
                      : 'Get Started'}
                  </Button>
                </CardContent>
              }
              cardFooter={
                <ul
                  className="font-normal
                  flex
                  mb-2
                  flex-col
                  gap-4
                "
                >
                  <small>{card.highlightFeature}</small>
                  {card.freatures.map((feature) => (
                    <li
                      key={feature}
                      className="flex
                      items-center
                      gap-2
                    "
                    >
                      <Image
                        src={"/icons/check.svg"}
                        alt="Check Icon"
                        width={20} height={20}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              }
            />
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
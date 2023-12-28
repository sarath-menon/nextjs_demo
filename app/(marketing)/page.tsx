import { Button } from "@/components/ui/button";
import Heading from "./_componets/heading";
import Heroes from "./_componets/heroes";
import Footer from "./_componets/footer";
import TitleSection from "./_componets/title";
import Image from "next/image";
import { Divide } from "lucide-react";
import { CLIENTS } from "@/lib/constants";

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

      {/* Testimonials */}
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


      {/* Footer  */}
      {/* < section >
        <Footer />
      </section > */}

    </>
  );
}


export default HomePage;
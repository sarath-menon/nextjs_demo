import { Button } from "@/components/ui/button";
import Heading from "./_componets/heading";
import Heroes from "./_componets/heroes";
import Footer from "./_componets/footer";
import TitleSection from "./_componets/title";
import Image from "next/image";

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

      </section>


      {/* Footer  */}
      <section>
        <Footer />
      </section>

    </>
  );
}


export default HomePage;
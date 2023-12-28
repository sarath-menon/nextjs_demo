import { Button } from "@/components/ui/button";
import Heading from "./_componets/heading";
import Heroes from "./_componets/heroes";
import Footer from "./_componets/footer";
import TitleSection from "./_componets/title";

const HomePage = () => {
  return (
    <section>
      <div className="flex 
      flex-col 
      items-center 
      justify-center 
      text-center 
      mt-10
      px:4
      sm:px-6 
      sm:flex
      sm:flex-col
      gap-10">

        <TitleSection pill="Your workspace perfected" title="prod platform" />

        {/* <Heading /> */}
        {/* <Heroes /> */}
      </div>

      {/* <Footer /> */}
    </section>
  );
}


export default HomePage;
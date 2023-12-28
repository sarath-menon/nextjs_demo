import { Button } from "@/components/ui/button";
import Heading from "./_componets/heading";
import Heroes from "./_componets/heroes";
import Footer from "./_componets/footer";

const HomePage = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
        <Heading />
        <Heroes />
      </div>

      <Footer />
    </section>
  );
}


export default HomePage;
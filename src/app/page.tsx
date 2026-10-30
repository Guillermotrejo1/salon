import About from "@/components/sections/About";
import Booking from "@/components/sections/Booking";
import Faq from "@/components/sections/Faq";
import Gallery from "@/components/sections/Gallery";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <main className="grid gap-16">
      <Hero/>
      {/* <Services />
      <Gallery/>
      <About/>
      <Faq />
      <Booking /> */}
    </main>
  );
}

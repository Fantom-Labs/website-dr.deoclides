import About from "@/components/sections/About";
import Approach from "@/components/sections/Approach";
import Convenios from "@/components/sections/Convenios";
import Faq from "@/components/sections/Faq";
import Hero from "@/components/sections/Hero";
import Locations from "@/components/sections/Locations";
import Specialties from "@/components/sections/Specialties";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <About />
      <Specialties />
      <Approach />
      <Convenios />
      <Faq />
      <Testimonials />
      <Locations />
    </main>
  );
}

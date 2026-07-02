import About from "@/components/sections/About";
import Approach from "@/components/sections/Approach";
import Faq from "@/components/sections/Faq";
import Hero from "@/components/sections/Hero";
import Specialties from "@/components/sections/Specialties";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <About />
      <Specialties />
      <Approach />
      <Faq />
    </main>
  );
}

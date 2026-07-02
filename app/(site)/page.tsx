import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Specialties from "@/components/sections/Specialties";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <About />
      <Specialties />
    </main>
  );
}

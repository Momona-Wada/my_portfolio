import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="bg-light-beige min-h-screen">
        <Header />
        <main className="flex flex-col justify-center pt-10">
          <HeroSection />
          <Projects />
        </main>
    </div>
  );
}

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="bg-light-beige min-h-screen">
        <Header />
        <main className="flex justify-center">
          <HeroSection />
        </main>
    </div>
  );
}

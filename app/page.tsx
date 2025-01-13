import AboutSection from "@/components/AboutSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import Hero from "@/components/Hero";
import Videoplayer from "@/components/Videoplayer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Videoplayer />
      <AboutSection />
      <FeaturedProjects />
    </main>
  );
}

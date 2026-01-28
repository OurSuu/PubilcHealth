import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SolutionSet from "@/components/SolutionSet";
import Safety from "@/components/Safety";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { productSets } from "@/data/products";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Solution Sets */}
      {productSets.map((set, index) => (
        <SolutionSet key={set.id} set={set} index={index} />
      ))}

      <Safety />
      <Contact />
      <Footer />
    </main>
  );
}

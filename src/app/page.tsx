import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Benefit from "@/components/Benefit";
import CitiesSection from "@/features/cities/sections/CitiesSection";
import FreshspaceSection from "@/features/offices/sections/FreshspaceSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <CitiesSection />
      <Benefit />
      <FreshspaceSection />
    </>
  );
}

import Hero from "@/components/Hero";
import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/RightSide";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-300">
      <Hero />
      <section className="body-container flex md:flex-col sm:flex-col lg:flex-row sm:px-5">
        <LeftSide />
        <RightSide />
      </section>
    </main>
  );
}

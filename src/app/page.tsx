import Hero from "@/components/Hero";
import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/RightSide";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-300">
      <Hero />
      <section className="flex flex-row">
        <LeftSide />
        <RightSide />
      </section>
    </main>
  );
}

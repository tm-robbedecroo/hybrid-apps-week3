import { Activities } from "@/components/sections/activities";
import { Contact } from "@/components/sections/contact";
import { Header } from "@/components/sections/header";
import { Skills } from "@/components/sections/skills";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <main>
      <Header />
      <Activities />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}

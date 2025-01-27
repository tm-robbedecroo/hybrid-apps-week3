import { Navigation } from "@/components/portfolio/navigation";
import { PropsWithChildren } from "react";

export default function PagesLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Navigation />

      {children}
    </>
  );
}

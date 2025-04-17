import LayoutContainer from "@/components/layout/LayoutContainer";
import Navbar from "@/components/layout/Navbar";
import { PropsWithChildren } from "react";

export default function SiteLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <div className="flex h-full flex-col">
      <Navbar />
      <div className="flex-1">
        <LayoutContainer>{children}</LayoutContainer>
      </div>
    </div>
  );
}

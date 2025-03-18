import { ReactNode } from "react";
import { MainNav } from "./MainNav";
import { Footer } from "@/components/layout/Footer";
import classNames from "classnames";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export function Layout({ children, className }: LayoutProps) {
  return (
    <div className={classNames("min-h-screen flex flex-col", className)}>
      <MainNav />
      <main className={classNames(
        "flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent",
        "hover:scrollbar-thumb-white/20 pt-[72px]",
        className
      )}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

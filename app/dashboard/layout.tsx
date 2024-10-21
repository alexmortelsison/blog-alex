import Link from "next/link";
import { ReactNode } from "react";
import Logo from "@/public/logo.svg";
import Image from "next/image";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <section className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Image src={Logo} alt="logo" className="size-8" />
              <h3 className="text-2xl">
                Blog<span className="text-primary">Alex</span>
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

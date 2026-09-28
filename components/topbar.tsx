import Image from "next/image";
import Link from "next/link";

export function Topbar() {
  return (
    <header className="sticky top-0 z-20 border-b backdrop-blur-md border-black/10">
      <div className="px-4 md:px-8 h-12 md:h-16 flex items-center justify-between">
        <Link href="/">
          <Image
            src={"/logo.png"}
            alt="logo"
            height={512}
            width={512}
            className="h-12 md:h-16 w-fit"
          />
        </Link>
        <nav className="font-medium text-xs md:text-sm flex gap-4 md:gap-8">
          <a href="#work">Work</a>
          <a href="#about">About</a>
        </nav>
      </div>
    </header>
  );
}

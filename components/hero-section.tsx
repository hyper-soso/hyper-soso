import HomeLogoScene from "@/app/home-logo-scene";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative p-4 md:p-8 pb-8 md:pb-16 hologram-bg isolate overflow-hidden rounded-lg">
      <div className="h-48 md:h-64 lg:h-96">
        <HomeLogoScene />
      </div>
      <hgroup className="mix-blend-multiply text-slate-700">
        <h1 className="text-center text-4xl md:text-8xl leading-tight font-semibold tracking-tight">
          So ordinary.
          <br />
          So <span className="georgia">extra.</span>
        </h1>
        <p className="mt-4 md:mt-8 text-center text-base md:text-lg leading-relaxed">
          소소한 일상을 특별하게
        </p>
      </hgroup>
      <Image
        src="/grain_hologram.jpg"
        fill
        sizes="100vw"
        alt=""
        className="-z-10 pointer-events-none object-cover opacity-30"
      />
    </section>
  );
}

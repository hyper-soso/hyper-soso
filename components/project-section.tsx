import { PROJECTS } from "@/constants/project-constants";
import Image from "next/image";

export function ProjectSection() {
  return (
    <section id="work">
      <p className="mx-auto max-w-3xl text-center text-lg md:text-2xl leading-relaxed font-medium text-balance break-keep">
        HyperSoso는 기술과 디자인으로 더 나은 일상을 만듭니다.
      </p>
      <ol className="mt-8 md:mt-16 grid gap-8 md:grid-cols-3">
        {PROJECTS.map((item) => (
          <li key={item.id}>
            <div className="relative flex aspect-4/3 items-center justify-center overflow-hidden rounded-lg">
              <Image
                src={item.bg_Url}
                alt="bg"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
              <Image
                src={item.imgUrl}
                alt="icon"
                height={512}
                width={512}
                quality={100}
                sizes="192px"
                className="z-10 h-auto w-1/2 max-w-48"
              />
            </div>
            <hgroup className="mt-4">
              <h4 className="text-lg md:text-2xl font-semibold">
                {item.title}:
              </h4>
              <p className="md:mt-4 max-w-md text-sm md:text-base break-keep text-balance text-muted-foreground">
                {item.description}
              </p>
            </hgroup>
          </li>
        ))}
      </ol>
    </section>
  );
}

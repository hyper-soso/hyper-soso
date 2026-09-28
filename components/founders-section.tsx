import Image from "next/image";

const founders = [
  { id: "01", name: "김현석", role: "Founder", image: "/cto.jpg" },
  { id: "02", name: "강지은", role: "Strategic Advisor", image: "/ufo.jpg" },
];

export function FoundersSection() {
  return (
    <section className="pt-8 md:pt-16 grid gap-4 md:gap-8 border-t md:grid-cols-3">
      <hgroup>
        <h2 className="text-2xl md:text-4xl font-semibold">Meet the team</h2>
        <p className="md:mt-4 text-sm md:text-base text-muted-foreground">
          함께 만드는 사람들.
        </p>
      </hgroup>
      <ul className="md:col-span-2 grid grid-cols-2 gap-4 md:gap-8">
        {founders.map((founder) => (
          <li key={founder.id}>
            <div className="relative aspect-4/5 overflow-hidden rounded-lg">
              <Image
                src={founder.image}
                alt={`${founder.name} ${founder.role}`}
                fill
                sizes="(min-width: 1280px) 384px, (min-width: 768px) 33vw, 50vw"
                className="object-cover"
              />
            </div>
            <hgroup className="mt-2">
              <h3 className="text-lg md:text-2xl font-semibold">
                {founder.name}
              </h3>
              <span className="text-sm md:text-base block font-medium text-muted-foreground">
                {founder.role}
              </span>
            </hgroup>
          </li>
        ))}
      </ul>
    </section>
  );
}

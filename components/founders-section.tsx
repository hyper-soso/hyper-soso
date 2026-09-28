const founders = [
  { id: "01", name: "김현석", role: "개발" },
  { id: "02", name: "강지은", role: "집안일" },
];

export function FoundersSection() {
  return (
    <section className="pt-8 md:pt-16 grid gap-8 border-t md:grid-cols-3">
      <hgroup>
        <h2 className="text-2xl md:text-4xl font-medium tracking-tight">Founders</h2>
        <p className="mt-4 text-sm md:text-base text-muted-foreground">
          함께 만드는 사람들.
        </p>
      </hgroup>
      <ul className="md:col-span-2 grid grid-cols-2 gap-4 md:gap-8">
        {founders.map((founder) => (
          <li key={founder.id}>
            <div
              className="flex aspect-[4/3] items-center justify-center rounded-lg border border-dashed border-border"
              aria-label={`${founder.name} 사진 준비 중`}
            >
              <span className="text-sm text-muted-foreground">
                사진 준비 중
              </span>
            </div>
            <div className="mt-4">
              <h3 className="text-lg md:text-2xl font-medium">
                {founder.name}
              </h3>
              <span className="mt-4 text-sm md:text-base block text-muted-foreground">
                {founder.role}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

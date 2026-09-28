export function AboutSection() {
  return (
    <section
      id="about"
      className="pt-16 md:pt-32 text-center border-t"
    >
      <hgroup>
        <h2 className="text-2xl md:text-4xl leading-normal font-semibold break-keep text-balance">
          <span className="text-muted-foreground">대단한 것보다,</span>
          <br />
          자꾸 쓰고 싶은 것.
        </h2>
        <p className="mx-auto mt-4 md:mt-8 max-w-sm text-sm md:text-base leading-relaxed break-keep text-balance text-muted-foreground">
          Hyper SOSO는 일상의 작은 순간을 위한 서비스를 만듭니다.
        </p>
      </hgroup>
    </section>
  );
}

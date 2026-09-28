export function Footer() {
  return (
    <footer className="mt-16 md:mt-32 px-4 md:px-8">
      <div className="py-8 flex flex-wrap items-center justify-between gap-4 md:gap-8 border-t">
        <a href="#top" className="text-lg font-semibold tracking-tight">
          Hyper SOSO
        </a>
        <span className="w-full md:w-auto text-xs order-last md:order-none text-muted-foreground">
          © {new Date().getFullYear()} Hyper SOSO
        </span>
        <a href="#top" className="text-sm flex items-center gap-4 transition-colors text-muted-foreground hover:text-foreground">
          맨 위로 <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}

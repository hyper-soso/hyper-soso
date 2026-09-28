import Image from "next/image";
import Link from "next/link";

type TopBarProps = {
  product?: string;
  section?: string;
};

export default function TopBar({ product, section }: TopBarProps) {
  return (
    <header className="px-5 sm:px-8 h-16 flex items-center justify-between border-b border-black/10">
      <Link
        href="/"
        aria-label="HyperSoso home"
        className="relative h-8 w-16 block overflow-hidden"
      >
        <Image
          src="/logo.png"
          alt="HyperSoso"
          fill
          priority
          sizes="76px"
          className="object-cover"
        />
      </Link>

      {product ? (
        <div
          className="text-[13px] flex items-center gap-2 text-[#202123]"
          aria-label="Current page"
        >
          <span>{product}</span>
          {section ? (
            <>
              <span
                className="hidden sm:inline text-[#6f6f6b]"
                aria-hidden="true"
              >
                /
              </span>
              <span className="hidden sm:inline text-[#6f6f6b]">{section}</span>
            </>
          ) : null}
        </div>
      ) : null}
    </header>
  );
}

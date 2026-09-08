import Image from "next/image";
import Link from "next/link";

type TopBarProps = {
  product?: string;
  section?: string;
};

export default function TopBar({ product, section }: TopBarProps) {
  return (
    <header className="flex h-16 items-center justify-between border-b border-black/10 px-5 sm:px-8">
      <Link
        href="/"
        aria-label="HyperSoSo home"
        className="relative block h-8 w-16 overflow-hidden"
      >
        <Image
          src="/logo.png"
          alt="HyperSoSo"
          fill
          priority
          sizes="76px"
          className="object-cover"
        />
      </Link>

      {product ? (
        <div
          className="flex items-center gap-2 text-[13px] text-[#202123]"
          aria-label="Current page"
        >
          <span>{product}</span>
          {section ? (
            <>
              <span
                className="hidden text-[#6f6f6b] sm:inline"
                aria-hidden="true"
              >
                /
              </span>
              <span className="hidden text-[#6f6f6b] sm:inline">{section}</span>
            </>
          ) : null}
        </div>
      ) : null}
    </header>
  );
}

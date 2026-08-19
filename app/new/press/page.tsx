import type { Metadata } from "next";
import Image from "next/image";
import { SiteChrome } from "../../site-chrome";

export const metadata: Metadata = {
  title: "Press — Shayon Sengupta",
  description:
    "Press and speaking for Shayon Sengupta, General Partner and Co-Head of Venture at Multicoin Capital.",
};

const speaking = [
  {
    title: "Crypto’s Rebirth Moment",
    detail: "Lightspeed, March 10, 2026",
    href: "https://solana.com/podcasts/lightspeed/episodes/crypto-s-rebirth-moment-tushar-shayon-and-spencer-2026-03-10",
  },
  {
    title: "Internet Labor Market",
    detail: "Solana Accelerate APAC, Hong Kong, February 11, 2026",
    href: "https://solana.com/accelerate/hong-kong/agenda",
  },
  {
    title: "Internet Labor Markets",
    detail: "Multicoin Summit, December 2025",
    href: "https://www.youtube.com/watch?v=vsg5-oAJvkw",
  },
  {
    title: "The Ultimate Jito Thesis",
    detail: "Lightspeed, March 28, 2025",
    href: "https://solana.com/podcasts/lightspeed/episodes/the-ultimate-jito-thesis-shayon-sengupta-2025-03-28",
  },
  {
    title: "ICONs: Inference Via Crypto-Orchestrated Networks",
    detail: "Multicoin Summit, November 2024",
    href: "https://multicoin.capital/2024/12/13/highlights-from-the-2024-multicoin-summit/",
  },
  {
    title: "Exploring the Design Space of DePIN Networks",
    detail: "Multicoin Summit, September 2023",
    href: "https://multicoin.capital/2023/10/06/discussions-from-the-2023-multicoin-summit/",
  },
];

export default function Press() {
  return (
    <SiteChrome>
      <div className="relative mb-8 inline-block">
        <Image
          src="/shayon.jpg"
          alt="Shayon Sengupta"
          width={700}
          height={700}
          priority
          className="h-[148px] w-[148px] rounded-[4px] object-cover object-top"
        />
        <a
          href="/shayon.jpg"
          download="shayon-sengupta.jpg"
          aria-label="Download headshot"
          title="Download headshot"
          className="absolute bottom-1.5 right-1.5 flex h-7 w-7 items-center justify-center rounded-full no-underline shadow-sm"
          style={{ background: "rgba(255,255,255,0.94)", color: "#1a1a1a" }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        </a>
      </div>

      <section>
        <p className="mb-4">
          Shayon Sengupta is General Partner and Co-Head of Venture at
          Multicoin Capital. He joined in 2021 and helped grow the firm’s AUM
          into the billions.
        </p>
        <p className="mb-4">
          He works across public and private markets. In public markets he
          drives thesis formation, asset coverage, and on-chain diligence. In
          private markets he identifies, sources, and leads deals across DePIN,
          compute, and on-chain infrastructure, and helps drive portfolio
          strategy across the firm’s funds. He was one of the key architects of
          the firm’s updated 2026 investment thesis.
        </p>
        <p className="mb-4">
          He studied Mathematics at the University of Chicago. Previously he
          worked at Abodewell, a quantitative market maker in residential real
          estate, and on the Strategy and Business Development team at SAP. He
          speaks regularly on podcasts and at industry events.
        </p>
      </section>

      <section>
        <p
          className="mb-4 mt-10 text-[0.85rem] font-semibold uppercase tracking-[0.05em]"
          style={{ color: "var(--text-secondary)" }}
        >
          Speaking
        </p>
        <ul>
          {speaking.map((item) => (
            <li key={item.title} className="mb-6">
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[1.1rem] font-medium no-underline"
                style={{ fontFamily: "var(--font-newsreader), Newsreader, serif" }}
              >
                {item.title}
              </a>
              <p className="mt-0.5 text-[0.85rem]" style={{ color: "var(--text-secondary)" }}>
                {item.detail}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 border-t pt-10" style={{ borderColor: "var(--border)" }}>
        <h2
          className="text-[1.35rem] font-medium tracking-tight"
          style={{ fontFamily: "var(--font-newsreader), Newsreader, serif", color: "var(--text)" }}
        >
          Contact
        </h2>
        <div className="mt-7 grid gap-8 sm:grid-cols-3">
          <a href="mailto:johnrobert@multicoin.capital" className="group no-underline">
            <p className="text-[13px]" style={{ color: "var(--text-secondary)" }}>
              Press and speaking
            </p>
            <p className="mt-2 text-[14.5px] group-hover:underline" style={{ color: "var(--text)" }}>
              johnrobert@multicoin.capital
            </p>
          </a>
        </div>
      </section>
    </SiteChrome>
  );
}

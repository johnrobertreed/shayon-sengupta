import Image from "next/image";

const investments = [
  {
    name: "Hyperliquid",
    href: "https://multicoin.capital/2026/06/25/hyperliquid-hype-analysis-and-valuation/",
    text: "HYPE is a large position in Multicoin’s liquid fund. Sengupta co-authored the public analysis published on June 25, 2026. He was instrumental in the investment.",
  },
  {
    name: "Jito",
    href: "https://multicoin.capital/2025/03/04/jito-asset-report/",
    text: "Multicoin has a significant position in JTO across its hedge and venture funds. Sengupta co-authored the public asset report published on March 4, 2025. He was instrumental in the investment.",
  },
  {
    name: "io.net",
    href: "https://multicoin.capital/2024/03/05/building-the-internet-of-gpus/",
    text: "On March 5, 2024, Multicoin announced that it led the seed and participated in the Series A. Sengupta wrote the announcement.",
  },
  {
    name: "Geodnet",
    href: "https://multicoin.capital/2025/02/25/where-are-all-the-robots/",
    text: "On February 25, 2025, Multicoin led an $8 million strategic acquisition of GEOD. Sengupta wrote the announcement. He was instrumental in the investment.",
  },
  {
    name: "Pyth",
    href: "https://multicoin.capital/2023/12/14/oracles-and-the-new-frontier-for-application-owned-orderflow-auctions/",
    text: "On December 14, 2023, Multicoin announced its investment in Pyth Network. Sengupta wrote the announcement.",
  },
  {
    name: "Solana",
    href: "https://multicoin.capital/2025/01/22/the-solana-thesis-internet-capital-markets/",
    text: "Multicoin has been investing in SOL and the Solana ecosystem since the seed round in May 2018. Sengupta was instrumental in the investment.",
  },
];

const writing = [
  {
    title: "Hyperliquid (HYPE) Analysis & Valuation",
    date: "June 25, 2026",
    href: "https://multicoin.capital/2026/06/25/hyperliquid-hype-analysis-and-valuation/",
  },
  {
    title: "RWAs Are Just Built Different",
    date: "March 19, 2026",
    href: "https://multicoin.capital/2026/03/19/rwas-are-just-built-different/",
  },
  {
    title: "Internet Labor Markets",
    date: "March 10, 2026",
    href: "https://multicoin.capital/2026/03/10/internet-labor-markets/",
  },
  {
    title: "Adverse Selection Rules Everything Around Me",
    date: "February 17, 2026",
    href: "https://multicoin.capital/2026/02/17/adverse-selection-rules-everything-around-me/",
  },
  {
    title: "ACE Is The Place With The Helpful Value Capture",
    date: "February 10, 2026",
    href: "https://multicoin.capital/2026/02/10/ace-is-the-place-with-the-helpful-value-capture/",
  },
  {
    title: "Multicoin Capital’s Investment Thesis",
    date: "February 6, 2026",
    href: "https://multicoin.capital/2026/02/06/multicoin-capitals-investment-thesis/",
  },
  {
    title: "Jito (JTO) Asset Report",
    date: "March 4, 2025",
    href: "https://multicoin.capital/2025/03/04/jito-asset-report/",
  },
  {
    title: "Inverting The Human-Agent Relationship",
    date: "January 30, 2025",
    href: "https://multicoin.capital/2025/01/30/inverting-the-human-agent-relationship/",
  },
  {
    title: "Publisher-Exchanges: Consumer Applications and the Attention Theory of Value",
    date: "March 12, 2024",
    href: "https://multicoin.capital/2024/03/12/publisher-exchanges-consumer-applications-and-the-attention-theory-of-value/",
  },
  {
    title: "The DeFi Stack",
    date: "November 24, 2020",
    href: "https://multicoin.capital/2020/11/24/the-defi-stack/",
  },
];

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

const contacts = [
  {
    label: "Press and speaking",
    email: "johnrobert@multicoin.capital",
  },
  {
    label: "Startup pitches",
    email: "shayon@multicoin.capital",
  },
];

export default function Home() {
  return (
    <div className="classic-shell min-h-screen">
      <div className="h-px bg-gold" />

      <div className="mx-auto max-w-[760px] px-6 pb-20 pt-12 sm:px-8 sm:pt-16">
        <header className="flex flex-col gap-8 sm:flex-row sm:items-end sm:gap-12">
          <Image
            src="/shayon.jpg"
            alt="Shayon Sengupta"
            width={700}
            height={700}
            priority
            className="h-[200px] w-[200px] shrink-0 border border-rule object-cover object-top"
          />
          <div className="pb-0.5">
            <h1 className="font-serif text-[2.15rem] font-medium leading-[1.15] tracking-tight text-ink sm:text-[2.55rem]">
              Shayon Sengupta
            </h1>
            <p className="mt-4 font-serif text-[1.25rem] font-normal leading-snug text-ink">
              General Partner &amp; Co-Head of Venture
            </p>
            <p className="mt-1 font-serif text-[1.05rem] font-normal text-mute">
              Multicoin Capital
            </p>
          </div>
        </header>

        <section className="mt-14 space-y-5 border-t border-rule pt-10 text-[16.5px] leading-[1.65] text-ink sm:mt-16">
          <p>
            Shayon Sengupta is General Partner and Co-Head of Venture at
            Multicoin Capital. He joined in 2021 and was named Investment
            Partner in March 2023 and promoted to General Partner and Co-Head
            of Venture in March 2026.
          </p>
          <p>
            He works across public and private markets. In public markets he
            drives thesis formation, asset coverage, and on-chain diligence.
            In private markets he identifies, sources, and leads deals across
            DePIN, compute, and on-chain infrastructure, and helps drive
            portfolio strategy across the firm’s funds. Alongside Spencer
            Applebaum and Tushar Jain, he was a primary author of the firm’s
            updated 2026 investment thesis. His writing covers on-chain market
            microstructure, internet labor markets, and decentralized physical
            infrastructure.
          </p>
          <p>
            He studied Mathematics at the University of Chicago. Previously he
            worked at Abodewell, a quantitative market maker in residential
            real estate, and on the Strategy and Business Development team at
            SAP. He speaks regularly on podcasts and at industry events.
          </p>
        </section>

        <section className="mt-16 border-t border-rule pt-10">
          <h2 className="font-serif text-[1.35rem] font-medium tracking-tight text-ink">
            Selected investments
          </h2>
          <ul className="mt-7 space-y-7">
            {investments.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] font-medium text-ink hover:text-navy"
                >
                  {item.name}
                </a>
                <p className="mt-1.5 text-[15px] leading-relaxed text-mute">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-[14.5px] leading-relaxed text-mute">
            He was instrumental in several of the firm’s investments, including
            Dune, Drift, Fuse, fun.xyz, Geodnet, Helium, Hyperliquid, Jito,
            Kamino, LI.FI, Render, Sei, and Solana. The firm’s full list of
            investments is on the{" "}
            <a
              href="https://multicoin.capital/portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-rule underline-offset-[0.18em] hover:text-navy"
            >
              portfolio page
            </a>
            .
          </p>
        </section>

        <section className="mt-16 border-t border-rule pt-10">
          <h2 className="font-serif text-[1.35rem] font-medium tracking-tight text-ink">
            Writing
          </h2>
          <ul className="mt-5">
            {writing.map((item) => (
              <li key={item.href} className="border-b border-rule first:border-t">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-baseline justify-between gap-6 py-3.5 text-[15px] text-ink hover:text-navy"
                >
                  <span className="leading-snug">{item.title}</span>
                  <span className="shrink-0 tabular-nums text-mute">
                    {item.date}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16 border-t border-rule pt-10">
          <h2 className="font-serif text-[1.35rem] font-medium tracking-tight text-ink">
            Speaking
          </h2>
          <ul className="mt-5">
            {speaking.map((item) => (
              <li
                key={item.title + item.detail}
                className="border-b border-rule first:border-t"
              >
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col gap-0.5 py-3.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <span className="text-[15px] leading-snug text-ink hover:text-navy">
                    {item.title}
                  </span>
                  <span className="shrink-0 text-[13.5px] text-mute">
                    {item.detail}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16 border-t border-rule pt-10">
          <h2 className="font-serif text-[1.35rem] font-medium tracking-tight text-ink">
            Contact
          </h2>
          <div className="mt-7 grid gap-8 sm:grid-cols-3">
            {contacts.map((item) => (
              <a key={item.email} href={`mailto:${item.email}`} className="group">
                <p className="text-[13px] text-mute">
                  {item.label}
                </p>
                <p className="mt-2 text-[14.5px] text-ink group-hover:underline">
                  {item.email}
                </p>
              </a>
            ))}
          </div>
        </section>

        <footer className="mt-20 border-t border-rule pt-8">
          <div className="flex items-center justify-between text-[13.5px] text-mute">
            <a
              href="https://multicoin.capital/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-navy"
            >
              Multicoin Capital
            </a>
            <div className="flex gap-6">
              <a
                href="https://x.com/shayonsengupta"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-navy"
              >
                X
              </a>
              <a
                href="https://www.linkedin.com/in/shayon-sengupta-5496aa158/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-navy"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <p className="mt-6 text-[13px] text-mute">
            © 2026 Shayon Sengupta
          </p>
          <p className="mt-6 text-[12px] leading-relaxed text-mute/70">
            The information contained herein is not an offer to buy or sell any security. The views expressed in speaking engagements are my own and don&apos;t necessarily reflect those of my employer. Inclusion of the links to such engagements does not represent an endorsement of me by the sponsors. Speaking engagements and writings are a sample of complete works.
          </p>
        </footer>
      </div>
    </div>
  );
}

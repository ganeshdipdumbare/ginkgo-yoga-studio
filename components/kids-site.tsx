"use client"

import { Mail, MapPin, Phone } from "lucide-react"

const STUDIO_MAPS_URL = "https://maps.app.goo.gl/bnawkqrGpbJAu78Y8"
const STUDIO_EMAIL = "ginkgoyogaberlin@gmail.com"

/** Poster palette — cream, mint, peach, magenta, deep green */
const KIDS = {
  cream: "#FBF7F0",
  mint: "#B8D9C8",
  mintSoft: "#C9E4D6",
  peach: "#F3C9A8",
  peachDeep: "#E8A878",
  magenta: "#C23A6B",
  pinkNote: "#E8A0B8",
  leaf: "#2F5D4A",
  yellow: "#E8D48A",
  orange: "#E9A06A",
}

function MusicNotes() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.12] sm:opacity-[0.14]"
      viewBox="0 0 900 1100"
      aria-hidden
    >
      <g fill={KIDS.pinkNote}>
        <path
          className="kids-note kids-note-1"
          d="M160 200c0-10 8-22 22-22h16v200c-14 22-40 34-58 22s-20-40-6-56 36-18 48-8V200zm22 210c-18 0-32 14-32 32s14 32 32 32 32-14 32-32-14-32-32-32z"
        />
        <path
          className="kids-note kids-note-2"
          d="M700 140c0-8 6-18 18-18h14v170c-12 18-36 28-52 18s-16-34-4-46 28-14 40-6V140zm14 176c-14 0-26 12-26 26s12 26 26 26 26-12 26-26-12-26-26-26z"
        />
        <path
          className="kids-note kids-note-3"
          d="M120 720c10-48 56-78 100-62l14 4v140c-14 16-40 22-56 10s-16-34-2-46 32-14 46-4V680c-26-6-50 12-56 40z"
        />
        <path
          className="kids-note kids-note-4"
          d="M760 620c0-8 6-16 16-16h12v130c-10 14-28 22-42 14s-14-28-4-38 24-14 34-6V620zm12 138c-12 0-22 10-22 22s10 22 22 22 22-10 22-22-10-22-22-22z"
        />
      </g>
    </svg>
  )
}

type KidsSiteProps = {
  t: (key: string) => string
}

export function KidsSite({ t }: KidsSiteProps) {
  return (
    <div className="kids-site min-h-screen overflow-x-hidden" style={{ background: KIDS.cream, color: KIDS.leaf }}>
      <section
        id="little-humans"
        className="relative overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16"
      >
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 70% 50% at 80% 8%, ${KIDS.yellow}66 0%, transparent 55%),
              radial-gradient(ellipse 60% 45% at 10% 70%, ${KIDS.mint}55 0%, transparent 50%),
              ${KIDS.cream}
            `,
          }}
        />
        <MusicNotes />

        <div className="relative z-10 w-full max-w-lg mx-auto px-5 sm:px-6 flex flex-col items-center text-center gap-4 sm:gap-5">
          <div className="flex flex-col items-center gap-2 sm:gap-2.5 pt-2 sm:pt-4">
            <h1
              className="kids-fade-up text-[2.5rem] leading-[1.1] sm:text-5xl md:text-6xl font-light tracking-tight"
              style={{ color: KIDS.magenta }}
            >
              {t("kidsHeroTitle")}
            </h1>
            <p
              className="kids-fade-up kids-delay-1 text-base sm:text-xl font-light leading-snug px-1"
              style={{ color: KIDS.leaf }}
            >
              {t("kidsHeroTagline")}
            </p>
            <p
              className="kids-fade-up kids-delay-2 text-sm sm:text-base font-light max-w-md px-1"
              style={{ color: KIDS.magenta }}
            >
              {t("kidsHeroSub")}
            </p>
          </div>

          <h2 className="sr-only">{t("kidsEventTitle")}</h2>
          <img
            src="/images/little-humans-title.png?v=2"
            alt=""
            className="w-full max-w-[20rem] sm:max-w-md select-none"
            draggable={false}
          />

          <p
            className="w-full text-sm sm:text-lg font-medium leading-relaxed px-5 sm:px-7 py-4 sm:py-5 rounded-2xl sm:rounded-[1.5rem]"
            style={{ background: KIDS.mintSoft, color: KIDS.magenta }}
          >
            {t("kidsEventBlurb")}
          </p>

          <div
            className="w-full rounded-2xl sm:rounded-[1.75rem] px-5 sm:px-8 py-5 sm:py-7 text-left"
            style={{
              background: `linear-gradient(160deg, ${KIDS.peach} 0%, #f5d4b8 100%)`,
            }}
          >
            <p
              className="text-lg sm:text-2xl font-bold tracking-wide uppercase mb-1"
              style={{ color: KIDS.magenta }}
            >
              {t("kidsEventWhen")}
            </p>
            <p className="text-lg sm:text-2xl font-semibold mb-3.5 sm:mb-4" style={{ color: KIDS.leaf }}>
              {t("kidsEventTime")}
            </p>
            <ul className="space-y-2 text-sm sm:text-[1.05rem] font-medium" style={{ color: KIDS.leaf }}>
              <li className="flex gap-2">
                <span aria-hidden className="shrink-0">•</span>
                <span>{t("kidsEventAge")}</span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden className="shrink-0">•</span>
                <span>{t("kidsEventLang")}</span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden className="shrink-0">•</span>
                <span>{t("kidsEventCarrier")}</span>
              </li>
            </ul>
          </div>

          <p
            className="text-xl sm:text-3xl font-semibold tracking-wide px-2 leading-snug"
            style={{ color: KIDS.magenta }}
          >
            {t("kidsEventDropIn")}
          </p>

          <a
            href={STUDIO_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2.5 text-left w-full max-w-sm px-1 transition-opacity hover:opacity-85"
          >
            <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#E24B4B" }} />
            <div className="font-medium text-sm sm:text-base leading-relaxed min-w-0" style={{ color: KIDS.leaf }}>
              <div className="font-semibold">{t("kidsAddressStudio")}</div>
              <div className="break-words">{t("kidsAddressLine")}</div>
            </div>
          </a>

          <div className="w-full max-w-md flex flex-col gap-2">
            <a
              href={`mailto:${STUDIO_EMAIL}?subject=${encodeURIComponent("Little Humans Singing")}`}
              className="w-full flex items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-sm font-medium transition-transform hover:scale-[1.01] text-center"
              style={{ background: KIDS.mint, color: KIDS.leaf }}
            >
              <Mail className="w-4 h-4 flex-shrink-0" />
              {t("kidsContactWrite")}
            </a>
            <a
              href="tel:+4915129693732"
              className="w-full flex flex-col items-center justify-center gap-1 rounded-2xl px-5 py-3.5 text-sm font-medium transition-transform hover:scale-[1.01] text-center"
              style={{ background: KIDS.mintSoft, color: KIDS.leaf }}
            >
              <span className="inline-flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                {t("kidsContactCall")}
              </span>
              <span className="tabular-nums tracking-wide">{t("kidsContactPhone")}</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="pt-2 pb-8 sm:pb-10 text-center px-5" style={{ background: KIDS.cream }}>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-[#E8A0B8]/70 shadow-sm">
              <img
                src="/images/ginkgo-logo-kids.jpg"
                alt=""
                className="w-full h-full object-cover"
                style={{ clipPath: "circle(50% at 50% 50%)" }}
              />
            </div>
            <span className="text-base sm:text-lg font-light tracking-wide" style={{ color: KIDS.magenta }}>
              {t("kidsHeroTitle")}
            </span>
          </div>
          <p className="text-xs font-light" style={{ color: KIDS.leaf, opacity: 0.65 }}>
            {t("kidsFooterNote")}
          </p>
        </div>
      </footer>
    </div>
  )
}

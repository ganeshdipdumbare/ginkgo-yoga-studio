"use client"

import { useCallback, useEffect, useState } from "react"
import {
  Baby,
  Calendar,
  Globe,
  Heart,
  Mail,
  MapPin,
  Phone,
  Ban,
} from "lucide-react"

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
  orangeSoft: "#F6D4B0",
}

export type KidsOffering = "little-humans" | "kids-yoga"

function readOfferingFromHash(): KidsOffering {
  if (typeof window === "undefined") return "little-humans"
  const hash = window.location.hash.replace("#", "")
  if (hash === "kids-yoga") return "kids-yoga"
  return "little-humans"
}

function writeOfferingHash(offering: KidsOffering) {
  const url = new URL(window.location.href)
  url.hash = offering === "kids-yoga" ? "kids-yoga" : "little-humans"
  window.history.replaceState({}, "", url.toString())
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

function SparkLeaves() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.18]"
      viewBox="0 0 900 1100"
      aria-hidden
    >
      <g fill={KIDS.leaf}>
        <ellipse className="kids-blob" cx="120" cy="180" rx="48" ry="22" transform="rotate(-28 120 180)" />
        <ellipse className="kids-blob-slow" cx="780" cy="220" rx="56" ry="24" transform="rotate(22 780 220)" />
        <ellipse className="kids-blob" cx="820" cy="720" rx="42" ry="18" transform="rotate(-18 820 720)" />
      </g>
      <g stroke={KIDS.yellow} strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.85">
        <path className="kids-note kids-note-1" d="M200 120 l8-18 M208 112 l18 4 M208 112 l14-12" />
        <path className="kids-note kids-note-2" d="M700 90 l6-14 M706 84 l14 3 M706 84 l11-10" />
        <path className="kids-note kids-note-3" d="M160 640 l7-16 M167 632 l15 4 M167 632 l12-11" />
      </g>
    </svg>
  )
}

type KidsSiteProps = {
  t: (key: string) => string
}

export function KidsSite({ t }: KidsSiteProps) {
  const [offering, setOffering] = useState<KidsOffering>(readOfferingFromHash)

  const switchOffering = useCallback((next: KidsOffering) => {
    setOffering(next)
    writeOfferingHash(next)
  }, [])

  useEffect(() => {
    const onHash = () => {
      const next = readOfferingFromHash()
      setOffering(next)
    }
    window.addEventListener("hashchange", onHash)
    return () => window.removeEventListener("hashchange", onHash)
  }, [])

  const isYoga = offering === "kids-yoga"
  const accent = isYoga ? KIDS.leaf : KIDS.magenta
  const mailSubject = isYoga ? t("kidsYogaMailSubject") : "Little Humans Singing"

  return (
    <div
      className="kids-site min-h-screen overflow-x-hidden"
      style={{ background: KIDS.cream, color: KIDS.leaf }}
    >
      <section
        id={offering}
        className="relative overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16"
      >
        <div
          className="absolute inset-0 transition-colors duration-500"
          style={{
            background: isYoga
              ? `
                radial-gradient(ellipse 70% 50% at 82% 6%, ${KIDS.yellow}77 0%, transparent 55%),
                radial-gradient(ellipse 55% 40% at 8% 75%, ${KIDS.orangeSoft}88 0%, transparent 52%),
                ${KIDS.cream}
              `
              : `
                radial-gradient(ellipse 70% 50% at 80% 8%, ${KIDS.yellow}66 0%, transparent 55%),
                radial-gradient(ellipse 60% 45% at 10% 70%, ${KIDS.mint}55 0%, transparent 50%),
                ${KIDS.cream}
              `,
          }}
        />
        {isYoga ? <SparkLeaves /> : <MusicNotes />}

        <div className="relative z-10 w-full max-w-lg mx-auto px-5 sm:px-6 flex flex-col items-center text-center gap-4 sm:gap-5">
          <div className="flex flex-col items-center gap-2 sm:gap-2.5 pt-2 sm:pt-4">
            <div className="w-24 h-24 rounded-full overflow-hidden shadow-md border border-[#E8A0B8]/70">
              <img
                src="/images/ginkgo-kids-logo.png"
                alt="Ginkgo Kids Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <h1
              className="kids-fade-up text-[2.5rem] leading-[1.1] sm:text-5xl md:text-6xl font-light tracking-tight"
              style={{ color: accent }}
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
              style={{ color: accent }}
            >
              {t("kidsHeroSub")}
            </p>
          </div>

          <div
            className="kids-offering-tabs kids-fade-up kids-delay-3"
            role="tablist"
            aria-label={t("kidsTabAria")}
          >
            <div
              className={`kids-offering-tab-indicator ${isYoga ? "is-yoga" : "is-humans"}`}
              aria-hidden
            />
            <button
              type="button"
              role="tab"
              id="tab-little-humans"
              aria-selected={!isYoga}
              aria-controls="panel-little-humans"
              onClick={() => switchOffering("little-humans")}
              className={`kids-offering-tab ${!isYoga ? "is-active is-humans" : ""}`}
            >
              <span className="kids-offering-tab-dot is-humans" aria-hidden />
              <span>{t("kidsTabLittleHumans")}</span>
            </button>
            <button
              type="button"
              role="tab"
              id="tab-kids-yoga"
              aria-selected={isYoga}
              aria-controls="panel-kids-yoga"
              onClick={() => switchOffering("kids-yoga")}
              className={`kids-offering-tab ${isYoga ? "is-active is-yoga" : ""}`}
            >
              <span className="kids-offering-tab-dot is-yoga" aria-hidden />
              <span>{t("kidsTabKidsYoga")}</span>
            </button>
          </div>

          <div key={offering} className="w-full kids-offering-panel">
            {isYoga ? <KidsYogaPanel t={t} /> : <LittleHumansPanel t={t} />}
          </div>

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
              href={`mailto:${STUDIO_EMAIL}?subject=${encodeURIComponent(mailSubject)}`}
              className="w-full flex items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-sm font-medium transition-transform hover:scale-[1.01] text-center"
              style={{
                background: isYoga ? KIDS.orangeSoft : KIDS.mint,
                color: KIDS.leaf,
              }}
            >
              <Mail className="w-4 h-4 flex-shrink-0" />
              {t("kidsContactWrite")}
            </a>
            <a
              href={isYoga ? "tel:+4915773625280" : "tel:+4915129693732"}
              className="w-full flex flex-col items-center justify-center gap-1 rounded-2xl px-5 py-3.5 text-sm font-medium transition-transform hover:scale-[1.01] text-center"
              style={{
                background: isYoga ? `${KIDS.yellow}99` : KIDS.mintSoft,
                color: KIDS.leaf,
              }}
            >
              <span className="inline-flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                {t("kidsContactCall")}
              </span>
              <span className="tabular-nums tracking-wide">
                {isYoga ? t("kidsYogaContactPhone") : t("kidsContactPhone")}
              </span>
            </a>
          </div>
        </div>
      </section>

      <footer className="pt-2 pb-8 sm:pb-10 text-center px-5" style={{ background: KIDS.cream }}>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-[#E8A0B8]/70 shadow-sm">
              <img
                src="/images/ginkgo-kids-logo.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-base sm:text-lg font-light tracking-wide" style={{ color: accent }}>
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

function LittleHumansPanel({ t }: { t: (key: string) => string }) {
  return (
    <div
      id="panel-little-humans"
      role="tabpanel"
      aria-labelledby="tab-little-humans"
      className="w-full flex flex-col items-center gap-4 sm:gap-5 kids-fade-up"
    >
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
    </div>
  )
}

function KidsYogaPanel({ t }: { t: (key: string) => string }) {
  const details = [
    { icon: Calendar, text: t("kidsYogaWhen") },
    { icon: Globe, text: t("kidsYogaLang") },
    { icon: Baby, text: t("kidsYogaParents") },
    { icon: Heart, text: t("kidsYogaDonation") },
    { icon: Ban, text: t("kidsYogaStroller") },
  ] as const

  return (
    <div
      id="panel-kids-yoga"
      role="tabpanel"
      aria-labelledby="tab-kids-yoga"
      className="w-full flex flex-col items-center gap-4 sm:gap-5 kids-fade-up"
    >
      <div className="w-full overflow-hidden rounded-2xl sm:rounded-[1.75rem] shadow-md">
        <div className="relative aspect-[21/10] sm:aspect-[12/5]">
          <img
            src="/images/kids-yoga-hero.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(47,93,74,0.55) 0%, transparent 50%)",
            }}
          />
          <h2
            className="absolute bottom-3.5 left-0 right-0 px-4 text-3xl sm:text-4xl font-semibold tracking-tight"
            style={{ color: KIDS.cream }}
          >
            {t("kidsYogaTitle")}
          </h2>
        </div>
      </div>

      <p
        className="w-full text-sm sm:text-base font-medium leading-relaxed px-5 sm:px-7 py-4 sm:py-5 rounded-2xl sm:rounded-[1.5rem] text-left"
        style={{ background: KIDS.orangeSoft, color: KIDS.leaf }}
      >
        {t("kidsYogaBlurb")}
      </p>

      <p
        className="text-sm sm:text-base font-semibold leading-snug px-2"
        style={{ color: KIDS.leaf }}
      >
        {t("kidsYogaAgeLine")}
      </p>

      <ul
        className="w-full rounded-2xl sm:rounded-[1.75rem] px-5 sm:px-7 py-5 sm:py-6 space-y-3.5 text-left"
        style={{
          background: `linear-gradient(165deg, ${KIDS.mintSoft} 0%, #d8ebe0 100%)`,
        }}
      >
        {details.map(({ icon: Icon, text }) => (
          <li key={text} className="flex items-start gap-3">
            <Icon
              className="w-[1.15rem] h-[1.15rem] mt-0.5 flex-shrink-0"
              style={{ color: KIDS.leaf }}
              strokeWidth={1.75}
            />
            <span className="text-sm sm:text-[1.05rem] font-medium leading-snug" style={{ color: KIDS.leaf }}>
              {text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

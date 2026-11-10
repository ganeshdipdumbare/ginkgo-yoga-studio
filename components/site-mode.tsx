"use client"

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react"

export type SiteMode = "yoga" | "kids"

type SiteModeContextValue = {
  mode: SiteMode
  flipping: boolean
  transitionTo: SiteMode | null
  switchMode: (next?: SiteMode) => void
}

const SiteModeContext = createContext<SiteModeContextValue | null>(null)

const MODE_QUERY = "kids"
/** Fast cover + slower reveal of the new site */
const TRANSITION_MS = 1000
/** Swap while paint fully covers */
const SWAP_MS = 380

const STROKES = [
  { d: "M-8 12 C18 4 38 22 58 14 C78 6 92 18 108 10", delay: "0s", width: 30 },
  { d: "M-10 32 C14 42 36 24 56 34 C76 44 94 28 110 36", delay: "0.04s", width: 34 },
  { d: "M-6 52 C20 44 40 62 60 52 C80 42 96 58 108 50", delay: "0.08s", width: 32 },
  { d: "M-8 72 C16 80 38 62 58 72 C78 82 94 66 110 74", delay: "0.12s", width: 36 },
  { d: "M-10 90 C18 82 40 96 62 88 C84 80 98 94 112 86", delay: "0.16s", width: 32 },
] as const

const KIDS_COLORS = ["#F6E7A8", "#F2C4A0", "#E85A8B", "#F7B6C8", "#B92E5C"]
const YOGA_COLORS = ["#F6E7A8", "#E6D7A7", "#D4B95C", "#B69724", "#C4A84A"]

function readModeFromUrl(): SiteMode {
  if (typeof window === "undefined") return "yoga"
  const params = new URLSearchParams(window.location.search)
  if (params.get(MODE_QUERY) === "1" || window.location.hash === "#kids") {
    return "kids"
  }
  return "yoga"
}

function writeModeToUrl(mode: SiteMode) {
  const url = new URL(window.location.href)
  if (mode === "kids") {
    url.searchParams.set(MODE_QUERY, "1")
  } else {
    url.searchParams.delete(MODE_QUERY)
  }
  if (url.hash === "#kids") url.hash = ""
  window.history.replaceState({}, "", url.toString())
}

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

function scrollToTopInstant() {
  const root = document.documentElement
  const prev = root.style.scrollBehavior
  root.style.scrollBehavior = "auto"
  window.scrollTo(0, 0)
  root.style.scrollBehavior = prev
}

export function SiteModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<SiteMode>(() => readModeFromUrl())
  const [flipping, setFlipping] = useState(false)
  const [transitionTo, setTransitionTo] = useState<SiteMode | null>(null)

  const switchMode = useCallback(
    (next?: SiteMode) => {
      if (flipping) return
      const target = next ?? (mode === "yoga" ? "kids" : "yoga")
      if (target === mode) return

      if (prefersReducedMotion()) {
        setMode(target)
        writeModeToUrl(target)
        scrollToTopInstant()
        return
      }

      setFlipping(true)
      setTransitionTo(target)

      window.setTimeout(() => {
        setMode(target)
        writeModeToUrl(target)
        scrollToTopInstant()
      }, SWAP_MS)

      window.setTimeout(() => {
        setFlipping(false)
        setTransitionTo(null)
      }, TRANSITION_MS)
    },
    [flipping, mode]
  )

  return (
    <SiteModeContext.Provider value={{ mode, flipping, transitionTo, switchMode }}>
      {children}
      <SitePaintTransition />
    </SiteModeContext.Provider>
  )
}

export function useSiteMode() {
  const ctx = useContext(SiteModeContext)
  if (!ctx) throw new Error("useSiteMode must be used within SiteModeProvider")
  return ctx
}

/** Fast paint cover, then wipe-reveal of the new website underneath. */
function SitePaintTransition() {
  const { flipping, transitionTo } = useSiteMode()
  if (!flipping || !transitionTo) return null

  const toKids = transitionTo === "kids"
  const colors = toKids ? KIDS_COLORS : YOGA_COLORS

  return (
    <div className={`site-paint ${toKids ? "to-kids" : "to-yoga"}`} aria-hidden>
      <div className="site-paint-veil">
        <div className="site-paint-base" />
        <svg
          className="site-paint-strokes"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {STROKES.map((stroke, i) => (
            <path
              key={i}
              className="site-paint-stroke"
              d={stroke.d}
              fill="none"
              stroke={colors[i % colors.length]}
              strokeWidth={stroke.width}
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ animationDelay: stroke.delay }}
            />
          ))}
        </svg>
      </div>
      <p className="site-paint-label">
        {toKids ? "Ginkgo Kids" : "Ginkgo Yoga"}
      </p>
    </div>
  )
}

/** Brand + Yoga|Kids toggle — aligned to one row height. */
export function BrandCoinSwitcher() {
  const { mode, flipping, switchMode } = useSiteMode()
  const isKids = mode === "kids"
  const accent = isKids ? "#B92E5C" : "#B69724"

  return (
    <div className="brand-switcher">
      <a
        href={isKids ? "#little-humans" : "#home"}
        className="brand-switcher-mark"
        aria-label={isKids ? "Ginkgo Kids home" : "Ginkgo Yoga home"}
      >
        <img
          src={isKids ? "/images/ginkgo-logo-kids.png" : "/images/ginkgo-logo.jpg"}
          alt=""
          className="brand-switcher-logo"
        />
        <span className="brand-switcher-name" style={{ color: accent }}>
          {isKids ? "Ginkgo Kids" : "Ginkgo"}
        </span>
      </a>

      <div className="audience-toggle" role="group" aria-label="Choose site version">
        <button
          type="button"
          disabled={flipping}
          aria-pressed={!isKids}
          onClick={() => switchMode("yoga")}
          className={`audience-toggle-btn ${!isKids ? "is-active is-yoga" : ""}`}
        >
          Yoga
        </button>
        <button
          type="button"
          disabled={flipping}
          aria-pressed={isKids}
          onClick={() => switchMode("kids")}
          className={`audience-toggle-btn ${isKids ? "is-active is-kids" : ""}`}
        >
          Kids
        </button>
      </div>
    </div>
  )
}

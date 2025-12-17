"use client"

import { useState, useEffect } from "react"
import { X, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const SOLSTICE_DATE = new Date("2025-12-21T23:59:59")
const STORAGE_KEY = "solstice-popup-closed"

export function SolsticePopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if we're past the solstice date
    const now = new Date()
    if (now > SOLSTICE_DATE) {
      return
    }

    // Check if popup was previously closed
    const wasClosed = localStorage.getItem(STORAGE_KEY) === "true"
    
    if (!wasClosed) {
      // Small delay for smooth animation
      setTimeout(() => {
        setIsOpen(true)
        setTimeout(() => setIsVisible(true), 10)
      }, 500)
    }
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(() => {
      setIsOpen(false)
      localStorage.setItem(STORAGE_KEY, "true")
    }, 300)
  }

  const handleReopen = () => {
    setIsOpen(true)
    setTimeout(() => setIsVisible(true), 10)
  }

  if (!isOpen) {
    // Show a small button to reopen if closed - positioned on left to avoid covering venue rental button
    return (
      <button
        onClick={handleReopen}
        className="fixed bottom-6 left-6 z-30 flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-2 text-sm font-medium text-white shadow-lg transition-all hover:from-amber-600 hover:to-amber-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
        aria-label="Show Solstice Yoga event information"
      >
        <Sun className="h-4 w-4" />
        <span className="hidden sm:inline">Solstice Event</span>
      </button>
    )
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300",
          isVisible ? "opacity-100" : "opacity-0"
        )}
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Popup */}
      <div
        className={cn(
          "fixed left-1/2 top-1/2 z-50 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 transform transition-all duration-300",
          isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        )}
      >
        <Card className="relative mx-4 max-h-[90vh] overflow-hidden border-2 border-amber-200/50 bg-gradient-to-br from-white via-amber-50/30 to-white shadow-2xl dark:border-amber-800/50 dark:from-gray-900 dark:via-amber-950/20 dark:to-gray-900">
          {/* Decorative sun icon */}
          <div className="absolute right-4 top-4 opacity-10 dark:opacity-5">
            <Sun className="h-32 w-32 text-amber-400" />
          </div>

          {/* Close button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClose}
            className="absolute right-2 top-2 z-10 h-8 w-8 rounded-full hover:bg-amber-100 dark:hover:bg-amber-900/50"
            aria-label="Close popup"
          >
            <X className="h-4 w-4" />
          </Button>

          <CardHeader className="relative border-b border-amber-100 bg-gradient-to-r from-amber-50 to-amber-100/50 pb-4 pt-6 dark:border-amber-900/50 dark:from-amber-950/30 dark:to-amber-900/20">
            <CardTitle className="flex items-center gap-2 text-2xl font-bold text-amber-900 dark:text-amber-100 sm:text-3xl">
              <Sun className="h-8 w-8 text-amber-500" />
              <span>Solstice Yoga: 108 Sun Salutations</span>
            </CardTitle>
            <p className="mt-2 text-sm font-medium text-amber-700 dark:text-amber-300">
              (Donation Based)
            </p>
          </CardHeader>

          <CardContent className="relative max-h-[calc(90vh-120px)] overflow-y-auto p-6">
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              {/* Date and Time */}
              <div className="rounded-lg bg-amber-50/50 p-4 dark:bg-amber-950/20">
                <p className="text-lg font-semibold text-amber-900 dark:text-amber-100">
                  Sunday, December 21st
                </p>
                <p className="text-base text-amber-800 dark:text-amber-200">
                  1:00 PM - 3:00 PM
                </p>
              </div>

              {/* Main Description */}
              <div className="space-y-4">
                <p className="leading-relaxed">
                  Join us for a powerful and meditative yoga practice to honor the solstice — a moment of pause, transition, and renewal. We will move together through{" "}
                  <span className="font-semibold text-amber-900 dark:text-amber-100">108 Sun Salutations</span> over{" "}
                  <span className="font-semibold text-amber-900 dark:text-amber-100">108 minutes</span>, using breath, rhythm, and collective energy to create a deeply grounding and transformative experience.
                </p>
                <p className="leading-relaxed">
                  This is a strong yet mindful vinyasa yoga practice, guided with options and moments of stillness.
                </p>
              </div>

              {/* Important Information */}
              <div className="space-y-4 rounded-lg border-l-4 border-amber-400 bg-amber-50/30 p-4 dark:border-amber-600 dark:bg-amber-950/10">
                <h3 className="text-lg font-semibold text-amber-900 dark:text-amber-100">
                  Important Information:
                </h3>
                <ul className="space-y-3 text-sm leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-amber-500">•</span>
                    <span>
                      This practice draws its strength from the shared energy of the group. For this reason, the class will be cancelled if fewer than{" "}
                      <span className="font-semibold">6 participants</span> are registered.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-amber-500">•</span>
                    <span>
                      <span className="font-semibold">Urban Sports Club</span> check-in is welcome. Friends may join on a donation basis.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-amber-500">•</span>
                    <span>
                      Additional donations are warmly invited (if possible) to support the space and teaching.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Registration */}
              <div className="rounded-lg bg-gradient-to-r from-amber-100/50 to-amber-50/50 p-4 dark:from-amber-950/30 dark:to-amber-900/20">
                <p className="mb-2 text-sm font-semibold text-amber-900 dark:text-amber-100">
                  Please reserve your spot by emailing:
                </p>
                <a
                  href="mailto:ginkgoyogaberlin@gmail.com"
                  className="text-base font-medium text-amber-700 underline decoration-amber-400 transition-colors hover:text-amber-900 hover:decoration-amber-600 dark:text-amber-300 dark:decoration-amber-600 dark:hover:text-amber-100 dark:hover:decoration-amber-400"
                >
                  ginkgoyogaberlin@gmail.com
                </a>
                <p className="mt-2 text-sm text-amber-800 dark:text-amber-200">
                  This helps us know how many people are coming.
                </p>
              </div>

              {/* Suitability */}
              <p className="rounded-lg bg-gray-50/50 p-4 text-sm italic leading-relaxed dark:bg-gray-900/30">
                Suitable for practitioners with some yoga experience. Come ready to move, breathe, and honor the turning of the sun together.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}


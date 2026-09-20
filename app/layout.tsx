import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import './globals.css'

const FONT_URL = "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600&family=Outfit:wght@200;300;400;500&display=swap"

export const metadata: Metadata = {
  title: "Ginkgo Yoga",
  description:
    "Like the ginkgo tree — steady, spacious, alive. We offer yoga and mindfulness rooted in kindness and awareness in Berlin.",
  keywords: "yoga, meditation, Berlin, Ginkgo Yoga, mindfulness, hatha yoga, vinyasa, yin yoga",
  authors: [{ name: "Ginkgo Yoga Studio" }],
  openGraph: {
    title: "Ginkgo Yoga",
    description:
      "Like the ginkgo tree — steady, spacious, alive. We offer yoga and mindfulness rooted in kindness and awareness.",
    type: "website",
    locale: "en_US",
    siteName: "Ginkgo Yoga",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ginkgo Yoga",
    description:
      "Like the ginkgo tree — steady, spacious, alive. We offer yoga and mindfulness rooted in kindness and awareness.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/ginkgo-logo.jpg" />
        <link rel="apple-touch-icon" href="/images/ginkgo-logo.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href={FONT_URL} rel="stylesheet" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

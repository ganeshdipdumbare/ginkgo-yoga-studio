import type React from "react"
import type { Metadata } from "next"

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
  viewport: "width=device-width, initial-scale=1",
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
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}


import './globals.css'

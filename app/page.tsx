import type { Metadata } from "next"
import StudioClient from "./studio-client"

type Props = {
  searchParams: Promise<{ kids?: string }>
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { kids } = await searchParams
  if (kids === "1") {
    const description =
      "Gentle music time for babies and grown-ups at Ginkgo Yoga in Berlin."
    return {
      title: "Ginkgo Kids",
      description,
      openGraph: {
        title: "Ginkgo Kids",
        description,
        siteName: "Ginkgo Kids",
      },
      twitter: {
        title: "Ginkgo Kids",
        description,
      },
    }
  }
  return {}
}

export default function Page() {
  return <StudioClient />
}

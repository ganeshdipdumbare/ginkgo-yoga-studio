# Ginkgo Yoga Studio

A beautiful, multilingual yoga studio website built with Next.js, React, and Tailwind CSS.

## Features

- 🌍 **Multilingual Support**: English, German, and Italian
- 📱 **Responsive Design**: Optimized for all devices
- 🎨 **Modern UI**: Beautiful, elegant design with smooth animations
- 📅 **Schedule Integration**: Embedded calendar for class bookings
- 👥 **Team Profiles**: Detailed instructor information
- 💰 **Pricing Plans**: Multiple membership options
- 📧 **Contact Forms**: Easy communication with the studio

## Tech Stack

- **Framework**: Next.js 14
- **UI Library**: React 19
- **Styling**: Tailwind CSS
- **Components**: Radix UI (via shadcn/ui)
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (or npm/yarn)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd ginkgo-yoga-studio
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

This project is configured for easy deployment on Vercel:

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

The project will be live at your Vercel URL.

## Project Structure

```
├── app/              # Next.js app directory
│   ├── layout.tsx    # Root layout with metadata
│   ├── page.tsx      # Main page component
│   └── globals.css   # Global styles
├── components/       # React components
│   ├── ui/          # shadcn/ui components
│   └── theme-provider.tsx
├── public/          # Static assets
│   └── images/     # Image files
└── lib/            # Utility functions
```

## License

© 2025 Ginkgo Yoga. All rights reserved.

<!-- Note: placeholder edit from issue #54 ("Just for fun") to verify the Upsun Dispatch pipeline end-to-end. This documentation-only change has no behavioral impact and is safe to revert. -->

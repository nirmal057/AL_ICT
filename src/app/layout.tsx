import '../lib/server-localstorage';
import type {Metadata} from 'next';
import './globals.css';
import { Providers } from './providers';
import { Toaster } from '@/components/ui/toaster';

const siteTitle = "All bits of ICT: A/L ICT Notes, Past Papers & Resources";
const siteDescription = "The ultimate digital notebook and study guide for G.C.E. Advanced Level (A/L) ICT students in Sri Lanka. Access detailed notes, past papers, interactive tools, and prepare for your exam.";
const siteUrl = "https://all-bits-of-ict.web.app"; // Replace with your actual domain

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: `%s | All bits of ICT`,
  },
  description: siteDescription,
  keywords: [
    "A/L ICT", 
    "Advanced Level ICT Sri Lanka",
    "ICT Notes Sinhala",
    "ICT Past Papers",
    "A/L ICT Syllabus",
    "ICT Marking Schemes",
    "ICT Model Papers",
    "GCE A/L ICT"
  ],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "All bits of ICT",
    images: [
      {
        url: `${siteUrl}/og-image.png`, // You should create this image
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [`${siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700&family=Lato:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}

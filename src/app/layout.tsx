import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Space_Grotesk, Sora } from "next/font/google";



export const metadata: Metadata = {
  title: 'Demedia | AI Automation Agency for SMBs',
  description: 'Demedia helps SMEs save time and scale operations through custom AI automation, CRM integration, and smart workflow systems. Book your free AI audit today.',
  openGraph: {
    "title": "Demedia | AI Automation Agency",
    "description": "Automate your workflows and scale your business with AI.",
    "siteName": "Demedia"
  },
};

const spaceGrotesk = Space_Grotesk({ variable: "--font-space-grotesk", subsets: ["latin"] });
const sora = Sora({ variable: "--font-sora", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${spaceGrotesk.variable} ${sora.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}

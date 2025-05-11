import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "./store/Provider";

/**
 * Configure Geist sans font with variable support
 * This modern, clean font improves readability and aesthetics
 */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

/**
 * Configure Geist mono font for code/monospace text
 */
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * Metadata for the application
 * Used by Next.js for SEO and the browser tab
 */
export const metadata: Metadata = {
  title: "Task Management App",
  description: "A simple task management application",
};

/**
 * Root layout component
 * 
 * Wraps all pages in the application with:
 * - Font configurations
 * - Redux Provider for state management
 * - Common layout elements
 * 
 * The HTML structure here applies to every page in the app
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}

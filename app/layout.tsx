import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rigved Bhat | AI Developer, Founder, Data Scientist",
  description:
    "Portfolio of Rigved Bhat (Rig) - AI developer, startup founder, and data scientist building intelligent systems, ML products, and creative AI experiences.",
};

const refreshGuardScript = `
  (function () {
    var root = document.documentElement;
    root.style.scrollBehavior = "auto";

    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    function resetScroll() {
      if (!window.location.hash) {
        window.scrollTo(0, 0);
      }
    }

    resetScroll();

    window.addEventListener("beforeunload", function () {
      root.style.scrollBehavior = "auto";
      resetScroll();
    });

    window.addEventListener("load", function () {
      resetScroll();
      requestAnimationFrame(function () {
        root.style.scrollBehavior = "";
      });
    }, { once: true });

    window.addEventListener("pageshow", function (event) {
      if (event.persisted) {
        resetScroll();
        requestAnimationFrame(function () {
          root.style.scrollBehavior = "";
        });
      }
    });
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Script id="refresh-guard" strategy="beforeInteractive">
          {refreshGuardScript}
        </Script>
        {children}
      </body>
    </html>
  );
}

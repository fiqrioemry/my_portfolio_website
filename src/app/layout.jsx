"use client";

import "../app/globals.css";
import Header from "@/components/Header";
import { useSelector } from "react-redux";
import StoreProvider from "./StoreProvider";
import { JetBrains_Mono } from "next/font/google";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

function RootComponent({ children }) {
  const darkMode = useSelector((state) => state.interface.darkMode);

  return (
    <>
      <html lang="en" className={`${darkMode ? "dark" : ""}`}>
        <body className={`${jetbrainsMono.variable}`}>
          <Header />
          <StairTransition />
          <PageTransition>{children}</PageTransition>
        </body>
      </html>
    </>
  );
}

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <RootComponent>{children}</RootComponent>
    </StoreProvider>
  );
}

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const COUNT_DURATION = 2500; // ms to count from 1% to 100%
const MAX_TIMEOUT = 4000; // safety cap so the loader can never get stuck

export default function Preloader() {
  const [progress, setProgress] = useState(1);
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const step = COUNT_DURATION / 100;

    const counter = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? prev : prev + 1));
    }, step);

    const timeout = setTimeout(() => setProgress(100), MAX_TIMEOUT);

    return () => {
      clearInterval(counter);
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (progress < 100) return;
    const fadeTimer = setTimeout(() => setFadeOut(true), 250);
    const hideTimer = setTimeout(() => setVisible(false), 700);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, [progress]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[999] flex flex-col items-center justify-center bg-white transition-opacity duration-500 ${
        fadeOut ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative flex h-32 w-32 items-center justify-center">
        <span className="absolute inset-0 rounded-full animate-loader-pulse bg-primary-400/20" />
        <span className="absolute inset-0 rounded-full border-4 border-primary-100" />
        <span className="absolute inset-0 rounded-full border-4 border-transparent border-t-secondary-500 animate-spin" />
        <Image
          src="/BRZ LOGO1.png"
          alt="Breezy Health Solutions"
          width={72}
          height={72}
          priority
          className="relative h-16 w-16 object-contain animate-logo-blink"
        />
      </div>

      <p className="mt-6 text-2xl font-semibold text-primary-500 tabular-nums">
        {progress}%
      </p>
    </div>
  );
}

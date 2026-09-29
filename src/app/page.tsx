"use client";

import React, { useEffect } from "react";
import { homeHtml } from "@/data/homeHtml";

export default function Home() {
  useEffect(() => {
    const loadScript = (src: string) => {
      return new Promise<void>((resolve, reject) => {
        const existing = document.querySelector(`script[src="${src}"]`);
        if (existing) {
          resolve();
          return;
        }
        const s = document.createElement("script");
        s.src = src;
        s.async = false;
        s.onload = () => resolve();
        s.onerror = (e) => reject(e);
        document.body.appendChild(s);
      });
    };

    loadScript("/assets/js/translations.js?v=" + Date.now())
      .then(() => loadScript("/assets/js/script.js?v=" + Date.now()))
      .then(() => {
        if (typeof (window as any).biniyogInit === "function") {
          (window as any).biniyogInit();
        }
      })
      .catch((err) => console.error("Script load error:", err));
  }, []);

  return (
    <main
      id="root-biniyog-content"
      dangerouslySetInnerHTML={{ __html: homeHtml }}
    />
  );
}

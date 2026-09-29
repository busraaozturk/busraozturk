"use client";

import { useSyncExternalStore } from "react";

export type Lang = "tr" | "en";

// Site statik export (GitHub Pages) olduğu için dil seçimi tarayıcıda tutuluyor.
// Sunucu HTML'i her zaman Türkçe üretir; hidrasyondan sonra kayıtlı dile geçilir.
const STORAGE_KEY = "lang";
const listeners = new Set<() => void>();
let current: Lang | null = null;

function readStored(): Lang {
  try {
    return localStorage.getItem(STORAGE_KEY) === "en" ? "en" : "tr";
  } catch {
    return "tr";
  }
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function useLang(): Lang {
  return useSyncExternalStore(subscribe, () => (current ??= readStored()), () => "tr");
}

export function setLang(lang: Lang) {
  current = lang;
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {}
  listeners.forEach((listener) => listener());
}

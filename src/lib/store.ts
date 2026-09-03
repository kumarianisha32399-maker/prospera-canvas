import { useEffect, useState } from "react";
import {
  companyData,
  galleryData,
  homepageData,
  leadershipData,
  projectsData,
  servicesData,
  settingsData,
  testimonialsData,
  type Company,
  type Enquiry,
  type GalleryItem,
  type Homepage,
  type Leadership,
  type Project,
  type Service,
  type Settings,
  type Testimonial,
} from "@/data/mockData";

export const PREFIX = "prospera:";

export interface StoreShape {
  company: Company;
  homepage: Homepage;
  services: Service[];
  projects: Project[];
  gallery: GalleryItem[];
  testimonials: Testimonial[];
  leadership: Leadership;
  settings: Settings;
  enquiries: Enquiry[];
}

export const defaults: StoreShape = {
  company: companyData,
  homepage: homepageData,
  services: servicesData,
  projects: projectsData,
  gallery: galleryData,
  testimonials: testimonialsData,
  leadership: leadershipData,
  settings: settingsData,
  enquiries: [],
};

export type StoreKey = keyof StoreShape;

const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

export function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

const isBrowser = () => typeof window !== "undefined";

export function getData<K extends StoreKey>(key: K): StoreShape[K] {
  if (!isBrowser()) return defaults[key];
  try {
    const raw = window.localStorage.getItem(PREFIX + key);
    if (!raw) return defaults[key];
    return JSON.parse(raw) as StoreShape[K];
  } catch {
    return defaults[key];
  }
}

export function saveData<K extends StoreKey>(key: K, value: StoreShape[K]) {
  if (isBrowser()) {
    try {
      window.localStorage.setItem(PREFIX + key, JSON.stringify(value));
    } catch {
      /* storage unavailable */
    }
  }
  emit();
}

/** Update a single item inside a list collection (matched by id). */
export function updateItem<T extends { id: string }>(
  key: StoreKey,
  item: T,
): void {
  const list = getData(key) as unknown as T[];
  const exists = list.some((i) => i.id === item.id);
  const next = exists
    ? list.map((i) => (i.id === item.id ? item : i))
    : [...list, item];
  saveData(key, next as never);
}

export function deleteItem(key: StoreKey, id: string) {
  const list = getData(key) as unknown as { id: string }[];
  saveData(key, list.filter((i) => i.id !== id) as never);
}

export function moveItem(key: StoreKey, id: string, dir: -1 | 1) {
  const list = [...(getData(key) as unknown as { id: string }[])];
  const i = list.findIndex((x) => x.id === id);
  const j = i + dir;
  if (i < 0 || j < 0 || j >= list.length) return;
  [list[i], list[j]] = [list[j], list[i]];
  saveData(key, list as never);
}

export function resetData() {
  if (isBrowser()) {
    (Object.keys(defaults) as StoreKey[]).forEach((k) =>
      window.localStorage.removeItem(PREFIX + k),
    );
  }
  emit();
}

export function newId(prefix = "id") {
  return `${prefix}-${Math.random().toString(36).slice(2, 9)}`;
}

export function submitEnquiry(
  input: Omit<Enquiry, "id" | "status" | "createdAt">,
) {
  const enquiries = getData("enquiries");
  const entry: Enquiry = {
    ...input,
    id: newId("enq"),
    status: "new",
    createdAt: new Date().toISOString(),
  };
  saveData("enquiries", [entry, ...enquiries]);
  return entry;
}

/**
 * Reactive read of a store collection. Renders defaults on the server and on
 * the first client render, then swaps to persisted data after hydration.
 */
export function useStore<K extends StoreKey>(key: K): StoreShape[K] {
  const [value, setValue] = useState<StoreShape[K]>(defaults[key]);

  useEffect(() => {
    const read = () => setValue(getData(key));
    read();
    const unsub = subscribe(read);
    const onStorage = (e: StorageEvent) => {
      if (!e.key || e.key === PREFIX + key) read();
    };
    window.addEventListener("storage", onStorage);
    return () => {
      unsub();
      window.removeEventListener("storage", onStorage);
    };
  }, [key]);

  return value;
}

import { useEffect, useState } from "react";

/**
 * Demo-only authentication. This is a frontend mock using sessionStorage —
 * it is NOT production-grade auth and protects nothing on a server.
 */
const KEY = "prospera:admin-session";

export const DEMO_EMAIL = "admin@prosperaarcon.com";
export const DEMO_PASSWORD = "Admin@123";

const listeners = new Set<() => void>();
const emit = () => listeners.forEach((l) => l());

export function login(email: string, password: string) {
  if (email.trim().toLowerCase() !== DEMO_EMAIL || password !== DEMO_PASSWORD) {
    return false;
  }
  sessionStorage.setItem(KEY, JSON.stringify({ email: DEMO_EMAIL, at: Date.now() }));
  emit();
  return true;
}

export function logout() {
  sessionStorage.removeItem(KEY);
  emit();
}

export function isAuthed() {
  if (typeof window === "undefined") return false;
  return Boolean(sessionStorage.getItem(KEY));
}

/** Returns undefined until the session has been checked on the client. */
export function useAuth() {
  const [authed, setAuthed] = useState<boolean | undefined>(undefined);
  useEffect(() => {
    const read = () => setAuthed(isAuthed());
    read();
    listeners.add(read);
    return () => {
      listeners.delete(read);
    };
  }, []);
  return authed;
}

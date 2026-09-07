export type ThemePreference = "light" | "dark" | "system";

const KEY = "theme";

const CYCLE: ThemePreference[] = ["light", "dark", "system"];

const prefersDark = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches;

export function getPreference(): ThemePreference {
  const stored = localStorage.getItem(KEY);
  return stored === "light" || stored === "dark" || stored === "system"
    ? stored
    : "system";
}

export function resolvePreference(pref: ThemePreference): "light" | "dark" {
  if (pref === "system") return prefersDark() ? "dark" : "light";
  return pref;
}

export function applyPreference(pref: ThemePreference): void {
  document.documentElement.classList.toggle(
    "dark",
    resolvePreference(pref) === "dark"
  );
}

export function setPreference(pref: ThemePreference): void {
  if (pref === "system") localStorage.removeItem(KEY);
  else localStorage.setItem(KEY, pref);

  applyPreference(pref);
  window.dispatchEvent(new Event("theme-change"));
}

export function cyclePreference(): ThemePreference {
  const next = CYCLE[(CYCLE.indexOf(getPreference()) + 1) % CYCLE.length];
  setPreference(next);
  return next;
}

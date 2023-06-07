import { Dispatch, SetStateAction } from "react";

export function toogleTheme(
  setCurrentTheme?: Dispatch<SetStateAction<"light" | "dark">>,
  init?: boolean
) {
  if (init) {
    if (localStorage.getItem("theme")) {
      const theme = localStorage.getItem("theme");
      if (document.documentElement.classList.contains("light")) {
        document.documentElement.classList.remove("light");
      }
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
      }

      document.documentElement.classList.add(theme!);
      return;
    } else {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        document.documentElement.classList.add("dark");
        if (setCurrentTheme) setCurrentTheme("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.add("light");
        if (setCurrentTheme) setCurrentTheme("light");
        localStorage.setItem("theme", "light");
      }
    }
  } else {
    if (document.documentElement.classList.contains("light")) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      if (setCurrentTheme) setCurrentTheme("dark");
      localStorage.setItem("theme", "dark");
    } else if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      if (setCurrentTheme) setCurrentTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        document.documentElement.classList.add("dark");
        if (setCurrentTheme) setCurrentTheme("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.add("dark");
        if (setCurrentTheme) setCurrentTheme("dark");
        localStorage.setItem("theme", "dark");
      }
    }
  }
}

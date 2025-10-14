import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// TEMP: Always show preloader for 4 seconds (for local dev/testing)
const loader = document.getElementById("preloader");
if (loader) {
  setTimeout(() => {
    document.body.classList.add("loaded");
    loader.classList.add("hidden");
    setTimeout(() => loader.remove(), 1000); // fade out over 1s
  }, 4000); // preloader visible for 4s
}
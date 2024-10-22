// src/service-worker.js
import { Workbox } from "workbox-window";

if ("serviceWorker" in navigator) {
  console.log("Service Worker is supported.");
  window.addEventListener("load", () => {
    const wb = new Workbox("/dev-sw.js?dev-sw", { scope: "/" });
    wb.register()
      .then(() => {
        console.log("Service worker registered successfully.");
      })
      .catch((error) => {
        console.error("Service worker registration failed:", error);
      });
  });
} else {
  console.log("Service Worker is not supported in this browser.");
}

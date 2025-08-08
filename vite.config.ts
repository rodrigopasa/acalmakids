import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

async function getConfig() {
  let cartographerPlugin = [];

  if (process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined) {
    const m = await import("@replit/vite-plugin-cartographer");
    cartographerPlugin = [m.cartographer()];
  }

  return defineConfig({
    plugins: [
      react(),
      runtimeErrorOverlay(),
      ...cartographerPlugin,
    ],
    resolve: {
      alias: {
        "@": path.resolve(new URL(import.meta.url).pathname, "..", "client", "src"),
        "@shared": path.resolve(new URL(import.meta.url).pathname, "..", "shared"),
        "@assets": path.resolve(new URL(import.meta.url).pathname, "..", "attached_assets"),
      },
    },
    root: path.resolve(new URL(import.meta.url).pathname, "..", "client"),
    build: {
      outDir: path.resolve(new URL(import.meta.url).pathname, "..", "dist/public"),
      emptyOutDir: true,
    },
    server: {
      fs: {
        strict: true,
        deny: ["**/.*"],
      },
    },
  });
}

export default getConfig();

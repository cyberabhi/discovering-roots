
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Use Vercel's Nitro preset only on Vercel.
  nitro: {
    preset: process.env.VERCEL ? "vercel" : undefined,
  },

  tanstackStart: {
    server: { entry: "server" },
  },
});

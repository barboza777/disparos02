import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";

// Standalone builds use the portable Node server preset. Netlify cannot host a
// long-running Node server, so builds running on Netlify use its native preset.
const nitroPreset = process.env.NETLIFY ? "netlify" : "node-server";

export default defineConfig({ plugins: [tsconfigPaths(), tanstackStart({ server: { entry: "server" } }), react(), tailwindcss(), nitro({ preset: nitroPreset })] });

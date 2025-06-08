import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "/sosun/",  // 仓库名一致
  plugins: [react(), tsconfigPaths()],
});

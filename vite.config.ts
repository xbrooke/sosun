/** WARNING: DON'T EDIT THIS FILE */
/** WARNING: DON'T EDIT THIS FILE */
/** WARNING: DON'T EDIT THIS FILE */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

function getPlugins() {
  const plugins = [react(), tsconfigPaths()];
  return plugins;
}

// 👇 修改部分：添加 base 配置（替换为你的仓库名）
export default defineConfig({
  base: "/sosun/",  // <-- 替换为你的仓库名，例如 /vite-ui/
  plugins: getPlugins(),
});

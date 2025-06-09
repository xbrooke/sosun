# 项目目录结构文档

## 根目录文件
- `.github/workflows/` - GitHub Actions工作流配置
  - `deploy.yml` - 自动部署配置
  - `main.yml` - 主工作流配置
- `.gitignore` - Git忽略文件配置
- `README.md` - 项目说明文档
- `index.html` - 主HTML文件
- `package.json` - 项目依赖和脚本配置
- `pnpm-lock.yaml` - pnpm锁文件
- `postcss.config.js` - PostCSS配置
- `tailwind.config.js` - Tailwind CSS配置
- `tsconfig.json` - TypeScript配置
- `vite.config.ts` - Vite构建工具配置

## public目录
- `404.html` - 404页面和SPA路由处理
- `_redirects` - Netlify重定向规则

## src目录
### assets
- `images/` - 静态图片资源
  - `.gitkeep` - 保持空目录

### components - 可复用UI组件
- `Carousel.tsx` - 轮播图组件
- `DownloadModal.tsx` - 下载模态框基类
- `DownloadSection.tsx` - 下载区域组件
- `Empty.tsx` - 空状态组件
- `Footer.tsx` - 页脚组件
- `FreeDownloadModal.tsx` - 免费版下载弹窗
- `Navbar.tsx` - 导航栏组件
- `ProDownloadModal.tsx` - Pro版下载弹窗
- `RewardHistoryList.tsx` - 赞赏历史列表
- `RewardItem.tsx` - 单个赞赏记录项
- `RewardSection.tsx` - 赞赏区域
- `StatsSection.tsx` - 数据统计区域
- `SupportSection.tsx` - 支持区域
- `Testimonial.tsx` - 支持系统展示
- `TutorialCard.tsx` - 教程卡片
- `WechatSection.tsx` - 微信公众号区域

### db
- `rewards.json` - 赞赏记录数据

### hooks
- `useTheme.ts` - 主题管理自定义Hook

### lib
- `utils.ts` - 工具函数

### mock
- `appData.ts` - 模拟数据配置

### pages - 页面级组件
- `About.tsx` - 关于页面
- `Home.tsx` - 首页
- `RewardHistory.tsx` - 赞赏历史页面

### 其他文件
- `App.tsx` - 主应用组件
- `DOWNLOAD_GUIDE.md` - 下载指南
- `index.css` - 全局样式
- `main.tsx` - 应用入口
- `PROJECT_README.md` - 项目简介
- `vite-env.d.ts` - Vite环境类型声明

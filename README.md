# 领克第三方应用商店

## GitHub Pages 部署指南

1. **配置GitHub Pages**
   - 进入仓库的Settings > Pages
   - 选择部署分支(通常是gh-pages或main)
   - 设置Source为分支和/docs文件夹(或根目录)
   - 确保Custom domain留空(除非你有自定义域名)

2. **路由问题解决方案**
   - 确保已添加public/404.html文件
   - 如果使用自定义路径(如username.github.io/repo), 修改vite.config.ts中的base:
     ```js
     base: '/repo/' // 替换为你的仓库名
     ```

3. **访问页面**
   - 主页面: https://username.github.io/repo/
   - 关于页面: https://username.github.io/repo/about
   - 赞赏历史: https://username.github.io/repo/reward-history

## 项目结构

- `src/pages/` - 页面组件
  - `Home.tsx` - 首页
  - `About.tsx` - 关于页面
  - `RewardHistory.tsx` - 赞赏历史

- `src/components/` - 可复用组件
  - `RewardHistoryList.tsx` - 赞赏列表
  - `RewardItem.tsx` - 单个赞赏项

## 本地开发

```bash
npm install
npm run dev
```

## 构建生产版本

```bash
npm run build
```
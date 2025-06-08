# 领克第三方应用商店

## GitHub Pages 部署指南

1. 确保项目已推送到GitHub仓库
2. 在仓库设置中启用GitHub Pages
3. 选择部署分支（通常是gh-pages或main）
4. 设置根目录为 `/ (root)`

### 路由问题解决方案

GitHub Pages默认不支持SPA路由，需要以下配置：

1. 项目必须包含`public/404.html`文件
2. 确保vite配置正确：
```js
// vite.config.ts
export default defineConfig({
  base: '/your-repo-name/', // 如果部署在子路径
  // ...
})
```

3. 路由组件需要处理哈希路由：
```jsx
<BrowserRouter basename={import.meta.env.BASE_URL}>
  {/* 路由配置 */}
</BrowserRouter>
```

### 本地测试

1. 安装`gh-pages`:
```bash
npm install gh-pages --save-dev
```

2. 在package.json中添加部署脚本:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. 运行部署:
```bash
npm run deploy
```

### 注意事项

- 首次部署可能需要几分钟生效
- 清除浏览器缓存后测试
- 如果使用自定义域名，需要配置CNAME文件


git commit -m "修改子页面路径"
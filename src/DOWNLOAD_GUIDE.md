# GitHub本地下载与运行指南

## 环境要求
- Node.js 16+
- npm 8+ 或 pnpm 7+
- Git

## 下载步骤

### 1. 克隆仓库
```bash
git clone https://github.com/xbrooke/link-app-store.git
cd link-app-store
```

### 2. 安装依赖
```bash
pnpm install
# 或使用npm
npm install
```

### 3. 运行开发服务器
```bash
pnpm dev
# 或使用npm
npm run dev
```

### 4. 构建生产版本
```bash
pnpm build
# 或使用npm
npm run build
```

### 5. 预览生产版本
```bash
pnpm preview
# 或使用npm
npm run preview
```

## 部署说明
1. 构建生产版本后，将`dist`文件夹内容上传至托管服务
2. 确保配置了正确的重定向规则（参考public/_redirects）
3. 建议使用Netlify或Vercel等现代托管平台

## 常见问题

### 依赖安装失败
- 确保使用正确的Node.js版本
- 尝试删除node_modules后重新安装
```bash
rm -rf node_modules
pnpm install
```

### 运行报错
- 检查端口是否被占用(默认3000)
- 确保所有依赖已正确安装

### 部署问题
- 确保正确配置了GitHub Pages的发布分支
- 检查404.html重定向配置

## 联系方式
如有问题请联系：xbrooke@example.com
或通过微信公众号"领克应用商店"反馈
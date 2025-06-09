# 领克第三方应用商店 - 前端项目

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## 项目概述
专为领克车主开发的车机应用商店前端，提供应用下载、教程查看等功能。

## 功能特性
- 应用版本管理（Free/Pro版）
- 微信/支付宝赞赏支持
- 使用教程展示
- 暗黑/明亮主题切换
- 响应式设计适配多设备

## 技术栈
- React 18 + TypeScript
- Tailwind CSS
- Vite构建工具
- React Router路由管理
- Framer Motion动画库

## 项目结构
```
├── public/                # 静态资源
│   ├── downloads/         # 应用安装包存放目录
│   ├── 404.html           # 404页面
│   └── _redirects         # 重定向规则
│
├── src/                   # 源代码
│   ├── assets/            # 静态资源
│   ├── components/        # 可复用组件
│   ├── db/                # 数据文件
│   ├── hooks/             # 自定义Hook
│   ├── lib/               # 工具函数
│   ├── mock/              # 模拟数据
│   ├── pages/             # 页面组件
│   ├── App.tsx            # 主应用组件
│   ├── main.tsx           # 应用入口
│   └── vite-env.d.ts      # 类型声明
│
├── .github/               # GitHub工作流
├── DOCUMENTATION.md       # 详细文档
├── DOWNLOAD_GUIDE.md      # 下载指南
├── GIT_GUIDE.md           # Git使用指南
└── PROJECT_README.md      # 项目简介

## 开发指南
1. 克隆仓库
```bash
git clone https://github.com/xbrooke/link-app-store.git
cd link-app-store
```

2. 安装依赖
```bash
pnpm install
```

3. 启动开发服务器
```bash
pnpm dev
```

## 部署指南
1. 构建生产版本
```bash
pnpm build
```

2. 将dist目录内容上传至静态托管服务

## 贡献指南
欢迎提交Pull Request，请遵循现有代码风格。

## 许可证
MIT License

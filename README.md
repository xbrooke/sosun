# 领克第三方应用商店项目

## 项目概述
这是一个为领克车机开发的应用商店前端项目，提供Free和Pro两个版本的应用下载，包含赞赏功能、使用教程和支持系统展示等功能。

## 项目结构
```
├── .github/            # GitHub工作流配置
├── src/
│   ├── assets/         # 静态资源
│   │   └── images/     # 本地图片存放目录
│   ├── components/     # 所有React组件
│   ├── db/             # 本地JSON数据
│   ├── hooks/          # 自定义Hook
│   ├── lib/            # 工具函数
│   ├── mock/           # 模拟数据
│   ├── pages/          # 页面组件
│   └── vite-env.d.ts   # Vite类型定义
├── public/             # 公共资源
└── ...                 # 其他配置文件
```

## 组件功能说明

### 核心组件
- **Carousel.tsx**: 首页轮播图组件，展示应用特色
- **DownloadSection.tsx**: 下载区域，提供Free和Pro版本选择
- **DownloadModal.tsx**: 下载模态框基础组件
- **FreeDownloadModal.tsx**: Free版下载弹窗
- **ProDownloadModal.tsx**: Pro版下载弹窗
- **RewardSection.tsx**: 赞赏支持区域
- **SupportSection.tsx**: 支持开发者区域
- **Testimonial.tsx**: 支持系统展示
- **TutorialCard.tsx**: 使用教程卡片
- **WechatSection.tsx**: 微信公众号关注区域

### 辅助组件
- **Navbar.tsx**: 顶部导航栏，含主题切换
- **Footer.tsx**: 页脚组件
- **RewardItem.tsx**: 单条赞赏记录展示
- **RewardHistoryList.tsx**: 赞赏历史列表

### 页面组件
- **Home.tsx**: 首页
- **About.tsx**: 关于页面
- **RewardHistory.tsx**: 赞赏历史页面

## 自定义内容指引

### 修改文本内容
所有文本内容可在以下文件中修改：
- 应用信息: `src/mock/appData.ts` 中的 `appInfo`
- 轮播图内容: `src/mock/appData.ts` 中的 `carouselItems`
- 教程内容: `src/mock/appData.ts` 中的 `tutorials`
- 赞赏数据: `src/db/rewards.json`

### 修改图片
1. 本地图片:
- 将图片放入 `src/assets/images/` 目录
- 在代码中使用相对路径引用，如: `import myImage from '@/assets/images/my-image.jpg'`

2. 远程图片:
- 修改 `src/mock/appData.ts` 中对应的图片URL字段
- 主要图片字段:
  - appInfo.icon: 应用图标
  - carouselItems[].image: 轮播图图片
  - rewardData.wechatQR/alipayQR: 支付二维码
  - wechatQR: 微信公众号二维码

## 开发指南

### 运行项目
```bash
npm install
npm run dev
```

### 构建生产版本
```bash
npm run build
```

### 技术栈
- React 18 + TypeScript
- Tailwind CSS
- Framer Motion (动画)
- Sonner (Toast通知)

## 部署到GitHub

### 1. 创建GitHub仓库
- 在GitHub上新建一个仓库
- 不要初始化README、.gitignore等文件

### 2. 初始化本地Git仓库
```bash
git init
git add .
git commit -m "初始提交"
```

### 3. 连接到远程仓库
```bash
git remote add origin https://github.com/你的用户名/仓库名.git
git branch -M main
git push -u origin main
```

### 4. 部署到GitHub Pages
1. 安装gh-pages:
```bash
npm install gh-pages --save-dev
```

2. 在package.json中添加:
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

## 贡献指南
欢迎提交Pull Request，请确保:
1. 代码风格一致
2. 包含必要的注释
3. 通过所有测试
4. 更新相关文档

## 许可证
MIT License

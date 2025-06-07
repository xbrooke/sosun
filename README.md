# 领克第三方应用商店项目

## 项目简介
这是一个为领克车主提供的第三方应用商店，包含Free和Pro两个版本的应用下载功能。

## GitHub代码上传指南

### 1. 准备工作
- 确保已安装Git ([下载地址](https://git-scm.com/downloads))
- 拥有GitHub账号 ([注册地址](https://github.com/signup))

### 2. 创建GitHub仓库
1. 登录GitHub账号
2. 点击右上角"+" → "New repository"
3. 填写仓库名称(如"lynk-app-store")
4. 选择"Public"(公开)或"Private"(私有)
5. 点击"Create repository"

### 3. 本地Git初始化
在项目根目录执行以下命令：1

```bash
# 初始化Git仓库
git init

# 添加所有文件到暂存区
git add .

# 提交更改
git commit -m "初始提交"
```

### 4. 连接远程仓库
复制GitHub仓库的SSH或HTTPS地址，然后执行：

```bash
# 添加远程仓库
git remote add origin 你的仓库地址

# 验证远程仓库
git remote -v
```

### 5. 推送代码
执行推送命令：

```bash
# 首次推送(设置上游分支)
git push -u origin main

# 后续推送
git push
```

### 6. 验证
刷新GitHub仓库页面，确认代码已成功上传。

## 常见问题
1. 权限错误：确保GitHub账号有仓库写入权限
2. 冲突解决：使用`git pull`拉取最新代码后再推送
3. 大文件：GitHub限制文件大小不超过100MB

## 项目结构
```
├── src/
│   ├── components/ - 所有React组件
│   ├── hooks/ - 自定义Hook
│   ├── pages/ - 页面组件
│   └── mock/ - 模拟数据
├── public/ - 静态资源
└── README.md - 项目文档
```

## 开发指南
1. 安装依赖：`pnpm install`
2. 启动开发服务器：`pnpm dev`
3. 构建生产版本：`pnpm build`

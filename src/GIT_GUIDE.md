# Git使用教程

## 基本配置
```bash
# 设置用户名
git config --global user.name "Your Name"

# 设置邮箱
git config --global user.email "your.email@example.com"

# 查看配置
git config --list
```

## 常用命令
```bash
# 克隆仓库
git clone https://github.com/xbrooke/link-app-store.git

# 查看状态
git status

# 添加所有更改
git add .

# 提交更改
git commit -m "提交说明"

# 推送到远程仓库
git push origin main

# 拉取最新代码
git pull origin main

# 创建新分支
git branch feature/new-feature

# 切换分支
git checkout feature/new-feature

# 合并分支
git merge feature/new-feature
```

## 开发流程
1. 从主分支创建新分支
2. 在新分支上进行开发
3. 提交更改到新分支
4. 创建Pull Request
5. 代码审查后合并到主分支

## 常见问题
### 撤销本地更改
```bash
# 撤销所有未暂存更改
git checkout .

# 撤销特定文件更改
git checkout -- filename
```

### 解决冲突
1. 拉取最新代码时出现冲突
2. 手动解决冲突文件中的冲突
3. 标记冲突已解决
```bash
git add conflicted-file.js
git commit
```

### 回退提交
```bash
# 查看提交历史
git log --oneline

# 回退到指定提交
git reset --hard commit_hash
```

## 最佳实践
- 保持提交信息清晰明确
- 频繁提交小更改
- 在推送前运行测试
- 定期从主分支拉取更新
- 使用分支进行功能开发

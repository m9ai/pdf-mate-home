# Deploy PDF Mate Landing Page to GitHub Pages

## 1. 创建 GitHub 仓库

1. 访问 https://github.com/new
2. 仓库名称填写 `pdf-mate`
3. 设置为 Public（GitHub Pages 免费版需要 Public）
4. 点击 **Create repository**

## 2. 推送代码到 GitHub

```bash
# 初始化 git（如果还没有）
git init

# 添加远程仓库（替换 yourusername 为你的 GitHub 用户名）
git remote add origin https://github.com/yourusername/pdf-mate.git

# 提交代码
git add .
git commit -m "Initial commit"

# 推送到 main 分支
git branch -M main
git push -u origin main
```

## 3. 配置 GitHub Pages

1. 打开仓库页面 `https://github.com/yourusername/pdf-mate`
2. 点击 **Settings** 标签
3. 左侧菜单选择 **Pages**
4. **Source** 选择 **GitHub Actions**
5. 等待自动部署完成

## 4. 访问网站

部署完成后，访问：
```
https://yourusername.github.io/pdf-mate/
```

## 5. 更新网站

每次推送代码到 main 分支，GitHub Actions 会自动重新构建并部署：

```bash
git add .
git commit -m "Update landing page"
git push origin main
```

## 注意事项

- 确保 `vite.config.ts` 中的 `base: '/pdf-mate/'` 与仓库名一致
- 如果仓库名不同，请同步修改 `base` 和 `package.json` 中的 `homepage`
- 首次部署可能需要 1-2 分钟

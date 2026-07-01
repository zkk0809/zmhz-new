# 最美杭州 (zmhz-new)

基于 Vue 3 + Vite + Vue Router 重构的「最美杭州」旅游文化展示网站。

## 技术栈

- Vue 3 (Composition API)
- Vue Router 4
- Axios
- Vite 4

## 功能

- 🏠 主页 — 图片轮播 + 导航卡片
- 🎭 杭州文化 — 图文介绍 + 视频展示
- 🗺️ 杭州旅游 — 景点 / 美食 / 攻略 Tab 切换
- 🔐 登录注册 — JWT 鉴权
- 👥 用户管理 — 增删改查

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 生产构建

```bash
npm run build
```

## 后端依赖

本项目需要后端 API 服务运行在 `http://localhost:3000`。

后端项目仓库：**https://github.com/zkk0809/zmhz**（位于 `zmhz服务器/` 目录）

包含以下接口：

| 接口 | 方法 | 说明 |
|------|------|------|
| `/jwt` | POST | Token 鉴权验证 |
| `/login` | POST | 用户登录 |
| `/users` | GET | 获取用户列表 |
| `/users` | POST | 注册新用户 |
| `/users/:id` | PUT | 修改用户信息 |
| `/users/:id` | DELETE | 删除用户 |

后端需要 MongoDB 服务运行在 `mongodb://127.0.0.1:27017/zk-zmhz`。

### 使用 Docker 启动 MongoDB

```bash
docker run -d --name zmhz-mongo -p 27017:27017 mongo:latest
```

## 原项目

原始 jQuery 多页项目位于同级目录 `zmhz/`，本项目为 Vue 3 SPA 重构版。

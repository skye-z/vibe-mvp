# 快速开始

## 安装

VibeMVP 作为 OpenCode 插件使用，将插件放置在 `.opencode/plugins/` 目录：

```bash
# 从 VibeMVP 仓库
cp -r VibeMVP/release/plugins/mvp-plugins.ts your-project/.opencode/plugins/
```

## 快速上手

### 1. 初始化项目

```bash
mvp_init(projectName: "任务管理应用", requirements: "我想创建一个任务管理应用，包含用户认证功能")
```

### 2. 添加需求

```bash
mvp_add(requirements: "需要添加团队协作功能")
```

### 3. 执行任务

```bash
mvp_next()
```

## 项目结构

初始化后，VibeMVP 会创建 `.mvp/` 目录：

```
your-project/
├── .mvp/
│   ├── guide/           # 项目指南（流程、配置、特殊要求）
│   ├── modules/         # 功能模块文档
│   ├── roadmap/         # MVP 版本路线图
│   └── zh/              # 中文文档
│       ├── guide/
│       ├── modules/
│       └── roadmap/
```

## 路线图版本

MVP 路线图包含至少四个版本：

- **初始版本** - 安装依赖、创建目录结构
- **最小可用版本** - 完成核心功能
- **测试版本** - 完成 E2E 和系统测试
- **未来迭代版本** - 完成剩余功能

# 快速开始

## 安装

将 `.opencode` 和 `.vm` 文件夹复制到你的项目：

```bash
# 从 VibeMVP 仓库
cp -r VibeMVP/.opencode your-project/.opencode
cp -r VibeMVP/.vm your-project/.vm
```

或全局安装：

```bash
cp -r VibeMVP/.opencode ~/.config/opencode/
```

## 快速上手

### 1. 初始化项目

```bash
/vb-init 我想创建一个任务管理应用，包含用户认证功能
```

### 2. 添加需求

```bash
/vb-add 需要添加团队协作功能
```

### 3. 执行任务

```bash
# 执行下一个任务
/vb-next

# 执行所有任务直到完成
/vb-to-end

# 查看状态
/vb-status
```

## 项目结构

初始化后，VibeMVP 会创建：

```
your-project/
├── .opencode/
│   ├── commands/       # 命令定义
│   ├── plugins/        # 插件（自定义工具）
│   └── package.json
└── .vm/
    ├── vibe.config.json  # 项目配置
    ├── template/         # 文档模板
    └── docs/             # 生成的文档
        ├── guide/
        ├── modules/
        └── roadmap/
```

## 可用工具

插件提供以下 AI 工具：

| 工具 | 描述 |
|------|------|
| `vb_init` | 使用需求初始化项目 |
| `vb_add` | 添加新需求 |
| `vb_next` | 执行下一个任务 |
| `vb_to_end` | 执行所有任务 |
| `vb_status` | 显示项目状态 |

# VibeMVP - OpenCode MVP 项目管理插件

VibeMVP 是一个面向 OpenCode 的 MVP 风格项目管理与文档生成插件。它帮助开发者系统性地管理项目需求、跟踪开发进度，并自动生成项目文档。

## 安装

请将插件添加到 Opencode 配置文件(`~/.config/opencode/opencode.json`):

```json
{
  "$schema": "https://opencode.ai/config.json",
  "plugin": ["opencode-vibemvp@latest"]
}
```

> ⚠ 当前项目仍处于内测阶段，请clone后执行`yarn build`，将生成的`release`目录中的两个文件夹复制到`~/.config/opencode/`目录下

## 许可证

MIT License

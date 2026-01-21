# Introduction

VibeMVP is an MVP-style project management and documentation plugin for OpenCode. It helps developers systematically manage project requirements, track development progress, and automatically generate project documentation.

## Features

- **Project Initialization** - Initialize projects with natural language requirements, generating complete MVP templates
- **Requirement Management** - Add and manage project requirements, automatically updating the roadmap
- **Task Execution** - Execute development tasks according to the roadmap
- **Auto Documentation** - Generate VitePress documentation with bilingual support (Chinese/English)

## How It Works

1. **Initialize** - Use `mvp_init` to describe project requirements in natural language
2. **Generate Template** - Create `.mvp/` directory with guide, modules, and roadmap modules
3. **Plan Versions** - Break down requirements into at least four MVP versions (initial, minimum viable, test, future iteration)
4. **Execute Tasks** - Use `mvp_next` to work through tasks step by step
5. **Iterate** - Use `mvp_add` to add new requirements

## Project Structure

```
.mvp/
├── guide/           # Guide (process, configuration, requirements)
├── modules/         # Modules (features broken into different modules)
├── roadmap/         # Roadmap (MVP version planning)
└── zh/              # Chinese version
    ├── guide/
    ├── modules/
    └── roadmap/
```

## Next Steps

- [Getting Started](/en/guide/getting-started) - Quick start guide
- [Commands](/en/guide/commands) - Learn all available commands
- [Configuration](/en/guide/configuration) - Customize VibeMVP

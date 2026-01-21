# Getting Started

## Installation

VibeMVP is used as an OpenCode plugin. Place the plugin in `.opencode/plugins/`:

```bash
# From VibeMVP repository
cp -r VibeMVP/release/plugins/mvp-plugins.ts your-project/.opencode/plugins/
```

## Quick Start

### 1. Initialize Project

```bash
mvp_init(projectName: "Task Manager", requirements: "I want to build a task management app with user authentication")
```

### 2. Add Requirements

```bash
mvp_add(requirements: "Need team collaboration features")
```

### 3. Execute Tasks

```bash
mvp_next()
```

## Project Structure

After initialization, VibeMVP creates `.mvp/`:

```
your-project/
├── .mvp/
│   ├── guide/           # Project guide (process, configuration, requirements)
│   ├── modules/         # Feature module documentation
│   ├── roadmap/         # MVP version roadmap
│   └── zh/              # Chinese documentation
│       ├── guide/
│       ├── modules/
│       └── roadmap/
```

## Roadmap Versions

The MVP roadmap contains at least four versions:

- **Initial Version** - Install dependencies, create directory structure
- **Minimum Viable Version** - Complete core functionality
- **Test Version** - Complete E2E and system testing
- **Future Iteration Version** - Complete remaining features

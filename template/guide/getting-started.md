# Getting Started

## Installation

Copy the `.opencode` and `.vm` folders to your project:

```bash
# From VibeMVP repository
cp -r VibeMVP/.opencode your-project/.opencode
cp -r VibeMVP/.vm your-project/.vm
```

Or for global installation:

```bash
cp -r VibeMVP/.opencode ~/.config/opencode/
```

## Quick Start

### 1. Initialize Project

```bash
/vb-init I want to build a task management app with user authentication
```

### 2. Add Requirements

```bash
/vb-add Need team collaboration features
```

### 3. Execute Tasks

```bash
# Execute next task
/vb-next

# Execute all tasks to completion
/vb-to-end

# Check status
/vb-status
```

## Project Structure

After initialization, VibeMVP creates:

```
your-project/
├── .opencode/
│   ├── commands/       # Command definitions
│   ├── plugins/        # Plugin with custom tools
│   └── package.json
└── .vm/
    ├── vibe.config.json  # Project configuration
    ├── template/         # Document templates
    └── docs/             # Generated documentation
        ├── guide/
        ├── modules/
        └── roadmap/
```

## Available Tools

The plugin provides these AI tools:

| Tool | Description |
|------|-------------|
| `vb_init` | Initialize project with requirements |
| `vb_add` | Add new requirement |
| `vb_next` | Execute next task |
| `vb_to_end` | Execute all tasks |
| `vb_status` | Show project status |

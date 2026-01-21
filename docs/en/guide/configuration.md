# Configuration

VibeMVP uses template files in the `.mvp/` directory for configuration.

## Template Structure

```
.mvp/
├── guide/           # Project guide
│   ├── index.md     # Main documentation
│   └── *.md         # Other guide files
├── modules/         # Feature modules
│   └── *.md         # Module documentation
├── roadmap/         # Version roadmap
│   └── v0-*.md      # Version files (dots replaced with hyphens)
└── zh/              # Chinese version
    ├── guide/
    ├── modules/
    └── roadmap/
```

## Template Variables

Variables wrapped in `++` are replaced during initialization:

| Variable | Description |
|----------|-------------|
| `++PROJECT_NAME++` | Project name |
| `++PROJECT_REQUIREMENTS++` | Project requirements |

## Roadmap Version Naming

Version file naming format: `v{major}-{minor}.md`

Example: `v0-1.md`, `v1-0.md`

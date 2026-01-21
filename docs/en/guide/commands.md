# Commands

VibeMVP provides three commands:

## mvp_init

Initialize a new project with natural language requirements.

**Parameters:**
- `projectName` (optional) - Project name
- `requirements` (required) - Project requirements in natural language

**What it does:**
- Creates `.mvp/` directory structure
- Generates template documentation (guide, modules, roadmap)
- Breaks down requirements into MVP version roadmap

## mvp_add

Add new requirements to an existing project.

**Parameters:**
- `requirements` (optional) - New requirements in natural language, auto-analyzes if not provided

**What it does:**
- Parses new requirements
- Updates roadmap with new versions
- Considers prerequisites and test versions

## mvp_next

Execute the next pending task in the roadmap.

**What it does:**
- Identifies next task from roadmap
- Reads guide and modules for requirement details
- Executes task and updates documentation with git commits

import { copyFileSync, mkdirSync, readdirSync, existsSync, rmSync, writeFileSync, readFileSync } from 'fs';
import { join, resolve } from 'path';

const projectRoot = resolve(process.cwd());
const releaseDir = join(projectRoot, 'release');

function copyDir(src, dest) {
  if (!existsSync(src)) return;

  if (!existsSync(dest)) {
    mkdirSync(dest, { recursive: true });
  }

  const entries = readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.name === '.opencode') continue;

    const srcPath = join(src, entry.name);
    const destPath = join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      try {
        copyFileSync(srcPath, destPath);
      } catch (e) {
        console.warn(`Failed to copy ${srcPath}: ${e.message}`);
      }
    }
  }
}

function copySpecificFiles(srcPatterns, destDir) {
  for (const pattern of srcPatterns) {
    const srcPath = join(projectRoot, pattern);
    const fileName = pattern.split('/').pop();
    const destPath = join(destDir, fileName);

    if (existsSync(srcPath)) {
      try {
        copyFileSync(srcPath, destPath);
        console.log(`Copied ${pattern} to ${destPath}`);
      } catch (e) {
        console.warn(`Failed to copy ${srcPath}: ${e.message}`);
      }
    }
  }
}

function generateCommandDocs() {
  const commands = [
    {
      name: 'mvp_init',
      description: 'Initialize VibeMVP project management',
      args: [
        { name: 'requirements', description: 'Project requirements in natural language', required: true },
        { name: 'projectName', description: 'Optional project name', required: false },
      ],
    },
    {
      name: 'mvp_add',
      description: 'Add new requirement to VibeMVP project',
      args: [
        { name: 'requirement', description: 'New requirement in natural language', required: true },
      ],
    },
    {
      name: 'mvp_next',
      description: 'Execute the next pending task in VibeMVP roadmap',
      args: [],
    },
  ];

  for (const cmd of commands) {
    const content = `---
description: ${cmd.description}
agent: general
---

You are a VibeMVP assistant. The user wants to use the ${cmd.name} command.

${cmd.args.length > 0 ? `Extract the required arguments from the user's message:
${cmd.args.filter(a => a.required).map(a => `- ${a.name}: ${a.description}`).join('\n')}

${cmd.args.filter(a => !a.required).map(a => `- ${a.name} (optional): ${a.description}`).join('\n')}` : 'No arguments required.'}

Then execute the ${cmd.name} tool with the extracted arguments.

Use the tool system to call:
${cmd.name}(${cmd.args.map(a => a.name).join(', ')})

Where the arguments should be extracted from the user's request or set to appropriate defaults.
`;
    writeFileSync(join(releaseDir, 'commands', `${cmd.name}.md`), content);
  }
}

console.log('Building VibeMVP plugin...');

if (existsSync(releaseDir)) {
  rmSync(releaseDir, { recursive: true, force: true });
}

mkdirSync(join(releaseDir, 'commands'), { recursive: true });
mkdirSync(join(releaseDir, 'plugins', 'vibe-mvp', 'template'), { recursive: true });

copyDir(join(projectRoot, 'template', 'guide'), join(releaseDir, 'plugins', 'vibe-mvp', 'template', 'guide'));
copyDir(join(projectRoot, 'template', 'modules'), join(releaseDir, 'plugins', 'vibe-mvp', 'template', 'modules'));
copyDir(join(projectRoot, 'template', 'roadmap'), join(releaseDir, 'plugins', 'vibe-mvp', 'template', 'roadmap'));
copyDir(join(projectRoot, 'template', 'zh', 'guide'), join(releaseDir, 'plugins', 'vibe-mvp', 'template', 'zh', 'guide'));
copyDir(join(projectRoot, 'template', 'zh', 'modules'), join(releaseDir, 'plugins', 'vibe-mvp', 'template', 'zh', 'modules'));
copyDir(join(projectRoot, 'template', 'zh', 'roadmap'), join(releaseDir, 'plugins', 'vibe-mvp', 'template', 'zh', 'roadmap'));
copyDir(join(projectRoot, 'template', 'zh'), join(releaseDir, 'plugins', 'vibe-mvp', 'template', 'zh'));

const rootFiles = [
  'template/index.md',
  'template/package.json',
];
copySpecificFiles(rootFiles, join(releaseDir, 'plugins', 'vibe-mvp', 'template'));

const pluginTsPath = join(projectRoot, 'src', 'plugin.ts');
const pluginTsDest = join(releaseDir, 'plugins', 'mvp-plugins.ts');
if (existsSync(pluginTsPath)) {
  copyFileSync(pluginTsPath, pluginTsDest);
  console.log(`Copied plugin.ts to ${pluginTsDest}`);
}

generateCommandDocs();

console.log('Plugin built to release/ directory');
console.log('Contents:');
console.log('  release/');
console.log('    commands/       - Command documentation');
console.log('    plugins/vibe-mvp/ - VibeMVP plugin files');
console.log('      template/     - Template files');
console.log('      package.json  - Package configuration');
console.log('    mvp-plugins.ts  - Plugin source');

import { copyFileSync, mkdirSync, readdirSync, existsSync, rmSync, writeFileSync, readFileSync } from 'fs';
import { join, resolve } from 'path';

const projectRoot = resolve(process.cwd());
const distDir = join(projectRoot, 'dist');

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

console.log('Building VibeMVP plugin...');

if (existsSync(distDir)) {
  rmSync(distDir, { recursive: true, force: true });
}

mkdirSync(join(distDir, 'template', 'guide'), { recursive: true });
mkdirSync(join(distDir, 'template', 'modules'), { recursive: true });
mkdirSync(join(distDir, 'template', 'roadmap'), { recursive: true });
mkdirSync(join(distDir, 'template', 'zh', 'guide'), { recursive: true });
mkdirSync(join(distDir, 'template', 'zh', 'modules'), { recursive: true });
mkdirSync(join(distDir, 'template', 'zh', 'roadmap'), { recursive: true });

copyDir(join(projectRoot, 'template', 'guide'), join(distDir, 'template', 'guide'));
copyDir(join(projectRoot, 'template', 'modules'), join(distDir, 'template', 'modules'));
copyDir(join(projectRoot, 'template', 'roadmap'), join(distDir, 'template', 'roadmap'));
copyDir(join(projectRoot, 'template', 'zh', 'guide'), join(distDir, 'template', 'zh', 'guide'));
copyDir(join(projectRoot, 'template', 'zh', 'modules'), join(distDir, 'template', 'zh', 'modules'));
copyDir(join(projectRoot, 'template', 'zh', 'roadmap'), join(distDir, 'template', 'zh', 'roadmap'));

const rootFiles = [
  'template/index.md',
  'template/package.json',
];
for (const pattern of rootFiles) {
  const srcPath = join(projectRoot, pattern);
  const fileName = pattern.split('/').pop();
  const destPath = join(distDir, 'template', fileName);
  if (existsSync(srcPath)) {
    copyFileSync(srcPath, destPath);
  }
}

const pluginContent = readFileSync(join(projectRoot, 'src', 'plugin.ts'), 'utf-8');
const exportContent = `/**
 * VibeMVP - OpenCode Plugin for MVP-style project management
 * @packageDocumentation
 */

export type { Plugin, Tool, Context } from '@opencode-ai/plugin';

// Core plugin
export { VibeMVPPlugin, default } from './plugin';

// Re-export for convenience
export const tools = {
  mvp_init: 'Initialize VibeMVP project management',
  mvp_add: 'Add new requirement to VibeMVP',
  mvp_next: 'Execute next pending task in roadmap',
};
`;

writeFileSync(join(distDir, 'plugin.js'), pluginContent);
writeFileSync(join(distDir, 'index.js'), `export { VibeMVPPlugin, default, tools } from './plugin.js';`);
writeFileSync(join(distDir, 'index.d.ts'), exportContent);

console.log('Plugin built to dist/ directory');
console.log('Contents:');
console.log('  dist/');
console.log('    plugin.js       - Main plugin code');
console.log('    index.js        - Entry point');
console.log('    index.d.ts      - TypeScript declarations');
console.log('    template/       - MVP template files');
console.log('      guide/');
console.log('      modules/');
console.log('      roadmap/');
console.log('      zh/');

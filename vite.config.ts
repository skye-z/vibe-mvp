import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'VibeBoard',
      fileName: 'vibeboard'
    },
    rollupOptions: {
      external: ['vitepress'],
      output: {
        globals: {
          vitepress: 'VitePress'
        }
      }
    }
  }
});

import { defineConfig } from 'vite';

// 게임 원본(game/)은 그대로 번들하고, 이미지 등 정적 파일은 public/ 에서 그대로 복사한다.
export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    target: 'es2020',
    assetsInlineLimit: 0,
    chunkSizeWarningLimit: 2000,
  },
  server: { port: 5173, host: true },
});

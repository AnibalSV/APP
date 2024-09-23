import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { configDefaults } from 'vitest/config';

export default defineConfig({
  base: '/App/',
  plugins: [react()],
  test: {
    coverage: {
      reporter: ['text', 'lcov'], 
      reportsDirectory: './coverage',
    },
  },
});

// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import { dependencies, devDependencies } from './package.json'
import react from "@vitejs/plugin-react-swc";
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins:[
    react(),
    dts({
rollupTypes:true,
    }),
  ],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      name: '@alex77/react-ui-kit',
      formats: ['es','cjs'],
      // the proper extensions will be added
      fileName: 'index',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        ...Object.keys(dependencies),
        ...Object.keys(devDependencies),
        'react/jsx-runtime',
      ],
      output: {
        dir: "dist",
        entryFileNames: "[name].cjs",
        format: "cjs",
      },
    },
    sourcemap: true,
    //чтобы использовать последние фичи
    target: 'esnext',
  },
})

// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import { dependencies, devDependencies } from './package.json'

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      name: '@alex77/react-ui-kit',
      formats: ['es'],
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
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react:'React',
          'react-dom':'ReactDOM',
        },
      },
    },
    sourcemap: true,
    //чтобы использовать последние фичи
    target: 'esnext',
  },
})

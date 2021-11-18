import {resolve} from 'path'
import {readdirSync} from 'fs';
import {defineConfig} from 'vite';


const buildInput = function () {
  const inputs = {};
  const components = readdirSync(resolve(__dirname, 'src/components'));
  components.forEach(component => inputs[component] = resolve(__dirname, `src/components/${component}/index.ts`));
  inputs['index'] = resolve(__dirname, 'src/index.ts');
  return inputs;
}


export default defineConfig({
  build: {
    target: 'chrome99',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'mxui',
      formats: ['es'],
      fileName: (format) => `mxui.${format}.js`
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['avm'],
      input: buildInput(),
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          avm: 'avm'
        },
        entryFileNames: '[name]/index.js',
        chunkFileNames: '[name]/[name].js',
        assetFileNames: '[name]/[name].[ext]',
        manualChunks: false,
        // dir: `D:/work/uz/小组工作/mp-web-test/components/mxui`,
        dir: `dist/mxui`,
        esModule: true,
        exports: 'named',
      },
      preserveEntrySignatures: "strict",
    },
    cssCodeSplit: true
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          // '@class-prefix': 'mx',
        },
      }
    },
    output: (style) => {
      console.log(style)
    }
  }
})

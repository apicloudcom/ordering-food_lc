import {resolve} from 'path'
import {readdirSync} from 'fs';
import {defineConfig} from 'vite';

const {name, widgetDir} = require('./avm-ui.config.json');

export default defineConfig(({mode}) => {
  const config = {
    build: {
      target: 'chrome99',
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        formats: ['es'],
        fileName: format => `${name}.js`
      },
      rollupOptions: {
        // 确保外部化处理那些你不想打包进库的依赖
        external: ['avm'],
        output: {
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: {
            avm: 'avm'
          },
          manualChunks: false,
          dir: `${widgetDir}/components/${name}`,
          esModule: true,
          exports: 'named',
        },
        preserveEntrySignatures: "strict",
      },
      cssCodeSplit: true
    }
  };

  if (mode === 'single') {
    config.build.rollupOptions.output.assetFileNames = `${name}.[ext]`;
  } else if (mode === 'chunk') {
    console.log("chunk 模式仍需改进")
    const buildInput = function () {
      const inputs = {};
      const components = readdirSync(resolve(__dirname, 'src/components'));
      components.forEach(component => inputs[component] = resolve(__dirname, `src/components/${component}/index.ts`));
      inputs['index'] = resolve(__dirname, 'src/index.ts');
      return inputs;
    }
    config.build.rollupOptions.input = buildInput();
    config.build.rollupOptions.output.entryFileNames = '[name]/index.js';
    config.build.rollupOptions.output.chunkFileNames = '[name]/[name].js';
    config.build.rollupOptions.output.assetFileNames = '[name]/[name].[ext]';
  }
  return config;
})
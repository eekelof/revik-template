import { defineConfig } from 'vite';

export default defineConfig({
    esbuild: {
        jsx: "transform",
        jsxDev: false,
        jsxImportSource: "revik",
        jsxInject: `import revik, {rvar} from 'revik'`,
        jsxFactory: "revik"
    }
});
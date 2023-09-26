import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import postcssPresetEnv from 'postcss-preset-env'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
        },
    },
    css: {
        postcss: {
            plugins: [
                // https://github.com/csstools/postcss-preset-env
                // https://preset-env.cssdb.org/
                postcssPresetEnv({ stage: 2 }),
            ],
        },
    },
})

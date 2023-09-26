import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import mockDevServerPlugin from 'vite-plugin-mock-dev-server'
import postcssPresetEnv from 'postcss-preset-env'

// https://vitejs.dev/config/
export default defineConfig({
    /* eslint-disable */
    plugins: [
        vue(),

        // https://vite-plugin-mock-dev-server.netlify.app/
        mockDevServerPlugin(),
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
        },
    },
    server: {
        proxy: {
            '/api': {
                target: 'http://example.com/',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
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

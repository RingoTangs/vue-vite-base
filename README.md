# Vue Vite Base

## package.json

```json
"scripts": {
    "dev": "vite",
    "build": "vue-tsc && vite build",
    "preview": "vite preview",
    "lint:eslint": "eslint ./src --ext .ts,.vue --max-warnings 0",
    "lint:prettier": "prettier --write ./**/*.{js,cjs,ts,vue,html,css,json}",
    "lint": "npm run lint:prettier && npm run lint:eslint",
    "prepare": "husky install",
    "lint-staged": "lint-staged",
    "commitlint": "commitlint --config commitlint.config.cjs -e -V",
    "commit": "cz"
}
```

脚本说明：

- `dev、build、preview` 这是 vite 自带的脚本。
- `lint:eslint、lint:prettier、lint`这是ESlint和格式化相关的脚本。
- `prepare` 初始化 git hooks。
- `lint-stage、commitlint` 在 git hooks husky 中调用的，不用手动调用。
- `commit` 用来替代 git commit，提交代码的时候使用。
# Vue Vite Base

## 分支说明

### master分支

| 库名称      | 是否支持           |
| ----------- | ------------------ |
| eslint      | :heavy_check_mark: |
| prettier    | :heavy_check_mark: |
| lint-staged | :heavy_check_mark: |
| commitizen  | :heavy_check_mark: |
| husy        | :heavy_check_mark: |
| mock server | :heavy_check_mark: |



### mock 分支

| 库名称      | 是否支持           |
| ----------- | ------------------ |
| eslint      | :heavy_check_mark: |
| prettier    | :heavy_check_mark: |
| lint-staged | :heavy_check_mark: |
| commitizen  | :heavy_check_mark: |
| husy        | :heavy_check_mark: |
| mock server | :heavy_check_mark: |



### base 分支

| 库名称      | 是否支持                 |
| ----------- | ------------------------ |
| eslint      | :heavy_check_mark:       |
| prettier    | :heavy_check_mark:       |
| lint-staged | :heavy_check_mark:       |
| commitizen  | :heavy_check_mark:       |
| husy        | :heavy_check_mark:       |
| mock server | :heavy_multiplication_x: |



# Usage

```
degit https://github.com/RingoTangs/vue-vite-base.git my-app

yarn 

yarn dev
```

如果没有安装 `degit`，查看：https://github.com/Rich-Harris/degit。

## package.json

```json
"scripts": {
    "dev": "vite",
    "build": "vue-tsc && vite build",
    "preview": "vite preview",
    
    "lint:eslint": "eslint ./src --ext .ts,.vue --max-warnings 0",
    "lint:prettier": "prettier --write ./**/*.{js,cjs,ts,vue,html,css,json}",
    "lint": "npm run lint:prettier && npm run lint:eslint",
    "lint:lint-staged": "lint-staged",
    
    "prepare": "husky install",
    "commitlint": "commitlint --config commitlint.config.cjs -e -V",
    "commit": "cz"
},
```

脚本说明：

- `dev、build、preview` 这是 vite 自带的脚本。
- `lint:eslint、lint:prettier、lint、lint:lint-staged`这是ESlint和格式化相关的脚本。
- `prepare` 初始化 git hooks。
- `commitlint` 在 git hooks husky 提交的时候中调用的，不用手动调用，用于约束提交内容的格式。
- `commit` 用来替代 git commit，提交代码的时候使用。直接 `yarn commit` 接可以提交了。


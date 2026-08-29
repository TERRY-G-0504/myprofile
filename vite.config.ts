import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 单一代码库，用环境变量区分平台。
// base 决定资源路径（HTML 里 assets 的 URL 前缀）。
// src/App.tsx 在运行时依据 URL 推导 BrowserRouter 的 basename：
// - Vercel 构建时自动注入 VERCEL=1 → base='/'，部署在根路径，无需 basename
// - GitHub Pages（本地 npm run build）无 VERCEL → base='/myprofile/'
const isVercel = process.env.VERCEL === '1'
const base = isVercel ? '/' : '/myprofile/'

export default defineConfig({
  plugins: [react()],
  base,
})

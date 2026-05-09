import process from 'node:process'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''
const isUserOrOrgPage = repositoryName.endsWith('.github.io')

export default defineConfig({
  plugins: [react()],
  base: repositoryName && !isUserOrOrgPage ? `/${repositoryName}/` : '/',
})

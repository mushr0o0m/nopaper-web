import { defineConfig } from 'vite'
import viteTsconfigPaths from 'vite-tsconfig-paths'

import react from '@vitejs/plugin-react-swc'
import vitePluginSvgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), viteTsconfigPaths(), vitePluginSvgr({ include: '**/*.svg?react' })],
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import viteTsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    // Root-domain asset URLs also work when opening a nested page directly.
    base: '/',
    plugins: [react(), viteTsconfigPaths()],
    server: {    
        // this ensures that the browser opens upon server start
        open: true,
        // this sets a default port to 3000  
        port: 3000, 
    },
    assetsInclude: ["**/*.zip", "**/*.docx"]
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA } from "vite-plugin-pwa"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({ 
      mode:'production',
      minify:true,
      registerType: "autoUpdate",
      injectRegister: "auto",
      devOptions:{
        enabled:true
      },
      includeAssets: ["/icon.png", "/icons/apple-icon-180.png"],
      manifest:{
        name:"Musicc",
        short_name:"Musicc",
        description:"Malagasy music streaming plateform",
        theme_color: "#0f172a",
        start_url: "/welcome",
        display: "standalone",
        lang:"en",
        icons: [
          {
            src: "/icons/manifest-icon-192.maskable.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable"
          },
          {
            src: "/icons/manifest-icon-512.maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable"
          },
          {
            src: "/icons/manifest-icon-192.maskable.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "/icons/manifest-icon-512.maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any"
          }
        ]
      }
    })
  
  ],
})

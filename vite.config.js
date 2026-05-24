import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main:          'index.html',
        labor:         'labor.html',
        immigrantLabor:'immigrant-labor.html',
        consolidation: 'consolidation.html',
        climate:       'climate.html',
        health:        'health.html',
        welfare:       'welfare.html',
      }
    }
  }
})

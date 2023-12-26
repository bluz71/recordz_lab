import { defineConfig } from 'astro/config'

import alpinejs from '@astrojs/alpinejs'
import htmx from 'astro-htmx'

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [alpinejs(), htmx()]
})

import { defineConfig } from 'cypress'

export default defineConfig({
    e2e: {
        baseUrl: 'https://rahulshettyacademy.com/',
        defaultCommandTimeout: 40000,
        pageLoadTimeout: 60000,
        viewportWidth: 1920,
        viewportHeight: 969,
        chromeWebSecurity: false,
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
})

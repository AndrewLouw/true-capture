const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        // This will make the variables in colors.scss globally available in every component
        additionalData: `@import "@/styles/colors.scss";`
      }
    }
  }
})

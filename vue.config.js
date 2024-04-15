const { defineConfig } = require('@vue/cli-service')

// 可以在官网的cli配置中查看详细的配置
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  pages:{
    index:{
      entry:'src/main.js',
      title:'Hello-vue'
    }
  }
})

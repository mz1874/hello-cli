const { defineConfig } = require('@vue/cli-service')

// 可以在官网的cli配置中查看详细的配置
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  pages:{
    index:{
      entry:'src/main.js',
      title:'GitHub demo'
    }
  },

  //方式1
  // devServer:{
  //   //配置代理服务器,由代理服务器将数据转发到实际的服务器
  //   proxy :"http://localhost:5000"
  // }

  //方式2
  devServer:{
    proxy:{
      //如果请求前缀是api, 那么转发
      '/api':{
        //转发的路径
        target:'http://localhost:5000',
        //重写对象
        pathRewrite:{'^/api':''},

        // 下面的这两个 默认是真
        // websocket 是否支持
        ws:true,
        // 是否告诉请求服务器,自己来源. 如果开启的话,则变成 目标服务器的请求地址, 控制请求头中的host
        changeOrigin: true,
      }
    }
  }
})

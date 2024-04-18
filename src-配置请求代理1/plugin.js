//可以添加之前定义的过滤器, 混入, 指令等,甚至还可以给原型中添加方法
const obj = {
    install(Vue){
        Vue.prototype.Hello=function (){
            alert('我是插件内的Hello')
        }
    }
}

export default obj
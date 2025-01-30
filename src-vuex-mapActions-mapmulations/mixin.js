export const mixIn = {
    methods:{
        showName(){
            alert(this.name)
        }
    }
}

//引入Mixin的组件都会继承mixin内的函数和方法. 如果出现冲突的话以原组件内的为主
//生命周期, 数据,局部混合
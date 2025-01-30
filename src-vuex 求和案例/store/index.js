import Vuex from "vuex"
import Vue from "vue"

Vue.use(Vuex)

const actions = {
    increment(context, payload) {
        // 提交到mutation里
        context.commit("Increment", payload)
    },
    increaseOdd(context, payload) {
        //模拟HTTP请求,判断当前的数值是否合法, 如果合法再进行commit
        if (context.state.sum % 2 == 1)
        {
            context.commit("IncreaseOd", payload)
        }
    },
    delayIncrease(context, payload) {
        setTimeout(()=>{
            context.commit("DelayIncrease", payload);
        }, 500)
    }
}
const mutations = {
    Increment(state, payload) {
        state.sum += payload;
    },
    decreaseCount(state, payload) {
        state.sum -= payload;
    },
    IncreaseOd(state, payload) {
        state.sum += payload;
    },
    DelayIncrease(state, payload) {
        state.sum += payload;
    }
}
const state = {
    sum: 0
}

export default new Vuex.Store({
    actions, mutations, state
})


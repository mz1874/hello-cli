
export default {
    namespaced: true,
    actions: {},
    mutations: {
        ADD_PERSON(state, data) {
            state.persons.unshift(data)
        }
    }
    ,
    getters: {},
    state: {
        persons: [
            {id: '1', name: "张三"}
        ]
    }
}
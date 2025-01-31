import Vuex from "vuex"
import Vue from "vue"

import CountAbout from "@/store/CountAbout";
import PersonAbout from "@/store/PersonAbout";

Vue.use(Vuex)


export default new Vuex.Store({
    modules: {
        countAbout: CountAbout,
        personAbout: PersonAbout
    }
})


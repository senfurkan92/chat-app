import Vue from "vue"
import Vuex from "vuex"
import userModule from "./userModule"
import usersModule from "./usersModule"
import messagesModule from "./messagesModule"

Vue.use(Vuex);

const store = new Vuex.Store({
    modules:[userModule,usersModule,messagesModule],
    state:{},
    getters:{},
    mutations:{},
    actions:{}
})

export default store;
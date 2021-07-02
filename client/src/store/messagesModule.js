const state = {
    list:[]
}

const getters={
    getMessages(state){
        return state.list;
    }
}

const mutations={
    setMessages(state,list){
        state.list = list;
    }
}

const actions={

}

export default{
    state,
    getters,
    mutations,
    actions
}

const state = {
    list:[]
}

const getters={
    getUsers(state){
        return state.list;
    }
}

const mutations={
    setUsers(state,list){
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

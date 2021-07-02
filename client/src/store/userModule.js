const state = {
    login:false,
    id:"",
    nickname:"",
}

const getters={
    getLogin(state){
        return state.login;
    },
    getId(state){
        return state.id;
    },
    getNickname(state){
        return state.nickname;
    }
}

const mutations={
    setLogin(state,payload){
        state.login = payload;
    },
    setId(state,payload){
        state.id = payload;
    },
    setNickname(state,payload){
        state.nickname = payload;
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

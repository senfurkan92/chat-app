<template>
  <div class="row">
    <div class="col-12 text-center bg-dark text-light rounded-top">
        <h4 class="pt-1">LOGIN</h4>
    </div>
    <div class="col-12 border border-dark rounded-bottom text-center p-3">
        <form @submit.prevent="login()">
            <!-- one way binding -->
            <input class="form-control center text-center" style="max-width:400px" placeholder="Nickname" @input="nickname = $event.target.value"/>
            <button class="btn btn-success mt-3 w-100" style="max-width:300px">Submit</button>
        </form>
    </div>
  </div>
</template>

<script>
import {mapMutations} from "vuex"

export default {
    data(){
        return{
            nickname:""
        }
    },
    methods:{
        ...mapMutations(["setLogin","setNickname"]),
        login(){
            this.$socket.emit("new_user", this.nickname)
            this.setLogin(true)
            this.setNickname(this.nickname)
        }
    }
}
</script>

<style>
    .center{
        position: relative;
        left:50%;
        transform: translate(-50%);
    }
</style>
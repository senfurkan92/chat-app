<template>
  <div class="row">
    <div class="col-12 text-center bg-dark text-light rounded-top">
        <h4 class="pt-1">MESSAGE</h4>
    </div>
    <div class="col-12 border border-dark p-2" style="overflow-y:auto;height:500px">
        <div v-for="message,index in getMessages" :key="index" class="w-100" :class="{'text-right':whetherOwner(message.userNickname)}">
          <div class="p-1 rounded mt-1 w-100"
          style="max-width:60%;position:relative"
          :style="{'transform':whetherOwner(message.userNickname)?'translateX(65%)':'translateX(0%)'}"
          :class="{'alert-success':whetherOwner(message.userNickname),'alert-warning':!whetherOwner(message.userNickname)}">
            <b>{{message.userNickname}}:</b> {{message.text}}
          </div>
        </div>
    </div>
    <div class="col-12 border border-dark rounded-bottom text-center p-3">
        <form @submit.prevent="sendMessage()">
            <!-- one way binding -->
            <textarea class="form-control" placeholder="Write here ..." @input="message = $event.target.value" :value="message" rows="3"></textarea>
            <button class="btn btn-success mt-3 w-100 float-right" style="max-width:300px">Send</button>
        </form>
    </div>
    <div class="col-12 border border-dark rounded p-0 mt-2">
      <ul class="list-group">
        <li class="list-group-item text-center"><b>Current Users</b></li>
        <li class="list-group-item" v-for="user in getUsers" :key="user._id">{{user.nickname}} &nbsp;&nbsp; <small class="float-right">( <b>id :</b> {{user._id}} )</small></li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex"

export default {
  data(){
    return {
      message:""
    }
  },
  computed:{
    ...mapGetters(["getUsers","getId","getNickname","getMessages"]),
  },
  methods:{
    sendMessage(){
      this.$socket.emit("new_message", {
        text:this.message,
        userId: this.getId,
        userNickname: this.getNickname
      })
      this.message = "";
    },
    whetherOwner(nickname){
      console.log(nickname,this.getNickname)
      return nickname == this.getNickname
    }
  }
}
</script>

<style>

</style>
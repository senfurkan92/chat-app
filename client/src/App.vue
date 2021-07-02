<template>
  <div>
    <nav class="w-100 text-center bg-info text-light p-2">
      <h3 style="font-family:Chewy"><i>VUE CHAT APP</i></h3>
    </nav>
    <div class="row justify-content-center m-0 mt-4">
      <div class="col-md-7">
          <component :is="currentComponent"></component>
      </div>
    </div>
  </div>
</template>

<script>
import Login from "./components/Login.vue"
import Message from "./components/Message.vue"
import {mapMutations,mapGetters} from "vuex"

export default {
  components:{
    appLogin: Login,
    appMessage: Message
  },
  created(){
    this.fetchUsers();
    this.fetchMessages();
  },
  sockets:{
    users(data){
      this.setUsers(data);
    },
    messages(data){
      this.setMessages(data);
    },
    userId(data){
      this.setId(data);
    }
  },
  methods:{
    ...mapMutations(["setUsers","setId","setMessages"]),
    fetchUsers(){
      this.$socket.emit("fetchUsers")
    },
    fetchMessages(){
      this.$socket.emit("fetchMessages")
    }
  },
  computed:{
    ...mapGetters(["getLogin"]),
    currentComponent(){
      return this.getLogin ? "appMessage":"appLogin"
    }
  }
}
</script>

<style>
  @import'~bootstrap/dist/css/bootstrap.css';

  @font-face {
    font-family: "Qahiri";
    src: local("Qahiri"),
    url(./fonts/Qahiri/Qahiri-Regular.ttf) format("truetype");
    }

   @font-face {
    font-family: "Chewy";
    src: local("Chewy"),
    url(./fonts/Chewy/Chewy-Regular.ttf) format("truetype");
    }
</style>
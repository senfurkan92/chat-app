import VueSocketIO from "vue-socket.io"
import SocketIO from "socket.io-client"

const connection = SocketIO("http://localhost:3000")

const vueSocket = new VueSocketIO({
    debug:true,
    connection
})

export default vueSocket;
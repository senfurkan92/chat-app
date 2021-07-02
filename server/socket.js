const socket = require("socket.io")
const serviceRun = require("./service")

const service = serviceRun();
const io = socket(service,{
    cors:{
        origin: "*"
    }
});

let users = [];
let messages = [];

const run = () => {
    io.on('connection', (socket) => {
        socket.on("new_user", (event) => {
            if(!(users.find(x=> x._id == socket.id)))
            {
                users.push({
                    _id:socket.id,
                    nickname:event
                });
                io.emit("userId",socket.id);
                io.emit("users",users);
            }
        })
        socket.on("new_message",(event)=>{
            messages.push(event);
            io.emit("messages",messages);
        })
        socket.on("fetchUsers",()=>{
            io.emit("user",users)
        })
        socket.on("fetchMessages",()=>{
            io.emit("messages",messages)
        })
        socket.on("disconnect",()=>{
            users = users.reduce((p,c)=>{
                if(c._id != socket.id)
                {
                    p.push(c);
                }
                return p;
            },[])
            io.emit("users",users)
        })
    })
}

module.exports = run;
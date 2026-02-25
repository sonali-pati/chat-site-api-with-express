import io from 'socket.io-client';
import { useEffect, useRef } from 'react';

const socket = io.connect("http://localhost:8000");


function Testchat() {

   // let logindetails = useRef(JSON.parse(localStorage.getItem("login_details")))

   let logindetails = JSON.parse(localStorage.getItem("login_details"))
   

   function sendMessage() {
      socket.emit("send_message", { message: "Hello from frontend"+logindetails,chanel:"" })
   }

   // useEffect(() => {
   //    socket.emit("create_channel", logindetails.current.userid)
   //    // hi varchi line mhanaje based on login create achannel,mhanaje jologin karael tyache channel banel

   // }, [])
 
    useEffect(()=>{
      socket.emit("create_channel",logindetails)
    },[])
         // hi varchi line mhanje jyane loginkele tyache channnel banale hyasathi aahe
         // aata lagech hechannel recieve karanyasathi backend madhe code addkarane
         // tomhanje socket.join cha code 


   useEffect(() => {
      socket.on("recieve_message", (data) => {
         console.log(data)
      })
   }, [socket])

   return (
      <div>
         <h1>Dummy Chat </h1>
         <button onClick={sendMessage}>Send somthing through socket connection</button>
      </div>
   )
}

export default Testchat;
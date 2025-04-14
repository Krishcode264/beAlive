const http = require("http");

const server = http.createServer();



const keepALive=["https://api.socialsphere.krishcode264.online/health","https://api.boldhug.krishcode264.online"]
const sendInterval = () => {
    setInterval(async () => {
         keepALive.forEach(async(url)=>{
            console.log("sending req")
            await fetch(url,{method:"GET"})
         })
    }, 1000 *60*8);
  };



server.listen(8080, () => {
  console.log("server started ");
  sendInterval()
});

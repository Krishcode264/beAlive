const http = require("http");



const keepALive=["https://api.socialsphere.krishcode264.online/health","https://api.boldhug.krishcode264.online"]
const sendInterval = () => {
    setInterval(async () => {
         keepALive.forEach(async(url)=>{
            console.log("sending req")
            await fetch(url,{method:"GET"})
         })
    }, 1000 *60*8);
  };

  const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end("Keep-alive server running.");
  });
  
  server.listen(8080, () => {
    console.log("Keep-alive server started on port 8080.");
    sendInterval();
  });

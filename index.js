const http = require("http");

const server = http.createServer((req, res) => {
  const { url, method } = req;
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;

  sendafterDelay(query.url);
  if (pathname === "/bealive") {
    console.log("being alive");
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("being alive ");
  }
});

const sendafterDelay = (url) => {
  setTimeout(async () => {
    await fetch(url, { method: "GET" });
  }, 1000 * 60 * 5);
};

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

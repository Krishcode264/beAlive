const http = require("http");

const keepALive = [
  "https://api.socialsphere.krishcode264.online",
  "https://api.boldhug.krishcode264.online",
];
const sendInterval = () => {
  setTimeout(async () => {
    keepALive.forEach(async (url) => {
      console.log("sending req");
      await fetch(url, {
        method: "GET",
        headers: {
          "User-Agent": "Mozilla/5.0",
        },
      });
    });
  }, 1000 * 60 * 2);
};

const server = http.createServer((req, res) => {
    sendInterval()
  res.writeHead(200);

  res.end("Keep-alive server running.");
});

server.listen(8080, () => {
  console.log("Keep-alive server started on port 8080.");
  sendInterval();
});

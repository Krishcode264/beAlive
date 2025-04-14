const http = require("http");

const keepAliveTargets = [
  "https://api.socialsphere.krishcode264.online",
  "https://api.boldhug.krishcode264.online",
];

let timer = null;

const triggerAfterDelay = () => {
  if (timer) clearTimeout(timer); // Clear any existing timer
  timer = setTimeout(async () => {
    for (const url of keepAliveTargets) {
      console.log("⏱ Sending request to:", url);
      await fetch(url, {
        method: "GET",
        headers: { "User-Agent": "Mozilla/5.0" },
      }).catch(console.error);
    }
  }, 1000 * 60 * 3); // ⏳ After 3 minutes
};

const server = http.createServer((req, res) => {
  triggerAfterDelay(); // When pinged, schedule a response
  res.writeHead(200);
  res.end("BLI server alive and will ping others soon.");
});

server.listen(8080, () => {
  console.log("✅ BLI server started on port 8080.");
});

const http = require("http");
http
  .createServer(function (request, response) {
    response.setHeader("Content-Type", "test/html; charset=utf-8;");
    if (request.url === "/is13fiot21187") {
      response.write("<h2>Pohorila Dariia, Course-1, IS-13</h2>");
    } else {
      response.write("<h2>Not found</h2>");
    }
    response.end();
  })
  .listen(3000);

var http = require("http") // Import Node.js core module

var server = http.createServer(function (req, res) {
  //create web server
    console.log("Req: %o",req.url)
  switch (req.url) {
    case "/":
      // set response header
      res.writeHead(200, { "Content-Type": "text/html" })

      // set response content
      res.write("<html><body><img src='img/stewie.jpg'><p>Victory is mine!</p></body></html>")
      res.end()
      break
    case "/student":
      res.writeHead(200, { "Content-Type": "text/html" })
      res.write("<html><body><p>This is student Page.</p></body></html>")
      res.end()
      break

    case "/admin":
      res.writeHead(200, { "Content-Type": "text/html" })
      res.write("<html><body><p>This is admin Page.</p></body></html>")
      res.end()
      break
    default:
      res.end("Invalid Request!")
      break
  }
})

server.listen(5000) //6 - listen for any incoming requests

console.log("Node.js web server at port 5000 is running..")

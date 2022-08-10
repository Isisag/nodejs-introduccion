const http = require("http");
const PORT = "5050";

// metodo para crear un servidor | recibe un callback con request y response
const server = http.createServer((req, res) => {
  console.log("method", req.method); // entrega el metodo para llamar al server
  console.log("URL", req.url); //url de la cual se llama el sv



    res.setHeader('Content-Type', "application/json")
    res.writeHead(200)

    return res.end(JSON.stringify({
        message: `You have use a get method with the URL:  ${req.url}`,
        message2: `You have use a ${req.method} method`,
        url: req.url
    }));
  

  

});

server.listen(PORT, () => {
  console.log(`Server runing at port: ${PORT}`);
});

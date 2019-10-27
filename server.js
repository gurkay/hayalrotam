// console.log('hello');
/*
Now we get the basic node and the express app set up, it's not very powerful yet but we'll get there.
I want to improve the server.js file, simply to add some error handling and better output and attached
to this codes, you'll find a file with the content I'm about to paste in and I'll replace the entire
content in the server.js file with that code, it's a bit more but I will walk you through it.
Now I'm still importing app and my http package, so make sure that path to your app file is correct
by the way as you see and as you saw in the last lecture if you omit .js. And then I got this normalized
port function, a bit of a more elaborate function that simply makes sure that when we try to set up a port
and especially when we receive it through an environment variable, we actually make sure it's a valid number
if we want to use it. Then I got an onError function here which will simply check which type of error
occurred and well, log something different and exit gracefully from our nodejs server. We've got onListening,

Accessing process env port or setting 3000 as a value, here as a string,
you could pass a number too but I'm using a string here because the value
we receive here typically would be a string. I'm setting this on my express app,
we set up that node server and then I register it to listeners, one for errors
that might occur where we will use the error handler here and one for whenever
we start listening, well then I will simply call onListening and these are
simply executed to tell us if something went wrong with starting a server or
if everything went smooth and then I do start the server.

*/
const app = require("./backend/app");
const debug = require("debug")("node-angular");
const http = require("http");

const normalizePort = val => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

const onError = error => {const app = require("./backend/app");
  const debug = require("debug")("node-angular");
  const http = require("http");

  const normalizePort = val => {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
      // named pipe
      return val;
    }

    if (port >= 0) {
      // port number
      return port;
    }

    return false;
  };

  const onError = error => {
    if (error.syscall !== "listen") {
      throw error;
    }
    const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
    switch (error.code) {
      case "EACCES":
        console.error(bind + " requires elevated privileges");
        process.exit(1);
        break;
      case "EADDRINUSE":
        console.error(bind + " is already in use");
        process.exit(1);
        break;
      default:
        throw error;
    }
  };

  const onListening = () => {
    const addr = server.address();
    const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
    debug("Listening on " + bind);
  };

  const port = normalizePort(process.env.PORT || "3000");
  app.set("port", port);

  const server = http.createServer(app);
  server.on("error", onError);
  server.on("listening", onListening);
  server.listen(port);

    if (error.syscall !== "listen") {
      throw error;
    }
    const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
    switch (error.code) {
      case "EACCES":
        console.error(bind + " requires elevated privileges");
        process.exit(1);
        break;
      case "EADDRINUSE":
        console.error(bind + " is already in use");
        process.exit(1);
        break;
      default:
        throw error;
    }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
  debug("Listening on " + bind);
};

const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port);

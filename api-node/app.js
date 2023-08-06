const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const { SerialPort } = require("serialport");
const { ReadlineParser } = require("@serialport/parser-readline");

const httpServer = createServer(express);
const io = new Server(httpServer, {
  cors: true,
  origins: ["*"],
});
const port = new SerialPort({ path: "/dev/cu.usbserial-1410", baudRate: 9600 });
// const port = new SerialPort({ path: "COM6", baudRate: 9600 });
const parserInfo = port.pipe(new ReadlineParser({ delimiter: "\n" }));

parserInfo.on("data", (line) => {
  console.log(line);
  io.emit("lap", line);
});

httpServer.listen(3000, () => console.log("SOCKET is running on port 3000"));

//======================== API
const routers = require("./api");
const { sequelize } = require("./models");

const app = express();

app.use(express.json());
app.use("/", routers);

// sequelize.sync().then(() => {
//   console.log("conectado com o banco de dados.");
// });

app.listen(3100, () => console.log("API is running on port 3100"));

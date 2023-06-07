const net = require("net");

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243', // IP address here,
    port: '50541'// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    conn.write("Name: TCB");
  });

  conn.on("connect", () => {
    let timer = 0;
    while (timer < 1000) {
      setTimeout(() => {
        conn.write("Move: left");
      }, timer);
      timer += 50;
    }
  });

  conn.on("data", (message) => {
    console.log(message);
  });



  return conn;
};

module.exports = {
  connect,
  setupInput
};
const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243', // IP address here,
    port: '50541'// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on("connect", (message) => {
    console.log(message);
  });

  conn.on("connect", () => {
    conn.write("Name: TCB");
  });

  conn.on("data", () => {
    console.log('Success!');
  });



  return conn;
};

module.exports = {
  connect
};
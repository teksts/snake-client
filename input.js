let connection;


const setupInput = (conn) => {
  connection = conn;
  const handleUserInput = (key) => {
    if (key === 'w') {
      connection.write("Move: up");
    }
    if (key === 'a') {
      connection.write("Move: left");
    }
    if (key === 's') {
      connection.write("Move: down");
    }
    if (key === 'd') {
      connection.write("Move: right");
    }
    if (key === 'r') {
      connection.write("Say: pwned!");
    }
    if (key === 'q') {
      connection.write("Say: oops..");
    }
    if (key === 'x') {
      connection.write("Say: i love snek");
    }
    if (key === '\u0003') {
      process.exit();
    }
  };
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = {
  setupInput
};

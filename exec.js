const cp = require("child_process");

// cp.exec("start https://www.linkedin.com/learning"); // use start for windows and open for mac

cp.exec("ls", (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data);
});
const cp = require("child_process");

const questionApp = cp.spawn("node", ["question.js"]);

questionApp.stdin.write("Paul \n");
questionApp.stdin.write("Glasgow \n");
questionApp.stdin.write("To change the world \n");

questionApp.stdout.on("data", data => {
    console.log(`from the question app: ${data}`);
});

questionApp.on("close", () => {
    console.log(`questionApp process exited`);
});
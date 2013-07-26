//index.js

var jayson = require("jayson");

//HellowWorld
function HellowWorld(message, callback) {
    console.log(message);
    callback(null, { "code": 0 });
}

//daily
function ImportDailyReport(args, opt, callback) {
    console.log("ImportDailyReport");
    console.log(args);
    console.log(opt);

    callback(null, { "code" : 0 });
}

//report
function ImportReport(args, opt, callback) {
    console.log("ImportReport");
    console.log(args);
    console.log(opt);

    callback(null, { "code" : 0 });
}

//project
function ImportProject(args, opt, callback) {
    console.log("ImportProject");
    console.log(args);
    console.log(opt);

    callback(null, { "code" : 0 });
}

var server = jayson.server({
    HellowWorld        :HellowWorld,
    ImportDailyReport  :ImportDailyReport,
    ImportReport       :ImportReport,
    ImportProject      :ImportProject
});

server.http().listen(3000);
console.log("listen start.");


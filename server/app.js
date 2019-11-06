(function () {

    require("./initialize/index");
    require("./models/index");
    require("./routes/index");

    http.createServer(app).listen(app.get("PORT"), function () {
        log("Employee Feedback Server Started");
    });
})();
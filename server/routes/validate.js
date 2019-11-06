(function () {

    app.get("/validate/employee", function (req, resp) {
        log("/validate/employee");
        var employeeName = req.body.employeeName || req.query.employeeName || req.params["employeeName"];
        log(employeeName);
        var employeeList = require("./../data/employee.json");

        var message = { message: 'Employee Not Found', status: false };

        employeeList.forEach(function (tuple) {

            if (tuple.employeeName == employeeName) {

                if (tuple.isManager) {
                    message = { message: 'Logging In As A Manager', status: true, isManager: true };
                } else {
                    message = { message: 'Logging In As A Employee', status: true, isManager: false };

                }

            }

        })

        resp.send({ message });
    });


    app.get("/current/employee", function (req, resp) {
        log("/current/employee");
        var employeeName = req.body.employeeName || req.query.employeeName || req.params["employeeName"];
        log(employeeName);
        var employeeList = require("./../data/employee.json");

        var message = { message: 'Employee Details Not Found', status: false, data: undefined };

        employeeList.forEach(function (tuple) {

            if (tuple.employeeName == employeeName) {

                message = { message: 'Current Employee Details', status: true, data: tuple };
            }

        })

        resp.send({ message });
    });

    app.get("/current/all/employee", function (req, resp) {
        log("/current/employee");
        var employeeList = require("./../data/employee.json");

        var message = { message: 'No Employee Found', status: false, data: undefined };
        var list = [];
        if (employeeList.length != 0) {
            employeeList.forEach(function (tuple) {

                if (!tuple.isManager) {
                    list.push(tuple);
                    message = { message: 'Employee Found', status: true, data: list };
                }
            });
        }
        resp.send({ message });
    });

})()
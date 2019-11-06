app.service("empManager", ['$http', function ($http) {
    return {
        validate: function (credentials, cb) {
            $http({
                method: 'GET',
                params: { employeeName: credentials.employeeName },
                url: "/validate/employee"
            }).then(cb);
        },
        getCurrentEmployee: function (employeeName, cb) {
            $http({
                method: 'GET',
                params: { employeeName: employeeName },
                url: "/current/employee"
            }).then(cb);
        },
        getAll: function (cb) {
            $http({
                method: 'GET',
                url: "/current/all/employee"
            }).then(cb);
        },
        saveState: function (state) {
            log(state);
            if ('employeeState' in localStorage) {
                window.localStorage.removeItem("employeeState");
                window.localStorage.setItem("employeeState", JSON.stringify(state));
            }
            else {
                window.localStorage.setItem("employeeState", JSON.stringify(state));

            }
        },
        getState: function () {
            if ('employeeState' in localStorage)
                return JSON.parse(window.localStorage.employeeState);
        }
    }

}]);
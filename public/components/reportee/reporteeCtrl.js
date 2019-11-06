app.controller("reporteeCtrl", ['$scope', '$timeout', 'empManager', function ($scope, $timeout, empManager) {

    $timeout(function () {
        $scope.employeeState = empManager.getState();
        $scope.reporteeProgressBar = true;
        console.log($scope.employeeState);
        empManager.getCurrentEmployee($scope.employeeState.employeeName, function (resp) {

            console.warn("Employee Details :");
            console.log(resp);
            $timeout(function () {
                $scope.employeeDetails = resp.data.message.data;
                $scope.reporteeProgressBar = false;
                reporteeToast.show();
                $scope.reporteeToastMessage = "Logged In As A Reportee";
            });

        });

    });

    $scope.updateReportee = function () {
        $timeout(function () {
            reporteeToast.show();
            $scope.reporteeToastMessage = "Updated. Thank You";
        });

    }


}])
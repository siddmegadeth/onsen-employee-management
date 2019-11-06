app.controller("managerCtrl", ['$scope', '$timeout', 'empManager', function($scope, $timeout, empManager) {

    $scope.ifViewedByManager = true;
    $timeout(function() {
        $scope.employeeState = empManager.getState();
        $scope.reporteeProgressBar = true;
        console.log($scope.employeeState);
        empManager.getCurrentEmployee($scope.employeeState.employeeName, function(resp) {

            console.warn("Employee Details :");
            console.log(resp);
            $timeout(function() {
                $scope.employeeDetails = resp.data.message.data;
                $scope.reporteeProgressBar = false;
                managerToast.show();
                $scope.managerToastMessage = "Logged In As A Manager";
            });

        });

        empManager.getAll(function(resp) {
            console.warn("All Reportee Details :");
            console.log(resp);
            $timeout(function() {
                $scope.allReporteeList = resp.data.message.data;
            })
        });

    });

    $scope.deleteRating = function() {

        ons.notification.confirm({ message: 'Are You Sure You Want To Delete ' })
            .then(function(name) {});

    }

    $scope.editReportee = function() {
        ons.notification.confirm({ message: 'Edit Rating' })
            .then(function(name) {});
    }

    $scope.updateReportee = function() {

        $timeout(function() {
            reporteeRatingToast.show();
            $scope.reporteeRatingToastMessage = "Feedback Updated";
        })
    }


    $scope.openReporteeRating = function(tuple) {

        empManager.saveState(tuple);
        $scope.myNavigator.pushPage('reportee-rating.html', { animation: 'slide-md' });

    }


}])
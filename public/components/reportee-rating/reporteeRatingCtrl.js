app.controller("reporteeRatingCtrl", ['$scope', '$timeout', 'empManager', function($scope, $timeout, empManager) {





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

    $timeout(function() {
        $scope.reporteeRatingProgressBar = true;
        var tuple = empManager.getState();
        console.log(tuple);
        empManager.getCurrentEmployee(tuple.employeeName, function(resp) {

            console.warn("Employee Details For Feedback :");
            console.log(resp);
            $timeout(function() {
                $scope.employeeFeedback = resp.data.message.data;
                $scope.reporteeRatingProgressBar = false;
            });

        });

    });






}])
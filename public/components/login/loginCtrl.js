app.controller("loginCtrl", ['$scope', '$timeout', 'empManager', function ($scope, $timeout, empManager) {

    $scope.loginCredentials = {}

    $scope.validateLogin = function () {
        $scope.loginProgressBar = true;
        console.log("Form Validation Succes");
        console.log($scope.loginCredentials);
        if ($scope.loginCredentials.employeeName && $scope.loginCredentials.password) {

            // validate Employee Type
            empManager.validate($scope.loginCredentials, function (resp) {
                $scope.loginProgressBar = false;

                console.warn("Response From Validation");
                console.log(resp);

                if (resp.data.message.status) {



                    var state = { isManager: resp.data.message.isManager, employeeName: $scope.loginCredentials.employeeName };
                    empManager.saveState(state);

                    
                    if (resp.data.message.isManager) {
                        $timeout(function () {

                            $scope.myNavigator.pushPage('manager.html', { animation: 'lift-md' });
                        });
                    } else {
                        $timeout(function () {

                            $scope.myNavigator.pushPage('reportee.html', { animation: 'lift-md' });

                        });
                    }

                }
                else {

                    $timeout(function () {
                        loginToast.show();
                        $scope.loginToastMessage = resp.data.message.message;

                    });
                }

            });



        }
        else {
            $timeout(function () {
                loginToast.show();
                $scope.loginToastMessage = "Username/Password Is Required";
            });

        }

    }

}])
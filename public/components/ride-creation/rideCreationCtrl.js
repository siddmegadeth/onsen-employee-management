app.controller("rideCreationCtrl", ['$scope', function ($scope) {
    var mapInstance;
    mapInstance = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        zoom: 24
    });
    $scope.landingProgressBar = true;

    $scope.error = function (mapError) {
        console.error(mapError);
        $scope.landingProgressBar = false;

    };

    navigator.geolocation.getCurrentPosition(function (currentPosition) {
        log(currentPosition);



    }, $scope.error, { highAccuracy: true })



    var geolocate = new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
    });

    mapInstance.addControl(geolocate);

    mapInstance.addControl(new MapboxDirections({
        accessToken: mapboxgl.accessToken
    }), 'top-left');

    mapInstance.on('load', function () {
        log("geo Trigger MapBox")
        geolocate.trigger();
        mapInstance.setZoom(24);
        $scope.landingProgressBar = false;

    });

    mapInstance.on('click', function () {
        log("Map Click Trigger MapBox")
        mapInstance.getCenter();
    });
    geolocate.on('geolocate', function () {

        //Get the updated user location, this returns a javascript object.
        var userlocation = geolocate._lastKnownPosition;
        log("User Position On GeoLocate ");
        log(userlocation);
        //Your work here - Get coordinates like so
        var lat = userlocation.coords.latitude;
        var lng = userlocation.coords.longitude;

    });


    $scope.openFab = function () {
        $scope.myNavigator.pushPage('status.html', { animation: 'lift-ios' });
    }





    mapboxgl.accessToken = 'pk.eyJ1Ijoic2lkZG1lZ2FkZXRoIiwiYSI6ImNqaHZsZWQ5NjB4Z3ozdXQ2eHo3dXdjcDkifQ.eQi2MM-DO4eSdiyu4bu_2Q';



}])
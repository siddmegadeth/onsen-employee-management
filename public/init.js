var app = angular.module("myApp", ['onsen']);
var log = console.log.bind(console);
ons.ready(function () {

ons.platform.select('android');
})



app.config([function () {

}]);

app.run([function () {
    //mapboxgl.accessToken = 'pk.eyJ1Ijoic2lkZG1lZ2FkZXRoIiwiYSI6ImNqaHZsZWQ5NjB4Z3ozdXQ2eHo3dXdjcDkifQ.eQi2MM-DO4eSdiyu4bu_2Q';
}])
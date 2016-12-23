/**
 * Created by stevekelly on 10/11/16.
 */
(function(app) {
    app.RegionsComponent = function () {

        this.goTo = function(location) {
            window.location.href = location;
        };

    };

    app.RegionsComponent.annotations = [
        new ng.core.Component({
            selector: 'regions-comp',
            templateUrl: 'js/directives/regions.html',
            directives: []
        })
    ];
})(window.app || (window.app = {}));
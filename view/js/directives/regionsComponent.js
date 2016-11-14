/**
 * Created by stevekelly on 10/11/16.
 */
(function(app) {
    app.RegionsComponent = function () {

    };

    app.RegionsComponent.annotations = [
        new ng.core.Component({
            selector: 'regions-comp',
            templateUrl: 'js/directives/regions.html'
        })
    ];
})(window.app || (window.app = {}));
/**
 * Created by stevekelly on 10/11/16.
 */
(function(app) {
    app.AboutComponent = function () {

    };

    app.AboutComponent.annotations = [
        new ng.core.Component({
            selector: 'about-comp',
            templateUrl: 'js/directives/about.html'
        })
    ];
})(window.app || (window.app = {}));
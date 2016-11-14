/**
 * Created by stevekelly on 10/11/16.
 */
(function(app) {
    app.DonateComponent = function () {

    };

    app.DonateComponent.annotations = [
        new ng.core.Component({
            selector: 'donate-comp',
            templateUrl: 'js/directives/donate.html'
        })
    ];
})(window.app || (window.app = {}));
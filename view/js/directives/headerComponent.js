/**
 * Created by stevekelly on 10/11/16.
 */

(function(app) {
    app.HeaderComponent = function () {


    };

    app.HeaderComponent.annotations = [
        new ng.core.Component({
            selector: 'header-comp',
            templateUrl: 'js/directives/header.html',
            directives: []
        })
    ];
})(window.app || (window.app = {}));
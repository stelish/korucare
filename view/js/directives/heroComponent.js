/**
 * Created by stevekelly on 10/11/16.
 */
(function(app) {
    app.HeroComponent = function () {

    };

    app.HeroComponent.annotations = [
        new ng.core.Component({
            selector: 'hero-comp',
            templateUrl: 'js/directives/hero.html'
        })
    ];
})(window.app || (window.app = {}));
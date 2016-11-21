/**
 * Created by stevekelly on 10/11/16.
 */
(function(app) {
    app.FooterComponent = function () {
        this.goTo = function(location) {
            window.location.hash = location;
        };
    };

    app.FooterComponent.annotations = [
        new ng.core.Component({
            selector: 'footer-comp',
            templateUrl: 'js/directives/footer.html'
        })
    ];
})(window.app || (window.app = {}));
/**
 * Created by stevekelly on 10/11/16.
 */
(function(app) {
    app.FooterComponent = function () {

    };

    app.FooterComponent.annotations = [
        new ng.core.Component({
            selector: 'footer-comp',
            templateUrl: 'js/directives/footer.html'
        })
    ];
})(window.app || (window.app = {}));
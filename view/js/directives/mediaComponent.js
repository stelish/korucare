/**
 * Created by stevekelly on 10/11/16.
 */
(function(app) {
    app.MediaComponent = function () {

    };

    app.MediaComponent.annotations = [
        new ng.core.Component({
            selector: 'media-comp',
            templateUrl: 'js/directives/media.html'
        })
    ];
})(window.app || (window.app = {}));
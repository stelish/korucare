/**
 * Created by stevekelly on 19/11/16.
 */
(function(app) {
    app.ScrollDirective = function () {
    };

    app.ScrollDirective.annotations = [
        new ng.core.Component({
            selector: '[track-scroll]',
            host: {'(window:scroll)': 'track($event)'}
        })
    ];
})(window.app || (window.app = {}));
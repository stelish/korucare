/**
 * Created by stevekelly on 10/11/16.
 */
(function(app) {
    app.NewsComponent = function () {

    };

    app.NewsComponent.annotations = [
        new ng.core.Component({
            selector: 'news-comp',
            templateUrl: 'js/directives/news.html'
        })
    ];
})(window.app || (window.app = {}));
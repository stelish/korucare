/**
 * Created by stevekelly on 10/11/16.
 */
(function(app) {
    app.AppComponent = function () {

    };

    app.AppComponent.annotations = [
        new ng.core.Component({
            selector: 'my-app',
            template: '<div></div>',

            directives: [app.HeaderComponent,app.BodyContentComponent]
        })
    ];

    document.addEventListener('DOMContentLoaded', function() {
        ng.platformBrowserDynamic
            .platformBrowserDynamic().bootstrapModule(app.AppModule);
    });
})(window.app || (window.app = {}));
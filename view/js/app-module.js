/**
 * Created by stevekelly on 12/11/16.
 */
(function (app) {
    app.AppModule = function AppModule() {}

    app.AppModule.annotations = [
        new ng.core.NgModule({
            imports: [ng.platformBrowser.BrowserModule],
            declarations: [
                app.BodyContentComponent,
                app.HeaderComponent,
                app.HeroComponent,
                app.AboutComponent,
                app.RegionsComponent,
                app.MediaComponent,
                app.DonateComponent
            ],
            bootstrap: [app.BodyContentComponent]
        })
    ]
})(window.app || (window.app = {}));
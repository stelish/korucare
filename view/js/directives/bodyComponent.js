/**
 * Created by stevekelly on 10/11/16.
 */
(function(app) {
    app.BodyContentComponent = function () {

    };

    app.BodyContentComponent.annotations = [
        new ng.core.Component({
            selector: 'body-comp',
            template: '<div class="k-main">' +
                '<header-comp></header-comp>'+
                '<hero-comp></hero-comp>'+
                '<about-comp></about-comp>'+
                '<regions-comp></regions-comp>'+
                '<media-comp></media-comp>'+
                '<donate-comp></donate-comp>'+
            '</div>'
        })
    ];
})(window.app || (window.app = {}));
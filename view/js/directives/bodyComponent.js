/**
 * Created by stevekelly on 10/11/16.
 */
(function(app) {
    app.BodyContentComponent = function () {

    };

    document.body.onscroll = function() {
        console.log("scrolling");
    };

    app.BodyContentComponent.annotations = [
        new ng.core.Component({
            selector: 'body-comp',
            directives: [],
            template: '<div class="k-main">' +
                '<header-comp></header-comp>'+
                '<hero-comp></hero-comp>'+
                '<about-comp></about-comp>'+
                '<regions-comp></regions-comp>'+
                '<media-comp></media-comp>'+
                '<donate-comp></donate-comp>'+
                '<footer-comp></footer-comp>'+
            '</div>'
        })
    ];
})(window.app || (window.app = {}));
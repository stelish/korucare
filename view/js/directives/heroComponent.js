/**
 * Created by stevekelly on 10/11/16.
 */
(function(app) {
    app.HeroComponent = function () {
        var $scope = this;
        $scope.ind = 0;
        $scope.heroArr = [
            {
                caption: 'Lorem Ipsum',
                region: 'Auckland',
                img: 'img/auckland/Image1.jpg'
            },
            {
                caption: 'Lorem Ipsum',
                region: 'Dunedin',
                img: 'img/dunedin/20161013_191549.jpg'
            },
            {
                caption: 'Brooke Joyce',
                region: 'Christchurch',
                img: 'img/Air-NZ-Koru-Care-Flight-Brooke-Joyce-Christchurch.jpg'
            },
            {
                caption: 'Josef Winter',
                region: 'Paraparaumu',
                img: 'img/Air-NZ-Koru-Care-Flight-Josef-Winter-Paraparaumu.jpg'
            },
            {
                caption: 'Tyrese Whittaker',
                region: 'Caterton',
                img: 'img/Air-NZ-Koru-Care-Flight-Tyrese-Whittaker-Carterton.jpg'
            },

        ];
        $scope.heroObj = {
            caption: 'Tyrese Whittaker',
            region: 'Caterton',
            img: 'img/Air-NZ-Koru-Care-Flight-Tyrese-Whittaker-Carterton.jpg'
        };
        setInterval(changeHeroImage, 4000);
        function changeHeroImage() {
            var ind = $scope.ind < ($scope.heroArr.length - 1) ? $scope.ind + 1 : 0;
            $scope.heroObj = $scope.heroArr[ind];
            document.getElementById('hero-comp').style.background = 'url('+$scope.heroObj.img+') no-repeat center center';
            $scope.ind = ind;
        }
    };

    app.HeroComponent.annotations = [
        new ng.core.Component({
            selector: 'hero-comp',
            templateUrl: 'js/directives/hero.html'
        })
    ];
})(window.app || (window.app = {}));
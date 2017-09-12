var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Sample1;
(function (Sample1) {
    var Sample1Shell = (function (_super) {
        __extends(Sample1Shell, _super);
        function Sample1Shell(portalService) {
            var _this = _super.call(this, portalService, 'Angular Portal Azure - Sample1') || this;
            _this.portalService.panorama.startboard.tiles.showTiles = true;
            _this.portalService.panorama.avatarMenu.userAccount = new angularportalazure.UserAccount('useraccount@mail.com', 'first', 'last');
            {
                var tile = _this.portalService.panorama.startboard.tiles.addTile(new angularportalazure.Tile('Navigation 1', '/app/nav1/nav1.html', portalService));
                tile.subTitle = 'TypeScript based';
            }
            {
                var tile = _this.portalService.panorama.startboard.tiles.addTile(new angularportalazure.Tile('Grid 1', '/app/grid1/grid1.html', portalService));
                tile.subTitle = 'TypeScript based';
            }
            {
                var tile = _this.portalService.panorama.startboard.tiles.addTile(new angularportalazure.Tile('Blade 1-1', '/app/blade11/blade11.html', portalService));
                tile.subTitle = 'TypeScript based';
            }
            {
                var tile = _this.portalService.panorama.startboard.tiles.addTile(new angularportalazure.Tile('Blade 2', '/app/blade2/blade2.html', portalService));
                tile.subTitle = 'TypeScript based';
            }
            {
                var tile = _this.portalService.panorama.startboard.tiles.addTile(new angularportalazure.Tile('Blade 2-1', '/app/blade21/blade21.html', portalService));
                tile.subTitle = 'TypeScript based';
            }
            {
                var tile = _this.portalService.panorama.startboard.tiles.addTile(new angularportalazure.Tile('Detail 1', '/app/detail1/detail1.html', portalService));
                tile.subTitle = 'TypeScript based';
            }
            {
                var tile = _this.portalService.panorama.startboard.tiles.addTile(new angularportalazure.Tile('Detail 1 Notification', '/app/detail1notification/detail1notification.html', portalService));
                tile.subTitle = 'Notification Area';
            }
            _this.httpTestData();
            return _this;
        }
        // #endregion
        // #region Methods
        Sample1Shell.prototype.httpTestData = function () {
            var customers = new Array();
            customers.push(new Sample1.Customer(1001, 'Harry', 'Sleeper'));
            customers.push(new Sample1.Customer(1002, 'Eva', 'Cooker'));
            customers.push(new Sample1.Customer(1003, 'Niklas', 'Soccer'));
            customers.push(new Sample1.Customer(1004, 'Julia', 'Singer'));
        };
        return Sample1Shell;
    }(angularportalazure.PortalShell));
    // #region Constructor
    Sample1Shell.$inject = ['angularportalazure.portalService'];
    angular.module('sample1App').controller('sampleShell1', Sample1Shell);
})(Sample1 || (Sample1 = {}));

namespace Sample1 {
    class Sample1Shell extends angularportalazure.PortalShell {
        //#region Constructor

        static $inject = ['angularportalazure.portalService'];
        constructor(portalService: angularportalazure.PortalService) {
            super(portalService, 'Angular Portal Azure - Sample1');
            this.portalService.panorama.startboard.tiles.showTiles = true;

            this.portalService.panorama.avatarMenu.userAccount = new angularportalazure.UserAccount('useraccount@mail.com', 'first', 'last');

            {
                let tile = this.portalService.panorama.startboard.tiles.addTile(new angularportalazure.Tile('Navigation 1', '/app/nav1/nav1.html', portalService));
                tile.subTitle = 'TypeScript based';
            } {
                let tile = this.portalService.panorama.startboard.tiles.addTile(new angularportalazure.Tile('Grid 1', '/app/grid1/grid1.html', portalService));
                tile.subTitle = 'TypeScript based';
            } {
                let tile = this.portalService.panorama.startboard.tiles.addTile(new angularportalazure.Tile('Blade 1-1', '/app/blade11/blade11.html', portalService));
                tile.subTitle = 'TypeScript based';
            } {
                let tile = this.portalService.panorama.startboard.tiles.addTile(new angularportalazure.Tile('Blade 2', '/app/blade2/blade2.html', portalService));
                tile.subTitle = 'TypeScript based';
            } {
                let tile = this.portalService.panorama.startboard.tiles.addTile(new angularportalazure.Tile('Blade 2-1', '/app/blade21/blade21.html', portalService));
                tile.subTitle = 'TypeScript based';
            } {
                let tile = this.portalService.panorama.startboard.tiles.addTile(new angularportalazure.Tile('Detail 1', '/app/detail1/detail1.html', portalService));
                tile.subTitle = 'TypeScript based';
            }

            this.httpTestData();
        }

        //#endregion

        //#region Methods

        httpTestData() {
            let customers: Array<Sample1.Customer> = new Array<Sample1.Customer>();
            customers.push(new Sample1.Customer(1001, 'Harry', 'Sleeper'));
            customers.push(new Sample1.Customer(1002, 'Eva', 'Cooker'));
            customers.push(new Sample1.Customer(1003, 'Niklas', 'Soccer'));
            customers.push(new Sample1.Customer(1004, 'Julia', 'Singer'));
        }

        //#endregion
    }

    angular.module('sample1App').controller('sampleShell1', Sample1Shell);
}
import { Injectable } from '@angular/core';

import { IAddBladeEventArgs } from './iadd-blade-event-args';
import { PortalService } from './portal-service';
import { timeout } from 'q';
import { UserAccount } from './user-account';
import { UserControlBase } from './user-control-base';

export class Blade extends UserControlBase {
  // #region Constructor

  //constructor($scope: angular.IScope, portalService: PortalService, path: string, title: string, subtitle: string = '', width: number = 200) {
  constructor(portalService: PortalService, path: string, title: string, subtitle: string = '', width: number = 200) {
    //super($scope, portalService);
    super(portalService);

    this.vm = this;
    this.path = path;
    this.title = title;
    this.subTitle = subtitle;
    this.width.width = width + 'px';
    this.widthStackLayout.width = width - 50 + 'px';  // 50 = padding (left and right)

    if (!portalService) { throw new Error('[Blade] constructor parameter \'portalService\' must be provided.'); }
    if (!path) { throw new Error('[Blade] constructor parameter \'path\' must be a string.'); }
    if (!title && title !== '') { throw new Error('[Blade] constructor parameter \'title\' must be a string when provided.'); }
    if (!subtitle && subtitle !== '') { throw new Error('[Blade] constructor parameter \'subtitle\' must be a string when provided.'); }
    if (!width && width !== 0) { throw new Error('[Blade] constructor parameter \'width\' must be a number when provided.'); }

    if (width < 50) { throw new Error('[Blade] constructor parameter \'width\' must be at least 50.'); }

    // Set 'this.portalService.areaBlades.blades[index]' to 'this'
    //     'this.portalService.areaBlades.blades[index]' was generated during AddBlade
    this.portalService.areaBlades.blades.forEach((blade, index) => {
      if (blade.path != null && this.path != null && blade.path.toLowerCase() === this.path.toLowerCase()) {
        this.portalService.areaBlades.blades[index] = this;
      }
    });

    this.setupWindowResizeListener(() => { this.setBladeHeights(); });
    this.setBladeHeights();
  }

  // #endregion

  // #region Properties

  /** HACK: 2016-11-06/hp
  [angular-portal-blade] needs [this] as the controller.
  We don't know how to provide [this] to the directive.
  So we came up with this [vm] property.*/
  vm: any = {};

  // Indicates if maximize icon is shown
  // TODO: 2019-09-26/hp: it probably should be named isMaximizedShown
  isMaximize: boolean = false;

  // TODO: 2019-09-26/hp: not sure what that is, checkout
  isCommandMore: boolean = false;

  // Indicates if this is a navigation blade
  isNav: boolean = false;

  // Indicates if this is a navigation grid blade
  isGrid: boolean = false;

  visibility: string = 'collapse';

  private watcherTitle: () => void;

  bladeContentHeight: number;
  bladeContentHeightInner: number;

  title: string = '';
  subTitle: string = '';
  width = { 'width': '0' };
  widthStackLayout = { 'width': '50px' };

  isInnerHtml: boolean = true;

  formblade: any; // angular.IFormController; // name of the ng-form directive

  // #region path

  private _path: string;
  get path(): string {
    return this._path;
  }
  // For the moment we do distinguish between lower and upper case path name
  set path(newPath: string) {
    if (newPath == null) { return; }
    this._path = newPath.toLowerCase();
  }

  // #endregion

  // #endregion

  // #region Commands

  isCommandBrowse: boolean = false;
  isCommandBrowseEnabled: boolean = true;
  commandBrowse: () => void = () => { this.onCommandBrowse(); };
  commandBrowseText: string = '';

  isCommandCancel: boolean = false;
  isCommandCancelEnabled: boolean = true;
  commandCancel: () => void = () => { this.onCommandCancel(); };
  commandCancelText: string = '';

  isCommandCopy: boolean = false;
  isCommandCopyEnabled: boolean = true;
  commandCopy: () => void = () => { this.onCommandCopy(); };
  commandCopyText: string = '';

  isCommandDelete: boolean = false;
  isCommandDeleteEnabled: boolean = true;
  commandDelete: () => void = () => { this.onCommandDelete(); };
  commandDeleteText: string = '';

  isCommandDocument: boolean = false;
  isCommandDocumentEnabled: boolean = true;
  commandDocument: () => void = () => { this.onCommandDocument(); };
  commandDocumentText: string = '';

  isCommandDocument2: boolean = false;
  isCommandDocument2Enabled: boolean = true;
  commandDocument2: () => void = () => { this.onCommandDocument2(); };
  commandDocument2Text: string = '';

  isCommandDocument3: boolean = false;
  isCommandDocument3Enabled: boolean = true;
  commandDocument3: () => void = () => { this.onCommandDocument3(); };
  commandDocument3Text: string = '';

  isCommandDocument4: boolean = false;
  isCommandDocument4Enabled: boolean = true;
  commandDocument4: () => void = () => { this.onCommandDocument4(); };
  commandDocument4Text: string = '';

  isCommandDocument5: boolean = false;
  isCommandDocument5Enabled: boolean = true;
  commandDocument5: () => void = () => { this.onCommandDocument5(); };
  commandDocument5Text: string = '';

  isCommandNew: boolean = false;
  isCommandNewEnabled: boolean = true;
  commandNew: () => void = () => { this.onCommandNew(); };
  commandNewText: string = '';

  isCommandOrder: boolean = false;
  isCommandOrderEnabled: boolean = true;
  commandOrder: () => void = () => { this.onCommandOrder(); };
  commandOrderText: string = '';

  isCommandRestart: boolean = false;
  isCommandRestartEnabled: boolean = true;
  commandRestart: () => void = () => { this.onCommandRestart(); };
  commandRestartText: string = '';

  isCommandSave: boolean = false;
  isCommandSaveEnabled: boolean = true;
  commandSave: () => void = () => { this.onCommandSave(); };
  commandSaveText: string = '';

  isCommandSearch: boolean = false;
  isCommandSearchEnabled: boolean = true;
  commandSearch: () => void = () => { this.onCommandSearch(); };
  commandSearchText: string = '';

  isCommandStart: boolean = false;
  isCommandStartEnabled: boolean = true;
  commandStart: () => void = () => { this.onCommandStart(); };
  commandStartText: string = '';

  isCommandStop: boolean = false;
  isCommandStopEnabled: boolean = true;
  commandStop: () => void = () => { this.onCommandStop(); };
  commandStopText: string = '';

  isCommandSwap: boolean = false;
  isCommandSwapEnabled: boolean = true;
  commandSwap: () => void = () => { this.onCommandSwap(); };
  commandSwapText: string = '';

  isCommandExcel: boolean = false;
  isCommandExcelEnabled: boolean = true;
  commandExcel: () => void = () => { this.onCommandExcel(); };
  commandExcelText: string = '';

  // #endregion

  // #region Methods

  activate(): void {
    this.onActivate();
    this.onActivated();
  }

  navigateTo(path: any) {
    this.onNavigateTo(path);
  }

  /** Must be overridden. */
  onNavigateTo(value: any): void {
    throw new Error('[Blade] \'onNavigateTo\' is an abstract function. Define one in the derived class.');
  }

  // At the moment we do not distinguish between lower and upper case path name
  comparePaths(path1: string, path2: string): boolean {
    if (path1 == null) { return false; }
    if (path2 == null) { return false; }
    if (path1.toLowerCase() === path2.toLowerCase()) {
      return true;
    } else {
      return false;
    }
  }

  /** close blade. */
  close() {
    if (!this.onClose) {
      return; // do not close blade
    }

    if (this.portalService.areaBlades !== undefined) {
      this.portalService.areaBlades.clearPath(this.path);
    } else {
      throw new Error('[Blade] path: \'' + this.path + '\' could not be removed, since no \'this.portalService.areaBlades\' available.');
    }
  }

  /** Override */
  onClose(): boolean {
    return true;
  }

  // #region Commands

  onCommandBrowse(): void {
    throw new Error('[Blade] \'onCommandBrowse\' is an abstract function. Define one in the derived class.');
  }

  onCommandCancel(): void {
    throw new Error('[Blade] \'onCommandCancel\' is an abstract function. Define one in the derived class.');
  }

  onCommandCopy(): void {
    throw new Error('[Blade] \'onCommandCopy\' is an abstract function. Define one in the derived class.');
  }

  onCommandDelete(): void {
    throw new Error('[Blade] \'onCommandDelete\' is an abstract function. Define one in the derived class.');
  }

  onCommandDocument(): void {
    throw new Error('[Blade] \'onCommandDocument\' is an abstract function. Define one in the derived class.');
  }

  onCommandDocument2(): void {
    throw new Error('[Blade] \'onCommandDocument2\' is an abstract function. Define one in the derived class.');
  }

  onCommandDocument3(): void {
    throw new Error('[Blade] \'onCommandDocument3\' is an abstract function. Define one in the derived class.');
  }

  onCommandDocument4(): void {
    throw new Error('[Blade] \'onCommandDocument4\' is an abstract function. Define one in the derived class.');
  }

  onCommandDocument5(): void {
    throw new Error('[Blade] \'onCommandDocument5\' is an abstract function. Define one in the derived class.');
  }

  onCommandNew(): void {
    throw new Error('[Blade] \'onCommandNew\' is an abstract function. Define one in the derived class.');
  }

  onCommandOrder(): void {
    throw new Error('[Blade] \'onCommandOrder\' is an abstract function. Define one in the derived class.');
  }

  onCommandRestart(): void {
    throw new Error('[Blade] \'onCommandRestart\' is an abstract function. Define one in the derived class.');
  }

  onCommandSave(): void {
    throw new Error('[Blade] \'onCommandSave\' is an abstract function. Define one in the derived class.');
  }

  onCommandSearch(): void {
    throw new Error('[Blade] \'onCommandSearch\' is an abstract function. Define one in the derived class.');
  }

  onCommandStart(): void {
    throw new Error('[Blade] \'onCommandStart\' is an abstract function. Define one in the derived class.');
  }

  onCommandStop(): void {
    throw new Error('[Blade] \'onCommandStop\' is an abstract function. Define one in the derived class.');
  }

  onCommandSwap(): void {
    throw new Error('[Blade] \'onCommandSwap\' is an abstract function. Define one in the derived class.');
  }

  onCommandExcel(): void {
    throw new Error('[Blade] \'onCommandExcel\' is an abstract function. Define one in the derived class.');
  }

  // #endregion

  // #endregion

  /** Change title, as soon as watchExpression changes. watchExpression is either a variable ore an expression, e.g. [name1 + name2] */
  setTitle(watchExpression: string, func: () => void) {
    console.log('commented code at : Blade.setTitle');
    //if (this.watcherTitle === undefined) {
    //  if (this.$scope !== null) {
    //    // angular1
    //    this.watcherTitle = this.$scope.$watch(watchExpression, () => { func(); });
    //    this.$scope.$on('$destroy', () => { this.watcherTitle(); });
    //  } else {
    //    // angular2
    //    console.log('[Blade.setTitle()] not supported for angular2. use [ngOnChanges] instead.');
    //  }
    //}
  }

  private setBladeHeights(): void {
    this.bladeContentHeight = this.portalService.$window.innerHeight - 40 - 125; // 40 = topbar, 125 = blade header
    this.bladeContentHeightInner = this.bladeContentHeight - 50 - 3; // 50 = padding (top and bottom), somehow we miss 3px

    // this.portalService.$timeout(() => {
    // }, 50);
  }
}

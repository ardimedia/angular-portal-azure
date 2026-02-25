import { Component, inject } from '@angular/core';
import { PortalService } from '../../services/portal.service';
import { BladeService } from '../../services/blade.service';
import { TileComponent } from '../tile/tile.component';
import { PositionedTile } from '../../models/panorama.model';

/**
 * Panorama (startboard/dashboard) component.
 * Ported from the fxs-panorama-homearea section in home.html (v0.2.346).
 *
 * Displays tiles on the startboard. When a tile is clicked, it opens
 * the first blade via BladeService.setFirstBlade().
 *
 * Usage:
 * ```html
 * <apa-panorama />
 * ```
 */
@Component({
  selector: 'apa-panorama',
  standalone: true,
  imports: [TileComponent],
  styles: [`:host { display: contents; }`],
  template: `
    @if (portal.isPanoramaVisible()) {
      <div class="fxs-panorama-homearea" [class.collapsed]="!panorama().showTiles">
        <div class="fxs-startboard-target fxs-startboard fx-rightClick" [class.collapsed]="!panorama().showTiles">
          @if (panorama().tiles.length === 0 && panorama().isTilesLoaded) {
            <div class="fxs-part fxs-part-clickable" style="background-color:var(--apa-surface-raised); padding:25px; max-width:800px; margin-bottom:15px; height:auto;">
              <header class="fxs-part-title" style="color:var(--apa-text)">
                <h3 class="msportalfx-tooltip-overflow">Keine Applikationen zugeordnet</h3>
                <p class="msportalfx-tooltip-overflow" style="margin:0;padding:0">
                  Wende dich bitte an den Administrator, damit die Applikationen zugeordnet werden können.
                </p>
              </header>
            </div>
          }
          <div class="fxs-startboard-layout fxs-flowlayout">
            <div class="fxs-flowlayout-childcontainer">
              @for (tile of panorama().tiles; track tile.bladePath) {
                <apa-tile [tile]="tile" (tileClick)="onTileClick($event)" />
              }
            </div>
          </div>
        </div>
      </div>
    }
  `,
})
export class PanoramaComponent {
  protected readonly portal = inject(PortalService);
  private readonly bladeService = inject(BladeService);

  protected panorama = this.portal.panorama;

  onTileClick(tile: PositionedTile): void {
    this.bladeService.setFirstBlade(tile.bladePath, tile.title);
  }
}

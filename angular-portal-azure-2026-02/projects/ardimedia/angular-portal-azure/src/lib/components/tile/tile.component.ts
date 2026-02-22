import { Component, input, output } from '@angular/core';
import { PositionedTile } from '../../models/panorama.model';

/**
 * Individual dashboard tile.
 * Ported from the tile section in home.html (v0.2.346).
 *
 * Usage:
 * ```html
 * <apa-tile [tile]="myTile" (tileClick)="onTileClick($event)" />
 * ```
 */
@Component({
  selector: 'apa-tile',
  standalone: true,
  styles: [`:host { display: contents; }`],
  template: `
    <section
      class="fxs-tile fx-rightClick fxs-flowlayout-element"
      [class.fxs-tilesize-normal]="tile().size === 'normal'"
      [class.fxs-tilesize-mini]="tile().size === 'mini'"
      [class.fxs-tilesize-herowide]="tile().size === 'herowide'"
      [class.fxs-tilesize-small]="tile().size === 'small'">
      <div class="fxs-part fxs-part-clickable" (click)="onClick()" style="cursor:pointer;">
        <header class="fxs-part-title">
          <h2 class="msportalfx-tooltip-overflow">{{ tile().title }}</h2>
          @if (tile().subtitle) {
            <h3 class="msportalfx-tooltip-overflow">{{ tile().subtitle }}</h3>
          }
        </header>
        <section class="fxs-part-content css-scope-HubsExtension"></section>
      </div>
      <div class="fxs-tile-overlay"></div>
    </section>
  `,
})
export class TileComponent {
  readonly tile = input.required<PositionedTile>();
  readonly tileClick = output<PositionedTile>();

  onClick(): void {
    this.tileClick.emit(this.tile());
  }
}

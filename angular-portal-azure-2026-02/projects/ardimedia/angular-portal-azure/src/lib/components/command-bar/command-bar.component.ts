import { Component, input } from '@angular/core';
import { BladeCommand } from '../../models/blade-command.model';

/**
 * Command bar for a blade.
 * Ported from the fxs-commandBar section in blade.html (v0.2.346).
 *
 * Replaces the 18 individual command buttons with a dynamic BladeCommand[] array.
 *
 * Usage:
 * ```html
 * <apa-command-bar [commands]="blade.commands" />
 * ```
 */
@Component({
  selector: 'apa-command-bar',
  standalone: true,
  styles: [`:host { display: block; }`],
  template: `
    <div class="fxs-commandBar">
      <ul class="fxs-commandBar-itemList">
        @for (cmd of visibleCommands(); track cmd.key) {
          <li>
            <a class="fxs-commandBar-item"
               [class.apa-disable-click]="!cmd.enabled"
               (click)="onCommand(cmd)">
              <span class="fxs-commandBar-item-text">{{ cmd.label }}</span>
              @if (cmd.icon) {
                <span class="fxs-commandBar-item-icon apa-commandbar-icon">
                  <span [class]="cmd.icon"></span>
                </span>
              }
            </a>
          </li>
        }
      </ul>
    </div>
  `,
})
export class CommandBarComponent {
  readonly commands = input<BladeCommand[]>([]);

  visibleCommands(): BladeCommand[] {
    return this.commands().filter((c) => c.visible);
  }

  onCommand(cmd: BladeCommand): void {
    if (cmd.enabled && cmd.action) {
      cmd.action();
    }
  }
}

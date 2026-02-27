import { Component, input } from '@angular/core';
import { BladeDataDefinition } from '../../models/blade-data.model';
import { BladeCommand, createCommand } from '../../models/blade-command.model';

/**
 * Detail/edit blade content — renders a form area for editing an item.
 * Ported from BladeDetail<T> (v0.2.346).
 *
 * Provides a content projection area for forms. The blade's commands
 * (save, delete, cancel, new) are managed via the blade definition.
 *
 * This is a thin wrapper that projects content and provides
 * convenience methods for setting up typical detail blade commands.
 *
 * Usage:
 * ```html
 * <apa-blade [blade]="detailBlade">
 *   <apa-blade-detail [blade]="detailBlade">
 *     <form>
 *       <!-- form fields here -->
 *     </form>
 *   </apa-blade-detail>
 * </apa-blade>
 * ```
 */
@Component({
  selector: 'apa-blade-detail',
  standalone: true,
  styles: [`:host { display: flex; flex-direction: column; flex: 1; min-height: 0; }
    .apa-blade-detail { flex: 1; display: flex; flex-direction: column; min-height: 0; }`],
  template: `
    <div class="apa-blade-detail">
      <ng-content />
    </div>
  `,
})
export class BladeDetailComponent {
  readonly blade = input.required<BladeDataDefinition<any>>();
}

/**
 * Create standard detail blade commands (new, save, delete, cancel).
 * Convenience function for setting up typical detail/edit blade commands
 * matching the v0.2.346 BladeDetail default commands.
 */
export function createDetailCommands(handlers: {
  onNew?: () => void;
  onSave?: () => void;
  onDelete?: () => void;
  onCancel?: () => void;
}): BladeCommand[] {
  const commands: BladeCommand[] = [];

  if (handlers.onNew) {
    commands.push(createCommand('new', 'neu', handlers.onNew, 'ti ti-plus'));
  }
  if (handlers.onSave) {
    commands.push(createCommand('save', 'speichern', handlers.onSave, 'ti ti-device-floppy'));
  }
  if (handlers.onDelete) {
    commands.push(createCommand('delete', 'löschen', handlers.onDelete, 'ti ti-trash'));
  }
  if (handlers.onCancel) {
    commands.push(createCommand('cancel', 'abbrechen', handlers.onCancel, 'ti ti-x'));
  }

  return commands;
}
